// Trailer score, synthesised from the timeline's cues: node music.js <out.wav>
// 120 BPM in D minor (Dm-Bb-F-C, one chord per bar of 2 s): pad, bass, arp, kick, clap, hats, plus risers and impacts on the cuts.
const fs = require("fs");
const { LEN, CUE } = require("./timeline.js");
const SR = 48000, N = LEN * SR, BEAT = .5, L = new Float32Array(N), R = new Float32Array(N), VL = new Float32Array(N), VR = new Float32Array(N);
const mf = (m) => 440 * 2 ** ((m - 69) / 12);
const CH = [[50, 53, 57, 38], [46, 50, 53, 34], [53, 57, 60, 41], [48, 52, 55, 36]]; // chord tones + bass root
const chordAt = (t) => CH[Math.floor(t / 2) % 4];
const mode = (t) => { for (const [a, b, m] of CUE.breaks) if (t >= a && t < b) return m; return t < CUE.drops[0] ? "intro" : "full"; };
let seed = 7; const rnd = () => ((seed = (seed * 16807) % 2147483647) / 2147483647) * 2 - 1;
// add a mono voice at time t0: fn(t) for dur seconds, panned, with a reverb send
function voice(t0, dur, fn, gain = 1, pan = 0, send = 0) {
  const a = Math.max(0, Math.floor(t0 * SR)), b = Math.min(N, Math.floor((t0 + dur) * SR)), gl = gain * Math.min(1, 1 - pan), gr = gain * Math.min(1, 1 + pan);
  for (let i = a; i < b; i++) { const v = fn((i - a) / SR); L[i] += v * gl; R[i] += v * gr; VL[i] += v * gl * send; VR[i] += v * gr * send; }
}
const lp = (fc) => { let y = 0; const k = 1 - Math.exp(-2 * Math.PI * fc / SR); return (x, f2) => (y += (f2 ? 1 - Math.exp(-2 * Math.PI * f2 / SR) : k) * (x - y)); };
const saw = (f, t) => 2 * ((f * t) % 1) - 1;
const kicks = [];
for (let t = 0; t < LEN; t += BEAT / 2) {
  const m = mode(t), beat = Math.round(t / BEAT * 2), on = beat % 2 === 0, bi = (beat / 2) % 4, ch = chordAt(t);
  if (on && (m === "full" || m === "build" || (m === "mid" && bi % 2 === 0))) {
    kicks.push(t);
  }
  if (m === "full" && on && (bi === 1 || bi === 3)) { const f = lp(3000); voice(t, .3, (u) => (f(rnd()) * .8 + Math.sin(2 * Math.PI * 190 * u) * .4) * Math.exp(-u * 16), .45, 0, .35); }
  if ((m === "full" || m === "build") && !on) { let p = 0; voice(t, .06, (u) => { const x = rnd(), y = x - p; p = x; return y * Math.exp(-u * 70); }, .12, .3); }
  // bass on every 8th, filtered saw, ducked by the kick later
  if (m === "full" || m === "build" || m === "mid") { const f = lp(m === "mid" ? 300 : 520), fr = mf(ch[3]); voice(t, BEAT / 2, (u) => f(saw(fr, u) * .7 + saw(fr * 1.005, u) * .3) * Math.min(1, u * 200) * Math.exp(-u * 3), .55); }
  // arp: 16ths over the chord
  if (m === "full" || m === "mid") for (const k of [0, 1]) { const tt = t + k * BEAT / 4, f = lp(2200), fr = mf(ch[[0, 1, 2, 1, 0, 2, 1, 2][(beat * 2 + k) % 8]] + 12); voice(tt, .2, (u) => f(Math.sign(Math.sin(2 * Math.PI * fr * u))) * Math.exp(-u * 14), m === "mid" ? .07 : .1, k ? .45 : -.45, .3); }
}
// snare roll in the build: 8ths, then 16ths, then 32nds
for (const [a, b, m] of CUE.breaks) if (m === "build") for (let t = a, k = 0; t < b; k++) { const r = (t - a) / (b - a), step = r < .4 ? BEAT / 2 : r < .8 ? BEAT / 4 : BEAT / 8, f = lp(4000); voice(t, .15, (u) => f(rnd()) * Math.exp(-u * 25), .2 + .35 * r, 0, .3); t += step; }
// pad: three detuned saws per chord tone, slow attack, one chord per bar
for (let bar = 0; bar < LEN / 2; bar++) {
  const t = bar * 2, m = mode(t), ch = chordAt(t), g = m === "intro" ? .12 : m === "end" ? .16 : m === "off" ? .1 : .085;
  for (const [j, n] of ch.slice(0, 3).entries()) { const f = lp(m === "full" ? 1400 : 900), fr = mf(n); voice(t, 2.4, (u) => f(saw(fr, u) + saw(fr * 1.006, u + .3) + saw(fr * .994, u + .7)) / 3 * Math.min(1, u * 2) * Math.min(1, (2.4 - u) * 3), g, [-.5, 0, .5][j], .6); }
}
// impacts: sub boom + noise burst into the reverb
for (const t of CUE.impacts) {
  voice(t, 3, (u) => { const ph = 30 * u + 30 / 2 * (1 - Math.exp(-u * 2)); return Math.sin(2 * Math.PI * ph) * Math.exp(-u * 1.6); }, .9);
  const f = lp(1800); voice(t, 2.5, (u) => f(rnd()) * Math.exp(-u * 3), .5, 0, .9);
}
// risers ending on their cue: noise with a rising filter plus a sine sweep
for (const t of CUE.risers) { const d = 3, f = lp(200); voice(t - d, d, (u) => { const r = u / d; return (f(rnd(), 200 + 7000 * r * r) * .8 + Math.sin(2 * Math.PI * (200 * u + 500 * u * u / d)) * .15) * r * r; }, .5, 0, .4); }
// sidechain: everything ducks under each kick, then the kicks go in on top
for (const k of kicks) { const a = Math.floor(k * SR), b = Math.min(N, a + SR * .3); for (let i = a; i < b; i++) { const d = 1 - .35 * Math.exp(-(i - a) / SR * 10); L[i] *= d; R[i] *= d; } }
for (const k of kicks) voice(k, .45, (u) => { const ph = 45 * u + 110 / 30 * (1 - Math.exp(-u * 30)); return Math.sin(2 * Math.PI * ph) * Math.exp(-u * 7); }, .95);
// reverb: 4 combs + 2 allpasses per side (Schroeder), decorrelated lengths
function verb(x, off) {
  const out = new Float32Array(N);
  for (const [ms, fb] of [[29.7, .82], [37.1, .8], [41.1, .79], [43.7, .78]]) { const d = Math.floor((ms + off) * SR / 1000), buf = new Float32Array(d); let j = 0, z = 0; for (let i = 0; i < N; i++) { const y = buf[j]; z += .3 * (y - z); buf[j] = x[i] + z * fb; out[i] += y * .25; j = (j + 1) % d; } }
  for (const ms of [5, 1.7]) { const d = Math.floor((ms + off / 10) * SR / 1000), buf = new Float32Array(d); let j = 0; for (let i = 0; i < N; i++) { const y = buf[j], v = out[i] + y * -.5; buf[j] = v; out[i] = y + v * .5; j = (j + 1) % d; } }
  return out;
}
const WL = verb(VL, 0), WR = verb(VR, 1.3);
let peak = 0;
for (let i = 0; i < N; i++) { const fade = Math.min(1, (N - i) / (SR * 2.5)); L[i] = Math.tanh((L[i] + WL[i] * .5) * 1.3) * fade; R[i] = Math.tanh((R[i] + WR[i] * .5) * 1.3) * fade; peak = Math.max(peak, Math.abs(L[i]), Math.abs(R[i])); }
const out = Buffer.alloc(44 + N * 4), g = .89 / peak;
out.write("RIFF", 0); out.writeUInt32LE(36 + N * 4, 4); out.write("WAVEfmt ", 8); out.writeUInt32LE(16, 16); out.writeUInt16LE(1, 20); out.writeUInt16LE(2, 22);
out.writeUInt32LE(SR, 24); out.writeUInt32LE(SR * 4, 28); out.writeUInt16LE(4, 32); out.writeUInt16LE(16, 34); out.write("data", 36); out.writeUInt32LE(N * 4, 40);
for (let i = 0; i < N; i++) { out.writeInt16LE(Math.round(L[i] * g * 32767), 44 + i * 4); out.writeInt16LE(Math.round(R[i] * g * 32767), 46 + i * 4); }
fs.writeFileSync(process.argv[2], out);
console.log("wrote", process.argv[2], "peak", peak.toFixed(2));
