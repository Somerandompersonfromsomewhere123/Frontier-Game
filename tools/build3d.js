// Builds Voidbreakers (5).html from (4).html: tier 5-6 ships use real 3D models ($M3) instead of sprite plates.
const fs = require("fs");
const { MODELS, finish } = require("./convert.js");
const { NodeIO } = require(__dirname + "/pp/node_modules/@gltf-transform/core");
// sky photos in tools/maps, the untouched original game in tools/source; the playable build lands next to tools/
const MAPS = __dirname + "/maps", SRC = __dirname + "/source/Voidbreakers_ The Last Frontier(4).html", DST = __dirname + "/../GAME.html";
const SHIP = {
  colossus: "carrier03", titan: "cruiser03",
  railbreaker: "cruiser01", spectre: "pythagoras",
  mothership: "watson", overseer: "hippocrates",
  hellfire: "frigate03", armageddon: "archimedes",
  reaper: "destroyer01", valkyrie: "corvette01",
  wraith: "gunboat", nova: "frigate01", singularity: "dalton", valkyrieprime: "valkyrie_prime",
};
// same as $alien, but per ship, with emission maps, and the nose already turned to +X
// textures load at startup; $M3OK tells the tree thumbnails (like $QOK) when they are ready
const LOADER = `var $M3C={},$M3T={},$M3L=0,$M3N=0,$M3OK=!1;function $m3T(id){return $M3T[id]||=$M3[id].T.map(b=>{$M3N++;const t=new Pn,im=new Image;im.onload=()=>{t.image=im;t.needsUpdate=!0;++$M3L>=$M3N&&($M3OK=!0)};im.src="data:image/jpeg;base64,"+b;t.flipY=!1;t.wrapS=t.wrapT=1e3;t.anisotropy=8;return t})}for(const id in $M3)$m3T(id);function $m3(id){const D=$M3[id],d=He[id],S=84*(.9+.13*d.tier),col=Xt[d.cls].color,n=Zn(S*.4,col),e=n.body;if(!$M3C[id]){const T=$m3T(id);$M3C[id]=D.P.map(P=>{const b=Uint8Array.from(atob(P.b),c=>c.charCodeAt(0)).buffer,k=P.n,g=new kt,m=P.m;g.setAttribute("position",new Vt(new Float32Array(b,0,k*3),3));g.setAttribute("normal",new Vt(new Int8Array(b,k*12,k*3),3,!0));const o2=k*12+(k*3+3&~3);g.setAttribute("uv",new Vt(new Float32Array(b,o2,k*2),2));g.setIndex(new Vt(k<65536?new Uint16Array(b,o2+k*8,P.i):new Uint32Array(b,o2+k*8,P.i),1));const o={color:new ge(m.bc[0],m.bc[1],m.bc[2]),metalness:m.me*.85,roughness:Math.max(.25,m.ro),envMapIntensity:.9,emissive:new ge(m.em[0],m.em[1],m.em[2]),emissiveIntensity:.8};if(m.map!=null){o.map=T[m.map];o.map.colorSpace="srgb"}if(m.mr!=null)o.metalnessMap=o.roughnessMap=T[m.mr];if(m.nm!=null)o.normalMap=T[m.nm];if(m.emm!=null){o.emissiveMap=T[m.emm];o.emissiveMap.colorSpace="srgb"}if(m.bl){o.transparent=!0;o.opacity=Math.max(.25,m.bc[3]);o.depthWrite=!1}return[g,new Qt(o)]})}const W=Math.max(D.mx[0]-D.mn[0],D.mx[2]-D.mn[2]),k=S/W,grp=new Mt;for(const[g,m]of $M3C[id])grp.add(new Pe(g,m));grp.scale.setScalar(k);grp.position.set(-(D.mx[0]+D.mn[0])/2*k,2-D.mx[1]*k,-(D.mx[2]+D.mn[2])/2*k);e.add(grp);for(const z of[-1,1])n.engines.push(ut(-S*.5,2-(D.mx[1]-D.mn[1])*k/2,z*S*.12));const H=D.H,dk=Lt(2896185,{panel:3}),gl=yt(col,2.6),Y=v=>2+v*S,P=d.primary,Q=d.secondary,usesGun=w=>w&&(w.kind==="pulse"||w.kind==="plasma"||w.kind==="missile"||w.kind==="rail"&&w.count>1);const gun=(x,y,z,len,r,a)=>{const g=new Mt;g.position.set(x,y,z);g.rotation.y=-a;q(new bt(r*2.2,r*2.6,r*1.6,8),dk,0,0,0,g);q(_t(r,r*.85,len,6),dk,len/2,r*1.4,0,g);q(new Rt(r*.9,6,4),gl,len,r*1.4,0,g);e.add(g);return ut(x+Math.cos(a)*len,y+r*1.4,z+Math.sin(a)*len)};n.nose=ut(H.nose[0]*S,Y(H.nose[1])+S*.01,0);q(new Rt(S*.014,8,6),gl,n.nose.x,n.nose.y,0,e);if(H.blades)for(const b of H.blades)for(const z of[1,-1])n.muzzles.push(gun(b[0]*S-S*.05,Y(b[2]),z*b[1]*S,S*.07,S*.01,0));else if(usesGun(P))for(const z of[1,-1])n.muzzles.push(gun(H.wing[0]*S,Y(H.wing[2]),z*H.wing[1]*S,S*.09,S*.012,0));else n.muzzles.push(n.nose.clone());if(H.blades)n.muzzles2=n.muzzles.map(m=>m.clone());else if(usesGun(Q))for(const z of[1,-1])n.muzzles2.push(gun(H.pod[0]*S,Y(H.pod[2]),z*H.pod[1]*S,S*.07,S*.011,0));else n.muzzles2.push(ut(n.nose.x*.95,n.nose.y,0));n.dirGuns=[];for(const w of[P,Q])for(const a of(w&&w.dirs)||[])if(a){const E=H.edge.at(Math.round(Wt(a)/(Math.PI*2)*16+16)%16);n.dirGuns.push({a,p:gun(E[0]*S*.96,Y(E[2]),E[1]*S*.96,S*.06,S*.011,a)})}for(const T of H.tur.slice(0,d.turrets||0)){const g=new Mt;g.position.set(T[0]*S,Y(T[2]),T[1]*S);q(new bt(S*.035,S*.042,S*.02,8),dk,0,0,0,g);q(Ke(S*.065,S*.03,S*.05,1),dk,S*.006,S*.022,0,g);for(const z of[1,-1])q(_t(S*.007,S*.006,S*.08,6),dk,S*.06,S*.024,z*S*.012,g);e.add(g);n.turrets.push(g)}return n}\n`;

