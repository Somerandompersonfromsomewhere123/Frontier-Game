// ---- Voidbreakers: sampled sound, music, physics and ship wrecks (inserted next to ships.js by build3d.js) ----

// SAMPLED SOUND: Kenney "Sci-Fi Sounds" (CC0) clips embedded as $SFXD {file: base64 mp3}. A game sound with an entry here
// plays a random variant (slight pitch jitter) through the game's own gain/pan node; layer:1 keeps the synth underneath too.
var $SFXM = {
  pulse: { f: "laserSmall", v: .2 }, turret: { f: "laserSmall", v: .1, r: 1.3 }, plasma: { f: "laserLarge", v: .25 },
  heavy: { f: "laserLarge", v: .28, r: .75 }, rail: { f: "laserLarge", v: .32, r: .55, layer: 1 }, enemyShot: { f: "laserRetro", v: .1 },
  hit: { f: "impactMetal", v: .2 }, crit: { f: "impactMetal", v: .28, r: 1.2, layer: 1 }, shieldHit: { f: "forceField", v: .2 },
  explode: { f: "explosionCrunch", v: .4 }, explodeBig: { f: "lowFrequency_explosion", v: .55, layer: 1 }, rock: { f: "explosionCrunch", v: .14, r: .7 },
  warp: { f: "forceField", v: .3, r: .6, layer: 1 },
};
var $SFXB = null;
function $sfx(name, out, when) {
  const m = $SFXM[name];
  if (!m || !ht) return !1;
  if (!$SFXB) {
    $SFXB = {};
    for (const [k, b64] of Object.entries($SFXD)) {
      const bin = Uint8Array.from(atob(b64), (c) => c.charCodeAt(0)).buffer;
      ht.decodeAudioData(bin).then((buf) => { const f = k.replace(/_\d+$/, ""); ($SFXB[f] ||= []).push(buf); }).catch(() => {});
    }
  }
  const v = $SFXB[m.f];
  if (!v) return !1; // still decoding: the synth covers it
  const src = ht.createBufferSource(), g = ht.createGain();
  src.buffer = v[Math.floor(Math.random() * v.length)];
  src.playbackRate.value = (m.r || 1) * (.93 + Math.random() * .14);
  g.gain.value = m.v;
  src.connect(g).connect(out);
  src.start(when);
  return !m.layer;
}

// MUSIC: menu / battle / boss playlists ($MUSD, base64 mp3) crossfade on game state; each playlist starts on a random track
// and moves to the next when one ends. Settings > Music sets their volume
var $mus = null;
function $musicVol() { const s = S.save?.settings; return (s?.volume ?? 1) * (s?.music ?? .3); }
function $music() {
  if (!$mus) {
    $mus = {};
    const urls = $MUSD.tracks.map((b) => "data:audio/mpeg;base64," + b); // a track in several playlists is embedded once
    for (const k of ["menu", "battle", "boss"]) {
      const list = $MUSD[k], m = ($mus[k] = { i: Math.floor(Math.random() * list.length), list: list.map((t) => { const a = new Audio(urls[t]); a.loop = list.length === 1; a.volume = 0; return a; }) });
      for (const a of m.list) a.onended = () => { const v = a.volume; a.currentTime = 0; m.i = (m.i + 1) % m.list.length; m.list[m.i].volume = v; v > 0 && m.list[m.i].play().catch(() => {}); };
    }
    const el = document.getElementById("setMusic"), lab = document.getElementById("musVal");
    if (el) {
      el.value = String(S.save?.settings?.music ?? .3); lab.textContent = Math.round(el.value * 100) + "%";
      el.oninput = () => { S.save.settings.music = +el.value; lab.textContent = Math.round(el.value * 100) + "%"; Ft(Ct, S.save); };
    }
  }
  const run = S.player && S.run && S.state !== "menu", want = run ? (S.boss && !S.boss.dead ? "boss" : "battle") : "menu";
  const top = $musicVol() * (S.state === "pause" ? .35 : 1);
  for (const [k, m] of Object.entries($mus)) {
    const a = m.list[m.i], target = k === want ? top : 0;
    a.volume = Math.max(0, Math.min(1, a.volume + Math.sign(target - a.volume) * Math.min(Math.abs(target - a.volume), .04)));
    if (a.volume > 0 && a.paused) a.play().catch(() => {}); // blocked until the first click; retried every tick
    else if (a.volume === 0 && !a.paused) a.pause(), k !== want && (a.currentTime = 0);
  }
}
setInterval(() => { try { S.save && $music(); } catch (x) {} }, 100);

