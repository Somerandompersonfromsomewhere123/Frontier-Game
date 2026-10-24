// ---- Voidbreakers: sector themes. Every 10 waves (11, 21, 31...) the nebula and planet fade to a random new palette ----
// colours: nebula base + six cloud layers, nebula brightness, planet bands a/b/c (theme 0 is the original look)
const $SKYT = [
  ["", [[.004, .006, .02], [.13, .03, .25], [.02, .16, .30], [.45, .06, .35], [.05, .35, .40], [.95, .40, .12], [.90, .50, .85]], .6, [[.55, .25, .45], [.95, .55, .30], [.25, .20, .55]]],
  ["Crimson Rift", [[.012, .002, .004], [.28, .02, .05], [.10, .02, .12], [.70, .08, .10], [.40, .05, .30], [1, .45, .10], [1, .60, .40]], .38, [[.60, .18, .12], [.95, .50, .25], [.30, .08, .12]]],
  ["Emerald Drift", [[.002, .010, .008], [.02, .18, .10], [.01, .10, .22], [.10, .45, .25], [.05, .40, .45], [.75, .85, .20], [.40, .95, .70]], .55, [[.20, .50, .35], [.70, .85, .40], [.10, .25, .30]]],
  ["The Abyss", [[.001, .001, .004], [.04, .02, .10], [.01, .04, .10], [.15, .04, .25], [.02, .12, .20], [.30, .15, .50], [.40, .30, .80]], .4, [[.20, .20, .35], [.35, .30, .50], [.08, .08, .18]]],
  ["Solar Gold", [[.010, .006, .002], [.25, .12, .02], [.04, .06, .20], [.70, .40, .05], [.10, .20, .45], [1, .75, .20], [1, .90, .60]], .55, [[.70, .45, .15], [.95, .80, .45], [.35, .20, .10]]],
  ["Ice Veil", [[.002, .006, .014], [.04, .12, .28], [.02, .22, .32], [.20, .45, .70], [.10, .55, .60], [.60, .80, 1], [.85, .90, 1]], .5, [[.40, .60, .75], [.85, .95, 1], [.20, .30, .50]]],
  ["Toxic Bloom", [[.004, .008, .002], [.18, .02, .20], [.05, .20, .04], [.55, .05, .45], [.30, .60, .05], [.75, .95, .10], [.95, .40, .90]], .55, [[.50, .70, .15], [.90, .40, .80], [.25, .10, .30]]],
  ["Ember Void", [[.003, .002, .002], [.08, .03, .02], [.03, .02, .04], [.35, .08, .02], [.10, .04, .08], [.95, .35, .05], [1, .55, .20]], .5, [[.40, .15, .08], [.90, .45, .15], [.15, .06, .06]]],
];
let $skyU_, $skyI = 0, $skyRaf = 0;
// flat list of every themed number: 7 nebula colours, brightness, 3 planet colours, 2 cloud offsets
const $skyFlat = (t, off) => [...t[1].flat(), t[2], ...t[3].flat(), ...off];
function $skyU() {
  if ($skyU_) return $skyU_;
  $skyU_ = { uDim: { value: 0 }, uOff: { value: new U() } };
  for (let k = 0; k < 7; k++) $skyU_["uK" + k] = { value: new U() };
  for (const k of ["uPa", "uPb", "uPc"]) $skyU_[k] = { value: new U() };
  $skySet($skyFlat($SKYT[0], [0, 0]));
  return $skyU_;
}
function $skyGet() { const u = $skyU_, v = []; for (let k = 0; k < 7; k++) v.push(...u["uK" + k].value.toArray()); v.push(u.uDim.value); for (const k of ["uPa", "uPb", "uPc"]) v.push(...u[k].value.toArray()); return [...v, u.uOff.value.x, u.uOff.value.y]; }
function $skySet(v) { const u = $skyU_; let j = 0; for (let k = 0; k < 7; k++) u["uK" + k].value.fromArray(v, (j += 3) - 3); u.uDim.value = v[j++]; for (const k of ["uPa", "uPb", "uPc"]) u[k].value.fromArray(v, (j += 3) - 3); u.uOff.value.set(v[j], v[j + 1], 0); }
// returns the new sector's name for the wave banner, or "" when the sky doesn't change this wave
function $skyWave(w) {
  if (!$skyU_) return "";
  if (w <= 1) { cancelAnimationFrame($skyRaf); $skyI = 0; $skySet($skyFlat($SKYT[0], [0, 0])); return ""; }
  if (w % 10 !== 1) return "";
  const pick = $SKYT.map((_, i) => i).filter((i) => i && i !== $skyI); // any theme but the current and the original
  $skyI = pick[Math.floor(Math.random() * pick.length)];
  // the cloud offset also fades, so the nebula streams past to a new region while the colours change
  const a = $skyGet(), b = $skyFlat($SKYT[$skyI], [a[a.length - 2] + 2 + Math.random() * 3, a[a.length - 1] + Math.random() * 3]), t0 = performance.now();
  cancelAnimationFrame($skyRaf);
  const step = (t) => { const k = Math.min(1, (t - t0) / 5000), e = k * k * (3 - 2 * k); $skySet(a.map((x, i) => x + (b[i] - x) * e)); if (k < 1) $skyRaf = requestAnimationFrame(step); };
  $skyRaf = requestAnimationFrame(step);
  return $SKYT[$skyI][0];
}
