// Valkyrie Prime check: node halo.js <GAME.html> <outDir> [wave]
// Fires Halo Breaker (F) into a wave and screenshots flight, collapse and detonation; then holds Shift+W and asserts the
// booster lifts top speed and drains energy. Uses the real GPU like balance.js.
const pp = require(__dirname + "/pp/node_modules/puppeteer-core");
const [file, out, wave = "12"] = process.argv.slice(2);
const wait = (ms) => new Promise((r) => setTimeout(r, ms));
(async () => {
  const b = await pp.launch({ executablePath: "C:/Program Files/Google/Chrome/Application/chrome.exe", headless: "new", args: ["--use-angle=d3d11", "--enable-gpu", "--ignore-gpu-blocklist"] });
  const p = await b.newPage();
  await p.setViewport({ width: 1280, height: 720 });
  const errs = [];
  p.on("pageerror", (e) => errs.push(e.message + " @ " + (e.stack || "").split("\n").slice(1, 3).join(" "))); // stack locates bundle errors
  await p.goto(require("url").pathToFileURL(file).href, { waitUntil: "load", timeout: 120000 });
  await p.waitForFunction(() => window.G && G.state === "menu", { timeout: 120000 });
  await p.evaluate(() => { G.save.unlocked.push("valkyrieprime"); G.save.selected = "valkyrieprime"; G.save.tutorialDone = !0; G.save.settings.cam = "top"; document.querySelector('[data-act="hangar"]').click() });
  await wait(800);
  await p.evaluate(() => document.querySelector('[data-act="launch"]').click());
  await wait(1500);
  await p.evaluate((w) => {
    const D = G.director, P = G.player;
    D.wave = w - 1; D.state = "break"; D.timer = 0;
    setInterval(() => { G.pendingLevels = 0; if (G.state === "levelup") { G.state = "play"; G.ui.show(null); } P.hp = P.maxHp; P.shield = P.maxShield; G.input.sx = innerWidth * .62; G.input.sy = innerHeight * .3; G.input.moved = !0; }, 16);
  }, +wave);
  await wait(5000);
  const before = await p.evaluate(() => ({ e: G.player.energy, hp: G.enemies.reduce((s, x) => s + (x.dead ? 0 : x.hp), 0) }));
  await p.evaluate(() => { G.player.energy = G.player.maxEnergy || 100; });
  await p.keyboard.press("KeyF");
  await wait(250); await p.screenshot({ path: `${out}/halo_1_fly.png` });
  const z = await p.evaluate(() => ({ cd: G.player.cdHalo, e: Math.round(G.player.energy) }));
  await wait(450); await p.screenshot({ path: `${out}/halo_2_collapse.png` });
  await wait(250); await p.screenshot({ path: `${out}/halo_3_boom.png` });
  await wait(1500);
  const after = await p.evaluate(() => ({ rings: (() => { let k = 0; G.scene.traverse((o) => o.geometry?.type === "TorusGeometry" && k++); return k; })(), hp: G.enemies.reduce((s, x) => s + (x.dead ? 0 : x.hp), 0) }));
  // booster: top speed with W held, then with Shift+W
  const speed = async () => p.evaluate(() => new Promise((res) => { let m = 0; const id = setInterval(() => (m = Math.max(m, Math.hypot(G.player.vx, G.player.vz))), 16); setTimeout(() => { clearInterval(id); res(Math.round(m)); }, 900); }));
  await p.evaluate(() => { G.player.energy = G.player.maxEnergy || 100; });
  await p.keyboard.down("KeyW"); await wait(600);
  const v0 = await speed();
  await p.keyboard.down("ShiftLeft"); await wait(300);
  const e0 = await p.evaluate(() => G.player.energy);
  const v1 = await speed();
  await p.screenshot({ path: `${out}/halo_4_boost.png` });
  const e1 = await p.evaluate(() => G.player.energy);
  await p.keyboard.up("ShiftLeft"); await p.keyboard.up("KeyW");
  const ok = z && z.cd > 0 && after.hp < before.hp && v1 > v0 * 1.3 && e1 < e0 && !errs.length;
  console.log(JSON.stringify({ before, z, after, v0, v1, e0: Math.round(e0), e1: Math.round(e1) }), ok ? "ok" : "FAIL " + errs.slice(0, 3).join(" | "));
  await b.close();
  process.exit(ok ? 0 : 1);
})().catch((e) => { console.error(e); process.exit(1); });