// PHYSICS
const $mass = (o) => Math.max(1, (o.r / 18) ** 2);
// knockback: every damaging hit with a source point pushes the target away, scaled by damage and the target's mass;
// rate-limited per target so beams and damage-over-time don't stack into a launch
function $kick(n, e, d, i) {
  if (i.x === void 0 || e.vx === void 0 || e.heavy || e.custom || e.isGen || e.proxy || n.boss === e || n.time - (e.$kt || -1) < .08) return;
  const dx = e.x - i.x, dz = e.z - i.z, l = Math.hypot(dx, dz);
  if (l < 1) return;
  e.$kt = n.time;
  const k = Math.min(e.team === "player" ? 110 : 280, d * 4) / $mass(e);
  e.vx += dx / l * k; e.vz += dz / l * k;
}
// ramming: momentum exchange along the contact normal (restitution .6); heavy targets act as walls
function $bump(p, t, nx, nz) {
  if (t.vx === void 0 || t.custom) return;
  const mt = t.heavy || t.isGen ? 1e9 : $mass(t), mp = $mass(p), rv = (p.vx - t.vx) * -nx + (p.vz - t.vz) * -nz;
  if (rv <= 0) return;
  const j = 1.6 * rv / (1 / mp + 1 / mt);
  p.vx -= j / mp * -nx; p.vz -= j / mp * -nz; t.vx += j / mt * -nx; t.vz += j / mt * -nz;
}
// asteroids collide with each other: positional separation plus an elastic impulse (restitution .5)
function $rockPhys(n) {
  const A = n.asteroids;
  for (let a = 0; a < A.length; a++) {
    const p = A[a];
    if (p.dead) continue;
    for (let b = a + 1; b < A.length; b++) {
      const q = A[b];
      if (q.dead) continue;
      const dx = q.x - p.x, dz = q.z - p.z, R = p.r + q.r, d2 = dx * dx + dz * dz;
      if (d2 >= R * R || d2 === 0) continue;
      const d = Math.sqrt(d2), nx = dx / d, nz = dz / d, mp = p.r * p.r, mq = q.r * q.r, o = R - d;
      p.x -= nx * o * mq / (mp + mq); p.z -= nz * o * mq / (mp + mq); q.x += nx * o * mp / (mp + mq); q.z += nz * o * mp / (mp + mq);
      const rv = (q.vx - p.vx) * nx + (q.vz - p.vz) * nz;
      if (rv >= 0) continue;
      const j = -1.5 * rv / (1 / mp + 1 / mq);
      p.vx -= j / mp * nx; p.vz -= j / mp * nz; q.vx += j / mq * nx; q.vz += j / mq * nz;
      p.wob = q.wob = 1;
    }
  }
}
// blast wave: radial push on ships and rocks, falling off with distance
function $blast(n, x, z, R, F, except) {
  const push = (o) => {
    if (o === except || o.dead || o.vx === void 0 || o.heavy || o.custom || n.boss === o) return;
    const dx = o.x - x, dz = o.z - z, l = Math.hypot(dx, dz);
    if (l < 1 || l > R) return;
    const k = F * (1 - l / R) / $mass(o);
    o.vx += dx / l * k; o.vz += dz / l * k;
  };
  $near(n, x, z, R, push);
  for (const r of n.asteroids) push(r);
}

