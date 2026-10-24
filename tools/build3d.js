// Builds Voidbreakers (5).html from (4).html: tier 5-6 ships use real 3D models ($M3) instead of sprite plates.
const fs = require("fs");
const { MODELS, finish } = require("./convert.js");
const DIR = "D:/game assets", SRC = DIR + "/Voidbreakers_ The Last Frontier(4).html", DST = DIR + "/GAME.html";
const SHIP = {
  colossus: "carrier03", titan: "cruiser03",
  railbreaker: "cruiser01", spectre: "pythagoras",
  mothership: "watson", overseer: "hippocrates",
  hellfire: "frigate03", armageddon: "archimedes",
  reaper: "destroyer01", valkyrie: "corvette01",
  wraith: "gunboat", nova: "frigate01", singularity: "dalton",
};
// same as $alien, but per ship, with emission maps, and the nose already turned to +X
// textures load at startup; $M3OK tells the tree thumbnails (like $QOK) when they are ready
const LOADER = `var $M3C={},$M3T={},$M3L=0,$M3N=0,$M3OK=!1;function $m3T(id){return $M3T[id]||=$M3[id].T.map(b=>{$M3N++;const t=new Pn,im=new Image;im.onload=()=>{t.image=im;t.needsUpdate=!0;++$M3L>=$M3N&&($M3OK=!0)};im.src="data:image/jpeg;base64,"+b;t.flipY=!1;t.wrapS=t.wrapT=1e3;t.anisotropy=8;return t})}for(const id in $M3)$m3T(id);function $m3(id){const D=$M3[id],d=He[id],S=84*(.9+.13*d.tier),col=Xt[d.cls].color,n=Zn(S*.4,col),e=n.body;if(!$M3C[id]){const T=$m3T(id);$M3C[id]=D.P.map(P=>{const b=Uint8Array.from(atob(P.b),c=>c.charCodeAt(0)).buffer,k=P.n,g=new kt,m=P.m;g.setAttribute("position",new Vt(new Float32Array(b,0,k*3),3));g.setAttribute("normal",new Vt(new Float32Array(b,k*12,k*3),3));g.setAttribute("uv",new Vt(new Float32Array(b,k*24,k*2),2));g.setIndex(new Vt(new Uint32Array(b,k*32,P.i),1));const o={color:new ge(m.bc[0],m.bc[1],m.bc[2]),metalness:m.me*.85,roughness:Math.max(.25,m.ro),envMapIntensity:.9,emissive:new ge(m.em[0],m.em[1],m.em[2]),emissiveIntensity:.8};if(m.map!=null){o.map=T[m.map];o.map.colorSpace="srgb"}if(m.mr!=null)o.metalnessMap=o.roughnessMap=T[m.mr];if(m.nm!=null)o.normalMap=T[m.nm];if(m.emm!=null){o.emissiveMap=T[m.emm];o.emissiveMap.colorSpace="srgb"}if(m.bl){o.transparent=!0;o.opacity=Math.max(.25,m.bc[3]);o.depthWrite=!1}return[g,new Qt(o)]})}const W=Math.max(D.mx[0]-D.mn[0],D.mx[2]-D.mn[2]),k=S/W,grp=new Mt;for(const[g,m]of $M3C[id])grp.add(new Pe(g,m));grp.scale.setScalar(k);grp.position.set(-(D.mx[0]+D.mn[0])/2*k,2-D.mx[1]*k,-(D.mx[2]+D.mn[2])/2*k);e.add(grp);for(const z of[-1,1])n.engines.push(ut(-S*.5,2-(D.mx[1]-D.mn[1])*k/2,z*S*.12));const H=D.H,dk=Lt(2896185,{panel:3}),gl=yt(col,2.6),Y=v=>2+v*S,P=d.primary,Q=d.secondary,usesGun=w=>w&&(w.kind==="pulse"||w.kind==="plasma"||w.kind==="missile"||w.kind==="rail"&&w.count>1);const gun=(x,y,z,len,r,a)=>{const g=new Mt;g.position.set(x,y,z);g.rotation.y=-a;q(new bt(r*2.2,r*2.6,r*1.6,8),dk,0,0,0,g);q(_t(r,r*.85,len,6),dk,len/2,r*1.4,0,g);q(new Rt(r*.9,6,4),gl,len,r*1.4,0,g);e.add(g);return ut(x+Math.cos(a)*len,y+r*1.4,z+Math.sin(a)*len)};n.nose=ut(H.nose[0]*S,Y(H.nose[1])+S*.01,0);q(new Rt(S*.014,8,6),gl,n.nose.x,n.nose.y,0,e);if(usesGun(P))for(const z of[1,-1])n.muzzles.push(gun(H.wing[0]*S,Y(H.wing[2]),z*H.wing[1]*S,S*.09,S*.012,0));else n.muzzles.push(n.nose.clone());if(usesGun(Q))for(const z of[1,-1])n.muzzles2.push(gun(H.pod[0]*S,Y(H.pod[2]),z*H.pod[1]*S,S*.07,S*.011,0));else n.muzzles2.push(ut(n.nose.x*.95,n.nose.y,0));n.dirGuns=[];for(const w of[P,Q])for(const a of(w&&w.dirs)||[])if(a){const E=H.edge.at(Math.round(Wt(a)/(Math.PI*2)*16+16)%16);n.dirGuns.push({a,p:gun(E[0]*S*.96,Y(E[2]),E[1]*S*.96,S*.06,S*.011,a)})}for(const T of H.tur.slice(0,d.turrets||0)){const g=new Mt;g.position.set(T[0]*S,Y(T[2]),T[1]*S);q(new bt(S*.035,S*.042,S*.02,8),dk,0,0,0,g);q(Ke(S*.065,S*.03,S*.05,1),dk,S*.006,S*.022,0,g);for(const z of[1,-1])q(_t(S*.007,S*.006,S*.08,6),dk,S*.06,S*.024,z*S*.012,g);e.add(g);n.turrets.push(g)}return n}\n`;

