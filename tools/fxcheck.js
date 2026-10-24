// Sound / music / wreck check: node fxcheck.js <GAME.html> <outDir> [ship]
// Plays wave 12 firing at the crowd: asserts the Kenney samples decoded, the battle track is playing, wrecks spawn and
// the frame rate holds; then jumps to the wave 20 boss and asserts the boss track takes over. Uses the real GPU like balance.js.
const pp = require(__dirname + "/pp/node_modules/puppeteer-core");
const [file, out, ship = "reaper"] = process.argv.slice(2);
const wait = (ms) => new Promise((r) => setTimeout(r, ms));
(async () => {
  const b = await pp.launch({ executablePath: "C:/Program Files/Google/Chrome/Application/chrome.exe", headless: "new", args: ["--use-angle=d3d11", "--enable-gpu", "--ignore-gpu-blocklist", "--autoplay-policy=user-gesture-required"] });
  const p = await b.newPage();
  await p.setViewport({ width: 1280, height: 720 });
  const errs = [];
  p.on("pageerror", (e) => errs.push(e.message + " @ " + (e.stack || "").split("\n").slice(1, 2).join(" ")));
  await p.goto(require("url").pathToFileURL(file).href, { waitUntil: "load", timeout: 120000 });
  await p.waitForFunction(() => window.G && G.state === "menu", { timeout: 120000 });
  await p.mouse.click(640, 360); // user gesture: unlocks audio like a real first click
  await wait(1500);
  const menu = await p.evaluate(() => $VBfx());
  await p.evaluate((id) => { G.save.unlocked.includes(id) || G.save.unlocked.push(id); G.save.selected = id; G.save.tutorialDone = !0; G.save.settings.cam = "top"; document.querySelector('[data-act="hangar"]').click() }, ship);
  await wait(800);
  await p.evaluate(() => document.querySelector('[data-act="launch"]').click());
  await wait(1500);
  const go = (w) => p.evaluate((w) => { const D = G.director; D.wave = w - 1; D.state = "break"; D.timer = 0; }, w);
  await p.evaluate(() => setInterval(() => { const P = G.player; if (!P) return; G.pendingLevels = 0; if (G.state === "levelup") { G.state = "play"; G.ui.show(null); } P.hp = P.maxHp; P.shield = P.maxShield; const e = G.enemies.find((e) => !e.dead); if (e) { G.input.wx = e.x; G.input.wz = e.z; } G.input.lmb = !0; G.input.rmb = Math.random() < .3; }, 16));
  await go(12);
  let maxW = 0, shots = 0;
  const fps = await p.evaluate(() => new Promise((res) => { let f = 0; const t0 = performance.now(); const tick = () => { f++; performance.now() - t0 < 6000 ? requestAnimationFrame(tick) : res(Math.round(f / 6)); }; requestAnimationFrame(tick); }));
  for (let k = 0; k < 40 && shots < 3; k++) {
    const w = (await p.evaluate(() => $VBfx())).wrecks;
    maxW = Math.max(maxW, w);
    if (w >= 4) await p.screenshot({ path: `${out}/wreck_${++shots}.png` });
    await wait(120);
  }
  const battle = await p.evaluate(() => $VBfx());
  await go(20);
  await wait(9000);
  const boss = await p.evaluate(() => ({ ...$VBfx(), boss: !!(G.boss && !G.boss.dead) }));
  await p.screenshot({ path: `${out}/boss.png` });
  const ok = menu.music?.menu.playing && battle.sfx > 20 && battle.music.battle.playing && battle.music.battle.vol > .1 && maxW > 0 && (!boss.boss || boss.music.boss.playing) && !errs.length;
  console.log(JSON.stringify({ menu: menu.music, fps, maxWrecks: maxW, battle, boss }), ok ? "ok" : "FAIL " + errs.slice(0, 3).join(" | "));
  await b.close();
  process.exit(ok ? 0 : 1);
})().catch((e) => { console.error(e); process.exit(1); });
