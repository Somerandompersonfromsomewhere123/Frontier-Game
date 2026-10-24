// Spawns each boss in turn (boss wave 5k), screenshots it attacking, forces phase 3, kills it, and checks cleanup.
const pp = require(__dirname + "/pp/node_modules/puppeteer-core");
const [file, ...waves] = process.argv.slice(2);
const wait = (ms) => new Promise((r) => setTimeout(r, ms));
(async () => {
  const b = await pp.launch({ executablePath: "C:/Program Files/Google/Chrome/Application/chrome.exe", headless: "new", args: ["--use-angle=swiftshader", "--enable-unsafe-swiftshader"] });
  for (const w of waves.map(Number)) {
    const p = await b.newPage();
    await p.setViewport({ width: 1280, height: 720 });
    const errs = [];
    p.on("pageerror", (e) => errs.push(e.message));
    await p.goto(require("url").pathToFileURL(file).href, { waitUntil: "load", timeout: 120000 });
    await p.waitForFunction(() => window.G && G.state === "menu", { timeout: 120000 });
    await p.evaluate(() => { G.save.unlocked.push("titan"); G.save.selected = "titan"; G.save.tutorialDone = !0; document.querySelector('[data-act="hangar"]').click() });
    await wait(800);
    await p.evaluate(() => document.querySelector('[data-act="launch"]').click());
    await wait(1200);
    const name = await p.evaluate((w) => { setInterval(() => { G.player.invuln = 9; G.pendingLevels = 0; if (G.state === "levelup") { G.state = "play"; G.ui.show(null); } }, 50); G.director.wave = w; G.spawnBoss(1); return G.boss.title || G.boss.name; }, w);
    await wait(3800);
    await p.evaluate(() => { const B = G.boss; G.player.x = B.x; G.player.z = B.z + 430; G.player.vx = G.player.vz = 0; });
    await wait(3500);
    await p.screenshot({ path: `${__dirname}/boss_${w}_a.png` });
    await p.evaluate(() => { G.boss.hp = G.boss.maxHp * .3; });
    await wait(4000);
    await p.screenshot({ path: `${__dirname}/boss_${w}_b.png` });
    const st = await p.evaluate(() => ({ state: G.state, phase: G.boss.phase, enemies: G.enemies.filter((e) => !e.dead && !e.custom).length, bar: document.getElementById("bossName").textContent, phaseTxt: document.getElementById("bossPhase").textContent.slice(0, 60), obj: G.objective }));
    await p.evaluate(() => { G.boss.hp = 0; G.boss.die(); });
    await p.waitForFunction(() => !G.boss, { timeout: 60000, polling: 500 }).catch(() => {});
    const after = await p.evaluate(() => ({ boss: !!G.boss, bosses: G.save.stats.bosses, meshesLeft: G.scene.children.length }));
    console.log(`wave ${w}: ${name}`, JSON.stringify(st), "after kill", JSON.stringify(after), errs.length ? "ERR " + errs.slice(0, 3).join(" | ") : "ok");
    await p.close();
  }
  await b.close();
})().catch((e) => { console.error(e); process.exit(1); });
