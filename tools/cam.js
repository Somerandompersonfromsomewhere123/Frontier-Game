// ---- Voidbreakers: Settings > Camera. "chase" is a third-person camera behind the ship that turns with it; "top" is the original view ----
let $camYaw = null, $camSky = 1;
const $camAt = new U(), $camF = new U();
function $chase() { return S.state === "play" && S.save?.settings?.cam === "chase"; }
function $camSel() {
  const sel = document.getElementById("setCam");
  if (!sel || sel.onchange) return;
  sel.value = S.save?.settings?.cam === "chase" ? "chase" : "top";
  sel.onchange = () => { S.save.settings.cam = sel.value; Ft(Ct, S.save); };
}
// runs every rig update; C = chase this frame. Chase: behind and above the ship, yaw lagging its heading, looking a little ahead.
// The tilted view sees much further than top-down, so the far plane, the nebula plane ($camSky) and the star wrap box (uFwd) reach ahead.
function $camRig(l, s, c, C) {
  const far = C ? 1.2e5 : 2e4, u = $skyU();
  if (s.far !== far) (s.far = far), s.updateProjectionMatrix();
  u.uSky.value = C ? 1 : 0;
  if (!C) { $camYaw = null; $camSky = 1; u.uFwd.value.set(0, 0, 0); return; }
  // boss intros (l.cinematic) turn the camera toward the boss so it is framed ahead, not behind
  const P = S.player, k = l.cinematic, a = k && Math.hypot(k.x - P.x, k.z - P.z) > 200 ? xt(P.x, P.z, k.x, k.z) : P.angle;
  $camYaw = $camYaw == null ? a : Wt($camYaw + Wt(a - $camYaw) * (1 - Math.exp(-c * 3)));
  $camF.set(Math.cos($camYaw), 0, Math.sin($camYaw));
  s.position.copy(l.target).addScaledVector($camF, -345 * l.zoom);
  s.position.y = 285 * l.zoom;
  $camAt.copy(l.target).addScaledVector($camF, 180 * l.zoom);
  $camSky = 6;
  u.uFwd.value.copy($camF);
}
