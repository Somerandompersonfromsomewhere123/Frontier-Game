// Class shot styles check: node classfx.js <GAME.html> <outDir> ship1 ship2 ...
// Each ship plays wave 12 firing both weapons at the nearest enemy; screenshots mid-fight and fails on page errors.
const pp = require(__dirname + "/pp/node_modules/puppeteer-core");
const [file, out, ...ships] = process.argv.slice(2);
const wait = (ms) => new Promise((r) => setTimeout(r, ms));
(async () => {
  const b = await pp.launch({ executablePath: "C:/Program Files/Google/Chrome/Application/chrome.exe", headless: "new", args: ["--use-angle=d3d11", "--enable-gpu", "--ignore-gpu-blocklist"] });
  const errs = [];
  for (const id of ships) {
    const p = await b.newPage();
    await p.setViewport({ width: 1280, height: 720 });
    p.on("pageerror", (e) => errs.push(id + ": " + e.message));
    await p.goto(require("url").pathToFileURL(file).href, { waitUntil: "load", timeout: 120000 });
    await p.waitForFunction(() => window.G && G.state === "menu", { timeout: 120000 });
    await p.evaluate((id) => { G.save.unlocked.includes(id) || G.save.unlocked.push(id); G.save.selected = id; G.save.tutorialDone = !0; G.save.settings.cam = "top"; document.querySelector('[data-act="hangar"]').click() }, id);
    await wait(700);
    await p.evaluate(() => document.querySelector('[data-act="launch"]').click());
    await wait(1500);
    await p.evaluate(() => {
      const D = G.director; D.wave = 11; D.state = "break"; D.timer = 0;
      setInterval(() => { const P = G.player; if (!P) return; G.pendingLevels = 0; if (G.state === "levelup") { G.state = "play"; G.ui.show(null); } P.hp = P.maxHp; P.shield = P.maxShield; P.energy = P.maxEnergy || 100; const e = G.enemies.filter((e) => !e.dead).sort((a, b) => Math.hypot(a.x - P.x, a.z - P.z) - Math.hypot(b.x - P.x, b.z - P.z))[0]; if (e) { G.input.wx = e.x; G.input.wz = e.z; } G.input.lmb = !0; G.input.rmb = !0; }, 16);
    });
    await wait(5500);
    await p.screenshot({ path: `${out}/class_${id}.png` });
    await p.close();
  }
  console.log(errs.length ? "ERR " + errs.slice(0, 4).join(" | ") : "ok");
  await b.close();
})().catch((e) => { console.error(e); process.exit(1); });