// class colours from the game's Xt table; grey hull metal stays, coloured panels and glows take the class hue
const CLASS = { reaper: "assault", valkyrie: "assault", colossus: "heavy", titan: "heavy", railbreaker: "sniper", spectre: "sniper", mothership: "drone", overseer: "drone", hellfire: "missile", armageddon: "missile", wraith: "energy", nova: "energy", singularity: "energy", valkyrieprime: "assault" };
const HEX = { assault: 0x38f6ff, heavy: 0xffa63d, sniper: 0x5b9bff, drone: 0xc06bff, missile: 0xff6a3d, energy: 0x3fd2c7 };
const sharp = require(__dirname + "/pp/node_modules/sharp");
const { execFileSync } = require("child_process"), FF = require(__dirname + "/pp/node_modules/ffmpeg-static");
// audio -> base64 mp3 (plays everywhere, unlike ogg in Safari)
const mp3 = (file, ...args) => execFileSync(FF, ["-v", "error", "-i", file, ...args, "-f", "mp3", "pipe:1"], { maxBuffer: 1 << 27 }).toString("base64");
// mesh buffers shrink ~35%: normals become normalized int8 and indices uint16 when they fit; positions and uvs stay float32
// layout: pos f32 n*3 | nrm i8 n*3 (padded to 4) | uv f32 n*2 | idx u16/u32 (decoded by the $m3 loader)
function compact(M) {
  const out = {};
  for (const [id, D] of Object.entries(M)) out[id] = { ...D, P: D.P.map((p) => {
    const n = p.n, buf = Buffer.from(p.b, "base64"), raw = buf.buffer.slice(buf.byteOffset, buf.byteOffset + buf.length);
    const f = new Float32Array(raw, 0, n * 8), ix = new Uint32Array(raw, n * 32, p.i), o2 = n * 12 + ((n * 3 + 3) & ~3), w = n < 65536 ? 2 : 4;
    const b = Buffer.alloc(o2 + n * 8 + p.i * w);
    new Float32Array(b.buffer, b.byteOffset, n * 3).set(f.subarray(0, n * 3));
    const nb = new Int8Array(b.buffer, b.byteOffset + n * 12, n * 3);
    for (let k = 0; k < n * 3; k++) nb[k] = Math.round(Math.max(-1, Math.min(1, f[n * 3 + k])) * 127);
    new Float32Array(b.buffer, b.byteOffset + o2, n * 2).set(f.subarray(n * 6, n * 8));
    new (w === 2 ? Uint16Array : Uint32Array)(b.buffer, b.byteOffset + o2 + n * 8, p.i).set(ix);
    return { ...p, b: b.toString("base64") };
  }) };
  return out;
}
const hueOf = (c) => { const r = (c >> 16) / 255, g = ((c >> 8) & 255) / 255, b = (c & 255) / 255, mx = Math.max(r, g, b), d = mx - Math.min(r, g, b); return d === 0 ? 0 : mx === r ? ((g - b) / d + 6) % 6 : mx === g ? (b - r) / d + 2 : (r - g) / d + 4; };
// hullTint: how far grey metal moves toward the class colour (0 = untouched)
async function recolour(b64, hex, hue, minSat, hullTint) {
  const { data, info } = await sharp(Buffer.from(b64, "base64")).removeAlpha().raw().toBuffer({ resolveWithObject: true });
  const cr = (hex >> 16) / 255, cg = ((hex >> 8) & 255) / 255, cb = (hex & 255) / 255;
  for (let i = 0; i < data.length; i += 3) {
    const r = data[i], g = data[i + 1], b = data[i + 2], d = Math.max(r, g, b) - Math.min(r, g, b);
    let v = Math.max(r, g, b);
    if (!v) continue;
    if (d / v < minSat) {
      (data[i] = r * (1 - hullTint + hullTint * cr)), (data[i + 1] = g * (1 - hullTint + hullTint * cg)), (data[i + 2] = b * (1 - hullTint + hullTint * cb));
      continue;
    }
    v = Math.max(v, 100 + 0.6 * v); // dark panels brightened so the hue reads
    const s = Math.max(d / Math.max(r, g, b), 0.65), c = v * s, x = c * (1 - Math.abs((hue % 2) - 1)), m = v - c;
    const [rr, gg, bb] = hue < 1 ? [c, x, 0] : hue < 2 ? [x, c, 0] : hue < 3 ? [0, c, x] : hue < 4 ? [0, x, c] : hue < 5 ? [x, 0, c] : [c, 0, x];
    (data[i] = rr + m), (data[i + 1] = gg + m), (data[i + 2] = bb + m);
  }
  return (await sharp(data, { raw: info }).jpeg({ quality: 88 }).toBuffer()).toString("base64");
}
async function tint(id, D, hexOverride) {
  const hex = hexOverride ?? HEX[CLASS[id]], hue = hueOf(hex), done = new Set();
  for (const p of D.P)
    for (const [k, minSat, hullTint] of [["map", 0.25, 0.35], ["emm", 0.15, 0]])
      if (p.m[k] != null && !done.has(p.m[k])) done.add(p.m[k]), (D.T[p.m[k]] = await recolour(D.T[p.m[k]], hex, hue, minSat, hullTint));
  return D;
}

