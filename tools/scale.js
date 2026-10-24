// ---- Voidbreakers: power-matched difficulty. Bosses and post-wave-10 enemies scale with the player's own stats ----
// player power: weapon damage per second (both guns) and effective health (hull + shield)
function $pDps(P) { return Qr(P.stats.primary) + Qr(P.stats.secondary); }
function $pEhp(P) { return P.maxHp + (P.maxShield || 0); }
// power when wave 10 starts (reset each run in onWaveStart); growth after that is matched, and slightly outpaced, by the enemies
let $ref = null;
function $refAt(S) { const P = S.player; return P ? ($ref ||= { d: $pDps(P), h: $pEhp(P) }) : null; }
// enemy health: each +10% player DPS since wave 10 adds +15%; the wave curve stays as the floor
function $eHp(S, base) {
  const w = S.director.wave, r = w > 10 && $refAt(S);
  if (!r) return base;
  const g = Math.max(0, $pDps(S.player) / r.d - 1);
  return Math.max(base, z_(11).hpScale * (1 + 1.5 * g)); // wave 11 on the old curve is the starting point
}
// enemy damage: each +10% player health since wave 10 adds +12%, plus 3% per wave past 10
function $eDmg(S) {
  const w = S.director.wave, r = w > 10 && $refAt(S);
  if (!r) return 1;
  return (1 + 1.2 * Math.max(0, $pEhp(S.player) / r.h - 1)) * (1 + .03 * (w - 10));
}
// boss health: 20 s of the player's full DPS plus 20x their health, never below the old wave value
function $bossHp(S, base, scale) {
  const P = S.player;
  return P ? Math.max(scale, (20 * $pDps(P) + 20 * $pEhp(P)) / base) : scale;
}
// read-only handle for the headless test harnesses (the bundle's functions are module-scoped)
window.$VB = { dps: $pDps, ehp: $pEhp, eDmg: $eDmg, ref: () => $ref, curve: (w) => z_(w).hpScale };
