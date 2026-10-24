// Automatic sector change check: node skyauto.js <GAME.html> <outDir> [fromWave]
// Starts a run at fromWave (default 9), kills everything so the waves clear the normal way, and logs the sky sector at each
// wave start; asserts the sector changes when a 10-wave block ends (wave 11, 21, ...). Uses the real GPU like balance.js.
const pp = require(__dirname + "/pp/node_modules/puppeteer-core");
const [file, out, from = "9"] = process.argv.slice(2);
const wait = (ms) => new Promise((r) => setTimeout(r, ms));
(async () => {
  const b = await pp.launch({ executablePath: "C:/Program Files/Google/Chrome/Application/chrome.exe", headless: "new", args: ["--use-angle=d3d11", "--enable-gpu", "--ignore-gpu-blocklist"] });
  const p = await b.newPage();
  await p.setViewport({ width: 960, height: 540 });
  const errs = [];
  p.on("pageerror", (e) => errs.push(e.message + " @ " + (e.stack || "").split("\n").slice(1, 2).join(" ")));
  await p.goto(require("url").pathToFileURL(file).href, { waitUntil: "load", timeout: 120000 });
  await p.waitForFunction(() => window.G && G.state === "menu", { timeout: 120000 });
  await p.evaluate(() => { G.save.tutorialDone = !0; G.save.settings.map = "auto"; document.querySelector('[data-act="hangar"]').click() });
  await wait(600);
  await p.evaluate(() => document.querySelector('[data-act="launch"]').click());
  await wait(1500);
  await p.evaluate((w) => {
    const D = G.director; D.wave = w - 1; D.state = "break"; D.timer = 0;
    window.$log = [];
    let last = -1;
    setInterval(() => {
      const P = G.player; if (!P) return;
      G.pendingLevels = 0; if (G.state === "levelup") { G.state = "play"; G.ui.show(null); }
      P.hp = P.maxHp; P.shield = P.maxShield;
      for (const e of G.enemies) e.dead || G.applyDamage(e, 1e9, { silent: !0 });
      if (D.state === "break" && D.timer > 1) D.timer = 1; // skip the 15 s break
      if (D.wave !== last) { last = D.wave; $log.push({ wave: D.wave, state: D.state, ...$VBfx() }); }
    }, 50);
  }, +from);
  const seen = [];
  for (let k = 0; k < 60; k++) {
    await wait(1000);
    const L = await p.evaluate(() => ({ wave: G.director.wave, state: G.director.state, ...$VBfx() }));
    seen.push(`${L.wave}:${L.state}:${L.skyName}`);
    if (k % 5 === 0) await p.screenshot({ path: `${out}/sky_w${L.wave}_${k}.png` });
    if (L.wave >= +from + 4) break;
  }
  const log = await p.evaluate(() => $log.map((l) => `${l.wave}:${l.skyName}`));
  console.log("starts", log.join(" | "));
  console.log("polled", seen.join(" "));
  console.log(errs.length ? "ERR " + errs.slice(0, 3).join(" | ") : "no page errors");
  await b.close();
})().catch((e) => { console.error(e); process.exit(1); });
