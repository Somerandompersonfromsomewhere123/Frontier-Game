// ---- Voidbreakers: extra bosses (inserted into the game bundle; uses its three.js and game helpers) ----
// Boss waves rotate: Eclipse Dreadnought, then the eight below, then repeat with more HP.
var $BC = 16723274; // hostile crimson
function $mat(c, glow) { return glow ? yt(c, glow) : Lt(c, { panel: 6, metal: .75, rough: .4 }); }
// a model-based boss hull from $M3 (Viktor Hahn ships), scaled to length L
function $bossModel(key, L) {
  const D = $M3[key], g = new Mt(), W = Math.max(D.mx[0] - D.mn[0], D.mx[2] - D.mn[2]), k = L / W, inner = new Mt();
  for (const [geo, m] of $m3M(key)) inner.add(new Pe(geo, m));
  inner.scale.setScalar(k);
  inner.position.set(-(D.mx[0] + D.mn[0]) / 2 * k, -(D.mx[1] + D.mn[1]) / 2 * k, -(D.mx[2] + D.mn[2]) / 2 * k);
  g.add(inner);
  return { g, w: (D.mx[2] - D.mn[2]) * k };
}
// procedural hulls: flat extruded plates, boxes, barrels and glowing cores
const $PROC = {
  spire(L) { // HIVE SPIRE: hexagonal core with a spinning ring of six drone pods
    const g = new Mt(), dark = $mat(2763320), mid = $mat(5918530), hot = $mat($BC, 3);
    q(new bt(L * .16, L * .2, L * .12, 6), dark, 0, 0, 0, g);
    q(new bt(L * .1, L * .14, L * .2, 6), mid, 0, L * .06, 0, g);
    q(new Rt(L * .07, 16, 10), hot, 0, L * .17, 0, g);
    const ring = new Mt(); g.add(ring);
    const tor = q(new jt(L * .36, L * .025, 8, 48), mid, 0, 0, 0, ring); tor.rotation.x = Math.PI / 2;
    for (let i = 0; i < 6; i++) {
      const a = i / 6 * Math.PI * 2, x = Math.cos(a) * L * .36, z = Math.sin(a) * L * .36;
      q(Ke(L * .12, L * .07, L * .12, 2), dark, x, 0, z, ring);
      q(new Rt(L * .03, 10, 8), hot, x, L * .045, z, ring);
      const arm = q(Ke(L * .3, L * .03, L * .035, 1), dark, Math.cos(a) * L * .2, 0, Math.sin(a) * L * .2, ring); arm.rotation.y = -a;
    }
    return { g, w: L * .84, spin: (e) => (ring.rotation.y += e * .6) };
  },
  bastion(L) { // IRON BASTION: armoured fortress block with four heavy turrets
    const g = new Mt(), dark = $mat(3355443), mid = $mat(6316128), hot = $mat($BC, 2.6);
    q(Ut([[L * .5, 0], [L * .38, L * .22], [-L * .45, L * .26], [-L * .5, L * .18], [-L * .5, -L * .18], [-L * .45, -L * .26], [L * .38, -L * .22]], L * .1, 3), dark, 0, 0, 0, g);
    q(Ke(L * .6, L * .08, L * .3, 3), mid, -L * .05, L * .08, 0, g);
    q(Ke(L * .2, L * .1, L * .16, 2), dark, -L * .18, L * .16, 0, g);
    for (const z of [-1, 1]) q(Ke(L * .5, L * .025, L * .02, 1), hot, -L * .05, L * .055, z * L * .16, g);
    const turrets = [];
    for (const [x, z] of [[L * .22, L * .1], [L * .22, -L * .1], [-L * .3, L * .14], [-L * .3, -L * .14]]) {
      const t = new Mt(); t.position.set(x, L * .1, z);
      q(new bt(L * .05, L * .06, L * .04, 8), dark, 0, 0, 0, t);
      for (const s of [-1, 1]) q(_t(L * .012, L * .01, L * .14, 6), mid, L * .07, L * .02, s * L * .018, t);
      q(new Rt(L * .016, 8, 6), hot, 0, L * .03, 0, t);
      g.add(t); turrets.push(t);
    }
    return { g, w: L * .52, turrets };
  },
  eater(L) { // STAR EATER: a ring station around a burning core
    const g = new Mt(), dark = $mat(2368548), mid = $mat(5263440), hot = $mat($BC, 3.2), core = $mat(16750899, 3.5);
    const outer = new Mt(); g.add(outer);
    const t1 = q(new jt(L * .42, L * .06, 10, 64), dark, 0, 0, 0, outer); t1.rotation.x = Math.PI / 2;
    const t2 = q(new jt(L * .3, L * .025, 8, 64), mid, 0, 0, 0, outer); t2.rotation.x = Math.PI / 2;
    for (let i = 0; i < 8; i++) {
      const a = i / 8 * Math.PI * 2;
      const s = q(Ke(L * .16, L * .04, L * .04, 1), dark, Math.cos(a) * L * .36, 0, Math.sin(a) * L * .36, outer); s.rotation.y = -a;
      q(new Rt(L * .022, 8, 6), hot, Math.cos(a) * L * .45, L * .03, Math.sin(a) * L * .45, outer);
    }
    const c = q(new Rt(L * .14, 24, 16), core, 0, 0, 0, g);
    q(new Rt(L * .19, 24, 16), new Ye({ color: new ge($BC).multiplyScalar(1.6), transparent: !0, opacity: .25, depthWrite: !1, blending: Tt }), 0, 0, 0, g);
    return { g, w: L * .96, spin: (e, time) => { outer.rotation.y -= e * .25; c.scale.setScalar(1 + Math.sin(time * 4) * .06); } };
  },
  reaper(L) { // TWIN REAPER: catamaran hull with scythe blades
    const g = new Mt(), dark = $mat(2631720), mid = $mat(5592405), hot = $mat($BC, 3);
    for (const z of [-1, 1]) {
      q(Ut([[L * .5, 0], [L * .2, L * .06], [-L * .45, L * .05], [-L * .5, 0], [-L * .45, -L * .05], [L * .2, -L * .06]], L * .07, 2), dark, 0, 0, z * L * .16, g);
      q(Ke(L * .6, L * .02, L * .02, 1), hot, -L * .05, L * .045, z * L * .16, g);
      const blade = q(Ut([[L * .3, 0], [L * .05, L * .28], [-L * .12, L * .3], [-L * .02, L * .1], [-L * .1, 0]], L * .025, 1), mid, 0, 0, z * L * .2, g);
      z < 0 && (blade.scale.z = -1);
    }
    q(Ke(L * .3, L * .05, L * .3, 2), mid, -L * .05, 0, 0, g);
    q(new Rt(L * .05, 14, 10), hot, -L * .05, L * .04, 0, g);
    return { g, w: L * .9 };
  },
  serpent(L) { // VOID LEVIATHAN head; its body segments are built separately and trail behind
    const g = new Mt(), dark = $mat(2763320), hot = $mat($BC, 3);
    q(Ut([[L * .22, 0], [L * .1, L * .1], [-L * .12, L * .12], [-L * .14, -L * .12], [L * .1, -L * .1]], L * .08, 2), dark, 0, 0, 0, g);
    for (const z of [-1, 1]) q(new Rt(L * .025, 10, 8), hot, L * .12, L * .04, z * L * .05, g);
    for (const z of [-1, 1]) { const m = q(new ii(L * .025, L * .12, 6), $mat(5263440), L * .2, 0, z * L * .08, g); m.rotation.z = -Math.PI / 2; }
    return { g, w: L * .26 };
  },
};
function $segment(L, i) {
  const g = new Mt(), s = L * (.2 - i * .008), dark = $mat(2763320), mid = $mat(4868682), hot = $mat($BC, 2.6);
  q(new bt(s * .5, s * .55, s * .3, 8), dark, 0, 0, 0, g);
  q(Ke(s * .7, s * .12, s * 1.1, 2), mid, 0, s * .12, 0, g);
  q(new Rt(s * .12, 8, 6), hot, 0, s * .22, 0, g);
  for (const z of [-1, 1]) { const f = q(new ii(s * .08, s * .4, 5), dark, 0, 0, z * s * .7, g); f.rotation.x = z * Math.PI / 2; }
  return g;
}
const $wpn = {
  bolt: (c, dmg = 16) => ({ kind: "pulse", dmg, speed: 900, life: 1.9, count: 1, spread: 0, color: c, len: 46 }),
  shell: (c, dmg = 12) => ({ kind: "plasma", dmg, speed: 320, life: 5, count: 1, spread: 0, color: c, size: 1.5, splash: 0 }),
  missile: (c, dmg = 14) => ({ kind: "missile", dmg, speed: 430, life: 4, turn: 2.3, count: 1, spread: 0, color: c, splash: 30 }),
};
// attacks: each runs when its cooldown ends; `ph` = first phase that uses it
const $ATK = {
  ring(n, t, A) { const c = A.n || 18, w = $wpn.shell(t.col, A.dmg); for (let i = 0; i < c; i++) { const a = i / c * Math.PI * 2 + n.time, r = t.w * .45; n.weapons.fire({ x: t.x, z: t.z }, w, a, [{ x: t.x + Math.cos(a) * r, z: t.z + Math.sin(a) * r }], "enemy", { fx: !1 }); } n.fx.shockwave(t.x, t.z, t.w, t.col, .6); n.audio.play("heavy", t.x, t.z); },
  fan(n, t, A, s) { const w = { ...$wpn.bolt(t.col, A.dmg), count: A.n || 5, spread: A.sp || .5 }; for (const [lx, lz] of A.from || [[t.L * .45, 0]]) { const p = Bt(t.x, t.z, t.angle, lx, lz); n.weapons.fire({ x: p.x, z: p.z }, w, xt(p.x, p.z, s.x, s.z), [{ x: p.x, z: p.z }], "enemy", { sound: "enemyShot" }); } },
  missiles(n, t, A, s) { const w = $wpn.missile(16738954, A.dmg); for (let i = 0; i < (A.n || 6); i++) { const lz = (i % 2 ? 1 : -1) * t.w * .35, p = Bt(t.x, t.z, t.angle, -t.L * .1 + i * 8, lz); n.weapons.fire({ x: p.x, z: p.z }, w, t.angle + (lz > 0 ? 1.3 : -1.3), [{ x: p.x, z: p.z }], "enemy", { target: s, fx: i === 0 }); } n.audio.play("missile", t.x, t.z); },
  spiral(n, t, A) { t.spA = (t.spA || 0) + (A.step || .4); const w = $wpn.bolt(t.col, A.dmg || 10); for (let k = 0; k < (A.n || 3); k++) { const a = t.spA + k / (A.n || 3) * Math.PI * 2, r = t.w * .4; n.weapons.fire({ x: t.x, z: t.z }, w, a, [{ x: t.x + Math.cos(a) * r, z: t.z + Math.sin(a) * r }], "enemy", { fx: !1 }); } },
  drones(n, t, A) { if (n.enemies.filter((e) => !e.dead && !e.custom).length > 16) return; for (let i = 0; i < (A.n || 3); i++) { const p = Bt(t.x, t.z, t.angle, -t.L * .3, (i - 1) * 90); Yo(n, A.kind || "drone", p.x, p.z, 1 + (n.director.wave / 5 - 1) * .3); } },
  beam(n, t) { t.beamWarm = 1.1; },
  charge(n, t, A, s) { t.dashT = .9; t.dashA = xt(t.x, t.z, s.x, s.z); n.audio.play("warp", t.x, t.z, .6); n.fx.shockwave(t.x, t.z, t.w, t.col, .4); },
  vortex(n, t) { t.pullT = 2.6; n.ui.toast(t.title, "Gravity well: thrust away from the core!"); },
};
function $spawnBoss(n, hp) {
  const roster = $BOSS.length + 1, idx = ((Math.round(n.director.wave / 5) - 1) % roster + roster) % roster;
  if (idx === 0) return $bossName("ECLIPSE DREADNOUGHT"), Up(n, hp);
  return $gbSpawn(n, $BOSS[idx - 1], hp);
}
function $gbSpawn(n, B, hp) {
  const i = n.player, a0 = Math.random() * Math.PI * 2;
  let x = i.x + Math.cos(a0) * 1000, z = i.z + Math.sin(a0) * 1000;
  const o = Math.hypot(x, z); o > 2500 && ((x *= 2500 / o), (z *= 2500 / o));
  const built = B.model ? $bossModel(B.model, B.L) : $PROC[B.proc](B.L), wrap = new Mt(), root = new Mt();
  root.add(built.g); wrap.add(root); n.scene.add(wrap);
  const shield = Vi(B.L * .55, B.col || $BC, .3); root.add(shield);
  const t = {
    custom: !0, keep: !0, boss: !0, gb: !0, team: "enemy", title: B.title, desc: B.desc, col: B.col || $BC,
    model: { root: wrap }, head: root, built, L: B.L, w: built.w, x, z, vx: 0, vz: 0, angle: xt(x, z, i.x, i.z), r: built.w * .45,
    hp: B.hp * hp, maxHp: B.hp * hp, shield: 0, maxShield: 0, phase: 1, introT: 3.2, dying: 0, dead: !1, heavy: !0,
    gens: [], lanes: [], speed: B.speed || 70, range: (B.range || 650) * .65, turn: B.turn || .3, shieldMesh: shield,
    atk: B.atk.map((A) => ({ ...A, t: A.first ?? A.cd * .6 })),
    die() { this.dying = 2.6; this.dead = !0; n.timeScale = .4; n.audio.play("explodeBig"); },
  };
  t.beam = ou(n.scene, t.col); t.beamCore = ou(n.scene, 16777215);
  // hit zones along the hull so the whole ship takes damage, not just its centre
  const zones = Math.max(1, Math.round(B.L / (built.w * .9)));
  t.parts = Array.from({ length: zones }, (_, k) => ({ custom: !0, keep: !0, team: "enemy", proxy: t, untargetable: !0, dead: !1, lx: zones === 1 ? 0 : (k / (zones - 1) - .5) * B.L * .8, lz: 0, r: built.w * .45, x, z }));
  if (B.proc === "serpent") { // body segments trail the head; each is its own hit zone
    t.trail = []; t.segs = [];
    for (let k = 0; k < 9; k++) { const sg = $segment(B.L, k); wrap.add(sg); const p = { custom: !0, keep: !0, team: "enemy", proxy: t, untargetable: !0, dead: !1, free: !0, r: B.L * .1, x, z, mesh: sg }; t.segs.push(p); t.parts.push(p); }
  }
  n.enemies.push(t, ...t.parts); n.boss = t;
  root.position.set(x, 0, z); root.rotation.y = -t.angle;
  $bossName(t.title);
  n.fx.flash(x, z, t.col, 5, 1, 120); n.fx.shockwave(x, z, 700, t.col, 1.4);
  n.fx.burst(x, z, { n: 120, color: 16738954, speed: 900, life: 1, size: 10, drag: 2 });
  n.audio.play("warp"); n.audio.play("alarm"); n.cinematic(x, z, 3.2, 1.9);
  n.ui.titleCard(t.title, t.desc);
  return t;
}
function $bossName(s) { const e = document.getElementById("bossName"); e && (e.textContent = s); }
function $gbU(n, t, e) {
  const s = n.player, root = t.head;
  if (t.dying > 0) {
    t.dying -= e / Math.max(n.timeScale, .1) * .5;
    if (Math.random() < .5) { const h = Bt(t.x, t.z, t.angle, (Math.random() - .5) * t.L, (Math.random() - .5) * t.w); n.fx.explosion(h.x, h.z, 1 + Math.random() * 1.5, Math.random() < .5 ? 16747069 : t.col); n.audio.play("explode", h.x, h.z, .6); n.shake(6); }
    root.position.y -= e * 8; root.rotation.z += e * .05;
    t.beam.material.opacity = t.beamCore.material.opacity = 0;
    if (t.dying <= 0) { n.R.zoomTarget = em(s); $bossName("ECLIPSE DREADNOUGHT"); FM(n, t); }
    return;
  }
  t.invuln = t.introT;
  n.R.zoomTarget += (em(s) * 1.75 - n.R.zoomTarget) * Math.min(1, e * 1.5);
  if (t.introT > 0) { t.introT -= e; root.scale.setScalar(.2 + Math.min(1, (3.2 - t.introT) / 1) * .8); } else root.scale.setScalar(1);
  const r = Math.hypot(s.x - t.x, s.z - t.z), a = xt(t.x, t.z, s.x, s.z);
  const ph = t.hp < t.maxHp * .33 ? 3 : t.hp < t.maxHp * .66 ? 2 : 1;
  if (ph > t.phase) { t.phase = ph; n.ui.banner(t.title, ph === 2 ? "Enraged: attacks speed up." : "Critical: every weapon online."); n.fx.shockwave(t.x, t.z, 500, t.col, 1); n.shake(14); n.audio.play("alarm"); }
  if (t.dashT > 0) { // charge attack: a fast straight run that rams the player
    t.dashT -= e; t.vx = Math.cos(t.dashA) * 950; t.vz = Math.sin(t.dashA) * 950;
    if (r < t.w * .5 + s.r && !s.dead && !(t.hitP > 0)) { yn(n, s, 45, { x: t.x, z: t.z }); t.hitP = .6; n.shake(12); }
  } else {
    const l = r > t.range + 100 ? 1 : r < t.range - 150 ? -.6 : 0;
    t.vx += (Math.cos(a) * t.speed * l - t.vx) * e; t.vz += (Math.sin(a) * t.speed * l - t.vz) * e;
  }
  t.hitP = (t.hitP || 0) - e;
  t.x += t.vx * e; t.z += t.vz * e;
  const R = Math.hypot(t.x, t.z); R > 2750 && ((t.x *= 2750 / R), (t.z *= 2750 / R));
  if (!(t.beamT > 0)) t.angle = Wt(Fn(t.angle, t.dashT > 0 ? t.dashA : a, t.turn * e));
  for (const h of t.parts) h.free || Bt(t.x, t.z, t.angle, h.lx, h.lz, h);
  if (t.segs) { // leviathan body follows the path of the head
    t.trail.unshift({ x: t.x, z: t.z }); t.trail.length > 400 && t.trail.pop();
    let dist = 0, k = 0, last = t.trail[0];
    for (let j = 1; j < t.trail.length && k < t.segs.length; j++) {
      dist += Math.hypot(t.trail[j].x - last.x, t.trail[j].z - last.z); last = t.trail[j];
      if (dist >= (k + 1) * t.L * .17) { const p = t.segs[k], nx = t.trail[j - 1]; p.x = last.x; p.z = last.z; p.mesh.position.set(p.x, 0, p.z); p.mesh.rotation.y = -xt(p.x, p.z, nx.x, nx.z); k++; }
    }
    for (; k < t.segs.length; k++) { const p = t.segs[k]; p.x = t.x; p.z = t.z; p.mesh.position.set(t.x, -200, t.z); }
  }
  root.position.set(t.x, 0, t.z); root.rotation.y = -t.angle;
  t.built.spin && t.built.spin(e, n.time);
  for (const tr of t.built.turrets || []) tr.rotation.y = -(a - t.angle);
  t.shieldMesh.userData.update(e, t.introT > 0 ? 1 : 0); t.shieldMesh.visible = t.shieldMesh.material.uniforms.uAlpha.value > .01;
  if (t.pullT > 0 && !s.dead) { t.pullT -= e; const d = Math.max(r, 1); s.vx += (t.x - s.x) / d * 520 * e; s.vz += (t.z - s.z) / d * 520 * e; n.frame % 3 === 0 && n.fx.spawn(s.x, 4, s.z, (t.x - s.x) * .6, 0, (t.z - s.z) * .6, .5, 8, 0, 1, .3, .4); }
  if (t.introT > 0 || s.dead) { t.beam.material.opacity = t.beamCore.material.opacity = 0; return; }
  const f = ph === 3 ? .55 : ph === 2 ? .75 : 1;
  for (const A of t.atk) { if ((A.ph || 1) > ph) continue; A.t -= e; if (A.t <= 0) { A.t = A.cd * f; $ATK[A.k](n, t, A, s, a); } }
  // telegraphed sweeping beam
  const h = Bt(t.x, t.z, t.angle, t.L * .45, 0);
  if (t.beamWarm > 0) {
    t.beamWarm -= e; const d = 1 - t.beamWarm / 1.1;
    t.beam.position.set(h.x, 3, h.z); t.beam.rotation.y = -t.angle; t.beam.scale.set(1600, 1, 4 + d * 6); t.beam.material.opacity = .2 + d * .4; t.beamCore.material.opacity = 0;
    if (t.beamWarm <= 0) { t.beamT = 2.6; t.beamA0 = t.angle - .7; n.audio.play("beam", t.x, t.z); }
  } else if (t.beamT > 0) {
    t.beamT -= e; const d = t.beamA0 + (1 - t.beamT / 2.6) * 1.4; t.angle = d;
    t.beam.position.set(h.x, 4, h.z); t.beam.rotation.y = -d; t.beam.scale.set(1600, 1, 54 + Math.sin(n.time * 50) * 6); t.beam.material.opacity = .75;
    t.beamCore.position.set(h.x, 5, h.z); t.beamCore.rotation.y = -d; t.beamCore.scale.set(1600, 1, 16); t.beamCore.material.opacity = .9; n.shake(2);
    const c = Math.cos(d), sn = Math.sin(d), hit = (y) => { const gx = y.x - h.x, gz = y.z - h.z, along = gx * c + gz * sn; return along > 0 && along < 1600 && Math.abs(-gx * sn + gz * c) < 28 + y.r; };
    hit(s) && yn(n, s, 70 * e, { x: h.x, z: h.z, silent: n.frame % 6 !== 0 });
    for (const y of n.asteroids) !y.dead && hit(y) && yn(n, y, 250 * e, { silent: !0 });
    t.beamT <= 0 && (t.beam.material.opacity = t.beamCore.material.opacity = 0);
  } else t.beam.material.opacity = t.beamCore.material.opacity = 0;
}
// roster: 3 from free models, 5 procedural
var $BOSS = [
  { title: "HIVE CARRIER", desc: "Its hangars never stop launching. Kill it before the swarm grows.", model: "@carrier", L: 620, hp: 7000, speed: 55, range: 750,
    atk: [{ k: "drones", cd: 8, n: 4 }, { k: "missiles", cd: 4.5, n: 6 }, { k: "fan", cd: 2.4, n: 5, sp: .5 }, { k: "ring", cd: 6, n: 20, ph: 2 }, { k: "drones", cd: 9, n: 2, kind: "interceptor", ph: 3 }] },
  { title: "HIVE SPIRE", desc: "A spinning ring of drone pods around an exposed core.", proc: "spire", L: 560, hp: 7600, speed: 45, range: 600,
    atk: [{ k: "spiral", cd: .22, n: 3, step: .35 }, { k: "drones", cd: 7, n: 3 }, { k: "ring", cd: 5, n: 24, ph: 2 }, { k: "spiral", cd: .3, n: 2, step: -.5, ph: 3 }] },
  { title: "CRIMSON LANCE", desc: "A spinal beam ship. Stay out of the red line.", model: "@lance", L: 680, hp: 8200, speed: 75, range: 800, turn: .35,
    atk: [{ k: "beam", cd: 8, first: 4 }, { k: "fan", cd: 1.8, n: 3, sp: .25 }, { k: "missiles", cd: 6, n: 4, ph: 2 }, { k: "ring", cd: 5, n: 16, ph: 3 }] },
  { title: "IRON BASTION", desc: "Four heavy turrets and armour plating. Flank it.", proc: "bastion", L: 600, hp: 9500, speed: 40, range: 650,
    atk: [{ k: "fan", cd: 1.6, n: 3, sp: .3, from: [[132, 60], [132, -60], [-180, 84], [-180, -84]] }, { k: "missiles", cd: 5, n: 8 }, { k: "ring", cd: 6.5, n: 22, ph: 2 }, { k: "drones", cd: 10, n: 2, kind: "frigate", ph: 3 }] },
  { title: "ASH WARDEN", desc: "A gunship that fills the sky with spirals of fire.", model: "@warden", L: 540, hp: 8600, speed: 85, range: 620,
    atk: [{ k: "spiral", cd: .18, n: 4, step: .3 }, { k: "fan", cd: 2.6, n: 7, sp: .7 }, { k: "drones", cd: 9, n: 3, kind: "interceptor", ph: 2 }, { k: "beam", cd: 9, ph: 3 }] },
  { title: "STAR EATER", desc: "A ring station with a captive star. Its gravity pulls you in.", proc: "eater", L: 620, hp: 10000, speed: 35, range: 700,
    atk: [{ k: "vortex", cd: 11, first: 6 }, { k: "ring", cd: 3.6, n: 26 }, { k: "beam", cd: 9, ph: 2 }, { k: "spiral", cd: .25, n: 4, step: .45, ph: 3 }] },
  { title: "TWIN REAPER", desc: "A blade-winged hunter that rams. Dash sideways when it charges.", proc: "reaper", L: 560, hp: 9000, speed: 110, range: 550, turn: .6,
    atk: [{ k: "charge", cd: 6, first: 3.5 }, { k: "fan", cd: 1.4, n: 4, sp: .4, from: [[250, 90], [250, -90]] }, { k: "spiral", cd: .3, n: 3, step: .5, ph: 2 }, { k: "missiles", cd: 5, n: 6, ph: 3 }] },
  { title: "VOID LEVIATHAN", desc: "A serpent of armoured segments. Every segment can be hit.", proc: "serpent", L: 700, hp: 11000, speed: 140, range: 450, turn: .9,
    atk: [{ k: "ring", cd: 4, n: 18 }, { k: "missiles", cd: 5, n: 6 }, { k: "drones", cd: 9, n: 3, ph: 2 }, { k: "spiral", cd: .25, n: 3, step: .4, ph: 3 }] },
];
