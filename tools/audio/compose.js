// Procedural soundtrack: node compose.js [name ...] -> tools/audio/music/<slot>_<name>.mp3 (seamless loops)
// Each song is a chord loop, a section plan (which parts play for how many bars) and a seed for its melody. Instruments are
// plain synthesis (sines, detuned saws, filtered noise); the lead melody is a 2-bar motif re-fitted to each chord, with
// variations; everything ducks under the kick, then a ping-pong delay and a Schroeder reverb glue it together.
const fs = require("fs"), { execFileSync } = require("child_process");
const FF = require(__dirname + "/../pp/node_modules/ffmpeg-static"), OUT = __dirname + "/music";
const SR = 44100, mf = (m) => 440 * 2 ** ((m - 69) / 12);

const SONGS = {
  drift: { slot: "menu", bpm: 84, seed: 11, chords: [[57, 60, 64, 45], [53, 57, 60, 41], [48, 52, 55, 36], [55, 59, 62, 43]], scale: [0, 2, 3, 5, 7, 8, 10], root: 9,
    plan: [[8, "pad arp"], [8, "pad arp bass"], [8, "pad arp bass lead"], [8, "pad bell"], [8, "pad arp bass lead"]], arp: [0, 2, 1, 2], arpDiv: 2, padCut: 900, lead: "soft", leadOct: 12 },
  neon: { slot: "battle", bpm: 118, seed: 3, chords: [[50, 53, 57, 38], [46, 50, 53, 34], [53, 57, 60, 41], [48, 52, 55, 36]], scale: [0, 2, 3, 5, 7, 8, 10], root: 2,
    plan: [[4, "pad arp"], [8, "pad arp kick hat"], [16, "pad arp kick hat snare bass"], [16, "pad arp kick hat snare bass lead"], [4, "pad arp riser"], [16, "pad arp kick hat snare bass lead ohat"]], arp: [0, 1, 2, 1, 0, 2, 1, 2], arpDiv: 4, padCut: 1400, lead: "saw", leadOct: 12, bass: "8ths" },
  afterburn: { slot: "battle", bpm: 128, seed: 21, chords: [[52, 55, 59, 40], [48, 52, 55, 36], [55, 59, 62, 43], [50, 54, 57, 38]], scale: [0, 2, 3, 5, 7, 8, 10], root: 4,
    plan: [[4, "bass kick"], [8, "bass kick hat arp"], [16, "pad bass kick hat snare arp"], [16, "pad bass kick hat snare arp lead ohat"], [4, "pad riser"], [16, "pad bass kick hat snare arp lead ohat"]], arp: [0, 2, 1, 2, 0, 2, 1, 0], arpDiv: 4, padCut: 1100, lead: "square", leadOct: 12, bass: "16ths" },
  titan: { slot: "boss", bpm: 140, seed: 7, chords: [[48, 51, 55, 36], [44, 48, 51, 32], [41, 44, 48, 29], [43, 47, 50, 31]], scale: [0, 2, 3, 5, 7, 8, 11], root: 0,
    plan: [[4, "pad toms riser"], [16, "pad kick hat snare bass stab"], [16, "pad kick hat snare bass stab lead ohat"], [4, "toms riser"], [16, "pad kick hat snare bass stab lead ohat arp"]], arp: [0, 1, 2, 3, 2, 1], arpDiv: 4, padCut: 1600, lead: "saw", leadOct: 24, bass: "gallop" },
};