// WRECKS: a dying enemy breaks into its real hull parts, which tumble out with its momentum, trail embers and sink away,
// under a layered explosion (flash, fireball, shockwave, sparks); bigger ships add delayed secondary blasts
var $WN = 0;
function $wreck(n, t, s) {
  const x = t.x, z = t.z;
  n.fx.flash(x, z, 0xffd9a0, 1 + s * .5, .1);
  n.fx.burst(x, z, { n: Math.round(16 + s * 14), color: 0xffa040, speed: 150 + s * 70, life: .55, size: 13 + s * 5, drag: 3 });
  n.fx.burst(x, z, { n: Math.round(8 + s * 6), color: 0xfff0b0, speed: 60, life: .3, size: 20 + s * 8, drag: 5 });
  n.fx.shockwave(x, z, 80 + s * 80, 0xff9a3c, .35);
  for (let q = 0; q < 3; q++) n.fx.sparks(x, z, Math.random() * 6.283, 0xffc070, 8);
  $blast(n, x, z, 110 + s * 90, 260 + s * 120, t);
  for (let q = 0; q < Math.min(4, Math.floor(s * 1.5)); q++) $Z.push({ k: "pop", t: 0, d: .12 + q * .14 + Math.random() * .1, x: x + (Math.random() - .5) * t.r * 2.2, z: z + (Math.random() - .5) * t.r * 2.2, s: .45 + Math.random() * .4 });
  const root = t.model?.root;
  if (!root || $WN > 90) return;
  root.updateMatrixWorld(!0);
  const parts = [];
  root.traverse((o) => { if (o.isMesh && o.visible && o.geometry && !o.material.transparent) { o.geometry.boundingSphere || o.geometry.computeBoundingSphere(); parts.push(o); } });
  parts.sort((a, b) => b.geometry.boundingSphere.radius * b.matrixWorld.getMaxScaleOnAxis() - a.geometry.boundingSphere.radius * a.matrixWorld.getMaxScaleOnAxis());
  const N = Math.min(parts.length, Math.max(3, Math.round(3 + s * 4)));
  for (const o of parts.slice(0, N * 2).sort(() => Math.random() - .5).slice(0, N)) {
    const c = new Pe(o.geometry, o.material);
    o.matrixWorld.decompose(c.position, c.quaternion, c.scale);
    n.scene.add(c); $WN++;
    const dx = c.position.x - x, dz = c.position.z - z, l = Math.hypot(dx, dz) || 1, sp = 90 + Math.random() * 220;
    $Z.push({ k: "chunk", t: 0, m: c, vx: t.vx * .6 + dx / l * sp + (Math.random() - .5) * 80, vz: t.vz * .6 + dz / l * sp + (Math.random() - .5) * 80, vy: 60 + Math.random() * 160,
      w: [(Math.random() - .5) * 9, (Math.random() - .5) * 9, (Math.random() - .5) * 9], life: 1.1 + Math.random() * .8, s0: c.scale.clone() });
  }
}
function $chunkU(n, z, t) {
  const c = z.m;
  z.life -= t; z.vy -= 420 * t; z.vx *= 1 - .6 * t; z.vz *= 1 - .6 * t;
  c.position.x += z.vx * t; c.position.y += z.vy * t; c.position.z += z.vz * t;
  c.rotation.x += z.w[0] * t; c.rotation.y += z.w[1] * t; c.rotation.z += z.w[2] * t;
  if (Math.random() < .6) n.fx.spawn(c.position.x, c.position.y, c.position.z, (Math.random() - .5) * 30, 20, (Math.random() - .5) * 30, .35 + Math.random() * .3, 7 + Math.random() * 6, .5, 1.6, .55 + Math.random() * .3, .15);
  z.life < .3 && c.scale.copy(z.s0).multiplyScalar(Math.max(.01, z.life / .3));
  if (z.life > 0) return !1;
  Math.random() < .5 && n.fx.burst(c.position.x, c.position.z, { n: 6, color: 0xffa040, speed: 90, life: .3, size: 8 });
  n.scene.remove(c); $WN--;
  return !0;
}
function $popU(n, z, t) {
  if ((z.d -= t) > 0) return !1;
  n.fx.burst(z.x, z.z, { n: Math.round(10 + z.s * 10), color: 0xff8a30, speed: 120, life: .4, size: 10 + z.s * 6, drag: 3 });
  n.fx.flash(z.x, z.z, 0xffd090, 1 + z.s, .08); n.fx.shockwave(z.x, z.z, 50 + z.s * 50, 0xff9a3c, .25);
  n.audio.play("explode", z.x, z.z, .45); n.shake(1.5);
  return !0;
}
// read-only probe for the headless harnesses (fxcheck.js)
window.$VBfx = () => ({ sky: $skyI, skyName: $SKYT[$skyI][0], sfx: $SFXB ? Object.values($SFXB).reduce((a, v) => a + v.length, 0) : 0, wrecks: $WN, music: $mus && Object.fromEntries(Object.entries($mus).map(([k, m]) => { const a = m.list[m.i]; return [k, { vol: +a.volume.toFixed(2), playing: !a.paused, len: Math.round(a.duration), track: m.i + 1 + "/" + m.list.length }]; })) });

