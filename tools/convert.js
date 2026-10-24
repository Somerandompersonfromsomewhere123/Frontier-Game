// Converts the downloaded OBJ / GLB ships into the game's packed model format:
// { mn, mx, P: [{ n, i, b, m }], T: [jpeg base64] }, the same layout $AL (Void Sovereign) uses.
// Optional per-model fix-up (rotY degrees) turns the nose to +X, the game's forward axis.
const fs = require("fs"), path = require("path");
const sharp = require(__dirname + "/pp/node_modules/sharp");
const { NodeIO } = require(__dirname + "/pp/node_modules/@gltf-transform/core");
const DL = __dirname + "/models", OUT = __dirname + "/models";
const TEX = 1024;

const jpg = async (buf) => (await sharp(buf).resize(TEX, TEX, { fit: "fill" }).flatten({ background: "#000" }).jpeg({ quality: 82, mozjpeg: true }).toBuffer()).toString("base64");
// glTF packs roughness in G and metalness in B; OBJ ships have them as two greyscale files
async function packMR(roughFile, metalFile) {
  const r = await sharp(roughFile).resize(TEX, TEX, { fit: "fill" }).greyscale().raw().toBuffer();
  const m = await sharp(metalFile).resize(TEX, TEX, { fit: "fill" }).greyscale().raw().toBuffer();
  const o = Buffer.alloc(TEX * TEX * 3);
  for (let i = 0; i < TEX * TEX; i++) (o[i * 3 + 1] = r[i]), (o[i * 3 + 2] = m[i]);
  return jpg(await sharp(o, { raw: { width: TEX, height: TEX, channels: 3 } }).png().toBuffer());
}
function pack(pos, nrm, uv, idx) {
  const n = pos.length / 3, b = Buffer.alloc(n * 32 + idx.length * 4);
  Buffer.from(new Float32Array(pos).buffer).copy(b, 0);
  Buffer.from(new Float32Array(nrm).buffer).copy(b, n * 12);
  Buffer.from(new Float32Array(uv).buffer).copy(b, n * 24);
  Buffer.from(new Uint32Array(idx).buffer).copy(b, n * 32);
  return { n, i: idx.length, b: b.toString("base64") };
}

async function fromOBJ(file, texBase) {
  const src = fs.readFileSync(file, "utf8").split("\n"), V = [], VT = [], VN = [];
  const pos = [], nrm = [], uv = [], idx = [], seen = new Map();
  for (const line of src) {
    const p = line.trim().split(/\s+/);
    if (p[0] === "v") V.push(p.slice(1, 4).map(Number));
    else if (p[0] === "vt") VT.push(p.slice(1, 3).map(Number));
    else if (p[0] === "vn") VN.push(p.slice(1, 4).map(Number));
    else if (p[0] === "f") {
      const ids = p.slice(1).map((k) => {
        if (!seen.has(k)) {
          const [a, t, nn] = k.split("/").map((x) => (x ? parseInt(x) : 0));
          const v = V[a < 0 ? V.length + a : a - 1], tt = t ? VT[t < 0 ? VT.length + t : t - 1] : [0, 0], q = nn ? VN[nn < 0 ? VN.length + nn : nn - 1] : [0, 1, 0];
          seen.set(k, pos.length / 3);
          pos.push(...v), nrm.push(...q), uv.push(tt[0], 1 - tt[1]); // flipY=false textures, like glTF
        }
        return seen.get(k);
      });
      for (let k = 1; k + 1 < ids.length; k++) idx.push(ids[0], ids[k], ids[k + 1]);
    }
  }
  const T = [await jpg(fs.readFileSync(texBase + "_diffuse.png")), await packMR(texBase + "_roughness.png", texBase + "_metalness.png"), await jpg(fs.readFileSync(texBase + "_normal.png")), await jpg(fs.readFileSync(texBase + "_emission.png"))];
  return { prims: [{ pos, nrm, uv, idx, m: { bc: [1, 1, 1, 1], me: 1, ro: 1, em: [1, 1, 1], bl: false, map: 0, mr: 1, nm: 2, emm: 3 } }], T };
}