// Hardpoints measured from the hull itself, in units of the model's footprint W, centred, y measured down from the hull top.
// wing/pod: [x, z, y] for the right-hand gun (left = mirrored z) · nose: [x, y] · edge: 16 directions [x, z, y] · tur: 4 deck sockets
function hardpoints(D) {
  const W = Math.max(D.mx[0] - D.mn[0], D.mx[2] - D.mn[2]), cx = (D.mx[0] + D.mn[0]) / 2, cz = (D.mx[2] + D.mn[2]) / 2, top = D.mx[1];
  const V = [];
  for (const p of D.P) {
    const buf = Buffer.from(p.b, "base64"), raw = buf.buffer.slice(buf.byteOffset, buf.byteOffset + buf.length);
    const f = new Float32Array(raw, 0, p.n * 3), ix = new Uint32Array(raw, p.n * 32, p.i), at = (j) => [(f[j * 3] - cx) / W, (f[j * 3 + 2] - cz) / W, (f[j * 3 + 1] - top) / W];
    for (let t = 0; t < ix.length; t += 3) {
      const A = at(ix[t]), B = at(ix[t + 1]), C = at(ix[t + 2]);
      const g = Math.min(24, Math.ceil(Math.max(Math.hypot(A[0] - B[0], A[1] - B[1]), Math.hypot(B[0] - C[0], B[1] - C[1]), Math.hypot(A[0] - C[0], A[1] - C[1])) / 0.012));
      for (let u = 0; u <= g; u++) for (let v = 0; u + v <= g; v++) { const w = g - u - v; V.push([0, 1, 2].map((k) => (A[k] * u + B[k] * v + C[k] * w) / Math.max(g, 1))); }
    }
  }
  const NB = 40, half = Array(NB).fill(0), ytop = Array(NB).fill(-1), bin = (x) => Math.min(NB - 1, Math.max(0, Math.floor((x + 0.5) * NB)));
  for (const [x, z, y] of V) { const b = bin(x); half[b] = Math.max(half[b], Math.abs(z)); ytop[b] = Math.max(ytop[b], y); }
  const bx = (b) => (b + 0.5) / NB - 0.5, deckAt = (x, z) => { let y = -1; for (const v of V) if (Math.abs(v[0] - x) < 0.03 && Math.abs(Math.abs(v[1]) - z) < 0.03) y = Math.max(y, v[2]); return y < -0.5 ? ytop[bin(x)] : y; };
  // wing guns: the most forward spot wide enough to carry a pair, inset from the edge
  let wb = -1;
  for (let b = NB - 1; b >= NB / 2; b--) if (half[b] >= 0.07) { wb = b; break; }
  if (wb < 0) wb = half.indexOf(Math.max(...half.slice(NB / 2)));
  let nb = NB - 1;
  while (nb > 0 && half[nb] < 0.01) nb--;
  const wx = Math.min(bx(wb) - 0.04, bx(nb) - 0.12), wz = Math.min(0.18, half[bin(wx)] * 0.6);
  // pod guns: widest point of the middle third, near the edge
  let pb = Math.floor(NB * 0.35);
  for (let b = Math.floor(NB * 0.35); b <= Math.floor(NB * 0.6); b++) if (half[b] > half[pb]) pb = b;
  const pz = half[pb] * 0.82, px = bx(pb);
  const edge = [];
  for (let i = 0; i < 16; i++) {
    const a = (i / 16) * Math.PI * 2, c = Math.cos(a), s = Math.sin(a);
    let best = null, d0 = 0;
    for (const v of V) { const along = v[0] * c + v[1] * s, perp = Math.abs(-v[0] * s + v[1] * c); if (perp < 0.05 && along > d0) (d0 = along), (best = v); }
    edge.push(best ? [best[0], best[1], best[2]] : [c * 0.3, s * 0.3, 0]);
  }
  const tb = [Math.floor(NB * 0.62), Math.floor(NB * 0.38)], tur = [];
  for (const b of tb) for (const sgn of [1, -1]) { const z = half[b] * 0.45 * sgn; tur.push([bx(b), z, deckAt(bx(b), Math.abs(z))]); }
  return { wing: [wx, wz, deckAt(wx, wz)], pod: [px, pz, deckAt(px, pz)], nose: [bx(nb), ytop[nb]], edge, tur };
}

// Quaternius hulls face +z with 16-bit indices: convert to the $M3 layout (nose on +x), measure, then rescale to hull length ($qship scales by length)
function qHardpoints(src) {
  const j = src.indexOf("var $Q="), Q = JSON.parse(src.slice(j + 7, src.indexOf(",$QG={}", j))), out = {};
  for (const [nm, D] of Object.entries(Q.G)) {
    const buf = Buffer.from(D.b, "base64"), raw = buf.buffer.slice(buf.byteOffset, buf.byteOffset + buf.length), n = D.n;
    const f = new Float32Array(raw, 0, n * 3), ix = new Uint16Array(raw, n * 32, D.i), b = Buffer.alloc(n * 32 + D.i * 4), pos = new Float32Array(b.buffer, b.byteOffset, n * 3);
    for (let v = 0; v < n; v++) (pos[v * 3] = f[v * 3 + 2]), (pos[v * 3 + 1] = f[v * 3 + 1]), (pos[v * 3 + 2] = -f[v * 3]);
    new Uint32Array(b.buffer, b.byteOffset + n * 32, D.i).set(ix);
    const H = hardpoints({ P: [{ n, i: D.i, b: b.toString("base64") }], mn: [D.mn[2], D.mn[1], -D.mx[0]], mx: [D.mx[2], D.mx[1], -D.mn[0]] });
    const u = Math.max(D.mx[2] - D.mn[2], D.mx[0] - D.mn[0]) / (D.mx[2] - D.mn[2]), sc = (a) => a.map((x) => x * u);
    out[nm] = { wing: sc(H.wing), pod: sc(H.pod), nose: sc(H.nose), edge: H.edge.map(sc), tur: H.tur.map(sc) };
  }
  return out;
}
const swap = (s, a, b) => {
  const n = s.split(a).length - 1;
  if (n !== 1) throw new Error(`expected 1 match, got ${n}: ${a}`);
  return s.replace(a, () => b);
};

