// Screenshots each ship in the hangar: node view.js <GAME.html> <outDir> id1 id2 ...
const pp = require(__dirname + "/pp/node_modules/puppeteer-core");
const [file, out, ...ships] = process.argv.slice(2);
const wait = (ms) => new Promise((r) => setTimeout(r, ms));
(async () => {
  const b = await pp.launch({ executablePath: "C:/Program Files/Google/Chrome/Application/chrome.exe", headless: "new", args: ["--use-angle=swiftshader", "--enable-unsafe-swiftshader"] });
  const p = await b.newPage();
  await p.setViewport({ width: 1280, height: 720 });
  const errs = [];
  p.on("pageerror", (e) => errs.push(e.message));
  await p.goto(require("url").pathToFileURL(file).href, { waitUntil: "load", timeout: 120000 });
  await p.waitForFunction(() => window.G && G.state === "menu", { timeout: 120000 });
  for (const id of ships) {
    await p.evaluate((id) => { G.save.unlocked.includes(id) || G.save.unlocked.push(id); G.save.selected = id; G.save.tutorialDone = !0; document.querySelector('[data-act="hangar"]').click() }, id);
    await wait(2500);
    await p.screenshot({ path: `${out}/${id}.png` });
    await p.evaluate(() => document.querySelector('[data-act="back"]')?.click());
    await wait(300);
  }
  console.log(errs.length ? "ERR " + errs.slice(0, 3).join(" | ") : "ok");
  await b.close();
})().catch((e) => { console.error(e); process.exit(1); });