async function fromGLB(file) {
  const doc = await new NodeIO().read(file), root = doc.getRoot(), T = [], texIdx = new Map(), prims = [];
  const tex = async (t) => {
    if (!t) return undefined;
    if (!texIdx.has(t)) texIdx.set(t, T.length), T.push(await jpg(Buffer.from(t.getImage())));
    return texIdx.get(t);
  };
  for (const node of root.listNodes()) {
    const mesh = node.getMesh();
    if (!mesh) continue;
    const M = node.getWorldMatrix();
    for (const pr of mesh.listPrimitives()) {
      const P = pr.getAttribute("POSITION"), N = pr.getAttribute("NORMAL"), U = pr.getAttribute("TEXCOORD_0"), I = pr.getIndices();
      const pos = [], nrm = [], uv = [], v = [0, 0, 0];
      for (let k = 0; k < P.getCount(); k++) {
        P.getElement(k, v);
        pos.push(M[0] * v[0] + M[4] * v[1] + M[8] * v[2] + M[12], M[1] * v[0] + M[5] * v[1] + M[9] * v[2] + M[13], M[2] * v[0] + M[6] * v[1] + M[10] * v[2] + M[14]);
        if (N) {
          N.getElement(k, v);
          const x = M[0] * v[0] + M[4] * v[1] + M[8] * v[2], y = M[1] * v[0] + M[5] * v[1] + M[9] * v[2], z = M[2] * v[0] + M[6] * v[1] + M[10] * v[2], l = Math.hypot(x, y, z) || 1;
          nrm.push(x / l, y / l, z / l);
        } else nrm.push(0, 1, 0);
        if (U) U.getElement(k, v), uv.push(v[0], v[1]);
        else uv.push(0, 0);
      }
      const idx = I ? Array.from(I.getArray()) : [...Array(P.getCount()).keys()];
      const mat = pr.getMaterial(), m = { bc: [1, 1, 1, 1], me: 1, ro: 1, em: [0, 0, 0], bl: false };
      if (mat) {
        m.name = mat.getName(); m.bc = mat.getBaseColorFactor(); m.me = mat.getMetallicFactor(); m.ro = mat.getRoughnessFactor(); m.em = mat.getEmissiveFactor(); m.bl = mat.getAlphaMode() === "BLEND";
        m.map = await tex(mat.getBaseColorTexture()); m.mr = await tex(mat.getMetallicRoughnessTexture()); m.nm = await tex(mat.getNormalTexture()); m.emm = await tex(mat.getEmissiveTexture());
        if (m.emm != null && !m.em.some((x) => x > 0)) m.em = [1, 1, 1];
        for (const k of ["map", "mr", "nm", "emm"]) if (m[k] == null) delete m[k];
      }
      prims.push({ pos, nrm, uv, idx, m });
    }
  }
  return { prims, T };
}

function finish({ prims, T }, rotY = 0) {
  const a = (rotY * Math.PI) / 180, c = Math.cos(a), s = Math.sin(a);
  const mn = [1e9, 1e9, 1e9], mx = [-1e9, -1e9, -1e9];
  for (const p of prims)
    for (const arr of [p.pos, p.nrm])
      for (let k = 0; k < arr.length; k += 3) {
        const x = arr[k], z = arr[k + 2];
        (arr[k] = c * x + s * z), (arr[k + 2] = -s * x + c * z);
      }
  for (const p of prims) for (let k = 0; k < p.pos.length; k++) (mn[k % 3] = Math.min(mn[k % 3], p.pos[k])), (mx[k % 3] = Math.max(mx[k % 3], p.pos[k]));
  return { mn, mx, P: prims.map((p) => ({ ...pack(p.pos, p.nrm, p.uv, p.idx), m: (({ name, ...m }) => m)(p.m) })), T };
}

