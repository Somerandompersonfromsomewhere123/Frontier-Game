// Trailer edit, shared by comp.js (pictures) and music.js (score). 60 fps, 120 BPM: a beat is 0.5 s, cuts land on beats.
// shot: [start, end, clip, clip time at start, extra]; text events are drawn by comp.html by section name.
const FPS = 60, LEN = 61;
const S = [];
const shot = (t0, t1, clip, at = 0, x = {}) => S.push({ t0, t1, clip, at, ...x });
// title: hero flight
shot(4, 8, "hero", 0.5, { zoom: [1.12, 1] });
// PILOT / FIGHT / EVOLVE
shot(8, 10, "chase_swarm", 1, { word: "PILOT" });
shot(10, 12, "top_swarm", 2, { word: "FIGHT" });
shot(12, 14, "w_tempest", 1.5, { word: "EVOLVE" });
// hangar line-up
[["starcore", "STARCORE", "TIER VII · HEAVY"], ["valkyrieprime", "VALKYRIE PRIME", "TIER VII · ASSAULT"], ["tempest", "TEMPEST", "TIER VII · ASSAULT"],
 ["sovereign", "VOID SOVEREIGN", "TIER VII · ENERGY"], ["spectre", "SPECTRE", "TIER VI · SNIPER"], ["titan", "TITAN", "TIER VI · HEAVY"]]
  .forEach(([id, name, sub], i) => shot(14 + i, 15 + i, "hangar_" + id, 1.2, { tag: [name, sub], zoom: [1.06, 1.0] }));
// evolution tree still, panned
shot(20, 24, "tree", 0, { still: 1 });
// arsenal
[["w_lance", "RAILGUNS & STARFALL LANCE"], ["w_missile", "MISSILE BARRAGES"], ["w_orbs", "VORTEX ORBS"], ["w_drones", "DRONE FLEETS"], ["w_valk", "BLADE LASERS"], ["hero", "SIX-WAY CONVERGENCE"]]
  .forEach(([c, name], i) => shot(24 + i * 4 / 3, 24 + (i + 1) * 4 / 3, c, c === "hero" ? 4.5 : 1.5, { tag: [name, "ARSENAL"], zoom: [1, 1.08] }));
// two cameras, split screen
shot(32, 37, "top_swarm", 3.5, { split: "w_valk", splitAt: 0.5 });
// sectors
[["sector1", "AZURE DRIFT"], ["sector2", "GALACTIC CORE"], ["sector3", "EMBER NEBULA"], ["sector4", "CRIMSON RIFT"], ["sector9", "ICE VEIL"], ["sector5", "BLOOD MOON REACH"]]
  .forEach(([c, name], i) => shot(38 + i * 2 / 3, 38 + (i + 1) * 2 / 3, c, 1, { tag: [name, "SECTOR " + (i + 2)], zoom: [1.1, 1] }));
// bosses
[["boss10", "HIVE CARRIER"], ["boss20", "CRIMSON LANCE"], ["boss30", "ASH WARDEN"], ["boss40", "TWIN REAPER"]]
  .forEach(([c, name], i) => shot(42 + i * 1.5, 43.5 + i * 1.5, c, 1, { boss: name, zoom: [1.04, 1.12] }));
shot(48, 52, "boss_kill", 0.8, { boss: "IRON BASTION", killAt: 1.75, zoom: [1, 1.1] });
shot(52, 55, "chase_swarm", 3.5);
shot(55, LEN, "hero", 2.5, { blur: 1 });
// music cues: drops (full kit), impacts, risers ending at the time given
const CUE = { drops: [4, 24, 38], breaks: [[14, 24, "mid"], [37, 38, "off"], [52, 55, "build"], [55, LEN, "end"]], impacts: [4, 14, 20, 24, 32, 38, 42, 48, 55], risers: [4, 32, 38, 55] };
module.exports = { FPS, LEN, S, CUE };