function render(S) {
  const BEAT = 60 / S.bpm, BAR = BEAT * 4, bars = S.plan.reduce((a, [b]) => a + b, 0), N = Math.round(bars * BAR * SR), T = N + SR * 4;
  const L = new Float32Array(T), R = new Float32Array(T), VL = new Float32Array(T), VR = new Float32Array(T), EL = new Float32Array(T), ER = new Float32Array(T);
  let seed = S.seed; const rnd = () => ((seed = (seed * 16807) % 2147483647) / 2147483647) * 2 - 1, pick = (a) => a[Math.floor((rnd() + 1) / 2 * a.length) % a.length];
  // voice: fn(u) for dur seconds at t0, panned, with reverb (send) and delay (echo) sends
  const voice = (t0, dur, fn, gain = 1, pan = 0, send = 0, echo = 0) => {
    const a = Math.max(0, Math.floor(t0 * SR)), b = Math.min(T, Math.floor((t0 + dur) * SR)), gl = gain * Math.min(1, 1 - pan), gr = gain * Math.min(1, 1 + pan);
    for (let i = a; i < b; i++) { const v = fn((i - a) / SR); L[i] += v * gl; R[i] += v * gr; VL[i] += v * gl * send; VR[i] += v * gr * send; EL[i] += v * gl * echo; ER[i] += v * gr * echo; }
  };
  const lp = (fc) => { let y = 0; return (x, f2) => (y += (1 - Math.exp(-2 * Math.PI * (f2 || fc) / SR)) * (x - y)); };
  const saw = (f, t) => 2 * ((f * t) % 1) - 1, sq = (f, t) => ((f * t) % 1 < .5 ? 1 : -1), tri = (f, t) => 1 - 4 * Math.abs(((f * t + .25) % 1) - .5);
  const env = (u, a, d) => Math.min(1, u / a) * Math.exp(-u * d);
  // lead motif: 2 bars of 8th slots, chord tones on strong beats and scale steps between; re-fitted to each chord
  const motif = [];
  for (let k = 0; k < 16; k++) if (k % 4 === 0 || rnd() > .1 + (k % 2) * .35) motif.push({ k, deg: k % 4 === 0 ? pick([0, 1, 2]) : pick([0, 1, 2, 3, -1]), len: pick([1, 1, 2, 3]) });
  const fit = (ch, deg, oct) => { const tones = [ch[0], ch[1], ch[2], ch[0] + 12]; if (deg >= 0) return tones[deg % 4] + oct; const pc = (ch[0] + 12 - S.root) % 12, sc = S.scale, i = sc.findIndex((s) => s >= pc); return ch[0] - (pc - sc[Math.max(0, i - 1)] || 2) + oct; };
  const kicks = [];
  let bar0 = 0;
  for (const [nb, partsStr] of S.plan) {
    const P = new Set(partsStr.split(" "));
    for (let b = 0; b < nb; b++) {
      const bar = bar0 + b, t = bar * BAR, ch = S.chords[bar % S.chords.length], last = b === nb - 1, varied = Math.floor(bar / 4) % 2;
      if (P.has("pad")) for (const [j, n] of ch.slice(0, 3).entries()) { const f = lp(S.padCut), fr = mf(n); voice(t, BAR + .3, (u) => f(saw(fr, u) + saw(fr * 1.006, u + .3) + saw(fr * .994, u + .7), S.padCut * (.7 + .3 * Math.sin(u * 1.3))) / 3 * Math.min(1, u * 1.5) * Math.min(1, (BAR + .3 - u) * 3), .085, [-.5, 0, .5][j], .55); }
      if (P.has("bell")) for (let q = 0; q < 4; q++) { const fr = mf(ch[(q * 2) % 3] + 24); voice(t + q * BEAT, 1.6, (u) => (Math.sin(2 * Math.PI * fr * u) + .4 * Math.sin(2 * Math.PI * fr * 2.76 * u) * Math.exp(-u * 6)) * env(u, .002, 2.5), .07, q % 2 ? .4 : -.4, .7, .4); }
      for (let s = 0; s < 16; s++) {
        const ts = t + s * BEAT / 4, on4 = s % 4 === 0, beat = s >> 2;
        if (P.has("kick") && on4) kicks.push(ts);
        if (P.has("kick") && S.slot === "boss" && s === 14 && varied) kicks.push(ts);
        if (P.has("snare") && on4 && beat % 2 === 1) { const f = lp(3200); voice(ts, .3, (u) => (f(rnd()) * .8 + Math.sin(2 * Math.PI * 185 * u) * .45) * Math.exp(-u * 15), .42, 0, .3); }
        if (P.has("snare") && last && s >= 12) { const f = lp(3500); voice(ts, .15, (u) => f(rnd()) * Math.exp(-u * 22), .18 + .05 * (s - 12), 0, .3); }
        if (P.has("hat") && s % 2 === 1) { let p = 0; voice(ts, .05, (u) => { const x = rnd(), y = x - p; p = x; return y * Math.exp(-u * 80); }, .1, .25); }
        if (P.has("hat") && S.bpm >= 125 && s % 2 === 0 && !on4) { let p = 0; voice(ts, .03, (u) => { const x = rnd(), y = x - p; p = x; return y * Math.exp(-u * 120); }, .05, -.25); }
        if (P.has("ohat") && s % 4 === 2) { let p = 0; voice(ts, .25, (u) => { const x = rnd(), y = x - p; p = x; return y * Math.exp(-u * 12); }, .07, .3, .2); }
        if (P.has("bass")) {
          const hit = S.bass === "16ths" ? !on4 || s === 0 : S.bass === "gallop" ? [0, 2, 3, 4, 6, 7, 8, 10, 11, 12, 14, 15].includes(s) : s % 2 === 0;
          if (hit) { const f = lp(S.bass === "16ths" ? 700 : 520), fr = mf(ch[3] + (S.bass === "8ths" && s % 4 === 2 ? 12 : 0)), d = BEAT / (S.bass === "8ths" ? 2 : 4); voice(ts, d, (u) => f(saw(fr, u) * .7 + saw(fr * 1.006, u) * .3 + Math.sin(2 * Math.PI * fr * u) * .4) * Math.min(1, u * 300) * Math.min(1, (d - u) * 200), .5); }
        }
        if (P.has("arp") && s % (4 / S.arpDiv) === 0) { const f = lp(2400), n = ch[S.arp[(bar * 16 + s) / (4 / S.arpDiv) % S.arp.length] % 3] + 12 + (S.arp[(s / (4 / S.arpDiv)) % S.arp.length] === 3 ? 12 : 0), fr = mf(n); voice(ts, .22, (u) => f(sq(fr, u) * .6 + saw(fr * 2, u) * .2) * Math.exp(-u * 13), .085, (s / 2) % 2 ? .45 : -.45, .25, .35); }
        if (P.has("stab") && (s === 0 || s === 6 || (varied && s === 10))) for (const n of ch.slice(0, 3)) { const f = lp(2600), fr = mf(n + 12); voice(ts, .3, (u) => f(saw(fr, u) + saw(fr * 1.01, u)) * Math.exp(-u * 9), .07, 0, .4, .2); }
        if (P.has("toms") && (last ? s >= 8 : s === 12 || s === 14)) { const f0 = 140 - (s % 8) * 10; voice(ts, .4, (u) => Math.sin(2 * Math.PI * (f0 * u - 30 * u * u)) * Math.exp(-u * 9), .5, (s % 3 - 1) * .3, .3); }
      }
      if (P.has("lead")) {
        const half = bar % 2, oct = S.leadOct + (varied && half ? 12 : 0);
        for (const m of motif) if ((m.k >> 3) === half) {
          const ts = t + (m.k % 8) * BEAT / 2, d = m.len * BEAT / 2 * .95, fr = mf(fit(ch, varied && m.k % 8 === 6 ? (m.deg + 1) % 3 : m.deg, oct)), f = lp(S.lead === "soft" ? 1600 : 3200);
          const osc = S.lead === "square" ? (u) => sq(fr * (1 + .004 * Math.sin(u * 34) * Math.min(1, u * 4)), u) * .7 : S.lead === "soft" ? (u) => tri(fr, u) + .3 * Math.sin(2 * Math.PI * fr * 2 * u) : (u) => (saw(fr * (1 + .005 * Math.sin(u * 32) * Math.min(1, u * 3)), u) + saw(fr * 1.008, u + .5)) * .5;
          voice(ts, d + .15, (u) => f(osc(u)) * Math.min(1, u * 60) * Math.min(1, (d + .15 - u) * 12) * (1 - .3 * Math.min(1, u / 1.2)), S.lead === "soft" ? .13 : .12, 0, .35, .3);
        }
      }
      if (P.has("riser") && last) { const d = BAR, f = lp(200); voice(t, d, (u) => { const r = u / d; return (f(rnd(), 200 + 7000 * r * r) * .8 + Math.sin(2 * Math.PI * (300 * u + 600 * u * u / d)) * .12) * r * r; }, .4, 0, .4); }
      if (b === 0 && bar0 > 0 && P.has("kick")) { let p = 0; voice(t, 2.2, (u) => { const x = rnd(), y = x - p; p = x; return y * Math.exp(-u * 2.2); }, .16, 0, .4); }
    }
    bar0 += nb;
  }
  // sidechain pump, then the kicks on top
  for (const k of kicks) { const a = Math.floor(k * SR), e = Math.min(T, a + SR * .3); for (let i = a; i < e; i++) { const d = 1 - .4 * Math.exp(-(i - a) / SR * 10); L[i] *= d; R[i] *= d; } }
  for (const k of kicks) voice(k, .45, (u) => Math.sin(2 * Math.PI * (45 * u + 110 / 30 * (1 - Math.exp(-u * 30)))) * Math.exp(-u * 7), .9);
  // ping-pong delay (dotted 8th), Schroeder reverb
  const dly = Math.round(BEAT * .75 * SR);
  for (let i = dly; i < T; i++) { EL[i] += ER[i - dly] * .45; ER[i] += EL[i - dly] * .45; }
  const verb = (x, off) => {
    const out = new Float32Array(T);
    for (const [ms, fb] of [[29.7, .82], [37.1, .8], [41.1, .79], [43.7, .78]]) { const d = Math.floor((ms + off) * SR / 1000), buf = new Float32Array(d); let j = 0, z = 0; for (let i = 0; i < T; i++) { const y = buf[j]; z += .3 * (y - z); buf[j] = x[i] + z * fb; out[i] += y * .25; j = (j + 1) % d; } }
    for (const ms of [5, 1.7]) { const d = Math.floor((ms + off / 10) * SR / 1000), buf = new Float32Array(d); let j = 0; for (let i = 0; i < T; i++) { const y = buf[j], v = out[i] + y * -.5; buf[j] = v; out[i] = y + v * .5; j = (j + 1) % d; } }
    return out;
  };
  const WL = verb(VL, 0), WR = verb(VR, 1.3);
  // seamless loop: whatever rings past the end (reverb, delay, last notes) wraps onto the start
  const oL = new Float32Array(N), oR = new Float32Array(N);
  for (let i = 0; i < T; i++) { const j = i % N; oL[j] += L[i] + WL[i] * .45 + EL[i] * .5; oR[j] += R[i] + WR[i] * .45 + ER[i] * .5; }
  let peak = 0;
  for (let i = 0; i < N; i++) { oL[i] = Math.tanh(oL[i] * 1.25); oR[i] = Math.tanh(oR[i] * 1.25); peak = Math.max(peak, Math.abs(oL[i]), Math.abs(oR[i])); }
  const pcm = Buffer.alloc(N * 4), g = .9 / peak;
  for (let i = 0; i < N; i++) { pcm.writeInt16LE(Math.round(oL[i] * g * 32767), i * 4); pcm.writeInt16LE(Math.round(oR[i] * g * 32767), i * 4 + 2); }
  return { pcm, secs: N / SR };
}

for (const name of process.argv.slice(2).length ? process.argv.slice(2) : Object.keys(SONGS)) {
  const S = SONGS[name], { pcm, secs } = render(S), file = `${OUT}/${S.slot}_${name}.mp3`;
  execFileSync(FF, ["-v", "error", "-y", "-f", "s16le", "-ar", String(SR), "-ac", "2", "-i", "pipe:0", "-b:a", "192k", file], { input: pcm, maxBuffer: 1 << 28 });
  console.log(file, secs.toFixed(1) + " s");
}
