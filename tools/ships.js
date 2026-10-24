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

// VOID SOVEREIGN guns: comet emitters on the twin prong tips and the wing leading-edge peaks (measured from the Jungle Jim
// hull outline: prongs reach 0.476 S at ±0.063 S, wings peak at 0.24 S around ±0.26 S), ordered left to right so the comet
// fan matches; Storm Crown arcs from a core in the notch between the prongs
function $sovGuns(n, e, S) {
  const dk = Lt(2763322, { panel: 6, metal: .75, rough: .4 }), core = yt(0xb070ff, 2.8), halo = new Ye({ color: new ge(0xa64dff).multiplyScalar(1.6), transparent: !0, opacity: .45, blending: 2, depthWrite: !1 });
  for (const [x, z, y] of [[.16, -.25, .045], [.43, -.063, .03], [.43, .063, .03], [.16, .25, .045]]) {
    const m = $gun(e, x * S, y * S, z * S, S * .045, S * .011, 0, dk, core);
    q(new Rt(S * .022, 10, 8), halo, m.x, m.y, m.z, e);
    n.muzzles.push(m);
  }
  q(new Rt(S * .016, 10, 8), core, S * .4, S * .05, 0, e); q(new Rt(S * .03, 10, 8), halo, S * .4, S * .05, 0, e);
  n.muzzles2.push(ut(S * .41, S * .05, 0));
}

// OBLIVION. Cataclysm: the Siege Driver charges for 0.6 s, then fires one shell that pierces everything (bursting on each hit)
// and ends at the cursor (300-1100 units out) in a massive shockwave with hit-stop
function $cataclysm(n, M, w) {
  const P = w.primary, mz = () => pM(M, M.model.muzzles)[0];
  n.audio.play("charge2", M.x, M.z, .8);
  for (let k = 0; k < 6; k++) setTimeout(() => { if (n.player !== M || M.dead) return; const m = mz(); n.fx.burst(m.x, m.z, { n: 8, color: P.color, speed: 90, life: .25, size: 5 + k * 1.5 }); }, k * 100);
  setTimeout(() => {
    if (n.player !== M || M.dead) return;
    const m = mz(), a = M.angle, L = Math.min(1100, Math.max(300, Math.hypot(n.input.wx - m.x, n.input.wz - m.z))), sp = 1600, x = m.x + Math.cos(a) * L, z = m.z + Math.sin(a) * L;
    n.weapons.fire(M, { ...P, dmg: P.dmg * 500 / 150, pierce: 99, size: 3.6, speed: sp, life: L / sp, count: 1, spread: 0 }, a, [m], "player", { sound: "heavy" });
    M.vx -= Math.cos(a) * 260; M.vz -= Math.sin(a) * 260; n.shake(6);
    setTimeout(() => {
      ds(n, x, z, 380, P.dmg * 6, "player", { fromPlayer: !0, push: 700 });
      n.fx.shockwave(x, z, 380, P.color, .6); n.fx.shockwave(x, z, 220, 0xffffff, .35); n.fx.flash(x, z, P.color, 5, .25);
      n.fx.burst(x, z, { n: 60, color: P.color, speed: 560, life: .8, size: 11, drag: 3 });
      n.audio.play("explodeBig", x, z, .9); n.shake(14);
      if (!(n.slowT > 0)) n.timeScale = .25, n.slowT = .08;
    }, L / sp * 1000);
  }, 600);
}
// Nova Mortar: after the shell lands, two damage rings expand outward with light knockback
function $rings(n, x, z, w) {
  for (const [k, f] of [[1, 1.5], [2, 2]]) setTimeout(() => {
    ds(n, x, z, w.blast * f, w.dmg * .35, "player", { fromPlayer: !0, push: 140 });
    n.fx.shockwave(x, z, w.blast * f, w.color, .35);
  }, k * 160);
}