(async () => {
  const M3 = {};
  for (const [id, model] of Object.entries(SHIP)) {
    // valkyrie.blend has its nose on Blender +Y, the opposite of the Viktor Hahn models
    M3[id] = await tint(id, finish(await MODELS[model](), model === "valkyrie_prime" ? -90 : 90));
    M3[id].H = hardpoints(M3[id]);
  }
  // Valkyrie Prime: one gun on each of its six blade tips, measured from the model (forward-most vertex of each right-hand blade; glTF -z is the nose)
  {
    const D = M3.valkyrieprime, W = Math.max(D.mx[0] - D.mn[0], D.mx[2] - D.mn[2]), cx = (D.mx[0] + D.mn[0]) / 2;
    const doc = await new NodeIO().read(__dirname + "/models/valkyrie_prime/valkyrie_prime.glb");
    D.H.blades = ["Blade_Mid", "Blade_Outer", "Blade_Tip"].map((name) => {
      const node = doc.getRoot().listNodes().find((n) => n.getName() === name), M = node.getWorldMatrix(), v = [0, 0, 0];
      let t = null;
      for (const pr of node.getMesh().listPrimitives()) {
        const P = pr.getAttribute("POSITION");
        for (let k = 0; k < P.getCount(); k++) {
          P.getElement(k, v);
          const p = [0, 1, 2].map((i) => M[i] * v[0] + M[4 + i] * v[1] + M[8 + i] * v[2] + M[12 + i]);
          if (p[0] > 0 && (!t || p[2] < t[2])) t = p;
        }
      }
      if (!t) throw new Error("no blade tip for " + name);
      return [(-t[2] - cx) / W, t[0] / W, (t[1] - D.mx[1]) / W];
    });
  }
  // boss hulls: the three unused Viktor Hahn ships, recoloured hostile crimson
  for (const [key, model] of [["@carrier", "carrier01"], ["@lance", "destroyer03"], ["@warden", "corvette03"]]) M3[key] = await tint(key, finish(await MODELS[model](), 90), 0xff2d4a);
  // materials move into $m3M so bosses can reuse the same mesh and material cache
  const mb = LOADER.indexOf("if(!$M3C[id]){"), me = LOADER.indexOf("return[g,new Qt(o)]})}", mb) + "return[g,new Qt(o)]})}".length;
  if (mb < 0 || me < mb) throw new Error("loader material block not found");
  const loader = LOADER.slice(0, mb).replace("function $m3(id){", "function $m3M(id){const D=$M3[id];" + LOADER.slice(mb, me) + "return $M3C[id]}function $m3(id){") + "$m3M(id);" + LOADER.slice(me);
  // sound (fx.js): the Kenney clips $SFXM uses, and music playlists: every tools/audio/music/<menu|battle|boss>_*.<audio> file
  const SFXD = {}, MUSD = {}, KA = __dirname + "/audio/kenney/Audio", AM = __dirname + "/audio/music";
  const used = /^(laserSmall|laserLarge|laserRetro|impactMetal|forceField|explosionCrunch|lowFrequency_explosion|thrusterFire)_\d+\.ogg$/;
  for (const f of fs.readdirSync(KA).filter((f) => used.test(f))) SFXD[f.slice(0, -4)] = mp3(KA + "/" + f, "-ac", "1", "-b:a", "96k");
  for (const k of ["menu", "battle", "boss"]) {
    MUSD[k] = fs.readdirSync(AM).filter((f) => f.startsWith(k + "_")).sort().map((f) => mp3(AM + "/" + f, "-ac", "2", "-b:a", "80k"));
    if (!MUSD[k].length) throw new Error("no music for " + k + " in " + AM);
  }
  let s = fs.readFileSync(SRC, "utf8");
  s = swap(s, "function ai(n){", "var $M3=" + JSON.stringify(compact(M3)) + ";\n" + loader + fs.readFileSync(__dirname + "/bosses.js", "utf8") + "\nfunction ai(n){");
  // bosses: rotate the roster on boss waves, run the generic boss loop, name it in the HUD
  s = swap(s, "spawnBoss(n){return Up(S,n)}", "spawnBoss(n){return $spawnBoss(S,n)}");
  s = swap(s, "let t=n.boss;if(!t)return;", "let t=n.boss;if(!t)return;if(t.gb)return $gbU(n,t,e);");
  s = swap(s, 'g.dying>0?"Destroyed":g.phase===1?', 'g.gb?g.dying>0?"Destroyed":"Phase "+g.phase+" \\u00b7 "+g.desc:g.dying>0?"Destroyed":g.phase===1?');
  s = swap(s, '"Destroy the Eclipse Dreadnought"', '"Destroy the "+(S.boss.gb?S.boss.title:"Eclipse Dreadnought")');
  // difficulty: boss waves are the boss alone; every 5 waves the waves grow; rogue pilots from the ship tree (low tiers to wave 15, high after); a flood after wave 20
  s = swap(s, "function z_(n){let e=1+.12*(n-1);return n%5===0?{boss:!0,hpScale:1+.35*(n/5-1),drone:2+n,interceptor:0,hunter:0,frigate:0,rogue:0}:{boss:!1,hpScale:e,drone:3+n,interceptor:n>=2?1+Math.floor((n-2)/2):0,hunter:n>=3?1+Math.floor((n-3)/3):0,frigate:n>=4?1+Math.floor((n-4)/4):0,rogue:n>=6?Math.min(3,Math.floor((n-3)/3)):0}}",
    "function z_(n){const T=Math.floor(n/5),m=1.25*(n>20?2+.08*(n-20):1+.2*T),c=x=>Math.round(x*m),e=1.5*(1+.12*(n-1)+.06*T+(n>20?.05*(n-20):0));return n%5===0?{boss:!0,hpScale:1.3*(1+.35*(n/5-1)),drone:0,interceptor:0,hunter:0,frigate:0,rogue:0}:{boss:!1,hpScale:e,drone:c(3+n),interceptor:n>=2?c(1+Math.floor((n-2)/2)):0,hunter:n>=3?c(1+Math.floor((n-3)/3)):0,frigate:n>=4?c(1+Math.floor((n-4)/4)):0,rogue:n<5?0:n<10?2:n<=20?3:Math.min(14,4+Math.floor((n-20)*.8))}}");
  s = swap(s, "let h=Math.max(2,Math.min(7,1+Math.floor(n.director.wave/3)))", "let w=n.director.wave,h=w<=15?1+Math.floor(Math.random()*(w<10?2:3)):w<=20?4+Math.floor(Math.random()*2):5+Math.floor(Math.random()*3)");
  // drones spawn one at a time instead of in groups of 3-4
  s = swap(s, "let i=Math.min(t,3+e.length%2);e.push({kind:\"drone\"", "let i=1;e.push({kind:\"drone\"");
  s = swap(s, "e.spawnTimer=e.comp.boss?5:1.6", "e.spawnTimer=e.comp.boss?5:e.wave>20?.35:.6");
  s = swap(s, 'r&&n.ui.toast("Rogue pilot"', 'r&&n.director.wave<=20&&n.ui.toast("Rogue pilot"');
  s = swap(s, "if($ART[n])return $spr(n);", "if($M3[n])return $m3(n);if($ART[n])return $spr(n);");
  // tree thumbnails: render the model, not the old sprite image
  s = swap(s, "($ART[A.id]&&!$PB.S[A.id])||", "($ART[A.id]&&!$PB.S[A.id]&&!$M3[A.id])||");
  s = swap(s, "$ART[A.id]&&!$PB.S[A.id]?", "$ART[A.id]&&!$PB.S[A.id]&&!$M3[A.id]?");
  s = swap(s, "$ART[M]&&!$PB.S[M]", "$ART[M]&&!$PB.S[M]&&!$M3[M]");
  s = swap(s, "if(!$QOK)break;", "if(!$QOK||!$M3OK)break;");

  // --- Weapon Reapply GDD ---
  // nose slot = front-most muzzle, on the centreline; secondary sits a little behind so effects don't overlap
  // $cv = convergence toward the cursor, clamped to 8 degrees, off when the cursor is on top of the ship
  s = swap(s, "function cp(n,e,t,i,s){", `function $nz(e,a,t){a.$nx??=a.nose?a.nose.x:Math.max(...a.muzzles.map(m=>m.x));const p=Bt(e.x,e.z,e.angle,a.$nx*(t==="primary"?1:.9),0);return{x:p.x,z:p.z}}function $cv(p,a){if(Math.hypot(De.wx-p.x,De.wz-p.z)<80)return 0;const d=Wt(xt(p.x,p.z,De.wx,De.wz)-a);return Math.max(-.14,Math.min(.14,d))}function cp(n,e,t,i,s){`);
  s = swap(s, ",s,u[0],e.angle),d()}return}", ",s,$nz(e,a,t),e.angle),d()}return}");
  s = swap(s, "let m=h()[0];n.fx.spawn(m.x,5,m.z", "let m=r.count>1?h()[0]:$nz(e,a,t);n.fx.spawn(m.x,5,m.z");
  s = swap(s, "h().slice(0,r.count):[h()[0]]", "h().slice(0,r.count):[$nz(e,a,t)]");
  s = swap(s, "n.arsenal.chain(e,r,h()[0],e.angle)", "n.arsenal.chain(e,r,$nz(e,a,t),e.angle)");
  s = swap(s, "n.arsenal.orb(e,r,h()[0],e.angle)", "n.arsenal.orb(e,r,$nz(e,a,t),e.angle)");
  // one muzzle counter per weapon slot + convergence for forward bolts
  s = swap(s, 'n.weapons.fire(e,t,a,o,"player",{crit:e.stats.crit,', 'n.weapons.fire(e,t,a,o,"player",{wslot:s,conv:r===0,crit:e.stats.crit,');
  s = swap(s, "let T=v.count||1,", 'let $k="mi"+(z.wslot||""),T=v.count||1,');
  s = swap(s, "x.mi=x.mi||0;", "x[$k]=x[$k]||0;");
  s = swap(s, "_[x.mi++%_.length]", "_[x[$k]++%_.length]");
  s = swap(s, 'w=P+A+(Math.random()-.5)*(b==="missile"?.1:v.spread*.6)', 'w=P+A+(Math.random()-.5)*(b==="missile"?.1:v.spread*.6)+(z.conv&&b!=="missile"?$cv(M,P):0)');
  s = swap(s, 'F.forEach(Y=>{n.weapons.spawn({kind:"bolt",team:"player",x:Y.x,z:Y.z,angle:H,', 'F.forEach(Y=>{const $a=H+$cv(Y,H);n.weapons.spawn({kind:"bolt",team:"player",x:Y.x,z:Y.z,angle:$a,');
  s = swap(s, "let Z=A.speed*A.life,N=Math.cos(H),ie=Math.sin(H);", "let Z=A.speed*A.life,N=Math.cos($a),ie=Math.sin($a);");
  s = swap(s, "o=r===0?i:[{x:e.x+Math.cos(a)*e.r*1.1,z:e.z+Math.sin(a)*e.r*1.1}]", "o=r===0?i:[$dg(e,r,a)]");
  s = swap(s, "function cp(n,e,t,i,s){", "function $dg(e,r,a){const g=e.model&&e.model.dirGuns&&e.model.dirGuns.find(q=>Math.abs(Wt(q.a-r))<.01);if(g){const p=Bt(e.x,e.z,e.angle,g.p.x,g.p.z);return{x:p.x,z:p.z}}return{x:e.x+Math.cos(a)*e.r*1.1,z:e.z+Math.sin(a)*e.r*1.1}}function cp(n,e,t,i,s){");
  // hull top at y = 2 so shots (y = 5) and beams (y = 6) fly above the deck
  s = swap(s, "grp.position.set(-(D.mx[0]+D.mn[0])/2*k,-(D.mx[1]+D.mn[1])/2*k,", "grp.position.set(-(D.mx[0]+D.mn[0])/2*k,2-D.mx[1]*k,");
  s = swap(s, "m.position.set(-(D.mx[2]+D.mn[2])/2*k,-(D.mx[1]+D.mn[1])/2*k,", "m.position.set(-(D.mx[2]+D.mn[2])/2*k,2-D.mx[1]*k,");
  s = swap(s, "for(const z of[-1,1])Nt(e,-S*.48,0,z*S*.15,S*.05,col,S*.16,n);", "for(const z of[-1,1])n.engines.push(ut(-S*.48,2-(D.mx[1]-D.mn[1])*k/2,z*S*.15));");
  // lightning and orb zaps reach rocks when no enemy is in reach, so energy ships can mine
  s = swap(s, "if(!H){o(w.x", "if(!H)for(let W of n.asteroids){if(W.dead)continue;let K=Math.hypot(W.x-w.x,W.z-w.z);if(K>A.range+W.r)continue;let ae=Math.abs(Wt(xt(w.x,w.z,W.x,W.z)-F)),ne=K*(1+ae*1.5);ae<1.2&&ne<k&&(k=ne,H=W)}if(!H){o(w.x");
  s = swap(s, 'A.team==="enemy"&&!A.dead&&!A.ghost).slice(0,3)', '(A.team==="enemy"||A.isRock)&&!A.dead&&!A.ghost).sort((a,b)=>!!a.isRock-!!b.isRock).slice(0,3)');
  // loadout changes: Warden leads with its guns, Hornet's Cluster Rockets become missiles
  s = swap(s, '{primary:bn({name:"Missile Racks"', '{secondary:bn({name:"Missile Racks"');
  s = swap(s, 'secondary:ps({name:"Siege Plasma"', 'primary:ps({name:"Siege Plasma"');
  s = swap(s, 'secondary:ps({name:"Cluster Rockets",dmg:20,rate:0,cooldown:2.2,frags:4,splash:50,speed:700,', 'secondary:bn({name:"Cluster Rockets",dmg:12,count:2,cooldown:2.2,frags:4,splash:50,speed:700,');
  // --- tier 1-4 guns, no engine pods, and the tier 7 rework ---
  // Quaternius hulls (tiers 1-4, Starbreaker): engine pods removed (trail points stay), guns on hardpoints measured from each hull ($QH)
  s = swap(s, "for(const z of[-1,1])Nt(e,-S*.5,0,z*W*.12,S*.04,col,S*.14,n);", "const $hy=(D.mx[1]-D.mn[1])*k;for(const z of[-1,1])n.engines.push(ut(-S*.5,2-$hy/2,z*W*.12));");
  s = swap(s, "n.muzzles.push(ut(S*.45,0,W*.15),ut(S*.45,0,-W*.15));n.muzzles2.push(ut(S*.2,0,W*.3),ut(S*.2,0,-W*.3));return n}", "$armQ(n,id,S,$QH[nm]);return n}");
  s = swap(s, "function ai(n){if(n===\"sovereign\")", "var $QH=" + JSON.stringify(qHardpoints(s)) + ";\n" + fs.readFileSync(__dirname + "/ships.js", "utf8") + "\nvar $SFXD=" + JSON.stringify(SFXD) + ",$MUSD=" + JSON.stringify(MUSD) + ";\n" + fs.readFileSync(__dirname + "/fx.js", "utf8") + "\nfunction ai(n){if(n===\"starcore\")return $starcore(n);if(n===\"tempest\")return $tempest(n);if(n===\"sovereign\")");
  // Starbreaker becomes the sniper apex; its old warship kit moves to the new Starcore; Tempest joins the Viper line
  const sb0 = s.indexOf('nt("starbreaker"'), sb1 = s.indexOf(',nt("sovereign"', sb0), oldSB = s.slice(sb0, sb1);
  if (sb0 < 0 || sb1 < 0 || !oldSB.includes('"Apex warship. Six-way')) throw new Error("starbreaker def not found");
  const starcore = oldSB.replace('nt("starbreaker","Starbreaker"', 'nt("starcore","Starcore"').replace('"Apex warship. Six-way', '"Apex dreadnought built around a caged star. Six-way');
  const starbreaker = 'nt("starbreaker","Starbreaker","sniper",7,["spectre"],"Apex marksman. Twin railguns that pierce everything and a starfall lance that cuts to the horizon.",{primary:ar({name:"Starbreaker Railguns",dmg:260,charge:.7,count:2,pierce:99,life:.85}),secondary:or({name:"Starfall Lance",dps:170,range:1200,width:5,lance:!0}),ability:"command"},{},{})';
  const tempest = 'nt("tempest","Tempest","assault",7,["valkyrie"],"Apex delta fighter. Twin rapid cannons on the canards and a spine railgun through the nose.",{primary:St({name:"Tempest Cannons",count:2,dmg:18,rate:12,spread:.03,pierce:1,speed:1700}),secondary:ar({name:"Spine Railgun",dmg:280,charge:.6,pierce:99,life:.7}),ability:"blink"},{maxSpeed:460},{})';
  const valkyrieprime = 'nt("valkyrieprime","Valkyrie Prime","assault",7,["valkyrie"],"Apex blade fighter. Six blade lasers converge on the cursor, wing lances fan through crowds, and afterimages draw enemy fire.",{primary:St({name:"Blade Lasers",count:6,dmg:6,rate:11,spread:.015,speed:1800,life:.6,len:40}),secondary:St({name:"Wing Lances",count:6,dmg:60,rate:0,cooldown:1.3,spread:.55,speed:2200,life:.55,pierce:99,len:110}),ability:"afterimage"},{maxSpeed:450},{})';
  s = swap(s, oldSB + ',nt("sovereign"', [starbreaker, starcore, tempest, valkyrieprime].join(",") + ',nt("sovereign"');
  // Afterimage: ability entry, its cast, the clone update in the zone loop, and enemies aiming at live clones
  s = swap(s, 'phaseshift:{name:"Phase Shift"', 'afterimage:{name:"Afterimage",cost:50,cd:8,desc:"Dash toward the cursor, leaving 2 decoy clones that draw enemy fire, then explode."},phaseshift:{name:"Phase Shift"');
  s = swap(s, 'phaseshift(n,M,w){', 'afterimage(n,M,w){$afterimage(n,M,w)}, phaseshift(n,M,w){');
  s = swap(s, 'else if(z.k==="decoy"){', 'else if(z.k==="after"){$afterU(n,z,t)&&$Z.splice(i,1)}else if(z.k==="halo"){$haloU(n,z,t)&&$Z.splice(i,1)}else if(z.k==="chunk"){$chunkU(n,z,t)&&$Z.splice(i,1)}else if(z.k==="pop"){$popU(n,z,t)&&$Z.splice(i,1)}else if(z.k==="decoy"){');
  s = swap(s, 'r<i&&(i=r,t=s)}return t}function Lp(', 'r<i&&(i=r,t=s)}for(let s of $AI){let r=Math.hypot(s.x-e.x,s.z-e.z)*.4;r<i&&(i=r,t=s)}return t}function Lp(');
  s = swap(s, '"starbreaker": ["Zenith", "Zenith_Orange"]', '"starbreaker": ["Zenith", "Zenith_Green"]');
  s = swap(s, 'n==="starbreaker"&&t.push(', '(n==="starbreaker"||n==="starcore"||n==="tempest"||n==="valkyrieprime")&&t.push(');
  // Valkyrie Prime third weapon (F, Halo Breaker) and booster (hold Shift): ships.js $v3 / $boost, HUD slots beside the ability
  s = swap(s, 'Zh(n,"drones")&&n.arsenal.toggleDrones()', '$v3(n,e,i,t),Zh(n,"drones")&&n.arsenal.toggleDrones()');
  s = swap(s, 'let y=r*i.maxSpeed,g=a*i.maxSpeed,', 'let $b=$boost(n,e,t,o),y=r*i.maxSpeed*$b,g=a*i.maxSpeed*$b,');
  s = swap(s, 'v=(o>0?i.accel:i.accel*.6)*t', 'v=(o>0?i.accel*$b:i.accel*.6)*t');
  s = swap(s, '(e.dashT>0?2:0))*m;', '(e.dashT>0?2:0)+(e.$bo?1.8:0))*m;');
  s = swap(s, 'let _=n.arsenal.droneCount();', '$v3Hud(m,E);let _=n.arsenal.droneCount();');
  s = swap(s, '<div class="slot hidden" id="slotDrones">', '<div class="slot hidden" id="slotHalo"><kbd>F</kbd><span class="wname">Halo Breaker</span><div class="cd"></div></div>\n    <div class="slot hidden" id="slotBoost"><kbd>Shift</kbd><span class="wname">Boost</span><div class="cd"></div></div>\n    <div class="slot hidden" id="slotDrones">');
  // fx.js hooks: sampled sound in play(), music replaces the ambient drone, wrecks on enemy death, knockback on every hit,
  // momentum exchange when ramming, rock-on-rock collisions; the decoy's shots used a projectile kind the pool doesn't have
  s = swap(s, "V_[n](H_(i,r),s)", "{let o=H_(i,r);$sfx(n,o,s)||V_[n](o,s)}");
  s = swap(s, "ambient(n,e=0){if(ht){", "ambient(n,e=0){if(ht&&!(n&&$musicVol()>0)){");
  s = swap(s, "function PM(n,e){let t=this,i=t.def,s=i.r/22;", "function PM(n,e){let t=this,i=t.def,s=i.r/22;$wreck(n,t,s);");
  s = swap(s, "function yn(n,e,t,i={}){", "function yn(n,e,t,i={}){const $d=$yn0(n,e,t,i);$d>0&&$kick(n,e,$d,i);return $d}function $yn0(n,e,t,i={}){");
  s = swap(s, "a>0&&(e.x+=i/r*a*.6,e.z+=s/r*a*.6,t.x-=i/r*a*.4,t.z-=s/r*a*.4,", "a>0&&($bump(e,t,i/r,s/r),e.x+=i/r*a*.6,e.z+=s/r*a*.6,t.x-=i/r*a*.4,t.z-=s/r*a*.4,");
  s = swap(s, "function eu(n,e){", "function eu(n,e){$rockPhys(n);");
  s = swap(s, "S.fx.clear(),S.player&&(S.scene.remove(S.player.model.root)", "S.fx.clear(),$fxClear(S),S.player&&(S.scene.remove(S.player.model.root)");
  s = swap(s, 'n.weapons.spawn({kind:"pulse",team:"player",x:z.x,z:z.z,angle:xt(z.x,z.z,b.x,b.z)', 'n.weapons.spawn({kind:"bolt",team:"player",x:z.x,z:z.z,angle:xt(z.x,z.z,b.x,b.z)');
  s = swap(s, '<input id="setVol" type="range" min="0" max="1" step="0.05">', '<input id="setVol" type="range" min="0" max="1" step="0.05">\n      <label for="setMusic">Music <span id="musVal"></span></label><input id="setMusic" type="range" min="0" max="1" step="0.05">');
  // class shot styles (fx.js $ctc/$ptrail/$pimpact): the projectile pool carries fx (class) and tier from the weapon
  s = swap(s, "push:v.push,pierce:v.pierce,ricochet:v.ricochet,frags:v.frags,st:v.st})", "push:v.push,pierce:v.pierce,ricochet:v.ricochet,frags:v.frags,st:v.st,fx:v.fx,tier:v.tier})");
  s = swap(s, "noCollide:!!x.noCollide,hits:null}", "noCollide:!!x.noCollide,hits:null,fx:x.fx||null,tier:x.tier||0}");
  s = swap(s, "let L=_.x,z=_.z;if(_.x+=_.vx*x,_.z+=_.vz*x,_.noCollide)", "_.fx&&$ptrail(e,_,x);let L=_.x,z=_.z;if(_.x+=_.vx*x,_.z+=_.vz*x,_.noCollide)");
  s = swap(s, "function g(x,v,P,_){let L={", "function g(x,v,P,_){x.fx&&$pimpact(e,x,P,_);let L={");
  // Nova Burst and Vortex Orbs fly a little faster (Vortex keeps roughly its old reach)
  s = swap(s, 'name:"Nova Burst",cooldown:.66,dmg:60,zap:30,zapRange:160,speed:320', 'name:"Nova Burst",cooldown:.66,dmg:60,zap:30,zapRange:160,speed:420');
  s = swap(s, 'vortex:260,speed:220,life:3.6', 'vortex:260,speed:290,life:3');
  // gentler bank when strafing with A/D: tilt capped at ~17 degrees instead of ~43
  s = swap(s, "f=Math.max(-.75,Math.min(.75,c*.06+h*.0016));", "f=Math.max(-.3,Math.min(.3,c*.03+h*.0007));");
  // shot colour climbs a rarity ladder with tier, so stronger ships read as stronger: green, cyan, blue, purple, pink, orange, red
  s = swap(s, "function Gh(n,e,t,i){", "var $TC=[0,6094714,3729663,5078527,11754751,16732120,16752688,16726072];function $tc(w,t,c){return $ctc(w,t,c)}function Gh(n,e,t,i){");
  s = swap(s, "primary:Gh(i.primary,", "primary:$tc(Gh(i.primary,");
  s = swap(s, ",(1+.05*r.primary)*l,1),secondary:Gh(i.secondary,(1+.12*r.secondary)*o,l,1-.06*r.secondary),", ",(1+.05*r.primary)*l,1),i.tier,i.cls),secondary:$tc(Gh(i.secondary,(1+.12*r.secondary)*o,l,1-.06*r.secondary),i.tier,i.cls),");
  s = swap(s, '["Tier 5-6 ship art","Original concept art by the Voidbreakers developer",""]', '["Tier 5-6 ship models","\\u201cProteron Ships\\u201d and \\u201cSpace Ships\\u201d by Viktor Hahn (CC BY 4.0)","https://v-ktor.itch.io/space-ships"]');
  // sectors (sky.js): nebula and planet colours become uniforms; the user's galaxy photos are embedded as sky maps ($SKYIMG);
  // every 10th wave cleared plays a hyperspace jump screen that switches sector
  const skyImg = [];
  // [file, trim top/right/bottom/left as fractions]: trims cut off watermarks and vignette corners, which mirrored tiling would repeat
  for (const [f, t = [0, 0, 0, 0]] of [
    ["64298.jpg"], ["wallnest-px_38565212.jpg", [.1, .1, .1, .1]],
    ["exploring-the-mesmerizing-beauty-of-a-cosmic-nebula-illuminated-by-vibrant-orange-and-yellow-hues-in-deep-space-photo.jpg"],
    ["red_nebula_stars_gpace_galaxy_sky_background_4k_hd_space.jpg"],
    ["64023.jpg", [.05, 0, 0, 0]], ["64138.jpg", [0, 0, .04, 0]], ["64278.jpg", [0, 0, .14, 0]],
    ["red_nebula_2560x1440.png"], ["wallnest-px_36633067.jpg"],
  ]) {
    const { width: w, height: h } = await sharp(MAPS + "/" + f).metadata();
    const ex = { left: Math.round(w * t[3]), top: Math.round(h * t[0]), width: Math.round(w * (1 - t[1] - t[3])), height: Math.round(h * (1 - t[0] - t[2])) };
    // 2K: small photos are upscaled (lanczos) and lightly sharpened to hide the softening
    skyImg.push((await sharp(MAPS + "/" + f).extract(ex).resize(2048, 2048, { fit: "inside", kernel: "lanczos3" }).sharpen({ sigma: 0.8 }).jpeg({ quality: 86, mozjpeg: true }).toBuffer()).toString("base64"));
  }
  s = swap(s, "function Tf(n,e,t){let i={uTime:{value:0},uCam:{value:new U}}", "var $SKYIMG=" + JSON.stringify(skyImg) + ";\n" + fs.readFileSync(__dirname + "/sky.js", "utf8") + fs.readFileSync(__dirname + "/cam.js", "utf8") + "\nfunction Tf(n,e,t){$camSel();let i={uTime:{value:0},uCam:{value:new U},...$skyU()}");
  // Settings > Camera (cam.js): third-person chase camera; WASD and dash turn with it, the sky stretches to the horizon
  s = swap(s, '<label for="setSens">', '<label for="setCam">Camera</label><select id="setCam"><option value="top">Top-down</option><option value="chase">Third person (behind the ship)</option></select>\n      <label for="setSens">');
  s = swap(s, "let m=h+(f-h)*.18,y=d+(u-d)*.18,g=l.zoomTarget;", "let C=$chase(),m=C?h:h+(f-h)*.18,y=C?d:d+(u-d)*.18,g=l.zoomTarget;");
  s = swap(s, "s.position.copy(yf).multiplyScalar(l.zoom).add(l.target);let E=", "$camRig(l,s,c,C),C||s.position.copy(yf).multiplyScalar(l.zoom).add(l.target);let E=");
  s = swap(s, "l.shakeAmt*=Math.exp(-c*7),s.lookAt(l.target)}", "l.shakeAmt*=Math.exp(-c*7),s.lookAt(C?$camAt:l.target)}");
  s = swap(s, "snap(c,h,d=1){", "snap(c,h,d=1){$camYaw=null;");
  s = swap(s, "if(o>0&&(r/=o,a/=o,De.moved=!0),e.dashT>0)", "if(o>0&&(r/=o,a/=o,De.moved=!0),$camYaw!=null&&([r,a]=[-r*Math.sin($camYaw)-a*Math.cos($camYaw),r*Math.cos($camYaw)-a*Math.sin($camYaw)]),e.dashT>0)");
  s = swap(s, "l.position.x=O.position.x,l.position.z=O.position.z,", "l.position.x=O.position.x,l.position.z=O.position.z,l.scale.setScalar($camSky),");
  s = swap(s, "uniform vec3 uCam; uniform float uSize;", "uniform vec3 uCam; uniform float uSize; uniform vec3 uFwd;");
  s = swap(s, "p.xz = uCam.xz + mod(p.xz - uCam.xz, uSize) - uSize * 0.5;", "vec2 c0 = uCam.xz + uFwd.xz * uSize * 0.45; p.xz = c0 + mod(p.xz - c0, uSize) - uSize * 0.5;");
  s = swap(s, "uniform float uTime; varying vec3 vW;", "uniform float uTime; varying vec3 vW; uniform vec3 uK0, uK1, uK2, uK3, uK4, uK5, uK6, uOff; uniform float uDim, uImg; uniform sampler2D uTex;");
  s = swap(s, "gl_FragColor = vec4(col, 1.0);", "if (uImg > 0.5) col = pow(texture2D(uTex, vW.xz / 9000.0 + uOff.xy).rgb, vec3(1.8)) * uDim * 0.6;\n        gl_FragColor = vec4(col, 1.0);");
  s = swap(s, '<label for="setShake">', '<label for="setMap">Galaxy map</label><select id="setMap"></select>\n      <label for="setShake">');
  s = swap(s, "onWaveClear(n){", "onWaveClear(n){n%10===0&&$skyJump(S,n+1);");
  s = swap(s, "vec3 p = vec3(vW.xz * 0.00018, uTime * 0.004);", "vec3 p = vec3(vW.xz * 0.00018 + uOff.xy, uTime * 0.004);");
  ["0.004, 0.006, 0.02", "0.13, 0.03, 0.25", "0.02, 0.16, 0.30", "0.45, 0.06, 0.35", "0.05, 0.35, 0.40", "0.95, 0.40, 0.12", "0.90, 0.50, 0.85"].forEach((c, k) => (s = swap(s, `vec3(${c})`, "uK" + k)));
  s = swap(s, "col = pow(col, vec3(1.12)) * 0.6;", "col = pow(col, vec3(1.12)) * uDim;");
  s = swap(s, "uniform vec3 uSun; uniform float uTime; varying vec3 vN; varying vec3 vP;", "uniform vec3 uSun; uniform float uTime; varying vec3 vN; varying vec3 vP; uniform vec3 uPa, uPb, uPc;");
  s = swap(s, "vec3 a = vec3(0.55, 0.25, 0.45), b = vec3(0.95, 0.55, 0.30), c = vec3(0.25, 0.20, 0.55);", "vec3 a = uPa, b = uPb, c = uPc;");
  s = swap(s, 'S.ui.banner(`WAVE ${n}`,e?"CAPITAL SHIP INBOUND":"Hostiles inbound")', 'S.ui.banner(`WAVE ${n}`,(S.$sk=$skyWave(S,n),e)?"CAPITAL SHIP INBOUND":S.$sk?"Entering "+S.$sk:"Hostiles inbound")');
  // power-matched difficulty (scale.js): boss HP from the player's DPS and health; after wave 10 enemy HP and damage keep pace with upgrades
  s = swap(s, "function yn(n,e,t,i={}){", fs.readFileSync(__dirname + "/scale.js", "utf8") + "\nfunction yn(n,e,t,i={}){e===n.player&&(t*=$eDmg(n));");
  s = swap(s, "spawnEnemy(n,e,t,i){return Yo(S,n,e,t,i)}", "spawnEnemy(n,e,t,i){return Yo(S,n,e,t,$eHp(S,i??1))}");
  // after wave 10 enemies arrive in packs of 10-12 around one point every 4 s (sooner if the field is clear), held while 30+ are alive
  s = swap(s, "if(e.spawnTimer-=t,e.spawnTimer<=0)", "if(e.spawnTimer-=t,e.wave>10&&e.spawnTimer>.6&&!n.enemies.some(i=>!i.dead&&!i.custom)&&(e.spawnTimer=.6),e.spawnTimer<=0)");
  s = swap(s, "let i=e.queue.shift(),s=N_(n);for(let r=0;r<i.n;r++)n.spawnEnemy(i.kind,s.x+r%2*40-20,s.z+r*30,e.comp.hpScale);e.spawnTimer=e.comp.boss?5:e.wave>20?.35:.6",
    "let P=e.wave>10&&!e.comp.boss;if(P&&n.enemies.filter(i=>!i.dead&&!i.custom).length>=30)e.spawnTimer=.5;else{let k=P?Math.min(e.queue.length,10+Math.floor(Math.random()*3)):1,s=N_(n);for(let j=0;j<k;j++){let i=e.queue.shift(),a=j/k*6.283,d=j?90+Math.random()*70:0;for(let r=0;r<i.n;r++)n.spawnEnemy(i.kind,s.x+Math.cos(a)*d+r%2*40-20,s.z+Math.sin(a)*d+r*30,e.comp.hpScale)}e.spawnTimer=e.comp.boss?5:P?4:.6}");
  // boss waves end with the boss: once it's dead its leftover minions are destroyed too
  s = swap(s, 'else n.enemies.some(i=>!i.dead)||(e.state="break"', 'else e.comp.boss&&!n.enemies.some(i=>i.boss&&!i.dead)&&n.enemies.forEach(i=>i.dead||i.custom||yn(n,i,1e9,{silent:!0})),n.enemies.some(i=>!i.dead)||(e.state="break"');
  s = swap(s, "onWaveStart(n,e){S.waveLabel", "onWaveStart(n,e){n<=10&&($ref=null),n===10&&$refAt(S),S.waveLabel");
  // dev/cheat menu: only when the game runs from a local file, or in a browser unlocked once with ?dev=<code>
  // (only the code's SHA-256 is in the page; a static site can't truly lock it, but cheats only touch the local save)
  s = swap(s, "document.body.append(dv,tg);", '(async()=>{try{const q=new URLSearchParams(location.search).get("dev");if(q&&crypto.subtle){const h=[...new Uint8Array(await crypto.subtle.digest("SHA-256",new TextEncoder().encode(q)))].map(b=>b.toString(16).padStart(2,"0")).join("");if(h==="bed21b3fe237cf8d852c5ba65621e732763e0c7b4232dbb134b19e1e3794f542")localStorage.setItem("vbDev","1");history.replaceState(null,"",location.pathname)}return location.protocol==="file:"||localStorage.getItem("vbDev")==="1"}catch(x){return location.protocol==="file:"}})().then(ok=>ok&&document.body.append(dv,tg));');
  // chase view: the nebula is read by view direction (a dome) instead of where the ray hits the flat plane, so it doesn't streak like a floor
  s = swap(s, "uniform float uDim, uImg; uniform sampler2D uTex;\n      void main(){", "uniform float uDim, uImg, uSky; uniform sampler2D uTex;\n      void main(){\n        vec2 q = vW.xz; if (uSky > 0.5) { vec3 d = normalize(vW - cameraPosition); q = cameraPosition.xz * 0.3 + d.xz / (0.3 - d.y) * 5200.0; }");
  s = swap(s, "vec3 p = vec3(vW.xz * 0.00018 + uOff.xy,", "vec3 p = vec3(q * 0.00018 + uOff.xy,");
  s = swap(s, "texture2D(uTex, vW.xz / 9000.0 + uOff.xy)", "texture2D(uTex, q / 9000.0 + uOff.xy)");
  fs.writeFileSync(DST, s);
  // local test copy with the wave panel (testpanel.html); not published
  const end = s.lastIndexOf("</body>");
  fs.writeFileSync(__dirname + "/../GAME_TEST.html", s.slice(0, end) + fs.readFileSync(__dirname + "/testpanel.html", "utf8") + s.slice(end));
  console.log("wrote", (fs.statSync(DST).size / 1e6).toFixed(1), "MB");
})().catch((e) => { console.error(e); process.exit(1); });