// class colours from the game's Xt table; grey hull metal stays, coloured panels and glows take the class hue
const CLASS = { reaper: "assault", valkyrie: "assault", colossus: "heavy", titan: "heavy", railbreaker: "sniper", spectre: "sniper", mothership: "drone", overseer: "drone", hellfire: "missile", armageddon: "missile", wraith: "energy", nova: "energy", singularity: "energy" };
const HEX = { assault: 0x38f6ff, heavy: 0xffa63d, sniper: 0x5b9bff, drone: 0xc06bff, missile: 0xff6a3d, energy: 0x3fd2c7 };
const sharp = require(__dirname + "/pp/node_modules/sharp");
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

const swap = (s, a, b) => {
  const n = s.split(a).length - 1;
  if (n !== 1) throw new Error(`expected 1 match, got ${n}: ${a}`);
  return s.replace(a, () => b);
};

(async () => {
  const M3 = {};
  for (const [id, model] of Object.entries(SHIP)) {
    M3[id] = await tint(id, finish(await MODELS[model](), 90));
    M3[id].H = hardpoints(M3[id]);
  }
  // boss hulls: the three unused Viktor Hahn ships, recoloured hostile crimson
  for (const [key, model] of [["@carrier", "carrier01"], ["@lance", "destroyer03"], ["@warden", "corvette03"]]) M3[key] = await tint(key, finish(await MODELS[model](), 90), 0xff2d4a);
  // materials move into $m3M so bosses can reuse the same mesh and material cache
  const mb = LOADER.indexOf("if(!$M3C[id]){"), me = LOADER.indexOf("return[g,new Qt(o)]})}", mb) + "return[g,new Qt(o)]})}".length;
  if (mb < 0 || me < mb) throw new Error("loader material block not found");
  const loader = LOADER.slice(0, mb).replace("function $m3(id){", "function $m3M(id){const D=$M3[id];" + LOADER.slice(mb, me) + "return $M3C[id]}function $m3(id){") + "$m3M(id);" + LOADER.slice(me);
  let s = fs.readFileSync(SRC, "utf8");
  s = swap(s, "function ai(n){", "var $M3=" + JSON.stringify(M3) + ";\n" + loader + fs.readFileSync(__dirname + "/bosses.js", "utf8") + "\nfunction ai(n){");
  // bosses: rotate the roster on boss waves, run the generic boss loop, name it in the HUD
  s = swap(s, "spawnBoss(n){return Up(S,n)}", "spawnBoss(n){return $spawnBoss(S,n)}");
  s = swap(s, "let t=n.boss;if(!t)return;", "let t=n.boss;if(!t)return;if(t.gb)return $gbU(n,t,e);");
  s = swap(s, 'g.dying>0?"Destroyed":g.phase===1?', 'g.gb?g.dying>0?"Destroyed":"Phase "+g.phase+" \\u00b7 "+g.desc:g.dying>0?"Destroyed":g.phase===1?');
  s = swap(s, '"Destroy the Eclipse Dreadnought"', '"Destroy the "+(S.boss.gb?S.boss.title:"Eclipse Dreadnought")');
  // difficulty: every 5 waves the waves grow; rogue pilots from the ship tree (low tiers to wave 15, high after); a flood after wave 20
  s = swap(s, "function z_(n){let e=1+.12*(n-1);return n%5===0?{boss:!0,hpScale:1+.35*(n/5-1),drone:2+n,interceptor:0,hunter:0,frigate:0,rogue:0}:{boss:!1,hpScale:e,drone:3+n,interceptor:n>=2?1+Math.floor((n-2)/2):0,hunter:n>=3?1+Math.floor((n-3)/3):0,frigate:n>=4?1+Math.floor((n-4)/4):0,rogue:n>=6?Math.min(3,Math.floor((n-3)/3)):0}}",
    "function z_(n){const T=Math.floor(n/5),m=n>20?2+.08*(n-20):1+.2*T,c=x=>Math.round(x*m),e=1+.12*(n-1)+.06*T+(n>20?.05*(n-20):0);return n%5===0?{boss:!0,hpScale:1+.35*(n/5-1),drone:c(2+n),interceptor:n>=10?T:0,hunter:n>=15?T-1:0,frigate:0,rogue:n>20?2:0}:{boss:!1,hpScale:e,drone:c(3+n),interceptor:n>=2?c(1+Math.floor((n-2)/2)):0,hunter:n>=3?c(1+Math.floor((n-3)/3)):0,frigate:n>=4?c(1+Math.floor((n-4)/4)):0,rogue:n<5?0:n<10?2:n<=20?3:Math.min(14,4+Math.floor((n-20)*.8))}}");
  s = swap(s, "let h=Math.max(2,Math.min(7,1+Math.floor(n.director.wave/3)))", "let w=n.director.wave,h=w<=15?1+Math.floor(Math.random()*(w<10?2:3)):w<=20?4+Math.floor(Math.random()*2):5+Math.floor(Math.random()*3)");
  s = swap(s, "e.spawnTimer=e.comp.boss?5:1.6", "e.spawnTimer=e.comp.boss?5:e.wave>20?.8:1.6");
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
  s = swap(s, '["Tier 5-6 ship art","Original concept art by the Voidbreakers developer",""]', '["Tier 5-6 ship models","\\u201cProteron Ships\\u201d and \\u201cSpace Ships\\u201d by Viktor Hahn (CC BY 4.0)","https://v-ktor.itch.io/space-ships"]');
  fs.writeFileSync(DST, s);
  console.log("wrote", (fs.statSync(DST).size / 1e6).toFixed(1), "MB");
})().catch((e) => { console.error(e); process.exit(1); });
