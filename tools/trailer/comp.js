// Builds the trailer: node comp.js <workDir> <out.mp4> [fromSec toSec]
// workDir holds clips/ (from rec.js). Extracts each clip's frames at 60 fps (gameplay sped back up from rec.js's SLOW),
// renders every frame through comp.html, synthesises the score (music.js) and encodes H.264 + AAC.
// With fromSec/toSec it renders only that range to <workDir>/preview/ as JPEGs, for checking.
const fs = require("fs"), path = require("path"), { execFileSync } = require("child_process");
const pp = require(__dirname + "/../pp/node_modules/puppeteer-core"), FF = require(__dirname + "/../pp/node_modules/ffmpeg-static");
const { FPS, LEN, S } = require("./timeline.js");
const [work, outMp4, from, to] = process.argv.slice(2);
const SLOW = .4, frames = path.join(work, "frames");
(async () => {
  // frames per clip, only as far as the edit uses it
  const need = {};
  for (const s of S) for (const [c, at] of [[s.clip, s.at], [s.split, s.splitAt]]) if (c && c !== "tree") need[c] = Math.max(need[c] || 0, at + (s.t1 - s.t0) + .2);
  const cnt = {};
  for (const [c, dur] of Object.entries(need)) {
    const dir = path.join(frames, c);
    if (!fs.existsSync(path.join(work, "clips", c + ".webm"))) { console.log("missing clip", c); continue; }
    if (!fs.existsSync(dir) || !fs.readdirSync(dir).length) {
      fs.mkdirSync(dir, { recursive: true });
      const sp = c.startsWith("hangar_") ? 1 : SLOW;
      execFileSync(FF, ["-hide_banner", "-loglevel", "error", "-i", path.join(work, "clips", c + ".webm"), "-vf", `setpts=PTS*${sp},fps=${FPS},scale=1920:1080`, "-t", String(dur), "-q:v", "2", path.join(dir, "%05d.jpg")]);
    }
    cnt[c] = fs.readdirSync(dir).length;
    if (cnt[c] < dur * FPS * .9) console.log("short clip", c, cnt[c], "frames, edit wants", Math.round(dur * FPS));
  }
  const b = await pp.launch({ executablePath: "C:/Program Files/Google/Chrome/Application/chrome.exe", headless: "new", args: ["--allow-file-access-from-files"] });
  const p = await b.newPage();
  await p.setViewport({ width: 1920, height: 1080 });
  p.on("pageerror", (e) => console.log("page error", e.message));
  await p.goto(require("url").pathToFileURL(__dirname + "/comp.html").href, { waitUntil: "networkidle0" });
  const fontsOk = await p.evaluate((S, cnt, base, fps) => init(S, cnt, base, fps), S, cnt, require("url").pathToFileURL(frames).href, FPS);
  fontsOk || console.log("WARNING: trailer fonts did not load (offline?), falling back to system fonts");
  const out = path.join(work, from != null ? "preview" : "render");
  fs.rmSync(out, { recursive: true, force: true }); fs.mkdirSync(out, { recursive: true });
  const f0 = from != null ? Math.round(from * FPS) : 0, f1 = to != null ? Math.round(to * FPS) : LEN * FPS;
  for (let f = f0, k = 1; f < f1; f++, k++) {
    const d = await p.evaluate((f) => render(f), f);
    fs.writeFileSync(path.join(out, String(from != null ? f : k).padStart(5, "0") + ".jpg"), Buffer.from(d.split(",")[1], "base64"));
    if (f % 600 === 0) console.log("frame", f);
  }
  await b.close();
  if (from != null) return console.log("preview frames in", out);
  const wav = path.join(work, "music.wav");
  execFileSync("node", [__dirname + "/music.js", wav], { stdio: "inherit" });
  execFileSync(FF, ["-hide_banner", "-loglevel", "error", "-y", "-framerate", String(FPS), "-i", path.join(out, "%05d.jpg"), "-i", wav, "-c:v", "libx264", "-preset", "slow", "-crf", "20", "-pix_fmt", "yuv420p", "-movflags", "+faststart", "-c:a", "aac", "-b:a", "256k", "-shortest", outMp4]);
  console.log("wrote", outMp4, (fs.statSync(outMp4).size / 1e6).toFixed(1), "MB");
})().catch((e) => { console.error(e); process.exit(1); });