// RAVEN. Hellburst Cluster: the carrier splits into submunitions once it closes on a target (it pops on the next frame)
function $split(e, _) {
  const c = _.color.getHex(), tg = e.enemies.filter((k) => !k.dead && !k.untargetable && Math.hypot(k.x - _.x, k.z - _.z) < 450);
  for (let i = 0; i < _.split; i++) e.weapons.spawn({ kind: "missile", team: _.team, x: _.x, z: _.z, angle: _.angle + (i - (_.split - 1) / 2) * .7, speed: 520, dmg: _.dmg * .5, life: 1.4, color: c, splash: 55, turn: 7, r: 4, len: 14, target: tg.length ? tg[i % tg.length] : null, owner: _.owner, fx: _.fx, tier: _.tier, look: "hellsub" });
  e.fx.burst(_.x, _.z, { n: 14, color: c, speed: 260, life: .3, size: 7 }); e.audio.play("missile", _.x, _.z, .5);
  _.split = 0; _.life = .001;
}
// Phantom Lock: mark up to 8 enemies near the cursor, then three synchronized Hunter Swarm volleys, one missile per mark each
function $phantomlock(n, M, w) {
  const P = w.primary, d = (k) => Math.hypot(k.x - n.input.wx, k.z - n.input.wz);
  const F = n.enemies.filter((k) => !k.dead && !k.untargetable && d(k) < 1000).sort((a, b) => d(a) - d(b)).slice(0, 8);
  for (const k of F) $st(n, k, { mark: 5 }), n.fx.shockwave(k.x, k.z, k.r * 2.2, P.color, .5);
  n.audio.play("charge", M.x, M.z, .6);
  const H = { ...P, count: 1, spread: 0 };
  for (let j = 0; j < 3 && F.length; j++) setTimeout(() => {
    if (n.player !== M || M.dead) return;
    const mz = pM(M, M.model.muzzles);
    F.forEach((k, i) => n.weapons.fire(M, H, M.angle + (i - F.length / 2) * .25, [mz[i % mz.length]], "player", { target: k.dead ? void 0 : k, fx: i === 0, sound: i ? null : "missile", vol: .5 }));
  }, 300 + j * 140);
}
// F swaps Raven's primary between Hunter Swarm and the Annihilator Lance (cp and the HUD read e.$alt)
function $alt(n, e) {
  $pbSweep(n);
  const A = e.stats.alt;
  if (!A || !De.pressed.has("KeyF")) return;
  e.$alt = !e.$alt;
  n.ui.toast("Primary: " + (e.$alt ? A : e.stats.primary).name, "Press F to switch back.");
  n.audio.play("charge", e.x, e.z, .4);
}

