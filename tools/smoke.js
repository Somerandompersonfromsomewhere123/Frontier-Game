// Whole-roster smoke test: node smoke.js <GAME.html> [wave]
// Every ship in the game flies a wave firing both weapons, casting its ability (Q), dashing and using F / Shift;
// collects page errors per ship. Also forces a music track to end and checks the playlist moves on. Real GPU like balance.js.
const pp = require(__dirname + "/pp/node_modules/puppeteer-core"), fs = require("fs");
const [file, wave = "12"] = process.argv.slice(2);
const ids = [...new Set([...fs.readFileSync(file, "utf8").matchAll(/nt\("([a-z]+)","[^"]+","(?:assault|heavy|sniper|drone|missile|energy)",\d/g)].map((m) => m[1]))];
const wait = (ms) => new Promise((r) => setTimeout(r, ms));
(async () => {
  const b = await pp.launch({ executablePath: "C:/Program Files/Google/Chrome/Application/chrome.exe", headless: "new", args: ["--use-angle=d3d11", "--enable-gpu", "--ignore-gpu-blocklist"] });
  const bad = {};
  for (const id of ids) {
    const p = await b.newPage();
    await p.setViewport({ width: 960, height: 540 });
    p.on("pageerror", (e) => ((bad[id] ||= new Set()).add(e.message + " @ " + (e.stack || "").split("\n")[1]?.trim())));
    await p.goto(require("url").pathToFileURL(file).href, { waitUntil: "load", timeout: 120000 });
    await p.waitForFunction(() => window.G && G.state === "menu", { timeout: 120000 });
    await p.mouse.click(480, 270);
    await p.evaluate((id) => { G.save.unlocked.includes(id) || G.save.unlocked.push(id); G.save.selected = id; G.save.tutorialDone = !0; document.querySelector('[data-act="hangar"]').click() }, id);
    await wait(500);
    await p.evaluate(() => document.querySelector('[data-act="launch"]').click());
    await wait(1200);
    await p.evaluate((w) => {
      const D = G.director; D.wave = w - 1; D.state = "break"; D.timer = 0;
      setInterval(() => { const P = G.player; if (!P) return; G.pendingLevels = 0; if (G.state === "levelup") { G.state = "play"; G.ui.show(null); } P.hp = P.maxHp; P.shield = P.maxShield; P.energy = P.maxEnergy || 100; const e = G.enemies.find((e) => !e.dead); if (e) { G.input.wx = e.x; G.input.wz = e.z; } G.input.lmb = !0; G.input.rmb = !0; }, 16);
    }, +wave);
    for (let k = 0; k < 4; k++) { await wait(900); for (const key of ["KeyQ", "Space", "KeyF"]) await p.keyboard.press(key); await p.keyboard.down("ShiftLeft"); await p.keyboard.down("KeyW"); await wait(300); await p.keyboard.up("KeyW"); await p.keyboard.up("ShiftLeft"); }
    await p.close();
    process.stdout.write(bad[id] ? "x" : ".");
  }
  // playlist: jump the playing battle track to its last second and check the next one takes over
  const p = await b.newPage();
  await p.goto(require("url").pathToFileURL(file).href, { waitUntil: "load", timeout: 120000 });
  await p.waitForFunction(() => window.G && G.state === "menu", { timeout: 120000 });
  await p.mouse.click(480, 270);
  await p.evaluate(() => { G.save.tutorialDone = !0; document.querySelector('[data-act="hangar"]').click() }); await wait(500);
  await p.evaluate(() => document.querySelector('[data-act="launch"]').click()); await wait(4000);
  const t0 = await p.evaluate(() => $VBfx().music.battle.track);
  await p.evaluate(() => $VBfxEnd("battle")); await wait(2500);
  const t1 = await p.evaluate(() => $VBfx().music.battle);

  console.log("\nships:", ids.length, "with errors:", Object.keys(bad).length);
  for (const [id, s] of Object.entries(bad)) console.log(" ", id, [...s].slice(0, 2).join(" | "));
  console.log("battle playlist", t0, "->", t1.track, t1.playing ? "playing" : "STOPPED", t0 !== t1.track && t1.playing ? "ok" : "FAIL");
  await b.close();
})().catch((e) => { console.error(e); process.exit(1); });
