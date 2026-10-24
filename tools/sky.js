// ---- Voidbreakers: sectors. Every 10 waves a hyperspace jump screen covers a switch to a new sky ----
// a sector: name, nebula base + six cloud colours (or null when it's a photo map), brightness, planet bands a/b/c, photo index in $SKYIMG
const $SKYT = [
  ["Home Sector", [[.004, .006, .02], [.13, .03, .25], [.02, .16, .30], [.45, .06, .35], [.05, .35, .40], [.95, .40, .12], [.90, .50, .85]], .6, [[.55, .25, .45], [.95, .55, .30], [.25, .20, .55]]],
  // the user's galaxy maps, in story order: calm blue, the galactic core, a burning nebula, then the red rift
  ["Azure Drift", null, .55, [[.30, .45, .60], [.70, .85, .95], [.12, .20, .35]], 0],
  ["Galactic Core", null, .6, [[.60, .45, .30], [.95, .80, .55], [.25, .20, .30]], 1],
  ["Ember Nebula", null, .55, [[.70, .40, .12], [1, .75, .35], [.30, .15, .08]], 2],
  ["Crimson Rift", null, .55, [[.60, .15, .15], [.95, .45, .40], [.25, .05, .10]], 3],
  ["Supernova Rings", null, .55, [[.25, .35, .60], [.95, .60, .55], [.10, .15, .30]], 4],
  ["Helix Eye", null, .55, [[.55, .35, .20], [.40, .70, .95], [.25, .10, .08]], 5],
  ["Event Horizon", null, .6, [[.40, .20, .40], [.95, .45, .60], [.12, .08, .15]], 6],
  ["Scarlet Expanse", null, .5, [[.65, .12, .10], [1, .40, .30], [.20, .04, .05]], 7],
  ["Deep Field", null, .6, [[.30, .35, .40], [.80, .75, .60], [.10, .12, .15]], 8],
  // procedural palettes: join the photo maps in the random rotation after wave 100
  ["Blood Moon Reach", [[.012, .002, .004], [.28, .02, .05], [.10, .02, .12], [.70, .08, .10], [.40, .05, .30], [1, .45, .10], [1, .60, .40]], .38, [[.60, .18, .12], [.95, .50, .25], [.30, .08, .12]]],
  ["Emerald Drift", [[.002, .010, .008], [.02, .18, .10], [.01, .10, .22], [.10, .45, .25], [.05, .40, .45], [.75, .85, .20], [.40, .95, .70]], .55, [[.20, .50, .35], [.70, .85, .40], [.10, .25, .30]]],
  ["The Abyss", [[.001, .001, .004], [.04, .02, .10], [.01, .04, .10], [.15, .04, .25], [.02, .12, .20], [.30, .15, .50], [.40, .30, .80]], .4, [[.20, .20, .35], [.35, .30, .50], [.08, .08, .18]]],
  ["Solar Gold", [[.010, .006, .002], [.25, .12, .02], [.04, .06, .20], [.70, .40, .05], [.10, .20, .45], [1, .75, .20], [1, .90, .60]], .55, [[.70, .45, .15], [.95, .80, .45], [.35, .20, .10]]],
  ["Ice Veil", [[.002, .006, .014], [.04, .12, .28], [.02, .22, .32], [.20, .45, .70], [.10, .55, .60], [.60, .80, 1], [.85, .90, 1]], .5, [[.40, .60, .75], [.85, .95, 1], [.20, .30, .50]]],
  ["Toxic Bloom", [[.004, .008, .002], [.18, .02, .20], [.05, .20, .04], [.55, .05, .45], [.30, .60, .05], [.75, .95, .10], [.95, .40, .90]], .55, [[.50, .70, .15], [.90, .40, .80], [.25, .10, .30]]],
  ["Ember Void", [[.003, .002, .002], [.08, .03, .02], [.03, .02, .04], [.35, .08, .02], [.10, .04, .08], [.95, .35, .05], [1, .55, .20]], .5, [[.40, .15, .08], [.90, .45, .15], [.15, .06, .06]]],
];
let $skyU_, $skyI = 0, $skyNext = 0, $skyAt = 0, $skyTex = []; // $skyAt: the 10-wave block (0 = waves 1-10) whose sector is showing
function $skyU() {
  if ($skyU_) return $skyU_;
  $skyU_ = { uDim: { value: 0 }, uOff: { value: new U() }, uImg: { value: 0 }, uTex: { value: null }, uFwd: { value: new U() }, uSky: { value: 0 } };
  for (let k = 0; k < 7; k++) $skyU_["uK" + k] = { value: new U() };
  for (const k of ["uPa", "uPb", "uPc"]) $skyU_[k] = { value: new U() };
  // photo maps tile with mirrored repeat so the seams never show
  $skyTex = $SKYIMG.map((b) => { const t = new Pn(), im = new Image(); im.onload = () => { t.image = im; t.needsUpdate = !0; }; im.src = "data:image/jpeg;base64," + b; t.wrapS = t.wrapT = 1002; t.anisotropy = 8; return t; });
  $skyShow(0);
  // Settings > Galaxy map: "auto" rotates sectors every 10 waves, a number pins that sector for the whole run
  const sel = document.getElementById("setMap");
  if (sel) {
    sel.innerHTML = '<option value="auto">Auto: new sector every 10 waves</option>' + $SKYT.map((t, i) => `<option value="${i}">${t[0]}</option>`).join("");
    sel.value = String(S.save?.settings?.map ?? "auto");
    sel.onchange = () => { S.save.settings.map = sel.value; Ft(Ct, S.save); const f = $skyMap(); $skyShow(f >= 0 ? f : $skyFor(Math.max(1, S.director?.wave || 1))); };
    $skyMap() >= 0 && $skyShow($skyMap());
  }
  return $skyU_;
}
function $skyMap() { const m = S.save?.settings?.map; return m == null || m === "auto" ? -1 : +m; }
function $skyShow(i) {
  const u = $skyU_, [, neb, dim, pl, img] = $SKYT[i];
  $skyI = i;
  if (neb) neb.forEach((c, k) => u["uK" + k].value.fromArray(c));
  u.uImg.value = neb ? 0 : 1; u.uTex.value = neb ? $skyTex[0] : $skyTex[img];
  u.uDim.value = dim;
  pl.forEach((c, k) => u[["uPa", "uPb", "uPc"][k]].value.fromArray(c));
  u.uOff.value.set(Math.random() * 9, Math.random() * 9, 0); // new cloud layout each visit
}
// sector for a wave: home for 1-10, the photo maps in order (waves 11-100), then random (never the same twice running)
function $skyFor(w) {
  const k = Math.floor((w - 1) / 10);
  if (k <= $SKYIMG.length) return k;
  const pick = $SKYT.map((_, i) => i).filter((i) => i && i !== $skyI);
  return pick[Math.floor(Math.random() * pick.length)];
}
// hyperspace jump screen; the sky swaps while it is fully opaque
function $skyJump(S, w) {
  if ($skyMap() >= 0) return;
  const i = $skyFor(w), d = document.createElement("div");
  $skyNext = i;
  $skyAt = Math.floor((w - 1) / 10);
  d.id = "vbjump";
  d.innerHTML = `<div class="st"></div><div class="tx"><small>Hyperspace jump · waves ${$skyAt * 10 + 1}-${$skyAt * 10 + 10}</small><b>SECTOR ${Math.floor((w - 1) / 10) + 1}</b><span>${$SKYT[i][0]}</span></div>`;
  document.body.append(d);
  try { S.audio.play("charge"); } catch (x) {}
  setTimeout(() => { $skyShow(i); try { S.audio.play("explodeBig"); } catch (x) {} }, 1100);
  setTimeout(() => d.remove(), 3800);
}
// wave start: wave 1 resets to home; any wave whose 10-wave block isn't the one showing (a skipped jump, a dev or test wave jump) jumps now
function $skyWave(S, w) {
  if (!$skyU_) return "";
  const f = $skyMap();
  if (f >= 0) { $skyI !== f && $skyShow(f); return ""; }
  if (w <= 1) { $skyAt = 0; $skyNext = 0; $skyShow(0); return ""; }
  if (Math.floor((w - 1) / 10) === $skyAt) return "";
  $skyJump(S, w);
  return $SKYT[$skyNext][0]; // the sky itself swaps a moment later, under the jump screen
}
{
  const st = document.createElement("style");
  st.textContent = `#vbjump{position:fixed;inset:0;z-index:9000;pointer-events:none;background:radial-gradient(circle,#0a1530 0%,#000 70%);animation:vbj 3.8s ease forwards;overflow:hidden}
#vbjump .st{position:absolute;inset:-50%;background:repeating-conic-gradient(from 0deg,rgba(150,220,255,.55) 0deg .35deg,transparent .35deg 4deg);-webkit-mask:radial-gradient(circle,transparent 8%,#000 45%);mask:radial-gradient(circle,transparent 8%,#000 45%);animation:vbs 3.8s ease-in forwards}
#vbjump .tx{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;color:#fff;text-align:center;opacity:0;animation:vbt 3.8s ease forwards;text-shadow:0 0 24px rgba(80,200,255,.8)}
#vbjump small{font:600 14px "Barlow Semi Condensed",sans-serif;letter-spacing:.35em;text-transform:uppercase;color:#9fe6ff}
#vbjump b{font:400 clamp(44px,9vw,96px) "Saira Stencil One",sans-serif;line-height:1.1}
#vbjump span{font:600 clamp(18px,3vw,28px) "Barlow Semi Condensed",sans-serif;letter-spacing:.2em;text-transform:uppercase}
@keyframes vbj{0%{opacity:0}22%{opacity:1}72%{opacity:1}100%{opacity:0}}
@keyframes vbs{0%{transform:scale(.4) rotate(0);opacity:0}25%{opacity:1}100%{transform:scale(2.6) rotate(12deg);opacity:.2}}
@keyframes vbt{0%,25%{opacity:0;transform:scale(.85)}38%,70%{opacity:1;transform:scale(1)}100%{opacity:0;transform:scale(1.08)}}`;
  document.head.append(st);
}