// PROJECTILE LOOKS for the T7 weapons (weapon.look rides on each projectile; fx.js $ptrail/$pimpact hand over to these)
// siege: white-hot slug with a twin rifling spiral, cracks into a double shock ring · hunter: twin-helix exhaust, 4-point star hit
// hell: dark smoke and a blinking beacon · hellsub: falling embers, crackle hit
function $look(e, p, dt) {
  $body(e, p);
  const c = p.color, x = p.x, z = p.z, a = p.angle, px = -Math.sin(a), pz = Math.cos(a), k = p.size || 1;
  if (p.look === "siege") {
    const s = Math.sin(p.age * 45) * 6 * k;
    e.fx.spawn(x, 5, z, 0, 0, 0, .16, 8 * k, 0, 2.2, 1.4, 1);
    for (const g of [1, -1]) e.fx.spawn(x + px * s * g, 5, z + pz * s * g, 0, 0, 0, .22, 3 * k, 0, c.r * 2, c.g * 2, c.b * 2);
  } else if (p.look === "hunter") {
    const s = Math.sin(p.age * 30) * 7, bx = x - Math.cos(a) * 8, bz = z - Math.sin(a) * 8;
    for (const g of [1, -1]) e.fx.spawn(bx + px * s * g, 4, bz + pz * s * g, 0, 0, 0, .3, 3.5, 0, 1.9, .7, .6);
    e.fx.spawn(bx, 4, bz, 0, 0, 0, .08, 4, 0, 2, 1.8, 1.6);
  } else if (p.look === "hell") {
    const bx = x - Math.cos(a) * 12, bz = z - Math.sin(a) * 12;
    e.fx.spawn(bx, 4, bz, (Math.random() - .5) * 30, 8, (Math.random() - .5) * 30, .7, 11, 10, .35, .06, .08);
    e.fx.spawn(bx, 4, bz, -p.vx * .05, 0, -p.vz * .05, .15, 7, 0, 2, 1, .6);
    if ((p.$bl = (p.$bl || 0) - dt) <= 0) p.$bl = .14, e.fx.flash(x, z, c.getHex(), .6, .05);
  } else if (p.look === "hellsub") Math.random() < .7 && e.fx.spawn(x, 4, z, (Math.random() - .5) * 60, 20, (Math.random() - .5) * 60, .35, 3, 0, 2, .9, .3);
}
function $lookHit(e, p, x, z) {
  const c = p.color.getHex(), a = p.angle;
  if (p.look === "siege") {
    const r = p.splash || 60;
    e.fx.shockwave(x, z, r * .7, 0xffffff, .16); e.fx.shockwave(x, z, r * 1.25, c, .32);
    e.fx.sparks(x, z, a, c, 12); e.fx.sparks(x, z, a + Math.PI, 0xffffff, 6); e.fx.flash(x, z, c, 1.6, .08);
  } else if (p.look === "hunter") {
    for (let q = 0; q < 4; q++) e.fx.sparks(x, z, a + q * Math.PI / 2 + Math.PI / 4, c, 6);
    e.fx.flash(x, z, c, .9, .05);
  } else if (p.look === "hell") {
    e.fx.burst(x, z, { n: 24, color: c, speed: 240, life: .45, size: 7, drag: 3 }); e.fx.shockwave(x, z, 90, 0xff3060, .3);
  } else if (p.look === "hellsub") for (let q = 0; q < 3; q++) e.fx.burst(x + (Math.random() - .5) * 30, z + (Math.random() - .5) * 30, { n: 5, color: 0xffb050, speed: 120, life: .2, size: 5 });
}
// Nova Mortar shell: pulsing core circled by two sparks
function $mortarT(n, w) {
  if (!w.$r) { w.$r = new Pe($g3().ring, $gm(w.w.color, 2, .8)); w.$r.scale.setScalar(5); w.orb.add(w.$r); }
  w.$r.rotation.x += .2; w.$r.rotation.y += .13;
  const o = w.orb.position, c = gM(w.w.color), b = n.time * 14;
  for (const s of [0, Math.PI]) n.fx.spawn(o.x + Math.cos(b + s) * 14, o.y, o.z + Math.sin(b + s) * 14, 0, 0, 0, .35, 5, 0, ...c);
  w.orb.scale.setScalar(1.4 + Math.sin(n.time * 30) * .4);
}
// Annihilator Lance: sparks shed sideways along the beam and rings running down it, both growing with heat
function $lanceFx(n, e, r, m, dt) {
  const h = e.heat || 0, ca = Math.cos(e.angle), sa = Math.sin(e.angle), c = gM(r.color);
  for (let q = 0; q < 2 + h * 4; q++) { const d = Math.random() * r.range, s = (Math.random() < .5 ? -1 : 1) * (60 + 220 * h); n.fx.spawn(m.x + ca * d, 8, m.z + sa * d, -sa * s, 0, ca * s, .18, 3 + h * 4, 0, ...c); }
  if ((e.$lr = (e.$lr || 0) - dt) <= 0) { e.$lr = .12 - h * .06; const d = (n.time * 900) % r.range; n.fx.shockwave(m.x + ca * d, m.z + sa * d, 14 + h * 16, r.color, .15); }
  n.fx.flash(m.x, m.z, r.color, .8 + h * 1.8, .04);
}

