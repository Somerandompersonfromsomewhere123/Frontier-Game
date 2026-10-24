// Trailer footage: node rec.js <GAME.html> <outDir> [shot names...]
// Each shot loads the game on the real GPU at 1080p, autopilots a run (aims at the boss or nearest enemy, fires both guns,
// refills hull/shield) and records the WebGL canvas only, so no HUD. Hangar shots record the spinning ship preview.
const pp = require(__dirname + "/../pp/node_modules/puppeteer-core");
const fs = require("fs");
const [file, out, ...only] = process.argv.slice(2);
const wait = (ms) => new Promise((r) => setTimeout(r, ms));
// gameplay is recorded at SLOW game speed (headless 1080p renders ~24 fps) and sped back up by the compositor
const SLOW = .4;
// cam: chase|top · map: sector index · move: fwd|orbit · kill: seconds until the boss is set to near-dead
const SHOTS = [
  { n: "hero", ship: "valkyrieprime", cam: "chase", wave: 14, map: 2, move: "fwd", secs: 9 },
  { n: "chase_swarm", ship: "starbreaker", cam: "chase", wave: 23, map: 3, move: "fwd", secs: 8 },
  { n: "top_swarm", ship: "overseer", cam: "top", wave: 18, map: 0, move: "orbit", secs: 8, ability: 4 },
  { n: "w_lance", ship: "starbreaker", cam: "top", wave: 12, map: 1, move: "orbit", secs: 6 },
  { n: "w_missile", ship: "armageddon", cam: "top", wave: 13, map: 4, move: "orbit", secs: 6, ability: 3 },
  { n: "w_orbs", ship: "singularity", cam: "top", wave: 16, map: 0, move: "orbit", secs: 6 },
  { n: "w_drones", ship: "mothership", cam: "top", wave: 15, map: 6, move: "orbit", secs: 6 },
  { n: "w_tempest", ship: "tempest", cam: "chase", wave: 17, map: 8, move: "fwd", secs: 6 },
  { n: "w_valk", ship: "valkyrieprime", cam: "top", wave: 19, map: 9, move: "orbit", secs: 6, ability: 2.5 },
  { n: "boss10", ship: "starcore", cam: "chase", wave: 10, map: 0, move: "orbit", secs: 8, warm: 7 },
  { n: "boss20", ship: "colossus", cam: "chase", wave: 20, map: 1, move: "orbit", secs: 8, warm: 7 },
  { n: "boss30", ship: "titan", cam: "top", wave: 30, map: 2, move: "orbit", secs: 8, warm: 7 },
  { n: "boss40", ship: "starcore", cam: "top", wave: 40, map: 3, move: "orbit", secs: 8, warm: 7 },
  { n: "boss50", ship: "tempest", cam: "chase", wave: 50, map: 4, move: "orbit", secs: 8, warm: 7 },
  { n: "boss_kill", ship: "starcore", cam: "top", wave: 25, map: 3, move: "orbit", secs: 10, warm: 7, kill: 2 },
  ...[1, 2, 3, 4, 9, 5].map((m) => ({ n: "sector" + m, ship: "valkyrieprime", cam: "chase", wave: 11, map: m, move: "fwd", secs: 4 })),
  ...["starcore", "valkyrieprime", "tempest", "sovereign", "spectre", "titan"].map((s) => ({ n: "hangar_" + s, ship: s, hangar: 1, secs: 4 })),
];
async function save(p, path) {
  const size = await p.evaluate(() => window.__blob.size), parts = [];
  for (let a = 0; a < size; a += 8e6) parts.push(Buffer.from(await p.evaluate((a) => new Promise((r) => { const f = new FileReader(); f.onload = () => r(f.result.split(",")[1]); f.readAsDataURL(window.__blob.slice(a, a + 8e6)); }), a), "base64"));
  fs.writeFileSync(path, Buffer.concat(parts));
}
(async () => {
  fs.mkdirSync(out, { recursive: true });
  const b = await pp.launch({ executablePath: "C:/Program Files/Google/Chrome/Application/chrome.exe", headless: "new", args: ["--use-angle=d3d11", "--enable-gpu", "--ignore-gpu-blocklist", "--autoplay-policy=no-user-gesture-required"] });
  const ids = [...fs.readFileSync(file, "utf8").matchAll(/nt\("(\w+)","[^"]+","\w+",\d/g)].map((m) => m[1]);
  for (const sh of SHOTS.filter((s) => !only.length || only.includes(s.n))) {
    const p = await b.newPage();
    await p.setViewport({ width: 1920, height: 1080 });
    const errs = [];
    p.on("pageerror", (e) => errs.push(e.message));
    await p.goto(require("url").pathToFileURL(file).href, { waitUntil: "load", timeout: 120000 });
    await p.waitForFunction(() => window.G && G.state === "menu", { timeout: 120000 });
    await p.evaluate((sh) => {
      Object.assign(G.save.settings, { cam: sh.cam || "top", map: sh.map ?? "auto", quality: "high" });
      G.save.unlocked.includes(sh.ship) || G.save.unlocked.push(sh.ship); G.save.selected = sh.ship; G.save.tutorialDone = !0;
      document.querySelector('[data-act="hangar"]').click();
      window.__rec = (secs) => new Promise((res) => {
        const mr = new MediaRecorder(G.R.renderer.domElement.captureStream(60), { mimeType: "video/webm;codecs=vp9", videoBitsPerSecond: 40e6 }), ch = [];
        mr.ondataavailable = (e) => ch.push(e.data); mr.onstop = () => { window.__blob = new Blob(ch); res(); };
        mr.start(); setTimeout(() => mr.stop(), secs * 1000);
      });
    }, sh);
    await wait(1500);
    if (!sh.hangar) {
      await p.evaluate(() => document.querySelector('[data-act="launch"]').click());
      await wait(1500);
      await p.evaluate((sh, SLOW) => {
        const D = G.director, P = G.player, c = G.R.camera, V = c.position.constructor, K = G.input.keys, t0 = performance.now();
        D.wave = sh.wave - 1; D.state = "break"; D.timer = 0;
        let lastQ = 0, killed = !1;
        setInterval(() => {
          G.pendingLevels = 0; if (G.state === "levelup") { G.state = "play"; G.ui.show(null); }
          P.hp = P.maxHp; P.shield = P.maxShield; if (P.maxEnergy) P.energy = P.maxEnergy;
          G.timeScale = SLOW, G.slowT = 0;
          const s = (performance.now() - t0) / 1000 * SLOW, live = G.enemies.filter((e) => !e.dead && !e.ghost);
          const t = live.find((e) => e.boss) || live.sort((a, b) => Math.hypot(a.x - P.x, a.z - P.z) - Math.hypot(b.x - P.x, b.z - P.z))[0];
          let aimed = !1;
          if (t) { const v = new V(t.x, 0, t.z).project(c); if (v.z < 1 && Math.abs(v.x) < 1.3 && Math.abs(v.y) < 1.3) { G.input.sx = (v.x + 1) / 2 * innerWidth; G.input.sy = (1 - v.y) / 2 * innerHeight; aimed = !0; } }
          if (!aimed) { G.input.sx = innerWidth * (sh.cam === "chase" && t ? .78 : .5); G.input.sy = innerHeight * .3; }
          G.input.moved = !0; G.input.lmb = G.input.rmb = !0;
          K.delete("KeyA"); K.delete("KeyD"); K.delete("KeyW");
          if (sh.move === "fwd") K.add("KeyW");
          else K.add(Math.floor(s / 2.5) % 2 ? "KeyA" : "KeyD");
          if (sh.ability && s - lastQ > sh.ability && s > (sh.warm || 4)) { lastQ = s; G.input.pressed.add("KeyQ"); }
          if (sh.kill && s > (sh.warm || 4) + sh.kill && !killed) { const bo = live.find((e) => e.boss); if (bo) { killed = !0; for (const e of G.enemies) if (e.boss || e.parts) e.hp = Math.min(e.hp, 30); } }
        }, 16);
      }, sh, SLOW);
      await wait((sh.warm || 4) * 1000 / SLOW);
    }
    await p.evaluate((secs) => window.__rec(secs), sh.hangar ? sh.secs : sh.secs / SLOW);
    await save(p, `${out}/${sh.n}.webm`);
    console.log(sh.n, errs.length ? "ERR " + errs.slice(0, 2).join(" | ") : "ok");
    await p.close();
  }
  // evolution tree, everything unlocked: a still for the compositor to pan across
  if (!only.length || only.includes("tree")) {
    const p = await b.newPage();
    await p.setViewport({ width: 1920, height: 1080 });
    await p.goto(require("url").pathToFileURL(file).href, { waitUntil: "load", timeout: 120000 });
    await p.waitForFunction(() => window.G && G.state === "menu", { timeout: 120000 });
    await p.evaluate((ids) => { G.save.unlocked = ids; G.save.tutorialDone = !0; G.save.selected = "starcore"; document.querySelector('[data-act="hangar"]').click(); }, ids);
    await wait(800);
    await p.evaluate(() => document.querySelector('[data-act="openTree"]').click());
    await wait(4000);
    await p.screenshot({ path: `${out}/tree.png` });
    console.log("tree ok");
    await p.close();
  }
  await b.close();
})().catch((e) => { console.error(e); process.exit(1); });
