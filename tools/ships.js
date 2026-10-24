// ---- Voidbreakers: gun meshes for tier 1-4 hulls, and the two new tier 7 ships (inserted into the game bundle) ----
function $usesGun(w) { return w && (w.kind === "pulse" || w.kind === "plasma" || w.kind === "missile" || w.kind === "rail" && w.count > 1); }
// a mount, a barrel along angle a and a glowing tip; returns the muzzle at the barrel's end
function $gun(e, x, y, z, len, r, a, dk, gl) {
  const g = new Mt(); g.position.set(x, y, z); g.rotation.y = -a;
  q(new bt(r * 2.2, r * 2.6, r * 1.6, 8), dk, 0, 0, 0, g);
  q(_t(r, r * .85, len, 6), dk, len / 2, r * 1.4, 0, g);
  q(new Rt(r * .9, 6, 4), gl, len, r * 1.4, 0, g);
  e.add(g);
  return ut(x + Math.cos(a) * len, y + r * 1.4, z + Math.sin(a) * len);
}
// Quaternius hulls (tiers 1-4 and Starbreaker): guns sit on hardpoints measured from the hull at build time ($QH),
// so shots leave from a barrel on the ship, never from empty space. Same rules as the tier 5-6 builder.
function $armQ(n, id, S, H) {
  const d = He[id], P = d.primary, Q = d.secondary, e = n.body, dk = Lt(2896185, { panel: 3 }), gl = yt(Xt[d.cls].color, 2.6), Y = (v) => 2 + v * S;
  const rail = (w) => w && w.kind === "rail";
  n.nose = ut(H.nose[0] * S, Y(H.nose[1]) + S * .01, 0);
  if ($usesGun(P)) for (const z of [1, -1]) n.muzzles.push($gun(e, H.wing[0] * S, Y(H.wing[2]), z * H.wing[1] * S, S * (rail(P) ? .14 : .09), S * .012, 0, dk, gl));
  else n.muzzles.push(n.nose.clone());
  if ($usesGun(Q)) for (const z of [1, -1]) n.muzzles2.push($gun(e, H.pod[0] * S, Y(H.pod[2]), z * H.pod[1] * S, S * .07, S * .011, 0, dk, gl));
  else n.muzzles2.push(ut(n.nose.x * .95, n.nose.y, 0));
  // beam, chain, orb and single rail fire from the nose: a spinal emitter on the centreline
  if (!$usesGun(P) || !$usesGun(Q)) { const L = S * ([P, Q].some((w) => w && (w.kind === "beam" || rail(w))) ? .22 : .1); $gun(e, n.nose.x - L, n.nose.y - S * .01, 0, L, S * .014, 0, dk, gl); }
  n.dirGuns = [];
  for (const w of [P, Q]) for (const a of (w && w.dirs) || []) if (a) { const E = H.edge.at(Math.round(Wt(a) / (Math.PI * 2) * 16 + 16) % 16); n.dirGuns.push({ a, p: $gun(e, E[0] * S * .96, Y(E[2]), E[1] * S * .96, S * .06, S * .011, a, dk, gl) }); }
}
function $turret(n, x, y, z, S, dk) {
  const g = new Mt(); g.position.set(x, y, z);
  q(new bt(S * .035, S * .042, S * .02, 8), dk, 0, 0, 0, g);
  q(Ke(S * .065, S * .03, S * .05, 1), dk, S * .006, S * .022, 0, g);
  for (const s of [1, -1]) q(_t(S * .007, S * .006, S * .08, 6), dk, S * .06, S * .024, s * S * .012, g);
  n.body.add(g); n.turrets.push(g);
}