// LEGION (drone apex). Shared low-poly glow meshes; materials are cached per colour and never disposed
var $G3, $GM = {};
const $g3 = () => $G3 ||= { core: new Rt(1, 6, 4), mite: new Rt(1, 4, 2), hex: new jt(1, .07, 4, 6), ring: new jt(1, .08, 4, 20) };
const $gm = (c, b, o) => $GM[c + "|" + b + "|" + o] ||= new Ye({ color: new ge(c).multiplyScalar(b), transparent: !0, opacity: o, blending: 2, depthWrite: !1 });
const $nearest = (n, x, z, r) => { let best = null; for (const en of n.enemies) { if (en.dead || en.untargetable || en.team === "neutral") continue; const d = Math.hypot(en.x - x, en.z - z); d < r && (r = d, best = en); } if (!best) for (const W of n.asteroids) { if (W.dead) continue; const d = Math.hypot(W.x - x, W.z - z); d < r && (r = d, best = W); } return best; }; // rocks when no enemy is near, so Legion can mine
// Nanite Spores: wobbling seekers that latch onto a host and eat it (dmg spread over 3 s), hopping up to twice when it dies
function $spores(n, e, r, mz, a) {
  for (let k = 0; k < r.count; k++) { const m = mz[k % mz.length]; $Z.push($spore(n, m.x, m.z, a + (k - (r.count - 1) / 2) * .35 + (Math.random() - .5) * .2, r.speed, r.dmg, r.life, r.color)); }
  n.audio.play("plasma", e.x, e.z, .4);
}
function $spore(n, x, z, a, sp, dmg, life, c, host) {
  const G = $g3(), g = new Mt(), core = new Pe(G.core, $gm(c, 2.2, 1)), shell = new Pe(G.core, $gm(c, 1, .3));
  core.scale.setScalar(4); shell.scale.setScalar(9); g.add(core, shell); g.position.set(x, 8, z); n.scene.add(g);
  const o = Math.random() * 6.283;
  return { k: "spore", x, z, vx: Math.cos(a) * sp, vz: Math.sin(a) * sp, sp, dmg, life, eat: 3, tick: 0, hops: 2, host: host || null, ox: Math.cos(o) * .7, oz: Math.sin(o) * .7, c, g3: g, core, shell, ag: 0, mites: 0 };
}
function $sporeEnd(n, z) { n.scene.remove(z.g3); n.fx.burst(z.x, z.z, { n: 6, color: z.c, speed: 90, life: .25, size: 4 }); return !0; }
function $sporeU(n, z, t) {
  z.ag += t;
  const c = gM(z.c), h = z.host;
  if (h && h.dead) {
    for (let q = 0; q < z.mites; q++) $Z.push($mite(n, h.x, h.z, Math.random() * 6.283, z.dmg * .4, 4, z.c));
    z.mites = 0; z.host = null;
    if (z.hops-- <= 0) return $sporeEnd(n, z);
    n.fx.burst(z.x, z.z, { n: 8, color: z.c, speed: 160, life: .3, size: 5 }); z.life = 1.5;
  } else if (h) {
    z.x = h.x + z.ox * h.r; z.z = h.z + z.oz * h.r;
    if ((z.tick -= t) <= 0) z.tick = .25, yn(n, h, z.dmg / 12, { fromPlayer: !0, x: z.x, z: z.z, silent: !0 });
    Math.random() < .4 && n.fx.spawn(z.x, 8, z.z, (Math.random() - .5) * 40, 10, (Math.random() - .5) * 40, .4, 4, 0, ...c);
    const s = 1 + Math.sin(z.ag * 18) * .3;
    z.core.scale.setScalar(4 * s); z.shell.scale.setScalar(7 + 3 * s); z.g3.position.set(z.x, 8, z.z);
    return (z.eat -= t) <= 0 && $sporeEnd(n, z);
  }
  if ((z.life -= t) <= 0) return $sporeEnd(n, z);
  const T = z.ag > .15 && $nearest(n, z.x, z.z, 700);
  if (T) {
    const na = Fn(Math.atan2(z.vz, z.vx), xt(z.x, z.z, T.x, T.z), 6 * t), sp = Math.min(z.sp * 1.6, Math.hypot(z.vx, z.vz) + 400 * t);
    z.vx = Math.cos(na) * sp; z.vz = Math.sin(na) * sp;
    if (Math.hypot(T.x - z.x, T.z - z.z) < T.r + 10) z.host = T, z.eat = 3, n.fx.burst(z.x, z.z, { n: 6, color: z.c, speed: 120, life: .25, size: 5 });
  }
  const L = Math.hypot(z.vx, z.vz) || 1, w = Math.sin(z.ag * 9 + z.sp) * 90 * t;
  z.x += z.vx * t - z.vz / L * w; z.z += z.vz * t + z.vx / L * w;
  n.fx.spawn(z.x, 8, z.z, 0, 0, 0, .3, 5, 0, ...c);
  z.g3.position.set(z.x, 8, z.z); z.core.rotation.y += t * 6;
  return !1;
}
// micro-drone: darts at the nearest enemy, rams it, bounces off and comes round again
function $mite(n, x, z, a, dmg, life, c) {
  const m = new Pe($g3().mite, $gm(c, 2.4, 1));
  m.scale.set(7, 4, 4); m.position.set(x, 10, z); n.scene.add(m);
  return { k: "mite", x, z, vx: Math.cos(a) * 300, vz: Math.sin(a) * 300, dmg, life, c, g3: m, tgt: null, cd: 0 };
}
function $miteU(n, z, t) {
  if ((z.life -= t) <= 0) { n.scene.remove(z.g3); n.fx.burst(z.x, z.z, { n: 5, color: z.c, speed: 140, life: .2, size: 4 }); return !0; }
  z.cd -= t;
  if (!z.tgt || z.tgt.dead) z.tgt = $nearest(n, z.x, z.z, 650);
  const T = z.tgt;
  if (T) {
    const dx = T.x - z.x, dz = T.z - z.z, d = Math.hypot(dx, dz) || 1;
    z.vx += dx / d * 2600 * t; z.vz += dz / d * 2600 * t;
    if (d < T.r + 8 && z.cd <= 0) {
      yn(n, T, z.dmg, { fromPlayer: !0, x: z.x, z: z.z });
      z.cd = .35; z.vx = -z.vx * .8 + (Math.random() - .5) * 400; z.vz = -z.vz * .8 + (Math.random() - .5) * 400;
      n.fx.sparks(z.x, z.z, Math.atan2(z.vz, z.vx), z.c, 5);
    }
  }
  const sp = Math.hypot(z.vx, z.vz);
  sp > 700 && (z.vx *= 700 / sp, z.vz *= 700 / sp);
  z.x += z.vx * t; z.z += z.vz * t;
  z.g3.position.set(z.x, 10, z.z); z.g3.rotation.y = -Math.atan2(z.vz, z.vx);
  n.frame % 2 === 0 && n.fx.spawn(z.x, 10, z.z, 0, 0, 0, .15, 3, 0, ...gM(z.c));
  return !1;
}
// Swarm Gate: a spinning hex portal flies to the cursor (up to 800), opens and releases its micro-drones, then folds shut
function $gate(n, e, r) {
  const G = $g3(), m = pM(e, e.model.muzzles2)[0], a = xt(e.x, e.z, n.input.wx, n.input.wz), L = Math.min(800, Math.hypot(n.input.wx - e.x, n.input.wz - e.z));
  const g = new Mt(), h1 = new Pe(G.hex, $gm(r.color, 2.6, 1)), h2 = new Pe(G.hex, $gm(r.color, 1.4, .6)), core = new Pe(G.core, $gm(0xffffff, 1.5, .5));
  h1.rotation.x = h2.rotation.x = Math.PI / 2; h2.scale.setScalar(.7); g.add(h1, h2, core); g.position.set(m.x, 12, m.z); g.scale.setScalar(10); n.scene.add(g);
  $Z.push({ k: "gate", x: m.x, z: m.z, x0: m.x, z0: m.z, x1: e.x + Math.cos(a) * L, z1: e.z + Math.sin(a) * L, fly: .35, ag: 0, life: r.life, left: r.count, spawn: 0, dmg: r.dmg, c: r.color, g3: g, h1, h2, core });
  n.audio.play("warp", e.x, e.z, .5);
}
function $gateU(n, z, t) {
  z.ag += t; z.h1.rotation.z += t * 3; z.h2.rotation.z -= t * 5;
  const c = gM(z.c);
  if (z.ag < z.fly) {
    const f = z.ag / z.fly; z.x = z.x0 + (z.x1 - z.x0) * f; z.z = z.z0 + (z.z1 - z.z0) * f;
    z.g3.position.set(z.x, 12, z.z); n.fx.spawn(z.x, 12, z.z, 0, 0, 0, .25, 6, 0, ...c);
    return !1;
  }
  const o = z.ag - z.fly, R = Math.min(55, 10 + o * 200) * (o > z.life - .3 ? Math.max(0, (z.life - o) / .3) : 1);
  z.g3.scale.setScalar(Math.max(.1, R)); z.g3.position.set(z.x, 12, z.z); z.core.scale.setScalar(.5 + Math.sin(z.ag * 20) * .15);
  if (z.left > 0 && (z.spawn -= t) <= 0) { z.spawn = .2; z.left--; $Z.push($mite(n, z.x, z.z, Math.random() * 6.283, z.dmg, z.life - o + 1, z.c)); n.fx.burst(z.x, z.z, { n: 6, color: z.c, speed: 200, life: .2, size: 5 }); }
  if (Math.random() < .5) { const b = Math.random() * 6.283; n.fx.spawn(z.x + Math.cos(b) * R, 12, z.z + Math.sin(b) * R, -Math.cos(b) * 80, 0, -Math.sin(b) * 80, .3, 5, 0, ...c); }
  if (o < z.life) return !1;
  n.scene.remove(z.g3); n.fx.shockwave(z.x, z.z, 80, z.c, .3);
  return !0;
}
// Assimilate: a nanite wave plants a spore on every enemy within 520; infected enemies that die release 2 micro-drones
function $assimilate(n, M, w) {
  const P = w.primary;
  n.fx.shockwave(M.x, M.z, 520, P.color, .6); n.fx.shockwave(M.x, M.z, 300, 0xffffff, .35);
  n.audio.play("warp", M.x, M.z, .7); n.shake(5);
  $near(n, M.x, M.z, 520, (en) => { const s = $spore(n, en.x, en.z, 0, P.speed, P.dmg, 1, P.color, en); s.mites = 2; $Z.push(s); });
}