// CLASS SHOT STYLES: energy, drone and missile ships get their own colour ramp (climbing with tier) instead of the shared
// assault ladder ($TC), plus a signature trail and impact that grow with tier ($ptrail / $pimpact, hooked into the projectile pool)
var $CLSC = {
  energy: [0, 0x4fd8ff, 0x4fd8ff, 0x4f9dff, 0x7a6bff, 0xa65bff, 0xd64dff, 0xf0a8ff],
  drone: [0, 0x3dffa8, 0x3dffa8, 0x2ff0d0, 0x5cff6e, 0xc8ff4a, 0xffd84a, 0xfff0a0],
  missile: [0, 0xff9a3d, 0xff9a3d, 0xff8a3d, 0xff6a2a, 0xff4a2a, 0xff2a55, 0xffe0c0],
};
function $ctc(w, t, c) {
  if (!w) return w;
  if ($CLSC[c]) return { ...w, color: $CLSC[c][t] ?? w.color, fx: c, tier: t };
  return /^(pulse|plasma|rail|beam|chain|orb)$/.test(w.kind) ? { ...w, color: $TC[t] } : w;
}
function $ptrail(e, p, dt) {
  if (p.look) return $look(e, p, dt);
  const k = p.tier || 2, c = p.color, x = p.x, z = p.z;
  if (p.fx === "energy") {
    // crackle: jittering sparks around the shot, and short lightning arcs off orbs
    Math.random() < .25 + k * .08 && e.fx.spawn(x + (Math.random() - .5) * 16, 5, z + (Math.random() - .5) * 16, (Math.random() - .5) * 120, 0, (Math.random() - .5) * 120, .18, 4 + k, 0, c.r * 2, c.g * 2, c.b * 2);
    if (p.kind === "orb" && (p.$arc = (p.$arc || 0) - dt) <= 0) {
      p.$arc = .16 - k * .012;
      const a = Math.random() * 6.283, L = 24 + k * 8 * (p.size || 1);
      e.arsenal.bolt(x, z, x + Math.cos(a) * L, z + Math.sin(a) * L, c.getHex(), 1 + k * .2);
    }
  } else if (p.fx === "drone") {
    // tracer: evenly spaced dots that hang in place briefly
    if ((p.$dot = (p.$dot || 0) - dt) <= 0) { p.$dot = .022; e.fx.spawn(x, 4, z, 0, 0, 0, .12 + k * .03, 3 + k * .7, 0, c.r * 1.6, c.g * 1.6, c.b * 1.6); }
  } else if (p.fx === "missile" && p.kind === "missile") {
    // hotter, thicker exhaust: a white-hot core and extra smoke at higher tiers
    const bx = x - Math.cos(p.angle) * 9, bz = z - Math.sin(p.angle) * 9;
    e.fx.spawn(bx, 4, bz, -p.vx * .05, 0, -p.vz * .05, .12, 5 + k, 0, 1.8, 1.5, 1.1);
    k >= 4 && Math.random() < .5 && e.fx.spawn(bx, 4, bz, (Math.random() - .5) * 30, 6, (Math.random() - .5) * 30, .9, 6 + k, 14, .1, .09, .12);
  }
}
function $pimpact(e, p, x, z) {
  if (p.look) return $lookHit(e, p, x, z);
  const k = p.tier || 2, c = p.color.getHex();
  if (p.fx === "energy") {
    for (let q = 0; q < 1 + (k >> 1); q++) { const a = Math.random() * 6.283, L = 20 + k * 6; e.arsenal.bolt(x, z, x + Math.cos(a) * L, z + Math.sin(a) * L, c, 1.2); }
    k >= 5 && e.fx.shockwave(x, z, 30 + k * 6, c, .2);
  } else if (p.fx === "drone") {
    e.fx.burst(x, z, { n: 3 + k, color: c, speed: 220, life: .18, size: 3 + k * .4 });
  } else if (p.fx === "missile") {
    e.fx.burst(x, z, { n: 6 + k * 2, color: 0xffa040, speed: 110 + k * 15, life: .35, size: 8 + k, drag: 3 });
    k >= 4 && e.fx.shockwave(x, z, 30 + k * 10, c, .25);
  }
}
window.$VBfxEnd = (k) => { const m = $mus[k], a = m.list[m.i]; a.currentTime = Math.max(0, a.duration - .3); }; // smoke.js: skip to a track's end
// run reset (hooked next to the game's own fx.clear): drop wreck chunks, Halo Breaker rings, pops and afterimage clones
function $fxClear(n) {
  for (const p of $PB) n.scene.remove(p.$m), p.$m = null;
  $PB.clear();
  for (let i = $Z.length - 1; i >= 0; i--) {
    const z = $Z[i];
    if (z.k === "chunk") n.scene.remove(z.m), $WN--;
    else if (z.k === "halo") n.scene.remove(z.g);
    else if (z.k === "comet") n.scene.remove(z.g), $CN--;
    else if (z.g3) n.scene.remove(z.g3); // T7 spores, swarm gates and mites (ships.js)
    else if (z.k !== "pop" && z.k !== "after") continue;
    $Z.splice(i, 1);
  }
  for (const D of $AI.splice(0)) n.scene.remove(D.m.root);
}