// STARCORE (heavy, tier 7): a long dreadnought built around a caged star, four engine blocks at the stern
function $starcore(id) {
  const d = He[id], S = 84 * (.9 + .13 * d.tier), col = Xt[d.cls].color, n = Zn(S * .4, col), e = n.body;
  const dk = Lt(2763322, { panel: 6, metal: .75, rough: .4 }), mid = Lt(4870730, { panel: 5, metal: .7, rough: .45 });
  const star = yt(10482943, 1.4), cyan = yt(4646655, 1.5), acc = yt(col, 1.2), P = (pts) => pts.map(([x, z]) => [x * S, z * S]);
  q(Ut(P([[.5, 0], [.46, .055], [.2, .075], [.1, .19], [-.3, .21], [-.42, .27], [-.5, .27], [-.5, -.27], [-.42, -.27], [-.3, -.21], [.1, -.19], [.2, -.075], [.46, -.055]]), S * .035, S * .008), dk, 0, -S * .07, 0, e);
  // prow spine and rounded nose
  q(Ke(S * .5, S * .06, S * .1, S * .02), mid, S * .22, -S * .025, 0, e);
  q(new Rt(S * .05, 16, 10), mid, S * .46, -S * .025, 0, e).scale.set(1.2, .6, 1);
  // two hull beams run from the stern to mid-ship, with class-colour light strips
  for (const z of [-1, 1]) {
    q(Ke(S * .62, S * .08, S * .08, S * .02), dk, -S * .12, -S * .03, z * S * .15, e);
    q(Ke(S * .5, S * .006, S * .01, S * .002), acc, -S * .12, S * .012, z * S * .15, e);
    q(Ke(S * .18, S * .05, S * .09, S * .015), mid, S * .12, -S * .03, z * S * .17, e);
  }
  // the caged star: glowing core, a halo, two crossed gimbal rings and a flat arch over the top
  q(new Rt(S * .085, 24, 16), star, -S * .1, -S * .02, 0, e);
  q(new Rt(S * .11, 24, 16), new Ye({ color: new ge(7335167).multiplyScalar(1.6), transparent: !0, opacity: .08, depthWrite: !1, blending: Tt }), -S * .1, -S * .02, 0, e);
  for (const r of [.6, -.6]) q(new jt(S * .095, S * .008, 6, 32), mid, -S * .1, -S * .02, 0, e).rotation.y = r;
  q(new jt(S * .16, S * .016, 6, 32, Math.PI), mid, -S * .1, -S * .03, 0, e).scale.y = .35;
  // four engine blocks with glowing faces
  for (const z of [-.205, -.075, .075, .205]) {
    q(Ke(S * .16, S * .09, S * .11, S * .02), dk, -S * .42, -S * .04, z * S, e);
    q(Ke(S * .012, S * .065, S * .085, S * .004), cyan, -S * .502, -S * .04, z * S, e);
    n.engines.push(ut(-S * .51, -S * .04, z * S));
  }
  for (const [x, z] of [[.12, .17], [.12, -.17], [-.26, .24], [-.26, -.24]]) $turret(n, x * S, S * .015, z * S, S, dk);
  // forward pair beside the prow (wing slot) and the five other directions of the six-way guns
  for (const z of [1, -1]) n.muzzles.push($gun(e, S * .26, S * .01, z * S * .075, S * .17, S * .016, 0, dk, acc));
  n.dirGuns = [];
  for (const [a, x, z, y] of [[.4, .3, .09, .01], [-.4, .3, -.09, .01], [Math.PI, -.3, 0, .03], [Math.PI / 2, -.02, .19, .01], [-Math.PI / 2, -.02, -.19, .01]])
    n.dirGuns.push({ a, p: $gun(e, x * S, y * S, z * S, S * .12, S * .014, a, dk, acc) });
  // artillery mortar on the spine
  q(new bt(S * .04, S * .05, S * .035, 10), dk, S * .1, S * .01, 0, e);
  for (const z of [-1, 0, 1]) q(_t(S * .008, S * .008, S * .06, 6), mid, S * .13, S * .025, z * S * .02, e);
  n.muzzles2.push(ut(S * .16, S * .025, 0));
  n.nose = ut(S * .5, S * .01, 0);
  return n;
}

