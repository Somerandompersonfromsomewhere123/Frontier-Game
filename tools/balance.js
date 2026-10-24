// Late-wave balance probe: node balance.js <GAME.html> <ship> wave1 wave2 ...
// Starts each wave, auto-aims at the nearest enemy with both guns held, refills the player every tick and
// reports damage taken per second, enemies killed/alive and frame time over 30 s. Uses the real GPU: on
// swiftshader the game crawls at ~3 fps and nothing dies.
const pp = require(__dirname + "/pp/node_modules/puppeteer-core");
const [file, ship, ...waves] = process.argv.slice(2);
const wait = (ms) => new Promise((r) => setTimeout(r, ms));
(async () => {
  const b = await pp.launch({ executablePath: "C:/Program Files/Google/Chrome/Application/chrome.exe", headless: "new", args: ["--use-angle=d3d11", "--enable-gpu", "--ignore-gpu-blocklist"] });
  for (const w of waves.map(Number)) {
    const p = await b.newPage();
    await p.setViewport({ width: 1280, height: 720 });
    const errs = [];
    p.on("pageerror", (e) => errs.push(e.message));
    await p.goto(require("url").pathToFileURL(file).href, { waitUntil: "load", timeout: 120000 });
    await p.waitForFunction(() => window.G && G.state === "menu", { timeout: 120000 });
    await p.evaluate((id) => { G.save.unlocked.push(id); G.save.selected = id; G.save.tutorialDone = !0; document.querySelector('[data-act="hangar"]').click() }, ship);
    await wait(800);
    await p.evaluate(() => document.querySelector('[data-act="launch"]').click());
    await wait(1500);
    await p.evaluate((w) => {
      const D = G.director, P = G.player, c = G.R.camera, V = c.position.constructor;
      D.wave = w - 1; D.state = "break"; D.timer = 0;
      window.__s = { dmg: 0, frames: [], last: performance.now(), seen: new Set() };
      const loop = (t) => { __s.frames.push(t - __s.last); __s.last = t; requestAnimationFrame(loop); };
      requestAnimationFrame(loop);
      setInterval(() => {
        G.pendingLevels = 0; if (G.state === "levelup") { G.state = "play"; G.ui.show(null); }
        __s.dmg += P.maxHp - P.hp + P.maxShield - P.shield; P.hp = P.maxHp; P.shield = P.maxShield;
        for (const e of G.enemies) __s.seen.add(e);
        const t = G.enemies.filter((e) => !e.dead).sort((a, b) => Math.hypot(a.x - P.x, a.z - P.z) - Math.hypot(b.x - P.x, b.z - P.z))[0];
        if (t) { const v = new V(t.x, 0, t.z).project(c); G.input.sx = (v.x + 1) / 2 * innerWidth; G.input.sy = (1 - v.y) / 2 * innerHeight; G.input.moved = !0; }
        G.input.lmb = G.input.rmb = !0;
      }, 16);
    }, w);
    await wait(30000);
    const r = await p.evaluate(() => {
      const f = __s.frames.slice(30).sort((a, b) => a - b), alive = G.enemies.filter((e) => !e.dead).length;
      return { dmgPerSec: Math.round(__s.dmg / 30), killed: __s.seen.size - alive, alive, queued: G.director.queue.length, medianMs: Math.round(f[f.length >> 1]), p95Ms: Math.round(f[Math.floor(f.length * .95)]), hp: G.player.maxHp + G.player.maxShield };
    });
    await p.screenshot({ path: `${__dirname}/balance_${ship}_${w}.png` });
    console.log(`wave ${w}`, JSON.stringify(r), errs.length ? "ERR " + errs.slice(0, 3).join(" | ") : "ok");
    await p.close();
  }
  await b.close();
})().catch((e) => { console.error(e); process.exit(1); });