// own projectile bodies for the T7 looks, laid over the pool's shared bolt/missile mesh: siege = white-hot capsule in a spinning
// ring, hunter = glowing arrowhead, hell = pulsing core with a spinning halo, hellsub = small ember dart
var $PB = new Set();
function $mkBody(look, c, k) {
  const G = $g3(), g = new Mt(), add = (geo, m, sx, sy, sz) => { const o = new Pe(geo, m); o.scale.set(sx, sy, sz); g.add(o); return o; };
  if (look === "siege") { add(G.core, $gm(0xffffff, 2, 1), 18 * k, 4 * k, 4 * k); add(G.core, $gm(c, 1.4, .5), 28 * k, 7 * k, 7 * k); g.userData.spin = add(G.ring, $gm(c, 2.2, .9), 8 * k, 8 * k, 8 * k); g.userData.spin.rotation.y = Math.PI / 2; }
  else if (look === "hunter") { add(G.mite, $gm(c, 2.4, 1), 10, 3, 3); add(G.core, $gm(0xffffff, 1.6, .6), 3, 3, 3); }
  else if (look === "hell") { add(G.core, $gm(c, 2, 1), 7, 7, 7); g.userData.spin = add(G.ring, $gm(0xff3060, 2, .8), 14, 14, 14); g.userData.spin.rotation.x = Math.PI / 2; }
  else add(G.mite, $gm(0xffb050, 2.4, 1), 5, 2.5, 2.5);
  return g;
}
function $body(e, p) {
  if (!p.$m || p.$mk !== p.look) { p.$m && e.scene.remove(p.$m); p.$m = $mkBody(p.look, p.color.getHex(), p.size || 1); p.$mk = p.look; e.scene.add(p.$m); $PB.add(p); }
  const m = p.$m; m.position.set(p.x, 6, p.z); m.rotation.y = -p.angle; m.userData.t = e.frame;
  m.userData.spin && (m.userData.spin.rotation.z += .3);
  p.look === "hell" && m.scale.setScalar(1 + Math.sin(p.age * 20) * .15);
}
// drop bodies whose projectile has died (pool objects are reused, so a body not refreshed this frame is stale)
function $pbSweep(n) { for (const p of $PB) if (!p.active || n.frame - p.$m.userData.t > 1) n.scene.remove(p.$m), p.$m = null, $PB.delete(p); }
window.$VBz = () => $Z; // harness probe