// TEMPEST (assault, tier 7): delta fighter from the paint blueprint, coordinates in blueprint pixels
function $tempest(id) {
  const d = He[id], S = 84 * (.9 + .13 * d.tier), col = Xt[d.cls].color, n = Zn(S * .4, col), e = n.body, k = S / 560;
  const X = (py) => (240 - py) * k, Z = (px) => (px - 440) * k, P = (pts) => pts.map(([px, py]) => [X(py), Z(px)]), mir = (pts) => pts.map(([px, py]) => [880 - px, py]).reverse();
  const dk = Lt(2763322, { panel: 6, metal: .75, rough: .4 }), mid = Lt(5000268, { panel: 5, metal: .7, rough: .4 });
  const acc = yt(col, 1.6), edge = yt(col, .7), hot = yt(16730669, 1.8);
  const plate = (pts, h, y, m) => q(Ut(P(pts), h, S * .004), m, 0, y, 0, e);
  // wide delta wings with class-colour leading edges
  for (const w of [[[405, 195], [163, 290], [353, 330]]]) for (const s of [w, mir(w)]) plate(s, S * .02, -S * .03, dk);
  for (const w of [[[405, 192], [163, 288], [178, 291], [409, 203]]]) for (const s of [w, mir(w)]) plate(s, S * .006, -S * .017, edge);
  // forward canard pods that carry the twin cannons
  for (const w of [[[388, 118], [265, 190], [295, 235], [400, 205]]]) for (const s of [w, mir(w)]) plate(s, S * .035, -S * .02, mid);
  // central dart fuselage with a raised ridge, and the tail section with its two notched engines
  plate([[440, 95], [528, 330], [353, 330]], S * .05, -S * .02, mid);
  plate([[440, 125], [488, 320], [392, 320]], S * .025, S * .01, dk);
  plate([[353, 330], [283, 408], [405, 445], [415, 428], [465, 428], [475, 445], [597, 408], [528, 330]], S * .045, -S * .025, mid);
  q(Ke(S * .06, S * .03, S * .06, S * .01), dk, X(442), -S * .025, 0, e);
  for (const px of [410, 470]) {
    q(Ke(S * .02, S * .03, S * .045, S * .005), hot, X(440), -S * .025, Z(px), e);
    n.engines.push(ut(X(452), -S * .025, Z(px)));
  }
  // canopy and spine block, with the spine railgun running past the nose
  q(new Rt(S * .035, 16, 10), edge, X(250), S * .03, 0, e).scale.set(1.8, .5, 1);
  q(Ke(140 * k, S * .04, 60 * k, S * .01), dk, X(130), S * .005, 0, e);
  q(_t(S * .012, S * .012, 182 * k, 8), mid, X(109), S * .03, 0, e);
  q(new Rt(S * .013, 8, 6), acc, X(18), S * .03, 0, e);
  n.nose = ut(X(18), S * .03, 0);
  for (const px of [321, 559]) n.muzzles.push($gun(e, X(190), S * .01, Z(px), S * .1, S * .011, 0, dk, acc));
  n.muzzles2.push(n.nose.clone());
  return n;
}

// AFTERIMAGE (Valkyrie Prime): dash toward the cursor, leaving two see-through clones that drift apart,
// pull enemy aim for 2.5 s (enemies pick targets through IM, which now counts live clones as closer), then explode
var $AI = [];
function $afterimage(n, M, w) {
  const a = M.angle, sx = -Math.sin(a), sz = Math.cos(a);
  for (const s of [1, -1]) {
    const m = ai(M.shipId);
    m.root.traverse((o) => { if (o.isMesh) { o.material = o.material.clone(); o.material.transparent = !0; o.material.opacity = .4; o.material.depthWrite = !1; } });
    const D = { x: M.x + sx * s * 50, z: M.z + sz * s * 50, vx: M.vx * .3 + sx * s * 90, vz: M.vz * .3 + sz * s * 90, angle: a, dead: !1, m };
    m.root.position.set(D.x, 0, D.z); m.root.rotation.y = -a;
    n.scene.add(m.root); $AI.push(D);
    $Z.push({ k: "after", t: 0, life: 2.5, d: D, c: w.color, dmg: 120 });
  }
  const H = xt(M.x, M.z, n.input.wx, n.input.wz), L = Math.min(380, Math.hypot(n.input.wx - M.x, n.input.wz - M.z));
  n.fx.burst(M.x, M.z, { n: 24, color: w.color, speed: 200, life: .4, size: 8 });
  M.x += Math.cos(H) * L; M.z += Math.sin(H) * L; M.invuln = .5;
  n.fx.burst(M.x, M.z, { n: 24, color: w.color, speed: 260, life: .5, size: 8 });
  n.audio.play("warp", M.x, M.z, .6);
}
function $afterU(n, z, t) {
  const D = z.d, f = 1 - Math.min(1, t * 1.5);
  z.life -= t; D.x += D.vx * t; D.z += D.vz * t; D.vx *= f; D.vz *= f;
  D.m.root.position.set(D.x, 0, D.z);
  if (z.life > 0) return !1;
  D.dead = !0; n.scene.remove(D.m.root); $AI.splice($AI.indexOf(D), 1);
  ds(n, D.x, D.z, 150, z.dmg, "player", { fromPlayer: !0 });
  n.fx.shockwave(D.x, D.z, 150, z.c, .4); n.fx.burst(D.x, D.z, { n: 24, color: z.c, speed: 300, life: .5, size: 8 }); n.shake(2);
  return !0;
}