// VOID COMETS (Void Sovereign primary, weapon kind "comet"): dark-violet comets with white-hot cores weave toward enemies on a
// double-helix trail; each hit bursts the comet into two smaller ones that hunt new targets (two generations deep)
var $CG = null, $CN = 0;
function $cometMesh(n, s) {
  $CG ||= { core: new Rt(1, 10, 8), halo: new Rt(1, 12, 10), cm: new Ye({ color: new ge(0xffffff).multiplyScalar(4) }),
    hm: new Ye({ color: new ge(0xa64dff).multiplyScalar(2.2), transparent: !0, opacity: .55, blending: 2, depthWrite: !1 }) };
  const g = new Mt(), c = new Pe($CG.core, $CG.cm), h = new Pe($CG.halo, $CG.hm);
  c.scale.setScalar(5 * s); h.scale.setScalar(13 * s); g.add(h, c); n.scene.add(g);
  return g;
}
function $cometTarget(n, x, z, R, hits) {
  let b = null, bd = R;
  const f = (en) => { if (hits.has(en)) return; const d = Math.hypot(en.x - x, en.z - z); d < bd && ((bd = d), (b = en)); };
  $near(n, x, z, R, f);
  if (!b) for (const r of n.asteroids) !r.dead && f(r); // rocks only when no ship is in reach, so comets mine
  return b;
}
function $cometSpawn(n, x, z, a, w, gen, hits, target) {
  if ($CN >= 70) return;
  $CN++;
  const s = [1, .72, .5][gen];
  $Z.push({ k: "comet", t: 0, x, z, a, sp: 880 + gen * 120, life: 1.7 - gen * .3, age: 0, gen, s, dmg: w.dmg * [1, .55, .35][gen], w, hits, target, g: $cometMesh(n, s), ph: Math.random() * 6.283 });
}
function $comets(n, e, w, muz) {
  const tgt = $cometTarget(n, n.input.wx, n.input.wz, 420, new Set()), N = w.count || 3;
  for (let q = 0; q < N; q++) {
    const m = muz[q % muz.length], a = e.angle + (N > 1 ? (q / (N - 1) - .5) * .5 : 0);
    $cometSpawn(n, m.x, m.z, a, w, 0, new Set(), tgt);
    n.fx.muzzle(m.x, 4, m.z, a, 0xc070ff, 1.4);
  }
  n.fx.flash(e.x, e.z, 0xa64dff, 1.2, .08);
  n.audio.play("plasma", e.x, e.z, .6);
}
function $cometU(n, z, t) {
  z.age += t; z.life -= t;
  if ((!z.target || z.target.dead) && z.age > .12) z.target = $cometTarget(n, z.x, z.z, 650, z.hits);
  if (z.target) z.a = Fn(z.a, xt(z.x, z.z, z.target.x, z.target.z), (5 + z.gen * 2) * t);
  const weave = Math.sin(z.age * 13 + z.ph) * .55, h = z.a + weave * Math.min(1, z.age * 4);
  z.x += Math.cos(h) * z.sp * t; z.z += Math.sin(h) * z.sp * t;
  z.g.position.set(z.x, 12, z.z); z.g.children[0].scale.setScalar(13 * z.s * (1 + .15 * Math.sin(z.age * 30)));
  // double helix: two violet strands spiralling around the path, plus white embers off the core
  const px = -Math.sin(z.a), pz = Math.cos(z.a), o = Math.sin(z.age * 26 + z.ph) * 10 * z.s;
  for (const sg of [1, -1]) n.fx.spawn(z.x + px * o * sg, 10, z.z + pz * o * sg, 0, 0, 0, .3 + z.s * .15, 7 * z.s + 3, 0, sg > 0 ? 1.1 : .7, .35, 2);
  Math.random() < .5 && n.fx.spawn(z.x, 12, z.z, (Math.random() - .5) * 90, 0, (Math.random() - .5) * 90, .2, 4, 0, 2, 1.7, 2.2);
  let hit = null;
  const f = (en) => { if (!hit && !en.dead && !z.hits.has(en) && Math.hypot(en.x - z.x, en.z - z.z) < (en.r || 20) + 12 * z.s) hit = en; };
  $near(n, z.x, z.z, 60 + 14 * z.s, f);
  if (!hit) for (const r of n.asteroids) f(r);
  if (!hit && z.life > 0) return !1;
  n.scene.remove(z.g); $CN--;
  if (!hit) { n.fx.burst(z.x, z.z, { n: 8, color: 0xa64dff, speed: 120, life: .3, size: 6 }); return !0; }
  yn(n, hit, z.dmg, { x: z.x, z: z.z, fromPlayer: !0 });
  z.hits.add(hit);
  n.fx.burst(z.x, z.z, { n: 14 - z.gen * 4, color: 0xc070ff, speed: 260, life: .35, size: 8 * z.s + 3 });
  n.fx.shockwave(z.x, z.z, 50 * z.s + 20, 0xa64dff, .25);
  n.fx.flash(z.x, z.z, 0xe0b0ff, 1 + z.s, .07);
  n.audio.play("hit", z.x, z.z, .5);
  if (z.gen < 2) for (const d of [-1, 1]) $cometSpawn(n, z.x, z.z, z.a + d * (.9 + Math.random() * .4), z.w, z.gen + 1, new Set(z.hits), null);
  else n.shake(1);
  return !0;
}
