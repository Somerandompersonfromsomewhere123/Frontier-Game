// Launches a run per ship, parks it below a rock away from the station, aims the game's own input at the rock,
// holds fire, screenshots mid-volley and reports how much rock HP the weapon removed.
const pp = require(__dirname + "/pp/node_modules/puppeteer-core");
const [file, tag, ...ships] = process.argv.slice(2);
const wait = (ms) => new Promise((r) => setTimeout(r, ms));
(async () => {
  const b = await pp.launch({ executablePath: "C:/Program Files/Google/Chrome/Application/chrome.exe", headless: "new", args: ["--use-angle=swiftshader", "--enable-unsafe-swiftshader"] });
  for (const id of ships) for (const slot of ["lmb", "rmb"]) {
    const p = await b.newPage();
    await p.setViewport({ width: 1280, height: 720 });
    const errs = [];
    p.on("pageerror", (e) => errs.push(e.message));
    await p.goto(require("url").pathToFileURL(file).href, { waitUntil: "load", timeout: 120000 });
    await p.waitForFunction(() => window.G && G.state === "menu", { timeout: 120000 });
    await p.evaluate((id) => { G.save.unlocked.push(id); G.save.selected = id; G.save.tutorialDone = !0; document.querySelector('[data-act="hangar"]').click() }, id);
    await wait(800);
    await p.evaluate(() => document.querySelector('[data-act="launch"]').click());
    await wait(1500);
    const hp0 = await p.evaluate(() => {
      const P = G.player, a = G.asteroids.filter((r) => !r.dead && r.type !== "explosive" && Math.hypot(r.x, r.z) > 900).sort((r, s) => Math.hypot(r.x - P.x, r.z - P.z) - Math.hypot(s.x - P.x, s.z - P.z))[0];
      P.x = a.x; P.z = a.z + 230 + a.r; P.vx = P.vz = 0;
      window.__rock = a; window.__near = G.asteroids.filter((r) => !r.dead && Math.hypot(r.x - P.x, r.z - P.z) < 900); window.__hp0 = __near.reduce((t, r) => t + r.hp, 0);
      // keep the game's cursor on the rock every frame
      window.__aim = setInterval(() => { const c = G.R.camera, v = new c.position.constructor(__rock.x, 0, __rock.z).project(c); G.input.sx = (v.x + 1) / 2 * innerWidth; G.input.sy = (1 - v.y) / 2 * innerHeight; G.input.moved = !0; }, 16);
      return __hp0;
    });
    await wait(1200);
    await p.evaluate((slot) => { window.__fire = setInterval(() => (G.input[slot] = !0), 16); }, slot);
    await wait(1300);
    await p.screenshot({ path: `${__dirname}/fire_${tag}_${id}_${slot}.png` });
    await wait(1700);
    await p.evaluate((slot) => { clearInterval(__fire); G.input[slot] = !1; }, slot);
    await wait(700);
    const [hp1, ang] = await p.evaluate(() => [__near.reduce((t, r) => t + (r.dead ? 0 : r.hp), 0), Math.abs(((G.player.angle - Math.atan2(__rock.z - G.player.z, __rock.x - G.player.x) + 9.42) % 6.28) - 3.14)]);
    console.log(id, slot === "lmb" ? "primary  " : "secondary", "nearby rock hp", Math.round(hp0), "->", Math.round(hp1), " aim error", ang.toFixed(2), errs.length ? "ERR " + errs.join("; ") : "");
    await p.close();
  }
  await b.close();
})().catch((e) => { console.error(e); process.exit(1); });