// VALKYRIE PRIME extras. F = Halo Breaker: a spinning ring of light flies to the cursor, cutting through everything once,
// then collapses into a singularity that drags enemies in and detonates (hit-stop, shockwaves, shards). Hold Shift = booster.
var $V3 = { valkyrieprime: { name: "Halo Breaker", cost: 35, cd: 5, dmg: 90, boom: 320, color: 0xffcf6a } };
function $v3(n, e, i, t) {
  const V = $V3[e.shipId];
  if (!V) return;
  e.cdHalo = Math.max(0, (e.cdHalo || 0) - t);
  if (!De.pressed.has("KeyF")) return;
  if (e.cdHalo > 0 || e.energy < V.cost) return n.ui.denied("slotHalo");
  e.energy -= V.cost; e.cdHalo = V.cd;
  const k = i.primary.dmg / 6, a = xt(e.x, e.z, n.input.wx, n.input.wz), L = Math.max(260, Math.min(900, Math.hypot(n.input.wx - e.x, n.input.wz - e.z)));
  const glow = (c, b) => new Ye({ color: new ge(c).multiplyScalar(b), transparent: !0, blending: 2, depthWrite: !1 });
  const g = new Mt(), ring = new Pe(new jt(1, .1, 8, 56), glow(V.color, 3)), ring2 = new Pe(new jt(1, .05, 6, 48), glow(0x59d8ff, 3)), core = new Pe(new Rt(1, 12, 8), glow(0xffffff, 4));
  ring.rotation.x = Math.PI / 2; ring2.rotation.x = Math.PI / 2 + .5;
  g.add(ring, ring2, core); g.position.set(e.x, 12, e.z); n.scene.add(g);
  $Z.push({ k: "halo", t: 0, x: e.x, z: e.z, vx: Math.cos(a) * 1000, vz: Math.sin(a) * 1000, fly: L / 1000, col: .45, r: 28, hit: new Set(), g, ring, ring2, core, dmg: V.dmg * k, boom: V.boom * k, c: V.color });
  e.vx -= Math.cos(a) * 140; e.vz -= Math.sin(a) * 140; // recoil
  n.fx.burst(e.x + Math.cos(a) * 40, e.z + Math.sin(a) * 40, { n: 18, color: V.color, speed: 320, life: .3, size: 8 });
  n.audio.play("warp", e.x, e.z, .7); n.shake(4);
}
function $haloU(n, z, t) {
  const c = gM(z.c);
  z.ring.rotation.z += t * 14; z.ring2.rotation.z -= t * 9; z.ring2.rotation.y += t * 3;
  if (z.fly > 0) {
    z.fly -= t; z.x += z.vx * t; z.z += z.vz * t; z.r = Math.min(70, z.r + t * 90);
    z.g.position.set(z.x, 12, z.z); z.ring.scale.setScalar(z.r); z.ring2.scale.setScalar(z.r * .75); z.core.scale.setScalar(7 + Math.sin(z.fly * 40) * 2);
    for (let q = 0; q < 4; q++) { const b = Math.random() * 6.283; n.fx.spawn(z.x + Math.cos(b) * z.r, 10, z.z + Math.sin(b) * z.r, -z.vx * .15, 0, -z.vz * .15, .35, 9, .5, ...c); }
    $near(n, z.x, z.z, z.r + 60, (en) => {
      if (z.hit.has(en) || Math.hypot(en.x - z.x, en.z - z.z) > z.r + (en.r || 0)) return;
      z.hit.add(en); yn(n, en, z.dmg, { fromPlayer: !0, x: z.x, z: z.z });
      n.fx.burst(en.x, en.z, { n: 10, color: z.c, speed: 280, life: .3, size: 6 }); n.shake(1.5);
    });
    z.fly <= 0 && n.audio.play("charge", z.x, z.z, .7);
    return !1;
  }
  z.col -= t;
  const f = Math.max(0, z.col / .45);
  z.ring.scale.setScalar(z.r * f + 4); z.ring2.scale.setScalar(z.r * .75 * f + 3); z.core.scale.setScalar(8 + 16 * (1 - f));
  for (let q = 0; q < 3; q++) { const b = Math.random() * 6.283; n.fx.spawn(z.x + Math.cos(b) * 230, 10, z.z + Math.sin(b) * 230, -Math.cos(b) * 520, 0, -Math.sin(b) * 520, .42, 8, .5, ...c); }
  $near(n, z.x, z.z, 280, (en) => { if (en.heavy) return; const d = Math.hypot(z.x - en.x, z.z - en.z) || 1, s = Math.min(d - 12, 300 * t); s > 0 && (en.x += (z.x - en.x) / d * s, en.z += (z.z - en.z) / d * s); });
  if (z.col > 0) return !1;
  ds(n, z.x, z.z, 240, z.boom, "player", { fromPlayer: !0, push: 500 });
  n.fx.shockwave(z.x, z.z, 280, z.c, .5); n.fx.shockwave(z.x, z.z, 160, 0xffffff, .3); n.fx.flash(z.x, z.z, z.c, 4, .2);
  n.fx.burst(z.x, z.z, { n: 50, color: z.c, speed: 520, life: .7, size: 10, drag: 3 });
  for (let q = 0; q < 8; q++) n.weapons.spawn({ kind: "bolt", team: "player", x: z.x, z: z.z, angle: q * Math.PI / 4 + Math.random() * .3, speed: 1600, dmg: z.dmg * .5, life: .35, color: z.c, r: 4, len: 50, pierce: 2 });
  n.audio.play("explodeBig", z.x, z.z, .8); n.shake(12);
  if (!(n.slowT > 0)) n.timeScale = .25, n.slowT = .09; // hit-stop
  n.scene.remove(z.g); z.g.traverse((o) => o.isMesh && (o.geometry.dispose(), o.material.dispose()));
  return !0;
}
// booster: speed multiplier for the movement code; drains energy faster than it regenerates (~4 s from full)
function $boost(n, e, t, o) {
  const on = !!$V3[e.shipId] && (De.keys.has("ShiftLeft") || De.keys.has("ShiftRight")) && o > 0 && e.energy > 1;
  on && !e.$bo && (n.shake(2), n.audio.play("dash", e.x, e.z, .5));
  e.$bo = on;
  if (!on) return 1;
  e.energy = Math.max(0, e.energy - 45 * t);
  const ca = Math.cos(e.angle), sa = Math.sin(e.angle);
  for (const s of [-1, 1, -1, 1]) { const j = 34 + Math.random() * 14; n.fx.spawn(e.x - ca * j - sa * s * 12, 4, e.z - sa * j + ca * s * 12, -ca * 620 + e.vx * .2, 0, -sa * 620 + e.vz * .2, .28, 14, 2, .5, .9, 1.8); }
  return 1.65;
}
function $v3Hud(m, E) {
  const V = $V3[m.shipId], h = document.getElementById("slotHalo"), b = document.getElementById("slotBoost");
  h.classList.toggle("hidden", !V); b.classList.toggle("hidden", !V);
  if (!V) return;
  E(h, V.name, Math.max((m.cdHalo || 0) / V.cd, 1 - Math.min(1, m.energy / V.cost)), !(m.cdHalo > 0) && m.energy >= V.cost, m.energy < V.cost);
  E(b, m.$bo ? "Boosting" : "Boost", 0, !!m.$bo, m.energy <= 1);
}