// Oblivion's armour uses procedural brick shaders in heavy_missile_ship.blend, which glTF exports as flat white: restore each
// material's own colour (the mean of its two brick colours, linear); the red/cyan glows and plumes export correctly as they are
const PAINT = { Armor_Grey: { bc: [0.138, 0.138, 0.15, 1] }, Armor_Dark: { bc: [0.031, 0.031, 0.037, 1] }, Armor_Red: { bc: [0.375, 0.019, 0.019, 1], em: [0.3, 0.015, 0.015] } }; // red panels get a faint self-glow
// fuse ships into one hull: [model, scale, x, z, y] in the raw model space (Viktor Hahn noses on +z); shared textures load once
async function fuse(parts) {
  const out = { prims: [], T: [] }, at = new Map();
  for (const [model, s, dx, dz, dy = 0] of parts) {
    const g = await MODELS[model]();
    if (!at.has(model)) at.set(model, out.T.length), out.T.push(...g.T);
    const o = at.get(model);
    for (const p of g.prims) {
      for (let k = 0; k < p.pos.length; k += 3) (p.pos[k] = p.pos[k] * s + dx), (p.pos[k + 1] = p.pos[k + 1] * s + dy), (p.pos[k + 2] = p.pos[k + 2] * s + dz);
      for (const t of ["map", "mr", "nm", "emm"]) if (p.m[t] != null) p.m[t] += o;
      out.prims.push(p);
    }
  }
  return out;
}

const MODELS = {
  ...Object.fromEntries(["archimedes", "dalton", "hippocrates", "pythagoras", "watson"].map((k) => [k, () => fromGLB(`${DL}/gltf/${k}.glb`)])),
  ...Object.fromEntries(["carrier01", "corvette01", "cruiser01", "destroyer01", "frigate01"].map((k) => [k, () => fromOBJ(`${DL}/spaceships01_pbr/${k}.obj`, `${DL}/spaceships01_pbr/${k}`)])),
  valkyrie_prime: () => fromGLB(`${DL}/valkyrie_prime/valkyrie_prime.glb`), // the user's own Blender model (valkyrie.blend)
  oblivion: async () => { const g = await fromGLB(`${DL}/oblivion/oblivion.glb`); for (const p of g.prims) Object.assign(p.m, PAINT[p.m.name]); return g; }, // the user's heavy_missile_ship.glb
  raven: () => fuse([["frigate01", 1.4, 0, 0], ["gunboat", 0.75, 2.6, -1], ["gunboat", 0.75, -2.6, -1]]), // Nova's hull stretched into a spine, two Wraith hulls as side pods
  legion: () => fuse([["hippocrates", 1, 0, 0], ["watson", 0.55, 6.2, -1.5, -0.5], ["watson", 0.55, -6.2, -1.5, -0.5]]), // Overseer's delta with two Mothership hulls slung under the wings as hangars
  gunboat: () => fromOBJ(`${DL}/spaceships01_pbr/gunboat.obj`, `${DL}/spaceships01_pbr/gun_boat`),
  ...Object.fromEntries(["carrier03", "corvette03", "cruiser03", "destroyer03", "frigate03"].map((k) => [k, () => fromOBJ(`${DL}/spaceships02_pbr/${k}.obj`, `${DL}/spaceships02_pbr/${k}`)])),
};
module.exports = { MODELS, finish };

if (require.main === module)
  (async () => {
    fs.mkdirSync(OUT, { recursive: true });
    const rot = JSON.parse(process.argv[2] || "{}"), only = process.argv[3] ? process.argv[3].split(",") : Object.keys(MODELS);
    for (const k of only) {
      const D = finish(await MODELS[k](), rot[k] || 0);
      fs.writeFileSync(`${OUT}/${k}.json`, JSON.stringify(D));
      console.log(k, D.P.length, "parts", D.P.reduce((s, p) => s + p.i / 3, 0), "tris", "size", D.mx.map((v, i) => (v - D.mn[i]).toFixed(2)).join("x"), (fs.statSync(`${OUT}/${k}.json`).size >> 10) + "KB");
    }
  })().catch((e) => { console.error(e); process.exit(1); });
