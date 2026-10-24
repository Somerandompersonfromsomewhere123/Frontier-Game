// Chase camera check: node chase.js <GAME.html> <outDir> <ship> <wave>
// Plays a wave in each camera mode with W held and the cursor slightly right of centre; asserts W moves the ship along the
// camera's forward direction in chase mode, and screenshots both modes. Uses the real GPU like balance.js.
const pp = require(__dirname + "/pp/node_modules/puppeteer-core");
const [file, out, ship = "starbreaker", wave = "12"] = process.argv.slice(2);
const wait = (ms) => new Promise((r) => setTimeout(r, ms));
(async () => {
  const b = await pp.launch({ executablePath: "C:/Program Files/Google/Chrome/Application/chrome.exe", headless: "new", args: ["--use-angle=d3d11", "--enable-gpu", "--ignore-gpu-blocklist"] });
  let fail = 0;
  for (const mode of ["chase", "top"]) {
    const p = await b.newPage();
    await p.setViewport({ width: 1280, height: 720 });
    const errs = [];
    p.on("pageerror", (e) => errs.push(e.message));
    await p.goto(require("url").pathToFileURL(file).href, { waitUntil: "load", timeout: 120000 });
    await p.waitForFunction(() => window.G && G.state === "menu", { timeout: 120000 });
    await p.evaluate((id, mode) => { G.save.unlocked.push(id); G.save.selected = id; G.save.tutorialDone = !0; G.save.settings.cam = mode; document.querySelector('[data-act="hangar"]').click() }, ship, mode);
    await wait(800);
    await p.evaluate(() => document.querySelector('[data-act="launch"]').click());
    await wait(1500);
    await p.evaluate((w) => {
      const D = G.director, P = G.player;
      D.wave = w - 1; D.state = "break"; D.timer = 0;
      setInterval(() => { G.pendingLevels = 0; if (G.state === "levelup") { G.state = "play"; G.ui.show(null); } P.hp = P.maxHp; P.shield = P.maxShield; G.input.sx = innerWidth * .56; G.input.sy = innerHeight * .3; G.input.moved = !0; G.input.lmb = !0; }, 16);
    }, +wave);
    await wait(4000);
    await p.keyboard.down("KeyW");
    const r = await p.evaluate(() => new Promise((res) => { const P = G.player, x = P.x, z = P.z, c = G.R.camera, f = c.getWorldDirection(new c.position.constructor()); setTimeout(() => { const dx = P.x - x, dz = P.z - z, d = Math.hypot(dx, dz) || 1; res({ cos: (dx * f.x + dz * f.z) / d / Math.hypot(f.x, f.z), moved: Math.round(d), far: c.far }); }, 250); }));
    await wait(3000);
    await p.keyboard.up("KeyW");
    await p.screenshot({ path: `${out}/chase_${mode}_${ship}.png` });
    // W should move the ship the way the camera looks: forward in chase, screen-up (-z) in top-down
    const ok = mode === "chase" ? r.cos > .9 : true;
    ok || fail++;
    console.log(mode, JSON.stringify(r), ok ? "" : "FAIL: W not along camera forward", errs.length ? "ERR " + errs.slice(0, 3).join(" | ") : "ok");
    errs.length && fail++;
    await p.close();
  }
  await b.close();
  process.exit(fail ? 1 : 0);
})().catch((e) => { console.error(e); process.exit(1); });
