<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, viewport-fit=cover"><meta name="mobile-web-app-capable" content="yes">
<title>Voidbreakers</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Saira+Stencil+One&family=Barlow+Semi+Condensed:wght@400;500;600;700&display=swap" rel="stylesheet">
<style>
/* Voidbreakers: industrial shipyard UI.
   Steel bulkheads, one hazard band per modal carrying a stencilled title, recessed plates,
   amber for actions and state, teal for readouts. */
:root {
  --steel: #23272d; --hull: #14171b; --plate: #4a515b; --seam: #2c3138; --ink: #16181c;
  --amber: #f2b01e; --teal: #3fd2c7; --fault: #e5484d;
  --text: #dfe4ea; --dim: #8b95a3;
  --hullbar: #f08a24; --energy: #8c7dff;
  --ui: 'Barlow Semi Condensed', 'Arial Narrow', system-ui, sans-serif;
  --stencil: 'Saira Stencil One', 'Impact', var(--ui);
  --surface: linear-gradient(180deg, rgba(255,255,255,.04), rgba(0,0,0,.2)), repeating-linear-gradient(90deg, rgba(255,255,255,.014) 0 1px, transparent 1px 4px), var(--steel);
  --inset: inset 0 2px 6px rgba(0,0,0,.55), inset 0 0 0 1px var(--seam);
  --chamfer: polygon(20px 0, calc(100% - 20px) 0, 100% 20px, 100% calc(100% - 20px), calc(100% - 20px) 100%, 20px 100%, 0 calc(100% - 20px), 0 20px);
  --cut: polygon(7px 0, 100% 0, 100% calc(100% - 7px), calc(100% - 7px) 100%, 0 100%, 0 7px);
}
* { box-sizing: border-box; }
html, body { margin: 0; height: 100%; overflow: hidden; background: var(--hull); color: var(--text); font: 500 16px/1.4 var(--ui); user-select: none; font-variant-numeric: tabular-nums; }
body.playing { cursor: none; }
canvas#game { position: fixed; inset: 0; width: 100%; height: 100%; display: block; }
.hidden { display: none !important; }
.dim { color: var(--dim); }
.stencil { font-family: var(--stencil); font-weight: 400; letter-spacing: .06em; }
h1, h2, h3 { margin: 0; font-weight: 700; }
h3 { font-size: 18px; letter-spacing: .01em; }
h3 small { font-weight: 500; font-size: 14px; margin-left: 8px; }
p { margin: 0; max-width: 62ch; }

/* ---------- controls ---------- */
button, select {
  font: 600 15px/1 var(--ui); letter-spacing: .02em; color: var(--text); cursor: pointer; border: 0; padding: 11px 18px;
  background: linear-gradient(#3b4149, #2b3036); clip-path: var(--cut);
  box-shadow: inset 0 1px 0 rgba(255,255,255,.14), inset 0 -2px 0 rgba(0,0,0,.45);
  transition: background .12s, transform .06s;
}
button:hover:not(:disabled) { background: linear-gradient(#474e57, #353b42); }
button:active:not(:disabled) { transform: translateY(1px); box-shadow: inset 0 2px 5px rgba(0,0,0,.55); }
button:focus-visible, select:focus-visible, [tabindex]:focus-visible { outline: none; box-shadow: inset 0 0 0 2px var(--teal); }
button:disabled { opacity: .45; cursor: not-allowed; }
button.primary { background: linear-gradient(#f7c446, #d99a0e); color: var(--ink); }
button.primary:hover:not(:disabled) { background: linear-gradient(#ffd25c, #e8a815); }
button.danger { color: #ff9ea1; }
select { padding-right: 30px; appearance: none;
  background: linear-gradient(135deg, var(--amber) 50%, transparent 50%) calc(100% - 14px) 50% / 8px 8px no-repeat, linear-gradient(#3b4149, #2b3036); }
select:hover { background: linear-gradient(135deg, var(--amber) 50%, transparent 50%) calc(100% - 14px) 50% / 8px 8px no-repeat, linear-gradient(#474e57, #353b42); }
select option { background: var(--steel); color: var(--text); }
input[type=range] { accent-color: var(--amber); width: 100%; }
kbd { font: 700 12px/1 var(--ui); color: var(--ink); padding: 3px 6px; border-radius: 3px; background: linear-gradient(#eef1f4, #b9c0c9); box-shadow: 0 2px 0 #5c6470; }
.ico { display: inline-block; width: 11px; height: 11px; margin: 0 6px 0 12px; vertical-align: -1px; }
.ico.credit { background: #ffd23d; border-radius: 50%; box-shadow: 0 0 6px #ffd23d; }
.ico.crystal { background: var(--teal); transform: rotate(45deg); box-shadow: 0 0 6px var(--teal); }
.ico.ore { background: #c9824a; transform: rotate(45deg); }

/* ---------- bulkhead modal frame ---------- */
.bulkhead {
  position: relative; display: flex; flex-direction: column; gap: 18px;
  width: min(560px, calc(100vw - 32px)); max-height: calc(100vh - 32px); overflow-y: auto;
  padding: 0 32px 30px; background: var(--surface); clip-path: var(--chamfer);
  box-shadow: inset 0 0 0 2px var(--plate), inset 0 0 0 9px var(--steel), inset 0 0 0 10px #0e1013;
}
.bulkhead.wide { width: min(880px, calc(100vw - 32px)); }
.bulkhead::after { /* corner rivets */
  content: ''; position: absolute; inset: 14px; pointer-events: none;
  --r: radial-gradient(circle, #9aa3ae 0 1.6px, #15181b 2.3px, transparent 3px);
  background: var(--r) left top / 8px 8px no-repeat, var(--r) right top / 8px 8px no-repeat, var(--r) left bottom / 8px 8px no-repeat, var(--r) right bottom / 8px 8px no-repeat;
}
.band {
  display: flex; align-items: center; justify-content: space-between; gap: 16px; flex-wrap: wrap;
  margin: 0 -32px; padding: 16px 32px;
  background: repeating-linear-gradient(-45deg, var(--amber) 0 16px, var(--ink) 16px 32px);
  box-shadow: inset 0 3px 0 rgba(255,255,255,.14), inset 0 -4px 0 rgba(0,0,0,.5);
}
.band h2 {
  font: 400 clamp(26px, 4vw, 40px)/1 var(--stencil); letter-spacing: .06em; color: var(--ink);
  background: var(--amber); padding: 7px 18px 5px; box-shadow: 0 0 0 5px var(--ink);
}
.band.alert { background: repeating-linear-gradient(-45deg, var(--fault) 0 16px, var(--ink) 16px 32px); }
.band.alert h2 { background: var(--fault); }
.band .wallet { background: var(--ink); padding: 8px 14px; font-weight: 700; font-size: 17px; box-shadow: 0 0 0 2px #000; }
.bulkhead > p { color: var(--text); }
.bulkhead h3 { color: var(--text); }

/* readout lists: label / value rows divided by seams */
.readout { margin: 0; display: grid; gap: 0; }
.readout div { display: flex; justify-content: space-between; gap: 24px; padding: 7px 2px; border-bottom: 1px solid var(--seam); }
.readout div:last-child { border-bottom: 0; }
.readout dt { color: var(--dim); }
.readout dd { margin: 0; font-weight: 700; color: var(--teal); text-align: right; }

/* ---------- screens ---------- */
.screen { position: fixed; inset: 0; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 18px; padding: 16px; }
.screen.overlay { background: rgba(8, 10, 13, .66); backdrop-filter: blur(2px); }
#loading { background: var(--hull); }
#loading h2 { font: 400 32px var(--stencil); letter-spacing: .08em; color: var(--amber); }

.menuBtns { display: flex; flex-direction: column; gap: 10px; }
.menuBtns.row { flex-direction: row; flex-wrap: wrap; justify-content: flex-end; }
.menuBtns button { text-align: left; }
.menuBtns.row button { text-align: center; }

/* main menu: the logo is the one loud thing */
.logo { text-align: center; }
.logo h1 {
  font: 400 clamp(44px, 9.5vw, 128px)/.9 var(--stencil); letter-spacing: .04em; color: #e8ecf0;
  text-shadow: 0 4px 0 #0b0d10, 0 0 48px rgba(242, 176, 30, .28);
}
.logo p { margin: 10px auto 0; font-weight: 700; font-size: clamp(16px, 2.2vw, 22px); color: var(--amber); letter-spacing: .04em; }
.bulkhead.menuPanel { width: min(340px, calc(100vw - 32px)); padding: 30px 30px 24px; }
#menu .menuBtns button { font-size: 17px; padding: 14px 18px; }
#menuStats { font-size: 15px; }
.hint { position: absolute; bottom: 14px; color: var(--dim); font-size: 14px; }

/* hangar + station: full-screen bay with the 3D ship showing through the middle */
.screen.bay { justify-content: space-between; align-items: stretch; padding: 0 16px 16px;
  background: linear-gradient(90deg, rgba(14,16,19,.94) 0%, rgba(14,16,19,.6) 27%, transparent 40%, transparent 60%, rgba(14,16,19,.6) 72%, rgba(14,16,19,.94) 100%); }
.bay > header.band { margin: 0 -16px; padding: 14px 24px; }
.bay > footer { display: flex; justify-content: space-between; align-items: center; gap: 10px; flex-wrap: wrap; }
.hangarBody { flex: 1; width: 100%; display: grid; grid-template-columns: minmax(240px, 300px) 1fr minmax(300px, 390px); gap: 18px; min-height: 0; padding-top: 16px; }
#shipList, .stationCol { display: flex; flex-direction: column; gap: 10px; overflow-y: auto; }
.stationCol { background: var(--surface); padding: 18px; clip-path: var(--cut); align-self: start; }
.stationCol #dockMsg { color: var(--teal); }
.shipCard { position: relative; padding: 14px 14px 14px 18px; background: var(--surface); clip-path: var(--cut); cursor: pointer; }
.shipCard::before { content: ''; position: absolute; left: 0; top: 0; bottom: 0; width: 5px; background: var(--seam); }
.shipCard.sel::before { background: var(--amber); }
.shipCard.locked { filter: saturate(.4); }
.shipCard h4 { margin: 0 0 4px; font: 400 24px/1 var(--stencil); letter-spacing: .05em; }
.shipCard p { margin: 0 0 10px; color: var(--dim); font-size: 15px; }
.shipCard .tier { float: right; font-weight: 700; font-size: 14px; color: var(--amber); }
.shipCard .active { color: var(--teal); font-weight: 700; }
.previewCol { display: flex; align-items: flex-end; justify-content: center; }
.plaque { min-width: 280px; padding: 14px 20px; background: var(--surface); clip-path: var(--cut); text-align: center; }
.plaque .stencil { display: block; font-size: 30px; line-height: 1; margin-bottom: 6px; color: var(--amber); }
.plaque .readout { text-align: left; font-size: 15px; }
.upgradeCol { background: var(--surface); padding: 18px; overflow-y: auto; clip-path: var(--cut); }
.upgradeCol h3 { margin-bottom: 12px; }
.upg { display: grid; grid-template-columns: auto 1fr auto; grid-template-areas: 'nm gauge btn' 'ds ds btn'; align-items: center; gap: 3px 12px; padding: 7px 10px; margin-bottom: 5px; background: #191c21; box-shadow: var(--inset); }
.upg:hover { box-shadow: var(--inset), inset 3px 0 0 var(--amber); }
.upg .nm { grid-area: nm; font-weight: 700; font-size: 16px; }
.upg .gauge { grid-area: gauge; justify-self: end; }
.upg .ds { grid-area: ds; color: var(--dim); font-size: 14px; }
.upg button { grid-area: btn; font-size: 14px; padding: 9px 12px; min-width: 80px; }
.gauge { display: flex; gap: 3px; }
.gauge i { width: 16px; height: 7px; background: #2b3037; box-shadow: inset 0 1px 1px rgba(0,0,0,.7); }
.gauge i.on { background: var(--amber); box-shadow: 0 0 6px rgba(242, 176, 30, .55); }
#statCompare, #stCompare { margin-top: 10px; font-size: 15px; }
#statCompare h3, #stCompare h3 { font-size: 16px; margin-bottom: 8px; color: var(--dim); }
.stat { display: grid; grid-template-columns: 92px 1fr 104px; gap: 10px; align-items: center; margin: 2px 0; }
.stat .track { height: 7px; }
.stat .fill { background: var(--teal); transition: width .45s cubic-bezier(.2,.8,.2,1); }
.stat .fill.up { background: var(--amber); box-shadow: 0 0 8px rgba(242,176,30,.6); }
.stat .v { text-align: right; font-weight: 700; }
.stat .v em { color: var(--amber); font-style: normal; }

/* level-up boosts */
#boostCards { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 14px; }
.boost { padding: 20px 16px 18px; background: #191c21; box-shadow: var(--inset); cursor: pointer; text-align: left; animation: slotIn .3s ease-out backwards; }
.boost:nth-child(2) { animation-delay: .06s; } .boost:nth-child(3) { animation-delay: .12s; }
.boost:hover { box-shadow: var(--inset), inset 0 -4px 0 var(--amber); }
.boost h4 { margin: 14px 0 4px; font-size: 19px; font-weight: 700; }
.boost p { color: var(--teal); }
@keyframes slotIn { from { transform: translateY(10px); opacity: 0; } }

/* settings / controls / achievements */
.settingsGrid { display: grid; grid-template-columns: 1fr minmax(200px, 280px); gap: 14px 24px; align-items: center; }
.settingsGrid label span { color: var(--teal); font-weight: 700; margin-left: 6px; }
#keyBinds, #controlsList, #achList { display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 6px 12px; }
.bind { display: flex; justify-content: space-between; align-items: center; gap: 10px; padding: 7px 10px; background: #191c21; box-shadow: var(--inset); }
.bind button { font-size: 14px; padding: 7px 12px; min-width: 96px; }
.bind button.listening { color: var(--ink); background: var(--amber); }
.ach { padding: 10px 14px; background: #191c21; box-shadow: var(--inset); color: var(--dim); }
.ach b { display: block; font-weight: 700; color: var(--dim); }
.ach.on { color: var(--text); box-shadow: var(--inset), inset 4px 0 0 var(--amber); }
.ach.on b { color: var(--amber); }

/* ---------- HUD ---------- */
#hud { position: fixed; inset: 0; pointer-events: none; }
#vignette { position: absolute; inset: 0; transition: box-shadow .15s; }
#vignette.low { animation: lowhp 1s infinite; }
@keyframes lowhp { 50% { box-shadow: inset 0 0 160px rgba(229, 72, 77, .55); } }
.hudPanel, #bars, #resources, .slot, #tutorial, .toast, #prompt { background: var(--surface); clip-path: var(--cut); }
#bars { position: absolute; top: 16px; left: 16px; width: 300px; padding: 12px 14px 10px 18px; }
#bars::before, #resources::before { content: ''; position: absolute; top: 0; bottom: 0; width: 4px; background: var(--amber); }
#bars::before { left: 0; } #resources::before { right: 0; }
.bar { display: grid; grid-template-columns: 54px 1fr 44px; align-items: center; gap: 8px; margin: 4px 0; font-size: 14px; font-weight: 600; }
.bar label { color: var(--dim); }
.bar span { text-align: right; font-weight: 700; }
.track { height: 9px; background: #121417; box-shadow: inset 0 1px 2px rgba(0,0,0,.8); position: relative; overflow: hidden; }
.fill { height: 100%; width: 100%; transition: width .12s; }
.fill.hull { background: linear-gradient(90deg, #d9531a, var(--hullbar)); }
.fill.shield { background: var(--teal); box-shadow: 0 0 8px var(--teal); }
.fill.energy { background: var(--energy); }
.fill.xpf { background: repeating-linear-gradient(90deg, var(--amber) 0 10px, #c98f10 10px 12px); }
.fill.boss { background: repeating-linear-gradient(-45deg, var(--fault) 0 10px, #b8333a 10px 20px); }
#topCenter { position: absolute; top: 14px; left: 50%; transform: translateX(-50%); text-align: center; width: min(600px, 80vw); }
#waveTxt { font: 400 24px/1.1 var(--stencil); letter-spacing: .08em; text-shadow: 0 2px 0 #000; }
#objTxt { font-size: 16px; color: var(--dim); margin-top: 2px; text-shadow: 0 1px 2px #000; }
#bossBar { margin-top: 10px; }
#bossBar .track { height: 14px; box-shadow: inset 0 0 0 2px var(--ink), 0 0 0 1px var(--plate); }
#bossName { font: 400 18px var(--stencil); letter-spacing: .08em; color: #ffb0b3; margin-bottom: 4px; }
#bossPhase { font-size: 14px; color: var(--dim); margin-top: 4px; }
#resources { position: absolute; top: 16px; right: 16px; padding: 10px 18px 10px 14px; font-weight: 700; font-size: 16px; text-align: right; }
#resources div { margin: 2px 0; }
#resources .score { color: var(--dim); font-weight: 600; font-size: 14px; margin-top: 6px; }
#resources .score b { color: var(--text); font-size: 17px; }
#weapons { position: absolute; bottom: 16px; left: 16px; display: flex; gap: 8px; }
.slot { position: relative; width: 96px; height: 60px; padding: 7px 8px; overflow: hidden; display: flex; flex-direction: column; justify-content: space-between; }
.slot .wname { font-weight: 700; font-size: 14px; position: relative; z-index: 1; }
.slot kbd { position: relative; z-index: 1; align-self: flex-start; }
.slot .cd { position: absolute; left: 0; bottom: 0; width: 100%; height: 0%; background: rgba(229, 72, 77, .35); }
.slot.ready { box-shadow: inset 0 -3px 0 var(--teal); }
.slot.noenergy { opacity: .55; }
#xp { position: absolute; bottom: 86px; left: 16px; width: min(420px, 40vw); display: flex; align-items: center; gap: 10px; font-weight: 700; font-size: 15px; }
#xp .track { flex: 1; height: 8px; }
#minimap { position: absolute; bottom: 16px; right: 16px; width: 200px; height: 200px; border-radius: 50%; background: rgba(14, 16, 19, .82); box-shadow: 0 0 0 3px var(--steel), 0 0 0 5px var(--plate), 0 0 0 6px #000; }
#prompt { position: absolute; bottom: 112px; left: 50%; transform: translateX(-50%); font-weight: 700; font-size: 16px; padding: 9px 18px; box-shadow: inset 0 -3px 0 var(--teal); }
#prompt.warn { box-shadow: inset 0 -3px 0 var(--fault); color: #ffb0b3; }
#banner { position: absolute; top: 27%; left: 0; right: 0; text-align: center; font: 400 clamp(36px, 6vw, 64px)/1 var(--stencil); letter-spacing: .08em; opacity: 0; color: #eef1f4; text-shadow: 0 4px 0 #000, 0 0 30px rgba(242,176,30,.35); transition: opacity .3s; }
#banner small { display: block; font: 600 18px var(--ui); letter-spacing: .02em; color: var(--text); margin-top: 10px; text-shadow: 0 1px 3px #000; }
#banner.show { opacity: 1; }
#toasts { position: absolute; top: 150px; right: 16px; display: flex; flex-direction: column; gap: 6px; align-items: flex-end; }
.toast { max-width: 340px; padding: 9px 14px 9px 18px; font-size: 15px; box-shadow: inset 4px 0 0 var(--amber); animation: toastIn .25s ease-out; }
.toast b { display: block; font-weight: 700; color: var(--amber); }
@keyframes toastIn { from { transform: translateX(30px); opacity: 0; } }
#indicators i { position: absolute; width: 0; height: 0; border-left: 7px solid transparent; border-right: 7px solid transparent; border-bottom: 14px solid var(--fault); filter: drop-shadow(0 0 3px var(--fault)); }
#indicators i.boss { border-bottom-color: var(--amber); border-left-width: 11px; border-right-width: 11px; border-bottom-width: 22px; }
#indicators i.crystal { border-bottom-color: var(--teal); filter: drop-shadow(0 0 3px var(--teal)); }
#floaters div { position: absolute; font-weight: 700; font-size: 16px; color: #fff; text-shadow: 0 1px 3px #000, 0 0 2px #000; transform: translate(-50%, -50%); white-space: nowrap; }
#floaters div.crit { color: var(--amber); font-size: 22px; }
#floaters div.player { color: #ff7a7e; }
#floaters div.loot { color: var(--teal); font-size: 15px; }
#crosshair { position: absolute; left: 0; top: 0; width: 34px; height: 34px; margin: -17px 0 0 -17px; }
#crosshair i { position: absolute; background: var(--teal); box-shadow: 0 0 4px var(--teal); transition: transform .08s; }
#crosshair i:nth-child(1) { left: 16px; top: 0; width: 2px; height: 9px; }
#crosshair i:nth-child(2) { left: 16px; bottom: 0; width: 2px; height: 9px; }
#crosshair i:nth-child(3) { top: 16px; left: 0; height: 2px; width: 9px; }
#crosshair i:nth-child(4) { top: 16px; right: 0; height: 2px; width: 9px; }
#crosshair b { position: absolute; left: 15px; top: 15px; width: 4px; height: 4px; background: #fff; }
#crosshair.firing i:nth-child(1) { transform: translateY(-4px); } #crosshair.firing i:nth-child(2) { transform: translateY(4px); }
#crosshair.firing i:nth-child(3) { transform: translateX(-4px); } #crosshair.firing i:nth-child(4) { transform: translateX(4px); }
#crosshair.target i { background: var(--fault); box-shadow: 0 0 4px var(--fault); }
#hitmark { position: absolute; inset: 4px; opacity: 0; background:
  linear-gradient(45deg, transparent 46%, #fff 46%, #fff 54%, transparent 54%), linear-gradient(-45deg, transparent 46%, #fff 46%, #fff 54%, transparent 54%); }
#hitmark.crit { background: linear-gradient(45deg, transparent 44%, var(--amber) 44%, var(--amber) 56%, transparent 56%), linear-gradient(-45deg, transparent 44%, var(--amber) 44%, var(--amber) 56%, transparent 56%); }
#tutorial { position: absolute; top: 118px; left: 50%; transform: translateX(-50%); width: min(480px, 90vw); padding: 14px 18px; pointer-events: auto; text-align: center; box-shadow: inset 0 3px 0 var(--amber); }
#tutStep { font-weight: 700; font-size: 14px; color: var(--amber); }
#tutText { font-size: 18px; margin: 6px 0 10px; }
#tutSkip { font-size: 13px; padding: 6px 12px; }
#titleCard { position: fixed; top: 50%; left: 0; right: 0; transform: translateY(-50%); text-align: center; pointer-events: none; padding: 20px 0;
  background: linear-gradient(transparent 0 12px, rgba(20,8,10,.85) 12px calc(100% - 12px), transparent calc(100% - 12px)),
    repeating-linear-gradient(-45deg, var(--fault) 0 14px, var(--ink) 14px 28px); animation: cardIn .45s ease-out; }
#titleCard small { font-weight: 700; color: #ff9ea1; font-size: 15px; letter-spacing: .04em; animation: blink .5s infinite; }
#titleCard h1 { font: 400 clamp(36px, 6vw, 64px)/1 var(--stencil); letter-spacing: .08em; color: #f3e2e3; text-shadow: 0 4px 0 #000; margin: 10px 0 6px; }
#titleCard p { color: #ffc6c8; font-weight: 600; }
@keyframes cardIn { from { opacity: 0; transform: translateY(-50%) scaleY(0); } }
@keyframes blink { 50% { opacity: .35; } }

@media (max-width: 900px) {
  .hangarBody { grid-template-columns: 1fr; overflow-y: auto; }
  .previewCol { min-height: 200px; }
  #bars { width: 240px; }
  .settingsGrid { grid-template-columns: 1fr; }
}
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after { animation: none !important; transition: none !important; }
}

/* ---------- evolution tree ---------- */
.treeScreen { justify-content: flex-start; align-items: stretch; padding: 0 16px 16px; background: rgba(6, 8, 12, .35); }
.treeScreen > header.band { margin: 0 -16px; padding: 12px 24px; }
.treeHead { display: flex; align-items: center; gap: 14px; flex-wrap: wrap; }
#treeMode { background: var(--ink); padding: 8px 12px; font-weight: 600; color: var(--text); max-width: 46ch; }
.treeBody { flex: 1; min-height: 0; display: grid; grid-template-columns: 1fr minmax(320px, 400px); gap: 14px; padding-top: 14px; }
.treeView {
  position: relative; overflow: hidden; cursor: grab; touch-action: none; outline: none; clip-path: var(--cut);
  background: radial-gradient(circle at 30% 40%, rgba(91,155,255,.10), transparent 55%), radial-gradient(circle at 75% 65%, rgba(192,107,255,.10), transparent 50%),
    radial-gradient(rgba(140,170,220,.16) 1px, transparent 1.5px) 0 0 / 26px 26px, #0a0d13;
  box-shadow: inset 0 0 0 1px var(--seam), inset 0 0 80px rgba(0,0,0,.7);
}
.treeView:focus-visible { box-shadow: inset 0 0 0 2px var(--teal), inset 0 0 80px rgba(0,0,0,.7); }
.treeView.panning { cursor: grabbing; }
#treeWorld { position: absolute; left: 0; top: 0; transform-origin: 0 0; }
#treeWorld.smooth { transition: transform .35s cubic-bezier(.2,.8,.2,1); }
#treeLinks { position: absolute; inset: 0; overflow: visible; }
#treeLinks path { fill: none; stroke-width: 2.5; }
#treeLinks path.locked { stroke: #2a3140; stroke-dasharray: 3 7; }
#treeLinks path.open { stroke: var(--c); stroke-opacity: .6; stroke-dasharray: 10 8; animation: flow 1.4s linear infinite; }
#treeLinks path.owned { stroke: var(--c); stroke-width: 3.5; filter: url(#glowF); }
#treeLinks path.route { stroke: var(--amber); stroke-width: 4; stroke-dasharray: 14 8; filter: url(#glowF); animation: flow .9s linear infinite; }
@keyframes flow { to { stroke-dashoffset: -36; } }
.tierHead { position: absolute; top: 6px; width: 112px; text-align: center; font: 400 20px var(--stencil); letter-spacing: .08em; color: #4a5568; }
.tnode {
  position: absolute; width: 112px; height: 118px; padding: 6px 6px 8px; display: flex; flex-direction: column; align-items: center; gap: 3px;
  background: linear-gradient(180deg, #1b2029, #12161d); clip-path: var(--cut); color: var(--text); font: 600 14px/1.1 var(--ui); letter-spacing: 0; text-align: center;
  box-shadow: inset 0 0 0 1px #2a3140, inset 0 -3px 0 var(--seam); transition: transform .15s, box-shadow .2s, filter .2s;
}
.tnode:hover { transform: translateY(-3px); background: linear-gradient(180deg, #222936, #161b24); }
.tnode .thumb { width: 72px; height: 72px; display: grid; place-items: center; }
.tnode .thumb img { width: 72px; height: 72px; object-fit: contain; filter: drop-shadow(0 0 6px color-mix(in srgb, var(--c) 45%, transparent)); }
.tnode .thumb b { font: 400 40px var(--stencil); color: #3a4252; }
.tnode .thumb .ph { width: 34px; height: 34px; border-radius: 50%; background: radial-gradient(circle, color-mix(in srgb, var(--c) 40%, transparent), transparent 70%); animation: blink 1s infinite; }
.tnode .tname { font-size: 15px; font-weight: 700; }
.tnode .tmeta { font-size: 12px; color: var(--dim); font-weight: 600; }
.tnode.locked, .tnode.secret { filter: grayscale(.85) brightness(.6); }
.tnode.blocked .tmeta { color: #b98a8c; }
.tnode.available { box-shadow: inset 0 0 0 2px var(--c), 0 0 0 0 var(--c); animation: nodePulse 1.8s ease-in-out infinite; }
.tnode.available .tmeta { color: var(--amber); }
.tnode.owned { box-shadow: inset 0 0 0 2px color-mix(in srgb, var(--c) 70%, transparent), inset 0 -3px 0 var(--c); }
.tnode.owned .tmeta { color: var(--c); }
.tnode.current { box-shadow: inset 0 0 0 3px var(--amber), inset 0 -4px 0 var(--amber); background: linear-gradient(180deg, #2a2516, #16140e); }
.tnode.current .tmeta { color: var(--amber); }
.tnode.route:not(.current) { outline: 2px dashed var(--amber); outline-offset: 3px; }
.tnode.sel { transform: scale(1.08); box-shadow: inset 0 0 0 3px #fff, 0 0 26px color-mix(in srgb, var(--c) 60%, transparent); z-index: 2; }
@keyframes nodePulse { 50% { filter: brightness(1.25); } }
.treeTools { position: absolute; right: 12px; top: 12px; display: flex; gap: 6px; }
.treeTools button { padding: 8px 12px; font-size: 16px; min-width: 40px; }
#treeLegend { position: absolute; left: 12px; bottom: 10px; display: flex; flex-wrap: wrap; gap: 6px 14px; font-weight: 600; font-size: 14px; pointer-events: none; }
#treeLegend span { display: flex; align-items: center; gap: 6px; }
#treeLegend i { width: 12px; height: 12px; background: var(--c); box-shadow: 0 0 8px var(--c); }
#treeTip { position: absolute; z-index: 5; max-width: 240px; padding: 8px 12px; background: rgba(14,17,22,.96); box-shadow: inset 0 0 0 1px var(--plate); font-size: 14px; pointer-events: none; }
#treeTip span { color: var(--amber); }
#treePanel { display: flex; flex-direction: column; min-height: 0; clip-path: var(--cut); }
#treePreview { height: 210px; flex: none; position: relative; background: radial-gradient(circle at 50% 60%, transparent 40%, rgba(10,12,16,.55)); box-shadow: inset 0 0 0 2px var(--plate), inset 0 0 0 6px rgba(20,23,28,.9); }
#treeInfo { flex: 1; padding: 14px 18px 18px; overflow-y: auto; display: flex; flex-direction: column; gap: 10px; background: var(--surface); }
.tHead { display: flex; justify-content: space-between; align-items: center; gap: 8px; flex-wrap: wrap; }
.tTitle { font-size: 30px; line-height: 1; color: var(--c, var(--text)); }
.chip { padding: 4px 10px; font-weight: 700; font-size: 13px; color: var(--ink); background: var(--c); }
#treeInfo h4 { margin: 4px 0 0; font-size: 15px; color: var(--dim); }
.loadout { margin: 0; display: grid; gap: 8px; }
.loadout dt { font-weight: 700; color: var(--text); }
.loadout dd { margin: 2px 0 0; color: var(--dim); font-size: 14px; }
.stats { display: grid; gap: 0; font-size: 14px; }
.srow { display: grid; grid-template-columns: 1fr auto 56px; gap: 8px; padding: 4px 0; border-bottom: 1px solid var(--seam); }
.srow b { color: var(--teal); text-align: right; }
.srow em { font-style: normal; font-weight: 700; text-align: right; }
.srow em.up { color: #6dff8a; } .srow em.down { color: #ff8a8d; }
.reqs { margin: 0; padding: 0; list-style: none; display: grid; gap: 4px; font-size: 14px; }
.reqs li { color: #ff9ea1; padding-left: 22px; position: relative; }
.reqs li::before { content: '✕'; position: absolute; left: 2px; font-weight: 700; }
.reqs li.ok { color: var(--teal); } .reqs li.ok::before { content: '✓'; }
.tAct { display: grid; gap: 8px; margin-top: 4px; }
.tAct .why { color: var(--dim); font-size: 14px; }
.shipCol { display: flex; flex-direction: column; gap: 10px; min-height: 0; }
.treeBtn { padding: 13px 16px; font-size: 16px; }
#slotTree.ready { box-shadow: inset 0 -3px 0 var(--amber); animation: nodePulse 1.6s infinite; }
#chargeRing { position: absolute; inset: -9px; border-radius: 50%; opacity: 0;
  background: conic-gradient(var(--amber) calc(var(--ch, 0) * 360deg), rgba(255,255,255,.08) 0); -webkit-mask: radial-gradient(circle, transparent 58%, #000 60%); mask: radial-gradient(circle, transparent 58%, #000 60%); }
#crosshair.charging #chargeRing { opacity: 1; }
@media (max-width: 900px) {
  .treeBody { grid-template-columns: 1fr; grid-template-rows: minmax(300px, 1fr) auto; }
  #treePanel { max-height: 46vh; }
  #treePreview { height: 140px; }
}
.toggle { display: flex; align-items: center; gap: 8px; font-size: 15px; cursor: pointer; }
.toggle input { accent-color: var(--amber); width: 18px; height: 18px; }
#wingList { display: grid; gap: 6px; }
.wing { display: flex; justify-content: space-between; align-items: center; gap: 10px; padding: 8px 10px; background: #191c21; box-shadow: var(--inset), inset 4px 0 0 var(--c); }
.wing div { display: grid; }
.wing button { font-size: 13px; padding: 7px 10px; }
.stationCol h3 { margin-top: 6px; }

</style>
</head>
<body>
<canvas id="game"></canvas>

<!-- In-game HUD -->
<div id="hud" class="hidden">
  <div id="vignette"></div>
  <div id="bars">
    <div class="bar"><label>Hull</label><div class="track"><div id="hullFill" class="fill hull"></div></div><span id="hullTxt"></span></div>
    <div class="bar"><label>Shield</label><div class="track"><div id="shieldFill" class="fill shield"></div></div><span id="shieldTxt"></span></div>
    <div class="bar"><label>Energy</label><div class="track"><div id="energyFill" class="fill energy"></div></div><span id="energyTxt"></span></div>
  </div>
  <div id="topCenter">
    <div id="waveTxt"></div>
    <div id="objTxt"></div>
    <div id="bossBar" class="hidden"><div id="bossName">ECLIPSE DREADNOUGHT</div><div class="track"><div id="bossFill" class="fill boss"></div></div><div id="bossPhase"></div></div>
  </div>
  <div id="resources">
    <div><span class="ico credit"></span><b id="creditsTxt">0</b></div>
    <div><span class="ico crystal"></span><b id="crystalTxt">0</b></div>
    <div><span class="ico ore"></span><b id="oreTxt">0</b></div>
    <div class="score">Score <b id="scoreTxt">0</b></div>
  </div>
  <div id="weapons">
    <div class="slot" id="slotPrimary"><kbd>LMB</kbd><span class="wname"></span><div class="cd"></div></div>
    <div class="slot" id="slotSecondary"><kbd>RMB</kbd><span class="wname"></span><div class="cd"></div></div>
    <div class="slot" id="slotDash"><kbd data-key="dash"></kbd><span class="wname">DASH</span><div class="cd"></div></div>
    <div class="slot" id="slotAbility"><kbd data-key="ability"></kbd><span class="wname">EMP</span><div class="cd"></div></div>
    <div class="slot hidden" id="slotDrones"><kbd data-key="drones"></kbd><span class="wname">Drones</span><div class="cd"></div></div>
    <div class="slot" id="slotTree"><kbd data-key="tree"></kbd><span class="wname">Evolve</span><div class="cd"></div></div>
  </div>
  <div id="xp"><span id="lvlTxt">LV 1</span><div class="track"><div id="xpFill" class="fill xpf"></div></div></div>
  <canvas id="minimap" width="200" height="200"></canvas>
  <div id="prompt" class="hidden"></div>
  <div id="banner"></div>
  <div id="toasts"></div>
  <div id="indicators"></div>
  <div id="floaters"></div>
  <div id="tutorial" class="hidden"><div id="tutStep"></div><div id="tutText"></div><button id="tutSkip">Skip tutorial</button></div>
  <div id="crosshair"><div id="chargeRing"></div><i></i><i></i><i></i><i></i><b></b><div id="hitmark"></div></div>
</div>

<!-- Boss title card -->
<div id="titleCard" class="hidden"><small>Warning: capital-class signature</small><h1 id="titleName"></h1><p id="titleSub"></p></div>

<!-- Screens -->
<div id="menu" class="screen">
  <div class="logo"><h1>VOIDBREAKERS</h1><p>The last frontier</p></div>
  <div class="bulkhead menuPanel">
    <div class="menuBtns">
      <button data-act="play" class="primary">Launch survival</button>
      <button data-act="hangar">Hangar</button>
      <button data-act="settings">Settings</button>
      <button data-act="controls">Controls</button>
    </div>
    <dl id="menuStats" class="readout"></dl>
  </div>
  <div class="hint">Mouse + keyboard on desktop, or on-screen touch controls on phones (landscape works best)</div>
</div>

<div id="hangar" class="screen hidden bay">
  <header class="band"><h2 id="hangarTitle">HANGAR</h2><div class="wallet"><span class="ico credit"></span><b class="w-credits"></b><span class="ico crystal"></span><b class="w-crystal"></b></div></header>
  <div class="hangarBody">
    <div class="shipCol"><button data-act="openTree" class="primary treeBtn">Open evolution tree</button><div id="shipList"></div></div>
    <div class="previewCol"><div id="shipInfo" class="plaque"></div></div>
    <div class="upgradeCol"><h3>Upgrades for <span id="upgShip"></span></h3><div id="upgrades"></div><div id="statCompare"></div></div>
  </div>
  <footer><button data-act="back">Back</button><button data-act="achievements">Achievements</button><button data-act="launch" class="primary">Launch survival</button></footer>
</div>

<div id="station" class="screen hidden bay">
  <header class="band"><h2>NOVA STATION</h2><div class="wallet"><span class="ico credit"></span><b class="w-credits"></b><span class="ico crystal"></span><b class="w-crystal"></b></div></header>
  <div class="hangarBody">
    <div class="stationCol">
      <h3>Docked</h3><div id="dockMsg"></div><button id="repairBtn"></button>
      <h3>Cargo</h3><div id="cargoInfo" class="dim"></div><button data-act="sellOre" id="sellBtn"></button>
      <label class="toggle"><input type="checkbox" id="autoSell" data-act="toggleAutoSell"> Sell ore automatically when I dock</label>
      <h3>Wingmen</h3><div id="wingList"></div><button data-act="hire" id="hireBtn"></button>
      <p class="dim">Wingmen fly with you for this run and are repaired free when you dock. Upgrades stay on your ship permanently.</p>
    </div>
    <div class="previewCol"><div id="stationShip" class="plaque"></div></div>
    <div class="upgradeCol"><h3>Upgrades</h3><div id="stUpgrades"></div><div id="stCompare"></div></div>
  </div>
  <footer><button data-act="undock" class="primary">Undock (E)</button></footer>
</div>

<div id="levelup" class="screen hidden overlay">
  <div class="bulkhead wide">
    <div class="band"><h2>LEVEL UP</h2></div>
    <p class="dim">Pick one boost for this run. Press 1, 2 or 3.</p>
    <div id="boostCards"></div>
  </div>
</div>

<div id="pause" class="screen hidden overlay">
  <div class="bulkhead">
    <div class="band"><h2>PAUSED</h2></div>
    <div class="menuBtns">
      <button data-act="resume" class="primary">Resume</button>
      <button data-act="settings">Settings</button>
      <button data-act="controls">Controls</button>
      <button data-act="quit" class="danger">Abandon run</button>
    </div>
  </div>
</div>

<div id="settings" class="screen hidden overlay">
  <div class="bulkhead wide">
    <div class="band"><h2>SETTINGS</h2></div>
    <div class="settingsGrid">
      <label for="setQuality">Graphics quality</label><select id="setQuality"><option value="low">Low</option><option value="medium">Medium</option><option value="high">High</option></select>
      <label for="setSens">Mouse sensitivity <span id="sensVal"></span></label><input id="setSens" type="range" min="0.2" max="3" step="0.1">
      <label for="setVol">Volume <span id="volVal"></span></label><input id="setVol" type="range" min="0" max="1" step="0.05">
      <label for="setShake">Screen shake <span id="shakeVal"></span></label><input id="setShake" type="range" min="0" max="1.5" step="0.1">
    </div>
    <h3>Key bindings <small class="dim">Click a key, then press the new one.</small></h3>
    <div id="keyBinds"></div>
    <div class="menuBtns row">
      <button data-act="resetKeys">Reset keys</button>
      <button data-act="resetTutorial">Replay tutorial</button>
      <button data-act="resetSave" class="danger">Erase progress</button>
      <button data-act="closeSettings" class="primary">Done</button>
    </div>
  </div>
</div>

<div id="controls" class="screen hidden overlay">
  <div class="bulkhead wide">
    <div class="band"><h2>CONTROLS</h2></div>
    <div id="controlsList"></div>
    <p class="dim">Click the game to capture the mouse. Esc or Tab pauses.</p>
    <div class="menuBtns row"><button data-act="closeControls" class="primary">Back</button></div>
  </div>
</div>

<div id="achievements" class="screen hidden overlay">
  <div class="bulkhead wide">
    <div class="band"><h2>ACHIEVEMENTS</h2></div>
    <div id="achList"></div>
    <div class="menuBtns row"><button data-act="closeAch" class="primary">Back</button></div>
  </div>
</div>

<div id="gameover" class="screen hidden overlay">
  <div class="bulkhead">
    <div class="band alert"><h2 id="goTitle">SHIP LOST</h2></div>
    <dl id="goStats" class="readout"></dl>
    <div class="menuBtns row">
      <button data-act="restart" class="primary">Fly again</button>
      <button data-act="hangar">Hangar</button>
      <button data-act="menu">Main menu</button>
    </div>
  </div>
</div>

<div id="victory" class="screen hidden overlay">
  <div class="bulkhead">
    <div class="band"><h2>SECTOR CLEARED</h2></div>
    <p>You survived wave 15. Keep flying for a higher score, or bank the run now.</p>
    <div class="menuBtns row"><button data-act="continue" class="primary">Keep flying</button><button data-act="endRun">End run</button></div>
  </div>
</div>

<div id="tree" class="screen hidden treeScreen">
  <header class="band"><h2>EVOLUTION TREE</h2>
    <div class="treeHead"><span id="treeMode"></span><div class="wallet"><span class="ico credit"></span><b class="w-credits"></b><span class="ico crystal"></span><b class="w-crystal"></b></div><button data-act="closeTree">Close (<span data-keyname="tree">T</span>)</button></div>
  </header>
  <div class="treeBody">
    <div id="treeView" class="treeView" tabindex="0" aria-label="Ship evolution tree. Drag to pan, scroll to zoom, arrow keys to move between ships.">
      <div id="treeWorld"><svg id="treeLinks" aria-hidden="true"></svg><div id="treeNodes"></div></div>
      <div class="treeTools"><button data-tz="in" aria-label="Zoom in">+</button><button data-tz="out" aria-label="Zoom out">−</button><button data-tz="fit">Fit</button></div>
      <div id="treeLegend"></div>
      <div id="treeTip" class="hidden"></div>
    </div>
    <aside id="treePanel"><div id="treePreview"></div><div id="treeInfo"></div></aside>
  </div>
</div>

<div id="loading" class="screen"><h2>STARTING ENGINES</h2><p class="dim" id="loadErr"></p></div>

<script type="module">
var ph="170";var mm=0,Iu=1,gm=2;var Gd=1,xm=2,gi=3,ni=0,nn=1,Dt=2,ti=0,Fs=1,Tt=2,Lu=3,zu=4,ym=5,Qi=100,vm=101,_m=102,Mm=103,bm=104,Sm=200,Em=201,wm=202,Tm=203,Wl=204,Gl=205,Am=206,Rm=207,Cm=208,Pm=209,Im=210,Lm=211,zm=212,Dm=213,Um=214,Xl=0,$l=1,ql=2,Hs=3,Yl=4,Zl=5,Jl=6,Kl=7,Xd=0,Nm=1,Fm=2,Ii=0,mh=1,gh=2,xh=3,cs=4,Om=5,yh=6,vh=7;var $d=300,Vs=301,Ws=302,jl=303,Ql=304,yo=306,ec=1e3,ns=1001,tc=1002,Cn=1003,km=1004;var ha=1005;var Qn=1006,ll=1007;var is=1008;var vi=1009,qd=1010,Yd=1011,Lr=1012,_h=1013,ss=1014,ei=1015,qn=1016,Mh=1017,bh=1018,Gs=1020,Zd=35902,Jd=1021,Kd=1022,Gn=1023,jd=1024,Qd=1025,Os=1026,Xs=1027,Sh=1028,Eh=1029,ef=1030,wh=1031;var Th=1033,Oa=33776,ka=33777,Ba=33778,Ha=33779,nc=35840,ic=35841,sc=35842,rc=35843,ac=36196,oc=37492,lc=37496,cc=37808,hc=37809,uc=37810,dc=37811,fc=37812,pc=37813,mc=37814,gc=37815,xc=37816,yc=37817,vc=37818,_c=37819,Mc=37820,bc=37821,Va=36492,Sc=36494,Ec=36495,tf=36283,wc=36284,Tc=36285,Ac=36286;var Wa=2300,Rc=2301,cl=2302,Du=2400,Uu=2401,Nu=2402;var Bm=3200,Hm=3201;var nf=0,Vm=1,Pi="",cn="srgb",js="srgb-linear",vo="linear",pt="srgb";var _s=7680;var Fu=519,Wm=512,Gm=513,Xm=514,sf=515,$m=516,qm=517,Ym=518,Zm=519,Ou=35044,Nn=35048;var ku="300 es",xi=2e3,Ga=2001,Li=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let s=this._listeners[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let i=this._listeners[e.type];if(i!==void 0){e.target=this;let s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},on=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var hl=Math.PI/180,Cc=180/Math.PI;function Qs(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(on[n&255]+on[n>>8&255]+on[n>>16&255]+on[n>>24&255]+"-"+on[e&255]+on[e>>8&255]+"-"+on[e>>16&15|64]+on[e>>24&255]+"-"+on[t&63|128]+on[t>>8&255]+"-"+on[t>>16&255]+on[t>>24&255]+on[i&255]+on[i>>8&255]+on[i>>16&255]+on[i>>24&255]).toLowerCase()}function tn(n,e,t){return Math.max(e,Math.min(t,n))}function Jm(n,e){return(n%e+e)%e}function ul(n,e,t){return(1-t)*n+t*e}function yr(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function _n(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var le=class n{constructor(e=0,t=0){n.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(tn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*i-a*s+e.x,this.y=r*s+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},qe=class n{constructor(e,t,i,s,r,a,o,l,c){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,l,c)}set(e,t,i,s,r,a,o,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=l,h[6]=i,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],h=i[4],d=i[7],f=i[2],u=i[5],m=i[8],y=s[0],g=s[3],p=s[6],E=s[1],x=s[4],v=s[7],P=s[2],_=s[5],L=s[8];return r[0]=a*y+o*E+l*P,r[3]=a*g+o*x+l*_,r[6]=a*p+o*v+l*L,r[1]=c*y+h*E+d*P,r[4]=c*g+h*x+d*_,r[7]=c*p+h*v+d*L,r[2]=f*y+u*E+m*P,r[5]=f*g+u*x+m*_,r[8]=f*p+u*v+m*L,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-i*r*h+i*o*l+s*r*c-s*a*l}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],d=h*a-o*c,f=o*l-h*r,u=c*r-a*l,m=t*d+i*f+s*u;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/m;return e[0]=d*y,e[1]=(s*c-h*i)*y,e[2]=(o*i-s*a)*y,e[3]=f*y,e[4]=(h*t-s*l)*y,e[5]=(s*r-o*t)*y,e[6]=u*y,e[7]=(i*l-c*t)*y,e[8]=(a*t-i*r)*y,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(dl.makeScale(e,t)),this}rotate(e){return this.premultiply(dl.makeRotation(-e)),this}translate(e,t){return this.premultiply(dl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},dl=new qe;function rf(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Xa(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Km(){let n=Xa("canvas");return n.style.display="block",n}var Bu={};function Tr(n){n in Bu||(Bu[n]=!0,console.warn(n))}function jm(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}function Qm(n){let e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function e0(n){let e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}var rt={enabled:!0,workingColorSpace:js,spaces:{},convert:function(n,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===pt&&(n.r=yi(n.r),n.g=yi(n.g),n.b=yi(n.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(n.applyMatrix3(this.spaces[e].toXYZ),n.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===pt&&(n.r=ks(n.r),n.g=ks(n.g),n.b=ks(n.b))),n},fromWorkingColorSpace:function(n,e){return this.convert(n,this.workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===Pi?vo:this.spaces[n].transfer},getLuminanceCoefficients:function(n,e=this.workingColorSpace){return n.fromArray(this.spaces[e].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,e,t){return n.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}};function yi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function ks(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var Hu=[.64,.33,.3,.6,.15,.06],Vu=[.2126,.7152,.0722],Wu=[.3127,.329],Gu=new qe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Xu=new qe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);rt.define({[js]:{primaries:Hu,whitePoint:Wu,transfer:vo,toXYZ:Gu,fromXYZ:Xu,luminanceCoefficients:Vu,workingColorSpaceConfig:{unpackColorSpace:cn},outputColorSpaceConfig:{drawingBufferColorSpace:cn}},[cn]:{primaries:Hu,whitePoint:Wu,transfer:pt,toXYZ:Gu,fromXYZ:Xu,luminanceCoefficients:Vu,outputColorSpaceConfig:{drawingBufferColorSpace:cn}}});var Ms,Pc=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ms===void 0&&(Ms=Xa("canvas")),Ms.width=e.width,Ms.height=e.height;let i=Ms.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Ms}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Xa("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=yi(r[a]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(yi(t[i]/255)*255):t[i]=yi(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},t0=0,$a=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:t0++}),this.uuid=Qs(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(fl(s[a].image)):r.push(fl(s[a]))}else r=fl(s);i.url=r}return t||(e.images[this.uuid]=i),i}};function fl(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Pc.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var n0=0,Pn=class n extends Li{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=ns,s=ns,r=Qn,a=is,o=Gn,l=vi,c=n.DEFAULT_ANISOTROPY,h=Pi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:n0++}),this.uuid=Qs(),this.name="",this.source=new $a(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new le(0,0),this.repeat=new le(1,1),this.center=new le(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new qe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==$d)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ec:e.x=e.x-Math.floor(e.x);break;case ns:e.x=e.x<0?0:1;break;case tc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ec:e.y=e.y-Math.floor(e.y);break;case ns:e.y=e.y<0?0:1;break;case tc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Pn.DEFAULT_IMAGE=null;Pn.DEFAULT_MAPPING=$d;Pn.DEFAULT_ANISOTROPY=1;var vt=class n{constructor(e=0,t=0,i=0,s=1){n.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*i+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r,l=e.elements,c=l[0],h=l[4],d=l[8],f=l[1],u=l[5],m=l[9],y=l[2],g=l[6],p=l[10];if(Math.abs(h-f)<.01&&Math.abs(d-y)<.01&&Math.abs(m-g)<.01){if(Math.abs(h+f)<.1&&Math.abs(d+y)<.1&&Math.abs(m+g)<.1&&Math.abs(c+u+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let x=(c+1)/2,v=(u+1)/2,P=(p+1)/2,_=(h+f)/4,L=(d+y)/4,z=(m+g)/4;return x>v&&x>P?x<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(x),s=_/i,r=L/i):v>P?v<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),i=_/s,r=z/s):P<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(P),i=L/r,s=z/r),this.set(i,s,r,t),this}let E=Math.sqrt((g-m)*(g-m)+(d-y)*(d-y)+(f-h)*(f-h));return Math.abs(E)<.001&&(E=1),this.x=(g-m)/E,this.y=(d-y)/E,this.z=(f-h)/E,this.w=Math.acos((c+u+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Ic=class extends Li{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new vt(0,0,e,t),this.scissorTest=!1,this.viewport=new vt(0,0,e,t);let s={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Qn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);let r=new Pn(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];let a=i.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,s=e.textures.length;i<s;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new $a(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},mn=class extends Ic{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},qa=class extends Pn{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Cn,this.minFilter=Cn,this.wrapR=ns,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Lc=class extends Pn{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Cn,this.minFilter=Cn,this.wrapR=ns,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Kt=class{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,a,o){let l=i[s+0],c=i[s+1],h=i[s+2],d=i[s+3],f=r[a+0],u=r[a+1],m=r[a+2],y=r[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d;return}if(o===1){e[t+0]=f,e[t+1]=u,e[t+2]=m,e[t+3]=y;return}if(d!==y||l!==f||c!==u||h!==m){let g=1-o,p=l*f+c*u+h*m+d*y,E=p>=0?1:-1,x=1-p*p;if(x>Number.EPSILON){let P=Math.sqrt(x),_=Math.atan2(P,p*E);g=Math.sin(g*_)/P,o=Math.sin(o*_)/P}let v=o*E;if(l=l*g+f*v,c=c*g+u*v,h=h*g+m*v,d=d*g+y*v,g===1-o){let P=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=P,c*=P,h*=P,d*=P}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,s,r,a){let o=i[s],l=i[s+1],c=i[s+2],h=i[s+3],d=r[a],f=r[a+1],u=r[a+2],m=r[a+3];return e[t]=o*m+h*d+l*u-c*f,e[t+1]=l*m+h*f+c*d-o*u,e[t+2]=c*m+h*u+o*f-l*d,e[t+3]=h*m-o*d-l*f-c*u,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(s/2),d=o(r/2),f=l(i/2),u=l(s/2),m=l(r/2);switch(a){case"XYZ":this._x=f*h*d+c*u*m,this._y=c*u*d-f*h*m,this._z=c*h*m+f*u*d,this._w=c*h*d-f*u*m;break;case"YXZ":this._x=f*h*d+c*u*m,this._y=c*u*d-f*h*m,this._z=c*h*m-f*u*d,this._w=c*h*d+f*u*m;break;case"ZXY":this._x=f*h*d-c*u*m,this._y=c*u*d+f*h*m,this._z=c*h*m+f*u*d,this._w=c*h*d-f*u*m;break;case"ZYX":this._x=f*h*d-c*u*m,this._y=c*u*d+f*h*m,this._z=c*h*m-f*u*d,this._w=c*h*d+f*u*m;break;case"YZX":this._x=f*h*d+c*u*m,this._y=c*u*d+f*h*m,this._z=c*h*m-f*u*d,this._w=c*h*d-f*u*m;break;case"XZY":this._x=f*h*d-c*u*m,this._y=c*u*d-f*h*m,this._z=c*h*m+f*u*d,this._w=c*h*d+f*u*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],d=t[10],f=i+o+d;if(f>0){let u=.5/Math.sqrt(f+1);this._w=.25/u,this._x=(h-l)*u,this._y=(r-c)*u,this._z=(a-s)*u}else if(i>o&&i>d){let u=2*Math.sqrt(1+i-o-d);this._w=(h-l)/u,this._x=.25*u,this._y=(s+a)/u,this._z=(r+c)/u}else if(o>d){let u=2*Math.sqrt(1+o-i-d);this._w=(r-c)/u,this._x=(s+a)/u,this._y=.25*u,this._z=(l+h)/u}else{let u=2*Math.sqrt(1+d-i-o);this._w=(a-s)/u,this._x=(r+c)/u,this._y=(l+h)/u,this._z=.25*u}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(tn(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-i*c,this._z=r*h+a*c+i*l-s*o,this._w=a*h-i*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let i=this._x,s=this._y,r=this._z,a=this._w,o=a*e._w+i*e._x+s*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=s,this._z=r,this;let l=1-o*o;if(l<=Number.EPSILON){let u=1-t;return this._w=u*a+t*this._w,this._x=u*i+t*this._x,this._y=u*s+t*this._y,this._z=u*r+t*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,o),d=Math.sin((1-t)*h)/c,f=Math.sin(t*h)/c;return this._w=a*d+this._w*f,this._x=i*d+this._x*f,this._y=s*d+this._y*f,this._z=r*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},U=class n{constructor(e=0,t=0,i=0){n.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion($u.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion($u.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,i=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*i),h=2*(o*t-r*s),d=2*(r*i-a*t);return this.x=t+l*c+a*d-o*h,this.y=i+l*h+o*c-r*d,this.z=s+l*d+r*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-i*l,this.z=i*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return pl.copy(this).projectOnVector(e),this.sub(pl)}reflect(e){return this.sub(pl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(tn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},pl=new U,$u=new Kt,Xn=class{constructor(e=new U(1/0,1/0,1/0),t=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Bn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Bn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=Bn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Bn):Bn.fromBufferAttribute(r,a),Bn.applyMatrix4(e.matrixWorld),this.expandByPoint(Bn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ua.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ua.copy(i.boundingBox)),ua.applyMatrix4(e.matrixWorld),this.union(ua)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Bn),Bn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(vr),da.subVectors(this.max,vr),bs.subVectors(e.a,vr),Ss.subVectors(e.b,vr),Es.subVectors(e.c,vr),Ei.subVectors(Ss,bs),wi.subVectors(Es,Ss),$i.subVectors(bs,Es);let t=[0,-Ei.z,Ei.y,0,-wi.z,wi.y,0,-$i.z,$i.y,Ei.z,0,-Ei.x,wi.z,0,-wi.x,$i.z,0,-$i.x,-Ei.y,Ei.x,0,-wi.y,wi.x,0,-$i.y,$i.x,0];return!ml(t,bs,Ss,Es,da)||(t=[1,0,0,0,1,0,0,0,1],!ml(t,bs,Ss,Es,da))?!1:(fa.crossVectors(Ei,wi),t=[fa.x,fa.y,fa.z],ml(t,bs,Ss,Es,da))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Bn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Bn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ui[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ui[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ui[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ui[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ui[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ui[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ui[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ui[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ui),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},ui=[new U,new U,new U,new U,new U,new U,new U,new U],Bn=new U,ua=new Xn,bs=new U,Ss=new U,Es=new U,Ei=new U,wi=new U,$i=new U,vr=new U,da=new U,fa=new U,qi=new U;function ml(n,e,t,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){qi.fromArray(n,r);let o=s.x*Math.abs(qi.x)+s.y*Math.abs(qi.y)+s.z*Math.abs(qi.z),l=e.dot(qi),c=t.dot(qi),h=i.dot(qi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var i0=new Xn,_r=new U,gl=new U,zi=class{constructor(e=new U,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):i0.setFromPoints(e).getCenter(i);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;_r.subVectors(e,this.center);let t=_r.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(_r,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(gl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(_r.copy(e.center).add(gl)),this.expandByPoint(_r.copy(e.center).sub(gl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},di=new U,xl=new U,pa=new U,Ti=new U,yl=new U,ma=new U,vl=new U,zr=class{constructor(e=new U,t=new U(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,di)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=di.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(di.copy(this.origin).addScaledVector(this.direction,t),di.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){xl.copy(e).add(t).multiplyScalar(.5),pa.copy(t).sub(e).normalize(),Ti.copy(this.origin).sub(xl);let r=e.distanceTo(t)*.5,a=-this.direction.dot(pa),o=Ti.dot(this.direction),l=-Ti.dot(pa),c=Ti.lengthSq(),h=Math.abs(1-a*a),d,f,u,m;if(h>0)if(d=a*l-o,f=a*o-l,m=r*h,d>=0)if(f>=-m)if(f<=m){let y=1/h;d*=y,f*=y,u=d*(d+a*f+2*o)+f*(a*d+f+2*l)+c}else f=r,d=Math.max(0,-(a*f+o)),u=-d*d+f*(f+2*l)+c;else f=-r,d=Math.max(0,-(a*f+o)),u=-d*d+f*(f+2*l)+c;else f<=-m?(d=Math.max(0,-(-a*r+o)),f=d>0?-r:Math.min(Math.max(-r,-l),r),u=-d*d+f*(f+2*l)+c):f<=m?(d=0,f=Math.min(Math.max(-r,-l),r),u=f*(f+2*l)+c):(d=Math.max(0,-(a*r+o)),f=d>0?r:Math.min(Math.max(-r,-l),r),u=-d*d+f*(f+2*l)+c);else f=a>0?-r:r,d=Math.max(0,-(a*f+o)),u=-d*d+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(xl).addScaledVector(pa,f),u}intersectSphere(e,t){di.subVectors(e.center,this.origin);let i=di.dot(this.direction),s=di.dot(di)-i*i,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,s=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,s=(e.min.x-f.x)*c),h>=0?(r=(e.min.y-f.y)*h,a=(e.max.y-f.y)*h):(r=(e.max.y-f.y)*h,a=(e.min.y-f.y)*h),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),d>=0?(o=(e.min.z-f.z)*d,l=(e.max.z-f.z)*d):(o=(e.max.z-f.z)*d,l=(e.min.z-f.z)*d),i>l||o>s)||((o>i||i!==i)&&(i=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,di)!==null}intersectTriangle(e,t,i,s,r){yl.subVectors(t,e),ma.subVectors(i,e),vl.crossVectors(yl,ma);let a=this.direction.dot(vl),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Ti.subVectors(this.origin,e);let l=o*this.direction.dot(ma.crossVectors(Ti,ma));if(l<0)return null;let c=o*this.direction.dot(yl.cross(Ti));if(c<0||l+c>a)return null;let h=-o*Ti.dot(vl);return h<0?null:this.at(h/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ge=class n{constructor(e,t,i,s,r,a,o,l,c,h,d,f,u,m,y,g){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,l,c,h,d,f,u,m,y,g)}set(e,t,i,s,r,a,o,l,c,h,d,f,u,m,y,g){let p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=d,p[14]=f,p[3]=u,p[7]=m,p[11]=y,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,i=e.elements,s=1/ws.setFromMatrixColumn(e,0).length(),r=1/ws.setFromMatrixColumn(e,1).length(),a=1/ws.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,s=e.y,r=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){let f=a*h,u=a*d,m=o*h,y=o*d;t[0]=l*h,t[4]=-l*d,t[8]=c,t[1]=u+m*c,t[5]=f-y*c,t[9]=-o*l,t[2]=y-f*c,t[6]=m+u*c,t[10]=a*l}else if(e.order==="YXZ"){let f=l*h,u=l*d,m=c*h,y=c*d;t[0]=f+y*o,t[4]=m*o-u,t[8]=a*c,t[1]=a*d,t[5]=a*h,t[9]=-o,t[2]=u*o-m,t[6]=y+f*o,t[10]=a*l}else if(e.order==="ZXY"){let f=l*h,u=l*d,m=c*h,y=c*d;t[0]=f-y*o,t[4]=-a*d,t[8]=m+u*o,t[1]=u+m*o,t[5]=a*h,t[9]=y-f*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let f=a*h,u=a*d,m=o*h,y=o*d;t[0]=l*h,t[4]=m*c-u,t[8]=f*c+y,t[1]=l*d,t[5]=y*c+f,t[9]=u*c-m,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let f=a*l,u=a*c,m=o*l,y=o*c;t[0]=l*h,t[4]=y-f*d,t[8]=m*d+u,t[1]=d,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=u*d+m,t[10]=f-y*d}else if(e.order==="XZY"){let f=a*l,u=a*c,m=o*l,y=o*c;t[0]=l*h,t[4]=-d,t[8]=c*h,t[1]=f*d+y,t[5]=a*h,t[9]=u*d-m,t[2]=m*d-u,t[6]=o*h,t[10]=y*d+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(s0,e,r0)}lookAt(e,t,i){let s=this.elements;return An.subVectors(e,t),An.lengthSq()===0&&(An.z=1),An.normalize(),Ai.crossVectors(i,An),Ai.lengthSq()===0&&(Math.abs(i.z)===1?An.x+=1e-4:An.z+=1e-4,An.normalize(),Ai.crossVectors(i,An)),Ai.normalize(),ga.crossVectors(An,Ai),s[0]=Ai.x,s[4]=ga.x,s[8]=An.x,s[1]=Ai.y,s[5]=ga.y,s[9]=An.y,s[2]=Ai.z,s[6]=ga.z,s[10]=An.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],h=i[1],d=i[5],f=i[9],u=i[13],m=i[2],y=i[6],g=i[10],p=i[14],E=i[3],x=i[7],v=i[11],P=i[15],_=s[0],L=s[4],z=s[8],T=s[12],b=s[1],O=s[5],V=s[9],I=s[13],M=s[2],A=s[6],w=s[10],F=s[14],H=s[3],k=s[7],Y=s[11],Z=s[15];return r[0]=a*_+o*b+l*M+c*H,r[4]=a*L+o*O+l*A+c*k,r[8]=a*z+o*V+l*w+c*Y,r[12]=a*T+o*I+l*F+c*Z,r[1]=h*_+d*b+f*M+u*H,r[5]=h*L+d*O+f*A+u*k,r[9]=h*z+d*V+f*w+u*Y,r[13]=h*T+d*I+f*F+u*Z,r[2]=m*_+y*b+g*M+p*H,r[6]=m*L+y*O+g*A+p*k,r[10]=m*z+y*V+g*w+p*Y,r[14]=m*T+y*I+g*F+p*Z,r[3]=E*_+x*b+v*M+P*H,r[7]=E*L+x*O+v*A+P*k,r[11]=E*z+x*V+v*w+P*Y,r[15]=E*T+x*I+v*F+P*Z,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],d=e[6],f=e[10],u=e[14],m=e[3],y=e[7],g=e[11],p=e[15];return m*(+r*l*d-s*c*d-r*o*f+i*c*f+s*o*u-i*l*u)+y*(+t*l*u-t*c*f+r*a*f-s*a*u+s*c*h-r*l*h)+g*(+t*c*d-t*o*u-r*a*d+i*a*u+r*o*h-i*c*h)+p*(-s*o*h-t*l*d+t*o*f+s*a*d-i*a*f+i*l*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],d=e[9],f=e[10],u=e[11],m=e[12],y=e[13],g=e[14],p=e[15],E=d*g*c-y*f*c+y*l*u-o*g*u-d*l*p+o*f*p,x=m*f*c-h*g*c-m*l*u+a*g*u+h*l*p-a*f*p,v=h*y*c-m*d*c+m*o*u-a*y*u-h*o*p+a*d*p,P=m*d*l-h*y*l-m*o*f+a*y*f+h*o*g-a*d*g,_=t*E+i*x+s*v+r*P;if(_===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let L=1/_;return e[0]=E*L,e[1]=(y*f*r-d*g*r-y*s*u+i*g*u+d*s*p-i*f*p)*L,e[2]=(o*g*r-y*l*r+y*s*c-i*g*c-o*s*p+i*l*p)*L,e[3]=(d*l*r-o*f*r-d*s*c+i*f*c+o*s*u-i*l*u)*L,e[4]=x*L,e[5]=(h*g*r-m*f*r+m*s*u-t*g*u-h*s*p+t*f*p)*L,e[6]=(m*l*r-a*g*r-m*s*c+t*g*c+a*s*p-t*l*p)*L,e[7]=(a*f*r-h*l*r+h*s*c-t*f*c-a*s*u+t*l*u)*L,e[8]=v*L,e[9]=(m*d*r-h*y*r-m*i*u+t*y*u+h*i*p-t*d*p)*L,e[10]=(a*y*r-m*o*r+m*i*c-t*y*c-a*i*p+t*o*p)*L,e[11]=(h*o*r-a*d*r-h*i*c+t*d*c+a*i*u-t*o*u)*L,e[12]=P*L,e[13]=(h*y*s-m*d*s+m*i*f-t*y*f-h*i*g+t*d*g)*L,e[14]=(m*o*s-a*y*s-m*i*l+t*y*l+a*i*g-t*o*g)*L,e[15]=(a*d*s-h*o*s+h*i*l-t*d*l-a*i*f+t*o*f)*L,this}scale(e){let t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),s=Math.sin(t),r=1-i,a=e.x,o=e.y,l=e.z,c=r*a,h=r*o;return this.set(c*a+i,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+i,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,a){return this.set(1,i,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){let s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,h=a+a,d=o+o,f=r*c,u=r*h,m=r*d,y=a*h,g=a*d,p=o*d,E=l*c,x=l*h,v=l*d,P=i.x,_=i.y,L=i.z;return s[0]=(1-(y+p))*P,s[1]=(u+v)*P,s[2]=(m-x)*P,s[3]=0,s[4]=(u-v)*_,s[5]=(1-(f+p))*_,s[6]=(g+E)*_,s[7]=0,s[8]=(m+x)*L,s[9]=(g-E)*L,s[10]=(1-(f+y))*L,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){let s=this.elements,r=ws.set(s[0],s[1],s[2]).length(),a=ws.set(s[4],s[5],s[6]).length(),o=ws.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Hn.copy(this);let c=1/r,h=1/a,d=1/o;return Hn.elements[0]*=c,Hn.elements[1]*=c,Hn.elements[2]*=c,Hn.elements[4]*=h,Hn.elements[5]*=h,Hn.elements[6]*=h,Hn.elements[8]*=d,Hn.elements[9]*=d,Hn.elements[10]*=d,t.setFromRotationMatrix(Hn),i.x=r,i.y=a,i.z=o,this}makePerspective(e,t,i,s,r,a,o=xi){let l=this.elements,c=2*r/(t-e),h=2*r/(i-s),d=(t+e)/(t-e),f=(i+s)/(i-s),u,m;if(o===xi)u=-(a+r)/(a-r),m=-2*a*r/(a-r);else if(o===Ga)u=-a/(a-r),m=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=u,l[14]=m,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,s,r,a,o=xi){let l=this.elements,c=1/(t-e),h=1/(i-s),d=1/(a-r),f=(t+e)*c,u=(i+s)*h,m,y;if(o===xi)m=(a+r)*d,y=-2*d;else if(o===Ga)m=r*d,y=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-u,l[2]=0,l[6]=0,l[10]=y,l[14]=-m,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},ws=new U,Hn=new Ge,s0=new U(0,0,0),r0=new U(1,1,1),Ai=new U,ga=new U,An=new U,qu=new Ge,Yu=new Kt,hn=class n{constructor(e=0,t=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],d=s[2],f=s[6],u=s[10];switch(t){case"XYZ":this._y=Math.asin(tn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,u),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-tn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,u),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(tn(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,u),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-tn(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,u),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(tn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,u));break;case"XZY":this._z=Math.asin(-tn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,u),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return qu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(qu,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Yu.setFromEuler(this),this.setFromQuaternion(Yu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};hn.DEFAULT_ORDER="XYZ";var Dr=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},a0=0,Zu=new U,Ts=new Kt,fi=new Ge,xa=new U,Mr=new U,o0=new U,l0=new Kt,Ju=new U(1,0,0),Ku=new U(0,1,0),ju=new U(0,0,1),Qu={type:"added"},c0={type:"removed"},As={type:"childadded",child:null},_l={type:"childremoved",child:null},un=class n extends Li{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:a0++}),this.uuid=Qs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new U,t=new hn,i=new Kt,s=new U(1,1,1);function r(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ge},normalMatrix:{value:new qe}}),this.matrix=new Ge,this.matrixWorld=new Ge,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Dr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ts.setFromAxisAngle(e,t),this.quaternion.multiply(Ts),this}rotateOnWorldAxis(e,t){return Ts.setFromAxisAngle(e,t),this.quaternion.premultiply(Ts),this}rotateX(e){return this.rotateOnAxis(Ju,e)}rotateY(e){return this.rotateOnAxis(Ku,e)}rotateZ(e){return this.rotateOnAxis(ju,e)}translateOnAxis(e,t){return Zu.copy(e).applyQuaternion(this.quaternion),this.position.add(Zu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ju,e)}translateY(e){return this.translateOnAxis(Ku,e)}translateZ(e){return this.translateOnAxis(ju,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(fi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?xa.copy(e):xa.set(e,t,i);let s=this.parent;this.updateWorldMatrix(!0,!1),Mr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?fi.lookAt(Mr,xa,this.up):fi.lookAt(xa,Mr,this.up),this.quaternion.setFromRotationMatrix(fi),s&&(fi.extractRotation(s.matrixWorld),Ts.setFromRotationMatrix(fi),this.quaternion.premultiply(Ts.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Qu),As.child=e,this.dispatchEvent(As),As.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(c0),_l.child=e,this.dispatchEvent(_l),_l.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),fi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),fi.multiply(e.parent.matrixWorld)),e.applyMatrix4(fi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Qu),As.child=e,this.dispatchEvent(As),As.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){let a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Mr,e,o0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Mr,l0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){let i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];r(e.shapes,d)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),d=a(e.shapes),f=a(e.skeletons),u=a(e.animations),m=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),d.length>0&&(i.shapes=d),f.length>0&&(i.skeletons=f),u.length>0&&(i.animations=u),m.length>0&&(i.nodes=m)}return i.object=s,i;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let s=e.children[i];this.add(s.clone())}return this}};un.DEFAULT_UP=new U(0,1,0);un.DEFAULT_MATRIX_AUTO_UPDATE=!0;un.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Vn=new U,pi=new U,Ml=new U,mi=new U,Rs=new U,Cs=new U,ed=new U,bl=new U,Sl=new U,El=new U,wl=new vt,Tl=new vt,Al=new vt,es=class n{constructor(e=new U,t=new U,i=new U){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),Vn.subVectors(e,t),s.cross(Vn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){Vn.subVectors(s,t),pi.subVectors(i,t),Ml.subVectors(e,t);let a=Vn.dot(Vn),o=Vn.dot(pi),l=Vn.dot(Ml),c=pi.dot(pi),h=pi.dot(Ml),d=a*c-o*o;if(d===0)return r.set(0,0,0),null;let f=1/d,u=(c*l-o*h)*f,m=(a*h-o*l)*f;return r.set(1-u-m,m,u)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,mi)===null?!1:mi.x>=0&&mi.y>=0&&mi.x+mi.y<=1}static getInterpolation(e,t,i,s,r,a,o,l){return this.getBarycoord(e,t,i,s,mi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,mi.x),l.addScaledVector(a,mi.y),l.addScaledVector(o,mi.z),l)}static getInterpolatedAttribute(e,t,i,s,r,a){return wl.setScalar(0),Tl.setScalar(0),Al.setScalar(0),wl.fromBufferAttribute(e,t),Tl.fromBufferAttribute(e,i),Al.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(wl,r.x),a.addScaledVector(Tl,r.y),a.addScaledVector(Al,r.z),a}static isFrontFacing(e,t,i,s){return Vn.subVectors(i,t),pi.subVectors(e,t),Vn.cross(pi).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Vn.subVectors(this.c,this.b),pi.subVectors(this.a,this.b),Vn.cross(pi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,s=this.b,r=this.c,a,o;Rs.subVectors(s,i),Cs.subVectors(r,i),bl.subVectors(e,i);let l=Rs.dot(bl),c=Cs.dot(bl);if(l<=0&&c<=0)return t.copy(i);Sl.subVectors(e,s);let h=Rs.dot(Sl),d=Cs.dot(Sl);if(h>=0&&d<=h)return t.copy(s);let f=l*d-h*c;if(f<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(i).addScaledVector(Rs,a);El.subVectors(e,r);let u=Rs.dot(El),m=Cs.dot(El);if(m>=0&&u<=m)return t.copy(r);let y=u*c-l*m;if(y<=0&&c>=0&&m<=0)return o=c/(c-m),t.copy(i).addScaledVector(Cs,o);let g=h*m-u*d;if(g<=0&&d-h>=0&&u-m>=0)return ed.subVectors(r,s),o=(d-h)/(d-h+(u-m)),t.copy(s).addScaledVector(ed,o);let p=1/(g+y+f);return a=y*p,o=f*p,t.copy(i).addScaledVector(Rs,a).addScaledVector(Cs,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},af={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ri={h:0,s:0,l:0},ya={h:0,s:0,l:0};function Rl(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var ge=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=cn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,rt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,s=rt.workingColorSpace){return this.r=e,this.g=t,this.b=i,rt.toWorkingColorSpace(this,s),this}setHSL(e,t,i,s=rt.workingColorSpace){if(e=Jm(e,1),t=tn(t,0,1),i=tn(i,0,1),t===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+t):i+t-i*t,a=2*i-r;this.r=Rl(a,r,e+1/3),this.g=Rl(a,r,e),this.b=Rl(a,r,e-1/3)}return rt.toWorkingColorSpace(this,s),this}setStyle(e,t=cn){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=cn){let i=af[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=yi(e.r),this.g=yi(e.g),this.b=yi(e.b),this}copyLinearToSRGB(e){return this.r=ks(e.r),this.g=ks(e.g),this.b=ks(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=cn){return rt.fromWorkingColorSpace(ln.copy(this),e),Math.round(tn(ln.r*255,0,255))*65536+Math.round(tn(ln.g*255,0,255))*256+Math.round(tn(ln.b*255,0,255))}getHexString(e=cn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=rt.workingColorSpace){rt.fromWorkingColorSpace(ln.copy(this),t);let i=ln.r,s=ln.g,r=ln.b,a=Math.max(i,s,r),o=Math.min(i,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let d=a-o;switch(c=h<=.5?d/(a+o):d/(2-a-o),a){case i:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-i)/d+2;break;case r:l=(i-s)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=rt.workingColorSpace){return rt.fromWorkingColorSpace(ln.copy(this),t),e.r=ln.r,e.g=ln.g,e.b=ln.b,e}getStyle(e=cn){rt.fromWorkingColorSpace(ln.copy(this),e);let t=ln.r,i=ln.g,s=ln.b;return e!==cn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(Ri),this.setHSL(Ri.h+e,Ri.s+t,Ri.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Ri),e.getHSL(ya);let i=ul(Ri.h,ya.h,t),s=ul(Ri.s,ya.s,t),r=ul(Ri.l,ya.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},ln=new ge;ge.NAMES=af;var h0=0,Di=class extends Li{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:h0++}),this.uuid=Qs(),this.name="",this.blending=Fs,this.side=ni,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Wl,this.blendDst=Gl,this.blendEquation=Qi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ge(0,0,0),this.blendAlpha=0,this.depthFunc=Hs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Fu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=_s,this.stencilZFail=_s,this.stencilZPass=_s,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Fs&&(i.blending=this.blending),this.side!==ni&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Wl&&(i.blendSrc=this.blendSrc),this.blendDst!==Gl&&(i.blendDst=this.blendDst),this.blendEquation!==Qi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Hs&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Fu&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==_s&&(i.stencilFail=this.stencilFail),this.stencilZFail!==_s&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==_s&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},Ye=class extends Di{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new ge(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new hn,this.combine=Xd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Gt=new U,va=new le,Vt=class{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Ou,this.updateRanges=[],this.gpuType=ei,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)va.fromBufferAttribute(this,t),va.applyMatrix3(e),this.setXY(t,va.x,va.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Gt.fromBufferAttribute(this,t),Gt.applyMatrix3(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Gt.fromBufferAttribute(this,t),Gt.applyMatrix4(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Gt.fromBufferAttribute(this,t),Gt.applyNormalMatrix(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Gt.fromBufferAttribute(this,t),Gt.transformDirection(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=yr(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=_n(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=yr(t,this.array)),t}setX(e,t){return this.normalized&&(t=_n(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=yr(t,this.array)),t}setY(e,t){return this.normalized&&(t=_n(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=yr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=_n(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=yr(t,this.array)),t}setW(e,t){return this.normalized&&(t=_n(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=_n(t,this.array),i=_n(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=_n(t,this.array),i=_n(i,this.array),s=_n(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=_n(t,this.array),i=_n(i,this.array),s=_n(s,this.array),r=_n(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ou&&(e.usage=this.usage),e}};var Ya=class extends Vt{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var Za=class extends Vt{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var Qe=class extends Vt{constructor(e,t,i){super(new Float32Array(e),t,i)}},u0=0,Dn=new Ge,Cl=new un,Ps=new U,Rn=new Xn,br=new Xn,Zt=new U,kt=class n extends Li{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:u0++}),this.uuid=Qs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(rf(e)?Za:Ya)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new qe().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Dn.makeRotationFromQuaternion(e),this.applyMatrix4(Dn),this}rotateX(e){return Dn.makeRotationX(e),this.applyMatrix4(Dn),this}rotateY(e){return Dn.makeRotationY(e),this.applyMatrix4(Dn),this}rotateZ(e){return Dn.makeRotationZ(e),this.applyMatrix4(Dn),this}translate(e,t,i){return Dn.makeTranslation(e,t,i),this.applyMatrix4(Dn),this}scale(e,t,i){return Dn.makeScale(e,t,i),this.applyMatrix4(Dn),this}lookAt(e){return Cl.lookAt(e),Cl.updateMatrix(),this.applyMatrix4(Cl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ps).negate(),this.translate(Ps.x,Ps.y,Ps.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Qe(i,3))}else{for(let i=0,s=t.count;i<s;i++){let r=e[i];t.setXYZ(i,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Xn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){let r=t[i];Rn.setFromBufferAttribute(r),this.morphTargetsRelative?(Zt.addVectors(this.boundingBox.min,Rn.min),this.boundingBox.expandByPoint(Zt),Zt.addVectors(this.boundingBox.max,Rn.max),this.boundingBox.expandByPoint(Zt)):(this.boundingBox.expandByPoint(Rn.min),this.boundingBox.expandByPoint(Rn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new zi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(e){let i=this.boundingSphere.center;if(Rn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];br.setFromBufferAttribute(o),this.morphTargetsRelative?(Zt.addVectors(Rn.min,br.min),Rn.expandByPoint(Zt),Zt.addVectors(Rn.max,br.max),Rn.expandByPoint(Zt)):(Rn.expandByPoint(br.min),Rn.expandByPoint(br.max))}Rn.getCenter(i);let s=0;for(let r=0,a=e.count;r<a;r++)Zt.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Zt));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Zt.fromBufferAttribute(o,c),l&&(Ps.fromBufferAttribute(e,c),Zt.add(Ps)),s=Math.max(s,i.distanceToSquared(Zt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Vt(new Float32Array(4*i.count),4));let a=this.getAttribute("tangent"),o=[],l=[];for(let z=0;z<i.count;z++)o[z]=new U,l[z]=new U;let c=new U,h=new U,d=new U,f=new le,u=new le,m=new le,y=new U,g=new U;function p(z,T,b){c.fromBufferAttribute(i,z),h.fromBufferAttribute(i,T),d.fromBufferAttribute(i,b),f.fromBufferAttribute(r,z),u.fromBufferAttribute(r,T),m.fromBufferAttribute(r,b),h.sub(c),d.sub(c),u.sub(f),m.sub(f);let O=1/(u.x*m.y-m.x*u.y);isFinite(O)&&(y.copy(h).multiplyScalar(m.y).addScaledVector(d,-u.y).multiplyScalar(O),g.copy(d).multiplyScalar(u.x).addScaledVector(h,-m.x).multiplyScalar(O),o[z].add(y),o[T].add(y),o[b].add(y),l[z].add(g),l[T].add(g),l[b].add(g))}let E=this.groups;E.length===0&&(E=[{start:0,count:e.count}]);for(let z=0,T=E.length;z<T;++z){let b=E[z],O=b.start,V=b.count;for(let I=O,M=O+V;I<M;I+=3)p(e.getX(I+0),e.getX(I+1),e.getX(I+2))}let x=new U,v=new U,P=new U,_=new U;function L(z){P.fromBufferAttribute(s,z),_.copy(P);let T=o[z];x.copy(T),x.sub(P.multiplyScalar(P.dot(T))).normalize(),v.crossVectors(_,T);let O=v.dot(l[z])<0?-1:1;a.setXYZW(z,x.x,x.y,x.z,O)}for(let z=0,T=E.length;z<T;++z){let b=E[z],O=b.start,V=b.count;for(let I=O,M=O+V;I<M;I+=3)L(e.getX(I+0)),L(e.getX(I+1)),L(e.getX(I+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Vt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,u=i.count;f<u;f++)i.setXYZ(f,0,0,0);let s=new U,r=new U,a=new U,o=new U,l=new U,c=new U,h=new U,d=new U;if(e)for(let f=0,u=e.count;f<u;f+=3){let m=e.getX(f+0),y=e.getX(f+1),g=e.getX(f+2);s.fromBufferAttribute(t,m),r.fromBufferAttribute(t,y),a.fromBufferAttribute(t,g),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),o.fromBufferAttribute(i,m),l.fromBufferAttribute(i,y),c.fromBufferAttribute(i,g),o.add(h),l.add(h),c.add(h),i.setXYZ(m,o.x,o.y,o.z),i.setXYZ(y,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let f=0,u=t.count;f<u;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),i.setXYZ(f+0,h.x,h.y,h.z),i.setXYZ(f+1,h.x,h.y,h.z),i.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Zt.fromBufferAttribute(e,t),Zt.normalize(),e.setXYZ(t,Zt.x,Zt.y,Zt.z)}toNonIndexed(){function e(o,l){let c=o.array,h=o.itemSize,d=o.normalized,f=new c.constructor(l.length*h),u=0,m=0;for(let y=0,g=l.length;y<g;y++){o.isInterleavedBufferAttribute?u=l[y]*o.data.stride+o.offset:u=l[y]*h;for(let p=0;p<h;p++)f[m++]=c[u++]}return new Vt(f,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=e(l,i);t.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,d=c.length;h<d;h++){let f=c[h],u=e(f,i);l.push(u)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,f=c.length;d<f;d++){let u=c[d];h.push(u.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone(t));let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],d=r[c];for(let f=0,u=d.length;f<u;f++)h.push(d[f].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,h=a.length;c<h;c++){let d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},td=new Ge,Yi=new zr,_a=new zi,nd=new U,Ma=new U,ba=new U,Sa=new U,Pl=new U,Ea=new U,id=new U,wa=new U,Pe=class extends un{constructor(e=new kt,t=new Ye){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){Ea.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],d=r[l];h!==0&&(Pl.fromBufferAttribute(d,e),a?Ea.addScaledVector(Pl,h):Ea.addScaledVector(Pl.sub(t),h))}t.add(Ea)}return t}raycast(e,t){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),_a.copy(i.boundingSphere),_a.applyMatrix4(r),Yi.copy(e.ray).recast(e.near),!(_a.containsPoint(Yi.origin)===!1&&(Yi.intersectSphere(_a,nd)===null||Yi.origin.distanceToSquared(nd)>(e.far-e.near)**2))&&(td.copy(r).invert(),Yi.copy(e.ray).applyMatrix4(td),!(i.boundingBox!==null&&Yi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Yi)))}_computeIntersections(e,t,i){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,f=r.groups,u=r.drawRange;if(o!==null)if(Array.isArray(a))for(let m=0,y=f.length;m<y;m++){let g=f[m],p=a[g.materialIndex],E=Math.max(g.start,u.start),x=Math.min(o.count,Math.min(g.start+g.count,u.start+u.count));for(let v=E,P=x;v<P;v+=3){let _=o.getX(v),L=o.getX(v+1),z=o.getX(v+2);s=Ta(this,p,e,i,c,h,d,_,L,z),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let m=Math.max(0,u.start),y=Math.min(o.count,u.start+u.count);for(let g=m,p=y;g<p;g+=3){let E=o.getX(g),x=o.getX(g+1),v=o.getX(g+2);s=Ta(this,a,e,i,c,h,d,E,x,v),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let m=0,y=f.length;m<y;m++){let g=f[m],p=a[g.materialIndex],E=Math.max(g.start,u.start),x=Math.min(l.count,Math.min(g.start+g.count,u.start+u.count));for(let v=E,P=x;v<P;v+=3){let _=v,L=v+1,z=v+2;s=Ta(this,p,e,i,c,h,d,_,L,z),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let m=Math.max(0,u.start),y=Math.min(l.count,u.start+u.count);for(let g=m,p=y;g<p;g+=3){let E=g,x=g+1,v=g+2;s=Ta(this,a,e,i,c,h,d,E,x,v),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}}};function d0(n,e,t,i,s,r,a,o){let l;if(e.side===nn?l=i.intersectTriangle(a,r,s,!0,o):l=i.intersectTriangle(s,r,a,e.side===ni,o),l===null)return null;wa.copy(o),wa.applyMatrix4(n.matrixWorld);let c=t.ray.origin.distanceTo(wa);return c<t.near||c>t.far?null:{distance:c,point:wa.clone(),object:n}}function Ta(n,e,t,i,s,r,a,o,l,c){n.getVertexPosition(o,Ma),n.getVertexPosition(l,ba),n.getVertexPosition(c,Sa);let h=d0(n,e,t,i,Ma,ba,Sa,id);if(h){let d=new U;es.getBarycoord(id,Ma,ba,Sa,d),s&&(h.uv=es.getInterpolatedAttribute(s,o,l,c,d,new le)),r&&(h.uv1=es.getInterpolatedAttribute(r,o,l,c,d,new le)),a&&(h.normal=es.getInterpolatedAttribute(a,o,l,c,d,new U),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let f={a:o,b:l,c,normal:new U,materialIndex:0};es.getNormal(Ma,ba,Sa,f.normal),h.face=f,h.barycoord=d}return h}var At=class n extends kt{constructor(e=1,t=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],d=[],f=0,u=0;m("z","y","x",-1,-1,i,t,e,a,r,0),m("z","y","x",1,-1,i,t,-e,a,r,1),m("x","z","y",1,1,e,i,t,s,a,2),m("x","z","y",1,-1,e,i,-t,s,a,3),m("x","y","z",1,-1,e,t,i,s,r,4),m("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new Qe(c,3)),this.setAttribute("normal",new Qe(h,3)),this.setAttribute("uv",new Qe(d,2));function m(y,g,p,E,x,v,P,_,L,z,T){let b=v/L,O=P/z,V=v/2,I=P/2,M=_/2,A=L+1,w=z+1,F=0,H=0,k=new U;for(let Y=0;Y<w;Y++){let Z=Y*O-I;for(let N=0;N<A;N++){let ie=N*b-V;k[y]=ie*E,k[g]=Z*x,k[p]=M,c.push(k.x,k.y,k.z),k[y]=0,k[g]=0,k[p]=_>0?1:-1,h.push(k.x,k.y,k.z),d.push(N/L),d.push(1-Y/z),F+=1}}for(let Y=0;Y<z;Y++)for(let Z=0;Z<L;Z++){let N=f+Z+A*Y,ie=f+Z+A*(Y+1),W=f+(Z+1)+A*(Y+1),K=f+(Z+1)+A*Y;l.push(N,ie,K),l.push(ie,W,K),H+=6}o.addGroup(u,H,T),u+=H,f+=F}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function $s(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function pn(n){let e={};for(let t=0;t<n.length;t++){let i=$s(n[t]);for(let s in i)e[s]=i[s]}return e}function f0(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function of(n){let e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:rt.workingColorSpace}var Oi={clone:$s,merge:pn},p0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,m0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,mt=class extends Di{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=p0,this.fragmentShader=m0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=$s(e.uniforms),this.uniformsGroups=f0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}},Ja=class extends un{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ge,this.projectionMatrix=new Ge,this.projectionMatrixInverse=new Ge,this.coordinateSystem=xi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Ci=new U,sd=new le,rd=new le,Jt=class extends Ja{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Cc*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(hl*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Cc*2*Math.atan(Math.tan(hl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Ci.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ci.x,Ci.y).multiplyScalar(-e/Ci.z),Ci.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ci.x,Ci.y).multiplyScalar(-e/Ci.z)}getViewSize(e,t){return this.getViewBounds(e,sd,rd),t.subVectors(rd,sd)}setViewOffset(e,t,i,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(hl*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*i/c,s*=a.width/l,i*=a.height/c}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Is=-90,Ls=1,zc=class extends un{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Jt(Is,Ls,e,t);s.layers=this.layers,this.add(s);let r=new Jt(Is,Ls,e,t);r.layers=this.layers,this.add(r);let a=new Jt(Is,Ls,e,t);a.layers=this.layers,this.add(a);let o=new Jt(Is,Ls,e,t);o.layers=this.layers,this.add(o);let l=new Jt(Is,Ls,e,t);l.layers=this.layers,this.add(l);let c=new Jt(Is,Ls,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,s,r,a,o,l]=t;for(let c of t)this.remove(c);if(e===xi)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ga)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),u=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;let y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,a),e.setRenderTarget(i,2,s),e.render(t,o),e.setRenderTarget(i,3,s),e.render(t,l),e.setRenderTarget(i,4,s),e.render(t,c),i.texture.generateMipmaps=y,e.setRenderTarget(i,5,s),e.render(t,h),e.setRenderTarget(d,f,u),e.xr.enabled=m,i.texture.needsPMREMUpdate=!0}},Ka=class extends Pn{constructor(e,t,i,s,r,a,o,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:Vs,super(e,t,i,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Dc=class extends mn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new Ka(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Qn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new At(5,5,5),r=new mt({name:"CubemapFromEquirect",uniforms:$s(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:nn,blending:ti});r.uniforms.tEquirect.value=t;let a=new Pe(s,r),o=t.minFilter;return t.minFilter===is&&(t.minFilter=Qn),new zc(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,i,s){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,s);e.setRenderTarget(r)}},Il=new U,g0=new U,x0=new qe,Wn=class{constructor(e=new U(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let s=Il.subVectors(i,t).cross(g0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let i=e.delta(Il),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||x0.getNormalMatrix(e),s=this.coplanarPoint(Il).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Zi=new zi,Aa=new U,Ur=class{constructor(e=new Wn,t=new Wn,i=new Wn,s=new Wn,r=new Wn,a=new Wn){this.planes=[e,t,i,s,r,a]}set(e,t,i,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=xi){let i=this.planes,s=e.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],h=s[5],d=s[6],f=s[7],u=s[8],m=s[9],y=s[10],g=s[11],p=s[12],E=s[13],x=s[14],v=s[15];if(i[0].setComponents(l-r,f-c,g-u,v-p).normalize(),i[1].setComponents(l+r,f+c,g+u,v+p).normalize(),i[2].setComponents(l+a,f+h,g+m,v+E).normalize(),i[3].setComponents(l-a,f-h,g-m,v-E).normalize(),i[4].setComponents(l-o,f-d,g-y,v-x).normalize(),t===xi)i[5].setComponents(l+o,f+d,g+y,v+x).normalize();else if(t===Ga)i[5].setComponents(o,d,y,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Zi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Zi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Zi)}intersectsSprite(e){return Zi.center.set(0,0,0),Zi.radius=.7071067811865476,Zi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Zi)}intersectsSphere(e){let t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let s=t[i];if(Aa.x=s.normal.x>0?e.max.x:e.min.x,Aa.y=s.normal.y>0?e.max.y:e.min.y,Aa.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Aa)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function lf(){let n=null,e=!1,t=null,i=null;function s(r,a){t(r,a),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function y0(n){let e=new WeakMap;function t(o,l){let c=o.array,h=o.usage,d=c.byteLength,f=n.createBuffer();n.bindBuffer(l,f),n.bufferData(l,c,h),o.onUploadCallback();let u;if(c instanceof Float32Array)u=n.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?u=n.HALF_FLOAT:u=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)u=n.SHORT;else if(c instanceof Uint32Array)u=n.UNSIGNED_INT;else if(c instanceof Int32Array)u=n.INT;else if(c instanceof Int8Array)u=n.BYTE;else if(c instanceof Uint8Array)u=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)u=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:u,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function i(o,l,c){let h=l.array,d=l.updateRanges;if(n.bindBuffer(c,o),d.length===0)n.bufferSubData(c,0,h);else{d.sort((u,m)=>u.start-m.start);let f=0;for(let u=1;u<d.length;u++){let m=d[f],y=d[u];y.start<=m.start+m.count+1?m.count=Math.max(m.count,y.start+y.count-m.start):(++f,d[f]=y)}d.length=f+1;for(let u=0,m=d.length;u<m;u++){let y=d[u];n.bufferSubData(c,y.start*h.BYTES_PER_ELEMENT,h,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(n.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var gn=class n extends kt{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(i),l=Math.floor(s),c=o+1,h=l+1,d=e/o,f=t/l,u=[],m=[],y=[],g=[];for(let p=0;p<h;p++){let E=p*f-a;for(let x=0;x<c;x++){let v=x*d-r;m.push(v,-E,0),y.push(0,0,1),g.push(x/o),g.push(1-p/l)}}for(let p=0;p<l;p++)for(let E=0;E<o;E++){let x=E+c*p,v=E+c*(p+1),P=E+1+c*(p+1),_=E+1+c*p;u.push(x,v,_),u.push(v,P,_)}this.setIndex(u),this.setAttribute("position",new Qe(m,3)),this.setAttribute("normal",new Qe(y,3)),this.setAttribute("uv",new Qe(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}},v0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,_0=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,M0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,b0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,S0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,E0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,w0=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,T0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,A0=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,R0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,C0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,P0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,I0=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,L0=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,z0=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,D0=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,U0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,N0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,F0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,O0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,k0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,B0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,H0=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,V0=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,W0=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,G0=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,X0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,$0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,q0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Y0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Z0="gl_FragColor = linearToOutputTexel( gl_FragColor );",J0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,K0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,j0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Q0=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,eg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,tg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,ng=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ig=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,sg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,rg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ag=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,og=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,cg=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,hg=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,ug=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,dg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,fg=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,pg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,mg=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,gg=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,xg=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,yg=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,vg=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,_g=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Mg=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,bg=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Sg=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Eg=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,wg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Tg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ag=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Rg=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Cg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Pg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ig=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Lg=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,zg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Dg=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Ug=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ng=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Fg=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Og=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,kg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Bg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Hg=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Vg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Wg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Gg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Xg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,$g=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,qg=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Yg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Zg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Jg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Kg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,jg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Qg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ex=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,tx=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,nx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,ix=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,sx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,rx=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,ax=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ox=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,lx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,cx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,hx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ux=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,dx=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,fx=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,px=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,mx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,gx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,xx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,yx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,vx=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_x=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Mx=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Sx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ex=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,wx=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Tx=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Ax=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Rx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Cx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Px=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Ix=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Lx=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,zx=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Dx=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ux=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Nx=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Fx=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ox=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,kx=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Bx=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Hx=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Vx=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Wx=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Gx=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Xx=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$x=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,qx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Yx=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Zx=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Jx=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Kx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Je={alphahash_fragment:v0,alphahash_pars_fragment:_0,alphamap_fragment:M0,alphamap_pars_fragment:b0,alphatest_fragment:S0,alphatest_pars_fragment:E0,aomap_fragment:w0,aomap_pars_fragment:T0,batching_pars_vertex:A0,batching_vertex:R0,begin_vertex:C0,beginnormal_vertex:P0,bsdfs:I0,iridescence_fragment:L0,bumpmap_pars_fragment:z0,clipping_planes_fragment:D0,clipping_planes_pars_fragment:U0,clipping_planes_pars_vertex:N0,clipping_planes_vertex:F0,color_fragment:O0,color_pars_fragment:k0,color_pars_vertex:B0,color_vertex:H0,common:V0,cube_uv_reflection_fragment:W0,defaultnormal_vertex:G0,displacementmap_pars_vertex:X0,displacementmap_vertex:$0,emissivemap_fragment:q0,emissivemap_pars_fragment:Y0,colorspace_fragment:Z0,colorspace_pars_fragment:J0,envmap_fragment:K0,envmap_common_pars_fragment:j0,envmap_pars_fragment:Q0,envmap_pars_vertex:eg,envmap_physical_pars_fragment:ug,envmap_vertex:tg,fog_vertex:ng,fog_pars_vertex:ig,fog_fragment:sg,fog_pars_fragment:rg,gradientmap_pars_fragment:ag,lightmap_pars_fragment:og,lights_lambert_fragment:lg,lights_lambert_pars_fragment:cg,lights_pars_begin:hg,lights_toon_fragment:dg,lights_toon_pars_fragment:fg,lights_phong_fragment:pg,lights_phong_pars_fragment:mg,lights_physical_fragment:gg,lights_physical_pars_fragment:xg,lights_fragment_begin:yg,lights_fragment_maps:vg,lights_fragment_end:_g,logdepthbuf_fragment:Mg,logdepthbuf_pars_fragment:bg,logdepthbuf_pars_vertex:Sg,logdepthbuf_vertex:Eg,map_fragment:wg,map_pars_fragment:Tg,map_particle_fragment:Ag,map_particle_pars_fragment:Rg,metalnessmap_fragment:Cg,metalnessmap_pars_fragment:Pg,morphinstance_vertex:Ig,morphcolor_vertex:Lg,morphnormal_vertex:zg,morphtarget_pars_vertex:Dg,morphtarget_vertex:Ug,normal_fragment_begin:Ng,normal_fragment_maps:Fg,normal_pars_fragment:Og,normal_pars_vertex:kg,normal_vertex:Bg,normalmap_pars_fragment:Hg,clearcoat_normal_fragment_begin:Vg,clearcoat_normal_fragment_maps:Wg,clearcoat_pars_fragment:Gg,iridescence_pars_fragment:Xg,opaque_fragment:$g,packing:qg,premultiplied_alpha_fragment:Yg,project_vertex:Zg,dithering_fragment:Jg,dithering_pars_fragment:Kg,roughnessmap_fragment:jg,roughnessmap_pars_fragment:Qg,shadowmap_pars_fragment:ex,shadowmap_pars_vertex:tx,shadowmap_vertex:nx,shadowmask_pars_fragment:ix,skinbase_vertex:sx,skinning_pars_vertex:rx,skinning_vertex:ax,skinnormal_vertex:ox,specularmap_fragment:lx,specularmap_pars_fragment:cx,tonemapping_fragment:hx,tonemapping_pars_fragment:ux,transmission_fragment:dx,transmission_pars_fragment:fx,uv_pars_fragment:px,uv_pars_vertex:mx,uv_vertex:gx,worldpos_vertex:xx,background_vert:yx,background_frag:vx,backgroundCube_vert:_x,backgroundCube_frag:Mx,cube_vert:bx,cube_frag:Sx,depth_vert:Ex,depth_frag:wx,distanceRGBA_vert:Tx,distanceRGBA_frag:Ax,equirect_vert:Rx,equirect_frag:Cx,linedashed_vert:Px,linedashed_frag:Ix,meshbasic_vert:Lx,meshbasic_frag:zx,meshlambert_vert:Dx,meshlambert_frag:Ux,meshmatcap_vert:Nx,meshmatcap_frag:Fx,meshnormal_vert:Ox,meshnormal_frag:kx,meshphong_vert:Bx,meshphong_frag:Hx,meshphysical_vert:Vx,meshphysical_frag:Wx,meshtoon_vert:Gx,meshtoon_frag:Xx,points_vert:$x,points_frag:qx,shadow_vert:Yx,shadow_frag:Zx,sprite_vert:Jx,sprite_frag:Kx},ye={common:{diffuse:{value:new ge(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new qe},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new qe}},envmap:{envMap:{value:null},envMapRotation:{value:new qe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new qe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new qe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new qe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new qe},normalScale:{value:new le(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new qe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new qe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new qe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new qe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ge(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ge(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0},uvTransform:{value:new qe}},sprite:{diffuse:{value:new ge(16777215)},opacity:{value:1},center:{value:new le(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new qe},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0}}},jn={basic:{uniforms:pn([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.fog]),vertexShader:Je.meshbasic_vert,fragmentShader:Je.meshbasic_frag},lambert:{uniforms:pn([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new ge(0)}}]),vertexShader:Je.meshlambert_vert,fragmentShader:Je.meshlambert_frag},phong:{uniforms:pn([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new ge(0)},specular:{value:new ge(1118481)},shininess:{value:30}}]),vertexShader:Je.meshphong_vert,fragmentShader:Je.meshphong_frag},standard:{uniforms:pn([ye.common,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.roughnessmap,ye.metalnessmap,ye.fog,ye.lights,{emissive:{value:new ge(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Je.meshphysical_vert,fragmentShader:Je.meshphysical_frag},toon:{uniforms:pn([ye.common,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.gradientmap,ye.fog,ye.lights,{emissive:{value:new ge(0)}}]),vertexShader:Je.meshtoon_vert,fragmentShader:Je.meshtoon_frag},matcap:{uniforms:pn([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,{matcap:{value:null}}]),vertexShader:Je.meshmatcap_vert,fragmentShader:Je.meshmatcap_frag},points:{uniforms:pn([ye.points,ye.fog]),vertexShader:Je.points_vert,fragmentShader:Je.points_frag},dashed:{uniforms:pn([ye.common,ye.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Je.linedashed_vert,fragmentShader:Je.linedashed_frag},depth:{uniforms:pn([ye.common,ye.displacementmap]),vertexShader:Je.depth_vert,fragmentShader:Je.depth_frag},normal:{uniforms:pn([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,{opacity:{value:1}}]),vertexShader:Je.meshnormal_vert,fragmentShader:Je.meshnormal_frag},sprite:{uniforms:pn([ye.sprite,ye.fog]),vertexShader:Je.sprite_vert,fragmentShader:Je.sprite_frag},background:{uniforms:{uvTransform:{value:new qe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Je.background_vert,fragmentShader:Je.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new qe}},vertexShader:Je.backgroundCube_vert,fragmentShader:Je.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Je.cube_vert,fragmentShader:Je.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Je.equirect_vert,fragmentShader:Je.equirect_frag},distanceRGBA:{uniforms:pn([ye.common,ye.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Je.distanceRGBA_vert,fragmentShader:Je.distanceRGBA_frag},shadow:{uniforms:pn([ye.lights,ye.fog,{color:{value:new ge(0)},opacity:{value:1}}]),vertexShader:Je.shadow_vert,fragmentShader:Je.shadow_frag}};jn.physical={uniforms:pn([jn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new qe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new qe},clearcoatNormalScale:{value:new le(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new qe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new qe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new qe},sheen:{value:0},sheenColor:{value:new ge(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new qe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new qe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new qe},transmissionSamplerSize:{value:new le},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new qe},attenuationDistance:{value:0},attenuationColor:{value:new ge(0)},specularColor:{value:new ge(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new qe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new qe},anisotropyVector:{value:new le},anisotropyMap:{value:null},anisotropyMapTransform:{value:new qe}}]),vertexShader:Je.meshphysical_vert,fragmentShader:Je.meshphysical_frag};var Ra={r:0,b:0,g:0},Ji=new hn,jx=new Ge;function Qx(n,e,t,i,s,r,a){let o=new ge(0),l=r===!0?0:1,c,h,d=null,f=0,u=null;function m(E){let x=E.isScene===!0?E.background:null;return x&&x.isTexture&&(x=(E.backgroundBlurriness>0?t:e).get(x)),x}function y(E){let x=!1,v=m(E);v===null?p(o,l):v&&v.isColor&&(p(v,1),x=!0);let P=n.xr.getEnvironmentBlendMode();P==="additive"?i.buffers.color.setClear(0,0,0,1,a):P==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||x)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function g(E,x){let v=m(x);v&&(v.isCubeTexture||v.mapping===yo)?(h===void 0&&(h=new Pe(new At(1,1,1),new mt({name:"BackgroundCubeMaterial",uniforms:$s(jn.backgroundCube.uniforms),vertexShader:jn.backgroundCube.vertexShader,fragmentShader:jn.backgroundCube.fragmentShader,side:nn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(P,_,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Ji.copy(x.backgroundRotation),Ji.x*=-1,Ji.y*=-1,Ji.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Ji.y*=-1,Ji.z*=-1),h.material.uniforms.envMap.value=v,h.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(jx.makeRotationFromEuler(Ji)),h.material.toneMapped=rt.getTransfer(v.colorSpace)!==pt,(d!==v||f!==v.version||u!==n.toneMapping)&&(h.material.needsUpdate=!0,d=v,f=v.version,u=n.toneMapping),h.layers.enableAll(),E.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new Pe(new gn(2,2),new mt({name:"BackgroundMaterial",uniforms:$s(jn.background.uniforms),vertexShader:jn.background.vertexShader,fragmentShader:jn.background.fragmentShader,side:ni,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=rt.getTransfer(v.colorSpace)!==pt,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(d!==v||f!==v.version||u!==n.toneMapping)&&(c.material.needsUpdate=!0,d=v,f=v.version,u=n.toneMapping),c.layers.enableAll(),E.unshift(c,c.geometry,c.material,0,0,null))}function p(E,x){E.getRGB(Ra,of(n)),i.buffers.color.setClear(Ra.r,Ra.g,Ra.b,x,a)}return{getClearColor:function(){return o},setClearColor:function(E,x=1){o.set(E),l=x,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(E){l=E,p(o,l)},render:y,addToRenderList:g}}function ey(n,e){let t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=f(null),r=s,a=!1;function o(b,O,V,I,M){let A=!1,w=d(I,V,O);r!==w&&(r=w,c(r.object)),A=u(b,I,V,M),A&&m(b,I,V,M),M!==null&&e.update(M,n.ELEMENT_ARRAY_BUFFER),(A||a)&&(a=!1,v(b,O,V,I),M!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(M).buffer))}function l(){return n.createVertexArray()}function c(b){return n.bindVertexArray(b)}function h(b){return n.deleteVertexArray(b)}function d(b,O,V){let I=V.wireframe===!0,M=i[b.id];M===void 0&&(M={},i[b.id]=M);let A=M[O.id];A===void 0&&(A={},M[O.id]=A);let w=A[I];return w===void 0&&(w=f(l()),A[I]=w),w}function f(b){let O=[],V=[],I=[];for(let M=0;M<t;M++)O[M]=0,V[M]=0,I[M]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:V,attributeDivisors:I,object:b,attributes:{},index:null}}function u(b,O,V,I){let M=r.attributes,A=O.attributes,w=0,F=V.getAttributes();for(let H in F)if(F[H].location>=0){let Y=M[H],Z=A[H];if(Z===void 0&&(H==="instanceMatrix"&&b.instanceMatrix&&(Z=b.instanceMatrix),H==="instanceColor"&&b.instanceColor&&(Z=b.instanceColor)),Y===void 0||Y.attribute!==Z||Z&&Y.data!==Z.data)return!0;w++}return r.attributesNum!==w||r.index!==I}function m(b,O,V,I){let M={},A=O.attributes,w=0,F=V.getAttributes();for(let H in F)if(F[H].location>=0){let Y=A[H];Y===void 0&&(H==="instanceMatrix"&&b.instanceMatrix&&(Y=b.instanceMatrix),H==="instanceColor"&&b.instanceColor&&(Y=b.instanceColor));let Z={};Z.attribute=Y,Y&&Y.data&&(Z.data=Y.data),M[H]=Z,w++}r.attributes=M,r.attributesNum=w,r.index=I}function y(){let b=r.newAttributes;for(let O=0,V=b.length;O<V;O++)b[O]=0}function g(b){p(b,0)}function p(b,O){let V=r.newAttributes,I=r.enabledAttributes,M=r.attributeDivisors;V[b]=1,I[b]===0&&(n.enableVertexAttribArray(b),I[b]=1),M[b]!==O&&(n.vertexAttribDivisor(b,O),M[b]=O)}function E(){let b=r.newAttributes,O=r.enabledAttributes;for(let V=0,I=O.length;V<I;V++)O[V]!==b[V]&&(n.disableVertexAttribArray(V),O[V]=0)}function x(b,O,V,I,M,A,w){w===!0?n.vertexAttribIPointer(b,O,V,M,A):n.vertexAttribPointer(b,O,V,I,M,A)}function v(b,O,V,I){y();let M=I.attributes,A=V.getAttributes(),w=O.defaultAttributeValues;for(let F in A){let H=A[F];if(H.location>=0){let k=M[F];if(k===void 0&&(F==="instanceMatrix"&&b.instanceMatrix&&(k=b.instanceMatrix),F==="instanceColor"&&b.instanceColor&&(k=b.instanceColor)),k!==void 0){let Y=k.normalized,Z=k.itemSize,N=e.get(k);if(N===void 0)continue;let ie=N.buffer,W=N.type,K=N.bytesPerElement,ae=W===n.INT||W===n.UNSIGNED_INT||k.gpuType===_h;if(k.isInterleavedBufferAttribute){let ne=k.data,ue=ne.stride,xe=k.offset;if(ne.isInstancedInterleavedBuffer){for(let Ee=0;Ee<H.locationSize;Ee++)p(H.location+Ee,ne.meshPerAttribute);b.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let Ee=0;Ee<H.locationSize;Ee++)g(H.location+Ee);n.bindBuffer(n.ARRAY_BUFFER,ie);for(let Ee=0;Ee<H.locationSize;Ee++)x(H.location+Ee,Z/H.locationSize,W,Y,ue*K,(xe+Z/H.locationSize*Ee)*K,ae)}else{if(k.isInstancedBufferAttribute){for(let ne=0;ne<H.locationSize;ne++)p(H.location+ne,k.meshPerAttribute);b.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=k.meshPerAttribute*k.count)}else for(let ne=0;ne<H.locationSize;ne++)g(H.location+ne);n.bindBuffer(n.ARRAY_BUFFER,ie);for(let ne=0;ne<H.locationSize;ne++)x(H.location+ne,Z/H.locationSize,W,Y,Z*K,Z/H.locationSize*ne*K,ae)}}else if(w!==void 0){let Y=w[F];if(Y!==void 0)switch(Y.length){case 2:n.vertexAttrib2fv(H.location,Y);break;case 3:n.vertexAttrib3fv(H.location,Y);break;case 4:n.vertexAttrib4fv(H.location,Y);break;default:n.vertexAttrib1fv(H.location,Y)}}}}E()}function P(){z();for(let b in i){let O=i[b];for(let V in O){let I=O[V];for(let M in I)h(I[M].object),delete I[M];delete O[V]}delete i[b]}}function _(b){if(i[b.id]===void 0)return;let O=i[b.id];for(let V in O){let I=O[V];for(let M in I)h(I[M].object),delete I[M];delete O[V]}delete i[b.id]}function L(b){for(let O in i){let V=i[O];if(V[b.id]===void 0)continue;let I=V[b.id];for(let M in I)h(I[M].object),delete I[M];delete V[b.id]}}function z(){T(),a=!0,r!==s&&(r=s,c(r.object))}function T(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:z,resetDefaultState:T,dispose:P,releaseStatesOfGeometry:_,releaseStatesOfProgram:L,initAttributes:y,enableAttribute:g,disableUnusedAttributes:E}}function ty(n,e,t){let i;function s(c){i=c}function r(c,h){n.drawArrays(i,c,h),t.update(h,i,1)}function a(c,h,d){d!==0&&(n.drawArraysInstanced(i,c,h,d),t.update(h,i,d))}function o(c,h,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,h,0,d);let u=0;for(let m=0;m<d;m++)u+=h[m];t.update(u,i,1)}function l(c,h,d,f){if(d===0)return;let u=e.get("WEBGL_multi_draw");if(u===null)for(let m=0;m<c.length;m++)a(c[m],h[m],f[m]);else{u.multiDrawArraysInstancedWEBGL(i,c,0,h,0,f,0,d);let m=0;for(let y=0;y<d;y++)m+=h[y]*f[y];t.update(m,i,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function ny(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let L=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(L){return!(L!==Gn&&i.convert(L)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(L){let z=L===qn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(L!==vi&&i.convert(L)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&L!==ei&&!z)}function l(L){if(L==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";L="mediump"}return L==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let d=t.logarithmicDepthBuffer===!0,f=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),u=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),m=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),E=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),x=n.getParameter(n.MAX_VARYING_VECTORS),v=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),P=m>0,_=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reverseDepthBuffer:f,maxTextures:u,maxVertexTextures:m,maxTextureSize:y,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:E,maxVaryings:x,maxFragmentUniforms:v,vertexTextures:P,maxSamples:_}}function iy(n){let e=this,t=null,i=0,s=!1,r=!1,a=new Wn,o=new qe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){let u=d.length!==0||f||i!==0||s;return s=f,i=d.length,u},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,f){t=h(d,f,0)},this.setState=function(d,f,u){let m=d.clippingPlanes,y=d.clipIntersection,g=d.clipShadows,p=n.get(d);if(!s||m===null||m.length===0||r&&!g)r?h(null):c();else{let E=r?0:i,x=E*4,v=p.clippingState||null;l.value=v,v=h(m,f,x,u);for(let P=0;P!==x;++P)v[P]=t[P];p.clippingState=v,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=E}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(d,f,u,m){let y=d!==null?d.length:0,g=null;if(y!==0){if(g=l.value,m!==!0||g===null){let p=u+y*4,E=f.matrixWorldInverse;o.getNormalMatrix(E),(g===null||g.length<p)&&(g=new Float32Array(p));for(let x=0,v=u;x!==y;++x,v+=4)a.copy(d[x]).applyMatrix4(E,o),a.normal.toArray(g,v),g[v+3]=a.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,g}}function sy(n){let e=new WeakMap;function t(a,o){return o===jl?a.mapping=Vs:o===Ql&&(a.mapping=Ws),a}function i(a){if(a&&a.isTexture){let o=a.mapping;if(o===jl||o===Ql)if(e.has(a)){let l=e.get(a).texture;return t(l,a.mapping)}else{let l=a.image;if(l&&l.height>0){let c=new Dc(l.height);return c.fromEquirectangularTexture(n,a),e.set(a,c),a.addEventListener("dispose",s),t(c.texture,a.mapping)}else return null}}return a}function s(a){let o=a.target;o.removeEventListener("dispose",s);let l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}var Ui=class extends Ja{constructor(e=-1,t=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-e,a=i+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Us=4,ad=[.125,.215,.35,.446,.526,.582],ts=20,Ll=new Ui,od=new ge,zl=null,Dl=0,Ul=0,Nl=!1,ji=(1+Math.sqrt(5))/2,zs=1/ji,ld=[new U(-ji,zs,0),new U(ji,zs,0),new U(-zs,0,ji),new U(zs,0,ji),new U(0,ji,-zs),new U(0,ji,zs),new U(-1,1,-1),new U(1,1,-1),new U(-1,1,1),new U(1,1,1)],qs=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100){zl=this._renderer.getRenderTarget(),Dl=this._renderer.getActiveCubeFace(),Ul=this._renderer.getActiveMipmapLevel(),Nl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,i,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ud(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=hd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(zl,Dl,Ul),this._renderer.xr.enabled=Nl,e.scissorTest=!1,Ca(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Vs||e.mapping===Ws?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),zl=this._renderer.getRenderTarget(),Dl=this._renderer.getActiveCubeFace(),Ul=this._renderer.getActiveMipmapLevel(),Nl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Qn,minFilter:Qn,generateMipmaps:!1,type:qn,format:Gn,colorSpace:js,depthBuffer:!1},s=cd(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=cd(e,t,i);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=ry(r)),this._blurMaterial=ay(r,e,t)}return s}_compileMaterial(e){let t=new Pe(this._lodPlanes[0],e);this._renderer.compile(t,Ll)}_sceneToCubeUV(e,t,i,s){let o=new Jt(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,f=h.toneMapping;h.getClearColor(od),h.toneMapping=Ii,h.autoClear=!1;let u=new Ye({name:"PMREM.Background",side:nn,depthWrite:!1,depthTest:!1}),m=new Pe(new At,u),y=!1,g=e.background;g?g.isColor&&(u.color.copy(g),e.background=null,y=!0):(u.color.copy(od),y=!0);for(let p=0;p<6;p++){let E=p%3;E===0?(o.up.set(0,l[p],0),o.lookAt(c[p],0,0)):E===1?(o.up.set(0,0,l[p]),o.lookAt(0,c[p],0)):(o.up.set(0,l[p],0),o.lookAt(0,0,c[p]));let x=this._cubeSize;Ca(s,E*x,p>2?x:0,x,x),h.setRenderTarget(s),y&&h.render(m,o),h.render(e,o)}m.geometry.dispose(),m.material.dispose(),h.toneMapping=f,h.autoClear=d,e.background=g}_textureToCubeUV(e,t){let i=this._renderer,s=e.mapping===Vs||e.mapping===Ws;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=ud()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=hd());let r=s?this._cubemapMaterial:this._equirectMaterial,a=new Pe(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;let l=this._cubeSize;Ca(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,Ll)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=ld[(s-r-1)%ld.length];this._blur(e,r-1,r,a,o)}t.autoClear=i}_blur(e,t,i,s,r){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,s,"latitudinal",r),this._halfBlur(a,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,d=new Pe(this._lodPlanes[s],c),f=c.uniforms,u=this._sizeLods[i]-1,m=isFinite(r)?Math.PI/(2*u):2*Math.PI/(2*ts-1),y=r/m,g=isFinite(r)?1+Math.floor(h*y):ts;g>ts&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${ts}`);let p=[],E=0;for(let L=0;L<ts;++L){let z=L/y,T=Math.exp(-z*z/2);p.push(T),L===0?E+=T:L<g&&(E+=2*T)}for(let L=0;L<p.length;L++)p[L]=p[L]/E;f.envMap.value=e.texture,f.samples.value=g,f.weights.value=p,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);let{_lodMax:x}=this;f.dTheta.value=m,f.mipInt.value=x-i;let v=this._sizeLods[s],P=3*v*(s>x-Us?s-x+Us:0),_=4*(this._cubeSize-v);Ca(t,P,_,3*v,2*v),l.setRenderTarget(t),l.render(d,Ll)}};function ry(n){let e=[],t=[],i=[],s=n,r=n-Us+1+ad.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);t.push(o);let l=1/o;a>n-Us?l=ad[a-n+Us-1]:a===0&&(l=0),i.push(l);let c=1/(o-2),h=-c,d=1+c,f=[h,h,d,h,d,d,h,h,d,d,h,d],u=6,m=6,y=3,g=2,p=1,E=new Float32Array(y*m*u),x=new Float32Array(g*m*u),v=new Float32Array(p*m*u);for(let _=0;_<u;_++){let L=_%3*2/3-1,z=_>2?0:-1,T=[L,z,0,L+2/3,z,0,L+2/3,z+1,0,L,z,0,L+2/3,z+1,0,L,z+1,0];E.set(T,y*m*_),x.set(f,g*m*_);let b=[_,_,_,_,_,_];v.set(b,p*m*_)}let P=new kt;P.setAttribute("position",new Vt(E,y)),P.setAttribute("uv",new Vt(x,g)),P.setAttribute("faceIndex",new Vt(v,p)),e.push(P),s>Us&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function cd(n,e,t){let i=new mn(n,e,t);return i.texture.mapping=yo,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ca(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function ay(n,e,t){let i=new Float32Array(ts),s=new U(0,1,0);return new mt({name:"SphericalGaussianBlur",defines:{n:ts,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Ah(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ti,depthTest:!1,depthWrite:!1})}function hd(){return new mt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ah(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ti,depthTest:!1,depthWrite:!1})}function ud(){return new mt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ah(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ti,depthTest:!1,depthWrite:!1})}function Ah(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function oy(n){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){let l=o.mapping,c=l===jl||l===Ql,h=l===Vs||l===Ws;if(c||h){let d=e.get(o),f=d!==void 0?d.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return t===null&&(t=new qs(n)),d=c?t.fromEquirectangular(o,d):t.fromCubemap(o,d),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),d.texture;if(d!==void 0)return d.texture;{let u=o.image;return c&&u&&u.height>0||h&&u&&s(u)?(t===null&&(t=new qs(n)),d=c?t.fromEquirectangular(o):t.fromCubemap(o),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),o.addEventListener("dispose",r),d.texture):null}}}return o}function s(o){let l=0,c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){let l=o.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function ly(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let s=t(i);return s===null&&Tr("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function cy(n,e,t,i){let s={},r=new WeakMap;function a(d){let f=d.target;f.index!==null&&e.remove(f.index);for(let m in f.attributes)e.remove(f.attributes[m]);for(let m in f.morphAttributes){let y=f.morphAttributes[m];for(let g=0,p=y.length;g<p;g++)e.remove(y[g])}f.removeEventListener("dispose",a),delete s[f.id];let u=r.get(f);u&&(e.remove(u),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(d,f){return s[f.id]===!0||(f.addEventListener("dispose",a),s[f.id]=!0,t.memory.geometries++),f}function l(d){let f=d.attributes;for(let m in f)e.update(f[m],n.ARRAY_BUFFER);let u=d.morphAttributes;for(let m in u){let y=u[m];for(let g=0,p=y.length;g<p;g++)e.update(y[g],n.ARRAY_BUFFER)}}function c(d){let f=[],u=d.index,m=d.attributes.position,y=0;if(u!==null){let E=u.array;y=u.version;for(let x=0,v=E.length;x<v;x+=3){let P=E[x+0],_=E[x+1],L=E[x+2];f.push(P,_,_,L,L,P)}}else if(m!==void 0){let E=m.array;y=m.version;for(let x=0,v=E.length/3-1;x<v;x+=3){let P=x+0,_=x+1,L=x+2;f.push(P,_,_,L,L,P)}}else return;let g=new(rf(f)?Za:Ya)(f,1);g.version=y;let p=r.get(d);p&&e.remove(p),r.set(d,g)}function h(d){let f=r.get(d);if(f){let u=d.index;u!==null&&f.version<u.version&&c(d)}else c(d);return r.get(d)}return{get:o,update:l,getWireframeAttribute:h}}function hy(n,e,t){let i;function s(f){i=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function l(f,u){n.drawElements(i,u,r,f*a),t.update(u,i,1)}function c(f,u,m){m!==0&&(n.drawElementsInstanced(i,u,r,f*a,m),t.update(u,i,m))}function h(f,u,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,u,0,r,f,0,m);let g=0;for(let p=0;p<m;p++)g+=u[p];t.update(g,i,1)}function d(f,u,m,y){if(m===0)return;let g=e.get("WEBGL_multi_draw");if(g===null)for(let p=0;p<f.length;p++)c(f[p]/a,u[p],y[p]);else{g.multiDrawElementsInstancedWEBGL(i,u,0,r,f,0,y,0,m);let p=0;for(let E=0;E<m;E++)p+=u[E]*y[E];t.update(p,i,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function uy(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(r/3);break;case n.LINES:t.lines+=o*(r/2);break;case n.LINE_STRIP:t.lines+=o*(r-1);break;case n.LINE_LOOP:t.lines+=o*r;break;case n.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function dy(n,e,t){let i=new WeakMap,s=new vt;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0,f=i.get(o);if(f===void 0||f.count!==d){let T=function(){L.dispose(),i.delete(o),o.removeEventListener("dispose",T)};f!==void 0&&f.texture.dispose();let u=o.morphAttributes.position!==void 0,m=o.morphAttributes.normal!==void 0,y=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],E=o.morphAttributes.color||[],x=0;u===!0&&(x=1),m===!0&&(x=2),y===!0&&(x=3);let v=o.attributes.position.count*x,P=1;v>e.maxTextureSize&&(P=Math.ceil(v/e.maxTextureSize),v=e.maxTextureSize);let _=new Float32Array(v*P*4*d),L=new qa(_,v,P,d);L.type=ei,L.needsUpdate=!0;let z=x*4;for(let b=0;b<d;b++){let O=g[b],V=p[b],I=E[b],M=v*P*4*b;for(let A=0;A<O.count;A++){let w=A*z;u===!0&&(s.fromBufferAttribute(O,A),_[M+w+0]=s.x,_[M+w+1]=s.y,_[M+w+2]=s.z,_[M+w+3]=0),m===!0&&(s.fromBufferAttribute(V,A),_[M+w+4]=s.x,_[M+w+5]=s.y,_[M+w+6]=s.z,_[M+w+7]=0),y===!0&&(s.fromBufferAttribute(I,A),_[M+w+8]=s.x,_[M+w+9]=s.y,_[M+w+10]=s.z,_[M+w+11]=I.itemSize===4?s.w:1)}}f={count:d,texture:L,size:new le(v,P)},i.set(o,f),o.addEventListener("dispose",T)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let u=0;for(let y=0;y<c.length;y++)u+=c[y];let m=o.morphTargetsRelative?1:1-u;l.getUniforms().setValue(n,"morphTargetBaseInfluence",m),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:r}}function fy(n,e,t,i){let s=new WeakMap;function r(l){let c=i.render.frame,h=l.geometry,d=e.get(l,h);if(s.get(d)!==c&&(e.update(d),s.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return d}function a(){s=new WeakMap}function o(l){let c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}var ja=class extends Pn{constructor(e,t,i,s,r,a,o,l,c,h=Os){if(h!==Os&&h!==Xs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===Os&&(i=ss),i===void 0&&h===Xs&&(i=Gs),super(null,s,r,a,o,l,h,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Cn,this.minFilter=l!==void 0?l:Cn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},cf=new Pn,dd=new ja(1,1),hf=new qa,uf=new Lc,df=new Ka,fd=[],pd=[],md=new Float32Array(16),gd=new Float32Array(9),xd=new Float32Array(4);function er(n,e,t){let i=n[0];if(i<=0||i>0)return n;let s=e*t,r=fd[s];if(r===void 0&&(r=new Float32Array(s),fd[s]=r),e!==0){i.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(r,o)}return r}function $t(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function qt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function _o(n,e){let t=pd[e];t===void 0&&(t=new Int32Array(e),pd[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function py(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function my(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if($t(t,e))return;n.uniform2fv(this.addr,e),qt(t,e)}}function gy(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if($t(t,e))return;n.uniform3fv(this.addr,e),qt(t,e)}}function xy(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if($t(t,e))return;n.uniform4fv(this.addr,e),qt(t,e)}}function yy(n,e){let t=this.cache,i=e.elements;if(i===void 0){if($t(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),qt(t,e)}else{if($t(t,i))return;xd.set(i),n.uniformMatrix2fv(this.addr,!1,xd),qt(t,i)}}function vy(n,e){let t=this.cache,i=e.elements;if(i===void 0){if($t(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),qt(t,e)}else{if($t(t,i))return;gd.set(i),n.uniformMatrix3fv(this.addr,!1,gd),qt(t,i)}}function _y(n,e){let t=this.cache,i=e.elements;if(i===void 0){if($t(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),qt(t,e)}else{if($t(t,i))return;md.set(i),n.uniformMatrix4fv(this.addr,!1,md),qt(t,i)}}function My(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function by(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if($t(t,e))return;n.uniform2iv(this.addr,e),qt(t,e)}}function Sy(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if($t(t,e))return;n.uniform3iv(this.addr,e),qt(t,e)}}function Ey(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if($t(t,e))return;n.uniform4iv(this.addr,e),qt(t,e)}}function wy(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Ty(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if($t(t,e))return;n.uniform2uiv(this.addr,e),qt(t,e)}}function Ay(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if($t(t,e))return;n.uniform3uiv(this.addr,e),qt(t,e)}}function Ry(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if($t(t,e))return;n.uniform4uiv(this.addr,e),qt(t,e)}}function Cy(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(dd.compareFunction=sf,r=dd):r=cf,t.setTexture2D(e||r,s)}function Py(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||uf,s)}function Iy(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||df,s)}function Ly(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||hf,s)}function zy(n){switch(n){case 5126:return py;case 35664:return my;case 35665:return gy;case 35666:return xy;case 35674:return yy;case 35675:return vy;case 35676:return _y;case 5124:case 35670:return My;case 35667:case 35671:return by;case 35668:case 35672:return Sy;case 35669:case 35673:return Ey;case 5125:return wy;case 36294:return Ty;case 36295:return Ay;case 36296:return Ry;case 35678:case 36198:case 36298:case 36306:case 35682:return Cy;case 35679:case 36299:case 36307:return Py;case 35680:case 36300:case 36308:case 36293:return Iy;case 36289:case 36303:case 36311:case 36292:return Ly}}function Dy(n,e){n.uniform1fv(this.addr,e)}function Uy(n,e){let t=er(e,this.size,2);n.uniform2fv(this.addr,t)}function Ny(n,e){let t=er(e,this.size,3);n.uniform3fv(this.addr,t)}function Fy(n,e){let t=er(e,this.size,4);n.uniform4fv(this.addr,t)}function Oy(n,e){let t=er(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function ky(n,e){let t=er(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function By(n,e){let t=er(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Hy(n,e){n.uniform1iv(this.addr,e)}function Vy(n,e){n.uniform2iv(this.addr,e)}function Wy(n,e){n.uniform3iv(this.addr,e)}function Gy(n,e){n.uniform4iv(this.addr,e)}function Xy(n,e){n.uniform1uiv(this.addr,e)}function $y(n,e){n.uniform2uiv(this.addr,e)}function qy(n,e){n.uniform3uiv(this.addr,e)}function Yy(n,e){n.uniform4uiv(this.addr,e)}function Zy(n,e,t){let i=this.cache,s=e.length,r=_o(t,s);$t(i,r)||(n.uniform1iv(this.addr,r),qt(i,r));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||cf,r[a])}function Jy(n,e,t){let i=this.cache,s=e.length,r=_o(t,s);$t(i,r)||(n.uniform1iv(this.addr,r),qt(i,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||uf,r[a])}function Ky(n,e,t){let i=this.cache,s=e.length,r=_o(t,s);$t(i,r)||(n.uniform1iv(this.addr,r),qt(i,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||df,r[a])}function jy(n,e,t){let i=this.cache,s=e.length,r=_o(t,s);$t(i,r)||(n.uniform1iv(this.addr,r),qt(i,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||hf,r[a])}function Qy(n){switch(n){case 5126:return Dy;case 35664:return Uy;case 35665:return Ny;case 35666:return Fy;case 35674:return Oy;case 35675:return ky;case 35676:return By;case 5124:case 35670:return Hy;case 35667:case 35671:return Vy;case 35668:case 35672:return Wy;case 35669:case 35673:return Gy;case 5125:return Xy;case 36294:return $y;case 36295:return qy;case 36296:return Yy;case 35678:case 36198:case 36298:case 36306:case 35682:return Zy;case 35679:case 36299:case 36307:return Jy;case 35680:case 36300:case 36308:case 36293:return Ky;case 36289:case 36303:case 36311:case 36292:return jy}}var Uc=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=zy(t.type)}},Nc=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Qy(t.type)}},Fc=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],i)}}},Fl=/(\w+)(\])?(\[|\.)?/g;function yd(n,e){n.seq.push(e),n.map[e.id]=e}function ev(n,e,t){let i=n.name,s=i.length;for(Fl.lastIndex=0;;){let r=Fl.exec(i),a=Fl.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){yd(t,c===void 0?new Uc(o,n,e):new Nc(o,n,e));break}else{let d=t.map[o];d===void 0&&(d=new Fc(o),yd(t,d)),t=d}}}var Bs=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){let r=e.getActiveUniform(t,s),a=e.getUniformLocation(t,r.name);ev(r,a,this)}}setValue(e,t,i,s){let r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){let s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){let i=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&i.push(a)}return i}};function vd(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var tv=37297,nv=0;function iv(n,e){let t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}var _d=new qe;function sv(n){rt._getMatrix(_d,rt.workingColorSpace,n);let e=`mat3( ${_d.elements.map(t=>t.toFixed(4))} )`;switch(rt.getTransfer(n)){case vo:return[e,"LinearTransferOETF"];case pt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Md(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),s=n.getShaderInfoLog(e).trim();if(i&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let a=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+iv(n.getShaderSource(e),a)}else return s}function rv(n,e){let t=sv(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function av(n,e){let t;switch(e){case mh:t="Linear";break;case gh:t="Reinhard";break;case xh:t="Cineon";break;case cs:t="ACESFilmic";break;case yh:t="AgX";break;case vh:t="Neutral";break;case Om:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Pa=new U;function ov(){rt.getLuminanceCoefficients(Pa);let n=Pa.x.toFixed(4),e=Pa.y.toFixed(4),t=Pa.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function lv(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ar).join(`
`)}function cv(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function hv(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(e,s),a=r.name,o=1;r.type===n.FLOAT_MAT2&&(o=2),r.type===n.FLOAT_MAT3&&(o=3),r.type===n.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function Ar(n){return n!==""}function bd(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Sd(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var uv=/^[ \t]*#include +<([\w\d./]+)>/gm;function Oc(n){return n.replace(uv,fv)}var dv=new Map;function fv(n,e){let t=Je[e];if(t===void 0){let i=dv.get(e);if(i!==void 0)t=Je[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Oc(t)}var pv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ed(n){return n.replace(pv,mv)}function mv(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function wd(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function gv(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Gd?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===xm?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===gi&&(e="SHADOWMAP_TYPE_VSM"),e}function xv(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Vs:case Ws:e="ENVMAP_TYPE_CUBE";break;case yo:e="ENVMAP_TYPE_CUBE_UV";break}return e}function yv(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Ws:e="ENVMAP_MODE_REFRACTION";break}return e}function vv(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Xd:e="ENVMAP_BLENDING_MULTIPLY";break;case Nm:e="ENVMAP_BLENDING_MIX";break;case Fm:e="ENVMAP_BLENDING_ADD";break}return e}function _v(n){let e=n.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function Mv(n,e,t,i){let s=n.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,l=gv(t),c=xv(t),h=yv(t),d=vv(t),f=_v(t),u=lv(t),m=cv(r),y=s.createProgram(),g,p,E=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Ar).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Ar).join(`
`),p.length>0&&(p+=`
`)):(g=[wd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ar).join(`
`),p=[wd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ii?"#define TONE_MAPPING":"",t.toneMapping!==Ii?Je.tonemapping_pars_fragment:"",t.toneMapping!==Ii?av("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Je.colorspace_pars_fragment,rv("linearToOutputTexel",t.outputColorSpace),ov(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ar).join(`
`)),a=Oc(a),a=bd(a,t),a=Sd(a,t),o=Oc(o),o=bd(o,t),o=Sd(o,t),a=Ed(a),o=Ed(o),t.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,g=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",t.glslVersion===ku?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ku?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let x=E+g+a,v=E+p+o,P=vd(s,s.VERTEX_SHADER,x),_=vd(s,s.FRAGMENT_SHADER,v);s.attachShader(y,P),s.attachShader(y,_),t.index0AttributeName!==void 0?s.bindAttribLocation(y,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(y,0,"position"),s.linkProgram(y);function L(O){if(n.debug.checkShaderErrors){let V=s.getProgramInfoLog(y).trim(),I=s.getShaderInfoLog(P).trim(),M=s.getShaderInfoLog(_).trim(),A=!0,w=!0;if(s.getProgramParameter(y,s.LINK_STATUS)===!1)if(A=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,y,P,_);else{let F=Md(s,P,"vertex"),H=Md(s,_,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(y,s.VALIDATE_STATUS)+`

Material Name: `+O.name+`
Material Type: `+O.type+`

Program Info Log: `+V+`
`+F+`
`+H)}else V!==""?console.warn("THREE.WebGLProgram: Program Info Log:",V):(I===""||M==="")&&(w=!1);w&&(O.diagnostics={runnable:A,programLog:V,vertexShader:{log:I,prefix:g},fragmentShader:{log:M,prefix:p}})}s.deleteShader(P),s.deleteShader(_),z=new Bs(s,y),T=hv(s,y)}let z;this.getUniforms=function(){return z===void 0&&L(this),z};let T;this.getAttributes=function(){return T===void 0&&L(this),T};let b=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=s.getProgramParameter(y,tv)),b},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(y),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=nv++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=P,this.fragmentShader=_,this}var bv=0,kc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new Bc(e),t.set(e,i)),i}},Bc=class{constructor(e){this.id=bv++,this.code=e,this.usedTimes=0}};function Sv(n,e,t,i,s,r,a){let o=new Dr,l=new kc,c=new Set,h=[],d=s.logarithmicDepthBuffer,f=s.vertexTextures,u=s.precision,m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(T){return c.add(T),T===0?"uv":`uv${T}`}function g(T,b,O,V,I){let M=V.fog,A=I.geometry,w=T.isMeshStandardMaterial?V.environment:null,F=(T.isMeshStandardMaterial?t:e).get(T.envMap||w),H=F&&F.mapping===yo?F.image.height:null,k=m[T.type];T.precision!==null&&(u=s.getMaxPrecision(T.precision),u!==T.precision&&console.warn("THREE.WebGLProgram.getParameters:",T.precision,"not supported, using",u,"instead."));let Y=A.morphAttributes.position||A.morphAttributes.normal||A.morphAttributes.color,Z=Y!==void 0?Y.length:0,N=0;A.morphAttributes.position!==void 0&&(N=1),A.morphAttributes.normal!==void 0&&(N=2),A.morphAttributes.color!==void 0&&(N=3);let ie,W,K,ae;if(k){let gt=jn[k];ie=gt.vertexShader,W=gt.fragmentShader}else ie=T.vertexShader,W=T.fragmentShader,l.update(T),K=l.getVertexShaderID(T),ae=l.getFragmentShaderID(T);let ne=n.getRenderTarget(),ue=n.state.buffers.depth.getReversed(),xe=I.isInstancedMesh===!0,Ee=I.isBatchedMesh===!0,Le=!!T.map,ee=!!T.matcap,de=!!F,B=!!T.aoMap,Ie=!!T.lightMap,he=!!T.bumpMap,we=!!T.normalMap,me=!!T.displacementMap,ke=!!T.emissiveMap,Te=!!T.metalnessMap,D=!!T.roughnessMap,R=T.anisotropy>0,J=T.clearcoat>0,se=T.dispersion>0,ce=T.iridescence>0,re=T.sheen>0,ze=T.transmission>0,ve=R&&!!T.anisotropyMap,Ae=J&&!!T.clearcoatMap,st=J&&!!T.clearcoatNormalMap,fe=J&&!!T.clearcoatRoughnessMap,Re=ce&&!!T.iridescenceMap,Be=ce&&!!T.iridescenceThicknessMap,Ve=re&&!!T.sheenColorMap,Ce=re&&!!T.sheenRoughnessMap,at=!!T.specularMap,Ze=!!T.specularColorMap,Et=!!T.specularIntensityMap,G=ze&&!!T.transmissionMap,_e=ze&&!!T.thicknessMap,te=!!T.gradientMap,oe=!!T.alphaMap,Se=T.alphaTest>0,Me=!!T.alphaHash,Xe=!!T.extensions,Ht=Ii;T.toneMapped&&(ne===null||ne.isXRRenderTarget===!0)&&(Ht=n.toneMapping);let an={shaderID:k,shaderType:T.type,shaderName:T.name,vertexShader:ie,fragmentShader:W,defines:T.defines,customVertexShaderID:K,customFragmentShaderID:ae,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:u,batching:Ee,batchingColor:Ee&&I._colorsTexture!==null,instancing:xe,instancingColor:xe&&I.instanceColor!==null,instancingMorph:xe&&I.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:ne===null?n.outputColorSpace:ne.isXRRenderTarget===!0?ne.texture.colorSpace:js,alphaToCoverage:!!T.alphaToCoverage,map:Le,matcap:ee,envMap:de,envMapMode:de&&F.mapping,envMapCubeUVHeight:H,aoMap:B,lightMap:Ie,bumpMap:he,normalMap:we,displacementMap:f&&me,emissiveMap:ke,normalMapObjectSpace:we&&T.normalMapType===Vm,normalMapTangentSpace:we&&T.normalMapType===nf,metalnessMap:Te,roughnessMap:D,anisotropy:R,anisotropyMap:ve,clearcoat:J,clearcoatMap:Ae,clearcoatNormalMap:st,clearcoatRoughnessMap:fe,dispersion:se,iridescence:ce,iridescenceMap:Re,iridescenceThicknessMap:Be,sheen:re,sheenColorMap:Ve,sheenRoughnessMap:Ce,specularMap:at,specularColorMap:Ze,specularIntensityMap:Et,transmission:ze,transmissionMap:G,thicknessMap:_e,gradientMap:te,opaque:T.transparent===!1&&T.blending===Fs&&T.alphaToCoverage===!1,alphaMap:oe,alphaTest:Se,alphaHash:Me,combine:T.combine,mapUv:Le&&y(T.map.channel),aoMapUv:B&&y(T.aoMap.channel),lightMapUv:Ie&&y(T.lightMap.channel),bumpMapUv:he&&y(T.bumpMap.channel),normalMapUv:we&&y(T.normalMap.channel),displacementMapUv:me&&y(T.displacementMap.channel),emissiveMapUv:ke&&y(T.emissiveMap.channel),metalnessMapUv:Te&&y(T.metalnessMap.channel),roughnessMapUv:D&&y(T.roughnessMap.channel),anisotropyMapUv:ve&&y(T.anisotropyMap.channel),clearcoatMapUv:Ae&&y(T.clearcoatMap.channel),clearcoatNormalMapUv:st&&y(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:fe&&y(T.clearcoatRoughnessMap.channel),iridescenceMapUv:Re&&y(T.iridescenceMap.channel),iridescenceThicknessMapUv:Be&&y(T.iridescenceThicknessMap.channel),sheenColorMapUv:Ve&&y(T.sheenColorMap.channel),sheenRoughnessMapUv:Ce&&y(T.sheenRoughnessMap.channel),specularMapUv:at&&y(T.specularMap.channel),specularColorMapUv:Ze&&y(T.specularColorMap.channel),specularIntensityMapUv:Et&&y(T.specularIntensityMap.channel),transmissionMapUv:G&&y(T.transmissionMap.channel),thicknessMapUv:_e&&y(T.thicknessMap.channel),alphaMapUv:oe&&y(T.alphaMap.channel),vertexTangents:!!A.attributes.tangent&&(we||R),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!A.attributes.color&&A.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!A.attributes.uv&&(Le||oe),fog:!!M,useFog:T.fog===!0,fogExp2:!!M&&M.isFogExp2,flatShading:T.flatShading===!0,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:ue,skinning:I.isSkinnedMesh===!0,morphTargets:A.morphAttributes.position!==void 0,morphNormals:A.morphAttributes.normal!==void 0,morphColors:A.morphAttributes.color!==void 0,morphTargetsCount:Z,morphTextureStride:N,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:T.dithering,shadowMapEnabled:n.shadowMap.enabled&&O.length>0,shadowMapType:n.shadowMap.type,toneMapping:Ht,decodeVideoTexture:Le&&T.map.isVideoTexture===!0&&rt.getTransfer(T.map.colorSpace)===pt,decodeVideoTextureEmissive:ke&&T.emissiveMap.isVideoTexture===!0&&rt.getTransfer(T.emissiveMap.colorSpace)===pt,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===Dt,flipSided:T.side===nn,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:Xe&&T.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Xe&&T.extensions.multiDraw===!0||Ee)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return an.vertexUv1s=c.has(1),an.vertexUv2s=c.has(2),an.vertexUv3s=c.has(3),c.clear(),an}function p(T){let b=[];if(T.shaderID?b.push(T.shaderID):(b.push(T.customVertexShaderID),b.push(T.customFragmentShaderID)),T.defines!==void 0)for(let O in T.defines)b.push(O),b.push(T.defines[O]);return T.isRawShaderMaterial===!1&&(E(b,T),x(b,T),b.push(n.outputColorSpace)),b.push(T.customProgramCacheKey),b.join()}function E(T,b){T.push(b.precision),T.push(b.outputColorSpace),T.push(b.envMapMode),T.push(b.envMapCubeUVHeight),T.push(b.mapUv),T.push(b.alphaMapUv),T.push(b.lightMapUv),T.push(b.aoMapUv),T.push(b.bumpMapUv),T.push(b.normalMapUv),T.push(b.displacementMapUv),T.push(b.emissiveMapUv),T.push(b.metalnessMapUv),T.push(b.roughnessMapUv),T.push(b.anisotropyMapUv),T.push(b.clearcoatMapUv),T.push(b.clearcoatNormalMapUv),T.push(b.clearcoatRoughnessMapUv),T.push(b.iridescenceMapUv),T.push(b.iridescenceThicknessMapUv),T.push(b.sheenColorMapUv),T.push(b.sheenRoughnessMapUv),T.push(b.specularMapUv),T.push(b.specularColorMapUv),T.push(b.specularIntensityMapUv),T.push(b.transmissionMapUv),T.push(b.thicknessMapUv),T.push(b.combine),T.push(b.fogExp2),T.push(b.sizeAttenuation),T.push(b.morphTargetsCount),T.push(b.morphAttributeCount),T.push(b.numDirLights),T.push(b.numPointLights),T.push(b.numSpotLights),T.push(b.numSpotLightMaps),T.push(b.numHemiLights),T.push(b.numRectAreaLights),T.push(b.numDirLightShadows),T.push(b.numPointLightShadows),T.push(b.numSpotLightShadows),T.push(b.numSpotLightShadowsWithMaps),T.push(b.numLightProbes),T.push(b.shadowMapType),T.push(b.toneMapping),T.push(b.numClippingPlanes),T.push(b.numClipIntersection),T.push(b.depthPacking)}function x(T,b){o.disableAll(),b.supportsVertexTextures&&o.enable(0),b.instancing&&o.enable(1),b.instancingColor&&o.enable(2),b.instancingMorph&&o.enable(3),b.matcap&&o.enable(4),b.envMap&&o.enable(5),b.normalMapObjectSpace&&o.enable(6),b.normalMapTangentSpace&&o.enable(7),b.clearcoat&&o.enable(8),b.iridescence&&o.enable(9),b.alphaTest&&o.enable(10),b.vertexColors&&o.enable(11),b.vertexAlphas&&o.enable(12),b.vertexUv1s&&o.enable(13),b.vertexUv2s&&o.enable(14),b.vertexUv3s&&o.enable(15),b.vertexTangents&&o.enable(16),b.anisotropy&&o.enable(17),b.alphaHash&&o.enable(18),b.batching&&o.enable(19),b.dispersion&&o.enable(20),b.batchingColor&&o.enable(21),T.push(o.mask),o.disableAll(),b.fog&&o.enable(0),b.useFog&&o.enable(1),b.flatShading&&o.enable(2),b.logarithmicDepthBuffer&&o.enable(3),b.reverseDepthBuffer&&o.enable(4),b.skinning&&o.enable(5),b.morphTargets&&o.enable(6),b.morphNormals&&o.enable(7),b.morphColors&&o.enable(8),b.premultipliedAlpha&&o.enable(9),b.shadowMapEnabled&&o.enable(10),b.doubleSided&&o.enable(11),b.flipSided&&o.enable(12),b.useDepthPacking&&o.enable(13),b.dithering&&o.enable(14),b.transmission&&o.enable(15),b.sheen&&o.enable(16),b.opaque&&o.enable(17),b.pointsUvs&&o.enable(18),b.decodeVideoTexture&&o.enable(19),b.decodeVideoTextureEmissive&&o.enable(20),b.alphaToCoverage&&o.enable(21),T.push(o.mask)}function v(T){let b=m[T.type],O;if(b){let V=jn[b];O=Oi.clone(V.uniforms)}else O=T.uniforms;return O}function P(T,b){let O;for(let V=0,I=h.length;V<I;V++){let M=h[V];if(M.cacheKey===b){O=M,++O.usedTimes;break}}return O===void 0&&(O=new Mv(n,b,T,r),h.push(O)),O}function _(T){if(--T.usedTimes===0){let b=h.indexOf(T);h[b]=h[h.length-1],h.pop(),T.destroy()}}function L(T){l.remove(T)}function z(){l.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:v,acquireProgram:P,releaseProgram:_,releaseShaderCache:L,programs:h,dispose:z}}function Ev(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function s(a,o,l){n.get(a)[o]=l}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function wv(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Td(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Ad(){let n=[],e=0,t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function a(d,f,u,m,y,g){let p=n[e];return p===void 0?(p={id:d.id,object:d,geometry:f,material:u,groupOrder:m,renderOrder:d.renderOrder,z:y,group:g},n[e]=p):(p.id=d.id,p.object=d,p.geometry=f,p.material=u,p.groupOrder=m,p.renderOrder=d.renderOrder,p.z=y,p.group=g),e++,p}function o(d,f,u,m,y,g){let p=a(d,f,u,m,y,g);u.transmission>0?i.push(p):u.transparent===!0?s.push(p):t.push(p)}function l(d,f,u,m,y,g){let p=a(d,f,u,m,y,g);u.transmission>0?i.unshift(p):u.transparent===!0?s.unshift(p):t.unshift(p)}function c(d,f){t.length>1&&t.sort(d||wv),i.length>1&&i.sort(f||Td),s.length>1&&s.sort(f||Td)}function h(){for(let d=e,f=n.length;d<f;d++){let u=n[d];if(u.id===null)break;u.id=null,u.object=null,u.geometry=null,u.material=null,u.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:o,unshift:l,finish:h,sort:c}}function Tv(){let n=new WeakMap;function e(i,s){let r=n.get(i),a;return r===void 0?(a=new Ad,n.set(i,[a])):s>=r.length?(a=new Ad,r.push(a)):a=r[s],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function Av(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new U,color:new ge};break;case"SpotLight":t={position:new U,direction:new U,color:new ge,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new U,color:new ge,distance:0,decay:0};break;case"HemisphereLight":t={direction:new U,skyColor:new ge,groundColor:new ge};break;case"RectAreaLight":t={color:new ge,position:new U,halfWidth:new U,halfHeight:new U};break}return n[e.id]=t,t}}}function Rv(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var Cv=0;function Pv(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function Iv(n){let e=new Av,t=Rv(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new U);let s=new U,r=new Ge,a=new Ge;function o(c){let h=0,d=0,f=0;for(let T=0;T<9;T++)i.probe[T].set(0,0,0);let u=0,m=0,y=0,g=0,p=0,E=0,x=0,v=0,P=0,_=0,L=0;c.sort(Pv);for(let T=0,b=c.length;T<b;T++){let O=c[T],V=O.color,I=O.intensity,M=O.distance,A=O.shadow&&O.shadow.map?O.shadow.map.texture:null;if(O.isAmbientLight)h+=V.r*I,d+=V.g*I,f+=V.b*I;else if(O.isLightProbe){for(let w=0;w<9;w++)i.probe[w].addScaledVector(O.sh.coefficients[w],I);L++}else if(O.isDirectionalLight){let w=e.get(O);if(w.color.copy(O.color).multiplyScalar(O.intensity),O.castShadow){let F=O.shadow,H=t.get(O);H.shadowIntensity=F.intensity,H.shadowBias=F.bias,H.shadowNormalBias=F.normalBias,H.shadowRadius=F.radius,H.shadowMapSize=F.mapSize,i.directionalShadow[u]=H,i.directionalShadowMap[u]=A,i.directionalShadowMatrix[u]=O.shadow.matrix,E++}i.directional[u]=w,u++}else if(O.isSpotLight){let w=e.get(O);w.position.setFromMatrixPosition(O.matrixWorld),w.color.copy(V).multiplyScalar(I),w.distance=M,w.coneCos=Math.cos(O.angle),w.penumbraCos=Math.cos(O.angle*(1-O.penumbra)),w.decay=O.decay,i.spot[y]=w;let F=O.shadow;if(O.map&&(i.spotLightMap[P]=O.map,P++,F.updateMatrices(O),O.castShadow&&_++),i.spotLightMatrix[y]=F.matrix,O.castShadow){let H=t.get(O);H.shadowIntensity=F.intensity,H.shadowBias=F.bias,H.shadowNormalBias=F.normalBias,H.shadowRadius=F.radius,H.shadowMapSize=F.mapSize,i.spotShadow[y]=H,i.spotShadowMap[y]=A,v++}y++}else if(O.isRectAreaLight){let w=e.get(O);w.color.copy(V).multiplyScalar(I),w.halfWidth.set(O.width*.5,0,0),w.halfHeight.set(0,O.height*.5,0),i.rectArea[g]=w,g++}else if(O.isPointLight){let w=e.get(O);if(w.color.copy(O.color).multiplyScalar(O.intensity),w.distance=O.distance,w.decay=O.decay,O.castShadow){let F=O.shadow,H=t.get(O);H.shadowIntensity=F.intensity,H.shadowBias=F.bias,H.shadowNormalBias=F.normalBias,H.shadowRadius=F.radius,H.shadowMapSize=F.mapSize,H.shadowCameraNear=F.camera.near,H.shadowCameraFar=F.camera.far,i.pointShadow[m]=H,i.pointShadowMap[m]=A,i.pointShadowMatrix[m]=O.shadow.matrix,x++}i.point[m]=w,m++}else if(O.isHemisphereLight){let w=e.get(O);w.skyColor.copy(O.color).multiplyScalar(I),w.groundColor.copy(O.groundColor).multiplyScalar(I),i.hemi[p]=w,p++}}g>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ye.LTC_FLOAT_1,i.rectAreaLTC2=ye.LTC_FLOAT_2):(i.rectAreaLTC1=ye.LTC_HALF_1,i.rectAreaLTC2=ye.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=d,i.ambient[2]=f;let z=i.hash;(z.directionalLength!==u||z.pointLength!==m||z.spotLength!==y||z.rectAreaLength!==g||z.hemiLength!==p||z.numDirectionalShadows!==E||z.numPointShadows!==x||z.numSpotShadows!==v||z.numSpotMaps!==P||z.numLightProbes!==L)&&(i.directional.length=u,i.spot.length=y,i.rectArea.length=g,i.point.length=m,i.hemi.length=p,i.directionalShadow.length=E,i.directionalShadowMap.length=E,i.pointShadow.length=x,i.pointShadowMap.length=x,i.spotShadow.length=v,i.spotShadowMap.length=v,i.directionalShadowMatrix.length=E,i.pointShadowMatrix.length=x,i.spotLightMatrix.length=v+P-_,i.spotLightMap.length=P,i.numSpotLightShadowsWithMaps=_,i.numLightProbes=L,z.directionalLength=u,z.pointLength=m,z.spotLength=y,z.rectAreaLength=g,z.hemiLength=p,z.numDirectionalShadows=E,z.numPointShadows=x,z.numSpotShadows=v,z.numSpotMaps=P,z.numLightProbes=L,i.version=Cv++)}function l(c,h){let d=0,f=0,u=0,m=0,y=0,g=h.matrixWorldInverse;for(let p=0,E=c.length;p<E;p++){let x=c[p];if(x.isDirectionalLight){let v=i.directional[d];v.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(g),d++}else if(x.isSpotLight){let v=i.spot[u];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(g),v.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(g),u++}else if(x.isRectAreaLight){let v=i.rectArea[m];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(g),a.identity(),r.copy(x.matrixWorld),r.premultiply(g),a.extractRotation(r),v.halfWidth.set(x.width*.5,0,0),v.halfHeight.set(0,x.height*.5,0),v.halfWidth.applyMatrix4(a),v.halfHeight.applyMatrix4(a),m++}else if(x.isPointLight){let v=i.point[f];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(g),f++}else if(x.isHemisphereLight){let v=i.hemi[y];v.direction.setFromMatrixPosition(x.matrixWorld),v.direction.transformDirection(g),y++}}}return{setup:o,setupView:l,state:i}}function Rd(n){let e=new Iv(n),t=[],i=[];function s(h){c.camera=h,t.length=0,i.length=0}function r(h){t.push(h)}function a(h){i.push(h)}function o(){e.setup(t)}function l(h){e.setupView(t,h)}let c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function Lv(n){let e=new WeakMap;function t(s,r=0){let a=e.get(s),o;return a===void 0?(o=new Rd(n),e.set(s,[o])):r>=a.length?(o=new Rd(n),a.push(o)):o=a[r],o}function i(){e=new WeakMap}return{get:t,dispose:i}}var Hc=class extends Di{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Bm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Vc=class extends Di{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},zv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Dv=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Uv(n,e,t){let i=new Ur,s=new le,r=new le,a=new vt,o=new Hc({depthPacking:Hm}),l=new Vc,c={},h=t.maxTextureSize,d={[ni]:nn,[nn]:ni,[Dt]:Dt},f=new mt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new le},radius:{value:4}},vertexShader:zv,fragmentShader:Dv}),u=f.clone();u.defines.HORIZONTAL_PASS=1;let m=new kt;m.setAttribute("position",new Vt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new Pe(m,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Gd;let p=this.type;this.render=function(_,L,z){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||_.length===0)return;let T=n.getRenderTarget(),b=n.getActiveCubeFace(),O=n.getActiveMipmapLevel(),V=n.state;V.setBlending(ti),V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);let I=p!==gi&&this.type===gi,M=p===gi&&this.type!==gi;for(let A=0,w=_.length;A<w;A++){let F=_[A],H=F.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",F,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;s.copy(H.mapSize);let k=H.getFrameExtents();if(s.multiply(k),r.copy(H.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/k.x),s.x=r.x*k.x,H.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/k.y),s.y=r.y*k.y,H.mapSize.y=r.y)),H.map===null||I===!0||M===!0){let Z=this.type!==gi?{minFilter:Cn,magFilter:Cn}:{};H.map!==null&&H.map.dispose(),H.map=new mn(s.x,s.y,Z),H.map.texture.name=F.name+".shadowMap",H.camera.updateProjectionMatrix()}n.setRenderTarget(H.map),n.clear();let Y=H.getViewportCount();for(let Z=0;Z<Y;Z++){let N=H.getViewport(Z);a.set(r.x*N.x,r.y*N.y,r.x*N.z,r.y*N.w),V.viewport(a),H.updateMatrices(F,Z),i=H.getFrustum(),v(L,z,H.camera,F,this.type)}H.isPointLightShadow!==!0&&this.type===gi&&E(H,z),H.needsUpdate=!1}p=this.type,g.needsUpdate=!1,n.setRenderTarget(T,b,O)};function E(_,L){let z=e.update(y);f.defines.VSM_SAMPLES!==_.blurSamples&&(f.defines.VSM_SAMPLES=_.blurSamples,u.defines.VSM_SAMPLES=_.blurSamples,f.needsUpdate=!0,u.needsUpdate=!0),_.mapPass===null&&(_.mapPass=new mn(s.x,s.y)),f.uniforms.shadow_pass.value=_.map.texture,f.uniforms.resolution.value=_.mapSize,f.uniforms.radius.value=_.radius,n.setRenderTarget(_.mapPass),n.clear(),n.renderBufferDirect(L,null,z,f,y,null),u.uniforms.shadow_pass.value=_.mapPass.texture,u.uniforms.resolution.value=_.mapSize,u.uniforms.radius.value=_.radius,n.setRenderTarget(_.map),n.clear(),n.renderBufferDirect(L,null,z,u,y,null)}function x(_,L,z,T){let b=null,O=z.isPointLight===!0?_.customDistanceMaterial:_.customDepthMaterial;if(O!==void 0)b=O;else if(b=z.isPointLight===!0?l:o,n.localClippingEnabled&&L.clipShadows===!0&&Array.isArray(L.clippingPlanes)&&L.clippingPlanes.length!==0||L.displacementMap&&L.displacementScale!==0||L.alphaMap&&L.alphaTest>0||L.map&&L.alphaTest>0){let V=b.uuid,I=L.uuid,M=c[V];M===void 0&&(M={},c[V]=M);let A=M[I];A===void 0&&(A=b.clone(),M[I]=A,L.addEventListener("dispose",P)),b=A}if(b.visible=L.visible,b.wireframe=L.wireframe,T===gi?b.side=L.shadowSide!==null?L.shadowSide:L.side:b.side=L.shadowSide!==null?L.shadowSide:d[L.side],b.alphaMap=L.alphaMap,b.alphaTest=L.alphaTest,b.map=L.map,b.clipShadows=L.clipShadows,b.clippingPlanes=L.clippingPlanes,b.clipIntersection=L.clipIntersection,b.displacementMap=L.displacementMap,b.displacementScale=L.displacementScale,b.displacementBias=L.displacementBias,b.wireframeLinewidth=L.wireframeLinewidth,b.linewidth=L.linewidth,z.isPointLight===!0&&b.isMeshDistanceMaterial===!0){let V=n.properties.get(b);V.light=z}return b}function v(_,L,z,T,b){if(_.visible===!1)return;if(_.layers.test(L.layers)&&(_.isMesh||_.isLine||_.isPoints)&&(_.castShadow||_.receiveShadow&&b===gi)&&(!_.frustumCulled||i.intersectsObject(_))){_.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,_.matrixWorld);let I=e.update(_),M=_.material;if(Array.isArray(M)){let A=I.groups;for(let w=0,F=A.length;w<F;w++){let H=A[w],k=M[H.materialIndex];if(k&&k.visible){let Y=x(_,k,T,b);_.onBeforeShadow(n,_,L,z,I,Y,H),n.renderBufferDirect(z,null,I,Y,_,H),_.onAfterShadow(n,_,L,z,I,Y,H)}}}else if(M.visible){let A=x(_,M,T,b);_.onBeforeShadow(n,_,L,z,I,A,null),n.renderBufferDirect(z,null,I,A,_,null),_.onAfterShadow(n,_,L,z,I,A,null)}}let V=_.children;for(let I=0,M=V.length;I<M;I++)v(V[I],L,z,T,b)}function P(_){_.target.removeEventListener("dispose",P);for(let z in c){let T=c[z],b=_.target.uuid;b in T&&(T[b].dispose(),delete T[b])}}}var Nv={[Xl]:$l,[ql]:Jl,[Yl]:Kl,[Hs]:Zl,[$l]:Xl,[Jl]:ql,[Kl]:Yl,[Zl]:Hs};function Fv(n,e){function t(){let G=!1,_e=new vt,te=null,oe=new vt(0,0,0,0);return{setMask:function(Se){te!==Se&&!G&&(n.colorMask(Se,Se,Se,Se),te=Se)},setLocked:function(Se){G=Se},setClear:function(Se,Me,Xe,Ht,an){an===!0&&(Se*=Ht,Me*=Ht,Xe*=Ht),_e.set(Se,Me,Xe,Ht),oe.equals(_e)===!1&&(n.clearColor(Se,Me,Xe,Ht),oe.copy(_e))},reset:function(){G=!1,te=null,oe.set(-1,0,0,0)}}}function i(){let G=!1,_e=!1,te=null,oe=null,Se=null;return{setReversed:function(Me){if(_e!==Me){let Xe=e.get("EXT_clip_control");_e?Xe.clipControlEXT(Xe.LOWER_LEFT_EXT,Xe.ZERO_TO_ONE_EXT):Xe.clipControlEXT(Xe.LOWER_LEFT_EXT,Xe.NEGATIVE_ONE_TO_ONE_EXT);let Ht=Se;Se=null,this.setClear(Ht)}_e=Me},getReversed:function(){return _e},setTest:function(Me){Me?ne(n.DEPTH_TEST):ue(n.DEPTH_TEST)},setMask:function(Me){te!==Me&&!G&&(n.depthMask(Me),te=Me)},setFunc:function(Me){if(_e&&(Me=Nv[Me]),oe!==Me){switch(Me){case Xl:n.depthFunc(n.NEVER);break;case $l:n.depthFunc(n.ALWAYS);break;case ql:n.depthFunc(n.LESS);break;case Hs:n.depthFunc(n.LEQUAL);break;case Yl:n.depthFunc(n.EQUAL);break;case Zl:n.depthFunc(n.GEQUAL);break;case Jl:n.depthFunc(n.GREATER);break;case Kl:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}oe=Me}},setLocked:function(Me){G=Me},setClear:function(Me){Se!==Me&&(_e&&(Me=1-Me),n.clearDepth(Me),Se=Me)},reset:function(){G=!1,te=null,oe=null,Se=null,_e=!1}}}function s(){let G=!1,_e=null,te=null,oe=null,Se=null,Me=null,Xe=null,Ht=null,an=null;return{setTest:function(gt){G||(gt?ne(n.STENCIL_TEST):ue(n.STENCIL_TEST))},setMask:function(gt){_e!==gt&&!G&&(n.stencilMask(gt),_e=gt)},setFunc:function(gt,On,ci){(te!==gt||oe!==On||Se!==ci)&&(n.stencilFunc(gt,On,ci),te=gt,oe=On,Se=ci)},setOp:function(gt,On,ci){(Me!==gt||Xe!==On||Ht!==ci)&&(n.stencilOp(gt,On,ci),Me=gt,Xe=On,Ht=ci)},setLocked:function(gt){G=gt},setClear:function(gt){an!==gt&&(n.clearStencil(gt),an=gt)},reset:function(){G=!1,_e=null,te=null,oe=null,Se=null,Me=null,Xe=null,Ht=null,an=null}}}let r=new t,a=new i,o=new s,l=new WeakMap,c=new WeakMap,h={},d={},f=new WeakMap,u=[],m=null,y=!1,g=null,p=null,E=null,x=null,v=null,P=null,_=null,L=new ge(0,0,0),z=0,T=!1,b=null,O=null,V=null,I=null,M=null,A=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),w=!1,F=0,H=n.getParameter(n.VERSION);H.indexOf("WebGL")!==-1?(F=parseFloat(/^WebGL (\d)/.exec(H)[1]),w=F>=1):H.indexOf("OpenGL ES")!==-1&&(F=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),w=F>=2);let k=null,Y={},Z=n.getParameter(n.SCISSOR_BOX),N=n.getParameter(n.VIEWPORT),ie=new vt().fromArray(Z),W=new vt().fromArray(N);function K(G,_e,te,oe){let Se=new Uint8Array(4),Me=n.createTexture();n.bindTexture(G,Me),n.texParameteri(G,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(G,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Xe=0;Xe<te;Xe++)G===n.TEXTURE_3D||G===n.TEXTURE_2D_ARRAY?n.texImage3D(_e,0,n.RGBA,1,1,oe,0,n.RGBA,n.UNSIGNED_BYTE,Se):n.texImage2D(_e+Xe,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Se);return Me}let ae={};ae[n.TEXTURE_2D]=K(n.TEXTURE_2D,n.TEXTURE_2D,1),ae[n.TEXTURE_CUBE_MAP]=K(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),ae[n.TEXTURE_2D_ARRAY]=K(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),ae[n.TEXTURE_3D]=K(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ne(n.DEPTH_TEST),a.setFunc(Hs),he(!1),we(Iu),ne(n.CULL_FACE),B(ti);function ne(G){h[G]!==!0&&(n.enable(G),h[G]=!0)}function ue(G){h[G]!==!1&&(n.disable(G),h[G]=!1)}function xe(G,_e){return d[G]!==_e?(n.bindFramebuffer(G,_e),d[G]=_e,G===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=_e),G===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=_e),!0):!1}function Ee(G,_e){let te=u,oe=!1;if(G){te=f.get(_e),te===void 0&&(te=[],f.set(_e,te));let Se=G.textures;if(te.length!==Se.length||te[0]!==n.COLOR_ATTACHMENT0){for(let Me=0,Xe=Se.length;Me<Xe;Me++)te[Me]=n.COLOR_ATTACHMENT0+Me;te.length=Se.length,oe=!0}}else te[0]!==n.BACK&&(te[0]=n.BACK,oe=!0);oe&&n.drawBuffers(te)}function Le(G){return m!==G?(n.useProgram(G),m=G,!0):!1}let ee={[Qi]:n.FUNC_ADD,[vm]:n.FUNC_SUBTRACT,[_m]:n.FUNC_REVERSE_SUBTRACT};ee[Mm]=n.MIN,ee[bm]=n.MAX;let de={[Sm]:n.ZERO,[Em]:n.ONE,[wm]:n.SRC_COLOR,[Wl]:n.SRC_ALPHA,[Im]:n.SRC_ALPHA_SATURATE,[Cm]:n.DST_COLOR,[Am]:n.DST_ALPHA,[Tm]:n.ONE_MINUS_SRC_COLOR,[Gl]:n.ONE_MINUS_SRC_ALPHA,[Pm]:n.ONE_MINUS_DST_COLOR,[Rm]:n.ONE_MINUS_DST_ALPHA,[Lm]:n.CONSTANT_COLOR,[zm]:n.ONE_MINUS_CONSTANT_COLOR,[Dm]:n.CONSTANT_ALPHA,[Um]:n.ONE_MINUS_CONSTANT_ALPHA};function B(G,_e,te,oe,Se,Me,Xe,Ht,an,gt){if(G===ti){y===!0&&(ue(n.BLEND),y=!1);return}if(y===!1&&(ne(n.BLEND),y=!0),G!==ym){if(G!==g||gt!==T){if((p!==Qi||v!==Qi)&&(n.blendEquation(n.FUNC_ADD),p=Qi,v=Qi),gt)switch(G){case Fs:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Tt:n.blendFunc(n.ONE,n.ONE);break;case Lu:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case zu:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}else switch(G){case Fs:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Tt:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Lu:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case zu:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}E=null,x=null,P=null,_=null,L.set(0,0,0),z=0,g=G,T=gt}return}Se=Se||_e,Me=Me||te,Xe=Xe||oe,(_e!==p||Se!==v)&&(n.blendEquationSeparate(ee[_e],ee[Se]),p=_e,v=Se),(te!==E||oe!==x||Me!==P||Xe!==_)&&(n.blendFuncSeparate(de[te],de[oe],de[Me],de[Xe]),E=te,x=oe,P=Me,_=Xe),(Ht.equals(L)===!1||an!==z)&&(n.blendColor(Ht.r,Ht.g,Ht.b,an),L.copy(Ht),z=an),g=G,T=!1}function Ie(G,_e){G.side===Dt?ue(n.CULL_FACE):ne(n.CULL_FACE);let te=G.side===nn;_e&&(te=!te),he(te),G.blending===Fs&&G.transparent===!1?B(ti):B(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),a.setFunc(G.depthFunc),a.setTest(G.depthTest),a.setMask(G.depthWrite),r.setMask(G.colorWrite);let oe=G.stencilWrite;o.setTest(oe),oe&&(o.setMask(G.stencilWriteMask),o.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),o.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),ke(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?ne(n.SAMPLE_ALPHA_TO_COVERAGE):ue(n.SAMPLE_ALPHA_TO_COVERAGE)}function he(G){b!==G&&(G?n.frontFace(n.CW):n.frontFace(n.CCW),b=G)}function we(G){G!==mm?(ne(n.CULL_FACE),G!==O&&(G===Iu?n.cullFace(n.BACK):G===gm?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):ue(n.CULL_FACE),O=G}function me(G){G!==V&&(w&&n.lineWidth(G),V=G)}function ke(G,_e,te){G?(ne(n.POLYGON_OFFSET_FILL),(I!==_e||M!==te)&&(n.polygonOffset(_e,te),I=_e,M=te)):ue(n.POLYGON_OFFSET_FILL)}function Te(G){G?ne(n.SCISSOR_TEST):ue(n.SCISSOR_TEST)}function D(G){G===void 0&&(G=n.TEXTURE0+A-1),k!==G&&(n.activeTexture(G),k=G)}function R(G,_e,te){te===void 0&&(k===null?te=n.TEXTURE0+A-1:te=k);let oe=Y[te];oe===void 0&&(oe={type:void 0,texture:void 0},Y[te]=oe),(oe.type!==G||oe.texture!==_e)&&(k!==te&&(n.activeTexture(te),k=te),n.bindTexture(G,_e||ae[G]),oe.type=G,oe.texture=_e)}function J(){let G=Y[k];G!==void 0&&G.type!==void 0&&(n.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function se(){try{n.compressedTexImage2D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ce(){try{n.compressedTexImage3D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function re(){try{n.texSubImage2D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ze(){try{n.texSubImage3D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ve(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Ae(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function st(){try{n.texStorage2D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function fe(){try{n.texStorage3D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Re(){try{n.texImage2D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Be(){try{n.texImage3D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Ve(G){ie.equals(G)===!1&&(n.scissor(G.x,G.y,G.z,G.w),ie.copy(G))}function Ce(G){W.equals(G)===!1&&(n.viewport(G.x,G.y,G.z,G.w),W.copy(G))}function at(G,_e){let te=c.get(_e);te===void 0&&(te=new WeakMap,c.set(_e,te));let oe=te.get(G);oe===void 0&&(oe=n.getUniformBlockIndex(_e,G.name),te.set(G,oe))}function Ze(G,_e){let oe=c.get(_e).get(G);l.get(_e)!==oe&&(n.uniformBlockBinding(_e,oe,G.__bindingPointIndex),l.set(_e,oe))}function Et(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},k=null,Y={},d={},f=new WeakMap,u=[],m=null,y=!1,g=null,p=null,E=null,x=null,v=null,P=null,_=null,L=new ge(0,0,0),z=0,T=!1,b=null,O=null,V=null,I=null,M=null,ie.set(0,0,n.canvas.width,n.canvas.height),W.set(0,0,n.canvas.width,n.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:ne,disable:ue,bindFramebuffer:xe,drawBuffers:Ee,useProgram:Le,setBlending:B,setMaterial:Ie,setFlipSided:he,setCullFace:we,setLineWidth:me,setPolygonOffset:ke,setScissorTest:Te,activeTexture:D,bindTexture:R,unbindTexture:J,compressedTexImage2D:se,compressedTexImage3D:ce,texImage2D:Re,texImage3D:Be,updateUBOMapping:at,uniformBlockBinding:Ze,texStorage2D:st,texStorage3D:fe,texSubImage2D:re,texSubImage3D:ze,compressedTexSubImage2D:ve,compressedTexSubImage3D:Ae,scissor:Ve,viewport:Ce,reset:Et}}function Cd(n,e,t,i){let s=Ov(i);switch(t){case Jd:return n*e;case jd:return n*e;case Qd:return n*e*2;case Sh:return n*e/s.components*s.byteLength;case Eh:return n*e/s.components*s.byteLength;case ef:return n*e*2/s.components*s.byteLength;case wh:return n*e*2/s.components*s.byteLength;case Kd:return n*e*3/s.components*s.byteLength;case Gn:return n*e*4/s.components*s.byteLength;case Th:return n*e*4/s.components*s.byteLength;case Oa:case ka:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Ba:case Ha:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case ic:case rc:return Math.max(n,16)*Math.max(e,8)/4;case nc:case sc:return Math.max(n,8)*Math.max(e,8)/2;case ac:case oc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case lc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case cc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case hc:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case uc:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case dc:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case fc:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case pc:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case mc:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case gc:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case xc:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case yc:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case vc:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case _c:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Mc:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case bc:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Va:case Sc:case Ec:return Math.ceil(n/4)*Math.ceil(e/4)*16;case tf:case wc:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Tc:case Ac:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Ov(n){switch(n){case vi:case qd:return{byteLength:1,components:1};case Lr:case Yd:case qn:return{byteLength:2,components:1};case Mh:case bh:return{byteLength:2,components:4};case ss:case _h:case ei:return{byteLength:4,components:1};case Zd:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function kv(n,e,t,i,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new le,h=new WeakMap,d,f=new WeakMap,u=!1;try{u=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(D,R){return u?new OffscreenCanvas(D,R):Xa("canvas")}function y(D,R,J){let se=1,ce=Te(D);if((ce.width>J||ce.height>J)&&(se=J/Math.max(ce.width,ce.height)),se<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){let re=Math.floor(se*ce.width),ze=Math.floor(se*ce.height);d===void 0&&(d=m(re,ze));let ve=R?m(re,ze):d;return ve.width=re,ve.height=ze,ve.getContext("2d").drawImage(D,0,0,re,ze),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ce.width+"x"+ce.height+") to ("+re+"x"+ze+")."),ve}else return"data"in D&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ce.width+"x"+ce.height+")."),D;return D}function g(D){return D.generateMipmaps}function p(D){n.generateMipmap(D)}function E(D){return D.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?n.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function x(D,R,J,se,ce=!1){if(D!==null){if(n[D]!==void 0)return n[D];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let re=R;if(R===n.RED&&(J===n.FLOAT&&(re=n.R32F),J===n.HALF_FLOAT&&(re=n.R16F),J===n.UNSIGNED_BYTE&&(re=n.R8)),R===n.RED_INTEGER&&(J===n.UNSIGNED_BYTE&&(re=n.R8UI),J===n.UNSIGNED_SHORT&&(re=n.R16UI),J===n.UNSIGNED_INT&&(re=n.R32UI),J===n.BYTE&&(re=n.R8I),J===n.SHORT&&(re=n.R16I),J===n.INT&&(re=n.R32I)),R===n.RG&&(J===n.FLOAT&&(re=n.RG32F),J===n.HALF_FLOAT&&(re=n.RG16F),J===n.UNSIGNED_BYTE&&(re=n.RG8)),R===n.RG_INTEGER&&(J===n.UNSIGNED_BYTE&&(re=n.RG8UI),J===n.UNSIGNED_SHORT&&(re=n.RG16UI),J===n.UNSIGNED_INT&&(re=n.RG32UI),J===n.BYTE&&(re=n.RG8I),J===n.SHORT&&(re=n.RG16I),J===n.INT&&(re=n.RG32I)),R===n.RGB_INTEGER&&(J===n.UNSIGNED_BYTE&&(re=n.RGB8UI),J===n.UNSIGNED_SHORT&&(re=n.RGB16UI),J===n.UNSIGNED_INT&&(re=n.RGB32UI),J===n.BYTE&&(re=n.RGB8I),J===n.SHORT&&(re=n.RGB16I),J===n.INT&&(re=n.RGB32I)),R===n.RGBA_INTEGER&&(J===n.UNSIGNED_BYTE&&(re=n.RGBA8UI),J===n.UNSIGNED_SHORT&&(re=n.RGBA16UI),J===n.UNSIGNED_INT&&(re=n.RGBA32UI),J===n.BYTE&&(re=n.RGBA8I),J===n.SHORT&&(re=n.RGBA16I),J===n.INT&&(re=n.RGBA32I)),R===n.RGB&&J===n.UNSIGNED_INT_5_9_9_9_REV&&(re=n.RGB9_E5),R===n.RGBA){let ze=ce?vo:rt.getTransfer(se);J===n.FLOAT&&(re=n.RGBA32F),J===n.HALF_FLOAT&&(re=n.RGBA16F),J===n.UNSIGNED_BYTE&&(re=ze===pt?n.SRGB8_ALPHA8:n.RGBA8),J===n.UNSIGNED_SHORT_4_4_4_4&&(re=n.RGBA4),J===n.UNSIGNED_SHORT_5_5_5_1&&(re=n.RGB5_A1)}return(re===n.R16F||re===n.R32F||re===n.RG16F||re===n.RG32F||re===n.RGBA16F||re===n.RGBA32F)&&e.get("EXT_color_buffer_float"),re}function v(D,R){let J;return D?R===null||R===ss||R===Gs?J=n.DEPTH24_STENCIL8:R===ei?J=n.DEPTH32F_STENCIL8:R===Lr&&(J=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):R===null||R===ss||R===Gs?J=n.DEPTH_COMPONENT24:R===ei?J=n.DEPTH_COMPONENT32F:R===Lr&&(J=n.DEPTH_COMPONENT16),J}function P(D,R){return g(D)===!0||D.isFramebufferTexture&&D.minFilter!==Cn&&D.minFilter!==Qn?Math.log2(Math.max(R.width,R.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?R.mipmaps.length:1}function _(D){let R=D.target;R.removeEventListener("dispose",_),z(R),R.isVideoTexture&&h.delete(R)}function L(D){let R=D.target;R.removeEventListener("dispose",L),b(R)}function z(D){let R=i.get(D);if(R.__webglInit===void 0)return;let J=D.source,se=f.get(J);if(se){let ce=se[R.__cacheKey];ce.usedTimes--,ce.usedTimes===0&&T(D),Object.keys(se).length===0&&f.delete(J)}i.remove(D)}function T(D){let R=i.get(D);n.deleteTexture(R.__webglTexture);let J=D.source,se=f.get(J);delete se[R.__cacheKey],a.memory.textures--}function b(D){let R=i.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),i.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let se=0;se<6;se++){if(Array.isArray(R.__webglFramebuffer[se]))for(let ce=0;ce<R.__webglFramebuffer[se].length;ce++)n.deleteFramebuffer(R.__webglFramebuffer[se][ce]);else n.deleteFramebuffer(R.__webglFramebuffer[se]);R.__webglDepthbuffer&&n.deleteRenderbuffer(R.__webglDepthbuffer[se])}else{if(Array.isArray(R.__webglFramebuffer))for(let se=0;se<R.__webglFramebuffer.length;se++)n.deleteFramebuffer(R.__webglFramebuffer[se]);else n.deleteFramebuffer(R.__webglFramebuffer);if(R.__webglDepthbuffer&&n.deleteRenderbuffer(R.__webglDepthbuffer),R.__webglMultisampledFramebuffer&&n.deleteFramebuffer(R.__webglMultisampledFramebuffer),R.__webglColorRenderbuffer)for(let se=0;se<R.__webglColorRenderbuffer.length;se++)R.__webglColorRenderbuffer[se]&&n.deleteRenderbuffer(R.__webglColorRenderbuffer[se]);R.__webglDepthRenderbuffer&&n.deleteRenderbuffer(R.__webglDepthRenderbuffer)}let J=D.textures;for(let se=0,ce=J.length;se<ce;se++){let re=i.get(J[se]);re.__webglTexture&&(n.deleteTexture(re.__webglTexture),a.memory.textures--),i.remove(J[se])}i.remove(D)}let O=0;function V(){O=0}function I(){let D=O;return D>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+s.maxTextures),O+=1,D}function M(D){let R=[];return R.push(D.wrapS),R.push(D.wrapT),R.push(D.wrapR||0),R.push(D.magFilter),R.push(D.minFilter),R.push(D.anisotropy),R.push(D.internalFormat),R.push(D.format),R.push(D.type),R.push(D.generateMipmaps),R.push(D.premultiplyAlpha),R.push(D.flipY),R.push(D.unpackAlignment),R.push(D.colorSpace),R.join()}function A(D,R){let J=i.get(D);if(D.isVideoTexture&&me(D),D.isRenderTargetTexture===!1&&D.version>0&&J.__version!==D.version){let se=D.image;if(se===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(se.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{W(J,D,R);return}}t.bindTexture(n.TEXTURE_2D,J.__webglTexture,n.TEXTURE0+R)}function w(D,R){let J=i.get(D);if(D.version>0&&J.__version!==D.version){W(J,D,R);return}t.bindTexture(n.TEXTURE_2D_ARRAY,J.__webglTexture,n.TEXTURE0+R)}function F(D,R){let J=i.get(D);if(D.version>0&&J.__version!==D.version){W(J,D,R);return}t.bindTexture(n.TEXTURE_3D,J.__webglTexture,n.TEXTURE0+R)}function H(D,R){let J=i.get(D);if(D.version>0&&J.__version!==D.version){K(J,D,R);return}t.bindTexture(n.TEXTURE_CUBE_MAP,J.__webglTexture,n.TEXTURE0+R)}let k={[ec]:n.REPEAT,[ns]:n.CLAMP_TO_EDGE,[tc]:n.MIRRORED_REPEAT},Y={[Cn]:n.NEAREST,[km]:n.NEAREST_MIPMAP_NEAREST,[ha]:n.NEAREST_MIPMAP_LINEAR,[Qn]:n.LINEAR,[ll]:n.LINEAR_MIPMAP_NEAREST,[is]:n.LINEAR_MIPMAP_LINEAR},Z={[Wm]:n.NEVER,[Zm]:n.ALWAYS,[Gm]:n.LESS,[sf]:n.LEQUAL,[Xm]:n.EQUAL,[Ym]:n.GEQUAL,[$m]:n.GREATER,[qm]:n.NOTEQUAL};function N(D,R){if(R.type===ei&&e.has("OES_texture_float_linear")===!1&&(R.magFilter===Qn||R.magFilter===ll||R.magFilter===ha||R.magFilter===is||R.minFilter===Qn||R.minFilter===ll||R.minFilter===ha||R.minFilter===is)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(D,n.TEXTURE_WRAP_S,k[R.wrapS]),n.texParameteri(D,n.TEXTURE_WRAP_T,k[R.wrapT]),(D===n.TEXTURE_3D||D===n.TEXTURE_2D_ARRAY)&&n.texParameteri(D,n.TEXTURE_WRAP_R,k[R.wrapR]),n.texParameteri(D,n.TEXTURE_MAG_FILTER,Y[R.magFilter]),n.texParameteri(D,n.TEXTURE_MIN_FILTER,Y[R.minFilter]),R.compareFunction&&(n.texParameteri(D,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(D,n.TEXTURE_COMPARE_FUNC,Z[R.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(R.magFilter===Cn||R.minFilter!==ha&&R.minFilter!==is||R.type===ei&&e.has("OES_texture_float_linear")===!1)return;if(R.anisotropy>1||i.get(R).__currentAnisotropy){let J=e.get("EXT_texture_filter_anisotropic");n.texParameterf(D,J.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(R.anisotropy,s.getMaxAnisotropy())),i.get(R).__currentAnisotropy=R.anisotropy}}}function ie(D,R){let J=!1;D.__webglInit===void 0&&(D.__webglInit=!0,R.addEventListener("dispose",_));let se=R.source,ce=f.get(se);ce===void 0&&(ce={},f.set(se,ce));let re=M(R);if(re!==D.__cacheKey){ce[re]===void 0&&(ce[re]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,J=!0),ce[re].usedTimes++;let ze=ce[D.__cacheKey];ze!==void 0&&(ce[D.__cacheKey].usedTimes--,ze.usedTimes===0&&T(R)),D.__cacheKey=re,D.__webglTexture=ce[re].texture}return J}function W(D,R,J){let se=n.TEXTURE_2D;(R.isDataArrayTexture||R.isCompressedArrayTexture)&&(se=n.TEXTURE_2D_ARRAY),R.isData3DTexture&&(se=n.TEXTURE_3D);let ce=ie(D,R),re=R.source;t.bindTexture(se,D.__webglTexture,n.TEXTURE0+J);let ze=i.get(re);if(re.version!==ze.__version||ce===!0){t.activeTexture(n.TEXTURE0+J);let ve=rt.getPrimaries(rt.workingColorSpace),Ae=R.colorSpace===Pi?null:rt.getPrimaries(R.colorSpace),st=R.colorSpace===Pi||ve===Ae?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,R.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,R.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,st);let fe=y(R.image,!1,s.maxTextureSize);fe=ke(R,fe);let Re=r.convert(R.format,R.colorSpace),Be=r.convert(R.type),Ve=x(R.internalFormat,Re,Be,R.colorSpace,R.isVideoTexture);N(se,R);let Ce,at=R.mipmaps,Ze=R.isVideoTexture!==!0,Et=ze.__version===void 0||ce===!0,G=re.dataReady,_e=P(R,fe);if(R.isDepthTexture)Ve=v(R.format===Xs,R.type),Et&&(Ze?t.texStorage2D(n.TEXTURE_2D,1,Ve,fe.width,fe.height):t.texImage2D(n.TEXTURE_2D,0,Ve,fe.width,fe.height,0,Re,Be,null));else if(R.isDataTexture)if(at.length>0){Ze&&Et&&t.texStorage2D(n.TEXTURE_2D,_e,Ve,at[0].width,at[0].height);for(let te=0,oe=at.length;te<oe;te++)Ce=at[te],Ze?G&&t.texSubImage2D(n.TEXTURE_2D,te,0,0,Ce.width,Ce.height,Re,Be,Ce.data):t.texImage2D(n.TEXTURE_2D,te,Ve,Ce.width,Ce.height,0,Re,Be,Ce.data);R.generateMipmaps=!1}else Ze?(Et&&t.texStorage2D(n.TEXTURE_2D,_e,Ve,fe.width,fe.height),G&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,fe.width,fe.height,Re,Be,fe.data)):t.texImage2D(n.TEXTURE_2D,0,Ve,fe.width,fe.height,0,Re,Be,fe.data);else if(R.isCompressedTexture)if(R.isCompressedArrayTexture){Ze&&Et&&t.texStorage3D(n.TEXTURE_2D_ARRAY,_e,Ve,at[0].width,at[0].height,fe.depth);for(let te=0,oe=at.length;te<oe;te++)if(Ce=at[te],R.format!==Gn)if(Re!==null)if(Ze){if(G)if(R.layerUpdates.size>0){let Se=Cd(Ce.width,Ce.height,R.format,R.type);for(let Me of R.layerUpdates){let Xe=Ce.data.subarray(Me*Se/Ce.data.BYTES_PER_ELEMENT,(Me+1)*Se/Ce.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,te,0,0,Me,Ce.width,Ce.height,1,Re,Xe)}R.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,te,0,0,0,Ce.width,Ce.height,fe.depth,Re,Ce.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,te,Ve,Ce.width,Ce.height,fe.depth,0,Ce.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ze?G&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,te,0,0,0,Ce.width,Ce.height,fe.depth,Re,Be,Ce.data):t.texImage3D(n.TEXTURE_2D_ARRAY,te,Ve,Ce.width,Ce.height,fe.depth,0,Re,Be,Ce.data)}else{Ze&&Et&&t.texStorage2D(n.TEXTURE_2D,_e,Ve,at[0].width,at[0].height);for(let te=0,oe=at.length;te<oe;te++)Ce=at[te],R.format!==Gn?Re!==null?Ze?G&&t.compressedTexSubImage2D(n.TEXTURE_2D,te,0,0,Ce.width,Ce.height,Re,Ce.data):t.compressedTexImage2D(n.TEXTURE_2D,te,Ve,Ce.width,Ce.height,0,Ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ze?G&&t.texSubImage2D(n.TEXTURE_2D,te,0,0,Ce.width,Ce.height,Re,Be,Ce.data):t.texImage2D(n.TEXTURE_2D,te,Ve,Ce.width,Ce.height,0,Re,Be,Ce.data)}else if(R.isDataArrayTexture)if(Ze){if(Et&&t.texStorage3D(n.TEXTURE_2D_ARRAY,_e,Ve,fe.width,fe.height,fe.depth),G)if(R.layerUpdates.size>0){let te=Cd(fe.width,fe.height,R.format,R.type);for(let oe of R.layerUpdates){let Se=fe.data.subarray(oe*te/fe.data.BYTES_PER_ELEMENT,(oe+1)*te/fe.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,oe,fe.width,fe.height,1,Re,Be,Se)}R.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,fe.width,fe.height,fe.depth,Re,Be,fe.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Ve,fe.width,fe.height,fe.depth,0,Re,Be,fe.data);else if(R.isData3DTexture)Ze?(Et&&t.texStorage3D(n.TEXTURE_3D,_e,Ve,fe.width,fe.height,fe.depth),G&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,fe.width,fe.height,fe.depth,Re,Be,fe.data)):t.texImage3D(n.TEXTURE_3D,0,Ve,fe.width,fe.height,fe.depth,0,Re,Be,fe.data);else if(R.isFramebufferTexture){if(Et)if(Ze)t.texStorage2D(n.TEXTURE_2D,_e,Ve,fe.width,fe.height);else{let te=fe.width,oe=fe.height;for(let Se=0;Se<_e;Se++)t.texImage2D(n.TEXTURE_2D,Se,Ve,te,oe,0,Re,Be,null),te>>=1,oe>>=1}}else if(at.length>0){if(Ze&&Et){let te=Te(at[0]);t.texStorage2D(n.TEXTURE_2D,_e,Ve,te.width,te.height)}for(let te=0,oe=at.length;te<oe;te++)Ce=at[te],Ze?G&&t.texSubImage2D(n.TEXTURE_2D,te,0,0,Re,Be,Ce):t.texImage2D(n.TEXTURE_2D,te,Ve,Re,Be,Ce);R.generateMipmaps=!1}else if(Ze){if(Et){let te=Te(fe);t.texStorage2D(n.TEXTURE_2D,_e,Ve,te.width,te.height)}G&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Re,Be,fe)}else t.texImage2D(n.TEXTURE_2D,0,Ve,Re,Be,fe);g(R)&&p(se),ze.__version=re.version,R.onUpdate&&R.onUpdate(R)}D.__version=R.version}function K(D,R,J){if(R.image.length!==6)return;let se=ie(D,R),ce=R.source;t.bindTexture(n.TEXTURE_CUBE_MAP,D.__webglTexture,n.TEXTURE0+J);let re=i.get(ce);if(ce.version!==re.__version||se===!0){t.activeTexture(n.TEXTURE0+J);let ze=rt.getPrimaries(rt.workingColorSpace),ve=R.colorSpace===Pi?null:rt.getPrimaries(R.colorSpace),Ae=R.colorSpace===Pi||ze===ve?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,R.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,R.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ae);let st=R.isCompressedTexture||R.image[0].isCompressedTexture,fe=R.image[0]&&R.image[0].isDataTexture,Re=[];for(let oe=0;oe<6;oe++)!st&&!fe?Re[oe]=y(R.image[oe],!0,s.maxCubemapSize):Re[oe]=fe?R.image[oe].image:R.image[oe],Re[oe]=ke(R,Re[oe]);let Be=Re[0],Ve=r.convert(R.format,R.colorSpace),Ce=r.convert(R.type),at=x(R.internalFormat,Ve,Ce,R.colorSpace),Ze=R.isVideoTexture!==!0,Et=re.__version===void 0||se===!0,G=ce.dataReady,_e=P(R,Be);N(n.TEXTURE_CUBE_MAP,R);let te;if(st){Ze&&Et&&t.texStorage2D(n.TEXTURE_CUBE_MAP,_e,at,Be.width,Be.height);for(let oe=0;oe<6;oe++){te=Re[oe].mipmaps;for(let Se=0;Se<te.length;Se++){let Me=te[Se];R.format!==Gn?Ve!==null?Ze?G&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Se,0,0,Me.width,Me.height,Ve,Me.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Se,at,Me.width,Me.height,0,Me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ze?G&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Se,0,0,Me.width,Me.height,Ve,Ce,Me.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Se,at,Me.width,Me.height,0,Ve,Ce,Me.data)}}}else{if(te=R.mipmaps,Ze&&Et){te.length>0&&_e++;let oe=Te(Re[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,_e,at,oe.width,oe.height)}for(let oe=0;oe<6;oe++)if(fe){Ze?G&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,0,0,Re[oe].width,Re[oe].height,Ve,Ce,Re[oe].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,at,Re[oe].width,Re[oe].height,0,Ve,Ce,Re[oe].data);for(let Se=0;Se<te.length;Se++){let Xe=te[Se].image[oe].image;Ze?G&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Se+1,0,0,Xe.width,Xe.height,Ve,Ce,Xe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Se+1,at,Xe.width,Xe.height,0,Ve,Ce,Xe.data)}}else{Ze?G&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,0,0,Ve,Ce,Re[oe]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,at,Ve,Ce,Re[oe]);for(let Se=0;Se<te.length;Se++){let Me=te[Se];Ze?G&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Se+1,0,0,Ve,Ce,Me.image[oe]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Se+1,at,Ve,Ce,Me.image[oe])}}}g(R)&&p(n.TEXTURE_CUBE_MAP),re.__version=ce.version,R.onUpdate&&R.onUpdate(R)}D.__version=R.version}function ae(D,R,J,se,ce,re){let ze=r.convert(J.format,J.colorSpace),ve=r.convert(J.type),Ae=x(J.internalFormat,ze,ve,J.colorSpace),st=i.get(R),fe=i.get(J);if(fe.__renderTarget=R,!st.__hasExternalTextures){let Re=Math.max(1,R.width>>re),Be=Math.max(1,R.height>>re);ce===n.TEXTURE_3D||ce===n.TEXTURE_2D_ARRAY?t.texImage3D(ce,re,Ae,Re,Be,R.depth,0,ze,ve,null):t.texImage2D(ce,re,Ae,Re,Be,0,ze,ve,null)}t.bindFramebuffer(n.FRAMEBUFFER,D),we(R)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,se,ce,fe.__webglTexture,0,he(R)):(ce===n.TEXTURE_2D||ce>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ce<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,se,ce,fe.__webglTexture,re),t.bindFramebuffer(n.FRAMEBUFFER,null)}function ne(D,R,J){if(n.bindRenderbuffer(n.RENDERBUFFER,D),R.depthBuffer){let se=R.depthTexture,ce=se&&se.isDepthTexture?se.type:null,re=v(R.stencilBuffer,ce),ze=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ve=he(R);we(R)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ve,re,R.width,R.height):J?n.renderbufferStorageMultisample(n.RENDERBUFFER,ve,re,R.width,R.height):n.renderbufferStorage(n.RENDERBUFFER,re,R.width,R.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,ze,n.RENDERBUFFER,D)}else{let se=R.textures;for(let ce=0;ce<se.length;ce++){let re=se[ce],ze=r.convert(re.format,re.colorSpace),ve=r.convert(re.type),Ae=x(re.internalFormat,ze,ve,re.colorSpace),st=he(R);J&&we(R)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,st,Ae,R.width,R.height):we(R)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,st,Ae,R.width,R.height):n.renderbufferStorage(n.RENDERBUFFER,Ae,R.width,R.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function ue(D,R){if(R&&R.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,D),!(R.depthTexture&&R.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let se=i.get(R.depthTexture);se.__renderTarget=R,(!se.__webglTexture||R.depthTexture.image.width!==R.width||R.depthTexture.image.height!==R.height)&&(R.depthTexture.image.width=R.width,R.depthTexture.image.height=R.height,R.depthTexture.needsUpdate=!0),A(R.depthTexture,0);let ce=se.__webglTexture,re=he(R);if(R.depthTexture.format===Os)we(R)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ce,0,re):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ce,0);else if(R.depthTexture.format===Xs)we(R)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ce,0,re):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ce,0);else throw new Error("Unknown depthTexture format")}function xe(D){let R=i.get(D),J=D.isWebGLCubeRenderTarget===!0;if(R.__boundDepthTexture!==D.depthTexture){let se=D.depthTexture;if(R.__depthDisposeCallback&&R.__depthDisposeCallback(),se){let ce=()=>{delete R.__boundDepthTexture,delete R.__depthDisposeCallback,se.removeEventListener("dispose",ce)};se.addEventListener("dispose",ce),R.__depthDisposeCallback=ce}R.__boundDepthTexture=se}if(D.depthTexture&&!R.__autoAllocateDepthBuffer){if(J)throw new Error("target.depthTexture not supported in Cube render targets");ue(R.__webglFramebuffer,D)}else if(J){R.__webglDepthbuffer=[];for(let se=0;se<6;se++)if(t.bindFramebuffer(n.FRAMEBUFFER,R.__webglFramebuffer[se]),R.__webglDepthbuffer[se]===void 0)R.__webglDepthbuffer[se]=n.createRenderbuffer(),ne(R.__webglDepthbuffer[se],D,!1);else{let ce=D.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,re=R.__webglDepthbuffer[se];n.bindRenderbuffer(n.RENDERBUFFER,re),n.framebufferRenderbuffer(n.FRAMEBUFFER,ce,n.RENDERBUFFER,re)}}else if(t.bindFramebuffer(n.FRAMEBUFFER,R.__webglFramebuffer),R.__webglDepthbuffer===void 0)R.__webglDepthbuffer=n.createRenderbuffer(),ne(R.__webglDepthbuffer,D,!1);else{let se=D.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ce=R.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,ce),n.framebufferRenderbuffer(n.FRAMEBUFFER,se,n.RENDERBUFFER,ce)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ee(D,R,J){let se=i.get(D);R!==void 0&&ae(se.__webglFramebuffer,D,D.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),J!==void 0&&xe(D)}function Le(D){let R=D.texture,J=i.get(D),se=i.get(R);D.addEventListener("dispose",L);let ce=D.textures,re=D.isWebGLCubeRenderTarget===!0,ze=ce.length>1;if(ze||(se.__webglTexture===void 0&&(se.__webglTexture=n.createTexture()),se.__version=R.version,a.memory.textures++),re){J.__webglFramebuffer=[];for(let ve=0;ve<6;ve++)if(R.mipmaps&&R.mipmaps.length>0){J.__webglFramebuffer[ve]=[];for(let Ae=0;Ae<R.mipmaps.length;Ae++)J.__webglFramebuffer[ve][Ae]=n.createFramebuffer()}else J.__webglFramebuffer[ve]=n.createFramebuffer()}else{if(R.mipmaps&&R.mipmaps.length>0){J.__webglFramebuffer=[];for(let ve=0;ve<R.mipmaps.length;ve++)J.__webglFramebuffer[ve]=n.createFramebuffer()}else J.__webglFramebuffer=n.createFramebuffer();if(ze)for(let ve=0,Ae=ce.length;ve<Ae;ve++){let st=i.get(ce[ve]);st.__webglTexture===void 0&&(st.__webglTexture=n.createTexture(),a.memory.textures++)}if(D.samples>0&&we(D)===!1){J.__webglMultisampledFramebuffer=n.createFramebuffer(),J.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,J.__webglMultisampledFramebuffer);for(let ve=0;ve<ce.length;ve++){let Ae=ce[ve];J.__webglColorRenderbuffer[ve]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,J.__webglColorRenderbuffer[ve]);let st=r.convert(Ae.format,Ae.colorSpace),fe=r.convert(Ae.type),Re=x(Ae.internalFormat,st,fe,Ae.colorSpace,D.isXRRenderTarget===!0),Be=he(D);n.renderbufferStorageMultisample(n.RENDERBUFFER,Be,Re,D.width,D.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ve,n.RENDERBUFFER,J.__webglColorRenderbuffer[ve])}n.bindRenderbuffer(n.RENDERBUFFER,null),D.depthBuffer&&(J.__webglDepthRenderbuffer=n.createRenderbuffer(),ne(J.__webglDepthRenderbuffer,D,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(re){t.bindTexture(n.TEXTURE_CUBE_MAP,se.__webglTexture),N(n.TEXTURE_CUBE_MAP,R);for(let ve=0;ve<6;ve++)if(R.mipmaps&&R.mipmaps.length>0)for(let Ae=0;Ae<R.mipmaps.length;Ae++)ae(J.__webglFramebuffer[ve][Ae],D,R,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Ae);else ae(J.__webglFramebuffer[ve],D,R,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0);g(R)&&p(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ze){for(let ve=0,Ae=ce.length;ve<Ae;ve++){let st=ce[ve],fe=i.get(st);t.bindTexture(n.TEXTURE_2D,fe.__webglTexture),N(n.TEXTURE_2D,st),ae(J.__webglFramebuffer,D,st,n.COLOR_ATTACHMENT0+ve,n.TEXTURE_2D,0),g(st)&&p(n.TEXTURE_2D)}t.unbindTexture()}else{let ve=n.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(ve=D.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ve,se.__webglTexture),N(ve,R),R.mipmaps&&R.mipmaps.length>0)for(let Ae=0;Ae<R.mipmaps.length;Ae++)ae(J.__webglFramebuffer[Ae],D,R,n.COLOR_ATTACHMENT0,ve,Ae);else ae(J.__webglFramebuffer,D,R,n.COLOR_ATTACHMENT0,ve,0);g(R)&&p(ve),t.unbindTexture()}D.depthBuffer&&xe(D)}function ee(D){let R=D.textures;for(let J=0,se=R.length;J<se;J++){let ce=R[J];if(g(ce)){let re=E(D),ze=i.get(ce).__webglTexture;t.bindTexture(re,ze),p(re),t.unbindTexture()}}}let de=[],B=[];function Ie(D){if(D.samples>0){if(we(D)===!1){let R=D.textures,J=D.width,se=D.height,ce=n.COLOR_BUFFER_BIT,re=D.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ze=i.get(D),ve=R.length>1;if(ve)for(let Ae=0;Ae<R.length;Ae++)t.bindFramebuffer(n.FRAMEBUFFER,ze.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ae,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,ze.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ae,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,ze.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ze.__webglFramebuffer);for(let Ae=0;Ae<R.length;Ae++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(ce|=n.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(ce|=n.STENCIL_BUFFER_BIT)),ve){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,ze.__webglColorRenderbuffer[Ae]);let st=i.get(R[Ae]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,st,0)}n.blitFramebuffer(0,0,J,se,0,0,J,se,ce,n.NEAREST),l===!0&&(de.length=0,B.length=0,de.push(n.COLOR_ATTACHMENT0+Ae),D.depthBuffer&&D.resolveDepthBuffer===!1&&(de.push(re),B.push(re),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,B)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,de))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ve)for(let Ae=0;Ae<R.length;Ae++){t.bindFramebuffer(n.FRAMEBUFFER,ze.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ae,n.RENDERBUFFER,ze.__webglColorRenderbuffer[Ae]);let st=i.get(R[Ae]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,ze.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ae,n.TEXTURE_2D,st,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ze.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&l){let R=D.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[R])}}}function he(D){return Math.min(s.maxSamples,D.samples)}function we(D){let R=i.get(D);return D.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&R.__useRenderToTexture!==!1}function me(D){let R=a.render.frame;h.get(D)!==R&&(h.set(D,R),D.update())}function ke(D,R){let J=D.colorSpace,se=D.format,ce=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||J!==js&&J!==Pi&&(rt.getTransfer(J)===pt?(se!==Gn||ce!==vi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",J)),R}function Te(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(c.width=D.naturalWidth||D.width,c.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(c.width=D.displayWidth,c.height=D.displayHeight):(c.width=D.width,c.height=D.height),c}this.allocateTextureUnit=I,this.resetTextureUnits=V,this.setTexture2D=A,this.setTexture2DArray=w,this.setTexture3D=F,this.setTextureCube=H,this.rebindTextures=Ee,this.setupRenderTarget=Le,this.updateRenderTargetMipmap=ee,this.updateMultisampleRenderTarget=Ie,this.setupDepthRenderbuffer=xe,this.setupFrameBufferTexture=ae,this.useMultisampledRTT=we}function Bv(n,e){function t(i,s=Pi){let r,a=rt.getTransfer(s);if(i===vi)return n.UNSIGNED_BYTE;if(i===Mh)return n.UNSIGNED_SHORT_4_4_4_4;if(i===bh)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Zd)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===qd)return n.BYTE;if(i===Yd)return n.SHORT;if(i===Lr)return n.UNSIGNED_SHORT;if(i===_h)return n.INT;if(i===ss)return n.UNSIGNED_INT;if(i===ei)return n.FLOAT;if(i===qn)return n.HALF_FLOAT;if(i===Jd)return n.ALPHA;if(i===Kd)return n.RGB;if(i===Gn)return n.RGBA;if(i===jd)return n.LUMINANCE;if(i===Qd)return n.LUMINANCE_ALPHA;if(i===Os)return n.DEPTH_COMPONENT;if(i===Xs)return n.DEPTH_STENCIL;if(i===Sh)return n.RED;if(i===Eh)return n.RED_INTEGER;if(i===ef)return n.RG;if(i===wh)return n.RG_INTEGER;if(i===Th)return n.RGBA_INTEGER;if(i===Oa||i===ka||i===Ba||i===Ha)if(a===pt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Oa)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===ka)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Ba)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Ha)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Oa)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===ka)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Ba)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Ha)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===nc||i===ic||i===sc||i===rc)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===nc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===ic)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===sc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===rc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===ac||i===oc||i===lc)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===ac||i===oc)return a===pt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===lc)return a===pt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===cc||i===hc||i===uc||i===dc||i===fc||i===pc||i===mc||i===gc||i===xc||i===yc||i===vc||i===_c||i===Mc||i===bc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===cc)return a===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===hc)return a===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===uc)return a===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===dc)return a===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===fc)return a===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===pc)return a===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===mc)return a===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===gc)return a===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===xc)return a===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===yc)return a===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===vc)return a===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===_c)return a===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Mc)return a===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===bc)return a===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Va||i===Sc||i===Ec)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===Va)return a===pt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Sc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Ec)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===tf||i===wc||i===Tc||i===Ac)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===Va)return r.COMPRESSED_RED_RGTC1_EXT;if(i===wc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Tc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Ac)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Gs?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}var Wc=class extends Jt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},Mt=class extends un{constructor(){super(),this.isGroup=!0,this.type="Group"}},Hv={type:"move"},Rr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Mt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Mt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Mt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let y of e.hand.values()){let g=t.getJointPose(y,i),p=this._getHandJoint(c,y);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=h.position.distanceTo(d.position),u=.02,m=.005;c.inputState.pinching&&f>u+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=u-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Hv)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new Mt;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},Vv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Wv=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Gc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){let s=new Pn,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new mt({vertexShader:Vv,fragmentShader:Wv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Pe(new gn(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Xc=class extends Li{constructor(e,t){super();let i=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,d=null,f=null,u=null,m=null,y=new Gc,g=t.getContextAttributes(),p=null,E=null,x=[],v=[],P=new le,_=null,L=new Jt;L.viewport=new vt;let z=new Jt;z.viewport=new vt;let T=[L,z],b=new Wc,O=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let K=x[W];return K===void 0&&(K=new Rr,x[W]=K),K.getTargetRaySpace()},this.getControllerGrip=function(W){let K=x[W];return K===void 0&&(K=new Rr,x[W]=K),K.getGripSpace()},this.getHand=function(W){let K=x[W];return K===void 0&&(K=new Rr,x[W]=K),K.getHandSpace()};function I(W){let K=v.indexOf(W.inputSource);if(K===-1)return;let ae=x[K];ae!==void 0&&(ae.update(W.inputSource,W.frame,c||a),ae.dispatchEvent({type:W.type,data:W.inputSource}))}function M(){s.removeEventListener("select",I),s.removeEventListener("selectstart",I),s.removeEventListener("selectend",I),s.removeEventListener("squeeze",I),s.removeEventListener("squeezestart",I),s.removeEventListener("squeezeend",I),s.removeEventListener("end",M),s.removeEventListener("inputsourceschange",A);for(let W=0;W<x.length;W++){let K=v[W];K!==null&&(v[W]=null,x[W].disconnect(K))}O=null,V=null,y.reset(),e.setRenderTarget(p),u=null,f=null,d=null,s=null,E=null,ie.stop(),i.isPresenting=!1,e.setPixelRatio(_),e.setSize(P.width,P.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){r=W,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){o=W,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(W){c=W},this.getBaseLayer=function(){return f!==null?f:u},this.getBinding=function(){return d},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(W){if(s=W,s!==null){if(p=e.getRenderTarget(),s.addEventListener("select",I),s.addEventListener("selectstart",I),s.addEventListener("selectend",I),s.addEventListener("squeeze",I),s.addEventListener("squeezestart",I),s.addEventListener("squeezeend",I),s.addEventListener("end",M),s.addEventListener("inputsourceschange",A),g.xrCompatible!==!0&&await t.makeXRCompatible(),_=e.getPixelRatio(),e.getSize(P),s.renderState.layers===void 0){let K={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};u=new XRWebGLLayer(s,t,K),s.updateRenderState({baseLayer:u}),e.setPixelRatio(1),e.setSize(u.framebufferWidth,u.framebufferHeight,!1),E=new mn(u.framebufferWidth,u.framebufferHeight,{format:Gn,type:vi,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let K=null,ae=null,ne=null;g.depth&&(ne=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,K=g.stencil?Xs:Os,ae=g.stencil?Gs:ss);let ue={colorFormat:t.RGBA8,depthFormat:ne,scaleFactor:r};d=new XRWebGLBinding(s,t),f=d.createProjectionLayer(ue),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),E=new mn(f.textureWidth,f.textureHeight,{format:Gn,type:vi,depthTexture:new ja(f.textureWidth,f.textureHeight,ae,void 0,void 0,void 0,void 0,void 0,void 0,K),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),ie.setContext(s),ie.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function A(W){for(let K=0;K<W.removed.length;K++){let ae=W.removed[K],ne=v.indexOf(ae);ne>=0&&(v[ne]=null,x[ne].disconnect(ae))}for(let K=0;K<W.added.length;K++){let ae=W.added[K],ne=v.indexOf(ae);if(ne===-1){for(let xe=0;xe<x.length;xe++)if(xe>=v.length){v.push(ae),ne=xe;break}else if(v[xe]===null){v[xe]=ae,ne=xe;break}if(ne===-1)break}let ue=x[ne];ue&&ue.connect(ae)}}let w=new U,F=new U;function H(W,K,ae){w.setFromMatrixPosition(K.matrixWorld),F.setFromMatrixPosition(ae.matrixWorld);let ne=w.distanceTo(F),ue=K.projectionMatrix.elements,xe=ae.projectionMatrix.elements,Ee=ue[14]/(ue[10]-1),Le=ue[14]/(ue[10]+1),ee=(ue[9]+1)/ue[5],de=(ue[9]-1)/ue[5],B=(ue[8]-1)/ue[0],Ie=(xe[8]+1)/xe[0],he=Ee*B,we=Ee*Ie,me=ne/(-B+Ie),ke=me*-B;if(K.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(ke),W.translateZ(me),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert(),ue[10]===-1)W.projectionMatrix.copy(K.projectionMatrix),W.projectionMatrixInverse.copy(K.projectionMatrixInverse);else{let Te=Ee+me,D=Le+me,R=he-ke,J=we+(ne-ke),se=ee*Le/D*Te,ce=de*Le/D*Te;W.projectionMatrix.makePerspective(R,J,se,ce,Te,D),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}}function k(W,K){K===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(K.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(s===null)return;let K=W.near,ae=W.far;y.texture!==null&&(y.depthNear>0&&(K=y.depthNear),y.depthFar>0&&(ae=y.depthFar)),b.near=z.near=L.near=K,b.far=z.far=L.far=ae,(O!==b.near||V!==b.far)&&(s.updateRenderState({depthNear:b.near,depthFar:b.far}),O=b.near,V=b.far),L.layers.mask=W.layers.mask|2,z.layers.mask=W.layers.mask|4,b.layers.mask=L.layers.mask|z.layers.mask;let ne=W.parent,ue=b.cameras;k(b,ne);for(let xe=0;xe<ue.length;xe++)k(ue[xe],ne);ue.length===2?H(b,L,z):b.projectionMatrix.copy(L.projectionMatrix),Y(W,b,ne)};function Y(W,K,ae){ae===null?W.matrix.copy(K.matrixWorld):(W.matrix.copy(ae.matrixWorld),W.matrix.invert(),W.matrix.multiply(K.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(K.projectionMatrix),W.projectionMatrixInverse.copy(K.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=Cc*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(f===null&&u===null))return l},this.setFoveation=function(W){l=W,f!==null&&(f.fixedFoveation=W),u!==null&&u.fixedFoveation!==void 0&&(u.fixedFoveation=W)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(b)};let Z=null;function N(W,K){if(h=K.getViewerPose(c||a),m=K,h!==null){let ae=h.views;u!==null&&(e.setRenderTargetFramebuffer(E,u.framebuffer),e.setRenderTarget(E));let ne=!1;ae.length!==b.cameras.length&&(b.cameras.length=0,ne=!0);for(let xe=0;xe<ae.length;xe++){let Ee=ae[xe],Le=null;if(u!==null)Le=u.getViewport(Ee);else{let de=d.getViewSubImage(f,Ee);Le=de.viewport,xe===0&&(e.setRenderTargetTextures(E,de.colorTexture,f.ignoreDepthValues?void 0:de.depthStencilTexture),e.setRenderTarget(E))}let ee=T[xe];ee===void 0&&(ee=new Jt,ee.layers.enable(xe),ee.viewport=new vt,T[xe]=ee),ee.matrix.fromArray(Ee.transform.matrix),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale),ee.projectionMatrix.fromArray(Ee.projectionMatrix),ee.projectionMatrixInverse.copy(ee.projectionMatrix).invert(),ee.viewport.set(Le.x,Le.y,Le.width,Le.height),xe===0&&(b.matrix.copy(ee.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),ne===!0&&b.cameras.push(ee)}let ue=s.enabledFeatures;if(ue&&ue.includes("depth-sensing")){let xe=d.getDepthInformation(ae[0]);xe&&xe.isValid&&xe.texture&&y.init(e,xe,s.renderState)}}for(let ae=0;ae<x.length;ae++){let ne=v[ae],ue=x[ae];ne!==null&&ue!==void 0&&ue.update(ne,K,c||a)}Z&&Z(W,K),K.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:K}),m=null}let ie=new lf;ie.setAnimationLoop(N),this.setAnimationLoop=function(W){Z=W},this.dispose=function(){}}},Ki=new hn,Gv=new Ge;function Xv(n,e){function t(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function i(g,p){p.color.getRGB(g.fogColor.value,of(n)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function s(g,p,E,x,v){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(g,p):p.isMeshToonMaterial?(r(g,p),d(g,p)):p.isMeshPhongMaterial?(r(g,p),h(g,p)):p.isMeshStandardMaterial?(r(g,p),f(g,p),p.isMeshPhysicalMaterial&&u(g,p,v)):p.isMeshMatcapMaterial?(r(g,p),m(g,p)):p.isMeshDepthMaterial?r(g,p):p.isMeshDistanceMaterial?(r(g,p),y(g,p)):p.isMeshNormalMaterial?r(g,p):p.isLineBasicMaterial?(a(g,p),p.isLineDashedMaterial&&o(g,p)):p.isPointsMaterial?l(g,p,E,x):p.isSpriteMaterial?c(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,t(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===nn&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,t(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===nn&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,t(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,t(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);let E=e.get(p),x=E.envMap,v=E.envMapRotation;x&&(g.envMap.value=x,Ki.copy(v),Ki.x*=-1,Ki.y*=-1,Ki.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Ki.y*=-1,Ki.z*=-1),g.envMapRotation.value.setFromMatrix4(Gv.makeRotationFromEuler(Ki)),g.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,g.aoMapTransform))}function a(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform))}function o(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function l(g,p,E,x){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*E,g.scale.value=x*.5,p.map&&(g.map.value=p.map,t(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function c(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function h(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function d(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function f(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function u(g,p,E){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===nn&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=E.texture,g.transmissionSamplerSize.value.set(E.width,E.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function y(g,p){let E=e.get(p).light;g.referencePosition.value.setFromMatrixPosition(E.matrixWorld),g.nearDistance.value=E.shadow.camera.near,g.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function $v(n,e,t,i){let s={},r={},a=[],o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(E,x){let v=x.program;i.uniformBlockBinding(E,v)}function c(E,x){let v=s[E.id];v===void 0&&(m(E),v=h(E),s[E.id]=v,E.addEventListener("dispose",g));let P=x.program;i.updateUBOMapping(E,P);let _=e.render.frame;r[E.id]!==_&&(f(E),r[E.id]=_)}function h(E){let x=d();E.__bindingPointIndex=x;let v=n.createBuffer(),P=E.__size,_=E.usage;return n.bindBuffer(n.UNIFORM_BUFFER,v),n.bufferData(n.UNIFORM_BUFFER,P,_),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,x,v),v}function d(){for(let E=0;E<o;E++)if(a.indexOf(E)===-1)return a.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(E){let x=s[E.id],v=E.uniforms,P=E.__cache;n.bindBuffer(n.UNIFORM_BUFFER,x);for(let _=0,L=v.length;_<L;_++){let z=Array.isArray(v[_])?v[_]:[v[_]];for(let T=0,b=z.length;T<b;T++){let O=z[T];if(u(O,_,T,P)===!0){let V=O.__offset,I=Array.isArray(O.value)?O.value:[O.value],M=0;for(let A=0;A<I.length;A++){let w=I[A],F=y(w);typeof w=="number"||typeof w=="boolean"?(O.__data[0]=w,n.bufferSubData(n.UNIFORM_BUFFER,V+M,O.__data)):w.isMatrix3?(O.__data[0]=w.elements[0],O.__data[1]=w.elements[1],O.__data[2]=w.elements[2],O.__data[3]=0,O.__data[4]=w.elements[3],O.__data[5]=w.elements[4],O.__data[6]=w.elements[5],O.__data[7]=0,O.__data[8]=w.elements[6],O.__data[9]=w.elements[7],O.__data[10]=w.elements[8],O.__data[11]=0):(w.toArray(O.__data,M),M+=F.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,V,O.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function u(E,x,v,P){let _=E.value,L=x+"_"+v;if(P[L]===void 0)return typeof _=="number"||typeof _=="boolean"?P[L]=_:P[L]=_.clone(),!0;{let z=P[L];if(typeof _=="number"||typeof _=="boolean"){if(z!==_)return P[L]=_,!0}else if(z.equals(_)===!1)return z.copy(_),!0}return!1}function m(E){let x=E.uniforms,v=0,P=16;for(let L=0,z=x.length;L<z;L++){let T=Array.isArray(x[L])?x[L]:[x[L]];for(let b=0,O=T.length;b<O;b++){let V=T[b],I=Array.isArray(V.value)?V.value:[V.value];for(let M=0,A=I.length;M<A;M++){let w=I[M],F=y(w),H=v%P,k=H%F.boundary,Y=H+k;v+=k,Y!==0&&P-Y<F.storage&&(v+=P-Y),V.__data=new Float32Array(F.storage/Float32Array.BYTES_PER_ELEMENT),V.__offset=v,v+=F.storage}}}let _=v%P;return _>0&&(v+=P-_),E.__size=v,E.__cache={},this}function y(E){let x={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(x.boundary=4,x.storage=4):E.isVector2?(x.boundary=8,x.storage=8):E.isVector3||E.isColor?(x.boundary=16,x.storage=12):E.isVector4?(x.boundary=16,x.storage=16):E.isMatrix3?(x.boundary=48,x.storage=48):E.isMatrix4?(x.boundary=64,x.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),x}function g(E){let x=E.target;x.removeEventListener("dispose",g);let v=a.indexOf(x.__bindingPointIndex);a.splice(v,1),n.deleteBuffer(s[x.id]),delete s[x.id],delete r[x.id]}function p(){for(let E in s)n.deleteBuffer(s[E]);a=[],s={},r={}}return{bind:l,update:c,dispose:p}}var Ys=class{constructor(e={}){let{canvas:t=Km(),context:i=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let u;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");u=i.getContextAttributes().alpha}else u=a;let m=new Uint32Array(4),y=new Int32Array(4),g=null,p=null,E=[],x=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=cn,this.toneMapping=Ii,this.toneMappingExposure=1;let v=this,P=!1,_=0,L=0,z=null,T=-1,b=null,O=new vt,V=new vt,I=null,M=new ge(0),A=0,w=t.width,F=t.height,H=1,k=null,Y=null,Z=new vt(0,0,w,F),N=new vt(0,0,w,F),ie=!1,W=new Ur,K=!1,ae=!1,ne=new Ge,ue=new Ge,xe=new U,Ee=new vt,Le={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ee=!1;function de(){return z===null?H:1}let B=i;function Ie(C,X){return t.getContext(C,X)}try{let C={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${ph}`),t.addEventListener("webglcontextlost",oe,!1),t.addEventListener("webglcontextrestored",Se,!1),t.addEventListener("webglcontextcreationerror",Me,!1),B===null){let X="webgl2";if(B=Ie(X,C),B===null)throw Ie(X)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let he,we,me,ke,Te,D,R,J,se,ce,re,ze,ve,Ae,st,fe,Re,Be,Ve,Ce,at,Ze,Et,G;function _e(){he=new ly(B),he.init(),Ze=new Bv(B,he),we=new ny(B,he,e,Ze),me=new Fv(B,he),we.reverseDepthBuffer&&f&&me.buffers.depth.setReversed(!0),ke=new uy(B),Te=new Ev,D=new kv(B,he,me,Te,we,Ze,ke),R=new sy(v),J=new oy(v),se=new y0(B),Et=new ey(B,se),ce=new cy(B,se,ke,Et),re=new fy(B,ce,se,ke),Ve=new dy(B,we,D),fe=new iy(Te),ze=new Sv(v,R,J,he,we,Et,fe),ve=new Xv(v,Te),Ae=new Tv,st=new Lv(he),Be=new Qx(v,R,J,me,re,u,l),Re=new Uv(v,re,we),G=new $v(B,ke,we,me),Ce=new ty(B,he,ke),at=new hy(B,he,ke),ke.programs=ze.programs,v.capabilities=we,v.extensions=he,v.properties=Te,v.renderLists=Ae,v.shadowMap=Re,v.state=me,v.info=ke}_e();let te=new Xc(v,B);this.xr=te,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){let C=he.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){let C=he.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(C){C!==void 0&&(H=C,this.setSize(w,F,!1))},this.getSize=function(C){return C.set(w,F)},this.setSize=function(C,X,j=!0){if(te.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}w=C,F=X,t.width=Math.floor(C*H),t.height=Math.floor(X*H),j===!0&&(t.style.width=C+"px",t.style.height=X+"px"),this.setViewport(0,0,C,X)},this.getDrawingBufferSize=function(C){return C.set(w*H,F*H).floor()},this.setDrawingBufferSize=function(C,X,j){w=C,F=X,H=j,t.width=Math.floor(C*j),t.height=Math.floor(X*j),this.setViewport(0,0,C,X)},this.getCurrentViewport=function(C){return C.copy(O)},this.getViewport=function(C){return C.copy(Z)},this.setViewport=function(C,X,j,Q){C.isVector4?Z.set(C.x,C.y,C.z,C.w):Z.set(C,X,j,Q),me.viewport(O.copy(Z).multiplyScalar(H).round())},this.getScissor=function(C){return C.copy(N)},this.setScissor=function(C,X,j,Q){C.isVector4?N.set(C.x,C.y,C.z,C.w):N.set(C,X,j,Q),me.scissor(V.copy(N).multiplyScalar(H).round())},this.getScissorTest=function(){return ie},this.setScissorTest=function(C){me.setScissorTest(ie=C)},this.setOpaqueSort=function(C){k=C},this.setTransparentSort=function(C){Y=C},this.getClearColor=function(C){return C.copy(Be.getClearColor())},this.setClearColor=function(){Be.setClearColor.apply(Be,arguments)},this.getClearAlpha=function(){return Be.getClearAlpha()},this.setClearAlpha=function(){Be.setClearAlpha.apply(Be,arguments)},this.clear=function(C=!0,X=!0,j=!0){let Q=0;if(C){let $=!1;if(z!==null){let pe=z.texture.format;$=pe===Th||pe===wh||pe===Eh}if($){let pe=z.texture.type,be=pe===vi||pe===ss||pe===Lr||pe===Gs||pe===Mh||pe===bh,Ue=Be.getClearColor(),Ne=Be.getClearAlpha(),We=Ue.r,$e=Ue.g,Fe=Ue.b;be?(m[0]=We,m[1]=$e,m[2]=Fe,m[3]=Ne,B.clearBufferuiv(B.COLOR,0,m)):(y[0]=We,y[1]=$e,y[2]=Fe,y[3]=Ne,B.clearBufferiv(B.COLOR,0,y))}else Q|=B.COLOR_BUFFER_BIT}X&&(Q|=B.DEPTH_BUFFER_BIT),j&&(Q|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B.clear(Q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",oe,!1),t.removeEventListener("webglcontextrestored",Se,!1),t.removeEventListener("webglcontextcreationerror",Me,!1),Ae.dispose(),st.dispose(),Te.dispose(),R.dispose(),J.dispose(),re.dispose(),Et.dispose(),G.dispose(),ze.dispose(),te.dispose(),te.removeEventListener("sessionstart",Su),te.removeEventListener("sessionend",Eu),Xi.stop()};function oe(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),P=!0}function Se(){console.log("THREE.WebGLRenderer: Context Restored."),P=!1;let C=ke.autoReset,X=Re.enabled,j=Re.autoUpdate,Q=Re.needsUpdate,$=Re.type;_e(),ke.autoReset=C,Re.enabled=X,Re.autoUpdate=j,Re.needsUpdate=Q,Re.type=$}function Me(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function Xe(C){let X=C.target;X.removeEventListener("dispose",Xe),Ht(X)}function Ht(C){an(C),Te.remove(C)}function an(C){let X=Te.get(C).programs;X!==void 0&&(X.forEach(function(j){ze.releaseProgram(j)}),C.isShaderMaterial&&ze.releaseShaderCache(C))}this.renderBufferDirect=function(C,X,j,Q,$,pe){X===null&&(X=Le);let be=$.isMesh&&$.matrixWorld.determinant()<0,Ue=dm(C,X,j,Q,$);me.setMaterial(Q,be);let Ne=j.index,We=1;if(Q.wireframe===!0){if(Ne=ce.getWireframeAttribute(j),Ne===void 0)return;We=2}let $e=j.drawRange,Fe=j.attributes.position,ot=$e.start*We,wt=($e.start+$e.count)*We;pe!==null&&(ot=Math.max(ot,pe.start*We),wt=Math.min(wt,(pe.start+pe.count)*We)),Ne!==null?(ot=Math.max(ot,0),wt=Math.min(wt,Ne.count)):Fe!=null&&(ot=Math.max(ot,0),wt=Math.min(wt,Fe.count));let Pt=wt-ot;if(Pt<0||Pt===1/0)return;Et.setup($,Q,Ue,j,Ne);let vn,dt=Ce;if(Ne!==null&&(vn=se.get(Ne),dt=at,dt.setIndex(vn)),$.isMesh)Q.wireframe===!0?(me.setLineWidth(Q.wireframeLinewidth*de()),dt.setMode(B.LINES)):dt.setMode(B.TRIANGLES);else if($.isLine){let Oe=Q.linewidth;Oe===void 0&&(Oe=1),me.setLineWidth(Oe*de()),$.isLineSegments?dt.setMode(B.LINES):$.isLineLoop?dt.setMode(B.LINE_LOOP):dt.setMode(B.LINE_STRIP)}else $.isPoints?dt.setMode(B.POINTS):$.isSprite&&dt.setMode(B.TRIANGLES);if($.isBatchedMesh)if($._multiDrawInstances!==null)dt.renderMultiDrawInstances($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount,$._multiDrawInstances);else if(he.get("WEBGL_multi_draw"))dt.renderMultiDraw($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount);else{let Oe=$._multiDrawStarts,hi=$._multiDrawCounts,ft=$._multiDrawCount,kn=Ne?se.get(Ne).bytesPerElement:1,vs=Te.get(Q).currentProgram.getUniforms();for(let Tn=0;Tn<ft;Tn++)vs.setValue(B,"_gl_DrawID",Tn),dt.render(Oe[Tn]/kn,hi[Tn])}else if($.isInstancedMesh)dt.renderInstances(ot,Pt,$.count);else if(j.isInstancedBufferGeometry){let Oe=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,hi=Math.min(j.instanceCount,Oe);dt.renderInstances(ot,Pt,hi)}else dt.render(ot,Pt)};function gt(C,X,j){C.transparent===!0&&C.side===Dt&&C.forceSinglePass===!1?(C.side=nn,C.needsUpdate=!0,ca(C,X,j),C.side=ni,C.needsUpdate=!0,ca(C,X,j),C.side=Dt):ca(C,X,j)}this.compile=function(C,X,j=null){j===null&&(j=C),p=st.get(j),p.init(X),x.push(p),j.traverseVisible(function($){$.isLight&&$.layers.test(X.layers)&&(p.pushLight($),$.castShadow&&p.pushShadow($))}),C!==j&&C.traverseVisible(function($){$.isLight&&$.layers.test(X.layers)&&(p.pushLight($),$.castShadow&&p.pushShadow($))}),p.setupLights();let Q=new Set;return C.traverse(function($){if(!($.isMesh||$.isPoints||$.isLine||$.isSprite))return;let pe=$.material;if(pe)if(Array.isArray(pe))for(let be=0;be<pe.length;be++){let Ue=pe[be];gt(Ue,j,$),Q.add(Ue)}else gt(pe,j,$),Q.add(pe)}),x.pop(),p=null,Q},this.compileAsync=function(C,X,j=null){let Q=this.compile(C,X,j);return new Promise($=>{function pe(){if(Q.forEach(function(be){Te.get(be).currentProgram.isReady()&&Q.delete(be)}),Q.size===0){$(C);return}setTimeout(pe,10)}he.get("KHR_parallel_shader_compile")!==null?pe():setTimeout(pe,10)})};let On=null;function ci(C){On&&On(C)}function Su(){Xi.stop()}function Eu(){Xi.start()}let Xi=new lf;Xi.setAnimationLoop(ci),typeof self<"u"&&Xi.setContext(self),this.setAnimationLoop=function(C){On=C,te.setAnimationLoop(C),C===null?Xi.stop():Xi.start()},te.addEventListener("sessionstart",Su),te.addEventListener("sessionend",Eu),this.render=function(C,X){if(X!==void 0&&X.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),te.enabled===!0&&te.isPresenting===!0&&(te.cameraAutoUpdate===!0&&te.updateCamera(X),X=te.getCamera()),C.isScene===!0&&C.onBeforeRender(v,C,X,z),p=st.get(C,x.length),p.init(X),x.push(p),ue.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),W.setFromProjectionMatrix(ue),ae=this.localClippingEnabled,K=fe.init(this.clippingPlanes,ae),g=Ae.get(C,E.length),g.init(),E.push(g),te.enabled===!0&&te.isPresenting===!0){let pe=v.xr.getDepthSensingMesh();pe!==null&&ol(pe,X,-1/0,v.sortObjects)}ol(C,X,0,v.sortObjects),g.finish(),v.sortObjects===!0&&g.sort(k,Y),ee=te.enabled===!1||te.isPresenting===!1||te.hasDepthSensing()===!1,ee&&Be.addToRenderList(g,C),this.info.render.frame++,K===!0&&fe.beginShadows();let j=p.state.shadowsArray;Re.render(j,C,X),K===!0&&fe.endShadows(),this.info.autoReset===!0&&this.info.reset();let Q=g.opaque,$=g.transmissive;if(p.setupLights(),X.isArrayCamera){let pe=X.cameras;if($.length>0)for(let be=0,Ue=pe.length;be<Ue;be++){let Ne=pe[be];Tu(Q,$,C,Ne)}ee&&Be.render(C);for(let be=0,Ue=pe.length;be<Ue;be++){let Ne=pe[be];wu(g,C,Ne,Ne.viewport)}}else $.length>0&&Tu(Q,$,C,X),ee&&Be.render(C),wu(g,C,X);z!==null&&(D.updateMultisampleRenderTarget(z),D.updateRenderTargetMipmap(z)),C.isScene===!0&&C.onAfterRender(v,C,X),Et.resetDefaultState(),T=-1,b=null,x.pop(),x.length>0?(p=x[x.length-1],K===!0&&fe.setGlobalState(v.clippingPlanes,p.state.camera)):p=null,E.pop(),E.length>0?g=E[E.length-1]:g=null};function ol(C,X,j,Q){if(C.visible===!1)return;if(C.layers.test(X.layers)){if(C.isGroup)j=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(X);else if(C.isLight)p.pushLight(C),C.castShadow&&p.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||W.intersectsSprite(C)){Q&&Ee.setFromMatrixPosition(C.matrixWorld).applyMatrix4(ue);let be=re.update(C),Ue=C.material;Ue.visible&&g.push(C,be,Ue,j,Ee.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||W.intersectsObject(C))){let be=re.update(C),Ue=C.material;if(Q&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),Ee.copy(C.boundingSphere.center)):(be.boundingSphere===null&&be.computeBoundingSphere(),Ee.copy(be.boundingSphere.center)),Ee.applyMatrix4(C.matrixWorld).applyMatrix4(ue)),Array.isArray(Ue)){let Ne=be.groups;for(let We=0,$e=Ne.length;We<$e;We++){let Fe=Ne[We],ot=Ue[Fe.materialIndex];ot&&ot.visible&&g.push(C,be,ot,j,Ee.z,Fe)}}else Ue.visible&&g.push(C,be,Ue,j,Ee.z,null)}}let pe=C.children;for(let be=0,Ue=pe.length;be<Ue;be++)ol(pe[be],X,j,Q)}function wu(C,X,j,Q){let $=C.opaque,pe=C.transmissive,be=C.transparent;p.setupLightsView(j),K===!0&&fe.setGlobalState(v.clippingPlanes,j),Q&&me.viewport(O.copy(Q)),$.length>0&&la($,X,j),pe.length>0&&la(pe,X,j),be.length>0&&la(be,X,j),me.buffers.depth.setTest(!0),me.buffers.depth.setMask(!0),me.buffers.color.setMask(!0),me.setPolygonOffset(!1)}function Tu(C,X,j,Q){if((j.isScene===!0?j.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[Q.id]===void 0&&(p.state.transmissionRenderTarget[Q.id]=new mn(1,1,{generateMipmaps:!0,type:he.has("EXT_color_buffer_half_float")||he.has("EXT_color_buffer_float")?qn:vi,minFilter:is,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:rt.workingColorSpace}));let pe=p.state.transmissionRenderTarget[Q.id],be=Q.viewport||O;pe.setSize(be.z,be.w);let Ue=v.getRenderTarget();v.setRenderTarget(pe),v.getClearColor(M),A=v.getClearAlpha(),A<1&&v.setClearColor(16777215,.5),v.clear(),ee&&Be.render(j);let Ne=v.toneMapping;v.toneMapping=Ii;let We=Q.viewport;if(Q.viewport!==void 0&&(Q.viewport=void 0),p.setupLightsView(Q),K===!0&&fe.setGlobalState(v.clippingPlanes,Q),la(C,j,Q),D.updateMultisampleRenderTarget(pe),D.updateRenderTargetMipmap(pe),he.has("WEBGL_multisampled_render_to_texture")===!1){let $e=!1;for(let Fe=0,ot=X.length;Fe<ot;Fe++){let wt=X[Fe],Pt=wt.object,vn=wt.geometry,dt=wt.material,Oe=wt.group;if(dt.side===Dt&&Pt.layers.test(Q.layers)){let hi=dt.side;dt.side=nn,dt.needsUpdate=!0,Au(Pt,j,Q,vn,dt,Oe),dt.side=hi,dt.needsUpdate=!0,$e=!0}}$e===!0&&(D.updateMultisampleRenderTarget(pe),D.updateRenderTargetMipmap(pe))}v.setRenderTarget(Ue),v.setClearColor(M,A),We!==void 0&&(Q.viewport=We),v.toneMapping=Ne}function la(C,X,j){let Q=X.isScene===!0?X.overrideMaterial:null;for(let $=0,pe=C.length;$<pe;$++){let be=C[$],Ue=be.object,Ne=be.geometry,We=Q===null?be.material:Q,$e=be.group;Ue.layers.test(j.layers)&&Au(Ue,X,j,Ne,We,$e)}}function Au(C,X,j,Q,$,pe){C.onBeforeRender(v,X,j,Q,$,pe),C.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),$.onBeforeRender(v,X,j,Q,C,pe),$.transparent===!0&&$.side===Dt&&$.forceSinglePass===!1?($.side=nn,$.needsUpdate=!0,v.renderBufferDirect(j,X,Q,$,C,pe),$.side=ni,$.needsUpdate=!0,v.renderBufferDirect(j,X,Q,$,C,pe),$.side=Dt):v.renderBufferDirect(j,X,Q,$,C,pe),C.onAfterRender(v,X,j,Q,$,pe)}function ca(C,X,j){X.isScene!==!0&&(X=Le);let Q=Te.get(C),$=p.state.lights,pe=p.state.shadowsArray,be=$.state.version,Ue=ze.getParameters(C,$.state,pe,X,j),Ne=ze.getProgramCacheKey(Ue),We=Q.programs;Q.environment=C.isMeshStandardMaterial?X.environment:null,Q.fog=X.fog,Q.envMap=(C.isMeshStandardMaterial?J:R).get(C.envMap||Q.environment),Q.envMapRotation=Q.environment!==null&&C.envMap===null?X.environmentRotation:C.envMapRotation,We===void 0&&(C.addEventListener("dispose",Xe),We=new Map,Q.programs=We);let $e=We.get(Ne);if($e!==void 0){if(Q.currentProgram===$e&&Q.lightsStateVersion===be)return Cu(C,Ue),$e}else Ue.uniforms=ze.getUniforms(C),C.onBeforeCompile(Ue,v),$e=ze.acquireProgram(Ue,Ne),We.set(Ne,$e),Q.uniforms=Ue.uniforms;let Fe=Q.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Fe.clippingPlanes=fe.uniform),Cu(C,Ue),Q.needsLights=pm(C),Q.lightsStateVersion=be,Q.needsLights&&(Fe.ambientLightColor.value=$.state.ambient,Fe.lightProbe.value=$.state.probe,Fe.directionalLights.value=$.state.directional,Fe.directionalLightShadows.value=$.state.directionalShadow,Fe.spotLights.value=$.state.spot,Fe.spotLightShadows.value=$.state.spotShadow,Fe.rectAreaLights.value=$.state.rectArea,Fe.ltc_1.value=$.state.rectAreaLTC1,Fe.ltc_2.value=$.state.rectAreaLTC2,Fe.pointLights.value=$.state.point,Fe.pointLightShadows.value=$.state.pointShadow,Fe.hemisphereLights.value=$.state.hemi,Fe.directionalShadowMap.value=$.state.directionalShadowMap,Fe.directionalShadowMatrix.value=$.state.directionalShadowMatrix,Fe.spotShadowMap.value=$.state.spotShadowMap,Fe.spotLightMatrix.value=$.state.spotLightMatrix,Fe.spotLightMap.value=$.state.spotLightMap,Fe.pointShadowMap.value=$.state.pointShadowMap,Fe.pointShadowMatrix.value=$.state.pointShadowMatrix),Q.currentProgram=$e,Q.uniformsList=null,$e}function Ru(C){if(C.uniformsList===null){let X=C.currentProgram.getUniforms();C.uniformsList=Bs.seqWithValue(X.seq,C.uniforms)}return C.uniformsList}function Cu(C,X){let j=Te.get(C);j.outputColorSpace=X.outputColorSpace,j.batching=X.batching,j.batchingColor=X.batchingColor,j.instancing=X.instancing,j.instancingColor=X.instancingColor,j.instancingMorph=X.instancingMorph,j.skinning=X.skinning,j.morphTargets=X.morphTargets,j.morphNormals=X.morphNormals,j.morphColors=X.morphColors,j.morphTargetsCount=X.morphTargetsCount,j.numClippingPlanes=X.numClippingPlanes,j.numIntersection=X.numClipIntersection,j.vertexAlphas=X.vertexAlphas,j.vertexTangents=X.vertexTangents,j.toneMapping=X.toneMapping}function dm(C,X,j,Q,$){X.isScene!==!0&&(X=Le),D.resetTextureUnits();let pe=X.fog,be=Q.isMeshStandardMaterial?X.environment:null,Ue=z===null?v.outputColorSpace:z.isXRRenderTarget===!0?z.texture.colorSpace:js,Ne=(Q.isMeshStandardMaterial?J:R).get(Q.envMap||be),We=Q.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,$e=!!j.attributes.tangent&&(!!Q.normalMap||Q.anisotropy>0),Fe=!!j.morphAttributes.position,ot=!!j.morphAttributes.normal,wt=!!j.morphAttributes.color,Pt=Ii;Q.toneMapped&&(z===null||z.isXRRenderTarget===!0)&&(Pt=v.toneMapping);let vn=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,dt=vn!==void 0?vn.length:0,Oe=Te.get(Q),hi=p.state.lights;if(K===!0&&(ae===!0||C!==b)){let zn=C===b&&Q.id===T;fe.setState(Q,C,zn)}let ft=!1;Q.version===Oe.__version?(Oe.needsLights&&Oe.lightsStateVersion!==hi.state.version||Oe.outputColorSpace!==Ue||$.isBatchedMesh&&Oe.batching===!1||!$.isBatchedMesh&&Oe.batching===!0||$.isBatchedMesh&&Oe.batchingColor===!0&&$.colorTexture===null||$.isBatchedMesh&&Oe.batchingColor===!1&&$.colorTexture!==null||$.isInstancedMesh&&Oe.instancing===!1||!$.isInstancedMesh&&Oe.instancing===!0||$.isSkinnedMesh&&Oe.skinning===!1||!$.isSkinnedMesh&&Oe.skinning===!0||$.isInstancedMesh&&Oe.instancingColor===!0&&$.instanceColor===null||$.isInstancedMesh&&Oe.instancingColor===!1&&$.instanceColor!==null||$.isInstancedMesh&&Oe.instancingMorph===!0&&$.morphTexture===null||$.isInstancedMesh&&Oe.instancingMorph===!1&&$.morphTexture!==null||Oe.envMap!==Ne||Q.fog===!0&&Oe.fog!==pe||Oe.numClippingPlanes!==void 0&&(Oe.numClippingPlanes!==fe.numPlanes||Oe.numIntersection!==fe.numIntersection)||Oe.vertexAlphas!==We||Oe.vertexTangents!==$e||Oe.morphTargets!==Fe||Oe.morphNormals!==ot||Oe.morphColors!==wt||Oe.toneMapping!==Pt||Oe.morphTargetsCount!==dt)&&(ft=!0):(ft=!0,Oe.__version=Q.version);let kn=Oe.currentProgram;ft===!0&&(kn=ca(Q,X,$));let vs=!1,Tn=!1,gr=!1,It=kn.getUniforms(),Kn=Oe.uniforms;if(me.useProgram(kn.program)&&(vs=!0,Tn=!0,gr=!0),Q.id!==T&&(T=Q.id,Tn=!0),vs||b!==C){me.buffers.depth.getReversed()?(ne.copy(C.projectionMatrix),Qm(ne),e0(ne),It.setValue(B,"projectionMatrix",ne)):It.setValue(B,"projectionMatrix",C.projectionMatrix),It.setValue(B,"viewMatrix",C.matrixWorldInverse);let bi=It.map.cameraPosition;bi!==void 0&&bi.setValue(B,xe.setFromMatrixPosition(C.matrixWorld)),we.logarithmicDepthBuffer&&It.setValue(B,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(Q.isMeshPhongMaterial||Q.isMeshToonMaterial||Q.isMeshLambertMaterial||Q.isMeshBasicMaterial||Q.isMeshStandardMaterial||Q.isShaderMaterial)&&It.setValue(B,"isOrthographic",C.isOrthographicCamera===!0),b!==C&&(b=C,Tn=!0,gr=!0)}if($.isSkinnedMesh){It.setOptional(B,$,"bindMatrix"),It.setOptional(B,$,"bindMatrixInverse");let zn=$.skeleton;zn&&(zn.boneTexture===null&&zn.computeBoneTexture(),It.setValue(B,"boneTexture",zn.boneTexture,D))}$.isBatchedMesh&&(It.setOptional(B,$,"batchingTexture"),It.setValue(B,"batchingTexture",$._matricesTexture,D),It.setOptional(B,$,"batchingIdTexture"),It.setValue(B,"batchingIdTexture",$._indirectTexture,D),It.setOptional(B,$,"batchingColorTexture"),$._colorsTexture!==null&&It.setValue(B,"batchingColorTexture",$._colorsTexture,D));let xr=j.morphAttributes;if((xr.position!==void 0||xr.normal!==void 0||xr.color!==void 0)&&Ve.update($,j,kn),(Tn||Oe.receiveShadow!==$.receiveShadow)&&(Oe.receiveShadow=$.receiveShadow,It.setValue(B,"receiveShadow",$.receiveShadow)),Q.isMeshGouraudMaterial&&Q.envMap!==null&&(Kn.envMap.value=Ne,Kn.flipEnvMap.value=Ne.isCubeTexture&&Ne.isRenderTargetTexture===!1?-1:1),Q.isMeshStandardMaterial&&Q.envMap===null&&X.environment!==null&&(Kn.envMapIntensity.value=X.environmentIntensity),Tn&&(It.setValue(B,"toneMappingExposure",v.toneMappingExposure),Oe.needsLights&&fm(Kn,gr),pe&&Q.fog===!0&&ve.refreshFogUniforms(Kn,pe),ve.refreshMaterialUniforms(Kn,Q,H,F,p.state.transmissionRenderTarget[C.id]),Bs.upload(B,Ru(Oe),Kn,D)),Q.isShaderMaterial&&Q.uniformsNeedUpdate===!0&&(Bs.upload(B,Ru(Oe),Kn,D),Q.uniformsNeedUpdate=!1),Q.isSpriteMaterial&&It.setValue(B,"center",$.center),It.setValue(B,"modelViewMatrix",$.modelViewMatrix),It.setValue(B,"normalMatrix",$.normalMatrix),It.setValue(B,"modelMatrix",$.matrixWorld),Q.isShaderMaterial||Q.isRawShaderMaterial){let zn=Q.uniformsGroups;for(let bi=0,Si=zn.length;bi<Si;bi++){let Pu=zn[bi];G.update(Pu,kn),G.bind(Pu,kn)}}return kn}function fm(C,X){C.ambientLightColor.needsUpdate=X,C.lightProbe.needsUpdate=X,C.directionalLights.needsUpdate=X,C.directionalLightShadows.needsUpdate=X,C.pointLights.needsUpdate=X,C.pointLightShadows.needsUpdate=X,C.spotLights.needsUpdate=X,C.spotLightShadows.needsUpdate=X,C.rectAreaLights.needsUpdate=X,C.hemisphereLights.needsUpdate=X}function pm(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return _},this.getActiveMipmapLevel=function(){return L},this.getRenderTarget=function(){return z},this.setRenderTargetTextures=function(C,X,j){Te.get(C.texture).__webglTexture=X,Te.get(C.depthTexture).__webglTexture=j;let Q=Te.get(C);Q.__hasExternalTextures=!0,Q.__autoAllocateDepthBuffer=j===void 0,Q.__autoAllocateDepthBuffer||he.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Q.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(C,X){let j=Te.get(C);j.__webglFramebuffer=X,j.__useDefaultFramebuffer=X===void 0},this.setRenderTarget=function(C,X=0,j=0){z=C,_=X,L=j;let Q=!0,$=null,pe=!1,be=!1;if(C){let Ne=Te.get(C);if(Ne.__useDefaultFramebuffer!==void 0)me.bindFramebuffer(B.FRAMEBUFFER,null),Q=!1;else if(Ne.__webglFramebuffer===void 0)D.setupRenderTarget(C);else if(Ne.__hasExternalTextures)D.rebindTextures(C,Te.get(C.texture).__webglTexture,Te.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){let Fe=C.depthTexture;if(Ne.__boundDepthTexture!==Fe){if(Fe!==null&&Te.has(Fe)&&(C.width!==Fe.image.width||C.height!==Fe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");D.setupDepthRenderbuffer(C)}}let We=C.texture;(We.isData3DTexture||We.isDataArrayTexture||We.isCompressedArrayTexture)&&(be=!0);let $e=Te.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray($e[X])?$=$e[X][j]:$=$e[X],pe=!0):C.samples>0&&D.useMultisampledRTT(C)===!1?$=Te.get(C).__webglMultisampledFramebuffer:Array.isArray($e)?$=$e[j]:$=$e,O.copy(C.viewport),V.copy(C.scissor),I=C.scissorTest}else O.copy(Z).multiplyScalar(H).floor(),V.copy(N).multiplyScalar(H).floor(),I=ie;if(me.bindFramebuffer(B.FRAMEBUFFER,$)&&Q&&me.drawBuffers(C,$),me.viewport(O),me.scissor(V),me.setScissorTest(I),pe){let Ne=Te.get(C.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+X,Ne.__webglTexture,j)}else if(be){let Ne=Te.get(C.texture),We=X||0;B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,Ne.__webglTexture,j||0,We)}T=-1},this.readRenderTargetPixels=function(C,X,j,Q,$,pe,be){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ue=Te.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&be!==void 0&&(Ue=Ue[be]),Ue){me.bindFramebuffer(B.FRAMEBUFFER,Ue);try{let Ne=C.texture,We=Ne.format,$e=Ne.type;if(!we.textureFormatReadable(We)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!we.textureTypeReadable($e)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=C.width-Q&&j>=0&&j<=C.height-$&&B.readPixels(X,j,Q,$,Ze.convert(We),Ze.convert($e),pe)}finally{let Ne=z!==null?Te.get(z).__webglFramebuffer:null;me.bindFramebuffer(B.FRAMEBUFFER,Ne)}}},this.readRenderTargetPixelsAsync=async function(C,X,j,Q,$,pe,be){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ue=Te.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&be!==void 0&&(Ue=Ue[be]),Ue){let Ne=C.texture,We=Ne.format,$e=Ne.type;if(!we.textureFormatReadable(We))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!we.textureTypeReadable($e))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(X>=0&&X<=C.width-Q&&j>=0&&j<=C.height-$){me.bindFramebuffer(B.FRAMEBUFFER,Ue);let Fe=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,Fe),B.bufferData(B.PIXEL_PACK_BUFFER,pe.byteLength,B.STREAM_READ),B.readPixels(X,j,Q,$,Ze.convert(We),Ze.convert($e),0);let ot=z!==null?Te.get(z).__webglFramebuffer:null;me.bindFramebuffer(B.FRAMEBUFFER,ot);let wt=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await jm(B,wt,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,Fe),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,pe),B.deleteBuffer(Fe),B.deleteSync(wt),pe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(C,X=null,j=0){C.isTexture!==!0&&(Tr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),X=arguments[0]||null,C=arguments[1]);let Q=Math.pow(2,-j),$=Math.floor(C.image.width*Q),pe=Math.floor(C.image.height*Q),be=X!==null?X.x:0,Ue=X!==null?X.y:0;D.setTexture2D(C,0),B.copyTexSubImage2D(B.TEXTURE_2D,j,0,0,be,Ue,$,pe),me.unbindTexture()},this.copyTextureToTexture=function(C,X,j=null,Q=null,$=0){C.isTexture!==!0&&(Tr("WebGLRenderer: copyTextureToTexture function signature has changed."),Q=arguments[0]||null,C=arguments[1],X=arguments[2],$=arguments[3]||0,j=null);let pe,be,Ue,Ne,We,$e,Fe,ot,wt,Pt=C.isCompressedTexture?C.mipmaps[$]:C.image;j!==null?(pe=j.max.x-j.min.x,be=j.max.y-j.min.y,Ue=j.isBox3?j.max.z-j.min.z:1,Ne=j.min.x,We=j.min.y,$e=j.isBox3?j.min.z:0):(pe=Pt.width,be=Pt.height,Ue=Pt.depth||1,Ne=0,We=0,$e=0),Q!==null?(Fe=Q.x,ot=Q.y,wt=Q.z):(Fe=0,ot=0,wt=0);let vn=Ze.convert(X.format),dt=Ze.convert(X.type),Oe;X.isData3DTexture?(D.setTexture3D(X,0),Oe=B.TEXTURE_3D):X.isDataArrayTexture||X.isCompressedArrayTexture?(D.setTexture2DArray(X,0),Oe=B.TEXTURE_2D_ARRAY):(D.setTexture2D(X,0),Oe=B.TEXTURE_2D),B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,X.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,X.unpackAlignment);let hi=B.getParameter(B.UNPACK_ROW_LENGTH),ft=B.getParameter(B.UNPACK_IMAGE_HEIGHT),kn=B.getParameter(B.UNPACK_SKIP_PIXELS),vs=B.getParameter(B.UNPACK_SKIP_ROWS),Tn=B.getParameter(B.UNPACK_SKIP_IMAGES);B.pixelStorei(B.UNPACK_ROW_LENGTH,Pt.width),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Pt.height),B.pixelStorei(B.UNPACK_SKIP_PIXELS,Ne),B.pixelStorei(B.UNPACK_SKIP_ROWS,We),B.pixelStorei(B.UNPACK_SKIP_IMAGES,$e);let gr=C.isDataArrayTexture||C.isData3DTexture,It=X.isDataArrayTexture||X.isData3DTexture;if(C.isRenderTargetTexture||C.isDepthTexture){let Kn=Te.get(C),xr=Te.get(X),zn=Te.get(Kn.__renderTarget),bi=Te.get(xr.__renderTarget);me.bindFramebuffer(B.READ_FRAMEBUFFER,zn.__webglFramebuffer),me.bindFramebuffer(B.DRAW_FRAMEBUFFER,bi.__webglFramebuffer);for(let Si=0;Si<Ue;Si++)gr&&B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Te.get(C).__webglTexture,$,$e+Si),C.isDepthTexture?(It&&B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Te.get(X).__webglTexture,$,wt+Si),B.blitFramebuffer(Ne,We,pe,be,Fe,ot,pe,be,B.DEPTH_BUFFER_BIT,B.NEAREST)):It?B.copyTexSubImage3D(Oe,$,Fe,ot,wt+Si,Ne,We,pe,be):B.copyTexSubImage2D(Oe,$,Fe,ot,wt+Si,Ne,We,pe,be);me.bindFramebuffer(B.READ_FRAMEBUFFER,null),me.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else It?C.isDataTexture||C.isData3DTexture?B.texSubImage3D(Oe,$,Fe,ot,wt,pe,be,Ue,vn,dt,Pt.data):X.isCompressedArrayTexture?B.compressedTexSubImage3D(Oe,$,Fe,ot,wt,pe,be,Ue,vn,Pt.data):B.texSubImage3D(Oe,$,Fe,ot,wt,pe,be,Ue,vn,dt,Pt):C.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,$,Fe,ot,pe,be,vn,dt,Pt.data):C.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,$,Fe,ot,Pt.width,Pt.height,vn,Pt.data):B.texSubImage2D(B.TEXTURE_2D,$,Fe,ot,pe,be,vn,dt,Pt);B.pixelStorei(B.UNPACK_ROW_LENGTH,hi),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,ft),B.pixelStorei(B.UNPACK_SKIP_PIXELS,kn),B.pixelStorei(B.UNPACK_SKIP_ROWS,vs),B.pixelStorei(B.UNPACK_SKIP_IMAGES,Tn),$===0&&X.generateMipmaps&&B.generateMipmap(Oe),me.unbindTexture()},this.copyTextureToTexture3D=function(C,X,j=null,Q=null,$=0){return C.isTexture!==!0&&(Tr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),j=arguments[0]||null,Q=arguments[1]||null,C=arguments[2],X=arguments[3],$=arguments[4]||0),Tr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(C,X,j,Q,$)},this.initRenderTarget=function(C){Te.get(C).__webglFramebuffer===void 0&&D.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?D.setTextureCube(C,0):C.isData3DTexture?D.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?D.setTexture2DArray(C,0):D.setTexture2D(C,0),me.unbindTexture()},this.resetState=function(){_=0,L=0,z=null,me.reset(),Et.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return xi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorspace=rt._getDrawingBufferColorSpace(e),t.unpackColorSpace=rt._getUnpackColorSpace()}};var Ni=class extends un{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new hn,this.environmentIntensity=1,this.environmentRotation=new hn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}};var $c=class extends Pn{constructor(e=null,t=1,i=1,s,r,a,o,l,c=Cn,h=Cn,d,f){super(null,a,o,l,c,h,s,r,d,f),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Qa=class extends Vt{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Ds=new Ge,Pd=new Ge,Ia=[],Id=new Xn,qv=new Ge,Sr=new Pe,Er=new zi,xn=class extends Pe{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Qa(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,qv)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Xn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Ds),Id.copy(e.boundingBox).applyMatrix4(Ds),this.boundingBox.union(Id)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new zi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Ds),Er.copy(e.boundingSphere).applyMatrix4(Ds),this.boundingSphere.union(Er)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let i=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,a=e*r+1;for(let o=0;o<i.length;o++)i[o]=s[a+o]}raycast(e,t){let i=this.matrixWorld,s=this.count;if(Sr.geometry=this.geometry,Sr.material=this.material,Sr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Er.copy(this.boundingSphere),Er.applyMatrix4(i),e.ray.intersectsSphere(Er)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Ds),Pd.multiplyMatrices(i,Ds),Sr.matrixWorld=Pd,Sr.raycast(e,Ia);for(let a=0,o=Ia.length;a<o;a++){let l=Ia[a];l.instanceId=r,l.object=this,t.push(l)}Ia.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Qa(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let i=t.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new $c(new Float32Array(s*this.count),s,this.count,Sh,ei));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<i.length;c++)a+=i[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=s*e;r[l]=o,r.set(i,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var qc=class extends Di{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new ge(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Ld=new Ge,Yc=new zr,La=new zi,za=new U,Zs=class extends un{constructor(e=new kt,t=new qc){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),La.copy(i.boundingSphere),La.applyMatrix4(s),La.radius+=r,e.ray.intersectsSphere(La)===!1)return;Ld.copy(s).invert(),Yc.copy(e.ray).applyMatrix4(Ld);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,d=i.attributes.position;if(c!==null){let f=Math.max(0,a.start),u=Math.min(c.count,a.start+a.count);for(let m=f,y=u;m<y;m++){let g=c.getX(m);za.fromBufferAttribute(d,g),zd(za,g,l,s,e,t,this)}}else{let f=Math.max(0,a.start),u=Math.min(d.count,a.start+a.count);for(let m=f,y=u;m<y;m++)za.fromBufferAttribute(d,m),zd(za,m,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function zd(n,e,t,i,s,r,a){let o=Yc.distanceSqToPoint(n);if(o<t){let l=new U;Yc.closestPointToPoint(n,l),l.applyMatrix4(i);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var Un=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)i=this.getPoint(a/e),r+=i.distanceTo(s),t.push(r),s=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let i=this.getLengths(),s=0,r=i.length,a;t?a=t:a=e*i[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=i[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===a)return s/(r-1);let h=i[s],f=i[s+1]-h,u=(a-h)/f;return(s+u)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=t||(a.isVector2?new le:new U);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t){let i=new U,s=[],r=[],a=[],o=new U,l=new Ge;for(let u=0;u<=e;u++){let m=u/e;s[u]=this.getTangentAt(m,new U)}r[0]=new U,a[0]=new U;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),d=Math.abs(s[0].y),f=Math.abs(s[0].z);h<=c&&(c=h,i.set(1,0,0)),d<=c&&(c=d,i.set(0,1,0)),f<=c&&i.set(0,0,1),o.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let u=1;u<=e;u++){if(r[u]=r[u-1].clone(),a[u]=a[u-1].clone(),o.crossVectors(s[u-1],s[u]),o.length()>Number.EPSILON){o.normalize();let m=Math.acos(tn(s[u-1].dot(s[u]),-1,1));r[u].applyMatrix4(l.makeRotationAxis(o,m))}a[u].crossVectors(s[u],r[u])}if(t===!0){let u=Math.acos(tn(r[0].dot(r[e]),-1,1));u/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(u=-u);for(let m=1;m<=e;m++)r[m].applyMatrix4(l.makeRotationAxis(s[m],u*m)),a[m].crossVectors(s[m],r[m])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Nr=class extends Un{constructor(e=0,t=0,i=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new le){let i=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),f=l-this.aX,u=c-this.aY;l=f*h-u*d+this.aX,c=f*d+u*h+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Zc=class extends Nr{constructor(e,t,i,s,r,a){super(e,t,i,i,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function Rh(){let n=0,e=0,t=0,i=0;function s(r,a,o,l){n=r,e=o,t=-3*r+3*a-2*o-l,i=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,d){let f=(a-r)/c-(o-r)/(c+h)+(o-a)/h,u=(o-a)/h-(l-a)/(h+d)+(l-o)/d;f*=h,u*=h,s(a,o,f,u)},calc:function(r){let a=r*r,o=a*r;return n+e*r+t*a+i*o}}}var Da=new U,Ol=new Rh,kl=new Rh,Bl=new Rh,Fr=class extends Un{constructor(e=[],t=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=s}getPoint(e,t=new U){let i=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:(Da.subVectors(s[0],s[1]).add(s[0]),c=Da);let d=s[o%r],f=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(Da.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Da),this.curveType==="centripetal"||this.curveType==="chordal"){let u=this.curveType==="chordal"?.5:.25,m=Math.pow(c.distanceToSquared(d),u),y=Math.pow(d.distanceToSquared(f),u),g=Math.pow(f.distanceToSquared(h),u);y<1e-4&&(y=1),m<1e-4&&(m=y),g<1e-4&&(g=y),Ol.initNonuniformCatmullRom(c.x,d.x,f.x,h.x,m,y,g),kl.initNonuniformCatmullRom(c.y,d.y,f.y,h.y,m,y,g),Bl.initNonuniformCatmullRom(c.z,d.z,f.z,h.z,m,y,g)}else this.curveType==="catmullrom"&&(Ol.initCatmullRom(c.x,d.x,f.x,h.x,this.tension),kl.initCatmullRom(c.y,d.y,f.y,h.y,this.tension),Bl.initCatmullRom(c.z,d.z,f.z,h.z,this.tension));return i.set(Ol.calc(l),kl.calc(l),Bl.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new U().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Dd(n,e,t,i,s){let r=(i-e)*.5,a=(s-t)*.5,o=n*n,l=n*o;return(2*t-2*i+r+a)*l+(-3*t+3*i-2*r-a)*o+r*n+t}function Yv(n,e){let t=1-n;return t*t*e}function Zv(n,e){return 2*(1-n)*n*e}function Jv(n,e){return n*n*e}function Cr(n,e,t,i){return Yv(n,e)+Zv(n,t)+Jv(n,i)}function Kv(n,e){let t=1-n;return t*t*t*e}function jv(n,e){let t=1-n;return 3*t*t*n*e}function Qv(n,e){return 3*(1-n)*n*n*e}function e_(n,e){return n*n*n*e}function Pr(n,e,t,i,s){return Kv(n,e)+jv(n,t)+Qv(n,i)+e_(n,s)}var eo=class extends Un{constructor(e=new le,t=new le,i=new le,s=new le){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new le){let i=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(Pr(e,s.x,r.x,a.x,o.x),Pr(e,s.y,r.y,a.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Jc=class extends Un{constructor(e=new U,t=new U,i=new U,s=new U){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new U){let i=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(Pr(e,s.x,r.x,a.x,o.x),Pr(e,s.y,r.y,a.y,o.y),Pr(e,s.z,r.z,a.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},to=class extends Un{constructor(e=new le,t=new le){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new le){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new le){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Kc=class extends Un{constructor(e=new U,t=new U){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new U){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new U){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},no=class extends Un{constructor(e=new le,t=new le,i=new le){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new le){let i=t,s=this.v0,r=this.v1,a=this.v2;return i.set(Cr(e,s.x,r.x,a.x),Cr(e,s.y,r.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},io=class extends Un{constructor(e=new U,t=new U,i=new U){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new U){let i=t,s=this.v0,r=this.v1,a=this.v2;return i.set(Cr(e,s.x,r.x,a.x),Cr(e,s.y,r.y,a.y),Cr(e,s.z,r.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},so=class extends Un{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new le){let i=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],d=s[a>s.length-3?s.length-1:a+2];return i.set(Dd(o,l.x,c.x,h.x,d.x),Dd(o,l.y,c.y,h.y,d.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new le().fromArray(s))}return this}},ro=Object.freeze({__proto__:null,ArcCurve:Zc,CatmullRomCurve3:Fr,CubicBezierCurve:eo,CubicBezierCurve3:Jc,EllipseCurve:Nr,LineCurve:to,LineCurve3:Kc,QuadraticBezierCurve:no,QuadraticBezierCurve3:io,SplineCurve:so}),jc=class extends Un{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new ro[i](t,e))}return this}getPoint(e,t){let i=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=i){let a=s[r]-i,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let i=0,s=this.curves.length;i<s;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],i;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];i&&i.equals(h)||(t.push(h),i=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let s=e.curves[t];this.curves.push(new ro[s.type]().fromJSON(s))}return this}},Or=class extends jc{constructor(e){super(),this.type="Path",this.currentPoint=new le,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let i=new to(this.currentPoint.clone(),new le(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,s){let r=new no(this.currentPoint.clone(),new le(e,t),new le(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(e,t,i,s,r,a){let o=new eo(this.currentPoint.clone(),new le(e,t),new le(i,s),new le(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),i=new so(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,s,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,i,s,r,a),this}absarc(e,t,i,s,r,a){return this.absellipse(e,t,i,i,s,r,a),this}ellipse(e,t,i,s,r,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,i,s,r,a,o,l),this}absellipse(e,t,i,s,r,a,o,l){let c=new Nr(e,t,i,s,r,a,o,l);if(this.curves.length>0){let d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},rs=class n extends kt{constructor(e=[new le(0,-.5),new le(.5,0),new le(0,.5)],t=12,i=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:i,phiLength:s},t=Math.floor(t),s=tn(s,0,Math.PI*2);let r=[],a=[],o=[],l=[],c=[],h=1/t,d=new U,f=new le,u=new U,m=new U,y=new U,g=0,p=0;for(let E=0;E<=e.length-1;E++)switch(E){case 0:g=e[E+1].x-e[E].x,p=e[E+1].y-e[E].y,u.x=p*1,u.y=-g,u.z=p*0,y.copy(u),u.normalize(),l.push(u.x,u.y,u.z);break;case e.length-1:l.push(y.x,y.y,y.z);break;default:g=e[E+1].x-e[E].x,p=e[E+1].y-e[E].y,u.x=p*1,u.y=-g,u.z=p*0,m.copy(u),u.x+=y.x,u.y+=y.y,u.z+=y.z,u.normalize(),l.push(u.x,u.y,u.z),y.copy(m)}for(let E=0;E<=t;E++){let x=i+E*h*s,v=Math.sin(x),P=Math.cos(x);for(let _=0;_<=e.length-1;_++){d.x=e[_].x*v,d.y=e[_].y,d.z=e[_].x*P,a.push(d.x,d.y,d.z),f.x=E/t,f.y=_/(e.length-1),o.push(f.x,f.y);let L=l[3*_+0]*v,z=l[3*_+1],T=l[3*_+0]*P;c.push(L,z,T)}}for(let E=0;E<t;E++)for(let x=0;x<e.length-1;x++){let v=x+E*e.length,P=v,_=v+e.length,L=v+e.length+1,z=v+1;r.push(P,_,z),r.push(L,z,_)}this.setIndex(r),this.setAttribute("position",new Qe(a,3)),this.setAttribute("uv",new Qe(o,2)),this.setAttribute("normal",new Qe(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.points,e.segments,e.phiStart,e.phiLength)}},ao=class n extends rs{constructor(e=1,t=1,i=4,s=8){let r=new Or;r.absarc(0,-t/2,e,Math.PI*1.5,0),r.absarc(0,t/2,e,0,Math.PI*.5),super(r.getPoints(i),s),this.type="CapsuleGeometry",this.parameters={radius:e,length:t,capSegments:i,radialSegments:s}}static fromJSON(e){return new n(e.radius,e.length,e.capSegments,e.radialSegments)}},oo=class n extends kt{constructor(e=1,t=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:s},t=Math.max(3,t);let r=[],a=[],o=[],l=[],c=new U,h=new le;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let d=0,f=3;d<=t;d++,f+=3){let u=i+d/t*s;c.x=e*Math.cos(u),c.y=e*Math.sin(u),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[f]/e+1)/2,h.y=(a[f+1]/e+1)/2,l.push(h.x,h.y)}for(let d=1;d<=t;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new Qe(a,3)),this.setAttribute("normal",new Qe(o,3)),this.setAttribute("uv",new Qe(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.segments,e.thetaStart,e.thetaLength)}},bt=class n extends kt{constructor(e=1,t=1,i=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],d=[],f=[],u=[],m=0,y=[],g=i/2,p=0;E(),a===!1&&(e>0&&x(!0),t>0&&x(!1)),this.setIndex(h),this.setAttribute("position",new Qe(d,3)),this.setAttribute("normal",new Qe(f,3)),this.setAttribute("uv",new Qe(u,2));function E(){let v=new U,P=new U,_=0,L=(t-e)/i;for(let z=0;z<=r;z++){let T=[],b=z/r,O=b*(t-e)+e;for(let V=0;V<=s;V++){let I=V/s,M=I*l+o,A=Math.sin(M),w=Math.cos(M);P.x=O*A,P.y=-b*i+g,P.z=O*w,d.push(P.x,P.y,P.z),v.set(A,L,w).normalize(),f.push(v.x,v.y,v.z),u.push(I,1-b),T.push(m++)}y.push(T)}for(let z=0;z<s;z++)for(let T=0;T<r;T++){let b=y[T][z],O=y[T+1][z],V=y[T+1][z+1],I=y[T][z+1];(e>0||T!==0)&&(h.push(b,O,I),_+=3),(t>0||T!==r-1)&&(h.push(O,V,I),_+=3)}c.addGroup(p,_,0),p+=_}function x(v){let P=m,_=new le,L=new U,z=0,T=v===!0?e:t,b=v===!0?1:-1;for(let V=1;V<=s;V++)d.push(0,g*b,0),f.push(0,b,0),u.push(.5,.5),m++;let O=m;for(let V=0;V<=s;V++){let M=V/s*l+o,A=Math.cos(M),w=Math.sin(M);L.x=T*w,L.y=g*b,L.z=T*A,d.push(L.x,L.y,L.z),f.push(0,b,0),_.x=A*.5+.5,_.y=w*.5*b+.5,u.push(_.x,_.y),m++}for(let V=0;V<s;V++){let I=P+V,M=O+V;v===!0?h.push(M,M+1,I):h.push(M+1,M,I),z+=3}c.addGroup(p,z,v===!0?1:2),p+=z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},ii=class n extends bt{constructor(e=1,t=1,i=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,i,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new n(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},kr=class n extends kt{constructor(e=[],t=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:s};let r=[],a=[];o(s),c(i),h(),this.setAttribute("position",new Qe(r,3)),this.setAttribute("normal",new Qe(r.slice(),3)),this.setAttribute("uv",new Qe(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(E){let x=new U,v=new U,P=new U;for(let _=0;_<t.length;_+=3)u(t[_+0],x),u(t[_+1],v),u(t[_+2],P),l(x,v,P,E)}function l(E,x,v,P){let _=P+1,L=[];for(let z=0;z<=_;z++){L[z]=[];let T=E.clone().lerp(v,z/_),b=x.clone().lerp(v,z/_),O=_-z;for(let V=0;V<=O;V++)V===0&&z===_?L[z][V]=T:L[z][V]=T.clone().lerp(b,V/O)}for(let z=0;z<_;z++)for(let T=0;T<2*(_-z)-1;T++){let b=Math.floor(T/2);T%2===0?(f(L[z][b+1]),f(L[z+1][b]),f(L[z][b])):(f(L[z][b+1]),f(L[z+1][b+1]),f(L[z+1][b]))}}function c(E){let x=new U;for(let v=0;v<r.length;v+=3)x.x=r[v+0],x.y=r[v+1],x.z=r[v+2],x.normalize().multiplyScalar(E),r[v+0]=x.x,r[v+1]=x.y,r[v+2]=x.z}function h(){let E=new U;for(let x=0;x<r.length;x+=3){E.x=r[x+0],E.y=r[x+1],E.z=r[x+2];let v=g(E)/2/Math.PI+.5,P=p(E)/Math.PI+.5;a.push(v,1-P)}m(),d()}function d(){for(let E=0;E<a.length;E+=6){let x=a[E+0],v=a[E+2],P=a[E+4],_=Math.max(x,v,P),L=Math.min(x,v,P);_>.9&&L<.1&&(x<.2&&(a[E+0]+=1),v<.2&&(a[E+2]+=1),P<.2&&(a[E+4]+=1))}}function f(E){r.push(E.x,E.y,E.z)}function u(E,x){let v=E*3;x.x=e[v+0],x.y=e[v+1],x.z=e[v+2]}function m(){let E=new U,x=new U,v=new U,P=new U,_=new le,L=new le,z=new le;for(let T=0,b=0;T<r.length;T+=9,b+=6){E.set(r[T+0],r[T+1],r[T+2]),x.set(r[T+3],r[T+4],r[T+5]),v.set(r[T+6],r[T+7],r[T+8]),_.set(a[b+0],a[b+1]),L.set(a[b+2],a[b+3]),z.set(a[b+4],a[b+5]),P.copy(E).add(x).add(v).divideScalar(3);let O=g(P);y(_,b+0,E,O),y(L,b+2,x,O),y(z,b+4,v,O)}}function y(E,x,v,P){P<0&&E.x===1&&(a[x]=E.x-1),v.x===0&&v.z===0&&(a[x]=P/2/Math.PI+.5)}function g(E){return Math.atan2(E.z,-E.x)}function p(E){return Math.atan2(-E.y,Math.sqrt(E.x*E.x+E.z*E.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.vertices,e.indices,e.radius,e.details)}};var Br=class extends Or{constructor(e){super(e),this.uuid=Qs(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let i=0,s=this.holes.length;i<s;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let s=e.holes[t];this.holes.push(new Or().fromJSON(s))}return this}},t_={triangulate:function(n,e,t=2){let i=e&&e.length,s=i?e[0]*t:n.length,r=ff(n,0,s,t,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c,h,d,f,u;if(i&&(r=a_(n,e,r,t)),n.length>80*t){o=c=n[0],l=h=n[1];for(let m=t;m<s;m+=t)d=n[m],f=n[m+1],d<o&&(o=d),f<l&&(l=f),d>c&&(c=d),f>h&&(h=f);u=Math.max(c-o,h-l),u=u!==0?32767/u:0}return Hr(r,a,t,o,l,u,0),a}};function ff(n,e,t,i,s){let r,a;if(s===x_(n,e,t,i)>0)for(r=e;r<t;r+=i)a=Ud(r,n[r],n[r+1],a);else for(r=t-i;r>=e;r-=i)a=Ud(r,n[r],n[r+1],a);return a&&Mo(a,a.next)&&(Wr(a),a=a.next),a}function as(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(Mo(t,t.next)||Ot(t.prev,t,t.next)===0)){if(Wr(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function Hr(n,e,t,i,s,r,a){if(!n)return;!a&&r&&u_(n,i,s,r);let o=n,l,c;for(;n.prev!==n.next;){if(l=n.prev,c=n.next,r?i_(n,i,s,r):n_(n)){e.push(l.i/t|0),e.push(n.i/t|0),e.push(c.i/t|0),Wr(n),n=c.next,o=c.next;continue}if(n=c,n===o){a?a===1?(n=s_(as(n),e,t),Hr(n,e,t,i,s,r,2)):a===2&&r_(n,e,t,i,s,r):Hr(as(n),e,t,i,s,r,1);break}}}function n_(n){let e=n.prev,t=n,i=n.next;if(Ot(e,t,i)>=0)return!1;let s=e.x,r=t.x,a=i.x,o=e.y,l=t.y,c=i.y,h=s<r?s<a?s:a:r<a?r:a,d=o<l?o<c?o:c:l<c?l:c,f=s>r?s>a?s:a:r>a?r:a,u=o>l?o>c?o:c:l>c?l:c,m=i.next;for(;m!==e;){if(m.x>=h&&m.x<=f&&m.y>=d&&m.y<=u&&Ns(s,o,r,l,a,c,m.x,m.y)&&Ot(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function i_(n,e,t,i){let s=n.prev,r=n,a=n.next;if(Ot(s,r,a)>=0)return!1;let o=s.x,l=r.x,c=a.x,h=s.y,d=r.y,f=a.y,u=o<l?o<c?o:c:l<c?l:c,m=h<d?h<f?h:f:d<f?d:f,y=o>l?o>c?o:c:l>c?l:c,g=h>d?h>f?h:f:d>f?d:f,p=Qc(u,m,e,t,i),E=Qc(y,g,e,t,i),x=n.prevZ,v=n.nextZ;for(;x&&x.z>=p&&v&&v.z<=E;){if(x.x>=u&&x.x<=y&&x.y>=m&&x.y<=g&&x!==s&&x!==a&&Ns(o,h,l,d,c,f,x.x,x.y)&&Ot(x.prev,x,x.next)>=0||(x=x.prevZ,v.x>=u&&v.x<=y&&v.y>=m&&v.y<=g&&v!==s&&v!==a&&Ns(o,h,l,d,c,f,v.x,v.y)&&Ot(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;x&&x.z>=p;){if(x.x>=u&&x.x<=y&&x.y>=m&&x.y<=g&&x!==s&&x!==a&&Ns(o,h,l,d,c,f,x.x,x.y)&&Ot(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;v&&v.z<=E;){if(v.x>=u&&v.x<=y&&v.y>=m&&v.y<=g&&v!==s&&v!==a&&Ns(o,h,l,d,c,f,v.x,v.y)&&Ot(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function s_(n,e,t){let i=n;do{let s=i.prev,r=i.next.next;!Mo(s,r)&&pf(s,i,i.next,r)&&Vr(s,r)&&Vr(r,s)&&(e.push(s.i/t|0),e.push(i.i/t|0),e.push(r.i/t|0),Wr(i),Wr(i.next),i=n=r),i=i.next}while(i!==n);return as(i)}function r_(n,e,t,i,s,r){let a=n;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&p_(a,o)){let l=mf(a,o);a=as(a,a.next),l=as(l,l.next),Hr(a,e,t,i,s,r,0),Hr(l,e,t,i,s,r,0);return}o=o.next}a=a.next}while(a!==n)}function a_(n,e,t,i){let s=[],r,a,o,l,c;for(r=0,a=e.length;r<a;r++)o=e[r]*i,l=r<a-1?e[r+1]*i:n.length,c=ff(n,o,l,i,!1),c===c.next&&(c.steiner=!0),s.push(f_(c));for(s.sort(o_),r=0;r<s.length;r++)t=l_(s[r],t);return t}function o_(n,e){return n.x-e.x}function l_(n,e){let t=c_(n,e);if(!t)return e;let i=mf(t,n);return as(i,i.next),as(t,t.next)}function c_(n,e){let t=e,i=-1/0,s,r=n.x,a=n.y;do{if(a<=t.y&&a>=t.next.y&&t.next.y!==t.y){let f=t.x+(a-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(f<=r&&f>i&&(i=f,s=t.x<t.next.x?t:t.next,f===r))return s}t=t.next}while(t!==e);if(!s)return null;let o=s,l=s.x,c=s.y,h=1/0,d;t=s;do r>=t.x&&t.x>=l&&r!==t.x&&Ns(a<c?r:i,a,l,c,a<c?i:r,a,t.x,t.y)&&(d=Math.abs(a-t.y)/(r-t.x),Vr(t,n)&&(d<h||d===h&&(t.x>s.x||t.x===s.x&&h_(s,t)))&&(s=t,h=d)),t=t.next;while(t!==o);return s}function h_(n,e){return Ot(n.prev,n,e.prev)<0&&Ot(e.next,n,n.next)<0}function u_(n,e,t,i){let s=n;do s.z===0&&(s.z=Qc(s.x,s.y,e,t,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,d_(s)}function d_(n){let e,t,i,s,r,a,o,l,c=1;do{for(t=n,n=null,r=null,a=0;t;){for(a++,i=t,o=0,e=0;e<c&&(o++,i=i.nextZ,!!i);e++);for(l=c;o>0||l>0&&i;)o!==0&&(l===0||!i||t.z<=i.z)?(s=t,t=t.nextZ,o--):(s=i,i=i.nextZ,l--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;t=i}r.nextZ=null,c*=2}while(a>1);return n}function Qc(n,e,t,i,s){return n=(n-t)*s|0,e=(e-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function f_(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function Ns(n,e,t,i,s,r,a,o){return(s-a)*(e-o)>=(n-a)*(r-o)&&(n-a)*(i-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(s-a)*(i-o)}function p_(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!m_(n,e)&&(Vr(n,e)&&Vr(e,n)&&g_(n,e)&&(Ot(n.prev,n,e.prev)||Ot(n,e.prev,e))||Mo(n,e)&&Ot(n.prev,n,n.next)>0&&Ot(e.prev,e,e.next)>0)}function Ot(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function Mo(n,e){return n.x===e.x&&n.y===e.y}function pf(n,e,t,i){let s=Na(Ot(n,e,t)),r=Na(Ot(n,e,i)),a=Na(Ot(t,i,n)),o=Na(Ot(t,i,e));return!!(s!==r&&a!==o||s===0&&Ua(n,t,e)||r===0&&Ua(n,i,e)||a===0&&Ua(t,n,i)||o===0&&Ua(t,e,i))}function Ua(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function Na(n){return n>0?1:n<0?-1:0}function m_(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&pf(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function Vr(n,e){return Ot(n.prev,n,n.next)<0?Ot(n,e,n.next)>=0&&Ot(n,n.prev,e)>=0:Ot(n,e,n.prev)<0||Ot(n,n.next,e)<0}function g_(n,e){let t=n,i=!1,s=(n.x+e.x)/2,r=(n.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function mf(n,e){let t=new eh(n.i,n.x,n.y),i=new eh(e.i,e.x,e.y),s=n.next,r=e.prev;return n.next=e,e.prev=n,t.next=s,s.prev=t,i.next=t,t.prev=i,r.next=i,i.prev=r,i}function Ud(n,e,t,i){let s=new eh(n,e,t);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function Wr(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function eh(n,e,t){this.i=n,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function x_(n,e,t,i){let s=0;for(let r=e,a=t-i;r<t;r+=i)s+=(n[a]-n[r])*(n[r+1]+n[a+1]),a=r;return s}var Ir=class n{static area(e){let t=e.length,i=0;for(let s=t-1,r=0;r<t;s=r++)i+=e[s].x*e[r].y-e[r].x*e[s].y;return i*.5}static isClockWise(e){return n.area(e)<0}static triangulateShape(e,t){let i=[],s=[],r=[];Nd(e),Fd(i,e);let a=e.length;t.forEach(Nd);for(let l=0;l<t.length;l++)s.push(a),a+=t[l].length,Fd(i,t[l]);let o=t_.triangulate(i,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};function Nd(n){let e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function Fd(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}var lo=class n extends kt{constructor(e=new Br([new le(.5,.5),new le(-.5,.5),new le(-.5,-.5),new le(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let i=this,s=[],r=[];for(let o=0,l=e.length;o<l;o++){let c=e[o];a(c)}this.setAttribute("position",new Qe(s,3)),this.setAttribute("uv",new Qe(r,2)),this.computeVertexNormals();function a(o){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,d=t.depth!==void 0?t.depth:1,f=t.bevelEnabled!==void 0?t.bevelEnabled:!0,u=t.bevelThickness!==void 0?t.bevelThickness:.2,m=t.bevelSize!==void 0?t.bevelSize:u-.1,y=t.bevelOffset!==void 0?t.bevelOffset:0,g=t.bevelSegments!==void 0?t.bevelSegments:3,p=t.extrudePath,E=t.UVGenerator!==void 0?t.UVGenerator:y_,x,v=!1,P,_,L,z;p&&(x=p.getSpacedPoints(h),v=!0,f=!1,P=p.computeFrenetFrames(h,!1),_=new U,L=new U,z=new U),f||(g=0,u=0,m=0,y=0);let T=o.extractPoints(c),b=T.shape,O=T.holes;if(!Ir.isClockWise(b)){b=b.reverse();for(let ee=0,de=O.length;ee<de;ee++){let B=O[ee];Ir.isClockWise(B)&&(O[ee]=B.reverse())}}let I=Ir.triangulateShape(b,O),M=b;for(let ee=0,de=O.length;ee<de;ee++){let B=O[ee];b=b.concat(B)}function A(ee,de,B){return de||console.error("THREE.ExtrudeGeometry: vec does not exist"),ee.clone().addScaledVector(de,B)}let w=b.length,F=I.length;function H(ee,de,B){let Ie,he,we,me=ee.x-de.x,ke=ee.y-de.y,Te=B.x-ee.x,D=B.y-ee.y,R=me*me+ke*ke,J=me*D-ke*Te;if(Math.abs(J)>Number.EPSILON){let se=Math.sqrt(R),ce=Math.sqrt(Te*Te+D*D),re=de.x-ke/se,ze=de.y+me/se,ve=B.x-D/ce,Ae=B.y+Te/ce,st=((ve-re)*D-(Ae-ze)*Te)/(me*D-ke*Te);Ie=re+me*st-ee.x,he=ze+ke*st-ee.y;let fe=Ie*Ie+he*he;if(fe<=2)return new le(Ie,he);we=Math.sqrt(fe/2)}else{let se=!1;me>Number.EPSILON?Te>Number.EPSILON&&(se=!0):me<-Number.EPSILON?Te<-Number.EPSILON&&(se=!0):Math.sign(ke)===Math.sign(D)&&(se=!0),se?(Ie=-ke,he=me,we=Math.sqrt(R)):(Ie=me,he=ke,we=Math.sqrt(R/2))}return new le(Ie/we,he/we)}let k=[];for(let ee=0,de=M.length,B=de-1,Ie=ee+1;ee<de;ee++,B++,Ie++)B===de&&(B=0),Ie===de&&(Ie=0),k[ee]=H(M[ee],M[B],M[Ie]);let Y=[],Z,N=k.concat();for(let ee=0,de=O.length;ee<de;ee++){let B=O[ee];Z=[];for(let Ie=0,he=B.length,we=he-1,me=Ie+1;Ie<he;Ie++,we++,me++)we===he&&(we=0),me===he&&(me=0),Z[Ie]=H(B[Ie],B[we],B[me]);Y.push(Z),N=N.concat(Z)}for(let ee=0;ee<g;ee++){let de=ee/g,B=u*Math.cos(de*Math.PI/2),Ie=m*Math.sin(de*Math.PI/2)+y;for(let he=0,we=M.length;he<we;he++){let me=A(M[he],k[he],Ie);ne(me.x,me.y,-B)}for(let he=0,we=O.length;he<we;he++){let me=O[he];Z=Y[he];for(let ke=0,Te=me.length;ke<Te;ke++){let D=A(me[ke],Z[ke],Ie);ne(D.x,D.y,-B)}}}let ie=m+y;for(let ee=0;ee<w;ee++){let de=f?A(b[ee],N[ee],ie):b[ee];v?(L.copy(P.normals[0]).multiplyScalar(de.x),_.copy(P.binormals[0]).multiplyScalar(de.y),z.copy(x[0]).add(L).add(_),ne(z.x,z.y,z.z)):ne(de.x,de.y,0)}for(let ee=1;ee<=h;ee++)for(let de=0;de<w;de++){let B=f?A(b[de],N[de],ie):b[de];v?(L.copy(P.normals[ee]).multiplyScalar(B.x),_.copy(P.binormals[ee]).multiplyScalar(B.y),z.copy(x[ee]).add(L).add(_),ne(z.x,z.y,z.z)):ne(B.x,B.y,d/h*ee)}for(let ee=g-1;ee>=0;ee--){let de=ee/g,B=u*Math.cos(de*Math.PI/2),Ie=m*Math.sin(de*Math.PI/2)+y;for(let he=0,we=M.length;he<we;he++){let me=A(M[he],k[he],Ie);ne(me.x,me.y,d+B)}for(let he=0,we=O.length;he<we;he++){let me=O[he];Z=Y[he];for(let ke=0,Te=me.length;ke<Te;ke++){let D=A(me[ke],Z[ke],Ie);v?ne(D.x,D.y+x[h-1].y,x[h-1].x+B):ne(D.x,D.y,d+B)}}}W(),K();function W(){let ee=s.length/3;if(f){let de=0,B=w*de;for(let Ie=0;Ie<F;Ie++){let he=I[Ie];ue(he[2]+B,he[1]+B,he[0]+B)}de=h+g*2,B=w*de;for(let Ie=0;Ie<F;Ie++){let he=I[Ie];ue(he[0]+B,he[1]+B,he[2]+B)}}else{for(let de=0;de<F;de++){let B=I[de];ue(B[2],B[1],B[0])}for(let de=0;de<F;de++){let B=I[de];ue(B[0]+w*h,B[1]+w*h,B[2]+w*h)}}i.addGroup(ee,s.length/3-ee,0)}function K(){let ee=s.length/3,de=0;ae(M,de),de+=M.length;for(let B=0,Ie=O.length;B<Ie;B++){let he=O[B];ae(he,de),de+=he.length}i.addGroup(ee,s.length/3-ee,1)}function ae(ee,de){let B=ee.length;for(;--B>=0;){let Ie=B,he=B-1;he<0&&(he=ee.length-1);for(let we=0,me=h+g*2;we<me;we++){let ke=w*we,Te=w*(we+1),D=de+Ie+ke,R=de+he+ke,J=de+he+Te,se=de+Ie+Te;xe(D,R,J,se)}}}function ne(ee,de,B){l.push(ee),l.push(de),l.push(B)}function ue(ee,de,B){Ee(ee),Ee(de),Ee(B);let Ie=s.length/3,he=E.generateTopUV(i,s,Ie-3,Ie-2,Ie-1);Le(he[0]),Le(he[1]),Le(he[2])}function xe(ee,de,B,Ie){Ee(ee),Ee(de),Ee(Ie),Ee(de),Ee(B),Ee(Ie);let he=s.length/3,we=E.generateSideWallUV(i,s,he-6,he-3,he-2,he-1);Le(we[0]),Le(we[1]),Le(we[3]),Le(we[1]),Le(we[2]),Le(we[3])}function Ee(ee){s.push(l[ee*3+0]),s.push(l[ee*3+1]),s.push(l[ee*3+2])}function Le(ee){r.push(ee.x),r.push(ee.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,i=this.parameters.options;return v_(t,i,e)}static fromJSON(e,t){let i=[];for(let r=0,a=e.shapes.length;r<a;r++){let o=t[e.shapes[r]];i.push(o)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new ro[s.type]().fromJSON(s)),new n(i,e.options)}},y_={generateTopUV:function(n,e,t,i,s){let r=e[t*3],a=e[t*3+1],o=e[i*3],l=e[i*3+1],c=e[s*3],h=e[s*3+1];return[new le(r,a),new le(o,l),new le(c,h)]},generateSideWallUV:function(n,e,t,i,s,r){let a=e[t*3],o=e[t*3+1],l=e[t*3+2],c=e[i*3],h=e[i*3+1],d=e[i*3+2],f=e[s*3],u=e[s*3+1],m=e[s*3+2],y=e[r*3],g=e[r*3+1],p=e[r*3+2];return Math.abs(o-h)<Math.abs(a-c)?[new le(a,1-l),new le(c,1-d),new le(f,1-m),new le(y,1-p)]:[new le(o,1-l),new le(h,1-d),new le(u,1-m),new le(g,1-p)]}};function v_(n,e,t){if(t.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){let r=n[i];t.shapes.push(r.uuid)}else t.shapes.push(n.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var sn=class n extends kr{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}},si=class n extends kr{constructor(e=1,t=0){let i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}},Mn=class n extends kt{constructor(e=.5,t=1,i=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:a},i=Math.max(3,i),s=Math.max(1,s);let o=[],l=[],c=[],h=[],d=e,f=(t-e)/s,u=new U,m=new le;for(let y=0;y<=s;y++){for(let g=0;g<=i;g++){let p=r+g/i*a;u.x=d*Math.cos(p),u.y=d*Math.sin(p),l.push(u.x,u.y,u.z),c.push(0,0,1),m.x=(u.x/t+1)/2,m.y=(u.y/t+1)/2,h.push(m.x,m.y)}d+=f}for(let y=0;y<s;y++){let g=y*(i+1);for(let p=0;p<i;p++){let E=p+g,x=E,v=E+i+1,P=E+i+2,_=E+1;o.push(x,v,_),o.push(v,P,_)}}this.setIndex(o),this.setAttribute("position",new Qe(l,3)),this.setAttribute("normal",new Qe(c,3)),this.setAttribute("uv",new Qe(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}};var Rt=class n extends kt{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let l=Math.min(a+o,Math.PI),c=0,h=[],d=new U,f=new U,u=[],m=[],y=[],g=[];for(let p=0;p<=i;p++){let E=[],x=p/i,v=0;p===0&&a===0?v=.5/t:p===i&&l===Math.PI&&(v=-.5/t);for(let P=0;P<=t;P++){let _=P/t;d.x=-e*Math.cos(s+_*r)*Math.sin(a+x*o),d.y=e*Math.cos(a+x*o),d.z=e*Math.sin(s+_*r)*Math.sin(a+x*o),m.push(d.x,d.y,d.z),f.copy(d).normalize(),y.push(f.x,f.y,f.z),g.push(_+v,1-x),E.push(c++)}h.push(E)}for(let p=0;p<i;p++)for(let E=0;E<t;E++){let x=h[p][E+1],v=h[p][E],P=h[p+1][E],_=h[p+1][E+1];(p!==0||a>0)&&u.push(x,v,_),(p!==i-1||l<Math.PI)&&u.push(v,P,_)}this.setIndex(u),this.setAttribute("position",new Qe(m,3)),this.setAttribute("normal",new Qe(y,3)),this.setAttribute("uv",new Qe(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}},co=class n extends kr{constructor(e=1,t=0){let i=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],s=[2,1,0,0,3,2,1,3,0,2,3,1];super(i,s,e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}},jt=class n extends kt{constructor(e=1,t=.4,i=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:s,arc:r},i=Math.floor(i),s=Math.floor(s);let a=[],o=[],l=[],c=[],h=new U,d=new U,f=new U;for(let u=0;u<=i;u++)for(let m=0;m<=s;m++){let y=m/s*r,g=u/i*Math.PI*2;d.x=(e+t*Math.cos(g))*Math.cos(y),d.y=(e+t*Math.cos(g))*Math.sin(y),d.z=t*Math.sin(g),o.push(d.x,d.y,d.z),h.x=e*Math.cos(y),h.y=e*Math.sin(y),f.subVectors(d,h).normalize(),l.push(f.x,f.y,f.z),c.push(m/s),c.push(u/i)}for(let u=1;u<=i;u++)for(let m=1;m<=s;m++){let y=(s+1)*u+m-1,g=(s+1)*(u-1)+m-1,p=(s+1)*(u-1)+m,E=(s+1)*u+m;a.push(y,g,E),a.push(g,p,E)}this.setIndex(a),this.setAttribute("position",new Qe(o,3)),this.setAttribute("normal",new Qe(l,3)),this.setAttribute("uv",new Qe(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var ho=class n extends kt{constructor(e=new io(new U(-1,-1,0),new U(-1,1,0),new U(1,1,0)),t=64,i=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:i,radialSegments:s,closed:r};let a=e.computeFrenetFrames(t,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new U,l=new U,c=new le,h=new U,d=[],f=[],u=[],m=[];y(),this.setIndex(m),this.setAttribute("position",new Qe(d,3)),this.setAttribute("normal",new Qe(f,3)),this.setAttribute("uv",new Qe(u,2));function y(){for(let x=0;x<t;x++)g(x);g(r===!1?t:0),E(),p()}function g(x){h=e.getPointAt(x/t,h);let v=a.normals[x],P=a.binormals[x];for(let _=0;_<=s;_++){let L=_/s*Math.PI*2,z=Math.sin(L),T=-Math.cos(L);l.x=T*v.x+z*P.x,l.y=T*v.y+z*P.y,l.z=T*v.z+z*P.z,l.normalize(),f.push(l.x,l.y,l.z),o.x=h.x+i*l.x,o.y=h.y+i*l.y,o.z=h.z+i*l.z,d.push(o.x,o.y,o.z)}}function p(){for(let x=1;x<=t;x++)for(let v=1;v<=s;v++){let P=(s+1)*(x-1)+(v-1),_=(s+1)*x+(v-1),L=(s+1)*x+v,z=(s+1)*(x-1)+v;m.push(P,_,z),m.push(_,L,z)}}function E(){for(let x=0;x<=t;x++)for(let v=0;v<=s;v++)c.x=x/t,c.y=v/s,u.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new n(new ro[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};var uo=class extends mt{static get type(){return"RawShaderMaterial"}constructor(e){super(e),this.isRawShaderMaterial=!0}},Qt=class extends Di{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new ge(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ge(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=nf,this.normalScale=new le(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new hn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};function Fa(n,e,t){return!n||!t&&n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function __(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}var Js=class{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,s=t[i],r=t[i-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=i+2;;){if(s===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(r=s,s=t[++i],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(i=2,r=o);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=t[--i-1],e>=r)break e}a=i,i=0;break t}break n}for(;i<a;){let o=i+a>>>1;e<t[o]?a=o:i=o+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=i[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},th=class extends Js{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Du,endingEnd:Du}}intervalChanged_(e,t,i){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Uu:r=e,o=2*t-i;break;case Nu:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Uu:a=e,l=2*i-t;break;case Nu:a=1,l=i+s[1]-s[0];break;default:a=e-1,l=t}let c=(i-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-i),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,d=this._offsetNext,f=this._weightPrev,u=this._weightNext,m=(i-t)/(s-t),y=m*m,g=y*m,p=-f*g+2*f*y-f*m,E=(1+f)*g+(-1.5-2*f)*y+(-.5+f)*m+1,x=(-1-u)*g+(1.5+u)*y+.5*m,v=u*g-u*y;for(let P=0;P!==o;++P)r[P]=p*a[h+P]+E*a[c+P]+x*a[l+P]+v*a[d+P];return r}},nh=class extends Js{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(i-t)/(s-t),d=1-h;for(let f=0;f!==o;++f)r[f]=a[c+f]*d+a[l+f]*h;return r}},ih=class extends Js{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}},$n=class{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Fa(t,this.TimeBufferType),this.values=Fa(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Fa(e.times,Array),values:Fa(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new ih(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new nh(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new th(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Wa:t=this.InterpolantFactoryMethodDiscrete;break;case Rc:t=this.InterpolantFactoryMethodLinear;break;case cl:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Wa;case this.InterpolantFactoryMethodLinear:return Rc;case this.InterpolantFactoryMethodSmooth:return cl}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e}return this}trim(e,t){let i=this.times,s=i.length,r=0,a=s-1;for(;r!==s&&i[r]<e;)++r;for(;a!==-1&&i[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=i.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,s=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=i[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(s!==void 0&&__(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===cl,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(s)l=!0;else{let d=o*i,f=d-i,u=d+i;for(let m=0;m!==i;++m){let y=t[d+m];if(y!==t[f+m]||y!==t[u+m]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let d=o*i,f=a*i;for(let u=0;u!==i;++u)t[f+u]=t[d+u]}++a}}if(r>0){e[a]=e[r];for(let o=r*i,l=a*i,c=0;c!==i;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};$n.prototype.TimeBufferType=Float32Array;$n.prototype.ValueBufferType=Float32Array;$n.prototype.DefaultInterpolation=Rc;var os=class extends $n{constructor(e,t,i){super(e,t,i)}};os.prototype.ValueTypeName="bool";os.prototype.ValueBufferType=Array;os.prototype.DefaultInterpolation=Wa;os.prototype.InterpolantFactoryMethodLinear=void 0;os.prototype.InterpolantFactoryMethodSmooth=void 0;var sh=class extends $n{};sh.prototype.ValueTypeName="color";var rh=class extends $n{};rh.prototype.ValueTypeName="number";var ah=class extends Js{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(i-t)/(s-t),c=e*o;for(let h=c+o;c!==h;c+=4)Kt.slerpFlat(r,0,a,c-o,a,c,l);return r}},fo=class extends $n{InterpolantFactoryMethodLinear(e){return new ah(this.times,this.values,this.getValueSize(),e)}};fo.prototype.ValueTypeName="quaternion";fo.prototype.InterpolantFactoryMethodSmooth=void 0;var ls=class extends $n{constructor(e,t,i){super(e,t,i)}};ls.prototype.ValueTypeName="string";ls.prototype.ValueBufferType=Array;ls.prototype.DefaultInterpolation=Wa;ls.prototype.InterpolantFactoryMethodLinear=void 0;ls.prototype.InterpolantFactoryMethodSmooth=void 0;var oh=class extends $n{};oh.prototype.ValueTypeName="vector";var lh=class{constructor(e,t,i){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,f=c.length;d<f;d+=2){let u=c[d],m=c[d+1];if(u.global&&(u.lastIndex=0),u.test(h))return m}return null}}},M_=new lh,ch=class{constructor(e){this.manager=e!==void 0?e:M_,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};ch.DEFAULT_MATERIAL_NAME="__DEFAULT";var Gr=class extends un{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ge(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},Ks=class extends Gr{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(un.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ge(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},Hl=new Ge,Od=new U,kd=new U,po=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new le(512,512),this.map=null,this.mapPass=null,this.matrix=new Ge,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ur,this._frameExtents=new le(1,1),this._viewportCount=1,this._viewports=[new vt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,i=this.matrix;Od.setFromMatrixPosition(e.matrixWorld),t.position.copy(Od),kd.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(kd),t.updateMatrixWorld(),Hl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Hl),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Hl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};var Bd=new Ge,wr=new U,Vl=new U,hh=class extends po{constructor(){super(new Jt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new le(4,2),this._viewportCount=6,this._viewports=[new vt(2,1,1,1),new vt(0,1,1,1),new vt(3,1,1,1),new vt(1,1,1,1),new vt(3,0,1,1),new vt(1,0,1,1)],this._cubeDirections=[new U(1,0,0),new U(-1,0,0),new U(0,0,1),new U(0,0,-1),new U(0,1,0),new U(0,-1,0)],this._cubeUps=[new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,0,1),new U(0,0,-1)]}updateMatrices(e,t=0){let i=this.camera,s=this.matrix,r=e.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),wr.setFromMatrixPosition(e.matrixWorld),i.position.copy(wr),Vl.copy(i.position),Vl.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(Vl),i.updateMatrixWorld(),s.makeTranslation(-wr.x,-wr.y,-wr.z),Bd.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Bd)}},mo=class extends Gr{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new hh}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},uh=class extends po{constructor(){super(new Ui(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Fi=class extends Gr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(un.DEFAULT_UP),this.updateMatrix(),this.target=new un,this.shadow=new uh}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var go=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Hd(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=Hd();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};function Hd(){return performance.now()}var Ch="\\[\\]\\.:\\/",b_=new RegExp("["+Ch+"]","g"),Ph="[^"+Ch+"]",S_="[^"+Ch.replace("\\.","")+"]",E_=/((?:WC+[\/:])*)/.source.replace("WC",Ph),w_=/(WCOD+)?/.source.replace("WCOD",S_),T_=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Ph),A_=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Ph),R_=new RegExp("^"+E_+w_+T_+A_+"$"),C_=["material","materials","bones","map"],dh=class{constructor(e,t,i){let s=i||zt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},zt=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(b_,"")}static parseTrackName(e){let t=R_.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);C_.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let l=i(o.children);if(l)return l}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[s];if(a===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};zt.Composite=dh;zt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};zt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};zt.prototype.GetterByBindingType=[zt.prototype._getValue_direct,zt.prototype._getValue_array,zt.prototype._getValue_arrayElement,zt.prototype._getValue_toArray];zt.prototype.SetterByBindingTypeAndVersioning=[[zt.prototype._setValue_direct,zt.prototype._setValue_direct_setNeedsUpdate,zt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[zt.prototype._setValue_array,zt.prototype._setValue_array_setNeedsUpdate,zt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[zt.prototype._setValue_arrayElement,zt.prototype._setValue_arrayElement_setNeedsUpdate,zt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[zt.prototype._setValue_fromArray,zt.prototype._setValue_fromArray_setNeedsUpdate,zt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var n1=new Float32Array(1);var Vd=new Ge,xo=class{constructor(e,t,i=0,s=1/0){this.ray=new zr(e,t),this.near=i,this.far=s,this.camera=null,this.layers=new Dr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Vd.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Vd),this}intersectObject(e,t=!0,i=[]){return fh(e,this,i,t),i.sort(Wd),i}intersectObjects(e,t=!0,i=[]){for(let s=0,r=e.length;s<r;s++)fh(e[s],this,i,t);return i.sort(Wd),i}};function Wd(n,e){return n.distance-e.distance}function fh(n,e,t,i){let s=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(s=!1),s===!0&&i===!0){let r=n.children;for(let a=0,o=r.length;a<o;a++)fh(r[a],e,t,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ph}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ph);var bo={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};var Ln=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},P_=new Ui(-1,1,1,-1,0,1),Ih=class extends kt{constructor(){super(),this.setAttribute("position",new Qe([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Qe([0,2,0,0,2,0],2))}},I_=new Ih,ki=class{constructor(e){this._mesh=new Pe(I_,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,P_)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var So=class extends Ln{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof mt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Oi.clone(e.uniforms),this.material=new mt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new ki(this.material)}render(e,t,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var Xr=class extends Ln{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,i){let s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},Eo=class extends Ln{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var wo=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let i=e.getSize(new le);this._width=i.width,this._height=i.height,t=new mn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:qn}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new So(bo),this.copyPass.material.blending=ti,this.clock=new go}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());let t=this.renderer.getRenderTarget(),i=!1;for(let s=0,r=this.passes.length;s<r;s++){let a=this.passes[s];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),a.needsSwap){if(i){let o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}Xr!==void 0&&(a instanceof Xr?i=!0:a instanceof Eo&&(i=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new le);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let i=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(i,s),this.renderTarget2.setSize(i,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(i,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var To=class extends Ln{constructor(e,t,i=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=i,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new ge}render(e,t,i){let s=e.autoClear;e.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=s}};var gf={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new ge(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};var tr=class n extends Ln{constructor(e,t,i,s){super(),this.strength=t!==void 0?t:1,this.radius=i,this.threshold=s,this.resolution=e!==void 0?new le(e.x,e.y):new le(256,256),this.clearColor=new ge(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new mn(r,a,{type:qn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let d=0;d<this.nMips;d++){let f=new mn(r,a,{type:qn});f.texture.name="UnrealBloomPass.h"+d,f.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(f);let u=new mn(r,a,{type:qn});u.texture.name="UnrealBloomPass.v"+d,u.texture.generateMipmaps=!1,this.renderTargetsVertical.push(u),r=Math.round(r/2),a=Math.round(a/2)}let o=gf;this.highPassUniforms=Oi.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new mt({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let d=0;d<this.nMips;d++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[d])),this.separableBlurMaterials[d].uniforms.invSize.value=new le(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new U(1,1,1),new U(1,1,1),new U(1,1,1),new U(1,1,1),new U(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;let h=bo;this.copyUniforms=Oi.clone(h.uniforms),this.blendMaterial=new mt({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:Tt,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new ge,this.oldClearAlpha=1,this.basic=new Ye,this.fsQuad=new ki(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let i=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(i,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(i,s),this.renderTargetsVertical[r].setSize(i,s),this.separableBlurMaterials[r].uniforms.invSize.value=new le(1/i,1/s),i=Math.round(i/2),s=Math.round(s/2)}render(e,t,i,s,r){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();let a=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=i.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=n.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=n.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this.fsQuad.render(e),o=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(i),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=a}getSeperableBlurMaterial(e){let t=[];for(let i=0;i<e;i++)t.push(.39894*Math.exp(-.5*i*i/(e*e))/e);return new mt({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new le(.5,.5)},direction:{value:new le(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(e){return new mt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}};tr.BlurDirectionX=new le(1,0);tr.BlurDirectionY=new le(0,1);var xf={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`
	
		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};var Ao=class extends Ln{constructor(){super();let e=xf;this.uniforms=Oi.clone(e.uniforms),this.material=new uo({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new ki(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,i){this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},rt.getTransfer(this._outputColorSpace)===pt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===mh?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===gh?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===xh?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===cs?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===yh?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===vh&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var Ro={low:{pixelRatio:1,bloom:!1,particles:1500,lights:2,stars:1200,asteroids:80,debris:120,bgRocks:60},medium:{pixelRatio:1.25,bloom:!0,bloomScale:.5,particles:3e3,lights:4,stars:2500,asteroids:120,debris:200,bgRocks:120},high:{pixelRatio:2,bloom:!0,bloomScale:1,particles:5e3,lights:6,stars:4e3,asteroids:160,debris:300,bgRocks:180}},Mf=5e3;var yf=new U(0,720,430);function bf(n,e){let t=new Ys({canvas:n,antialias:!0,powerPreference:"high-performance"});t.toneMapping=cs,t.toneMappingExposure=1.05,t.outputColorSpace=cn;let i=new Ni;i.background=new ge(131850);let s=new Jt(45,1,10,2e4),r=new wo(t),a=new To(i,s),o=new tr(new le(256,256),.95,.55,.62);r.addPass(a),r.addPass(o),r.addPass(new Ao);let l={renderer:t,scene:i,camera:s,composer:r,bloom:o,q:Ro[e]||Ro.high,target:new U,lookAhead:new U,zoom:1,zoomTarget:1,shakeAmt:0,shakeScale:1,cinematic:null,setQuality(c){l.q=Ro[c]||Ro.high,l.resize()},resize(){let c=window.innerWidth,h=window.innerHeight,d=Math.min(window.devicePixelRatio||1,l.q.pixelRatio);t.setPixelRatio(d),t.setSize(c,h,!1),r.setPixelRatio(d),r.setSize(c,h),o.enabled=l.q.bloom;let f=l.q.bloomScale||1;o.resolution.set(c*f,h*f),s.aspect=c/h,s.updateProjectionMatrix()},shake(c){l.shakeAmt=Math.min(l.shakeAmt+c,40)},update(c,h,d,f,u){let m=h+(f-h)*.18,y=d+(u-d)*.18,g=l.zoomTarget;if(l.cinematic){let x=l.cinematic;x.t+=c;let v=Math.min(1,x.t/.6)*Math.min(1,Math.max(0,(x.dur-x.t)/.6));m+=(x.x-m)*v,y+=(x.z-y)*v,g+=(x.zoom-g)*v,x.t>=x.dur&&(l.cinematic=null)}let p=1-Math.exp(-c*5);l.target.x+=(m-l.target.x)*p,l.target.z+=(y-l.target.z)*p,l.zoom+=(g-l.zoom)*(1-Math.exp(-c*3)),s.position.copy(yf).multiplyScalar(l.zoom).add(l.target);let E=l.shakeAmt*l.shakeScale;E>.01&&(s.position.x+=(Math.random()-.5)*E,s.position.z+=(Math.random()-.5)*E,s.position.y+=(Math.random()-.5)*E*.5),l.shakeAmt*=Math.exp(-c*7),s.lookAt(l.target)},snap(c,h,d=1){l.target.set(c,0,h),l.zoom=l.zoomTarget=d,l.shakeAmt=0,l.cinematic=null,s.position.copy(yf).multiplyScalar(d).add(l.target),s.lookAt(l.target)},render(c,h){c?(a.scene=c,a.camera=h):(a.scene=i,a.camera=s),r.render()}};return window.addEventListener("resize",l.resize),l.resize(),l}var vf=new xo,_f=new le,L_=new Wn(new U(0,1,0),0),Lh=new U;function Sf(n,e,t,i){return _f.set(e/window.innerWidth*2-1,-(t/window.innerHeight)*2+1),vf.setFromCamera(_f,n),vf.ray.intersectPlane(L_,Lh)&&(i.x=Lh.x,i.z=Lh.z),i}var Co=new U;function Po(n,e,t,i,s){return Co.set(e,t,i).project(n),s.x=(Co.x+1)*.5*window.innerWidth,s.y=(1-Co.y)*.5*window.innerHeight,s.behind=Co.z>1,s}var Bi=`
float hash31(vec3 p) { p = fract(p * 0.1031); p += dot(p, p.zyx + 31.32); return fract((p.x + p.y) * p.z); }
vec3 hash33(vec3 p) {
  p = fract(p * vec3(0.1031, 0.1030, 0.0973));
  p += dot(p, p.yxz + 33.33);
  return fract((p.xxy + p.yxx) * p.zyx);
}
float vnoise(vec3 p) {
  vec3 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f);
  return mix(mix(mix(hash31(i), hash31(i + vec3(1,0,0)), f.x), mix(hash31(i + vec3(0,1,0)), hash31(i + vec3(1,1,0)), f.x), f.y),
             mix(mix(hash31(i + vec3(0,0,1)), hash31(i + vec3(1,0,1)), f.x), mix(hash31(i + vec3(0,1,1)), hash31(i + vec3(1,1,1)), f.x), f.y), f.z);
}
float fbm(vec3 p) { float a = 0.5, s = 0.0; for (int i = 0; i < 5; i++) { s += a * vnoise(p); p *= 2.03; a *= 0.5; } return s; }
// Voronoi F2-F1: small near cell borders -> crack lines.
float voronoiEdge(vec3 p) {
  vec3 i = floor(p), f = fract(p);
  float d1 = 8.0, d2 = 8.0;
  for (int x = -1; x <= 1; x++) for (int y = -1; y <= 1; y++) for (int z = -1; z <= 1; z++) {
    vec3 g = vec3(float(x), float(y), float(z));
    vec3 r = g + hash33(i + g) - f;
    float d = dot(r, r);
    if (d < d1) { d2 = d1; d1 = d; } else if (d < d2) d2 = d;
  }
  return sqrt(d2) - sqrt(d1);
}
`;function z_(n){let e=1+.12*(n-1);return n%5===0?{boss:!0,hpScale:1+.35*(n/5-1),drone:2+n,interceptor:0,hunter:0,frigate:0,rogue:0}:{boss:!1,hpScale:e,drone:3+n,interceptor:n>=2?1+Math.floor((n-2)/2):0,hunter:n>=3?1+Math.floor((n-3)/3):0,frigate:n>=4?1+Math.floor((n-4)/4):0,rogue:n>=6?Math.min(3,Math.floor((n-3)/3)):0}}function Ef(){return{wave:0,state:"break",timer:6,queue:[],spawnTimer:0,comp:null}}function D_(n){let e=[],t=n.drone;for(;t>0;){let i=Math.min(t,3+e.length%2);e.push({kind:"drone",n:i}),t-=i}for(let i of["interceptor","hunter","frigate","rogue"])for(let s=0;s<(n[i]||0);s++)e.push({kind:i,n:1});for(let i=e.length-1;i>0;i--){let s=(i*7+3)%(i+1);[e[i],e[s]]=[e[s],e[i]]}return e}function U_(n,e){e.wave++,e.comp=z_(e.wave),e.queue=D_(e.comp),e.state="fight",e.spawnTimer=e.comp.boss?4:.5,e.comp.boss&&n.spawnBoss(e.comp.hpScale),n.onWaveStart(e.wave,e.comp.boss)}function N_(n){let e=n.player,t=Math.random()*Math.PI*2,i=e.x+Math.cos(t)*1200,s=e.z+Math.sin(t)*1200,r=Math.hypot(i,s);return r>2920&&(i*=2920/r,s*=2920/r),{x:i,z:s}}function wf(n,e,t){if(e.state==="break"){e.timer-=t,e.timer<=0&&U_(n,e);return}if(e.state==="fight")if(e.queue.length){if(e.spawnTimer-=t,e.spawnTimer<=0){let i=e.queue.shift(),s=N_(n);for(let r=0;r<i.n;r++)n.spawnEnemy(i.kind,s.x+r%2*40-20,s.z+r*30,e.comp.hpScale);e.spawnTimer=e.comp.boss?5:1.6}}else n.enemies.some(i=>!i.dead)||(e.state="break",e.timer=15,n.onWaveClear(e.wave))}var lt={x:0,z:0,r:130,dockR:300};function Tf(n,e,t){let i={uTime:{value:0},uCam:{value:new U}},s=new Mt;n.add(s),s.add(new Ks(5926143,1705512,.7));let r=new Fi(16773341,2.4);r.position.set(-.6,1,-.35),s.add(r);let a=new Fi(3721471,.9);a.position.set(1,.35,.9),s.add(a);let o=new Fi(16727536,.35);o.position.set(.2,.4,-1),s.add(o),n.environment=F_(e);let l=new Pe(new gn(4e4,4e4),new mt({uniforms:i,depthWrite:!1,vertexShader:"varying vec3 vW; void main(){ vec4 w = modelMatrix * vec4(position,1.0); vW = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }",fragmentShader:`${Bi}
      uniform float uTime; varying vec3 vW;
      void main(){
        vec3 p = vec3(vW.xz * 0.00018, uTime * 0.004);
        vec3 w = vec3(fbm(p + 3.1), fbm(p + 7.7), 0.0);
        float n = fbm(p * 1.4 + w * 1.6);
        float m = fbm(p * 2.6 - w + 11.0);
        vec3 col = vec3(0.004, 0.006, 0.02);
        col = mix(col, vec3(0.13, 0.03, 0.25), smoothstep(0.35, 0.75, n));
        col = mix(col, vec3(0.02, 0.16, 0.30), smoothstep(0.45, 0.85, m) * 0.8);
        col += vec3(0.45, 0.06, 0.35) * pow(smoothstep(0.55, 0.95, n * m * 1.7), 2.0);
        col += vec3(0.05, 0.35, 0.40) * pow(smoothstep(0.62, 0.9, m), 3.0) * 0.6;
        gl_FragColor = vec4(col, 1.0);
      }`}));l.rotation.x=-Math.PI/2,l.position.y=-5200,l.renderOrder=-10,s.add(l);let c=[[-700,2200,2.2],[-1800,4200,3.2],[-3600,8e3,4.5]];for(let[T,b,O]of c){let V=Math.round(t.stars/3),I=new Float32Array(V*3),M=new Float32Array(V*3),A=new Float32Array(V),w=new ge;for(let k=0;k<V;k++)I[k*3]=Math.random()*b,I[k*3+1]=T-Math.random()*200,I[k*3+2]=Math.random()*b,w.setHSL([.6,.12,.55,.8][k%4],.6,.75+Math.random()*.25),M.set([w.r,w.g,w.b],k*3),A[k]=O*(.5+Math.random()**3*2.5);let F=new kt;F.setAttribute("position",new Vt(I,3)),F.setAttribute("color",new Vt(M,3)),F.setAttribute("size",new Vt(A,1));let H=new Zs(F,new mt({uniforms:{...i,uSize:{value:b}},transparent:!0,depthWrite:!1,blending:Tt,vertexShader:`uniform vec3 uCam; uniform float uSize; uniform float uTime; attribute float size; attribute vec3 color; varying vec3 vC; varying float vT;
        void main(){
          vec3 p = position; p.xz = uCam.xz + mod(p.xz - uCam.xz, uSize) - uSize * 0.5;
          vec4 mv = modelViewMatrix * vec4(p, 1.0);
          vT = 0.65 + 0.35 * sin(uTime * 2.0 + position.x * 0.37 + position.z * 0.11);
          vC = color; gl_PointSize = size * 900.0 / -mv.z * (1.0 + 0.4 * step(3.5, size)); gl_Position = projectionMatrix * mv; }`,fragmentShader:`varying vec3 vC; varying float vT; void main(){ vec2 d = gl_PointCoord - 0.5; float r = length(d);
        float a = smoothstep(0.5, 0.0, r); a = a * a; gl_FragColor = vec4(vC * vT * 1.6, a); }`}));H.frustumCulled=!1,H.renderOrder=-9,s.add(H)}let h=new Mt;h.position.set(-2900,-3900,-3900);let d=r.position.clone().normalize();h.add(new Pe(new Rt(950,64,48),new mt({uniforms:{...i,uSun:{value:d}},vertexShader:"varying vec3 vN; varying vec3 vP; void main(){ vN = normalize(mat3(modelMatrix) * normal); vP = position; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:`${Bi} uniform vec3 uSun; uniform float uTime; varying vec3 vN; varying vec3 vP;
      void main(){
        float lat = vP.y / 950.0;
        float band = fbm(vec3(lat * 9.0, vP.x * 0.002 + uTime * 0.01, vP.z * 0.002));
        vec3 a = vec3(0.55, 0.25, 0.45), b = vec3(0.95, 0.55, 0.30), c = vec3(0.25, 0.20, 0.55);
        vec3 col = mix(mix(c, a, smoothstep(0.3, 0.6, band)), b, smoothstep(0.55, 0.8, band + sin(lat * 18.0) * 0.08));
        float l = clamp(dot(vN, uSun), 0.0, 1.0);
        gl_FragColor = vec4(col * (0.04 + l * 1.1), 1.0);
      }`})));let f=new Pe(new Rt(1010,48,32),new mt({uniforms:{uSun:{value:d}},transparent:!0,side:nn,blending:Tt,depthWrite:!1,vertexShader:"varying vec3 vN; varying vec3 vV; void main(){ vN = normalize(mat3(modelMatrix) * normal); vec4 w = modelMatrix * vec4(position,1.0); vV = normalize(cameraPosition - w.xyz); gl_Position = projectionMatrix * viewMatrix * w; }",fragmentShader:`uniform vec3 uSun; varying vec3 vN; varying vec3 vV; void main(){ float f = pow(1.0 - abs(dot(vN, vV)), 3.0);
      float l = clamp(dot(-vN, uSun) * 0.5 + 0.6, 0.0, 1.0); gl_FragColor = vec4(vec3(0.5, 0.35, 1.0) * f * l * 1.4, f); }`}));h.add(f);let u=new Pe(new Mn(1250,2100,128,1),new mt({uniforms:{uSun:{value:d}},transparent:!0,side:Dt,depthWrite:!1,vertexShader:"varying vec3 vP; void main(){ vP = position; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:`${Bi} varying vec3 vP; void main(){ float r = (length(vP.xy) - 1250.0) / 850.0;
      float bands = vnoise(vec3(r * 60.0, 0.0, 0.0)) * 0.6 + vnoise(vec3(r * 13.0, 1.0, 0.0)) * 0.6;
      float a = smoothstep(0.0, 0.05, r) * smoothstep(1.0, 0.85, r) * bands * (1.0 - smoothstep(0.42, 0.46, r) * smoothstep(0.52, 0.48, r));
      gl_FragColor = vec4(mix(vec3(0.8, 0.6, 0.5), vec3(0.5, 0.45, 0.8), r) * 0.9, a * 0.75); }`}));u.rotation.set(-Math.PI/2+.45,.3,.2),h.add(u),s.add(h);let m=new Pe(new sn(160,3),new Qt({color:9076880,roughness:.95,flatShading:!0}));m.position.set(2300,-2600,-3600),s.add(m);let y=zh(1,1,7),g=new xn(y,new Qt({color:1381148,roughness:1,flatShading:!0}),t.bgRocks),p=[],E=new Ge,x=new Kt,v=new hn,P=new U,_=new U;for(let T=0;T<t.bgRocks;T++){let b=Math.random()*Math.PI*2,O=Math.sqrt(Math.random())*4500;p.push({x:Math.cos(b)*O,y:-700-Math.random()*1400,z:Math.sin(b)*O,s:8+Math.random()**2*45,rx:Math.random()*6,ry:Math.random()*6,sp:(Math.random()-.5)*.3})}s.add(g);let L=O_();s.add(L.group);let z=new Pe(new Mn(2994,3006,256),new Ye({color:new ge(16723285).multiplyScalar(1.6),transparent:!0,opacity:.55,side:Dt,depthWrite:!1}));return z.rotation.x=-Math.PI/2,s.add(z),{root:s,station:L,uniforms:i,update(T,b,O,V,I){i.uTime.value=b,i.uCam.value.copy(O.position),l.position.x=O.position.x,l.position.z=O.position.z,h.rotation.y+=T*.01;for(let M=0;M<p.length;M++){let A=p[M];A.rx+=A.sp*T,A.ry+=A.sp*T*.7,E.compose(_.set(A.x,A.y,A.z),x.setFromEuler(v.set(A.rx,A.ry,0)),P.setScalar(A.s)),g.setMatrixAt(M,E)}g.instanceMatrix.needsUpdate=!0,L.update(T,b,Math.hypot(V-lt.x,I-lt.z)<lt.dockR),z.material.opacity=.35+.2*Math.sin(b*3)}}}function F_(n){let e=new Ni;e.add(new Pe(new Rt(10,32,16),new mt({side:nn,vertexShader:"varying vec3 vP; void main(){ vP = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:`varying vec3 vP; void main(){ vec3 c = mix(vec3(0.05,0.02,0.12), vec3(0.25,0.35,0.7), smoothstep(-0.2, 0.9, vP.y));
      c += vec3(0.9,0.4,0.8) * pow(max(0.0, dot(vP, normalize(vec3(-0.6,0.5,-0.3)))), 8.0) * 2.0;
      c += vec3(0.2,0.8,1.0) * pow(max(0.0, dot(vP, normalize(vec3(0.8,0.2,0.6)))), 6.0); gl_FragColor = vec4(c, 1.0); }`})));let t=new qs(n),i=t.fromScene(e,.04).texture;return t.dispose(),i}function zh(n,e,t){let i=new sn(n,e),s=i.attributes.position,r=new U,a=(o,l,c)=>Math.sin(o*2.1+t)*Math.cos(l*2.7+t*1.7)*Math.sin(c*1.9+t*.3);for(let o=0;o<s.count;o++){r.fromBufferAttribute(s,o);let l=r.clone().normalize(),c=1+.28*a(l.x*2,l.y*2,l.z*2)+.12*a(l.x*5,l.y*5,l.z*5);r.copy(l).multiplyScalar(n*c),r.y*=.8,s.setXYZ(o,r.x,r.y,r.z)}return i.computeVertexNormals(),i}function O_(){let n=new Mt;n.position.set(lt.x,-30,lt.z);let e=new Qt({color:9082544,metalness:.8,roughness:.35}),t=new Qt({color:2435642,metalness:.6,roughness:.5}),i=new Ye({color:new ge(3733247).multiplyScalar(1.4)}),s=new Ye({color:new ge(16756797).multiplyScalar(2.5)}),r=new Pe(new bt(55,70,60,8),e);n.add(r);let a=new Pe(new Rt(48,24,12,0,Math.PI*2,0,Math.PI/2),new Qt({color:1716304,metalness:.2,roughness:.1,emissive:674416,emissiveIntensity:.8}));a.position.y=30,n.add(a);let o=new Pe(new bt(3,6,90,6),t);o.position.y=90,n.add(o);let l=new Pe(new Rt(6,8,6),s);l.position.y=138,n.add(l);let c=new Mt,h=new Pe(new jt(125,11,10,48),e);h.rotation.x=Math.PI/2,c.add(h);let d=new Pe(new jt(125,3,6,64),i);d.rotation.x=Math.PI/2,d.position.y=9,c.add(d);for(let m=0;m<6;m++){let y=new Pe(new At(70,8,10),t),g=m/6*Math.PI*2;y.position.set(Math.cos(g)*90,0,Math.sin(g)*90),y.rotation.y=-g,c.add(y);let p=new Pe(new At(26,18,30),e);p.position.set(Math.cos(g)*125,0,Math.sin(g)*125),p.rotation.y=-g,c.add(p)}n.add(c);let f=[];for(let m=0;m<4;m++){let y=m/4*Math.PI*2+Math.PI/4,g=new Pe(new At(110,6,12),t);g.position.set(Math.cos(y)*55,-18,Math.sin(y)*55),g.rotation.y=-y,n.add(g);let p=new Pe(new Rt(4,8,6),new Ye({color:new ge(m%2?16727386:7208842).multiplyScalar(3)}));p.position.set(Math.cos(y)*112,-14,Math.sin(y)*112),n.add(p),f.push(p)}let u=new Pe(new Mn(lt.dockR-4,lt.dockR,96),new Ye({color:new ge(3733247).multiplyScalar(1.5),transparent:!0,opacity:.25,side:Dt,depthWrite:!1}));return u.rotation.x=-Math.PI/2,u.position.y=31,n.add(u),{group:n,update(m,y,g){c.rotation.y+=m*.15,f.forEach((p,E)=>p.visible=Math.sin(y*4+E*1.6)>0),u.material.opacity=g?.45+.25*Math.sin(y*6):.15}}}var ri=new ge;function If(n,e){let t=Mf,i=new Float32Array(t*3),s=new Float32Array(t*3),r=new Float32Array(t),a=new Float32Array(t),o=new Float32Array(t*3),l=new Float32Array(t),c=new Float32Array(t),h=new Float32Array(t),d=new Float32Array(t),f=new Float32Array(t),u=new kt;u.setAttribute("position",new Vt(i,3).setUsage(Nn)),u.setAttribute("color",new Vt(s,3).setUsage(Nn)),u.setAttribute("size",new Vt(r,1).setUsage(Nn)),u.setAttribute("alpha",new Vt(a,1).setUsage(Nn));let m=new mt({uniforms:{uScale:{value:1e3}},transparent:!0,depthWrite:!1,blending:Tt,vertexShader:`uniform float uScale; attribute float size; attribute float alpha; attribute vec3 color; varying vec3 vC; varying float vA;
      void main(){ vC = color; vA = alpha; vec4 mv = modelViewMatrix * vec4(position,1.0); gl_PointSize = alpha > 0.0 ? size * uScale / -mv.z : 0.0; gl_Position = projectionMatrix * mv; }`,fragmentShader:`varying vec3 vC; varying float vA; void main(){ vec2 d = gl_PointCoord - 0.5; float r2 = dot(d,d) * 4.0;
      float a = (exp(-r2 * 3.5) + exp(-r2 * 18.0) * 0.6) * smoothstep(1.0, 0.55, r2); gl_FragColor = vec4(vC * vA * a, a * vA); }`}),y=new Zs(u,m);y.frustumCulled=!1,y.renderOrder=5,n.add(y);let g=0,p=e.q.particles;function E(k,Y,Z,N,ie,W,K,ae,ne,ue,xe,Ee,Le=0){let ee=g;g=(g+1)%p,i[ee*3]=k,i[ee*3+1]=Y,i[ee*3+2]=Z,o[ee*3]=N,o[ee*3+1]=ie,o[ee*3+2]=W,l[ee]=c[ee]=K,h[ee]=ae,d[ee]=ne,f[ee]=Le,s[ee*3]=ue,s[ee*3+1]=xe,s[ee*3+2]=Ee,a[ee]=1,r[ee]=ae}let x=300,v=new co(1,0),P=new xn(v,new Qt({color:16777215,metalness:.5,roughness:.6,flatShading:!0}),x);P.instanceMatrix.setUsage(Nn),P.frustumCulled=!1;let _=Array.from({length:x},()=>({l:0,x:0,y:0,z:0,vx:0,vy:0,vz:0,rx:0,ry:0,wx:0,wy:0,s:1,ml:1})),L=new Ge().makeScale(0,0,0);for(let k=0;k<x;k++)P.setMatrixAt(k,L),P.setColorAt(k,ri.set(16777215));n.add(P);let z=0,T=new Mn(.93,1,96);T.rotateX(-Math.PI/2);let b=Array.from({length:14},()=>{let k=new Pe(T,new Ye({color:16777215,transparent:!0,opacity:0,blending:Tt,depthWrite:!1,side:Dt}));return k.visible=!1,k.userData={t:0,dur:1,r:1},n.add(k),k}),O=0,V=Array.from({length:e.q.lights},()=>{let k=new mo(16777215,0,520,1);return k.userData={t:0,dur:1,i:0},n.add(k),k}),I=0,M=document.getElementById("floaters"),A=Array.from({length:48},()=>{let k=document.createElement("div");return k.style.display="none",M.appendChild(k),{d:k,l:0,x:0,z:0,y:0}}),w=0,F={x:0,y:0},H={spawn:E,setCap(k){p=Math.min(t,k),g=0},burst(k,Y,{n:Z=10,color:N=16777215,speed:ie=200,life:W=.6,size:K=8,sizeEnd:ae=0,y:ne=0,dir:ue=null,spread:xe=Math.PI,drag:Ee=2,vy:Le=40}={}){ri.set(N);for(let ee=0;ee<Z;ee++){let de=ue===null?Math.random()*Math.PI*2:ue+(Math.random()-.5)*xe*2,B=ie*(.3+Math.random()*.7),Ie=W*(.5+Math.random()*.5);E(k,ne,Y,Math.cos(de)*B,(Math.random()-.3)*Le,Math.sin(de)*B,Ie,K*(.6+Math.random()*.6),ae,ri.r,ri.g,ri.b,Ee)}},sparks(k,Y,Z,N=16769184,ie=6){H.burst(k,Y,{n:ie,color:N,speed:420,life:.3,size:4,sizeEnd:.5,dir:Z,spread:.9,drag:4,y:4})},muzzle(k,Y,Z,N,ie,W=1){ri.set(ie),E(k,Y,Z,Math.cos(N)*60,0,Math.sin(N)*60,.07,22*W,6*W,ri.r*2,ri.g*2,ri.b*2),H.burst(k,Z,{n:3,color:ie,speed:260*W,life:.12,size:5*W,dir:N,spread:.35,y:Y,drag:6})},flash(k,Y,Z,N=1,ie=.12,W=30){if(!V.length)return;let K=V[I];I=(I+1)%V.length,K.position.set(k,W,Y),K.color.set(Z),K.userData.t=ie,K.userData.dur=ie,K.userData.i=260*N,K.intensity=K.userData.i},shockwave(k,Y,Z,N=16777215,ie=.6){let W=b[O];O=(O+1)%b.length,W.visible=!0,W.position.set(k,2,Y),W.material.color.set(N).multiplyScalar(2),Object.assign(W.userData,{t:0,dur:ie,r:Z})},debris(k,Y,Z,N,ie=160,W=4){for(let K=0;K<Z;K++){let ae=z;z=(z+1)%x;let ne=Math.random()*Math.PI*2,ue=ie*(.3+Math.random());Object.assign(_[ae],{l:1.4+Math.random()*1.6,x:k,y:0,z:Y,vx:Math.cos(ne)*ue,vy:(Math.random()-.3)*ue*.6,vz:Math.sin(ne)*ue,rx:Math.random()*6,ry:Math.random()*6,wx:(Math.random()-.5)*12,wy:(Math.random()-.5)*12,s:W*(.5+Math.random())}),_[ae].ml=_[ae].l,P.setColorAt(ae,ri.set(N).offsetHSL(0,0,(Math.random()-.5)*.2))}P.instanceColor.needsUpdate=!0},explosion(k,Y,Z=1,N=16747069){H.flash(k,Y,N,2.2*Z,.35,40),H.burst(k,Y,{n:Math.round(18*Z+8),color:16765562,speed:160*Z,life:.7,size:22*Z,sizeEnd:34*Z,drag:3.5,vy:60}),H.burst(k,Y,{n:Math.round(12*Z+4),color:N,speed:240*Z,life:.9,size:18*Z,sizeEnd:6,drag:2.5}),H.burst(k,Y,{n:Math.round(20*Z+6),color:16773824,speed:620*Math.sqrt(Z),life:.5,size:4,sizeEnd:.5,drag:1.6,vy:120}),H.burst(k,Y,{n:Math.round(6*Z+2),color:16728096,speed:70,life:2.2,size:6,sizeEnd:0,drag:.6}),E(k,10,Y,0,0,0,.18,60*Z,140*Z,2.5,2.2,1.8),H.shockwave(k,Y,90*Z,N,.5+.15*Z),Z>1.5&&H.shockwave(k,Y,160*Z,16777215,.9)},floater(k,Y,Z,N="",ie=30){let W=A[w];w=(w+1)%A.length,W.d.textContent=Z,W.d.className=N,W.d.style.display="block",W.l=N==="loot"?1.1:.8,W.x=k+(Math.random()-.5)*20,W.z=Y,W.y=ie},update(k,Y){m.uniforms.uScale.value=window.innerHeight*1.2*e.renderer.getPixelRatio();for(let N=0;N<p;N++){if(l[N]<=0){a[N]!==0&&(a[N]=0);continue}l[N]-=k;let ie=Math.max(0,l[N]/c[N]),W=Math.exp(-f[N]*k);o[N*3]*=W,o[N*3+1]*=W,o[N*3+2]*=W,i[N*3]+=o[N*3]*k,i[N*3+1]+=o[N*3+1]*k,i[N*3+2]+=o[N*3+2]*k,r[N]=d[N]+(h[N]-d[N])*ie,a[N]=l[N]>0?Math.min(1,ie*1.6):0}u.attributes.position.needsUpdate=u.attributes.size.needsUpdate=u.attributes.alpha.needsUpdate=u.attributes.color.needsUpdate=!0;let Z=k_;for(let N=0;N<x;N++){let ie=_[N];if(ie.l<=0)continue;ie.l-=k;let W=Math.exp(-.8*k);ie.vx*=W,ie.vz*=W,ie.vy*=W,ie.x+=ie.vx*k,ie.y+=ie.vy*k,ie.z+=ie.vz*k,ie.rx+=ie.wx*k,ie.ry+=ie.wy*k;let K=ie.l>0?ie.s*Math.min(1,ie.l/(ie.ml*.4)):0;Rf.set(ie.rx,ie.ry,0),Af.setFromEuler(Rf),Cf.set(ie.x,ie.y,ie.z),Pf.setScalar(K),P.setMatrixAt(N,Z.compose(Cf,Af,Pf))}P.instanceMatrix.needsUpdate=!0;for(let N of b){if(!N.visible)continue;let ie=N.userData;ie.t+=k;let W=ie.t/ie.dur;if(W>=1){N.visible=!1;continue}let K=1-(1-W)**3;N.scale.setScalar(ie.r*(.15+K)),N.material.opacity=(1-W)*.75}for(let N of V){if(N.userData.t<=0){N.intensity=0;continue}N.userData.t-=k,N.intensity=N.userData.i*Math.max(0,N.userData.t/N.userData.dur)}for(let N of A)if(!(N.l<=0)){if(N.l-=k,N.y+=k*60,N.l<=0){N.d.style.display="none";continue}Po(Y,N.x,N.y,N.z,F),N.d.style.left=F.x+"px",N.d.style.top=F.y-(1-N.l)*20+"px",N.d.style.opacity=Math.min(1,N.l*3)}},clear(){l.fill(0),a.fill(0);for(let k of _)k.l=0;for(let k=0;k<x;k++)P.setMatrixAt(k,L);P.instanceMatrix.needsUpdate=!0,b.forEach(k=>k.visible=!1),V.forEach(k=>{k.userData.t=0,k.intensity=0}),A.forEach(k=>{k.l=0,k.d.style.display="none"})}};return H}var k_=new Ge,Af=new Kt,Rf=new hn,Cf=new U,Pf=new U;var ht=null,us=null,Uh=null,Lo=null,hs=null,Nh=.7,Dh={},Io={x:0,z:0};function B_(){if(ht){ht.state==="suspended"&&ht.resume();return}try{ht=new(window.AudioContext||window.webkitAudioContext)}catch{return}us=ht.createGain(),us.gain.value=Nh;let n=ht.createDynamicsCompressor();n.threshold.value=-14,n.ratio.value=6,us.connect(n).connect(ht.destination),Lo=ht.createGain(),Lo.connect(us),Uh=ht.createBuffer(1,ht.sampleRate*2,ht.sampleRate);let e=Uh.getChannelData(0);for(let t=0;t<e.length;t++)e[t]=Math.random()*2-1}function H_(n,e){let t=ht.createGain();if(t.gain.value=n,e&&ht.createStereoPanner){let i=ht.createStereoPanner();i.pan.value=e,t.connect(i).connect(Lo)}else t.connect(Lo);return t}function Lf(n,e,t,i,s=1){n.gain.setValueAtTime(1e-4,e),n.gain.exponentialRampToValueAtTime(s,e+t),n.gain.exponentialRampToValueAtTime(1e-4,e+t+i)}function tt(n,e,t,i,s,r,a=1,o=.005){let l=ht.createOscillator(),c=ht.createGain();l.type=e,l.frequency.setValueAtTime(t,s),i!==t&&l.frequency.exponentialRampToValueAtTime(Math.max(1,i),s+r),Lf(c,s,o,r,a),l.connect(c).connect(n),l.start(s),l.stop(s+o+r+.05)}function Yt(n,e,t,i,s,r,a=1,o=1,l=.005){let c=ht.createBufferSource();c.buffer=Uh,c.loop=!0;let h=ht.createBiquadFilter();h.type=e,h.Q.value=o,h.frequency.setValueAtTime(t,s),h.frequency.exponentialRampToValueAtTime(Math.max(20,i),s+r);let d=ht.createGain();Lf(d,s,l,r,a),c.connect(h).connect(d).connect(n),c.start(s,Math.random()),c.stop(s+l+r+.05)}var V_={pulse:(n,e)=>{tt(n,"square",1500,320,e,.07,.18),tt(n,"sine",900,200,e,.05,.2)},turret:(n,e)=>tt(n,"square",1900,600,e,.04,.08),plasma:(n,e)=>{tt(n,"sawtooth",420,70,e,.28,.25),Yt(n,"lowpass",2e3,200,e,.18,.4)},heavy:(n,e)=>{tt(n,"sawtooth",200,40,e,.5,.4),Yt(n,"lowpass",1200,80,e,.45,.8)},missile:(n,e)=>Yt(n,"bandpass",600,3e3,e,.35,.5,2,.03),enemyShot:(n,e)=>tt(n,"square",700,180,e,.08,.1),hit:(n,e)=>Yt(n,"highpass",3e3,1500,e,.05,.35),crit:(n,e)=>{Yt(n,"highpass",4e3,2e3,e,.06,.4),tt(n,"triangle",2400,1800,e,.09,.25)},armor:(n,e)=>tt(n,"triangle",2800,2600,e,.08,.15),shieldHit:(n,e)=>{tt(n,"sine",900,600,e,.12,.3),tt(n,"sine",1360,900,e,.1,.15)},shieldBreak:(n,e)=>{Yt(n,"bandpass",3e3,400,e,.5,.6,3),tt(n,"sawtooth",600,100,e,.4,.2)},explode:(n,e)=>{Yt(n,"lowpass",1400,60,e,.8,.9),tt(n,"sine",90,30,e,.5,.7)},explodeBig:(n,e)=>{Yt(n,"lowpass",2e3,40,e,2.2,1),tt(n,"sine",70,20,e,1.5,1),Yt(n,"bandpass",500,80,e+.1,1.5,.5)},rock:(n,e)=>{Yt(n,"lowpass",900,80,e,.45,.8),tt(n,"triangle",160,50,e,.25,.4)},pickup:(n,e)=>{tt(n,"sine",900,1400,e,.06,.15)},credit:(n,e)=>{tt(n,"triangle",1600,1600,e,.05,.12),tt(n,"triangle",2400,2400,e+.04,.06,.1)},rare:(n,e)=>{[880,1108,1318,1760].forEach((t,i)=>tt(n,"sine",t,t,e+i*.07,.4,.2))},dash:(n,e)=>Yt(n,"bandpass",400,4e3,e,.25,.6,1.5,.02),emp:(n,e)=>{tt(n,"sine",160,30,e,.9,.8),Yt(n,"highpass",6e3,1500,e,.7,.5),tt(n,"sawtooth",2e3,60,e,.6,.15)},levelup:(n,e)=>{[523,659,784,1046].forEach((t,i)=>tt(n,"triangle",t,t,e+i*.08,.3,.25))},ui:(n,e)=>tt(n,"sine",1200,1e3,e,.04,.12),buy:(n,e)=>{tt(n,"triangle",700,700,e,.08,.2),tt(n,"triangle",1050,1050,e+.08,.15,.2)},deny:(n,e)=>tt(n,"square",200,150,e,.15,.15),charge:(n,e)=>tt(n,"sawtooth",120,900,e,1.1,.2,.9),alarm:(n,e)=>{for(let t=0;t<3;t++)tt(n,"sawtooth",440,440,e+t*.5,.22,.25),tt(n,"sawtooth",330,330,e+t*.5+.25,.22,.25)},beam:(n,e)=>{tt(n,"sawtooth",60,55,e,3,.4,.2),Yt(n,"bandpass",800,1200,e,3,.3,4,.2)},warp:(n,e)=>{tt(n,"sine",40,400,e,1.2,.6,.6),Yt(n,"bandpass",200,3e3,e,1.2,.4,2,.6)},rail:(n,e)=>{tt(n,"sawtooth",1800,90,e,.35,.35),Yt(n,"highpass",6e3,800,e,.3,.6),tt(n,"sine",120,40,e,.4,.5)},zap:(n,e)=>{Yt(n,"bandpass",5e3,2500,e,.12,.5,6),tt(n,"square",1300,2600,e,.06,.08)},beamTick:(n,e)=>Yt(n,"bandpass",1800,1400,e,.12,.25,8),charge2:(n,e)=>tt(n,"sine",300,1400,e,.8,.12,.6),evolve:(n,e)=>{tt(n,"sine",80,600,e,1.2,.5,.5),[523,784,1046,1568].forEach((t,i)=>tt(n,"triangle",t,t,e+.5+i*.09,.5,.22)),Yt(n,"bandpass",300,5e3,e,1.1,.35,2,.4)},hurt:(n,e)=>{Yt(n,"lowpass",800,200,e,.15,.6),tt(n,"square",150,80,e,.12,.2)}},et={init:B_,setVolume(n){Nh=n,us&&(us.gain.value=n)},setListener(n,e){Io.x=n,Io.z=e},play(n,e,t,i=1){if(!ht||ht.state!=="running"||Nh<=0)return;let s=ht.currentTime;if(Dh[n]&&s-Dh[n]<.03)return;Dh[n]=s;let r=0;if(e!==void 0){let a=e-Io.x,o=t-Io.z,l=Math.hypot(a,o);if(i*=Math.max(0,1-l/1700),i<=.02)return;r=Math.max(-.8,Math.min(.8,a/900))}V_[n](H_(i,r),s)},ambient(n,e=0){if(ht){if(n&&!hs){let t=ht.createGain();t.gain.value=0;let i=ht.createBiquadFilter();i.type="lowpass",i.frequency.value=220;let s=[55,55.4,82.4].map(o=>{let l=ht.createOscillator();return l.type="sawtooth",l.frequency.value=o,l.connect(i),l.start(),l}),r=ht.createOscillator(),a=ht.createGain();r.frequency.value=.07,a.gain.value=120,r.connect(a).connect(i.frequency),r.start(),i.connect(t).connect(us),hs={g:t,lp:i,oscs:s,lfo:r},t.gain.linearRampToValueAtTime(.09,ht.currentTime+2)}else if(!n&&hs){let t=hs;hs=null,t.g.gain.linearRampToValueAtTime(0,ht.currentTime+1),setTimeout(()=>{t.oscs.forEach(i=>i.stop()),t.lfo.stop()},1200)}hs&&hs.lp.frequency.setTargetAtTime(220+e*500,ht.currentTime,1)}}};var zo=class{constructor(e=128){this.cell=e,this.map=new Map}clear(){this.map.clear()}key(e,t){return e*73856093^t*19349663}insert(e){let t=this.cell,i=Math.floor((e.x-e.r)/t),s=Math.floor((e.x+e.r)/t),r=Math.floor((e.z-e.r)/t),a=Math.floor((e.z+e.r)/t);for(let o=i;o<=s;o++)for(let l=r;l<=a;l++){let c=this.key(o,l),h=this.map.get(c);h||this.map.set(c,h=[]),h.push(e)}}query(e,t,i,s=[]){s.length=0;let r=this.cell,a=Math.floor((e-i)/r),o=Math.floor((e+i)/r),l=Math.floor((t-i)/r),c=Math.floor((t+i)/r);for(let h=a;h<=o;h++)for(let d=l;d<=c;d++){let f=this.map.get(this.key(h,d));if(f)for(let u of f){if(u.dead||s.includes(u))continue;let m=u.x-e,y=u.z-t,g=u.r+i;m*m+y*y<=g*g&&s.push(u)}}return s}};var xt=(n,e,t,i)=>Math.atan2(i-e,t-n);function Wt(n){for(;n>Math.PI;)n-=Math.PI*2;for(;n<-Math.PI;)n+=Math.PI*2;return n}function Fn(n,e,t){let i=Wt(e-n);return Math.abs(i)<=t?e:n+Math.sign(i)*t}function nr(n,e,t,i,s,r,a){let o=t-n,l=i-e,c=s*s+r*r-a*a,h=2*(o*s+l*r),d=o*o+l*l,f;if(Math.abs(c)<1e-6)f=h!==0?-d/h:-1;else{let u=h*h-4*c*d;if(u<0)return{x:t,z:i};let m=Math.sqrt(u),y=(-h-m)/(2*c),g=(-h+m)/(2*c);f=Math.min(y,g)>0?Math.min(y,g):Math.max(y,g)}return f>0?{x:t+s*f,z:i+r*f}:{x:t,z:i}}function Bt(n,e,t,i,s,r={}){let a=Math.cos(t),o=Math.sin(t);return r.x=n+i*a-s*o,r.z=e+i*o+s*a,r}var zf=1024,Fh=256,Df=160,Do=new Ge,$r=new Kt,qr=new U,Uo=new U,W_=new U(0,1,0),No=new ge,Yr=new Ge().makeScale(0,0,0),ir=[],Fo=(n,e)=>n==="all"||e.team!==n;function yn(n,e,t,i={}){if(e.proxy&&(e.critZone&&!e.proxy.shielded&&(i={...i,crit:!0}),t*=e.mul||1,e=e.proxy),e.dead||e.invuln>0||t<=0)return 0;if(e.isRock&&i.fromPlayer&&n.player&&(t*=n.player.stats.mining||1),e.overloadT>0)return i.x!==void 0&&e.shieldMesh&&e.shieldMesh.userData.hit(i.x-e.x,i.z-e.z),i.silent||n.audio.play("shieldHit",e.x,e.z,.6),e.lastHit=n.time,0;if(e.shielded)return i.x!==void 0&&e.shieldMesh&&e.shieldMesh.userData.hit(i.x-e.x,i.z-e.z),i.silent||(n.fx.sparks(i.x??e.x,i.z??e.z,xt(e.x,e.z,i.x??e.x,i.z??e.z),3733247,4),n.audio.play("shieldHit",e.x,e.z,.5)),e.onShieldedHit&&e.onShieldedHit(n,t,i),0;let s=!1;if(e.armorArc&&i.x!==void 0){let a=xt(e.x,e.z,i.x,i.z);Math.abs(Wt(a-e.angle))<e.armorArc&&(t*=.25,s=!0)}e.dmgMul&&(t*=e.dmgMul);let r=t;if(e.shield>0){let a=Math.min(e.shield,r);e.shield-=a,r-=a,e.shieldMesh&&i.x!==void 0&&e.shieldMesh.userData.hit(i.x-e.x,i.z-e.z),e.shield<=0?(n.fx.burst(e.x,e.z,{n:18,color:3721471,speed:260,life:.5,size:6,drag:3}),n.audio.play("shieldBreak",e.x,e.z,.6)):i.silent||n.audio.play("shieldHit",e.x,e.z,e.team==="player"?.8:.35)}return e.armor&&(r*=1-e.armor),e.hp-=r,e.hitT=.12,e.lastHit=n.time,i.silent||(e===n.player?n.fx.floater(e.x,e.z,"-"+Math.round(t),"player"):i.fromPlayer&&e.team!=="neutral"&&n.fx.floater(e.x,e.z,Math.round(t)+(i.crit?"!":""),i.crit?"crit":""),s?(n.fx.sparks(i.x,i.z,xt(e.x,e.z,i.x,i.z),16777215,5),n.audio.play("armor",e.x,e.z,.6)):i.crit?n.audio.play("crit",e.x,e.z):n.audio.play("hit",e.x,e.z,.4),i.fromPlayer&&e.team!=="neutral"&&n.ui.hitmark(i.crit)),e.onDamage&&e.onDamage(n,t,i),e.hp<=0&&!e.dead&&(e.dead=!0,e.die(n,i)),t}function ds(n,e,t,i,s,r,a={}){n.grid.query(e,t,i,ir);let o=ir.slice();for(let l of o){if(l===a.except||!Fo(r,l))continue;let c=Math.hypot(l.x-e,l.z-t),h=1-.5*Math.min(1,Math.max(0,c-l.r)/i);if(yn(n,l,s*h,{...a,x:e,z:t,silent:a.silent??!0}),a.push&&l.vx!==void 0&&!l.heavy){let d=xt(e,t,l.x,l.z);l.vx+=Math.cos(d)*a.push*h,l.vz+=Math.sin(d)*a.push*h}}}function Nf(n,e){let t=new ao(.5,1,2,6).rotateZ(Math.PI/2),i=new xn(t,new Ye({color:16777215,transparent:!0,blending:Tt,depthWrite:!1}),zf),s=new xn(new sn(1,2),new Ye({color:16777215}),Fh),r=new xn(new sn(1,2),new Ye({color:16777215,transparent:!0,opacity:.35,blending:Tt,depthWrite:!1}),Fh),a=new bt(1.2,1.6,10,6).rotateZ(-Math.PI/2),o=new xn(a,new Qt({color:11581124,metalness:.7,roughness:.3}),Df);for(let x of[i,s,r,o]){x.instanceMatrix.setUsage(Nn),x.frustumCulled=!1;for(let v=0;v<x.count;v++)x.setMatrixAt(v,Yr),x.setColorAt(v,No.set(16777215));n.add(x)}let l={bolt:[],orb:[],missile:[]},c={bolt:zf,orb:Fh,missile:Df},h=[];function d(x){let v=l[x],P=v.find(_=>!_.active);return P||(v.length>=c[x]?(P=v.reduce((_,L)=>_.life<L.life?_:L),f(P)):(P={kind:x,idx:v.length,active:!1},v.push(P))),P.active=!0,h.push(P),P}function f(x){if(!x.active)return;x.active=!1;let v=h.indexOf(x);v>=0&&h.splice(v,1),x.kind==="bolt"?i.setMatrixAt(x.idx,Yr):x.kind==="orb"?(s.setMatrixAt(x.idx,Yr),r.setMatrixAt(x.idx,Yr)):o.setMatrixAt(x.idx,Yr)}function u(x){let v=d(x.kind);Object.assign(v,{x:x.x,z:x.z,angle:x.angle,speed:x.speed,vx:Math.cos(x.angle)*x.speed,vz:Math.sin(x.angle)*x.speed,dmg:x.dmg,life:x.life,team:x.team,r:x.r??4,len:x.len??30,splash:x.splash||0,crit:!!x.crit,turn:x.turn||0,target:x.target||null,owner:x.owner||null,size:x.size||1,maxSpeed:x.speed,age:0,hp:1,push:x.push||0,pierce:x.pierce||0,ricochet:x.ricochet||0,frags:x.frags||0,zap:x.zap||0,zapRange:x.zapRange||0,vortex:x.vortex||0,zapT:0,noCollide:!!x.noCollide,hits:null}),v.color=(v.color||new ge).set(x.color),x.kind==="missile"&&(v.speed=x.speed*.4,v.vx=Math.cos(x.angle)*v.speed,v.vz=Math.sin(x.angle)*v.speed,v.r=7);let P=v.crit?4.5:3;return No.copy(v.color).multiplyScalar(P),v.kind==="bolt"?i.setColorAt(v.idx,No):v.kind==="orb"&&(s.setColorAt(v.idx,No),r.setColorAt(v.idx,v.color)),v}function m(x,v,P,_,L=x,z=v){let T=null,b=_*_,O=P==="player"?e.enemies:[e.player];for(let V of O){if(!V||V.dead||V.untargetable)continue;let I=(V.x-L)**2+(V.z-z)**2;I<b&&(b=I,T=V)}return T}function y(x,v,P,_,L,z={}){let T=v.count||1,b=v.kind==="pulse"?"bolt":v.kind==="plasma"?"orb":"missile",O=Math.random()<(z.crit||0),V=z.target;b==="missile"&&V===void 0&&(V=m(x.x,x.z,L,700,z.aimX,z.aimZ)),x.mi=x.mi||0;for(let I=0;I<T;I++){let M=_[x.mi++%_.length],A=T>1?(I/(T-1)-.5)*2*v.spread:0,w=P+A+(Math.random()-.5)*(b==="missile"?.1:v.spread*.6),F=O&&(b!=="missile"||I===0);u({kind:b,team:L,x:M.x,z:M.z,angle:b==="missile"&&T>1?P+A*1.6:w,speed:v.speed,dmg:v.dmg*(F?2:1),life:v.life,color:v.color,r:b==="orb"?7*(v.size||1):3,len:v.len||(L==="player"?34:26),splash:v.splash,crit:F,turn:v.turn,target:V,owner:x,size:v.size||1,push:v.push,pierce:v.pierce,ricochet:v.ricochet,frags:v.frags}),z.fx!==!1&&e.fx.muzzle(M.x,4,M.z,w,v.color,b==="orb"?1.6*(v.size||1):1)}return z.fx!==!1&&e.fx.flash(_[0].x,_[0].z,v.color,b==="orb"?1.4*(v.size||1):.6,.08),z.sound&&e.audio.play(z.sound,x.x,x.z,z.vol??1),v.recoil&&x.vx!==void 0&&(x.vx-=Math.cos(P)*v.recoil,x.vz-=Math.sin(P)*v.recoil),L==="player"&&b!=="missile"&&e.onPlayerFire&&e.onPlayerFire(x.x,x.z,P),O}function g(x,v,P,_){let L={x:x.x-Math.cos(x.angle)*10,z:x.z-Math.sin(x.angle)*10,crit:x.crit,fromPlayer:x.team==="player"&&!x.owner?.ally,team:x.team};if(v&&yn(e,v,x.dmg,L),x.frags)for(let z=0;z<x.frags;z++){let T=z/x.frags*Math.PI*2+Math.random()*.3;u({kind:"bolt",team:x.team,x:P,z:_,angle:T,speed:900,dmg:x.dmg*.3,life:.28,color:x.color.getHex(),r:3,len:16,owner:v})}x.splash>0?(ds(e,P,_,x.splash,x.dmg*.6,x.team,{except:v,fromPlayer:L.fromPlayer,push:x.push}),e.fx.explosion(P,_,x.splash/90,x.color.getHex()),e.audio.play(x.splash>80?"explode":"hit",P,_,.7),x.team==="player"&&e.shake(x.splash/30)):(e.fx.sparks(P,_,x.angle+Math.PI,x.color.getHex(),x.crit?12:6),x.crit&&e.fx.burst(P,_,{n:8,color:16765501,speed:200,life:.35,size:9,drag:4}),e.fx.spawn(P,6,_,0,0,0,.08,18,4,x.color.r*2,x.color.g*2,x.color.b*2))}function p(x){let v=h.filter(P=>P.kind==="missile"&&P.team!=="player");for(let P=h.length-1;P>=0;P--){let _=h[P];if(!_)continue;if(_.life-=x,_.age+=x,_.life<=0){_.kind!=="bolt"&&_.splash&&g(_,null,_.x,_.z),f(_);continue}if(_.kind==="missile"){(!_.target||_.target.dead)&&(_.target=_.age>.15?m(_.x,_.z,_.team,650):null),_.target&&_.age>.12&&(_.angle=Fn(_.angle,xt(_.x,_.z,_.target.x,_.target.z),_.turn*x)),_.speed=Math.min(_.maxSpeed,_.speed+_.maxSpeed*1.6*x),_.vx=Math.cos(_.angle)*_.speed,_.vz=Math.sin(_.angle)*_.speed;let M=_.x-Math.cos(_.angle)*7,A=_.z-Math.sin(_.angle)*7;e.fx.spawn(M,4,A,-_.vx*.1+(Math.random()-.5)*20,0,-_.vz*.1+(Math.random()-.5)*20,.35,7,1,_.color.r*1.5,_.color.g*1.2,_.color.b),e.fx.spawn(M,4,A,(Math.random()-.5)*15,5,(Math.random()-.5)*15,.8,5,12,.12,.1,.14)}else if(_.zap){if(_.zapT-=x,_.zapT<=0){_.zapT=.2,e.grid.query(_.x,_.z,_.zapRange,ir);let M=ir.filter(A=>A.team==="enemy"&&!A.dead&&!A.ghost).slice(0,3);for(let A of M)yn(e,A,_.zap*.2,{x:_.x,z:_.z,fromPlayer:!0,silent:e.frame%3!==0}),e.arsenal.bolt(_.x,_.z,A.x,A.z,_.color.getHex(),2.5);M.length&&e.audio.play("zap",_.x,_.z,.25)}if(_.vortex)for(let M of e.enemies){if(M.dead||M.custom)continue;let A=_.x-M.x,w=_.z-M.z,F=Math.hypot(A,w);if(F<_.zapRange*1.6&&F>5){let H=_.vortex*x*(M.heavy?.35:1);M.vx+=A/F*H,M.vz+=w/F*H}}Math.random()<.7&&e.fx.spawn(_.x,4,_.z,(Math.random()-.5)*60,0,(Math.random()-.5)*60,.3,9,0,_.color.r,_.color.g,_.color.b)}else _.kind==="orb"&&Math.random()<.6&&e.fx.spawn(_.x,4,_.z,(Math.random()-.5)*40,0,(Math.random()-.5)*40,.25,6*_.size,0,_.color.r,_.color.g,_.color.b);let L=_.x,z=_.z;if(_.x+=_.vx*x,_.z+=_.vz*x,_.noCollide){E(_);continue}let T=(L+_.x)/2,b=(z+_.z)/2,O=Math.hypot(_.x-L,_.z-z)/2;e.grid.query(T,b,O+_.r+4,ir);let V=null,I=2;for(let M of ir){if(!Fo(_.team,M)||M===_.owner||M.ghost||_.hits&&_.hits.has(M))continue;let A=Uf(L,z,_.x,_.z,M.x,M.z,M.r+_.r);A>=0&&A<I&&(I=A,V=M)}if(!V&&_.team==="player"){for(let M of v)if(M.active&&Uf(L,z,_.x,_.z,M.x,M.z,M.r+_.r)>=0){e.fx.explosion(M.x,M.z,.4,M.color.getHex()),e.audio.play("hit",M.x,M.z),f(M),_.kind!=="orb"&&(f(_),V="x");break}if(V==="x")continue}if(V){let M=Math.max(0,I),A=L+(_.x-L)*M,w=z+(_.z-z)*M;if(_.x=A,_.z=w,g(_,V,A,w),_.pierce>0||_.ricochet>0){if((_.hits||=new Set).add(V),_.pierce>0){_.pierce--,_.dmg*=.85,E(_);continue}_.ricochet--;let F=null,H=600;for(let k of e.enemies){if(k.dead||k.untargetable||_.hits.has(k))continue;let Y=Math.hypot(k.x-A,k.z-w);Y<H&&(H=Y,F=k)}if(F)_.angle=xt(A,w,F.x,F.z);else{let k=xt(V.x,V.z,A,w);_.angle=2*k-_.angle+Math.PI}_.vx=Math.cos(_.angle)*_.speed,_.vz=Math.sin(_.angle)*_.speed,_.life=Math.max(_.life,.35),e.fx.sparks(A,w,_.angle,_.color.getHex(),4),E(_);continue}f(_);continue}E(_)}i.instanceMatrix.needsUpdate=s.instanceMatrix.needsUpdate=r.instanceMatrix.needsUpdate=o.instanceMatrix.needsUpdate=!0,i.instanceColor.needsUpdate=s.instanceColor.needsUpdate=r.instanceColor.needsUpdate=!0}function E(x){if($r.setFromAxisAngle(W_,-x.angle),qr.set(x.x,5,x.z),x.kind==="bolt"){let v=x.crit?4.2:x.team==="player"?3.2:3.8;i.setMatrixAt(x.idx,Do.compose(qr,$r,Uo.set(x.len*(x.crit?1.2:1),v,v)))}else if(x.kind==="orb"){let v=1+Math.sin(x.age*30)*.12;s.setMatrixAt(x.idx,Do.compose(qr,$r,Uo.set(x.r*1.25,x.r*.85,x.r*.85))),r.setMatrixAt(x.idx,Do.compose(qr,$r,Uo.setScalar(x.r*2.2*v)))}else o.setMatrixAt(x.idx,Do.compose(qr,$r,Uo.setScalar(x.team==="player"?1:1.2)))}return{fire:y,spawn:u,update:p,list:h,kill:f,destroyInRadius(x,v,P,_){for(let L=h.length-1;L>=0;L--){let z=h[L];z.team===_&&Math.hypot(z.x-x,z.z-v)<P&&(e.fx.sparks(z.x,z.z,0,8042751,3),f(z))}},clear(){for(let x=h.length-1;x>=0;x--)f(h[x]);i.instanceMatrix.needsUpdate=s.instanceMatrix.needsUpdate=r.instanceMatrix.needsUpdate=o.instanceMatrix.needsUpdate=!0}}}function Uf(n,e,t,i,s,r,a){let o=t-n,l=i-e,c=n-s,h=e-r,d=o*o+l*l,f=2*(c*o+h*l),u=c*c+h*h-a*a;if(u<=0)return 0;if(d<1e-9)return-1;let m=f*f-4*d*u;if(m<0)return-1;let y=(-f-Math.sqrt(m))/(2*d);return y>=0&&y<=1?y:-1}var Zr=class extends Qt{constructor(e={},t={}){super({flatShading:!0,...e}),this.ind={uPanel:{value:t.panel??5},uHazard:{value:t.hazard?1:0},uGrime:{value:t.grime??1},uSeam:{value:t.seam??1}}}copy(e){return super.copy(e),this.ind=Object.fromEntries(Object.entries(e.ind).map(([t,i])=>[t,{value:i.value}])),this}customProgramCacheKey(){return"industrial-v1"}onBeforeCompile(e){Object.assign(e.uniforms,this.ind),e.vertexShader=e.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vOP; varying vec3 vON;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vOP = position; vON = normal;`),e.fragmentShader=e.fragmentShader.replace("#include <common>",`#include <common>
        varying vec3 vOP; varying vec3 vON; uniform float uPanel; uniform float uHazard; uniform float uGrime; uniform float uSeam;
        ${Bi}`).replace("#include <color_fragment>",`#include <color_fragment>
        vec3 an = abs(vON);
        vec2 puv = an.x > an.y && an.x > an.z ? vOP.zy : (an.y > an.z ? vOP.xz : vOP.xy);
        puv /= uPanel;
        vec2 cell = floor(puv), pf = fract(puv);
        float tone = hash31(vec3(cell, 7.0));
        float seamD = min(min(pf.x, 1.0 - pf.x), min(pf.y, 1.0 - pf.y));
        // some plates are split in two (along x or y) so the plating reads irregular, not as bricks
        if (tone > 0.72) seamD = min(seamD, abs(pf.x - 0.5)); else if (tone < 0.22) seamD = min(seamD, abs(pf.y - 0.5));
        float seam = (1.0 - smoothstep(0.0, 0.03, seamD)) * uSeam;
        float rivet = (1.0 - smoothstep(0.025, 0.045, length(abs(pf - 0.5) - vec2(0.43)))) * step(0.22, tone) * step(tone, 0.72);
        float grime = vnoise(vOP * (0.7 / uPanel) + 3.0);
        if (uHazard > 0.5) diffuseColor.rgb = mix(vec3(0.025), diffuseColor.rgb, step(0.5, fract((vOP.x + vOP.y + vOP.z) * 0.22)));
        diffuseColor.rgb *= (0.88 + 0.18 * tone) * (1.0 - seam * 0.5) * mix(1.0, mix(0.7, 1.06, grime), uGrime);
        diffuseColor.rgb += rivet * 0.07 * (1.0 - seam) * uSeam;
        float indRough = seam * 0.35 + (1.0 - grime) * 0.25 * uGrime;`).replace("#include <roughnessmap_fragment>",`#include <roughnessmap_fragment>
        roughnessFactor = clamp(roughnessFactor + indRough, 0.04, 1.0);`)}},Oh=new Map;function Lt(n,{metal:e=.7,rough:t=.42,panel:i=5,hazard:s=!1,grime:r=1,seam:a=1,side:o}={}){let l=[n,e,t,i,s,r,a,o].join("|");return Oh.has(l)||Oh.set(l,new Zr({color:n,metalness:e,roughness:t,side:o??ni},{panel:i,hazard:s,grime:r,seam:a})),Oh.get(l)}var sr=(n,e=5)=>Lt(n,{metal:.25,rough:.55,panel:e}),fs=(n=5)=>Lt(15904798,{metal:.2,rough:.6,panel:n,hazard:!0,seam:.4}),yt=(n,e=3)=>new Ye({color:new ge(n).multiplyScalar(e)}),_i=n=>new Qt({color:528926,metalness:.2,roughness:.04,emissive:n,emissiveIntensity:.55,flatShading:!0});function q(n,e,t=0,i=0,s=0,r){let a=new Pe(n,e);return a.position.set(t,i,s),r&&r.add(a),a}function dn(n,e=6,t=1){let i=new rs(n.map(([s,r])=>new le(s,r)),e,Math.PI/e);return i.rotateZ(-Math.PI/2),i.scale(1,t,1),i}function Ut(n,e=2,t=.6){let i=new Br;n.forEach(([r,a],o)=>o?i.lineTo(r,a):i.moveTo(r,a));let s=new lo(i,{depth:e,bevelEnabled:t>0,bevelThickness:t,bevelSize:t,bevelSegments:1});return s.rotateX(Math.PI/2),s.translate(0,e/2,0),s}function Ke(n,e,t,i=.8){return i=Math.min(i,n/3,t/3,e/3),Ut([[-n/2+i,-t/2+i],[n/2-i,-t/2+i],[n/2-i,t/2-i],[-n/2+i,t/2-i]],e-2*i,i)}function rr(n,e,t=2){return Ut([[n,0],[n*.15,e/2],[0,e/2],[0,-e/2],[n*.15,-e/2]],t,.4)}var _t=(n,e,t,i=8)=>{let s=new bt(e,n,t,i);return s.rotateZ(-Math.PI/2),s};function G_(n,e,t=12){let i=[[n*.5,0],[n*.62,-e*.18],[n*.74,-e*.22],[n*.68,-e*.3],[n*.82,-e*.5],[n*.76,-e*.56],[n,-e],[n*.9,-e]],s=new rs(i.map(([r,a])=>new le(r,a)),t);return s.rotateZ(Math.PI/2),s}function Ff(n,e,t=4,i=10){let s=[[0,0],[n,0]];for(let r=0;r<t;r++){let a=e/t*r;s.push([n,a+.5],[n*1.08,a+1],[n*1.08,a+2],[n,a+2.5])}return s.push([n,e],[n*.7,e+n*.25],[0,e+n*.25]),new rs(s.map(([r,a])=>new le(r,a)),i)}function Jr(n,e=1,t=6){return new ho(new Fr(n.map(i=>new U(...i))),16,e,t)}function je(n){let e=n.clone();return e.position.z*=-1,e.scale.z*=-1,e.rotation.y*=-1,e.rotation.x*=-1,n.parent.add(e),e}var ut=(n,e,t)=>new U(n,e,t),X_=(()=>{let n=new ii(1,1,10,1,!0);return n.translate(0,-.5,0),n.rotateZ(-Math.PI/2),n.rotateY(Math.PI),n})(),$_=Lt(2764341,{metal:.8,rough:.35,side:Dt,seam:0});function Nt(n,e,t,i,s,r,a=10,o){q(_t(s*.62,s*.7,a*.45,10),Lt(5067870,{panel:3}),e+a*.2,t,i,n),q(G_(s,a,12),$_,e,t,i,n);let l=q(new oo(s*.62,14),yt(r,2.6),e-a*.3,t,i,n);l.rotation.y=-Math.PI/2;let c=q(X_,new Ye({color:new ge(r).multiplyScalar(2.5),transparent:!0,opacity:.8,blending:Tt,depthWrite:!1}),e-a*.3,t,i,n);c.scale.set(s*3,s*.7,s*.7),c.userData.base=s*3,o.flames.push(c),o.engines.push(ut(e-a-1,t,i))}function Yn(n,e,t){q(new Rt(1.3,6,4),yt(16727386,4),e,.5,t,n),q(new Rt(1.3,6,4),yt(7208842,4),e,.5,-t,n)}function Zn(n,e){let t=new Mt,i=new Mt;return t.add(i),{root:t,body:i,radius:n,accent:e,engines:[],flames:[],muzzles:[],muzzles2:[],turrets:[],flashMats:[]}}var Xt={assault:{name:"Assault",color:3733247,css:"#38f6ff",blurb:"Fast, agile, high fire rate."},heavy:{name:"Heavy",color:16754237,css:"#ffa63d",blurb:"Armour and devastating slow guns."},sniper:{name:"Sniper",color:6003711,css:"#5b9bff",blurb:"Charged long-range precision."},drone:{name:"Drone",color:12610559,css:"#c06bff",blurb:"Commands autonomous combat drones."},missile:{name:"Missile",color:16738877,css:"#ff6a3d",blurb:"Homing salvos, mines and artillery."},energy:{name:"Energy",color:4182727,css:"#3fd2c7",blurb:"Beams, lightning and odd physics."}},q_={assault:{hull:100,armor:0,shield:60,shieldRegen:8,energy:100,energyRegen:22,accel:1300,maxSpeed:350,turnRate:13,dash:280,radius:20,mining:1,cargo:40},heavy:{hull:220,armor:.2,shield:90,shieldRegen:10,energy:110,energyRegen:18,accel:650,maxSpeed:240,turnRate:4.5,dash:170,radius:28,mining:1.2,cargo:80},sniper:{hull:90,armor:0,shield:80,shieldRegen:9,energy:120,energyRegen:24,accel:1e3,maxSpeed:320,turnRate:7,dash:300,radius:21,mining:.9,cargo:40},drone:{hull:120,armor:.05,shield:100,shieldRegen:12,energy:130,energyRegen:26,accel:900,maxSpeed:300,turnRate:8,dash:240,radius:24,mining:1,cargo:60},missile:{hull:140,armor:.1,shield:70,shieldRegen:9,energy:110,energyRegen:20,accel:900,maxSpeed:290,turnRate:7,dash:230,radius:24,mining:1,cargo:60},energy:{hull:110,armor:0,shield:120,shieldRegen:14,energy:160,energyRegen:30,accel:1100,maxSpeed:320,turnRate:9,dash:260,radius:22,mining:1.1,cargo:50}},St=n=>({kind:"pulse",dmg:9,rate:9,speed:1500,life:.65,count:1,spread:.03,color:3733247,recoil:0,splash:0,...n}),ps=n=>({kind:"plasma",dmg:30,rate:3.2,speed:950,life:1.1,count:1,spread:.02,color:16727536,recoil:30,splash:45,size:1,...n}),bn=n=>({kind:"missile",dmg:26,rate:0,cooldown:2.5,speed:620,life:2.6,count:2,spread:.5,turn:4.5,color:16754237,recoil:0,splash:60,...n}),ar=n=>({kind:"rail",dmg:120,charge:1.1,speed:3400,life:.55,count:1,color:9425151,pierce:6,recoil:90,...n}),or=n=>({kind:"beam",dps:55,range:520,width:10,color:8386815,lance:!1,...n}),ms=n=>({kind:"chain",dmg:16,rate:2.5,range:420,chains:2,chainRange:220,color:10148095,...n}),Oo=n=>({kind:"mine",dmg:60,rate:0,cooldown:2.2,trigger:70,blast:110,max:4,life:14,color:16734781,...n}),ko=n=>({kind:"artillery",dmg:70,rate:0,cooldown:1.2,range:1100,blast:120,count:1,scatter:0,color:16756797,...n}),Bo=n=>({kind:"orb",dmg:50,rate:0,cooldown:3.5,speed:260,life:3.2,zap:20,zapRange:150,color:7208928,vortex:0,...n}),Ho={emp:{name:"EMP blast",cost:60,cd:6,desc:"Stuns nearby enemies, strips shields and wipes enemy shots."},overdrive:{name:"Overdrive",cost:50,cd:9,desc:"Doubles fire rate for 5 seconds."},overload:{name:"Shield overload",cost:60,cd:12,desc:"Refills shields and makes them absorb everything for 3 seconds."},blink:{name:"Blink",cost:40,cd:3.5,desc:"Teleports toward the cursor with a moment of invulnerability."},barrage:{name:"Target-lock barrage",cost:70,cd:10,desc:"Locks up to 5 targets near the cursor and fires 12 missiles at them."},gravity:{name:"Gravity pulse",cost:70,cd:10,desc:"Opens a well at the cursor that drags enemies in, then implodes."},barrier:{name:"Barrier",cost:50,cd:9,desc:"Projects a frontal shield that deletes enemy projectiles for 4 seconds."},swarm:{name:"Drone surge",cost:60,cd:11,desc:"Drones deal double damage and move faster; launches 2 extra fighters for 6 seconds."}},kh={gun:{name:"Gun drone",desc:"fires bolts"},laser:{name:"Laser drone",desc:"burns with a short beam"},ram:{name:"Interceptor",desc:"dives into targets"},shield:{name:"Shield drone",desc:"blocks enemy shots near you"}};function nt(n,e,t,i,s,r,a,o={},l={}){return{id:n,name:e,cls:t,tier:i,parents:s,desc:r,...a,o,model:{cls:t,...l}}}var en=[nt("wasp","Wasp","assault",1,[],"Agile light fighter. Twin pulse lasers and a missile pod.",{primary:St(),secondary:bn(),ability:"emp"},{hull:100,shield:60,shieldRegen:8,energy:100,energyRegen:22,accel:1300,maxSpeed:340,turnRate:14,dash:260,radius:16,dmgScale:1},{bespoke:!0}),nt("viper","Viper","assault",2,["wasp"],"Interceptor. Plasma cannon, long dash, top speed.",{primary:ps(),secondary:bn({count:3,cooldown:3.2,dmg:24}),ability:"overdrive"},{hull:140,shield:80,shieldRegen:10,energy:120,energyRegen:26,accel:1500,maxSpeed:420,turnRate:10,dash:400,radius:18,dmgScale:1},{bespoke:!0}),nt("bulwark","Bulwark","heavy",2,["wasp"],"Armoured brawler. Explosive shells and proximity mines.",{primary:ps({dmg:46,rate:1.4,speed:700,splash:70,size:1.6,recoil:60,color:16756797}),secondary:Oo(),ability:"overload"},{},{size:1}),nt("lancer","Lancer","sniper",2,["wasp"],"Hold to charge a railgun that pierces everything in a line.",{primary:ar(),secondary:St({dmg:7,rate:5,color:9425151}),ability:"blink"},{},{size:1}),nt("hive","Hive","drone",2,["wasp"],"Launches two gun drones that hunt on their own.",{primary:St({dmg:7,rate:6,color:13798399}),secondary:bn({color:13798399}),ability:"swarm",drones:["gun","gun"]},{},{size:1,bays:2}),nt("spark","Spark","energy",2,["wasp"],"Chain lightning that arcs between targets, plus a zapping energy orb.",{primary:ms(),secondary:Bo(),ability:"barrier"},{},{size:1}),nt("hornet","Hornet","assault",3,["viper"],"Close-range scattergun. Shreds anything that gets near.",{primary:St({count:7,spread:.35,dmg:8,rate:2.2,life:.38,speed:1300}),secondary:bn({count:3}),ability:"overdrive"},{},{size:1.05,wings:2,guns:2}),nt("razor","Razor","assault",3,["viper"],"Hit-and-run. Fore-and-aft cannons, drops mines while fleeing.",{primary:St({dmg:9,rate:8,dirs:[0,Math.PI]}),secondary:Oo({cooldown:1.4,max:6,dmg:40,blast:90}),ability:"blink"},{maxSpeed:400},{size:1.05,wings:1,guns:2,tailGun:!0}),nt("juggernaut","Juggernaut","heavy",3,["bulwark"],"Piercing slugs that punch through rows of enemies; flak bursts.",{primary:St({dmg:40,rate:1.6,speed:1200,len:56,pierce:3,recoil:50,color:16765501}),secondary:ps({dmg:30,rate:0,cooldown:2,frags:8,splash:50,color:16756797}),ability:"overload"},{armor:.3},{size:1.1,plates:2}),nt("warden","Warden","heavy",3,["bulwark"],"Heavy gunship. Missile racks, siege plasma, auto-turrets.",{primary:bn({rate:1.6,cooldown:0,count:2,dmg:30,splash:70,spread:.35}),secondary:ps({dmg:90,rate:0,cooldown:1.8,splash:110,speed:720,size:2.2,recoil:160,color:16765501}),ability:"barrage",turrets:2,turret:St({dmg:6,rate:4,range:650,color:8257386})},{hull:320,armor:.15,shield:160,shieldRegen:14,energy:140,energyRegen:20,accel:700,maxSpeed:250,turnRate:4,dash:180,radius:26,dmgScale:1},{bespoke:!0}),nt("salvo","Salvo","missile",3,["bulwark"],"Missile boat. Four-missile volleys and a mine rack.",{primary:bn({count:4,rate:1.2,cooldown:0,dmg:18,spread:.5,color:16738877}),secondary:Oo({max:5}),ability:"barrage"},{},{size:1,pods:2}),nt("longbow","Longbow","sniper",3,["lancer"],"Faster charge, harder hits, ricocheting backup gun.",{primary:ar({dmg:150,charge:.85}),secondary:St({dmg:8,rate:4,ricochet:2,color:9425151}),ability:"blink"},{},{size:1.05,barrel:1.2}),nt("brood","Brood","drone",3,["hive"],"Four drones: two gunners and two kamikaze interceptors.",{primary:St({dmg:8,rate:6,color:13798399}),secondary:bn({color:13798399}),ability:"swarm",drones:["gun","gun","ram","ram"]},{},{size:1.08,bays:4}),nt("arc","Arc","energy",3,["spark"],"Continuous plasma beam. Hold to burn; lightning as backup.",{primary:or(),secondary:ms({dmg:20,rate:1.2,chains:3}),ability:"barrier"},{},{size:1.05,emitters:2}),nt("blitz","Blitz","assault",4,["hornet","razor"],"Four-round burst lasers and a scattergun backup.",{primary:St({dmg:11,rate:2.4,burst:4,burstGap:.045}),secondary:St({count:9,spread:.4,dmg:9,rate:0,cooldown:1.2,life:.32,speed:1300}),ability:"overdrive"},{},{size:1.12,wings:2,guns:4}),nt("phantom","Phantom","assault",4,["razor","longbow"],"Hybrid. Ricochet bolts that seek the next target, plus a charged rail.",{primary:St({dmg:12,rate:6,speed:1600,ricochet:3,color:10420223}),secondary:ar({dmg:130,charge:.8}),ability:"blink"},{},{size:1.1,wings:1,guns:2,barrel:.8}),nt("bastion","Bastion","heavy",4,["juggernaut","warden"],"Flak cannon that bursts into shrapnel; three-way piercing guns and turrets.",{primary:ps({dmg:50,rate:1.2,frags:10,splash:80,size:1.8,recoil:70,color:16756797}),secondary:St({dmg:22,rate:0,cooldown:.7,dirs:[0,Math.PI/2,-Math.PI/2],pierce:2,len:44,color:16765501}),ability:"overload",turrets:2,turret:St({dmg:7,rate:4,range:650,color:16765501})},{armor:.32},{size:1.2,plates:3,turretsN:2}),nt("mortar","Mortar","missile",4,["salvo","warden"],"Long-range artillery lobbed onto the cursor, plus missile volleys.",{primary:ko(),secondary:bn({count:4,color:16738877}),ability:"barrage"},{},{size:1.15,pods:2,mortar:!0}),nt("deadeye","Deadeye","sniper",4,["longbow"],"Extreme-range rail that pierces every target in its path.",{primary:ar({dmg:220,charge:1,pierce:99,life:.75}),secondary:St({dmg:9,rate:4,ricochet:2,color:9425151}),ability:"blink"},{},{size:1.12,barrel:1.6}),nt("carrier","Carrier","drone",4,["brood"],"Six drones: gunners, burning lasers and a shield drone.",{primary:St({dmg:9,rate:6,color:13798399}),secondary:bn({color:13798399}),ability:"swarm",drones:["gun","gun","gun","laser","laser","shield"]},{},{size:1.18,bays:6}),nt("tesla","Tesla","energy",4,["arc"],"Lightning that jumps through five targets; zapping orbs.",{primary:ms({dmg:22,rate:3,chains:5,chainRange:260}),secondary:Bo({zap:26}),ability:"emp"},{},{size:1.12,emitters:3}),nt("minelayer","Minelayer","missile",4,["salvo"],"Seeds the field with ten heavy mines; pulls enemies onto them.",{primary:bn({count:2,rate:2.2,cooldown:0,dmg:20,color:16738877}),secondary:Oo({max:10,cooldown:.9,dmg:70,blast:130}),ability:"gravity"},{},{size:1.12,pods:3}),nt("reaper","Reaper","assault",5,["blitz"],"Scattergun whose pellets ricochet into nearby targets.",{primary:St({count:8,spread:.38,dmg:10,rate:2.6,life:.4,speed:1350,ricochet:1}),secondary:St({dmg:12,rate:2.2,burst:3,burstGap:.05,dirs:[0,Math.PI]}),ability:"overdrive"},{},{size:1.2,wings:3,guns:4}),nt("wraith","Wraith","energy",5,["phantom","tesla"],"Hybrid. Ricochet bolts and six-target lightning; blinks in and out.",{primary:St({dmg:13,rate:6.5,speed:1600,ricochet:3,color:10420223}),secondary:ms({dmg:30,rate:1.5,chains:6}),ability:"blink"},{},{size:1.18,emitters:2,wings:1}),nt("colossus","Colossus","heavy",5,["bastion"],"Four-way piercing cannons, a siege gun and four turrets.",{primary:St({dmg:30,rate:3,dirs:[0,.35,-.35,Math.PI],pierce:2,len:50,color:16765501}),secondary:ps({dmg:160,rate:0,cooldown:2.4,splash:150,size:2.6,recoil:180,speed:700,color:16765501}),ability:"overload",turrets:4,turret:St({dmg:8,rate:4,range:700,color:16765501})},{armor:.36},{size:1.32,plates:3,turretsN:4}),nt("hellfire","Hellfire","missile",5,["mortar","minelayer"],"Eight-missile salvos and cluster artillery.",{primary:bn({count:8,rate:.8,cooldown:0,dmg:16,spread:.7,color:16738877}),secondary:ko({count:3,scatter:90,blast:100,cooldown:1.6}),ability:"barrage"},{},{size:1.24,pods:4}),nt("railbreaker","Railbreaker","sniper",5,["deadeye"],"Twin parallel rails and a long tracking beam.",{primary:ar({dmg:200,charge:.9,count:2,pierce:99,life:.75}),secondary:or({dps:40,range:800,width:6,color:9425151}),ability:"barrier"},{},{size:1.2,barrel:1.6,twin:!0}),nt("mothership","Mothership","drone",5,["carrier"],"Eight-drone fleet and a short burning beam.",{primary:or({dps:40,range:350,color:14788351}),secondary:bn({color:13798399}),ability:"swarm",drones:["gun","gun","gun","gun","laser","laser","ram","shield"]},{},{size:1.3,bays:8}),nt("nova","Nova","energy",5,["tesla"],"Rapid energy orbs that electrocute everything around them.",{primary:Bo({cooldown:.66,dmg:60,zap:30,zapRange:160,speed:320}),secondary:ms({dmg:24,rate:2,chains:4}),ability:"gravity"},{},{size:1.2,emitters:4}),nt("valkyrie","Valkyrie","assault",6,["reaper","mothership"],"Hybrid. Twin rapid lasers with an escort of interceptor drones.",{primary:St({dmg:12,rate:14,count:2,spread:.05}),secondary:St({count:8,spread:.38,dmg:10,rate:0,cooldown:1.1,life:.4,ricochet:1}),ability:"swarm",drones:["ram","ram","ram","ram"]},{maxSpeed:430},{size:1.28,wings:3,guns:4,bays:2}),nt("titan","Titan","heavy",6,["colossus"],"Walking fortress. Massive flak, five-way piercing guns, heavy armour.",{primary:ps({dmg:80,rate:1,frags:12,splash:110,size:2.4,recoil:90,color:16756797}),secondary:St({dmg:26,rate:0,cooldown:.8,dirs:[0,.5,-.5,Math.PI/2,-Math.PI/2],pierce:3,len:50,color:16765501}),ability:"overload",turrets:4,turret:St({dmg:10,rate:4,range:750,color:16765501})},{armor:.42},{size:1.42,plates:4,turretsN:4}),nt("armageddon","Armageddon","missile",6,["hellfire"],"Triple artillery barrages and ten-missile swarms.",{primary:ko({count:3,scatter:110,dmg:80,cooldown:1.3}),secondary:bn({count:10,cooldown:3,dmg:18,spread:.8,color:16738877}),ability:"gravity"},{},{size:1.34,pods:4,mortar:!0}),nt("singularity","Singularity","energy",6,["nova"],"Vortex orbs drag enemies inward while frying them; a heavy beam.",{primary:Bo({cooldown:1.6,dmg:90,zap:50,zapRange:200,vortex:260,speed:220,life:3.6}),secondary:or({dps:70,range:560}),ability:"gravity"},{},{size:1.3,emitters:4,ring:2}),nt("overseer","Overseer","drone",6,["mothership"],"Ten-drone fleet with lasers and shield wardens; chain lightning.",{primary:ms({dmg:22,rate:2.5,chains:4,color:14788351}),secondary:bn({color:13798399}),ability:"swarm",drones:["gun","gun","gun","gun","laser","laser","laser","laser","shield","shield"]},{},{size:1.38,bays:10}),nt("spectre","Spectre","sniper",6,["railbreaker","wraith"],"Hybrid. A lance beam that pierces every target to the horizon.",{primary:or({dps:120,range:1e3,width:7,lance:!0,color:11462399}),secondary:ar({dmg:220,charge:.8,pierce:99}),ability:"blink"},{},{size:1.28,barrel:1.8,emitters:2}),nt("starbreaker","Starbreaker","heavy",7,["titan","armageddon","valkyrie"],"Apex warship. Six-way piercing ricochet guns, triple artillery, turrets and interceptors.",{primary:St({dmg:24,rate:4,dirs:[0,.4,-.4,Math.PI,Math.PI/2,-Math.PI/2],pierce:2,ricochet:1,len:50,color:16765501}),secondary:ko({count:3,scatter:100,dmg:90}),ability:"overdrive",turrets:4,turret:St({dmg:12,rate:4,range:800,color:16765501}),drones:["ram","ram","ram","ram"]},{armor:.4},{size:1.5,plates:4,turretsN:4,pods:2}),nt("sovereign","Void Sovereign","energy",7,["singularity","spectre","overseer"],"Secret apex. Piercing lance, eight-target lightning storm and a guardian fleet.",{primary:or({dps:150,range:1100,width:9,lance:!0,color:13148415}),secondary:ms({dmg:34,rate:2,chains:8,chainRange:300,color:13148415}),ability:"gravity",drones:["laser","laser","laser","laser","shield","shield"]},{},{size:1.45,emitters:6,ring:3,bays:6})];en.find(n=>n.id==="sovereign").secret=!0;var He=Object.fromEntries(en.map(n=>[n.id,n])),Kr=en.map(n=>n.id),Vo=7,Y_={1:[0,0],2:[600,0],3:[1500,5],4:[3200,15],5:[6e3,30],6:[1e4,50],7:[16e3,80]};function lr(n){let[e,t]=Y_[He[n].tier];return{credits:e,crystal:t}}function Bh(n){let e=He[n].tier,t=[];return e>=4&&t.push(["Reach wave 5",i=>i.best.wave>=5]),e>=5&&t.push(["Defeat the Eclipse Dreadnought",i=>i.stats.bosses>=1]),e>=6&&t.push(["Reach wave 10",i=>i.best.wave>=10]),n==="starbreaker"&&t.push(["Defeat the Dreadnought twice",i=>i.stats.bosses>=2]),n==="sovereign"&&t.push(["Defeat the Dreadnought three times",i=>i.stats.bosses>=3]),t}var Of=n=>en.filter(e=>e.parents.includes(n)).map(e=>e.id),jr=(n,e)=>He[e].parents.length===0||He[e].parents.some(t=>n.unlocked.includes(t)),Hh=(n,e)=>!He[e].secret||jr(n,e)||n.unlocked.includes(e);function Hi(n,e){if(n.unlocked.includes(e))return"Already unlocked";if(!jr(n,e))return`Unlock ${He[e].parents.map(s=>He[s].name).join(" or ")} first`;let t=Bh(e).find(([,s])=>!s(n));if(t)return t[0];let i=lr(e);return n.credits<i.credits?`Need ${i.credits-Math.floor(n.credits)} more credits`:n.crystal<i.crystal?`Need ${i.crystal-n.crystal} more crystal`:""}function gs(n,e,t,i){return He[t].parents.includes(e)?i<He[t].tier?`Pilot level ${He[t].tier} needed (you are ${i})`:n.unlocked.includes(t)?"":Hi(n,t):`Evolves from ${He[t].parents.map(s=>He[s].name).join(" or ")}`}function kf(n){let e=He[n],t=q_[e.cls],i=e.tier-1;return{...{hull:t.hull*(1+.3*i),armor:Math.min(.45,t.armor+.02*i),shield:t.shield*(1+.3*i),shieldRegen:t.shieldRegen*(1+.15*i),energy:t.energy*(1+.12*i),energyRegen:t.energyRegen*(1+.1*i),accel:t.accel*(1+.03*i),maxSpeed:t.maxSpeed*(1+.03*i),turnRate:t.turnRate,dash:t.dash,radius:t.radius*(1+.08*i),mining:t.mining*(1+.05*i),cargo:Math.round(t.cargo*(1+.25*i))},...e.o,dmgScale:e.o.dmgScale??1+.25*i}}function Bf(n){return n?n.range&&n.kind!=="pulse"?n.range:n.kind==="mine"?0:(n.speed||0)*(n.life||0):0}function Qr(n){if(!n)return 0;let e=(n.count||1)*(n.dirs?n.dirs.length:1)*(n.burst||1),t=n.rate>0?n.rate:1/Math.max(.1,n.cooldown||n.charge||1);switch(n.kind){case"beam":return n.dps;case"rail":return n.dmg*(n.count||1)/(n.charge+.15);case"chain":return n.dmg*(1+n.chains*.8)*n.rate;case"orb":return n.dmg*t+n.zap*2;default:return n.dmg*e*t}}var Z_={assault:1550751,heavy:13073687,sniper:3105476,drone:8076484,missile:12861981,energy:1941398},Vh={dark:()=>Lt(2830392,{panel:6}),mid:()=>Lt(6318454,{panel:6}),light:()=>Lt(10726584,{panel:6,metal:.6})};function Hf(n){let e=He[n],t=e.model,i=e.cls,s=Xt[i].color,r=Zn(20,s),a=r.body,o={dark:Vh.dark(),mid:Vh.mid(),light:Vh.light(),paint:sr(Z_[i],7),hz:fs(3),glowC:s};({assault:J_,heavy:K_,sniper:j_,drone:Q_,missile:eM,energy:tM})[i](r,a,t,o),i!=="assault"&&t.wings&&Vf(a,t.wings,o,r,!1),i!=="sniper"&&t.barrel&&Wf(a,t.barrel,o,r,!1),i!=="drone"&&t.bays&&Gf(a,t.bays,o,30),i!=="missile"&&t.pods&&Xf(a,t.pods,o,r,34),i!=="energy"&&t.emitters&&$f(a,t.emitters,o,r);let l=t.size||1;a.scale.setScalar(l);for(let c of[r.muzzles,r.muzzles2,r.engines])c.forEach(h=>h.multiplyScalar(l));return r.turrets.forEach(c=>c.userData.lp=c.position.clone().multiplyScalar(l)),r.muzzles2.length||r.muzzles2.push(...r.muzzles.map(c=>c.clone())),r}function J_(n,e,t,i){q(dn([[0,-26],[6,-25],[8.5,-14],[8.5,2],[7,12],[4.5,22],[2,30],[0,37]],6,.72),i.mid,0,0,0,e),q(Ke(28,3,7,.8),i.dark,-6,5,0,e),q(dn([[0,4],[3.8,7],[4.2,14],[2.8,20],[0,24]],6,.7),_i(i.glowC),0,4.5,0,e),q(Ke(5,.6,8.6,.2),i.hz,-22,6.6,0,e),Vf(e,t.wings||1,i,n,!0),t.tailGun&&(q(_t(1.5,1.3,14,6),i.dark,-32,3,0,e),n.muzzles2.push(ut(-40,3,0))),Nt(e,-27,0,0,6,i.glowC,9,n),(t.wings||1)>=3&&(Nt(e,-20,-1,12,4,i.glowC,7,n),Nt(e,-20,-1,-12,4,i.glowC,7,n)),Yn(e,-16,30)}function Vf(n,e,t,i,s){for(let a=0;a<e;a++){let o=26+a*6,l=-14-a*6,c=6-a*8;je(q(Ut([[c,4],[l,o],[l-7,o+1],[l-5,4]],2-a*.3,.5),a%2?t.paint:t.dark,0,-1+a*1.4,0,n)),a===0&&je(q(Ut([[c-4,7],[l+2,o-4],[l-3,o-4],[l-1,7]],1.1,.3),t.paint,0,1.2,0,n))}if(!s)return;let r=(a,o)=>{je(q(Ke(14,3.2,4,.6),t.mid,o-6,-.4,a,n)),je(q(_t(1.3,1.1,12,6),t.dark,o+5,-.4,a,n)),i.muzzles.push(ut(o+12,-.4,a),ut(o+12,-.4,-a))};r(27,0),e>=2&&r(15,8),e>=3&&r(36,-10)}function K_(n,e,t,i){let s=t.plates||1;q(Ut([[42,12],[28,22],[-32,24],[-44,18],[-44,-18],[-32,-24],[28,-22],[42,-12]],12,2.5),i.dark,0,-5,0,e);for(let l=0;l<s;l++)q(Ke(54-l*12,5,30-l*6,1.2),l%2?i.paint:i.mid,-4-l*3,3+l*5,0,e);je(q(Ke(46,7,5,1),i.mid,-2,-2,25,e)),je(q(Ke(30,1,2,.3),i.paint,-2,2,27.6,e)),q(Ke(4,6,22,.6),i.hz,43,-3,0,e),q(_t(6,5,26,8),i.dark,56,-1,0,e);for(let l=0;l<3;l++)q(Ke(1.2,13,13,.2),i.mid,48+l*3.6,-1,0,e);q(new jt(5,1,6,12),yt(i.glowC,2.4),69.5,-1,0,e).rotation.y=Math.PI/2,n.muzzles.push(ut(72,-1,0)),n.muzzles2.push(ut(30,-2,25),ut(30,-2,-25));let r=t.turretsN||0,a=[[14,13],[14,-13],[-14,13],[-14,-13]].slice(0,r);for(let[l,c]of a){let h=new Mt;h.position.set(l,3+s*5,c),q(new bt(5.5,6.5,3,8),i.dark,0,0,0,h),q(Ke(10,4.5,8,1),i.mid,1,3.2,0,h),q(_t(1,.9,12,6),i.dark,9,3.2,1.8,h),q(_t(1,.9,12,6),i.dark,9,3.2,-1.8,h),e.add(h),n.turrets.push(h)}let o=s>=3?[-24,-8,8,24]:[-14,14];for(let l of o)Nt(e,-48,-1,l,s>=3?7:8,i.glowC,11,n);Yn(e,-32,28)}function Wf(n,e,t,i,s){let r=34*e,a=s&&n.userData.twin?[6,-6]:[0];for(let o of a){q(_t(2.4,2,r,6),t.dark,26+r/2,0,o,n);for(let l=0;l<Math.round(3+e*2);l++)q(new jt(3.4,.7,5,10),yt(t.glowC,2),24+l*(r/(3+e*2)),0,o,n).rotation.y=Math.PI/2;q(_t(3.2,3.2,3,6),t.light,26+r,0,o,n),(s?i.muzzles:i.muzzles2).push(ut(28+r,0,o))}}function j_(n,e,t,i){e.userData.twin=!!t.twin,q(dn([[0,-30],[5,-29],[7,-18],[6.5,6],[4.5,20],[2.5,26]],6,.7),i.mid,0,0,0,e),q(dn([[0,-6],[3.4,-3],[3.6,5],[2.4,10],[0,13]],6,.7),_i(i.glowC),0,4,0,e),Wf(e,t.barrel||1,i,n,!0),je(q(Ut([[-12,4],[-26,20],[-32,20],[-28,4]],1.6,.4),i.paint,0,0,0,e)),je(q(Ut([[2,4],[-6,13],[-10,13],[-8,4]],1.2,.3),i.dark,0,0,0,e));let s=q(Ut([[-18,0],[-30,9],[-33,9],[-30,0]],1,.3),i.paint,0,3,3,e);s.rotation.x=-1.1,je(s),q(Ke(5,.6,8,.2),i.hz,-14,5,0,e),n.muzzles2.push(ut(8,-3,10),ut(8,-3,-10)),Nt(e,-31,0,0,5.5,i.glowC,8,n),Yn(e,-28,20)}function Gf(n,e,t,i){for(let s=0;s<e;s++){let r=Math.PI*.15+s/e*Math.PI*1.7,a=Math.cos(r)*i*.8-4,o=Math.sin(r)*i,l=q(new bt(5,5.5,2,6),t.mid,a,2.5,o,n);l.rotation.y=r,q(new jt(3.6,.6,4,6),yt(t.glowC,2),a,3.8,o,n).rotation.x=Math.PI/2,s%2===0&&q(Jr([[-4,1,0],[a*.5,3,o*.5],[a,2.5,o]],.8),t.dark,0,0,0,n)}}function Q_(n,e,t,i){q(new bt(16,18,8,6),i.dark,-4,0,0,e).rotation.y=Math.PI/6,q(new bt(11,13,5,6),i.mid,-4,6,0,e).rotation.y=Math.PI/6,q(new bt(6,6,2,12),yt(i.glowC,2.2),-4,9.5,0,e),q(dn([[0,8],[5,10],[5.5,20],[3,28],[0,32]],6,.7),i.mid,0,0,0,e),q(dn([[0,12],[2.8,14],[3,20],[0,24]],6,.7),_i(i.glowC),0,3.5,0,e),q(new jt(24,1.6,4,6),i.paint,-4,1,0,e).rotation.x=Math.PI/2,Gf(e,t.bays||2,i,26),q(_t(.6,.6,18,4).rotateZ(Math.PI/2),i.light,-10,14,6,e),q(new Rt(1.4,6,4),yt(16727386,4),-10,23,6,e),q(Ke(4,.6,10,.2),i.hz,-16,6,0,e),n.muzzles.push(ut(32,0,5),ut(32,0,-5)),n.muzzles2.push(ut(10,-3,12),ut(10,-3,-12)),Nt(e,-24,0,8,5,i.glowC,8,n),Nt(e,-24,0,-8,5,i.glowC,8,n),Yn(e,-8,26)}function Xf(n,e,t,i,s){for(let r=0;r<e;r++){let a=s+Math.floor(r/2)*11,o=-6-Math.floor(r/2)*6,l=r%2?-1:1,c=q(Ke(32,8,8,1.2),t.mid,o,-1,a*l,n);c.userData.pod=!0;for(let h=0;h<3;h++)q(Ke(3.4,1,5,.3),t.dark,o-8+h*6,3.6,a*l,n);q(Ke(1.2,5,5,.3),yt(16738877,2.2),o+16.4,-1,a*l,n),(i.muzzles.length<8?i.muzzles:i.muzzles2).push(ut(o+18,-1,a*l))}}function eM(n,e,t,i){if(q(dn([[0,-28],[7,-26],[9,-12],[9,6],[7,16],[4,26],[0,32]],8,.8),i.mid,0,0,0,e),q(dn([[0,6],[3.8,9],[4,16],[2.6,21],[0,24]],6,.7),_i(i.glowC),0,5,0,e),q(Ke(24,3,8,.8),i.paint,-8,6,0,e),Xf(e,t.pods||2,i,n,16),t.mortar){let r=q(_t(4,3.4,22,8),i.dark,-2,14,0,e);r.rotation.z=.5,q(new jt(4,.8,5,10),yt(16756797,2.4),8,19.5,0,e).rotation.set(0,Math.PI/2,.5)}let s=q(Ut([[-16,0],[-30,12],[-34,12],[-30,0]],1.4,.3),i.paint,0,2,6,e);s.rotation.x=-.6,je(s),q(Ke(5,.6,9,.2),i.hz,-20,7.8,0,e),Nt(e,-30,0,0,7,i.glowC,10,n),Yn(e,-24,14)}function $f(n,e,t,i){for(let s=0;s<e;s++){let r=(s-(e-1)/2)*(1.1/Math.max(1,e-1)),a=22,o=Math.cos(r)*a+6,l=Math.sin(r)*a*1.4,c=q(rr(16,4,2),t.dark,o-8,0,l,n);c.rotation.y=-r,q(new si(2.4,0),yt(t.glowC,3),o+8*Math.cos(r),0,l+8*Math.sin(r),n),i.muzzles.push(ut(o+10*Math.cos(r),0,l+10*Math.sin(r)))}}function tM(n,e,t,i){q(dn([[0,-24],[6,-23],[8,-10],[7.5,6],[5,16],[0,22]],6,.7),i.mid,0,0,0,e),q(new sn(8,1),yt(i.glowC,2.6),4,4,0,e);for(let s=0;s<(t.ring||1);s++){let r=q(new jt(13+s*5,1.4,4,8),s%2?i.paint:i.dark,4,4,0,e);r.rotation.set(Math.PI/2+s*.5,s*.6,0),r.userData.spin=.6+s*.4,n.spinners=(n.spinners||[]).concat(r)}$f(e,t.emitters||1,i,n),je(q(Ut([[-8,5],[-22,22],[-28,22],[-24,5]],1.6,.4),i.paint,0,-1,0,e)),q(Ke(5,.6,8,.2),i.hz,-16,5,0,e),n.muzzles2.push(ut(12,0,10),ut(12,0,-10)),Nt(e,-25,0,6,5,i.glowC,8,n),Nt(e,-25,0,-6,5,i.glowC,8,n),Yn(e,-20,22)}var Jn=(n,e=.42,t=.7,i=4)=>new Zr({color:n,metalness:t,roughness:e},{panel:i});function ai(n){let e={wasp:nM2,viper:iM,warden:sM}[n];return e?e():Hf(n)}var $T={};function $tex(seed){if($T[seed])return $T[seed];let N=512,c=document.createElement("canvas");c.width=c.height=N;let g=c.getContext("2d"),r=(()=>{let x=seed*9301+49297;return()=>(x=(x*9301+49297)%233280)/233280})();g.fillStyle="#9aa3ad";g.fillRect(0,0,N,N);let P=[];(function sp(x,y,w,h,d){if(d>4||w<90&&h<90||(d>1&&r()<.18)){P.push([x,y,w,h]);return}if(w>h?r()<.85:r()<.15){let k=w*(.35+r()*.3);sp(x,y,k,h,d+1);sp(x+k,y,w-k,h,d+1)}else{let k=h*(.35+r()*.3);sp(x,y,w,k,d+1);sp(x,y+k,w,h-k,d+1)}})(0,0,N,N,0);for(let[x,y,w,h]of P){let t=150+r()*100|0;g.fillStyle=`rgb(${t},${t+3},${t+8})`;g.fillRect(x,y,w,h);let q=g.createLinearGradient(x,y,x+w*.4,y+h);q.addColorStop(0,"rgba(255,255,255,.28)");q.addColorStop(1,"rgba(0,0,0,.3)");g.fillStyle=q;g.fillRect(x,y,w,h);if(r()<.5){g.fillStyle=`rgba(0,0,0,${.1+r()*.12})`;g.fillRect(x+5,y+5,w-10,h-10);g.strokeStyle="rgba(255,255,255,.35)";g.lineWidth=1.5;g.strokeRect(x+5.5,y+5.5,w-11,h-11)}if(r()<.22&&w>60&&h>40){g.fillStyle="rgba(8,10,14,.85)";let n=3+r()*4|0;for(let k=0;k<n;k++)g.fillRect(x+12,y+12+k*(h-24)/n,w-24,(h-24)/n*.5)}g.strokeStyle="rgba(255,255,255,.55)";g.lineWidth=2;g.beginPath();g.moveTo(x+1,y+h-1);g.lineTo(x+1,y+1);g.lineTo(x+w-1,y+1);g.stroke();g.strokeStyle="rgba(5,7,10,.9)";g.lineWidth=3;g.beginPath();g.moveTo(x+w,y);g.lineTo(x+w,y+h);g.lineTo(x,y+h);g.stroke();g.fillStyle="rgba(10,12,16,.6)";for(let k=10;k<w-6;k+=22)g.fillRect(x+k,y+h-6,3,3)}for(let k=0;k<70;k++){g.strokeStyle=`rgba(${r()<.5?255:0},${r()<.5?255:0},255,${.05+r()*.12})`;g.lineWidth=1;let x=r()*N,y=r()*N;g.beginPath();g.moveTo(x,y);g.lineTo(x+(r()-.5)*70,y+(r()-.5)*30);g.stroke()}for(let k=0;k<14;k++){let x=r()*N,y=r()*N,q=g.createRadialGradient(x,y,0,x,y,25+r()*50);q.addColorStop(0,"rgba(0,0,0,.28)");q.addColorStop(1,"rgba(0,0,0,0)");g.fillStyle=q;g.fillRect(x-80,y-80,160,160)}let t=new Pn(c);t.wrapS=t.wrapT=1e3;t.colorSpace="srgb";t.anisotropy=4;t.needsUpdate=!0;return $T[seed]=t}
var $Pm=class extends Qt{constructor(e,t){super({flatShading:!1,...e}),this.pt=t,this.ind={uMap:{value:$tex(t.seed||1)},uTile:{value:t.tile||34}}}customProgramCacheKey(){return"paint-v1-"+(this.pt.seed||1)}onBeforeCompile(e){Object.assign(e.uniforms,this.ind),e.vertexShader=e.vertexShader.replace("#include <common>","#include <common>\nvarying vec3 vOP; varying vec3 vON;").replace("#include <begin_vertex>","#include <begin_vertex>\nvOP=position; vON=normal;"),e.fragmentShader=e.fragmentShader.replace("#include <common>","#include <common>\nvarying vec3 vOP; varying vec3 vON; uniform sampler2D uMap; uniform float uTile; vec3 paintT=vec3(1.0);").replace("#include <color_fragment>","#include <color_fragment>\nvec3 an=abs(vON); vec2 pu=an.x>an.y&&an.x>an.z?vOP.zy:(an.y>an.z?vOP.xz:vOP.xy); paintT=texture2D(uMap,pu/uTile).rgb; diffuseColor.rgb*=paintT*1.25*mix(.62,1.12,smoothstep(-5.0,7.0,vOP.y));").replace("#include <roughnessmap_fragment>","#include <roughnessmap_fragment>\nroughnessFactor*=mix(1.35,.7,smoothstep(.35,.95,paintT.r));")}};
var $m=(c,o={})=>new $Pm({color:c,metalness:o.m??.6,roughness:o.r??.42},o);
function $sm(p,k=5){let o=[],n=p.length;for(let i=0;i<n;i++){let a=p[(i-1+n)%n],b=p[i],c=p[(i+1)%n],d=p[(i+2)%n];for(let j=0;j<k;j++){let t=j/k,u=t*t,v=u*t,f=z=>.5*(2*b[z]+(-a[z]+c[z])*t+(2*a[z]-5*b[z]+4*c[z]-d[z])*u+(-a[z]+3*b[z]-3*c[z]+d[z])*v);o.push([f(0),f(1)])}}return o}
function nM2(){let n=Zn(20,3733247),e=n.body,G=$m(3941976,{seed:3,m:.7,r:.4}),P=$m(12174546,{seed:7,m:.5,r:.34}),C=$m(1620176,{seed:11,m:.55,r:.3}),M=$m(11582660,{seed:5,m:.9,r:.28,tile:20}),H=$m(15906354,{seed:9,m:.35,r:.5,tile:24}),D=Lt(329228,{seam:0,grime:0,metal:.2,rough:.8}),K=_i(3721471),Rr=sr(1550751,8);
q(dn([[0,-28],[3,-29],[6.5,-26],[8.6,-18],[9.4,-6],[8.6,5],[6.8,14],[4.4,24],[2.2,31],[.8,36],[0,39]],14,.74),G,0,0,0,e);
q(Ut($sm([[21,0],[21,0],[15,3.4],[6,6],[-6,7.8],[-16,7],[-21,4],[-21,-4],[-16,-7],[-6,-7.8],[6,-6],[15,-3.4],[21,0]].slice(0,-1),4),2.4,.7),P,-1,5.4,0,e);
q(Ut($sm([[17,0],[17,0],[8,2.8],[-4,3.6],[-13,2.6],[-13,-2.6],[-4,-3.6],[8,-2.8]],4),1.2,.4),C,-1,7.3,0,e);
q(Ut([[11,0],[4,3.6],[-9,4],[-9,-4],[4,-3.6]],.6,.3),D,-1,8.1,0,e);
q(dn([[0,2],[3.2,5],[4.8,11],[3.8,18],[1.4,22.5],[0,24]],10,.7),K,2,6.2,0,e);
for(let z of[1,-1]){q(Ke(11,3.6,3.8,1),D,7,.6,z*8.6,e);q(Ke(12,1,5.4,.4),M,7,2.7,z*8.6,e);for(let i=0;i<4;i++)q(Ke(.9,.6,3.6,.2),D,-3-i*3,7.7,z*5.4,e)}
let w=q(Ut($sm([[12,6],[12,6],[5,12],[-2,19],[-4,28],[-3,34],[-3,34],[-9,32],[-17,27],[-18,21],[-23,14],[-28,9],[-21,5.5]],5),2,.6),G,0,-1.2,0,e);je(w);
je(q(Ut($sm([[8,7.4],[8,7.4],[2,12],[-3,18],[-5,25.5],[-10,24.4],[-14,17],[-15,12],[-12,7.6]],4),1,.45),P,0,.5,0,e));
je(q(Ut($sm([[3,9],[3,9],[-1,12.5],[-3.4,18],[-5.6,22],[-8.5,21],[-8,14],[-6,9.4]],4),.8,.3),C,0,1.4,0,e));
for(let i=0;i<4;i++)je(q(Ke(7,.5,1,.2),D,-11,2.1,15+i*3.2,e));
je(q(Ut($sm([[8,5],[8,5],[14,9],[15.5,12.5],[11,13],[7,9]],3),1.4,.4),H,2,-.6,0,e));
je(q(Ke(17,4.6,5.6,1.1),G,-5,-.4,29.5,e));je(q(Ke(8,1.2,4.8,.4),H,-6,2.3,29.5,e));
for(let i=0;i<4;i++)je(q(Ke(.8,5,6,.2),M,-11.5-i*2,-.4,29.5,e));
je(q(_t(1.5,1.2,15,10),M,7.5,-.4,29.5,e));je(q(_t(2.4,2.4,2.6,10),D,15.2,-.4,29.5,e));je(q(_t(3,3,1,10),H,12.6,-.4,29.5,e));
n.muzzles.push(ut(17,-.4,29.5),ut(17,-.4,-29.5));
je(q(Ke(10,3,3.4,.5),M,2,-3.4,14,e));n.muzzles2.push(ut(8,-3.4,14),ut(8,-3.4,-14));
let l=q(Ut($sm([[-14,0],[-14,0],[-25,10],[-30.5,10.5],[-30,0]],3),1.2,.3),Rr,0,3,5,e);l.rotation.x=-1;je(l);
q(Ke(14,10.6,17,1.6),G,-24,0,0,e);q(Ke(4,12,19,1),M,-31.4,0,0,e);for(let z of[1,-1]){q(Ke(10,1.2,4.6,.4),C,-23,5.8,z*5,e);q(_t(5.4,5.4,2,12),D,-32.5,0,z*5.6,e)}
Nt(e,-33.5,0,5.6,5,3721471,9,n);Nt(e,-33.5,0,-5.6,5,3721471,9,n);Yn(e,-19,33.5);return n}
function nM(){let n=Zn(20,3733247),e=n.body,t=Lt(2896185,{panel:7}),i=Lt(6779005,{panel:6}),s=Lt(11121342,{metal:.6}),r=sr(1550751,8),a=fs(3),o=Lt(461068,{seam:0,grime:0});q(dn([[0,-27],[6,-26],[8.5,-16],[9,-2],[7.5,10],[5,20],[2.5,28],[0,36]],6,.72),i,0,0,0,e),q(Ke(30,3,7,.8),t,-6,5.2,0,e),q(Ke(10,2,9,.6),s,-19,6,0,e),q(Ke(5,.6,9.4,.2),a,-25.5,7.1,0,e),q(dn([[0,3],[4,6],[4.4,13],[3,19],[0,23]],6,.7),_i(3721471),0,4.6,0,e),je(q(Ut([[6,4],[-12,30],[-20,31],[-18,4]],2.2,.6),t,0,-1,0,e)),je(q(Ut([[2,7],[-12,26.5],[-17,26.5],[-15,7]],1.2,.4),r,0,1.1,0,e)),je(q(Ke(12,6,6,.8),i,4,0,9.5,e)),je(q(new gn(4.4,3.6).rotateY(Math.PI/2),o,10.15,0,9.5,e)),je(q(Ke(16,3.4,4.4,.6),i,-6,-.4,29,e)),je(q(_t(1.4,1.2,14,6),t,6,-.4,29,e)),je(q(_t(2.1,2.1,3,6),s,13,-.4,29,e)),n.muzzles.push(ut(15,-.4,29),ut(15,-.4,-29)),je(q(Ke(10,3,3.4,.5),s,2,-3.4,14,e)),n.muzzles2.push(ut(8,-3.4,14),ut(8,-3.4,-14));let l=q(Ut([[-14,0],[-26,9],[-29,9],[-26,0]],1.2,.3),r,0,3,5,e);return l.rotation.x=-1,je(l),q(Ke(12,10,15,1.4),t,-24,0,0,e),Nt(e,-30,0,0,6,3721471,9,n),Yn(e,-17,31.5),n}function iM(){let n=Zn(22,16727536),e=n.body,t=Lt(2435376),i=Lt(5857645),s=sr(11017516),r=fs(3);q(dn([[0,-22],[6,-21],[8,-8],[7.5,8],[5,20],[2,30],[0,35]],6,.75),i,0,1,0,e),q(dn([[0,2],[3.6,5],[4,13],[2.6,19],[0,23]],6,.7),_i(16727536),0,6,0,e),je(q(Ut([[-4,5],[-10,31],[-24,31],[-22,5]],2.4,.6),t,0,0,0,e)),je(q(rr(66,7.5,3.2),s,-26,0,27,e)),je(q(rr(58,2.6,1),t,-24,2.2,27,e)),je(q(rr(40,5.5,2.6),s,-18,.4,14,e)),je(q(Ke(4,.6,14,.2),r,-15,1.5,19,e)),q(_t(3,2.4,26,8),t,30,-3,0,e);for(let a=0;a<3;a++)q(new jt(3.6,.8,5,10),yt(16727536,1.6),23+a*6,-3,0,e).rotation.y=Math.PI/2;return q(_t(3.6,3.6,2.4,8),Lt(11121342),43,-3,0,e),n.muzzles.push(ut(46,-3,0)),n.muzzles2.push(ut(26,-1,27),ut(26,-1,-27),ut(30,-3,0)),Nt(e,-28,0,27,5,16727536,8,n),Nt(e,-28,0,-27,5,16727536,8,n),Nt(e,-23,1,0,4.5,16747256,7,n),Yn(e,-22,31),n}function sM(){let n=Zn(30,16754237),e=n.body,t=Lt(2764341,{panel:7}),i=Lt(6120816,{panel:7}),s=Lt(10134446,{panel:7,metal:.6}),r=sr(1550751,7),a=yt(16756797,3),o=fs(5);q(Ut([[44,12],[30,22],[-34,24],[-46,18],[-46,-18],[-34,-24],[30,-22],[44,-12]],12,2.5),t,0,-5,0,e),q(Ke(60,8,30,1.5),i,-4,4,0,e),je(q(Ke(40,1.2,3,.3),r,-6,8.4,13,e)),q(Ke(16,10,18,1.2),s,-28,12,0,e),q(new At(1,2.4,14),a,-19.8,14,0,e),q(Ff(8,10,3,10),i,-6,8,0,e),q(new bt(6,6,1.2,10),yt(4182727,2.5),-6,20.4,0,e),je(q(dn([[0,-30],[7,-28],[7.5,18],[5,26],[0,29]],8,.85),i,0,-2,38,e)),je(q(_t(7.9,7.9,6,8),r,-14,-2,38,e)),je(q(_t(7.9,7.9,6,8),r,8,-2,38,e));for(let l of[-7,-2,3])je(q(Ke(3.6,1.4,4,.3),t,l,4.2,38,e));je(q(Jr([[16,-2,21],[17,3,30],[15,-1,33]],1.5),s,0,0,0,e)),je(q(Jr([[-22,-2,23],[-21,3,30],[-23,-1,33]],1.5),s,0,0,0,e)),q(Ke(4,6,22,.6),o,45,-3,0,e),q(_t(5.5,4.5,30,8),t,58,-2,0,e);for(let l=0;l<4;l++)q(Ke(1.2,12,12,.2),i,50+l*3.6,-2,0,e);q(_t(6.2,6.2,3,8),s,72,-2,0,e),q(new jt(4.5,1,6,12),a,73.6,-2,0,e).rotation.y=Math.PI/2,n.muzzles.push(ut(30,-2,38),ut(30,-2,-38)),n.muzzles2.push(ut(76,-2,0));for(let l of[-24,-8,8,24])Nt(e,-50,-1,l,7,16754237,11,n);for(let l of[14,-14]){let c=new Mt;c.position.set(12,8.5,l),q(new bt(6,7,3,8),t,0,0,0,c),q(Ke(11,5,9,1),i,1,3.5,0,c),q(Ke(3,.5,9.2,.2),o,-3,6.2,0,c),q(_t(1.1,1,13,6),t,10,3.5,2,c),q(_t(1.1,1,13,6),t,10,3.5,-2,c),e.add(c),n.turrets.push(c)}return Yn(e,-34,46),n}function Yf(n){return Wh({drone:rM,interceptor:aM,frigate:oM,hunter:lM}[n]())}function Wh(n){return n.root.traverse(e=>{e.isMesh&&e.material.isMeshStandardMaterial&&!e.material.userData.shared&&(e.material=e.material.clone(),n.flashMats.push(e.material))}),n}function rM(){let n=Zn(16,16734765),e=n.body,t=Jn(8014386,.6,.5),i=Jn(2761248,.6);q(new sn(9,1),t,0,0,0,e),q(new Rt(3.6,10,8),yt(16723245,5),7.5,0,0,e);let s=q(new jt(12,1.4,6,18),i,0,0,0,e);s.rotation.x=Math.PI/2,n.spin=s;for(let r=0;r<3;r++){let a=Math.PI+(r-1)*.9,o=q(new ii(2.2,14,6),t,Math.cos(a)*11,0,Math.sin(a)*11,e);o.rotation.z=-Math.PI/2,o.rotation.y=-a+Math.PI}return Nt(e,-10,0,0,3,16734765,4,n),n.muzzles.push(new U(12,0,0)),n}function aM(){let n=Zn(20,16723285),e=n.body,t=Jn(1842214,.3,.85),i=yt(16723285,3.5);q(Ut([[28,0],[-12,22],[-5,7],[-16,0],[-5,-7],[-12,-22]],4,1),t,0,-2,0,e),q(new Rt(1,12,8),_i(16723285),6,3,0,e).scale.set(9,3,3.5);let s=q(Ut([[-9,19],[-12,22],[-14,21],[-10,16]],.6,0),i,0,2,0,e);je(s);let r=q(Ut([[10,3],[-6,12],[-8,10],[6,2]],.8,0),i,0,2.2,0,e);return je(r),Nt(e,-13,0,6,3.2,16723285,6,n),Nt(e,-13,0,-6,3.2,16723285,6,n),n.muzzles.push(new U(18,0,8),new U(18,0,-8)),n}function oM(){let n=Zn(44,16765501),e=n.body,t=Jn(6054512,.45),i=Jn(10528436,.3,.9),s=Jn(2303534,.5),r=yt(16765501,3);q(Ut([[40,12],[-50,18],[-58,12],[-58,-12],[-50,-18],[40,-12]],14,2),t,0,-6,0,e),q(Ut([[66,0],[36,30],[28,26],[28,-26],[36,-30]],18,2.5),i,0,-8,0,e),q(_t(7,5.5,34,12),s,66,0,0,e),n.charge=q(new Rt(6,14,10),new Ye({color:new ge(16765501).multiplyScalar(5),transparent:!0,opacity:0}),84,0,0,e),n.muzzles.push(new U(86,0,0)),q(new At(22,14,16),t,-28,10,0,e),q(new At(2,3,12),r,-16.8,13,0,e),q(new At(4,22,2),s,-36,22,0,e);let a=q(new At(70,2,1.5),r,-10,0,18.5,e);je(a);for(let o of[-11,0,11])Nt(e,-60,0,o,6,16769162,8,n);return n}function lM(){let n=Zn(24,7208842),e=n.body,t=Jn(2902586,.4),i=Jn(1713184,.5),s=yt(7208842,3.5);q(new si(1,0),t,0,0,0,e).scale.set(24,8,15);let r=q(new At(26,6,6),i,-2,0,18,e);je(r);for(let o=0;o<3;o++){let l=q(new ii(1.4,4,6).rotateZ(-Math.PI/2),s,12,(o-1)*2,18,e);je(l)}let a=q(new bt(7,2,2,14),i,-4,8,0,e);return a.rotation.z=.4,q(new Rt(1.6,8,6),s,-2,10,0,e),Nt(e,-22,0,7,3.5,7208842,6,n),Nt(e,-22,0,-7,3.5,7208842,6,n),n.muzzles.push(new U(14,0,18),new U(14,0,-18)),n}function Zf(){let n=Zn(240,16723285),e=n.body,t=Jn(4869982,.45,.8,22),i=Jn(1776934,.55,.7,22),s=Jn(9080992,.35,.9,22),r=fs(12),a=yt(16723285,3.5),o=yt(8042751,4);e.scale.setScalar(1),q(new bt(70,70,560,6).rotateZ(-Math.PI/2),t,0,0,0,e).scale.set(1,.55,1.5),q(new ii(70,160,6).rotateZ(-Math.PI/2),t,360,0,0,e).scale.set(1,.55,1.5),q(Ut([[200,60],[-120,190],[-240,190],[-260,90],[-260,-90],[-240,-190],[-120,-190],[200,-60]],18,4),i,0,-20,0,e),q(Ut([[150,40],[-100,150],[-200,150],[-200,-150],[-100,-150],[150,-40]],10,3),s,0,-2,0,e),q(Ke(12,5,116,1.5),r,194,-9,0,e);let c=q(new At(520,3,6),a,-10,40,0,e);c.userData.pulse=!0;for(let d of[-1,1]){let f=q(new At(300,2,3),a,-60,6,d*148,e);f.rotation.y=d*-.42}q(new At(90,40,60),t,-150,50,0,e),q(new At(40,30,40),s,-160,85,0,e),q(new At(3,6,36),yt(16765501,3),-139,92,0,e);let h=(()=>{let d=7;return()=>(d=d*16807%2147483647)/2147483647})();for(let d=0;d<46;d++){let f=-230+h()*380,u=(h()-.5)*220*(1-(f+230)/600);q(new At(8+h()*24,4+h()*12,6+h()*18),h()>.5?t:i,f,8+h()*8,u,e)}n.broadL=[],n.broadR=[];for(let d=0;d<5;d++){let f=90-d*60;for(let u of[1,-1]){let m=u*(70+(200-f)*.38),y=q(new At(18,10,14),i,f,4,m*.95,e);q(_t(2.5,2.5,20,6).rotateY(u*Math.PI/2),s,f,6,m*.95+u*12,e),(u>0?n.broadL:n.broadR).push(new U(f,6,m*.95+u*22)),y.userData.side=u}}for(let d of[220,120,20]){let f=new Mt;f.position.set(d,24,0),q(new bt(14,16,8,10),i,0,0,0,f),q(new At(22,10,18),t,2,7,0,f),q(_t(2.5,2.5,28,6),s,18,8,4,f),q(_t(2.5,2.5,28,6),s,18,8,-4,f),e.add(f),n.turrets.push(f)}n.gens=[new U(60,30,110),new U(60,30,-110),new U(-210,30,0)],n.genMeshes=n.gens.map(d=>{let f=new Mt;f.position.copy(d),q(new bt(10,16,30,8),i,0,0,0,f);let u=q(new sn(14,1),new Ye({color:new ge(3733247).multiplyScalar(3)}),0,26,0,f);f.userData.orb=u;for(let m=0;m<3;m++){let y=q(new At(3,26,12),t,Math.cos(m*2.1)*14,14,Math.sin(m*2.1)*14,f);y.rotation.y=-m*2.1}return e.add(f),f}),n.weak=new U(-262,10,0),n.weakMesh=q(new Rt(22,20,14),new Ye({color:new ge(16747069).multiplyScalar(3)}),-262,10,0,e);for(let d of[-120,-60,0,60,120])Nt(e,-275,0,d,18,8042751,22,n);return q(new At(6,14,60),o,-245,40,0,e),n.hangar=new U(-120,0,0),n.beamOrigin=new U(440,0,0),n.muzzles.push(new U(440,0,0)),q(new Rt(14,16,12),a,430,4,0,e),n}function Vi(n,e,t=.55){let i=new mt({uniforms:{uColor:{value:new ge(e)},uHit:{value:new U(1,0,0)},uHitT:{value:9},uAlpha:{value:0}},transparent:!0,depthWrite:!1,blending:Tt,vertexShader:`varying vec3 vN; varying vec3 vV; varying vec3 vL;
      void main(){ vL = normalize(position); vN = normalize(mat3(modelMatrix) * normal); vec4 w = modelMatrix * vec4(position,1.0); vV = normalize(cameraPosition - w.xyz); gl_Position = projectionMatrix * viewMatrix * w; }`,fragmentShader:`uniform vec3 uColor; uniform vec3 uHit; uniform float uHitT; uniform float uAlpha; varying vec3 vN; varying vec3 vV; varying vec3 vL;
      void main(){ float f = pow(1.0 - abs(dot(vN, vV)), 2.5);
        float d = acos(clamp(dot(vL, normalize(uHit)), -1.0, 1.0));
        float ring = smoothstep(0.35, 0.0, abs(d - uHitT * 5.0)) * max(0.0, 1.0 - uHitT * 2.2);
        float a = uAlpha * (f * 0.9 + ring * 1.3 + smoothstep(0.6, 0.0, d) * max(0.0, 0.6 - uHitT * 2.0));
        gl_FragColor = vec4(uColor * 2.0 * a, a); }`}),s=new Pe(new Rt(n,32,20),i);return s.scale.y=t,s.userData.hit=(r,a)=>{i.uniforms.uHit.value.set(r,0,a),i.uniforms.uHitT.value=0},s.userData.update=(r,a)=>{i.uniforms.uHitT.value+=r,i.uniforms.uAlpha.value+=((a>0?.25+Math.max(0,.6-i.uniforms.uHitT.value):0)-i.uniforms.uAlpha.value)*Math.min(1,r*10)},s}var qf=Array.from({length:8},(n,e)=>zh(1,2,e*3.7+1)),cM={small:9075308,medium:8154724,large:6970968,crystal:4870758,explosive:4858400};function hM(n){let e=new Qt({color:cM[n],roughness:.92,metalness:.08,flatShading:!0}),t={uDamage:{value:0},uVein:{value:n==="explosive"?1:0},uTime:{value:0},uCrack:{value:new ge(n==="crystal"?3733247:16747053)}};return e.userData.u=t,e.onBeforeCompile=i=>{Object.assign(i.uniforms,t),i.vertexShader=i.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vObj;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vObj = position;`),i.fragmentShader=i.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 vObj; uniform float uDamage; uniform float uVein; uniform float uTime; uniform vec3 uCrack;
${Bi}`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
        float e1 = voronoiEdge(vObj * 2.6);
        float e2 = voronoiEdge(vObj * 6.0 + 3.0);
        float crack = (1.0 - smoothstep(0.0, 0.03 + 0.09 * uDamage, e1)) * smoothstep(0.08, 0.3, uDamage);
        crack += (1.0 - smoothstep(0.0, 0.05 * uDamage, e2)) * smoothstep(0.45, 0.8, uDamage);
        totalEmissiveRadiance += uCrack * clamp(crack, 0.0, 1.0) * (1.0 + 2.2 * uDamage);
        totalEmissiveRadiance += uVein * vec3(1.0, 0.3, 0.05) * (1.0 - smoothstep(0.0, 0.07, e1)) * (1.2 + 0.9 * sin(uTime * 5.0));`)},e.customProgramCacheKey=()=>"rock-crack",e}var uM=new si(1,0),Jf=new Qt({color:3733247,emissive:2148607,emissiveIntensity:2.2,metalness:.2,roughness:.1});Jf.userData.shared=!0;function Kf(n){let e=new Pe(qf[Math.floor(Math.random()*qf.length)],hM(n));if(n==="crystal")for(let t=0;t<7;t++){let i=new Pe(uM,Jf),s=new U(Math.random()-.5,Math.random()*.7,Math.random()-.5).normalize();i.position.copy(s).multiplyScalar(.85),i.scale.set(.12,.45+Math.random()*.3,.12),i.quaternion.setFromUnitVectors(new U(0,1,0),s),e.add(i)}return e}var $h=["hull","engines","shield","primary","secondary","ability","mining"],cr=5,jf="voidbreakers.save.v1",Qf={hull:"+12% max hull per level",engines:"+7% thrust and speed, +5% turn rate",shield:"+12% capacity, +10% recharge",primary:"+10% damage, +5% fire rate",secondary:"+12% damage, 6% shorter cooldown",ability:"+10% energy, +12% recharge, cheaper ability",mining:"+15% mining power, +20% cargo space"},Wi={plating:{name:"Dreadnought Plating",desc:"+10% hull on all ships",mod:{hull:.1}},core:{name:"Eclipse Core",desc:"+8% damage on all ships",mod:{dmg:.08}},emitter:{name:"Shield Emitter",desc:"+10% shield on all ships",mod:{shield:.1}}},dM=[{id:"rate",name:"Overclocked Capacitors",desc:"+8% fire rate",mod:{rate:.08}},{id:"dmg",name:"Hot-Loaded Rounds",desc:"+10% damage",mod:{dmg:.1}},{id:"shield",name:"Shield Lattice",desc:"+10% max shield",mod:{shield:.1}},{id:"hull",name:"Nanite Repair",desc:"+8% max hull, repair 30%",mod:{hull:.08},heal:.3},{id:"speed",name:"Afterburner Tune",desc:"+6% speed",mod:{speed:.06}},{id:"regen",name:"Fusion Cell",desc:"+15% energy regen",mod:{energyRegen:.15}},{id:"crit",name:"Targeting AI",desc:"+4% crit chance",mod:{crit:.04}},{id:"magnet",name:"Tractor Field",desc:"+30% pickup magnet range",mod:{magnet:.3}}],ta={firstblood:{name:"First Blood",desc:"Destroy an enemy ship"},miner:{name:"Prospector",desc:"Mine 100 ore in total"},boss:{name:"Giant Slayer",desc:"Defeat the Eclipse Dreadnought"},wave10:{name:"Veteran",desc:"Reach wave 10"},warden:{name:"Heavy Metal",desc:"Unlock the Warden"},victory:{name:"Sector Cleared",desc:"Clear wave 15"},evolve:{name:"Metamorphosis",desc:"Evolve your ship in the middle of a run"},apex:{name:"Apex Predator",desc:"Unlock a tier 7 ship"}},qh=(n,e)=>Math.round(120*1.9**e),na=n=>Math.round(40*n**1.4+60),ep=n=>n*6;function Xh(){return Object.fromEntries($h.map(n=>[n,0]))}function tp(n){let e={};for(let t of n)for(let i in t)e[i]=(e[i]||0)+t[i];return e}function Gh(n,e,t,i){if(!n)return null;let s={...n};for(let r of["dmg","dps","zap"])s[r]!==void 0&&(s[r]*=e);return s.rate=(s.rate||0)*t,s.cooldown=(s.cooldown||0)*i/t,s.charge&&(s.charge/=t),s}function fn(n,e=Xh(),t={}){let i=He[n],s=kf(n),r={...Xh(),...e},a=h=>1+(t[h]||0),o=a("dmg")*s.dmgScale,l=a("rate"),c=Ho[i.ability];return{id:i.id,name:i.name,cls:i.cls,tier:i.tier,radius:s.radius,color:i.o.color??(i.id==="viper"?16727536:Xt[i.cls].color),hull:s.hull*(1+.12*r.hull)*a("hull"),armor:s.armor,shield:s.shield*(1+.12*r.shield)*a("shield"),shieldRegen:s.shieldRegen*(1+.1*r.shield),energy:s.energy*(1+.1*r.ability),energyRegen:s.energyRegen*(1+.12*r.ability)*a("energyRegen"),accel:s.accel*(1+.07*r.engines)*a("speed"),maxSpeed:s.maxSpeed*(1+.07*r.engines)*a("speed"),turnRate:s.turnRate*(1+.05*r.engines),dash:s.dash*(1+.05*r.ability),mining:s.mining*(1+.15*r.mining),cargo:Math.round(s.cargo*(1+.2*r.mining)),crit:.1+(t.crit||0),magnet:220*a("magnet"),primary:Gh(i.primary,(1+.1*r.primary)*o,(1+.05*r.primary)*l,1),secondary:Gh(i.secondary,(1+.12*r.secondary)*o,l,1-.06*r.secondary),ability:{id:i.ability,...c,cost:c.cost*(1-.05*r.ability),cd:c.cd*(1-.05*r.ability)},drones:i.drones||[],droneDmg:6*o*(1+.1*r.primary),turrets:i.turrets||0,turret:i.turret?Gh(i.turret,(1+.1*r.primary)*o,(1+.05*r.primary)*l,1):null}}var Yh={up:"KeyW",down:"KeyS",left:"KeyA",right:"KeyD",dash:"Space",ability:"KeyQ",interact:"KeyE",pause:"Tab",tree:"KeyT",drones:"KeyR"};function ea(){return{v:1,credits:0,crystal:0,unlocked:["wasp"],selected:"wasp",upgrades:Object.fromEntries(Kr.map(n=>[n,Xh()])),components:[],best:{score:0,wave:0},achievements:{},stats:{ore:0,kills:0,bosses:0,runs:0},settings:{quality:"high",sens:1,volume:.7,shake:1,autoSell:!0,keys:{...Yh}},tutorialDone:!1}}function np(n,e){if(Array.isArray(n))return Array.isArray(e)?e:n;if(n&&typeof n=="object"){let t={...n};if(e&&typeof e=="object"&&!Array.isArray(e))for(let i in e)t[i]=i in n?np(n[i],e[i]):e[i];return t}return typeof e==typeof n?e:n}function ip(n){try{let e=n&&n.getItem(jf);if(!e)return ea();let t=np(ea(),JSON.parse(e));return t.unlocked=[...new Set(t.unlocked.filter(i=>He[i]))],t.unlocked.includes("wasp")||t.unlocked.unshift("wasp"),(!He[t.selected]||!t.unlocked.includes(t.selected))&&(t.selected="wasp"),t}catch{return ea()}}function Ft(n,e){try{return n&&n.setItem(jf,JSON.stringify(e)),!0}catch{return!1}}function sp(n,e,t){let i=n.upgrades[e][t];if(i>=cr)return!1;let s=qh(t,i);return n.credits<s?!1:(n.credits-=s,n.upgrades[e][t]=i+1,!0)}function Wo(n,e){if(!He[e]||Hi(n,e))return!1;let t=lr(e);return n.credits-=t.credits,n.crystal-=t.crystal,n.unlocked.push(e),!0}function rp(n,e){return n.achievements[e]?!1:(n.achievements[e]=!0,!0)}function ap(n,e=3){let t=dM.slice(),i=[];for(;i.length<e&&t.length;)i.push(t.splice(Math.floor(n()*t.length),1)[0]);return i}var hr=30;var ia=440;var De={keys:new Set,pressed:new Set,lmb:!1,rmb:!1,sx:innerWidth/2,sy:innerHeight/2,wx:0,wz:0,locked:!1,moved:!1};function hp(n,e){let t=()=>n.state==="play";addEventListener("keydown",s=>{(s.code==="Tab"||t()&&(s.code==="Space"||s.code.startsWith("Arrow")))&&s.preventDefault(),s.repeat||De.pressed.add(s.code),De.keys.add(s.code),n.onKey(s.code,s)}),addEventListener("keyup",s=>De.keys.delete(s.code)),addEventListener("mousedown",s=>{if(n.audioInit(),!!t()&&(s.button===0&&(De.lmb=!0),s.button===2&&(De.rmb=!0),!De.locked&&e.requestPointerLock&&s.target===e))try{let r=e.requestPointerLock();r&&r.catch&&r.catch(()=>{})}catch{}}),addEventListener("mouseup",s=>{s.button===0&&(De.lmb=!1),s.button===2&&(De.rmb=!1)}),addEventListener("contextmenu",s=>s.preventDefault()),addEventListener("mousemove",s=>{if(De.locked){let r=n.save.settings.sens;De.sx=Math.max(0,Math.min(innerWidth,De.sx+s.movementX*r)),De.sy=Math.max(0,Math.min(innerHeight,De.sy+s.movementY*r))}else De.sx=s.clientX,De.sy=s.clientY}),document.addEventListener("pointerlockchange",()=>{let s=De.locked;De.locked=document.pointerLockElement===e,s&&!De.locked&&n.state==="play"&&!De.expectUnlock&&n.pause(),De.expectUnlock=!1});let i=()=>{De.keys.clear(),De.lmb=De.rmb=!1};addEventListener("blur",()=>{i(),n.state==="play"&&n.pause()}),document.addEventListener("visibilitychange",()=>{document.hidden&&(i(),n.state==="play"&&n.pause())})}var Go=(n,e)=>De.keys.has(n.save.settings.keys[e]),Zh=(n,e)=>De.pressed.has(n.save.settings.keys[e]);function up(n){return tp([...n.save.components.map(e=>Wi[e].mod),...n.run.boosts.map(e=>e.mod)])}function Jh(n,e){let t=ai(e),i=fn(e,n.save.upgrades[e],up(n)),s=Vi(i.radius*1.9,3721471,.5);return t.root.add(s),n.scene.add(t.root),{team:"player",shipId:e,model:t,shieldMesh:s,stats:i,x:lt.x,z:lt.z+380,vx:0,vz:0,angle:-Math.PI/2,r:i.radius,hp:i.hull,maxHp:i.hull,shield:i.shield,maxShield:i.shield,energy:i.energy,maxEnergy:i.energy,cdP:0,cdS:0,cdDash:0,cdAbility:0,dashT:0,dashVx:0,dashVz:0,invuln:0,lastHit:-9,hitT:0,turretCd:[0,0,0,0],turretAng:[0,0,0,0],throttle:0,roll:0,prevAngle:-Math.PI/2,dead:!1,firing:0,charge:{primary:0,secondary:0},burst:{primary:null,secondary:null},overdriveT:0,overloadT:0,barrierT:0,swarmT:0,armor:i.armor,die(a){a.onPlayerDeath()}}}function Xo(n,e,t=0){let i=fn(e.shipId,n.save.upgrades[e.shipId],up(n)),s=e.hp/e.maxHp,r=e.maxShield?e.shield/e.maxShield:1;e.stats=i,e.armor=i.armor,e.maxHp=i.hull,e.maxShield=i.shield,e.maxEnergy=i.energy,e.hp=Math.min(e.maxHp,e.maxHp*s+e.maxHp*t),e.shield=e.maxShield*r}var op={},pM=(n,e)=>e.map(t=>{let i=Bt(n.x,n.z,n.angle,t.x,t.z);return{x:i.x,z:i.z}}),mM={pulse:"pulse",plasma:"plasma",missile:"missile",chain:null,mine:null,artillery:null,orb:null};function lp(n,e,t,i,s){for(let r of t.dirs||[0]){let a=e.angle+r,o=r===0?i:[{x:e.x+Math.cos(a)*e.r*1.1,z:e.z+Math.sin(a)*e.r*1.1}];n.weapons.fire(e,t,a,o,"player",{crit:e.stats.crit,sound:r===0?t.recoil>100?"heavy":mM[t.kind]:null,vol:t.kind==="pulse"?.6:.8,aimX:De.wx,aimZ:De.wz})}t.recoil&&n.shake(t.recoil/(s==="primary"?25:18))}function cp(n,e,t,i,s){let r=e.stats[t],a=e.model;if(!r)return;let o=t==="primary"?"cdP":"cdS",l=e.overdriveT>0?2:1,c=t==="primary"?a.muzzles:a.muzzles2.length?a.muzzles2:a.muzzles,h=()=>pM(e,c),d=()=>{e.firing=.1,n.stats[t==="primary"?"shots":"sec"]++},f=e.burst[t];if(f&&f.n>0&&(f.t-=s,f.t<=0&&(f.n--,f.t=r.burstGap,lp(n,e,r,h(),t))),r.kind==="beam"){if(i){let u=h();n.arsenal.beam(e,t,r,s,u[0],e.angle),d()}return}if(r.kind==="rail"){let u=e.charge[t];if(i){if(u===0&&n.audio.play("charge2",e.x,e.z,.5),e.charge[t]=Math.min(r.charge,u+s*l),n.frame%3===0){let m=h()[0];n.fx.spawn(m.x,5,m.z,(Math.random()-.5)*30,0,(Math.random()-.5)*30,.2,4+10*(e.charge[t]/r.charge),0,.5,.8,1.4)}}else u>0&&(u>=r.charge*.25&&(n.arsenal.rail(e,r,u/r.charge,r.count>1?h().slice(0,r.count):[h()[0]],e.angle),d()),e.charge[t]=0);return}if(!(!i||e[o]>0))switch(e[o]=(r.rate>0?1/r.rate:r.cooldown)/l,d(),r.kind){case"chain":n.arsenal.chain(e,r,h()[0],e.angle);break;case"mine":n.arsenal.dropMine(e,r);break;case"artillery":n.arsenal.artillery(e,r,De.wx,De.wz);break;case"orb":n.arsenal.orb(e,r,h()[0],e.angle);break;default:lp(n,e,r,h(),t),r.burst>1&&(e.burst[t]={n:r.burst-1,t:r.burstGap})}}function dp(n,e,t){let i=e.stats,s=e.model;if(e.dead)return;let r=0,a=0;(Go(n,"up")||De.keys.has("ArrowUp"))&&(a-=1),(Go(n,"down")||De.keys.has("ArrowDown"))&&(a+=1),(Go(n,"left")||De.keys.has("ArrowLeft"))&&(r-=1),(Go(n,"right")||De.keys.has("ArrowRight"))&&(r+=1);let o=Math.hypot(r,a);if(o>0&&(r/=o,a/=o,De.moved=!0),e.dashT>0)e.dashT-=t,e.vx=e.dashVx,e.vz=e.dashVz,n.fx.spawn(e.x,0,e.z,0,0,0,.3,e.r*1.6,e.r*.5,.2,.6,1),e.dashT<=0&&(e.vx*=.35,e.vz*=.35);else{let y=r*i.maxSpeed,g=a*i.maxSpeed,p=y-e.vx,E=g-e.vz,x=Math.hypot(p,E),v=(o>0?i.accel:i.accel*.6)*t;x>v&&(p*=v/x,E*=v/x),e.vx+=p,e.vz+=E}e.x+=e.vx*t,e.z+=e.vz*t,e.throttle+=((o>0?1:.25)-e.throttle)*Math.min(1,t*6);let l=xt(e.x,e.z,De.wx,De.wz);e.prevAngle=e.angle,e.angle=Wt(Fn(e.angle,l,i.turnRate*t));let c=Wt(e.angle-e.prevAngle)/Math.max(t,1e-4),h=-e.vx*Math.sin(e.angle)+e.vz*Math.cos(e.angle),d=e.vx*Math.cos(e.angle)+e.vz*Math.sin(e.angle),f=Math.max(-.75,Math.min(.75,c*.06+h*.0016));e.roll+=(f-e.roll)*Math.min(1,t*8);let u=Math.hypot(e.x,e.z);if(u>3e3){let y=(u-3e3)*3*t;e.vx-=e.x/u*y*60,e.vz-=e.z/u*y*60,u>3150&&(e.hp-=12*t,e.lastHit=n.time,e.hp<=0&&!e.dead&&(e.dead=!0,e.die(n)))}Kh(e,lt.x,lt.z,lt.r);for(let y of n.asteroids){if(y.dead)continue;let g=e.x-y.x,p=e.z-y.z,E=e.r+y.r,x=g*g+p*p;if(x<E*E){let v=Math.sqrt(x)||1,P=g/v,_=p/v;e.x=y.x+P*E,e.z=y.z+_*E;let L=e.vx*P+e.vz*_;L<0&&(e.vx-=1.5*L*P,e.vz-=1.5*L*_,-L>260&&e.dashT<=0&&(e.hp-=(-L-260)*.04,e.lastHit=n.time,n.audio.play("rock",e.x,e.z,.5),n.shake(4)))}}if(e.energy=Math.min(e.maxEnergy,e.energy+i.energyRegen*t),n.time-e.lastHit>2.5&&(e.shield=Math.min(e.maxShield,e.shield+i.shieldRegen*t*(n.time-e.lastHit>5?2:1))),e.cdP-=t,e.cdS-=t,e.cdDash-=t,e.cdAbility-=t,e.invuln-=t,e.hitT-=t,e.firing-=t,e.overdriveT-=t,e.overloadT-=t,e.barrierT-=t,e.swarmT-=t,cp(n,e,"primary",De.lmb,t),cp(n,e,"secondary",De.rmb,t),i.turrets&&s.turrets.forEach((y,g)=>{let p=y.userData.lp||y.position,E=Bt(e.x,e.z,e.angle,p.x,p.z,op),x=null,v=i.turret.range**2;for(let _ of n.enemies){if(_.dead||_.untargetable)continue;let L=(_.x-E.x)**2+(_.z-E.z)**2;L<v&&(v=L,x=_)}e.turretCd[g]-=t;let P=x?xt(E.x,E.z,x.x,x.z):e.angle;if(e.turretAng[g]=Fn(e.turretAng[g],P,6*t),y.rotation.y=-(e.turretAng[g]-e.angle),x&&e.turretCd[g]<=0&&Math.abs(Wt(P-e.turretAng[g]))<.15){e.turretCd[g]=1/i.turret.rate;let _=Bt(E.x,E.z,e.turretAng[g],14,0);n.weapons.fire({x:E.x,z:E.z},i.turret,e.turretAng[g],[_],"player",{crit:i.crit,sound:"turret",vol:.5})}}),Zh(n,"dash")&&e.dashT<=0&&e.cdDash<=0)if(e.energy>=hr){let y=o>0?r:Math.cos(e.angle),g=o>0?a:Math.sin(e.angle);e.energy-=hr,e.dashT=.16,e.cdDash=.45,e.invuln=.3,e.dashVx=y*i.dash/.16,e.dashVz=g*i.dash/.16,n.fx.burst(e.x,e.z,{n:16,color:8050943,speed:200,life:.4,size:8,drag:4}),n.audio.play("dash"),n.shake(3),n.stats.dashed=!0}else n.ui.denied("slotDash");if(Zh(n,"ability")&&e.cdAbility<=0){let y=i.ability;e.energy>=y.cost?(e.energy-=y.cost,e.cdAbility=y.cd,n.arsenal.ability(e,y.id),n.stats.emped=!0):n.ui.denied("slotAbility")}Zh(n,"drones")&&n.arsenal.toggleDrones()&&n.ui.toast("Drone command",n.arsenal.droneMode==="attack"?"Attack: drones hunt the target nearest your cursor.":"Escort: drones guard you and engage nearby threats."),s.root.position.set(e.x,0,e.z),s.root.rotation.y=-e.angle,s.body.rotation.x=e.roll,s.body.rotation.z=Math.max(-.15,Math.min(.15,-d*2e-4+(e.firing>0&&i.primary.recoil?-.04:0))),s.body.position.y=Math.sin(n.time*2)*1.5;let m=.85+Math.random()*.3;for(let y of s.flames)y.scale.x=y.userData.base*(.5+e.throttle*1.2+(e.dashT>0?2:0))*m;if(n.frame%2===0)for(let y of s.engines){let g=Bt(e.x,e.z,e.angle,y.x,y.z,op);n.fx.spawn(g.x,y.y,g.z,-Math.cos(e.angle)*90+e.vx*.3,0,-Math.sin(e.angle)*90+e.vz*.3,.35+e.throttle*.2,5+e.throttle*4,.5,...gM(i.color))}if(s.spinners)for(let y of s.spinners)y.rotation.z+=t*y.userData.spin;e.overdriveT>0&&n.frame%3===0&&n.fx.burst(e.x,e.z,{n:2,color:16756797,speed:80,life:.3,size:5}),e.shieldMesh.userData.update(t,e.overloadT>0?1:e.shield),e.overloadT>0&&(e.shieldMesh.material.uniforms.uAlpha.value=.9+Math.sin(n.time*30)*.2),e.shieldMesh.visible=e.maxShield>0,s.root.visible=!(e.invuln>0&&e.dashT<=0&&Math.floor(n.time*30)%2)}var gM=n=>[(n>>16&255)/255,(n>>8&255)/255,(n&255)/255];function Kh(n,e,t,i){let s=n.x-e,r=n.z-t,a=Math.hypot(s,r),o=i+n.r;if(a<o&&a>0){n.x=e+s/a*o,n.z=t+r/a*o;let l=(n.vx*s+n.vz*r)/a;l<0&&(n.vx-=l*s/a,n.vz-=l*r/a)}}function fp(n,e){n.fx.shockwave(e.x,e.z,ia,8042751,.7),n.fx.shockwave(e.x,e.z,ia*.7,16777215,.45),n.fx.burst(e.x,e.z,{n:60,color:8042751,speed:700,life:.5,size:6,drag:3}),n.fx.flash(e.x,e.z,8042751,3,.4,60),n.audio.play("emp"),n.shake(10),n.weapons.destroyInRadius(e.x,e.z,ia,"enemy");for(let t of n.enemies)if(!(t.dead||Math.hypot(t.x-e.x,t.z-e.z)>ia+t.r)){if(t.isGen){n.applyDamage(t,150,{x:e.x,z:e.z,fromPlayer:!0});continue}t.boss||(t.shield>0&&(t.shield=0,n.fx.burst(t.x,t.z,{n:12,color:3721471,speed:200,life:.4,size:6})),t.stun=2.5)}ds(n,e.x,e.z,ia,25,"player",{fromPlayer:!0}),n.stats.emped=!0}var $o={small:{r:[18,28],hp:30,ore:[2,3],score:10,color:9075308},medium:{r:[34,48],hp:90,ore:[2,3],split:["small",2],score:20,color:8154724},large:{r:[62,95],hp:300,ore:[3,4],split:["medium",3],score:40,color:6970968},crystal:{r:[34,42],hp:160,ore:[2,2],crystal:[3,5],score:150,color:5929626},explosive:{r:[30,38],hp:50,ore:[1,2],score:30,color:8006176,blast:200,blastDmg:85}},xM=[["small",31],["medium",30],["large",20],["explosive",9],["crystal",10]],oi=(n,e)=>n+Math.random()*(e-n),pp=([n,e])=>Math.floor(oi(n,e+1));function yM(){let n=Math.random()*100;for(let[e,t]of xM)if((n-=t)<0)return e;return"small"}var Qh={},vM=new Mn(1.25,1.35,64).rotateX(-Math.PI/2),_p=new Ye({color:new ge(3733247).multiplyScalar(1.6),transparent:!0,opacity:.5,blending:Tt,depthWrite:!1,side:Dt});function sa(n,e,t,i,s,r,a){let o=$o[e];s=s??oi(...o.r);let l=(Qh[e]||=[]).pop();if(!l){let f=new Mt,u=Kf(e);if(f.add(u),e==="crystal"){let m=new Pe(vM,_p);m.name="beacon",f.add(m)}l={group:f,mesh:u,u:u.material.userData.u,team:"neutral",type:e,isRock:!0,die:_M,onDamage:(m,y,g)=>MM(m,l,g.x??l.x,g.z??l.z)}}n.scene.add(l.group);let c=oi(4,22),h=Math.random()*Math.PI*2;Object.assign(l,{x:t,z:i,r:s,vx:r??Math.cos(h)*c,vz:a??Math.sin(h)*c,hp:o.hp*(s/o.r[1])**1.2,dead:!1,rx:oi(-.6,.6),ry:oi(-.6,.6),wob:0,heavy:e==="large"}),l.maxHp=l.hp,l.mesh.scale.setScalar(s);let d=l.group.getObjectByName("beacon");return d&&d.scale.setScalar(s),l.beacon=d,l.mesh.rotation.set(oi(0,6),oi(0,6),0),l.u.uDamage.value=0,l.group.position.set(t,0,i),n.asteroids.push(l),l}function _M(n,e){let t=this,i=$o[t.type];n.fx.debris(t.x,t.z,Math.round(t.r/6)+4,i.color,90+t.r,t.r*.18),n.fx.burst(t.x,t.z,{n:Math.round(t.r/3),color:10127994,speed:120+t.r,life:.9,size:t.r*.35,sizeEnd:t.r*.6,drag:3,vy:20}),n.fx.burst(t.x,t.z,{n:10,color:t.type==="crystal"?3733247:16752736,speed:300,life:.4,size:4,drag:2}),n.audio.play("rock",t.x,t.z,Math.min(1,t.r/60)),n.shake(t.r/25),(e.fromPlayer||e.team==="all")&&n.addScore(i.score);let s=e.fromPlayer&&n.player&&n.player.stats.mining||1,r=pp(i.ore)*s;if(ra(n,t.x,t.z,{ore:Math.floor(r)+(Math.random()<r%1?1:0),crystal:i.crystal?pp(i.crystal):0}),t.type==="crystal"&&(n.fx.flash(t.x,t.z,3733247,3,.5),n.fx.shockwave(t.x,t.z,120,3733247,.6),n.audio.play("rare",t.x,t.z)),i.split){let[a,o]=i.split;for(let l=0;l<o;l++){let c=l/o*Math.PI*2+Math.random(),h=Math.max($o[a].r[0],t.r*.5);sa(n,a,t.x+Math.cos(c)*t.r*.45,t.z+Math.sin(c)*t.r*.45,h,t.vx+Math.cos(c)*70,t.vz+Math.sin(c)*70)}}i.blast&&(n.fx.explosion(t.x,t.z,2.4,16738848),n.audio.play("explodeBig",t.x,t.z,.8),n.shake(16),ds(n,t.x,t.z,i.blast,i.blastDmg,"all",{except:t,push:400,fromPlayer:e.fromPlayer})),n.stats.rocks=(n.stats.rocks||0)+1}function eu(n,e){for(let t=n.asteroids.length-1;t>=0;t--){let i=n.asteroids[t];if(i.dead){n.scene.remove(i.group),Qh[i.type].push(i),n.asteroids.splice(t,1);continue}i.x+=i.vx*e,i.z+=i.vz*e,i.vx*=1-.15*e,i.vz*=1-.15*e,Math.hypot(i.x,i.z)>3e3-i.r&&i.x*i.vx+i.z*i.vz>0&&(i.vx*=-1,i.vz*=-1),i.mesh.rotation.x+=i.rx*e,i.mesh.rotation.y+=i.ry*e,i.wob=Math.max(0,i.wob-e*4);let r=1-i.hp/i.maxHp;if(i.u.uDamage.value+=(r-i.u.uDamage.value)*Math.min(1,e*10),i.u.uTime.value=n.time,i.mesh.scale.setScalar(i.r*(1+Math.sin(i.wob*30)*i.wob*.06)),i.group.position.set(i.x,0,i.z),i.beacon){let a=n.time*.8%1;i.beacon.scale.setScalar(i.r*(1+a*1.5))}}_p.opacity=.25+.25*Math.sin(n.time*3)}function MM(n,e,t,i){e.wob=1,n.fx.burst(t,i,{n:3,color:$o[e.type].color,speed:120,life:.5,size:5,drag:3})}function tu(n,e){for(let t=0;t<30;t++){let i=Math.random()*Math.PI*2,s=Math.sqrt(Math.random())*2800,r=Math.cos(i)*s,a=Math.sin(i)*s;if(!(Math.hypot(r-lt.x,a-lt.z)<520)&&!(n.player&&Math.hypot(r-n.player.x,a-n.player.z)<e))return{x:r,z:a}}return{x:3e3*.7,z:0}}function Mp(n,e=0){let t=tu(n,e),i=5+Math.floor(Math.random()*5);for(let s=0;s<i;s++){let r=Math.random()*Math.PI*2,a=Math.random()*260;sa(n,yM(),t.x+Math.cos(r)*a,t.z+Math.sin(r)*a)}}function nu(n){for(;n.asteroids.length<n.R.q.asteroids;)Mp(n,500);for(let e=0;e<4;e++){let t=tu(n,900);sa(n,"crystal",t.x,t.z)}for(let e=0;e<6;e++){let t=-Math.PI/2+(e-2.5)*.25;sa(n,e%3?"small":"medium",Math.cos(t)*700,380+Math.sin(t)*700+600)}}var jh=0;function bp(n,e){if(jh-=e,!(jh>0)&&(jh=3,n.asteroids.length<n.R.q.asteroids-8&&Mp(n,1400),!n.asteroids.some(t=>t.type==="crystal")&&Math.random()<.3)){let t=tu(n,1400);sa(n,"crystal",t.x,t.z)}}function Sp(n){for(let e of n.asteroids)n.scene.remove(e.group),Qh[e.type].push(e);n.asteroids.length=0}var mp={ore:{geo:new si(4,0),color:13666890,k:1.2,cap:300},crystal:{geo:new si(6,0),color:3733247,k:3,cap:100},credit:{geo:new bt(4.5,4.5,1.6,12).rotateX(Math.PI/2),color:16765501,k:2.4,cap:300},repair:{geo:new sn(5.5,0),color:7208842,k:2.6,cap:40}},bM=new Ge,gp=new Kt,xp=new hn,yp=new U,vp=new U,qo=new Ge().makeScale(0,0,0),Mi=null;function Ep(n){Mi={};for(let e in mp){let t=mp[e],i=new xn(t.geo,new Ye({color:new ge(t.color).multiplyScalar(t.k)}),t.cap);i.instanceMatrix.setUsage(Nn),i.frustumCulled=!1;for(let s=0;s<t.cap;s++)i.setMatrixAt(s,qo);n.add(i),Mi[e]={im:i,items:Array.from({length:t.cap},(s,r)=>({i:r,active:!1})),head:0}}}function ra(n,e,t,{ore:i=0,crystal:s=0,credit:r=0,repair:a=0}){let o=(l,c,h)=>{for(let d=0;d<c;d++){let f=Mi[l],u=f.items[f.head];f.head=(f.head+1)%f.items.length;let m=Math.random()*Math.PI*2,y=oi(60,200),g=u.active;Object.assign(u,{active:!0,kind:l,x:e,z:t,vx:Math.cos(m)*y,vz:Math.sin(m)*y,life:25,amount:h,spin:Math.random()*6,pulled:!1}),g||n.pickups.push(u)}};if(o("ore",i,1),o("crystal",s,1),r>0){let l=Math.min(6,Math.ceil(r/8));o("credit",l,Math.ceil(r/l))}o("repair",a,25)}function wp(n,e){let t=n.player,i=t&&!t.dead?t.stats.magnet:0;for(let s=n.pickups.length-1;s>=0;s--){let r=n.pickups[s];r.life-=e,r.spin+=e*3;let a=Mi[r.kind];if(r.life<=0||!r.active){r.active=!1,a.im.setMatrixAt(r.i,qo),n.pickups.splice(s,1);continue}if(i){let l=t.x-r.x,c=t.z-r.z,h=Math.hypot(l,c);if(h<t.r+14){if(n.collect(r.kind,r.amount,r.x,r.z)!==!1){r.active=!1,a.im.setMatrixAt(r.i,qo),n.pickups.splice(s,1);continue}r.pulled=!1,r.full=1.5,r.vx=(r.x-t.x)*4,r.vz=(r.z-t.z)*4}if(r.full>0)r.full-=e;else if(h<i||r.pulled){r.pulled=!0;let d=900+(1-Math.min(1,h/i))*1600;r.vx+=l/h*d*e,r.vz+=c/h*d*e,r.vx*=1-3*e,r.vz*=1-3*e}}r.pulled||(r.vx*=1-2.5*e,r.vz*=1-2.5*e),r.x+=r.vx*e,r.z+=r.vz*e;let o=r.life<4&&Math.floor(r.life*8)%2;xp.set(r.spin*.7,r.spin,0),gp.setFromEuler(xp),yp.set(r.x,6+Math.sin(r.spin*1.3)*3,r.z),vp.setScalar(o?0:1+(r.kind==="crystal"?Math.sin(r.spin*3)*.2:0)),a.im.setMatrixAt(r.i,bM.compose(yp,gp,vp)),r.kind==="crystal"&&n.frame%6===0&&n.fx.spawn(r.x,8,r.z,oi(-20,20),30,oi(-20,20),.6,5,0,.3,1.4,1.6)}for(let s in Mi)Mi[s].im.instanceMatrix.needsUpdate=!0}function Tp(n){for(let e of n.pickups)e.active=!1,Mi[e.kind].im.setMatrixAt(e.i,qo);for(let e in Mi)Mi[e].im.instanceMatrix.needsUpdate=!0;n.pickups.length=0}var SM={drone:{name:"Scavenger Drone",hp:30,shield:0,speed:270,accel:650,turn:5,r:16,xp:8,credits:4,score:50,range:430,weapon:{kind:"pulse",dmg:4,rate:1.1,speed:720,life:1.1,color:16734765,spread:.1,count:1}},interceptor:{name:"Pirate Interceptor",hp:70,shield:30,speed:400,accel:950,turn:6,r:20,xp:18,credits:10,score:120,range:540,dodge:.55,weapon:{kind:"pulse",dmg:6,rate:7,speed:920,life:1,color:16723285,spread:.05,count:1},burst:3,burstCd:1.7},frigate:{name:"Heavy Frigate",hp:260,shield:120,speed:130,accel:220,turn:1.1,r:44,xp:45,credits:30,score:300,range:850,armorArc:.9,heavy:!0,weapon:{kind:"pulse",dmg:40,speed:1150,life:1.4,color:16765501,spread:0,count:1,len:80},chargeTime:1.2,cannonCd:4.2},hunter:{name:"Missile Hunter",hp:90,shield:40,speed:230,accel:520,turn:3,r:24,xp:25,credits:18,score:180,range:1050,dodge:.25,weapon:{kind:"missile",dmg:14,speed:430,life:4,turn:2.3,count:2,spread:.6,color:7208842,splash:30},missileCd:3.6}},Cp={},Ap=[],EM=-1.03,wM=new Ye({color:0,transparent:!0,opacity:.6,depthWrite:!1}),TM=new Ye({color:16727386,depthWrite:!1}),AM=new Ye({color:3721471,depthWrite:!1}),iu=new gn(1,1).translate(.5,0,0),RM=new gn(1,1).translate(.5,0,0).rotateX(-Math.PI/2);function su(n){let e=new Mt;e.rotation.x=EM;let t=new Pe(iu,wM),i=new Pe(iu,n?new Ye({color:n,depthWrite:!1}):TM),s=new Pe(iu,AM);return t.renderOrder=i.renderOrder=s.renderOrder=20,e.add(t,i,s),{g:e,bg:t,hp:i,sh:s}}function ru(n,e,t,i){n.bg.scale.set(e+2,7,1),n.bg.position.set(-e/2-1,0,-.1),n.hp.scale.set(Math.max(.001,e*t),4,1),n.hp.position.set(-e/2,-.8,0),n.sh.scale.set(Math.max(.001,e*i),1.6,1),n.sh.position.set(-e/2,2.4,0),n.sh.visible=i>0}function CM(n){let e=fn(n),t=e.primary,i=e.tier,s=16727386,r=t.rate>0?t.rate:1/Math.max(.3,t.cooldown||t.charge||1),a={kind:"pulse",dmg:4+i*1.6,rate:Math.min(5,r),speed:1100,life:1,count:Math.min(t.count||1,4),spread:Math.max(.05,t.spread||0),color:s},o={pulse:a,plasma:{kind:"plasma",dmg:10+i*4,rate:Math.min(1.6,r),speed:700,life:1.4,count:1,spread:.03,splash:40,size:1.2,color:s},missile:{kind:"missile",dmg:8+i*2.5,rate:.45,speed:430,life:3.5,turn:2.3,count:Math.min(t.count||2,3),spread:.5,splash:30,color:16738954},rail:{...a,dmg:14+i*5,rate:.6,speed:2200,count:1,len:70}}[{pulse:"pulse",plasma:"plasma",orb:"plasma",missile:"missile",mine:"missile",artillery:"missile",rail:"rail",beam:"pulse",chain:"pulse"}[t.kind]];return{name:"Rogue "+e.name,hp:e.hull*.7,shield:e.shield*.5,speed:e.maxSpeed*.85,accel:e.accel*.8,turn:Math.min(6,e.turnRate),r:e.radius,xp:30+i*12,credits:15+i*10,score:200+i*80,range:650,dodge:.4,weapon:o,ai:"interceptor",burst:1,burstCd:1/o.rate}}function Yo(n,e,t,i,s=1){let r=null;if(e==="rogue"){let h=Math.max(2,Math.min(7,1+Math.floor(n.director.wave/3))),d=en.filter(f=>f.tier===h&&!f.secret);r=d[Math.floor(Math.random()*d.length)].id}let a=r?"rogue:"+r:e,o=r?CM(r):SM[e],l=(Cp[a]||=[]).pop();if(!l){let h=r?Wh(ai(r)):Yf(e);h.flashMats.forEach(d=>d.userData.orig={c:d.emissive.clone(),i:d.emissiveIntensity}),l={kind:e,key:a,model:h,bar:su(),team:"enemy",die:PM},o.shield&&(l.shieldMesh=Vi(o.r*1.7,e==="frigate"?16765501:r?16727386:3721471,.5),h.root.add(l.shieldMesh)),e==="frigate"&&(l.tele=new Pe(RM,new Ye({color:new ge(16765501).multiplyScalar(2),transparent:!0,opacity:0,blending:Tt,depthWrite:!1})),l.tele.scale.set(1e3,1,10))}n.scene.add(l.model.root,l.bar.g),l.tele&&n.scene.add(l.tele);let c=xt(t,i,n.player.x,n.player.z);return Object.assign(l,{def:o,x:t,z:i,vx:0,vz:0,angle:c,r:o.r,hp:o.hp*s,maxHp:o.hp*s,shield:o.shield*s,maxShield:o.shield*s,dead:!1,removed:!1,stun:0,hitT:0,lastHit:-9,cd:1+Math.random()*1.5,burstLeft:0,mode:"orbit",modeT:2+Math.random()*2,dir:Math.random()<.5?1:-1,seed:Math.random()*6.28,dodgeCd:0,roll:0,charge:0,spawnT:0,flashing:!1,armorArc:o.armorArc||0,heavy:!!o.heavy,invuln:0,ai:o.ai||e,tgt:null,retgt:0}),r&&n.ui.toast("Rogue pilot",`A ${o.name} entered the arena.`),l.model.root.scale.setScalar(.01),n.enemies.push(l),n.fx.flash(t,i,16727386,1.5,.3),n.fx.shockwave(t,i,o.r*3,16727386,.5),n.fx.burst(t,i,{n:14,color:16738954,speed:220,life:.4,size:7,drag:4}),l}function PM(n,e){let t=this,i=t.def,s=i.r/22;n.fx.explosion(t.x,t.z,s,t.model.accent),n.fx.debris(t.x,t.z,Math.round(5+s*6),5922670,160+s*60,2+s*2),n.audio.play(s>1.5?"explodeBig":"explode",t.x,t.z),n.shake(4+s*5),ra(n,t.x,t.z,{credit:Math.round(i.credits*3),repair:Math.random()<(t.kind==="frigate"?.35:.06)?1:0,ore:t.kind==="drone"&&Math.random()<.4?1:0}),n.onEnemyKilled(t,e)}function Pp(n,e){e.removed=!0,n.scene.remove(e.model.root,e.bar.g),e.tele&&n.scene.remove(e.tele),Cp[e.key].push(e)}function Ip(n,e,t,i){let s=Math.cos(i),r=Math.sin(i);for(let a of n.enemies){if(a.dead||!a.def?.dodge||a.dodgeCd>0||a.stun>0)continue;let o=a.x-e,l=a.z-t,c=o*s+l*r,h=-o*r+l*s;if(c>60&&c<900&&Math.abs(h)<a.r+40&&Math.random()<a.def.dodge){let d=h>=0?1:-1,f=a.def.speed*1.4;a.vx+=-r*d*f,a.vz+=s*d*f,a.dodgeCd=1.1,n.fx.burst(a.x,a.z,{n:6,color:a.model.accent,speed:120,life:.3,size:6,drag:4})}}}var Rp={};function IM(n,e){let t=n.player,i=n.player.dead?1/0:Math.hypot(n.player.x-e.x,n.player.z-e.z);for(let s of n.allies){if(s.dead)continue;let r=Math.hypot(s.x-e.x,s.z-e.z);r<i&&(i=r,t=s)}return t}function Lp(n,e){for(let t=n.enemies.length-1;t>=0;t--){let i=n.enemies[t];if(i.dead){if(i.custom){i.keep||n.enemies.splice(t,1);continue}Pp(n,i),n.enemies.splice(t,1);continue}if(i.custom)continue;let s=i.def;i.retgt=(i.retgt||0)-e,(i.retgt<=0||!i.tgt||i.tgt.dead)&&(i.retgt=.7,i.tgt=IM(n,i));let r=i.tgt;i.spawnT+=e,i.hitT-=e,i.dodgeCd-=e,i.cd-=e;let a=r.x-i.x,o=r.z-i.z,l=Math.hypot(a,o)||1,c=Math.atan2(o,a),h=0,d=0,f=c,u=s.speed;if(i.stun>0)i.stun-=e,i.angle+=e*2*i.dir,Math.random()<.2&&n.fx.sparks(i.x,i.z,Math.random()*6.28,8042751,2),i.vx*=1-1.5*e,i.vz*=1-1.5*e;else{let L=r.dead?{x:r.x,z:r.z}:nr(i.x,i.z,r.x,r.z,r.vx,r.vz,s.weapon.speed),z=xt(i.x,i.z,L.x,L.z);if(f=z,i.kind==="drone"){let b=i.seed+n.time*.7*i.dir,O=r.x+Math.cos(b)*150,V=r.z+Math.sin(b)*150,I=xt(i.x,i.z,O,V);h=Math.cos(I)*u,d=Math.sin(I)*u}else if(i.ai==="interceptor")if(i.modeT-=e,i.mode==="orbit"){let b=(l-380)/380,O=c+Math.PI/2*i.dir;h=Math.cos(O)*u+Math.cos(c)*b*u,d=Math.sin(O)*u+Math.sin(c)*b*u,i.modeT<=0&&(i.mode="run",i.modeT=1.5)}else{let b=r.x-Math.cos(r.angle)*260-Math.sin(r.angle)*120*i.dir,O=r.z-Math.sin(r.angle)*260+Math.cos(r.angle)*120*i.dir,V=xt(i.x,i.z,b,O);u*=1.3,h=Math.cos(V)*u,d=Math.sin(V)*u,i.modeT<=0&&(i.mode="orbit",i.modeT=2.5+Math.random()*2.5,i.dir*=Math.random()<.5?-1:1)}else if(i.kind==="frigate"){let b=l>520?1:l<380?-.6:0;h=Math.cos(c)*u*b,d=Math.sin(c)*u*b}else if(i.kind==="hunter"){i.modeT-=e,i.modeT<=0&&(i.dir*=-1,i.modeT=2+Math.random()*2);let b=l<600?-1:l>850?1:0,O=c+Math.PI/2*i.dir;h=Math.cos(c)*b*u+Math.cos(O)*u*.6,d=Math.sin(c)*b*u+Math.sin(O)*u*.6}n.grid.query(i.x,i.z,i.r+70,Ap);for(let b of Ap){if(b===i||b.team==="player")continue;let O=i.x-b.x,V=i.z-b.z,I=Math.hypot(O,V)||1,M=(i.r+b.r+50-I)/50;if(M>0){let A=(b.isRock?2.2:1)*M*u;h+=O/I*A,d+=V/I*A}}let T=Math.hypot(i.x-lt.x,i.z-lt.z)||1;T<lt.r+i.r+60&&(h+=(i.x-lt.x)/T*u,d+=(i.z-lt.z)/T*u),LM(n,i,s,l,z,e,r)}let m=h-i.vx,y=d-i.vz,g=Math.hypot(m,y),p=s.accel*e;g>p&&(m*=p/g,y*=p/g),i.stun<=0&&(i.vx+=m,i.vz+=y);let E=Math.hypot(i.vx,i.vz),x=s.speed*2.2;E>x&&(i.vx*=x/E,i.vz*=x/E),i.x+=i.vx*e,i.z+=i.vz*e;let v=Math.hypot(i.x,i.z);v>3e3&&(i.x*=3e3/v,i.z*=3e3/v);let P=i.angle;i.stun<=0&&(i.angle=Wt(Fn(i.angle,f,s.turn*(i.charge>0?.35:1)*e)));let _=Wt(i.angle-P)/Math.max(e,1e-4);i.roll+=(Math.max(-.8,Math.min(.8,_*.12))-i.roll)*Math.min(1,e*6),zM(n,i,e)}}function LM(n,e,t,i,s,r,a){let o=Math.abs(Wt(s-e.angle)),l=()=>e.model.muzzles.map(c=>{let h=Bt(e.x,e.z,e.angle,c.x,c.z);return{x:h.x,z:h.z}});if(!(a.dead||e.spawnT<.8)){if(e.kind==="frigate"){e.charge>0?(e.charge-=r,e.charge<=0&&(n.weapons.fire(e,t.weapon,e.angle,l(),"enemy",{sound:"heavy",vol:.8}),n.fx.flash(e.x,e.z,16765501,2.5,.2),n.shake(3),e.cd=t.cannonCd)):e.cd<=0&&i<t.range&&o<.5&&(e.charge=t.chargeTime,n.audio.play("charge",e.x,e.z,.7));return}if(!(i>t.range)){if(e.kind==="hunter"){e.cd<=0&&o<.8&&(e.cd=t.missileCd,n.weapons.fire(e,t.weapon,e.angle,l(),"enemy",{target:a,sound:"missile",vol:.6}));return}if(e.ai==="interceptor"){e.burstLeft>0&&e.cd<=0&&o<.35?(e.burstLeft--,e.cd=e.burstLeft>0?1/t.weapon.rate:t.burstCd,n.weapons.fire(e,t.weapon,e.angle,l(),"enemy",{sound:"enemyShot",vol:.5})):e.burstLeft===0&&e.cd<=0&&(e.burstLeft=t.burst);return}e.cd<=0&&o<.4&&(e.cd=1/t.weapon.rate*(.8+Math.random()*.5),n.weapons.fire(e,t.weapon,e.angle+(Math.random()-.5)*.12,l(),"enemy",{sound:"enemyShot",vol:.4}))}}}function zM(n,e,t){let i=e.model;i.root.position.set(e.x,0,e.z),i.root.rotation.y=-e.angle,i.body.rotation.x=e.roll,i.root.scale.setScalar(Math.min(1,.2+e.spawnT*2.5)),i.spin&&(i.spin.rotation.z+=t*4);let s=e.stun>0?0:.5+Math.min(1,Math.hypot(e.vx,e.vz)/e.def.speed)*.8;for(let o of i.flames)o.scale.x=o.userData.base*s*(.85+Math.random()*.3);let r=e.hitT>0;if(r||e.flashing){for(let o of i.flashMats)r?(o.emissive.setRGB(1,1,1),o.emissiveIntensity=2*(e.hitT/.12)):(o.emissive.copy(o.userData.orig.c),o.emissiveIntensity=o.userData.orig.i);e.flashing=r}e.shieldMesh&&(e.shieldMesh.userData.update(t,e.shield),e.shieldMesh.visible=e.maxShield>0);let a=e.hp<e.maxHp||e.shield<e.maxShield;if(e.bar.g.visible=a,a&&(e.bar.g.position.set(e.x,60,e.z-e.r-18),ru(e.bar,Math.max(30,e.r*2),Math.max(0,e.hp/e.maxHp),e.maxShield?e.shield/e.maxShield:0)),e.tele){let o=e.charge>0?1-e.charge/e.def.chargeTime:0;e.tele.material.opacity=o>0?.15+o*.5*(.7+Math.sin(n.time*40)*.3):0;let l=Bt(e.x,e.z,e.angle,86,0,Rp);e.tele.position.set(l.x,3,l.z),e.tele.rotation.y=-e.angle,e.tele.scale.z=4+o*10,i.charge.material.opacity=o,i.charge.scale.setScalar(.3+o*1.2),o>0&&Math.random()<.5&&n.fx.spawn(l.x+(Math.random()-.5)*60,4,l.z+(Math.random()-.5)*60,(e.x-l.x)*-.5,0,(e.z-l.z)*-.5,.3,5,0,1.6,1.3,.3)}if(n.frame%3===0&&e.stun<=0)for(let o of i.engines){let l=Bt(e.x,e.z,e.angle,o.x,o.z,Rp),c=i.accentC||=new ge(i.accent);n.fx.spawn(l.x,o.y,l.z,-Math.cos(e.angle)*60,0,-Math.sin(e.angle)*60,.3,4+e.r*.1,.5,c.r,c.g,c.b)}}function zp(n){for(let e of n.enemies)!e.custom&&!e.removed&&Pp(n,e);n.enemies.length=0}var lu={kind:"plasma",dmg:14,rate:0,speed:520,life:3,count:1,spread:0,color:16727386,size:1.3,splash:0},DM={...lu,speed:300,life:5,dmg:12,color:16747069,size:1.5},UM={kind:"pulse",dmg:18,speed:900,life:1.8,count:1,spread:0,color:16727386,len:46},NM=new gn(1,1).translate(.5,0,0).rotateX(-Math.PI/2),au={};function ou(n,e){let t=new Pe(NM,new Ye({color:new ge(e).multiplyScalar(2),transparent:!0,opacity:0,blending:Tt,depthWrite:!1}));return n.add(t),t}function Up(n,e=1){let t=Zf(),i=n.player,s=Math.random()*Math.PI*2,r=i.x+Math.cos(s)*950,a=i.z+Math.sin(s)*950,o=Math.hypot(r,a);o>2600&&(r*=2600/o,a*=2600/o);let l=Vi(330,3733247,.35);l.scale.x=1.55,t.root.add(l),n.scene.add(t.root);let c={custom:!0,keep:!0,boss:!0,team:"enemy",name:"ECLIPSE DREADNOUGHT",model:t,shieldMesh:l,x:r,z:a,vx:0,vz:0,angle:xt(r,a,i.x,i.z),r:120,hp:6e3*e,maxHp:6e3*e,shield:0,maxShield:0,shielded:!0,phase:1,introT:3.2,dying:0,dead:!1,heavy:!0,untargetable:!1,tTurret:2,tNova:5,tBroad:4,tDrones:3,tBeam:6,broadSide:1,broadT:0,beamT:0,beamA:0,novaT:0,turretAng:[0,0,0],die(){this.dying=2.6,this.dead=!0,n.timeScale=.4,n.audio.play("explodeBig")}},h=[[230,0,110],[40,0,140],[-130,0,75]].map(([u,,m])=>({custom:!0,keep:!0,team:"enemy",proxy:c,lx:u,lz:0,r:m,x:r,z:a,dead:!1,untargetable:!0})),d={custom:!0,keep:!0,team:"enemy",proxy:c,mul:2,critZone:!0,lx:t.weak.x,lz:0,r:55,x:r,z:a,dead:!1,ghost:!0,untargetable:!0},f=t.gens.map((u,m)=>({custom:!0,keep:!0,team:"enemy",isGen:!0,lx:u.x,lz:u.z,r:32,x:r,z:a,hp:600*e,maxHp:600*e,shield:0,maxShield:0,dead:!1,mesh:t.genMeshes[m],hitT:0,die(y){let g={x:this.x,z:this.z};y.fx.explosion(g.x,g.z,2.2,3733247),y.audio.play("explodeBig",g.x,g.z),y.shake(14),this.mesh.visible=!1,l.userData.hit(g.x-c.x,g.z-c.z),f.every(p=>p.dead)?(c.shielded=!1,c.phase=2,d.ghost=!1,y.fx.shockwave(c.x,c.z,600,3733247,1.2),y.audio.play("shieldBreak"),y.shake(20),y.ui.banner("SHIELDS DOWN","Hit the glowing reactor at the stern for double damage.")):y.ui.toast("Generator destroyed",`${f.filter(p=>!p.dead).length} left`)}}));return c.parts=[...h,d,...f],c.gens=f,c.weak=d,c.lanes=[0,1,2,3,4].map(()=>ou(n.scene,16727386)),c.beam=ou(n.scene,16738954),c.beamCore=ou(n.scene,16777215),n.enemies.push(c,...c.parts),n.boss=c,t.root.position.set(r,0,a),t.root.rotation.y=-c.angle,t.root.scale.set(6,.3,.3),n.fx.flash(r,a,16727386,5,1,120),n.fx.shockwave(r,a,700,16727386,1.4),n.fx.burst(r,a,{n:120,color:16738954,speed:900,life:1,size:10,drag:2}),n.audio.play("warp"),n.audio.play("alarm"),n.cinematic(r,a,3.2,1.9),n.ui.titleCard("ECLIPSE DREADNOUGHT","Destroy the 3 shield generators"),c}function Np(n,e){let t=n.boss;if(!t)return;let i=t.model,s=n.player;if(t.dying>0){if(t.dying-=e/Math.max(n.timeScale,.1)*.5,Math.random()<.5){let h=Bt(t.x,t.z,t.angle,(Math.random()-.5)*560,(Math.random()-.5)*300);n.fx.explosion(h.x,h.z,1+Math.random()*1.5,Math.random()<.5?16747069:16727386),n.audio.play("explode",h.x,h.z,.6),n.shake(6)}i.root.position.y-=e*8,i.root.rotation.z+=e*.05,t.dying<=0&&FM(n,t);return}if(t.invuln=t.introT,t.introT>0){t.introT-=e;let h=Math.min(1,(3.2-t.introT)/1);i.root.scale.set(1+(1-h)*5,.3+h*.7,.3+h*.7)}else i.root.scale.setScalar(1);let r=Math.hypot(s.x-t.x,s.z-t.z),a=xt(t.x,t.z,s.x,s.z);t.phase===2&&t.hp<t.maxHp*.3&&(t.phase=3,n.ui.banner("CORE CRITICAL","Fighters launching. Watch for the beam."),n.fx.shockwave(t.x,t.z,500,16727386,1),n.shake(16),n.audio.play("alarm"));let o=t.phase===1?600:700,l=r>o+100?1:r<o-150?-.6:0;t.vx+=(Math.cos(a)*70*l-t.vx)*e,t.vz+=(Math.sin(a)*70*l-t.vz)*e,t.x+=t.vx*e,t.z+=t.vz*e;let c=a;t.phase===2&&t.beamT<=0&&(c=a-Math.PI/2*t.broadSide),t.beamT>0&&(c=t.angle),t.angle=Wt(Fn(t.angle,c,(t.phase===3?.35:.25)*e));for(let h of t.parts)if(Bt(t.x,t.z,t.angle,h.lx,h.lz,h),h.isGen){h.hitT-=e;let d=h.mesh.userData.orb;d.rotation.y+=e*2,d.scale.setScalar(h.hitT>0?1.3:1+Math.sin(n.time*5)*.1)}i.root.position.set(t.x,0,t.z),i.root.rotation.y=-t.angle,t.shieldMesh.userData.update(e,t.shielded?1:0),t.shieldMesh.visible=t.shielded||t.shieldMesh.material.uniforms.uAlpha.value>.01,i.weakMesh.scale.setScalar(t.phase>1?1+Math.sin(n.time*8)*.15:.6);for(let h of i.flames)h.scale.x=h.userData.base*(.6+Math.abs(l)*.4)*(.85+Math.random()*.3);if(n.frame%2===0)for(let h of i.engines){let d=Bt(t.x,t.z,t.angle,h.x,h.z,au);n.fx.spawn(d.x,0,d.z,-Math.cos(t.angle)*120,0,-Math.sin(t.angle)*120,.5,12,3,.25,.4,.8)}if(t.introT>0||s.dead){Dp(t);return}if(t.tTurret-=e,i.turrets.forEach((h,d)=>{let f=Bt(t.x,t.z,t.angle,h.position.x,h.position.z,au),u=nr(f.x,f.z,s.x,s.z,s.vx,s.vz,lu.speed);if(t.turretAng[d]=Fn(t.turretAng[d],xt(f.x,f.z,u.x,u.z),2*e),h.rotation.y=-(t.turretAng[d]-t.angle),t.tTurret<=0){let m=Bt(f.x,f.z,t.turretAng[d],30,0);n.weapons.fire({x:f.x,z:f.z},lu,t.turretAng[d],[m],"enemy",{sound:d===0?"plasma":null,vol:.5})}}),t.tTurret<=0&&(t.tTurret=t.phase===3?1.1:1.7),t.phase===1&&(t.tNova-=e,t.tNova<.9&&t.tNova>0&&i.weakMesh.scale.setScalar(.6+(.9-t.tNova)*1.5),t.tNova<=0)){t.tNova=6;for(let h=0;h<18;h++){let d=h/18*Math.PI*2+n.time;n.weapons.fire({x:t.x,z:t.z},DM,d,[{x:t.x+Math.cos(d)*140,z:t.z+Math.sin(d)*140}],"enemy",{fx:!1})}n.fx.shockwave(t.x,t.z,300,16747069,.6),n.audio.play("heavy",t.x,t.z)}if(t.phase>=2){t.tBroad-=e;let h=Math.sign(Wt(a-t.angle))||1,d=h>0?i.broadL:i.broadR;if(t.tBroad<=1.3&&t.tBroad>0){let f=1-t.tBroad/1.3;t.lanes.forEach((u,m)=>{let y=Bt(t.x,t.z,t.angle,d[m].x,d[m].z,au);u.position.set(y.x,3,y.z),u.rotation.y=-(t.angle+h*Math.PI/2),u.scale.set(1500,1,8+f*30),u.material.opacity=.12+f*.35*(.7+Math.sin(n.time*30)*.3)})}else Dp(t);if(t.tBroad<=0&&(t.broadT=.6,t.tBroad=t.phase===3?4.2:5.2,t.fireSide=h,t.broadShots=3,t.broadCd=0,t.broadSide=Math.random()<.5?1:-1),t.broadShots>0&&(t.broadCd-=e,t.broadCd<=0)){t.broadShots--,t.broadCd=.18;let f=t.fireSide>0?i.broadL:i.broadR,u=t.angle+t.fireSide*Math.PI/2;f.forEach((m,y)=>{let g=Bt(t.x,t.z,t.angle,m.x,m.z);n.weapons.fire({x:g.x,z:g.z},UM,u,[g],"enemy",{sound:y===0?"enemyShot":null})}),n.shake(3)}}if(t.phase===3){if(t.tDrones-=e,t.tDrones<=0){t.tDrones=7;let d=Bt(t.x,t.z,t.angle,i.hangar.x,i.hangar.z);for(let f=0;f<3;f++)Yo(n,"drone",d.x+(f-1)*50,d.z+200*(f%2?1:-1),1+(n.director.wave/5-1)*.3)}t.tBeam-=e;let h=Bt(t.x,t.z,t.angle,i.beamOrigin.x,0);if(t.tBeam<=1.1&&t.tBeam>0&&t.beamT<=0){let d=1-t.tBeam/1.1;t.beam.position.set(h.x,3,h.z),t.beam.rotation.y=-t.angle,t.beam.scale.set(1600,1,4+d*6),t.beam.material.opacity=.2+d*.4,t.beamCore.material.opacity=0,t.tBeam<.05&&(t.beamT=2.8,t.beamA0=t.angle-.75,n.audio.play("beam",t.x,t.z))}if(t.beamT>0){t.beamT-=e;let d=t.beamA0+(1-t.beamT/2.8)*1.5;t.angle=d,t.beam.position.set(h.x,4,h.z),t.beam.rotation.y=-d,t.beam.scale.set(1600,1,60+Math.sin(n.time*50)*6),t.beam.material.opacity=.75,t.beamCore.position.set(h.x,5,h.z),t.beamCore.rotation.y=-d,t.beamCore.scale.set(1600,1,18),t.beamCore.material.opacity=.9,n.shake(2);let f=Math.cos(d),u=Math.sin(d),m=y=>{let g=y.x-h.x,p=y.z-h.z,E=g*f+p*u,x=Math.abs(-g*u+p*f);return E>0&&E<1600&&x<30+y.r};m(s)&&yn(n,s,75*e,{x:h.x,z:h.z,silent:n.frame%6!==0});for(let y of n.asteroids)!y.dead&&m(y)&&yn(n,y,250*e,{silent:!0});for(let y=0;y<3;y++){let g=Math.random()*1600;n.fx.spawn(h.x+f*g,6,h.z+u*g,(Math.random()-.5)*200,40,(Math.random()-.5)*200,.3,10,0,2,.6,.8)}t.beamT<=0&&(t.tBeam=9,t.beam.material.opacity=t.beamCore.material.opacity=0)}else t.tBeam>1.1&&(t.beam.material.opacity=t.beamCore.material.opacity=0)}}function Dp(n){n.lanes.forEach(e=>e.material.opacity=0)}function FM(n,e){n.timeScale=1,n.fx.explosion(e.x,e.z,7,16747069),n.fx.shockwave(e.x,e.z,1200,16777215,1.6),n.fx.debris(e.x,e.z,60,4869982,400,9),n.fx.flash(e.x,e.z,16777215,6,1,150),n.audio.play("explodeBig"),n.shake(40),ra(n,e.x,e.z,{credit:900,crystal:8,repair:3}),cu(n),n.onBossKilled(e)}function cu(n){let e=n.boss;if(e){n.scene.remove(e.model.root),[...e.lanes,e.beam,e.beamCore].forEach(t=>{n.scene.remove(t),t.material.dispose()}),e.model.root.traverse(t=>{t.isMesh&&t.geometry.dispose()});for(let t of[e,...e.parts])t.dead=!0,t.keep=!1;n.boss=null}}var Gi=n=>document.getElementById(n),uu=210,hu=128,du=112,Zo=118,aa=70,OM=["assault","sniper","energy","drone","missile","heavy"],Fp=["","I","II","III","IV","V","VI","VII"];function kM(){let n={},e=s=>OM.indexOf(s)*hu*1.25;n.wasp={x:0,y:e("energy")-hu*.6};for(let s=2;s<=Vo;s++){let r=en.filter(l=>l.tier===s).map(l=>{let c=l.parents.map(d=>n[d].y),h=c.reduce((d,f)=>d+f,0)/c.length;return{s:l,want:h*.55+e(l.cls)*.45}}).sort((l,c)=>l.want-c.want),a=-1/0;for(let l of r)l.y=Math.max(l.want,a+hu),a=l.y;let o=(r.reduce((l,c)=>l+c.want,0)-r.reduce((l,c)=>l+c.y,0))/r.length;for(let l of r)n[l.s.id]={x:(s-1)*uu,y:l.y+o}}let t=Object.values(n).map(s=>s.y),i=Math.min(...t);for(let s in n)n[s].x+=aa,n[s].y+=aa-i+40;return{pos:n,w:(Vo-1)*uu+du+aa*2,h:Math.max(...t)-i+Zo+aa*2+40}}function BM(n){let t=new Ys({antialias:!0,alpha:!0,preserveDrawingBuffer:!0});t.setSize(160,160,!1),t.toneMapping=cs,t.outputColorSpace=cn;let i=new Ni;i.environment=n,i.add(new Ks(10466559,2101290,1.4));let s=new Fi(16777215,2.6);s.position.set(-.4,1,.5),i.add(s);let r=new Ui(-1,1,1,-1,.1,2e3),a=new Xn,o=new U,l=new U;return c=>{let h=ai(c);h.root.rotation.y=-Math.PI/2,h.flames.forEach(u=>u.visible=!1),i.add(h.root),a.setFromObject(h.root),a.getSize(o),a.getCenter(l);let d=Math.max(o.x,o.z)*.58;r.left=-d,r.right=d,r.top=d,r.bottom=-d,r.updateProjectionMatrix(),r.position.set(l.x,l.y+400,l.z+260),r.lookAt(l),t.render(i,r);let f=t.domElement.toDataURL("image/png");return i.remove(h.root),h.root.traverse(u=>{u.isMesh&&u.geometry.dispose()}),f}}var rn=n=>Math.round(n);function Op(n){if(!n)return"";let e=n.rate>0?`${n.rate.toFixed(1)}/s`:n.cooldown?`every ${n.cooldown.toFixed(1)}s`:"";switch(n.kind){case"pulse":{let t=[n.count>1?`${n.count}-bolt spread`:"Laser bolts"];return n.dirs&&t.push(`firing ${n.dirs.length} ways`),n.burst&&t.push(`${n.burst}-round bursts`),n.pierce&&t.push(`pierce ${n.pierce>50?"all":n.pierce}`),n.ricochet&&t.push(`ricochet \xD7${n.ricochet}`),`${t.join(", ")}. ${rn(n.dmg)} dmg, ${e}.`}case"plasma":return`Explosive shells${n.frags?` that burst into ${n.frags} fragments`:""}. ${rn(n.dmg)} dmg, ${rn(n.splash)} blast, ${e}.`;case"missile":return`${n.count} homing missile${n.count>1?"s":""} per volley. ${rn(n.dmg)} dmg each, ${e}.`;case"rail":return`Hold to charge (${n.charge.toFixed(1)}s), release a piercing slug${n.count>1?" from twin rails":""}. Up to ${rn(n.dmg)} dmg.`;case"beam":return n.lance?`Continuous lance that pierces everything in ${rn(n.range)} units. ${rn(n.dps)} dmg/s.`:`Continuous beam; burns the first target it touches. ${rn(n.dps)} dmg/s, ${rn(n.range)} range.`;case"chain":return`Lightning that jumps to ${n.chains} more targets. ${rn(n.dmg)} dmg, ${e}.`;case"mine":return`Drops proximity mines behind you (up to ${n.max}). ${rn(n.dmg)} dmg, ${rn(n.blast)} blast.`;case"artillery":return`Lobs ${n.count>1?`${n.count} shells`:"a shell"} onto the cursor, ${rn(n.range)} range. ${rn(n.dmg)} dmg, ${rn(n.blast)} blast.`;case"orb":return`Slow orb that zaps enemies within ${rn(n.zapRange)}${n.vortex?" and drags them in":""}, then detonates. ${rn(n.zap)} zap dmg/s.`}return""}var HM={pulse:"Pulse cannon",plasma:"Plasma shells",missile:"Missile rack",rail:"Railgun",beam:"Beam emitter",chain:"Arc projector",mine:"Mine layer",artillery:"Artillery",orb:"Orb launcher"},ur=n=>n?n.kind==="pulse"&&n.count>3?"Scattergun":n.kind==="beam"&&n.lance?"Lance beam":n.kind==="plasma"&&n.frags?"Flak cannon":HM[n.kind]:"",VM=[["Hull",n=>n.hull],["Armour",n=>n.armor*100,"%"],["Shield",n=>n.shield],["Shield regen",n=>n.shieldRegen,"/s"],["Top speed",n=>n.maxSpeed],["Thrust",n=>n.accel],["Turn rate",n=>n.turnRate,"",1],["Primary DPS",n=>Qr(n.primary)],["Primary range",n=>Bf(n.primary)],["Secondary DPS",n=>Qr(n.secondary)],["Energy",n=>n.energy],["Ability cooldown",n=>n.ability.cd,"s",1,!0],["Mining power",n=>n.mining*100,"%"],["Cargo",n=>n.cargo],["Hull size",n=>n.radius,"",0,!0]];function kp(n){let e=Gi("treeView"),t=Gi("treeWorld"),i=Gi("treeLinks"),s=Gi("treeNodes"),r=Gi("treeTip"),a=kM();t.style.width=a.w+"px",t.style.height=a.h+"px",i.setAttribute("width",a.w),i.setAttribute("height",a.h);let o={x:0,y:0,k:1},l="hangar",c="wasp",h={},d=[],f=null,u=!1,m=Array.from({length:Vo},(I,M)=>`<div class="tierHead" style="left:${aa+M*uu}px">Tier ${Fp[M+1]}</div>`).join("");Gi("treeLegend").innerHTML=Object.entries(Xt).map(([,I])=>`<span style="--c:${I.css}"><i></i>${I.name}</span>`).join("");function y(I){t.classList.toggle("smooth",!!I),t.style.transform=`translate(${o.x}px, ${o.y}px) scale(${o.k})`}function g(I=!0){let M=e.getBoundingClientRect();o.k=Math.max(.35,Math.min(1.1,Math.min(M.width/a.w,(M.height-30)/a.h))),o.x=(M.width-a.w*o.k)/2,o.y=(M.height-a.h*o.k)/2+10,y(I)}function p(I,M,A,w){let F=Math.max(.3,Math.min(2.2,o.k*I));o.x=M-(M-o.x)*(F/o.k),o.y=A-(A-o.y)*(F/o.k),o.k=F,y(w)}function E(I,M=!0){let A=e.getBoundingClientRect(),w=a.pos[I];o.x=A.width/2-(w.x+du/2)*o.k,o.y=A.height/2-(w.y+Zo/2)*o.k,y(M)}function x(I){let M=n.save,A=l==="run"?n.player.shipId:M.selected;return Hh(M,I)?I===A?"current":M.unlocked.includes(I)?"owned":jr(M,I)?Hi(M,I)?"blocked":"available":"locked":"secret"}let v=I=>l==="run"&&He[I].parents.includes(n.player.shipId);function P(){let I=n.save,M="";for(let A of en)for(let w of A.parents){let F=a.pos[w],H=a.pos[A.id],k=F.x+du,Y=F.y+Zo/2-8,Z=H.x,N=H.y+Zo/2-8,ie=(k+Z)/2,W=I.unlocked.includes(w)&&I.unlocked.includes(A.id),K=I.unlocked.includes(w)&&!I.unlocked.includes(A.id)&&Hh(I,A.id),ne=l==="run"&&w===n.player.shipId?"route":W?"owned":K?"open":"locked";M+=`<path class="${ne}" style="--c:${Xt[A.cls].css}" d="M${k},${Y} C${ie},${Y} ${ie},${N} ${Z},${N}"/>`}i.innerHTML=`<defs><filter id="glowF" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="3" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter></defs>${M}`,s.innerHTML=m+en.map(A=>{let w=x(A.id),F=a.pos[A.id],H=lr(A.id),k=w==="secret",Y=w==="current"?l==="run"?"Flying":"Selected":w==="owned"?"Unlocked":k?"Classified":`${H.credits} cr${H.crystal?` + ${H.crystal}\u25C6`:""}`;return`<button class="tnode ${w} ${A.id===c?"sel":""} ${v(A.id)?"route":""}" data-id="${A.id}" style="left:${F.x}px;top:${F.y}px;--c:${Xt[A.cls].css}"
        aria-label="${k?"Classified ship":`${A.name}, tier ${A.tier} ${Xt[A.cls].name}, ${Y}`}">
        <span class="thumb">${k?"<b>?</b>":h[A.id]?`<img src="${h[A.id]}" alt="">`:'<i class="ph"></i>'}</span>
        <span class="tname">${k?"???":A.name}</span><span class="tmeta">${Y}</span></button>`}).join("")}function _(){let I=n.save,M=He[c],A=x(c),w=Gi("treeInfo");if(A==="secret"){w.innerHTML='<h3 class="stencil tTitle">CLASSIFIED</h3><p class="dim">A secret apex ship. Unlock one of the tier 6 ships it evolves from to reveal it.</p>',n.showPreview(null);return}let F=l==="run"?n.player.shipId:I.selected,H=l==="run"?n.player.stats:fn(F,I.upgrades[F],{}),k=fn(c,I.upgrades[c],{}),Y=F===c,Z=VM.map(([xe,Ee,Le="",ee=0,de])=>{let B=Ee(H),Ie=Ee(k),he=Ie-B,we=de?he<0:he>0,me=Y||Math.abs(he)<.05?"":`<em class="${we?"up":"down"}">${he>0?"+":""}${he.toFixed(ee)}</em>`;return`<div class="srow"><span>${xe}</span><b>${Ie.toFixed(ee)}${Le}</b>${me}</div>`}).join(""),N=Bh(c).map(([xe,Ee])=>`<li class="${Ee(I)?"ok":""}">${xe}</li>`);M.parents.length&&N.unshift(`<li class="${jr(I,c)?"ok":""}">Unlock ${M.parents.map(xe=>He[xe].name).join(" or ")}</li>`),l==="run"&&!I.unlocked.includes(c)&&v(c)&&N.push(`<li class="${n.run.level>=M.tier?"ok":""}">Pilot level ${M.tier} to evolve mid-run</li>`);let ie=lr(c),W=k.drones,K=W.length?Object.entries(W.reduce((xe,Ee)=>(xe[Ee]=(xe[Ee]||0)+1,xe),{})).map(([xe,Ee])=>`${Ee} \xD7 ${kh[xe].name.toLowerCase()} (${kh[xe].desc})`).join(", "):"",ae="",ne="",ue="";l==="run"?c===F?ue="You are flying this ship.":v(c)?(ue=gs(I,F,c,n.run.level),ue||(ne="evolve",ae=I.unlocked.includes(c)?`Evolve into ${M.name}`:`Unlock and evolve (${ie.credits} cr${ie.crystal?`, ${ie.crystal} crystal`:""})`)):I.unlocked.includes(c)?ue=`Mid-run you can only evolve into a ship that branches from your ${He[F].name}. Launch a new run to fly it.`:(ue=Hi(I,c),ue?ue+=". Mid-run you can only evolve into a ship that branches from your current one.":(ne="unlock",ae=`Unlock for ${ie.credits} cr${ie.crystal?` and ${ie.crystal} crystal`:""}`)):I.unlocked.includes(c)?I.selected===c?ue="This ship is in the launch bay.":(ne="select",ae="Fly this ship"):(ue=Hi(I,c),ue||(ne="unlock",ae=`Unlock for ${ie.credits} cr${ie.crystal?` and ${ie.crystal} crystal`:""}`)),w.innerHTML=`
      <div class="tHead"><h3 class="stencil tTitle" style="--c:${Xt[M.cls].css}">${M.name.toUpperCase()}</h3>
        <span class="chip" style="--c:${Xt[M.cls].css}">Tier ${Fp[M.tier]} ${Xt[M.cls].name}</span></div>
      <p>${M.desc}</p>
      <dl class="loadout">
        <div><dt>Primary: ${ur(k.primary)}</dt><dd>${Op(k.primary)}</dd></div>
        <div><dt>Secondary: ${ur(k.secondary)}</dt><dd>${Op(k.secondary)}</dd></div>
        <div><dt>Ability: ${k.ability.name}</dt><dd>${Ho[M.ability].desc}</dd></div>
        ${W.length?`<div><dt>Drones</dt><dd>${K}. Press R to switch between escort and attack.</dd></div>`:""}
        ${k.turrets?`<div><dt>Turrets</dt><dd>${k.turrets} automatic turrets.</dd></div>`:""}
      </dl>
      <h4>${Y?"Stats":`Compared with your ${He[F].name}`}</h4>
      <div class="stats">${Z}</div>
      ${I.unlocked.includes(c)?"":`<h4>Requirements</h4><ul class="reqs">${N.join("")}<li class="${I.credits>=ie.credits&&I.crystal>=ie.crystal?"ok":""}">${ie.credits} credits${ie.crystal?` and ${ie.crystal} crystal`:""}</li></ul>`}
      <div class="tAct">${ne?`<button class="primary" data-act="treeAction" data-do="${ne}" data-id="${c}">${ae}</button>`:""}${ue?`<p class="why">${ue}</p>`:""}</div>`,n.showPreview(c)}function L(I,M){c=I,s.querySelectorAll(".tnode").forEach(A=>A.classList.toggle("sel",A.dataset.id===I)),_(),M&&E(I)}let z=new Map,T=null,b=null;e.addEventListener("pointerdown",I=>{if(!I.target.closest(".treeTools")&&(e.setPointerCapture(I.pointerId),z.set(I.pointerId,{x:I.clientX,y:I.clientY}),z.size===1&&(T={x:I.clientX,y:I.clientY,cx:o.x,cy:o.y,moved:!1,node:I.target.closest(".tnode")}),z.size===2)){let[M,A]=[...z.values()];b={d:Math.hypot(M.x-A.x,M.y-A.y),k:o.k},T=null}}),e.addEventListener("pointermove",I=>{if(z.has(I.pointerId)&&z.set(I.pointerId,{x:I.clientX,y:I.clientY}),b&&z.size===2){let[A,w]=[...z.values()],F=e.getBoundingClientRect();p(b.k*Math.hypot(A.x-w.x,A.y-w.y)/b.d/o.k,(A.x+w.x)/2-F.left,(A.y+w.y)/2-F.top)}else if(T){let A=I.clientX-T.x,w=I.clientY-T.y;Math.abs(A)+Math.abs(w)>5&&(T.moved=!0),T.moved&&(o.x=T.cx+A,o.y=T.cy+w,y(!1),e.classList.add("panning"))}let M=I.target.closest?.(".tnode");if(M&&!T?.moved&&I.pointerType==="mouse"){let A=He[M.dataset.id],w=x(A.id),F=e.getBoundingClientRect();r.classList.remove("hidden"),r.innerHTML=w==="secret"?"Classified apex ship":`<b>${A.name}</b>, ${Xt[A.cls].name.toLowerCase()} class<br>${ur(A.primary)} + ${ur(A.secondary)}<br><span>${w==="owned"||w==="current"?"Unlocked":Hi(n.save,A.id)||"Ready to unlock"}</span>`,r.style.left=Math.min(F.width-240,I.clientX-F.left+16)+"px",r.style.top=I.clientY-F.top+16+"px"}else r.classList.add("hidden")});let O=I=>{z.delete(I.pointerId),z.size<2&&(b=null),T&&!T.moved&&T.node&&(n.audio.play("ui"),L(T.node.dataset.id)),z.size===0&&(T=null,e.classList.remove("panning"))};e.addEventListener("pointerup",O),e.addEventListener("pointercancel",O),e.addEventListener("pointerleave",()=>r.classList.add("hidden")),e.addEventListener("wheel",I=>{I.preventDefault();let M=e.getBoundingClientRect();p(Math.exp(-I.deltaY*.0015),I.clientX-M.left,I.clientY-M.top)},{passive:!1}),document.querySelectorAll("[data-tz]").forEach(I=>I.addEventListener("click",()=>{let M=e.getBoundingClientRect();I.dataset.tz==="fit"?g():p(I.dataset.tz==="in"?1.25:.8,M.width/2,M.height/2,!0)})),e.addEventListener("keydown",I=>{let M={ArrowRight:[1,0],ArrowLeft:[-1,0],ArrowDown:[0,1],ArrowUp:[0,-1]}[I.key];if(M){I.preventDefault();let A=a.pos[c],w=null,F=1/0;for(let H of en){let k=a.pos[H.id],Y=k.x-A.x,Z=k.y-A.y;if(H.id===c||Y*M[0]+Z*M[1]<=0)continue;let N=Math.hypot(Y,Z)+Math.abs(M[0]?Z:Y)*2;N<F&&(F=N,w=H.id)}w&&L(w,!0)}else I.key==="Enter"&&document.querySelector("#treeInfo [data-act=treeAction]")?.click()});function V(){if(d.length){f||=BM(n.scene.environment);for(let I=0;I<3&&d.length;I++){let M=d.shift();h[M]=f(M);let A=s.querySelector(`.tnode[data-id="${M}"] .thumb`);A&&!A.querySelector("b")&&(A.innerHTML=`<img src="${h[M]}" alt="">`)}requestAnimationFrame(V)}}return{open(I){l=I,c=l==="run"?n.player.shipId:n.save.selected,Gi("treeMode").textContent=l==="run"?`Pilot level ${n.run.level}. Evolve into a ship that branches from your ${He[c].name}.`:"Unlock ships with credits and crystal, then pick one to fly.",document.querySelectorAll("#tree .w-credits").forEach(M=>M.textContent=Math.floor(n.save.credits)),document.querySelectorAll("#tree .w-crystal").forEach(M=>M.textContent=n.save.crystal),P(),_(),requestAnimationFrame(()=>{o.k=Math.max(o.k,.85),E(c,u),u=!0}),!d.length&&Object.keys(h).length<en.length&&(d=en.map(M=>M.id).filter(M=>!h[M]),requestAnimationFrame(V)),e.focus({preventScroll:!0})},refresh(){P(),_(),document.querySelectorAll("#tree .w-credits").forEach(I=>I.textContent=Math.floor(n.save.credits)),document.querySelectorAll("#tree .w-crystal").forEach(I=>I.textContent=n.save.crystal)},get ctx(){return l}}}var it=n=>document.getElementById(n),WM=["menu","hangar","station","levelup","pause","settings","controls","achievements","gameover","victory","loading","tree"],GM={pulse:"Pulse laser",plasma:"Plasma cannon",missile:"Missiles"},fu={hull:"Hull plating",engines:"Engines",shield:"Shield",primary:"Primary weapon",secondary:"Secondary weapon",ability:"Reactor",mining:"Mining tools"},Qo=new Map,Sn=(n,e)=>{Qo.get(n)!==e&&(Qo.set(n,e),n.textContent=e)},oa=(n,e)=>{let t=(Math.max(0,Math.min(1,e))*100).toFixed(1)+"%";Qo.get(n)!==t&&(Qo.set(n,t),n.style.width=t)};function xs(n){return n?n.startsWith("Key")?n.slice(3):n.startsWith("Digit")?n.slice(5):{Space:"Space",Tab:"Tab",ShiftLeft:"L-Shift",ShiftRight:"R-Shift",ControlLeft:"L-Ctrl",AltLeft:"L-Alt",CapsLock:"Caps"}[n]||n:"\u2014"}var Jo=n=>n.recoil>100?"Siege plasma":n.kind==="pulse"&&n.count<=3&&!n.dirs?GM.pulse:ur(n),Ko=n=>n.map(([e,t])=>`<div><dt>${e}</dt><dd>${t}</dd></div>`).join(""),jo=n=>n.dmg*(n.count||1)*(n.rate>0?n.rate:1/Math.max(.1,n.cooldown));function Bp(n){let e={};["hud","hullFill","shieldFill","energyFill","hullTxt","shieldTxt","energyTxt","waveTxt","objTxt","bossBar","bossFill","bossPhase","bossName","creditsTxt","crystalTxt","oreTxt","scoreTxt","xpFill","lvlTxt","minimap","prompt","banner","toasts","indicators","crosshair","hitmark","vignette","tutorial","tutStep","tutText","titleCard","titleName","titleSub","slotPrimary","slotSecondary","slotDash","slotAbility","slotDrones","slotTree"].forEach(u=>e[u]=it(u));let t=e.minimap.getContext("2d"),i=Array.from({length:16},()=>{let u=document.createElement("i");return u.style.display="none",e.indicators.appendChild(u),u}),s={x:0,y:0},r=0,a=0;document.addEventListener("click",u=>{let m=u.target.closest("[data-act]");m&&(n.audio.play("ui"),n.action(m.dataset.act,m.dataset))}),it("tutSkip").addEventListener("click",()=>n.endTutorial()),document.addEventListener("keydown",u=>{u.key==="Enter"&&u.target.matches?.("[data-act]:not(button)")&&u.target.click()});function o(u,m,y,g){let p=n.save.upgrades[y];u.innerHTML=$h.map(x=>{let v=p[x],P=qh(x,v),_=v>=cr,L=g&&!_&&n.save.credits>=P;return`<div class="upg" data-k="${x}"><span class="nm">${fu[x]}</span><button data-act="buy" data-k="${x}" data-ship="${y}" ${L?"":"disabled"} aria-label="Buy ${fu[x]} level ${v+1}">${_?"Maxed":P+" cr"}</button>
        <div class="gauge" aria-label="Level ${v} of ${cr}">${Array.from({length:cr},(z,T)=>`<i class="${T<v?"on":""}"></i>`).join("")}</div><span class="ds">${Qf[x]}</span></div>`}).join("")+(g?"":'<p class="dim">Unlock this ship to upgrade it.</p>');let E=x=>l(m,y,x);u.querySelectorAll(".upg").forEach(x=>x.addEventListener("mouseenter",()=>E(x.dataset.k))),E(null)}function l(u,m,y){let g={...n.save.upgrades[m]},p=fn(m,g,{});y&&g[y]<cr&&g[y]++;let E=fn(m,g,{}),x=[["Hull",p.hull,E.hull,700],["Shield",p.shield,E.shield,350],["Speed",p.maxSpeed,E.maxSpeed,600],["Turn",p.turnRate,E.turnRate,20],["Primary DPS",jo(p.primary),jo(E.primary),260],["Secondary",jo(p.secondary),jo(E.secondary),160],["Energy",p.energy,E.energy,250]];u.innerHTML=`<h3>${y?`If you upgrade ${fu[y].toLowerCase()}`:"Ship stats"}</h3>`+x.map(([v,P,_,L])=>{let z=_>P+.01;return`<div class="stat"><span>${v}</span><div class="track"><div class="fill ${z?"up":""}" style="width:${(Math.min(1,P/L)*100).toFixed(1)}%" data-to="${(Math.min(1,_/L)*100).toFixed(1)}"></div></div>
        <span class="v">${P.toFixed(v==="Turn"?1:0)}${z?` \u2192 <em>${_.toFixed(v==="Turn"?1:0)}</em>`:""}</span></div>`}).join(""),requestAnimationFrame(()=>u.querySelectorAll(".fill.up").forEach(v=>v.style.width=v.dataset.to+"%"))}function c(){document.querySelectorAll(".w-credits").forEach(u=>u.textContent=Math.floor(n.save.credits)),document.querySelectorAll(".w-crystal").forEach(u=>u.textContent=n.save.crystal)}let h={show(u){for(let m of WM)it(m).classList.toggle("hidden",m!==u);e.hud.classList.toggle("hidden",!["play","levelup","pause","victory"].includes(n.state)||u==="gameover")},overlay(u,m){it(u).classList.toggle("hidden",!m)},hitmark(u){a=.15,e.hitmark.className=u?"crit":""},hurt(){e.vignette.style.boxShadow="inset 0 0 120px rgba(255,30,60,.6)",setTimeout(()=>e.vignette.style.boxShadow="",120)},denied(u){it(u).animate([{transform:"translateX(-4px)"},{transform:"translateX(4px)"},{transform:"none"}],200),n.audio.play("deny")},banner(u,m="",y=2.6){e.banner.innerHTML=`${u}${m?`<small>${m}</small>`:""}`,e.banner.classList.add("show"),r=y},toast(u,m){let y=document.createElement("div");y.className="toast",y.innerHTML=`<b>${u}</b>${m}`,e.toasts.appendChild(y),setTimeout(()=>y.remove(),4e3)},titleCard(u,m){e.titleName.textContent=u,e.titleSub.textContent=m,e.titleCard.classList.remove("hidden"),setTimeout(()=>e.titleCard.classList.add("hidden"),3e3)},menuStats(){let u=n.save;it("menuStats").innerHTML=Ko([["Best score",u.best.score],["Best wave",u.best.wave],["Credits",Math.floor(u.credits)],["Crystal",u.crystal],["Ships",`${u.unlocked.length} of ${Kr.length}`]])},renderHangar(){c();let u=n.save,m=n.hangarShip,y=Kr.filter(p=>u.unlocked.includes(p));it("shipList").innerHTML=`<p class="dim">${y.length} of ${en.length} ships unlocked. Unlock more in the evolution tree.</p>`+y.map(p=>{let E=He[p],x=u.unlocked.includes(p);return`<div class="shipCard ${p===m?"sel":""} ${x?"":"locked"}" data-act="viewShip" data-ship="${p}" tabindex="0" style="--c:${Xt[E.cls].css}"><span class="tier">Tier ${E.tier} ${Xt[E.cls].name}</span><h4>${E.name}</h4><p>${E.desc}</p>
          ${x?u.selected===p?'<span class="active">In the launch bay</span>':`<button data-act="selectShip" data-ship="${p}">Fly this ship</button>`:""}</div>`}).join("");let g=fn(m,u.upgrades[m],{});it("shipInfo").innerHTML=`<b class="stencil">${He[m].name.toUpperCase()}</b><dl class="readout">${Ko([["Primary",Jo(g.primary)],["Secondary",Jo(g.secondary)],...g.turrets?[["Turrets","2 automatic"]]:[],...u.components.length?[["Components",u.components.map(p=>Wi[p].name).join(", ")]]:[]])}</dl>`,it("upgShip").textContent=He[m].name,o(it("upgrades"),it("statCompare"),m,u.unlocked.includes(m))},renderStation(u){c();let m=n.player,y=Math.ceil(m.maxHp-m.hp),g=Math.ceil(y/2);u!==void 0&&(it("dockMsg").innerHTML=u);let p=it("repairBtn");p.textContent=y>0?`Repair ${y} hull for ${Math.min(g,Math.floor(n.save.credits))} cr`:"Hull fully repaired",p.disabled=y<=0||n.save.credits<1,p.onclick=()=>n.action("repair"),it("stationShip").innerHTML=`<b class="stencil">${He[m.shipId].name.toUpperCase()}</b><dl class="readout">${Ko([["Hull",`${Math.round(m.hp)} / ${Math.round(m.maxHp)}`],["Wave",n.director.wave]])}</dl>`,o(it("stUpgrades"),it("stCompare"),m.shipId,!0);let E=n.run.ore,x=m.stats.cargo;it("cargoInfo").textContent=`${E} of ${x} ore aboard, worth ${E*2} credits.`,it("sellBtn").textContent=E?`Sell ${E} ore for ${E*2} cr`:"Nothing to sell",it("sellBtn").disabled=!E,it("autoSell").checked=n.save.settings.autoSell,it("wingList").innerHTML=n.allies.map((P,_)=>`<div class="wing" style="--c:${Xt[He[P.shipId].cls].css}"><div><b>${P.name}</b><span class="dim">${He[P.shipId].name}, tier ${He[P.shipId].tier} ${Xt[He[P.shipId].cls].name.toLowerCase()}</span></div>
        <button data-act="sellWing" data-i="${_}">Release (+50 cr)</button></div>`).join("")||'<p class="dim">No wingmen yet.</p>';let v=n.allies.length>=3;it("hireBtn").textContent=v?"Wing is full (3 of 3)":`Hire a wingman for 100 cr (${n.allies.length} of 3)`,it("hireBtn").disabled=v||n.save.credits<100},showLevelUp(u){it("boostCards").innerHTML=u.map((m,y)=>`<div class="boost" data-act="boost" data-i="${y}"><kbd>${y+1}</kbd><h4>${m.name}</h4><p class="dim">${m.desc}</p></div>`).join("")},renderSettings(){let u=n.save.settings;it("setQuality").value=u.quality,it("setSens").value=u.sens,it("setVol").value=u.volume,it("setShake").value=u.shake,it("sensVal").textContent=u.sens.toFixed(1),it("volVal").textContent=Math.round(u.volume*100)+"%",it("shakeVal").textContent=Math.round(u.shake*100)+"%";let m={up:"Move up",down:"Move down",left:"Move left",right:"Move right",dash:"Dash",ability:"Ship ability",interact:"Dock / interact",pause:"Pause",tree:"Evolution tree",drones:"Drone command"};it("keyBinds").innerHTML=Object.keys(m).map(y=>`<div class="bind"><span>${m[y]}</span><button data-act="rebind" data-k="${y}" class="${n.rebinding===y?"listening":""}">${n.rebinding===y?"press key\u2026":xs(u.keys[y])}</button></div>`).join("")},renderControls(){let u=n.save.settings.keys,m=xs,y=[["Move",`${m(u.up)} ${m(u.left)} ${m(u.down)} ${m(u.right)}`],["Aim","Mouse"],["Primary weapon","Left mouse"],["Secondary weapon","Right mouse"],["Dash (i-frames)",m(u.dash)],["Ship ability",m(u.ability)],["Evolution tree",m(u.tree)],["Drone escort / attack",m(u.drones)],["Dock at station",m(u.interact)],["Pause",`${m(u.pause)} or Esc`],["Pick level-up boost","1, 2 or 3"],["Railgun","Hold fire to charge, release to shoot"]];it("controlsList").innerHTML=y.map(([g,p])=>`<div class="bind"><span>${g}</span><kbd>${p}</kbd></div>`).join("")},renderAchievements(){it("achList").innerHTML=Object.entries(ta).map(([u,m])=>`<div class="ach ${n.save.achievements[u]?"on":""}"><b>${m.name}</b>${m.desc}</div>`).join("")},showGameOver(u){it("goTitle").textContent=u.victory?"RUN COMPLETE":"SHIP LOST",it("goTitle").parentElement.classList.toggle("alert",!u.victory),it("goStats").innerHTML=Ko([["Wave reached",u.wave],["Score",u.score+(u.newBest?" (new best)":"")],["Kills",u.kills],["Ore mined",u.ore],["Credits earned",u.credits],["Pilot level",u.level],["Best score",n.save.best.score]])},setTutorial(u,m,y){e.tutorial.classList.toggle("hidden",!y),y&&(e.tutStep.textContent=`Training ${u} of ${m}`,e.tutText.innerHTML=y)},update(u){let m=n.player;if(!m)return;document.querySelectorAll("kbd[data-key]").forEach(I=>Sn(I,xs(n.save.settings.keys[I.dataset.key])));let y=n.run;oa(e.hullFill,m.hp/m.maxHp),Sn(e.hullTxt,`${Math.max(0,Math.ceil(m.hp))}`),oa(e.shieldFill,m.maxShield?m.shield/m.maxShield:0),Sn(e.shieldTxt,`${Math.ceil(m.shield)}`),oa(e.energyFill,m.energy/m.maxEnergy),Sn(e.energyTxt,`${Math.floor(m.energy)}`),e.vignette.classList.toggle("low",m.hp/m.maxHp<.3&&!m.dead),Sn(e.creditsTxt,String(Math.floor(n.save.credits))),Sn(e.crystalTxt,String(n.save.crystal)),Sn(e.oreTxt,`${y.ore}/${m.stats.cargo}`),Sn(e.scoreTxt,String(y.score)),oa(e.xpFill,y.xp/na(y.level)),Sn(e.lvlTxt,`LV ${y.level}`),Sn(e.waveTxt,n.waveLabel||""),Sn(e.objTxt,n.objective||"");let g=n.boss;if(e.bossBar.classList.toggle("hidden",!g),g){oa(e.bossFill,g.hp/g.maxHp);let I=g.gens.filter(M=>!M.dead).length;Sn(e.bossPhase,g.dying>0?"Destroyed":g.phase===1?`Phase 1: destroy the shield generators (${I} left). The hull is immune.`:g.phase===2?"Phase 2: broadsides. Hit the reactor at the stern.":"Phase 3: fighters and a sweeping beam.")}let p=m.stats,E=(I,M,A,w,F)=>{Sn(I.querySelector(".wname"),M),I.querySelector(".cd").style.height=(Math.max(0,A)*100).toFixed(0)+"%",I.classList.toggle("ready",w),I.classList.toggle("noenergy",!!F)},x=p.primary.rate>0?1/p.primary.rate:p.primary.cooldown,v=p.secondary.rate>0?1/p.secondary.rate:p.secondary.cooldown;E(e.slotPrimary,Jo(p.primary),m.cdP/x,m.cdP<=0),E(e.slotSecondary,Jo(p.secondary),m.cdS/v,m.cdS<=0),E(e.slotDash,"Dash",1-Math.min(1,m.energy/hr),m.energy>=hr,m.energy<hr);let P=p.ability;E(e.slotAbility,P.name,Math.max(m.cdAbility/P.cd,1-Math.min(1,m.energy/P.cost)),m.cdAbility<=0&&m.energy>=P.cost,m.energy<P.cost);let _=n.arsenal.droneCount();e.slotDrones.classList.toggle("hidden",!_),_&&E(e.slotDrones,`Drones ${n.arsenal.droneMode}`,0,n.arsenal.droneMode==="attack");let L=n.frame%20===0?Of(m.shipId).some(I=>!gs(n.save,m.shipId,I,n.run.level)):e.slotTree.classList.contains("ready");E(e.slotTree,L?"Evolve ready":"Evolve",0,L);let z=Math.max(p.primary.kind==="rail"?m.charge.primary/p.primary.charge:0,p.secondary.kind==="rail"?m.charge.secondary/p.secondary.charge:0);e.crosshair.classList.toggle("charging",z>0),z>0&&e.crosshair.style.setProperty("--ch",z.toFixed(3));let T=Math.hypot(m.x-lt.x,m.z-lt.z),b=Math.hypot(m.x,m.z)>3e3,O="",V=!1;if(b)O="Leaving the arena. Turn back.",V=!0;else if(T<lt.dockR&&n.state==="play"){let I=n.dockBlocked();O=I||`Press ${xs(n.save.settings.keys.interact)} to dock at Nova Station`,V=!!I}e.prompt.classList.toggle("hidden",!O),e.prompt.classList.toggle("warn",V),O&&Sn(e.prompt,O),r>0&&(r-=u,r<=0&&e.banner.classList.remove("show")),a-=u,e.hitmark.style.opacity=a>0?1:0,e.crosshair.style.transform=`translate(${De.sx}px, ${De.sy}px)`,e.crosshair.classList.toggle("firing",m.firing>0),e.crosshair.classList.toggle("target",n.enemies.some(I=>!I.dead&&!I.untargetable&&Math.hypot(I.x-De.wx,I.z-De.wz)<I.r+25)),n.frame%2===0&&(d(),f())}};function d(){let y=94/3e3,g=n.player;t.clearRect(0,0,200,200),t.strokeStyle="rgba(255,45,85,.6)",t.lineWidth=1.5,t.beginPath(),t.arc(100,100,3e3*y,0,Math.PI*2),t.stroke(),t.strokeStyle="rgba(56,246,255,.18)",t.strokeRect(100+(g.x-650)*y,100+(g.z-420)*y,1300*y,840*y),t.fillStyle="#38f6ff",t.fillRect(100+lt.x*y-4,100+lt.z*y-4,8,8);for(let p of n.asteroids)p.type==="crystal"?(t.fillStyle=`rgba(56,246,255,${.6+.4*Math.sin(n.time*6)})`,t.beginPath(),t.arc(100+p.x*y,100+p.z*y,3.5,0,7),t.fill()):(t.fillStyle=p.type==="explosive"?"rgba(255,90,40,.7)":"rgba(150,140,130,.55)",t.fillRect(100+p.x*y-1,100+p.z*y-1,Math.max(2,p.r*y*1.5),Math.max(2,p.r*y*1.5)));t.fillStyle="#6dff8a";for(let p of n.allies)t.beginPath(),t.arc(100+p.x*y,100+p.z*y,3,0,7),t.fill();for(let p of n.enemies)p.dead||p.proxy||p.isGen||(t.fillStyle=p.boss?"#ff9a3d":"#ff3d5a",t.beginPath(),t.arc(100+p.x*y,100+p.z*y,p.boss?7:2.5,0,7),t.fill());t.save(),t.translate(100+g.x*y,100+g.z*y),t.rotate(g.angle),t.fillStyle="#fff",t.beginPath(),t.moveTo(7,0),t.lineTo(-5,4),t.lineTo(-5,-4),t.closePath(),t.fill(),t.restore()}function f(){let u=n.R.camera,m=innerWidth,y=innerHeight,g=40,p=0,E=(_,L,z)=>{if(p>=i.length||(Po(u,_,0,L,s),s.x>g&&s.x<m-g&&s.y>g&&s.y<y-g))return;let T=m/2,b=y/2,O=s.x-T,V=s.y-b,I=Math.min((m/2-g)/Math.abs(O||1),(y/2-g)/Math.abs(V||1)),M=i[p++];M.style.display="block",M.className=z,M.style.left=T+O*I-7+"px",M.style.top=b+V*I-7+"px",M.style.transform=`rotate(${Math.atan2(V,O)+Math.PI/2}rad)`},x=n.player;for(let _ of n.enemies)!_.dead&&!_.proxy&&!_.isGen&&(_.boss||Math.hypot(_.x-x.x,_.z-x.z)<1800)&&E(_.x,_.z,_.boss?"boss":"");let v=null,P=1800;for(let _ of n.asteroids)if(_.type==="crystal"){let L=Math.hypot(_.x-x.x,_.z-x.z);L<P&&(P=L,v=_)}v&&E(v.x,v.z,"crystal");for(let _=p;_<i.length;_++)i[_].style.display="none"}return h}var el=[],pu=new gn(1,1).translate(.5,0,0).rotateX(-Math.PI/2),XM=new Ge,Hp=new Kt,Vp=new U,Wp=new U,$M=new U(0,1,0),tl=new ge,mu=new Ge().makeScale(0,0,0),dr=(n,e=1)=>new Ye({color:new ge(n).multiplyScalar(2),transparent:!0,opacity:e,blending:Tt,depthWrite:!1,side:Dt}),fr={gun:3733247,laser:16734960,ram:16754237,shield:4182727};function Gp(n){let e=n.scene,t=320,i=new xn(pu,new Ye({color:16777215,transparent:!0,blending:Tt,depthWrite:!1,side:Dt}),t);i.instanceMatrix.setUsage(Nn),i.frustumCulled=!1;let s=Array.from({length:t},()=>({l:0,ml:1,x:0,z:0,a:0,len:0,w:1}));for(let M=0;M<t;M++)i.setMatrixAt(M,mu),i.setColorAt(M,tl.set(16777215));e.add(i);let r=0;function a(M,A,w,F,H,k=3,Y=.12){let Z=r;r=(r+1)%t,Object.assign(s[Z],{l:Y,ml:Y,x:M,z:A,a:Math.atan2(F-A,w-M),len:Math.hypot(w-M,F-A),w:k}),i.setColorAt(Z,tl.set(H).multiplyScalar(2.5))}function o(M,A,w,F,H,k=3){let Z=w-M,N=F-A,ie=Math.hypot(Z,N)||1,W=-N/ie,K=Z/ie,ae=M,ne=A;for(let ue=1;ue<=6;ue++){let xe=ue/6,Ee=ue===6?0:(Math.random()-.5)*Math.min(40,ie*.18),Le=M+Z*xe+W*Ee,ee=A+N*xe+K*Ee;a(ae,ne,Le,ee,H,k),ae=Le,ne=ee}n.fx.spawn(w,6,F,0,0,0,.12,16,2,...tl.set(H).toArray().map(ue=>ue*1.6))}let l={};function c(M,A){if(!l[M]){let w=new Pe(pu,dr(A,.55)),F=new Pe(pu,dr(16777215,.95));w.frustumCulled=F.frustumCulled=!1,e.add(w,F),l[M]={outer:w,core:F,on:!1}}return l[M].outer.material.color.set(A).multiplyScalar(2),l[M]}function h(M,A,w,F,H,k){let Y=Math.cos(F),Z=Math.sin(F),N=[],ie=new Set;for(let W=0;W<=H;W+=140){n.grid.query(A+Y*W,w+Z*W,220+k,el);for(let K of el){if(ie.has(K)||!Fo(M,K)||K.ghost||K.dead)continue;ie.add(K);let ae=K.x-A,ne=K.z-w,ue=ae*Y+ne*Z,xe=Math.abs(-ae*Z+ne*Y);ue>0&&ue<H+K.r&&xe<K.r+k/2&&N.push({e:K,along:ue})}}return N.sort((W,K)=>W.along-K.along)}let d=[],f=[],u=[],m=[],y=new sn(6,0),g=Lt(3817287,{panel:3}),p=new Mn(.9,1,48).rotateX(-Math.PI/2),E=new Rt(6,10,8);function x(M,A,w,F,H,k={}){n.fx.explosion(M,A,w/90,H),n.audio.play(w>110?"explodeBig":"explode",M,A,.8),n.shake(w/25),ds(n,M,A,w,F,"player",{fromPlayer:!0,push:220,...k})}function v(M){let A=new Mt,w=fr[M];q(Ke(10,4,7,1),Lt(5923438,{panel:3}),0,0,0,A);for(let F of[-6,6])q(Ke(6,1,3,.3),Lt(2830392,{panel:3}),-2,0,F,A);if(q(new Rt(2.2,8,6),yt(w,3),4,1.5,0,A),M==="ram"&&q(new ii(2.6,8,6).rotateZ(-Math.PI/2),Lt(13073687,{panel:3}),8,0,0,A),M==="laser"&&q(_t(.8,.8,8,5),Lt(2830392),7,0,0,A),M==="shield"){let F=q(new jt(7,.8,4,12),yt(w,2),0,0,0,A);F.rotation.x=Math.PI/2}return e.add(A),A}let P={droneMode:"escort",bolt:o,update(M){for(let w=0;w<t;w++){let F=s[w];if(!(F.l<=0)){if(F.l-=M,F.l<=0){i.setMatrixAt(w,mu);continue}Hp.setFromAxisAngle($M,-F.a),Vp.set(F.x,7,F.z),Wp.set(F.len,1,F.w*(.4+.6*F.l/F.ml)),i.setMatrixAt(w,XM.compose(Vp,Hp,Wp))}}i.instanceMatrix.needsUpdate=!0,i.instanceColor.needsUpdate=!0;for(let w in l){let F=l[w];F.on||(F.outer.visible=F.core.visible=!1),F.on=!1}let A=n.player;L(M),z(M),T(M),A&&!A.dead&&O(M,A),I(M,A)},beam(M,A,w,F,H,k){let Y=h("player",H.x,H.z,k,w.range,w.width),Z=w.range,$bp=Y.some(K=>K.e.critZone),$bd=!1;for(let K of Y){let ae=K.e.team==="neutral";if(K.e.proxy&&!K.e.critZone&&($bp||$bd)){Z=K.along;continue}if(K.e.proxy&&($bd=!0),yn(n,K.e,w.dps*F,{x:H.x,z:H.z,fromPlayer:!0,silent:!0}),K.e._beamAcc=(K.e._beamAcc||0)+w.dps*F,K.e._beamAcc>w.dps*.25&&!ae&&(n.fx.floater(K.e.x,K.e.z,Math.round(K.e._beamAcc)),n.ui.hitmark(!1),K.e._beamAcc=0),!w.lance){if(Z=K.along,K.e.proxy||K.e.isGen)continue;break}}let N=c(A,w.color),ie=Math.cos(k),W=Math.sin(k);N.outer.visible=N.core.visible=N.on=!0,N.outer.position.set(H.x,6,H.z),N.core.position.set(H.x,6.5,H.z),N.outer.rotation.y=N.core.rotation.y=-k,N.outer.scale.set(Z,1,w.width*(1.6+Math.sin(n.time*60)*.25)),N.core.scale.set(Z,1,w.width*.35),n.frame%2===0&&n.fx.sparks(H.x+ie*Z,H.z+W*Z,k+Math.PI,w.color,2),n.frame%8===0&&n.audio.play("beamTick",M.x,M.z,.35),n.fx.flash(H.x,H.z,w.color,.25,.05)},rail(M,A,w,F,H){let k=A.dmg*(.25+.75*w);F.forEach(Y=>{n.weapons.spawn({kind:"bolt",team:"player",x:Y.x,z:Y.z,angle:H,speed:A.speed,dmg:k,life:A.life,color:A.color,r:5,len:150,pierce:A.pierce,crit:w>=.99,owner:M});let Z=A.speed*A.life,N=Math.cos(H),ie=Math.sin(H);a(Y.x,Y.z,Y.x+N*Z,Y.z+ie*Z,A.color,4+6*w,.25),n.fx.muzzle(Y.x,4,Y.z,H,A.color,2)}),n.fx.flash(M.x,M.z,A.color,2*w+.5,.15),n.audio.play("rail",M.x,M.z,.5+.5*w),n.shake(3+6*w),M.vx-=Math.cos(H)*A.recoil*w,M.vz-=Math.sin(H)*A.recoil*w},chain(M,A,w,F){let H=null,k=1/0;for(let W of n.enemies){if(W.dead||W.ghost||W.untargetable&&!W.proxy)continue;let K=Math.hypot(W.x-w.x,W.z-w.z);if(K>A.range+W.r)continue;let ae=Math.abs(Wt(xt(w.x,w.z,W.x,W.z)-F)),ne=K*(1+ae*1.5)*(W.critZone?.2:1);ae<1.2&&ne<k&&(k=ne,H=W)}if(!H){o(w.x,w.z,w.x+Math.cos(F)*A.range*.6,w.z+Math.sin(F)*A.range*.6,A.color,2),n.audio.play("zap",M.x,M.z,.4);return}let Y=new Set,Z={x:w.x,z:w.z},N=H,ie=A.dmg;for(let W=0;W<=A.chains&&N;W++){o(Z.x,Z.z,N.x,N.z,A.color,W===0?4:3),yn(n,N,ie,{x:Z.x,z:Z.z,fromPlayer:!0,crit:Math.random()<M.stats.crit}),Y.add(N.proxy||N),Y.add(N),Z=N,ie*=.85;let K=null,ae=A.chainRange;for(let ne of n.enemies){if(ne.dead||Y.has(ne)||ne.proxy&&Y.has(ne.proxy)||ne.untargetable&&!ne.proxy)continue;let ue=Math.hypot(ne.x-Z.x,ne.z-Z.z);ue<ae&&(ae=ue,K=ne)}N=K}n.audio.play("zap",M.x,M.z,.7)},dropMine(M,A){let w=d.filter(N=>!N.dead);if(w.length>=A.max){let N=w[0];N.dead=!0,x(N.x,N.z,40,0,8947848)}let F=new Mt;F.add(new Pe(y,g));let H=new Pe(new Rt(2.4,6,4),yt(A.color,4));H.position.y=5,F.add(H);let k=new Pe(p,dr(A.color,.25));k.scale.setScalar(A.trigger),F.add(k);let Y=M.x-Math.cos(M.angle)*(M.r+12),Z=M.z-Math.sin(M.angle)*(M.r+12);F.position.set(Y,0,Z),e.add(F),d.push({x:Y,z:Z,vx:-Math.cos(M.angle)*120+M.vx*.3,vz:-Math.sin(M.angle)*120+M.vz*.3,arm:.6,life:A.life,w:A,g:F,light:H,ring:k,dead:!1}),n.audio.play("ui",M.x,M.z,.6)},artillery(M,A,w,F){let H=Math.hypot(w-M.x,F-M.z),k=H>A.range?A.range/H:1,Y=M.x+(w-M.x)*k,Z=M.z+(F-M.z)*k;for(let N=0;N<A.count;N++){let ie=Math.random()*6.28,W=N===0?0:A.scatter*(.4+Math.random()*.6),K=Y+Math.cos(ie)*W,ae=Z+Math.sin(ie)*W,ne=Math.hypot(K-M.x,ae-M.z),ue=new Pe(E,yt(A.color,3)),xe=new Pe(p,dr(A.color,0));xe.position.set(K,2,ae),xe.scale.setScalar(A.blast),e.add(ue,xe),f.push({x0:M.x,z0:M.z,x1:K,z1:ae,t:-N*.12,dur:.45+ne/1500,h:120+ne*.3,w:A,orb:ue,mark:xe})}n.fx.muzzle(M.x,10,M.z,M.angle,A.color,2),n.audio.play("heavy",M.x,M.z,.6),n.shake(4)},orb(M,A,w,F){n.weapons.spawn({kind:"orb",team:"player",x:w.x,z:w.z,angle:F,speed:A.speed,dmg:A.dmg,life:A.life,color:A.color,r:10,size:1.6,splash:A.zapRange*.8,zap:A.zap,zapRange:A.zapRange,vortex:A.vortex,noCollide:!0,owner:M}),n.audio.play("plasma",M.x,M.z,.6),n.fx.flash(w.x,w.z,A.color,1.2,.12)},ability(M,A){let w=M.stats;if(A==="emp")fp(n,M);else if(A==="overdrive")M.overdriveT=5,n.fx.shockwave(M.x,M.z,120,16756797,.4),n.audio.play("levelup",M.x,M.z,.6);else if(A==="overload")M.overloadT=3,M.shield=M.maxShield,n.fx.shockwave(M.x,M.z,140,3721471,.5),n.audio.play("shieldHit");else if(A==="blink"){let F=Math.min(420,Math.hypot(n.input.wx-M.x,n.input.wz-M.z)),H=xt(M.x,M.z,n.input.wx,n.input.wz);n.fx.burst(M.x,M.z,{n:24,color:w.color,speed:200,life:.4,size:8}),M.x+=Math.cos(H)*F,M.z+=Math.sin(H)*F;let k=Math.hypot(M.x,M.z);k>3e3&&(M.x*=3e3/k,M.z*=3e3/k),M.invuln=.35,n.fx.burst(M.x,M.z,{n:24,color:w.color,speed:260,life:.4,size:8}),n.fx.shockwave(M.x,M.z,90,w.color,.3),n.audio.play("warp",M.x,M.z,.5)}else if(A==="barrage"){let F=n.enemies.filter(k=>!k.dead&&!k.untargetable&&Math.hypot(k.x-n.input.wx,k.z-n.input.wz)<900).sort((k,Y)=>Math.hypot(k.x-n.input.wx,k.z-n.input.wz)-Math.hypot(Y.x-n.input.wx,Y.z-n.input.wz)).slice(0,5),H={kind:"missile",dmg:28*(1+.25*(w.tier-1)),speed:700,life:3,turn:6,color:16738877,splash:50,count:1,spread:0};for(let k=0;k<12;k++)setTimeout(()=>{if(n.player!==M||M.dead)return;let Y=M.angle+Math.PI+(Math.random()-.5)*2.4;n.weapons.fire(M,H,Y,[{x:M.x,z:M.z}],"player",{target:F.length?F[k%F.length]:void 0,fx:k%3===0,sound:k%3?null:"missile",vol:.5})},k*55);F.forEach(k=>n.fx.shockwave(k.x,k.z,k.r*2,16738877,.5))}else if(A==="gravity"){let F=Math.min(700,Math.hypot(n.input.wx-M.x,n.input.wz-M.z)),H=xt(M.x,M.z,n.input.wx,n.input.wz),k=M.x+Math.cos(H)*F,Y=M.z+Math.sin(H)*F,Z=new Pe(p,dr(12610559,.6));Z.position.set(k,3,Y),e.add(Z),u.push({x:k,z:Y,t:1.4,r:440,dmg:90*(1+.25*(w.tier-1)),ring:Z}),n.audio.play("warp",k,Y,.7)}else if(A==="barrier")M.barrierT=4,n.audio.play("shieldHit");else if(A==="swarm"){M.swarmT=6;for(let F=0;F<2;F++)m.push(_("gun",m.length,6));n.fx.shockwave(M.x,M.z,160,12610559,.5),n.audio.play("levelup",M.x,M.z,.6)}},setDrones(M){m.forEach(A=>e.remove(A.g)),m=(M.stats.drones||[]).map((A,w)=>_(A,w))},toggleDrones(){return m.length?(P.droneMode=P.droneMode==="escort"?"attack":"escort",n.audio.play("ui"),!0):!1},droneCount:()=>m.filter(M=>!M.temp).length,clear(){d.forEach(M=>e.remove(M.g)),d.length=0,f.forEach(M=>e.remove(M.orb,M.mark)),f.length=0,u.forEach(M=>e.remove(M.ring)),u.length=0,m.forEach(M=>e.remove(M.g)),m=[];for(let M in l)l[M].outer.visible=l[M].core.visible=!1;s.forEach((M,A)=>{M.l=0,i.setMatrixAt(A,mu)}),V&&(V.visible=!1),P.droneMode="escort"}};function _(M,A,w=0){let F=n.player;return{type:M,i:A,x:F.x,z:F.z,vx:0,vz:0,angle:0,cd:Math.random(),orbit:A/6*Math.PI*2,g:v(M),temp:w,state:"orbit",target:null}}function L(M){for(let A=d.length-1;A>=0;A--){let w=d[A];if(w.dead){e.remove(w.g),d.splice(A,1);continue}if(w.vx*=1-3*M,w.vz*=1-3*M,w.x+=w.vx*M,w.z+=w.vz*M,w.arm-=M,w.life-=M,w.g.position.set(w.x,0,w.z),w.g.rotation.y+=M,w.light.visible=w.arm>0?!0:Math.sin(n.time*10)>0,w.ring.material.opacity=w.arm>0?.08:.22,w.life<=0){w.dead=!0,x(w.x,w.z,w.w.blast*.5,w.w.dmg*.4,w.w.color);continue}w.arm>0||(n.grid.query(w.x,w.z,w.w.trigger,el),el.some(F=>F.team==="enemy"&&!F.dead)&&(w.dead=!0,x(w.x,w.z,w.w.blast,w.w.dmg,w.w.color)))}}function z(M){for(let A=f.length-1;A>=0;A--){let w=f[A];if(w.t+=M,w.t<0){w.orb.visible=!1;continue}let F=Math.min(1,w.t/w.dur);w.orb.visible=!0,w.orb.position.set(w.x0+(w.x1-w.x0)*F,4*w.h*F*(1-F)+6,w.z0+(w.z1-w.z0)*F),w.mark.material.opacity=.15+F*.5,w.mark.scale.setScalar(w.w.blast*(1.2-F*.2)),n.frame%2===0&&n.fx.spawn(w.orb.position.x,w.orb.position.y,w.orb.position.z,0,0,0,.35,8,1,1.4,.8,.3),F>=1&&(x(w.x1,w.z1,w.w.blast,w.w.dmg,w.w.color),e.remove(w.orb,w.mark),f.splice(A,1))}}function T(M){for(let A=u.length-1;A>=0;A--){let w=u[A];w.t-=M,w.ring.scale.setScalar(w.r*(.3+.7*Math.max(0,w.t/1.4))),w.ring.rotation.y+=M*3;for(let F=0;F<4;F++){let H=Math.random()*6.28,k=w.r*Math.random();n.fx.spawn(w.x+Math.cos(H)*k,4,w.z+Math.sin(H)*k,-Math.cos(H)*k*2,0,-Math.sin(H)*k*2,.4,6,0,.8,.4,1.4)}for(let F of n.enemies){if(F.dead||F.custom)continue;let H=w.x-F.x,k=w.z-F.z,Y=Math.hypot(H,k);if(Y<w.r&&Y>1){let Z=(F.heavy?500:1400)*M*(1-Y/w.r+.3);F.vx+=H/Y*Z,F.vz+=k/Y*Z}}n.weapons.list.forEach(F=>{F.team==="enemy"&&Math.hypot(F.x-w.x,F.z-w.z)<w.r&&(F.vx+=(w.x-F.x)*M*4,F.vz+=(w.z-F.z)*M*4)}),w.t<=0&&(x(w.x,w.z,w.r*.6,w.dmg,12610559),n.fx.shockwave(w.x,w.z,w.r,12610559,.7),e.remove(w.ring),u.splice(A,1))}}function b(M){let A=null,w=1/0,F=P.droneMode==="attack",H=F?n.input.wx:M.x,k=F?n.input.wz:M.z,Y=F?1400:520;for(let Z of n.enemies){if(Z.dead||Z.untargetable)continue;let N=Math.hypot(Z.x-H,Z.z-k);N<w&&(F?Math.hypot(Z.x-M.x,Z.z-M.z)<Y:N<Y)&&(w=N,A=Z)}return A}function O(M,A){let w=A.swarmT>0,F=560*(w?1.5:1),H=w?2:1,k=A.stats.droneDmg*H,Y=b(A);for(let Z=m.length-1;Z>=0;Z--){let N=m[Z];if(N.temp&&(N.temp-=M,N.temp<=0)){n.fx.burst(N.x,N.z,{n:8,color:12610559,speed:120,life:.3,size:5}),e.remove(N.g),m.splice(Z,1);continue}N.cd-=M,N.orbit+=M*(N.type==="shield"?2.2:1.2);let ie=N.type==="shield"?A.r+26:A.r+46+N.i%3*12,W=A.x+Math.cos(N.orbit+N.i)*ie,K=A.z+Math.sin(N.orbit+N.i)*ie,ae=N.type==="shield"?null:Y;if(N.type==="ram"&&ae&&N.state==="orbit"&&N.cd<=0&&(N.state="dive",N.target=ae),N.state==="dive"){let Le=N.target;!Le||Le.dead?N.state="orbit":(W=Le.x,K=Le.z,Math.hypot(Le.x-N.x,Le.z-N.z)<Le.r+10&&(yn(n,Le,k*6,{x:N.x,z:N.z,fromPlayer:!0}),n.fx.explosion(N.x,N.z,.5,fr.ram),n.audio.play("explode",N.x,N.z,.4),N.state="orbit",N.cd=2.2))}else if(ae&&(N.type==="gun"||N.type==="laser")){let Le=N.orbit*.7+N.i*2;W=ae.x+Math.cos(Le)*(N.type==="laser"?140:220),K=ae.z+Math.sin(Le)*(N.type==="laser"?140:220);let ee=Math.hypot(ae.x-N.x,ae.z-N.z),de=xt(N.x,N.z,ae.x,ae.z);N.type==="gun"&&ee<480&&N.cd<=0&&(N.cd=.55,n.weapons.fire(N,{kind:"pulse",dmg:k,speed:1300,life:.5,count:1,spread:.04,color:fr.gun,len:20},de,[{x:N.x,z:N.z}],"player",{fx:n.frame%2===0,sound:"turret",vol:.25})),N.type==="laser"&&ee<300&&(yn(n,ae,k*5*M,{x:N.x,z:N.z,fromPlayer:!0,silent:!0}),a(N.x,N.z,ae.x,ae.z,fr.laser,2.4,.04))}if(N.type==="shield")for(let Le of n.weapons.list)Le.team==="enemy"&&Math.hypot(Le.x-N.x,Le.z-N.z)<34&&(n.fx.sparks(Le.x,Le.z,0,fr.shield,4),n.weapons.kill(Le));let ne=W-N.x,ue=K-N.z,xe=Math.hypot(ne,ue)||1,Ee=Math.min(xe*4,N.state==="dive"?F*1.7:F);N.vx+=(ne/xe*Ee-N.vx)*Math.min(1,M*6),N.vz+=(ue/xe*Ee-N.vz)*Math.min(1,M*6),N.x+=N.vx*M,N.z+=N.vz*M,Math.hypot(N.vx,N.vz)>20&&(N.angle=Math.atan2(N.vz,N.vx)),N.g.position.set(N.x,10+Math.sin(n.time*3+N.i)*2,N.z),N.g.rotation.y=-N.angle,n.frame%4===0&&n.fx.spawn(N.x-Math.cos(N.angle)*6,8,N.z-Math.sin(N.angle)*6,0,0,0,.25,4,.5,...tl.set(fr[N.type]).toArray())}}let V=null;function I(M,A){if(!A||!(A.barrierT>0)||A.dead){V&&(V.visible=!1);return}V||(V=new Pe(new bt(1,1,18,24,1,!0,-1.05,2.1),dr(4182727,.4)),e.add(V));let w=A.r+60;V.visible=!0,V.scale.set(w,1,w),V.position.set(A.x,6,A.z),V.rotation.y=-A.angle+Math.PI/2,V.material.opacity=.25+.15*Math.sin(n.time*20)+(A.barrierT<1?-.15:0);for(let F of n.weapons.list){if(F.team!=="enemy")continue;let H=Math.hypot(F.x-A.x,F.z-A.z);H<w+10&&H>w-40&&Math.abs(Wt(xt(A.x,A.z,F.x,F.z)-A.angle))<1.05&&(n.fx.sparks(F.x,F.z,A.angle,4182727,5),n.audio.play("armor",F.x,F.z,.4),n.weapons.kill(F))}}return P}var gu=100,il=50,$p=3,Xp=["Kestrel","Rook","Juno","Vex","Halcyon","Talon","Mako","Briar","Onyx","Sable","Wren","Corsair"],nl=[[-60,-70],[-60,70],[-120,0]];function qM(n){let e=n.primary,t=e.rate>0?Math.min(6,e.rate):1/Math.max(.4,e.cooldown||e.charge||1),i=Qr(e)*.55;return e.kind==="plasma"||e.kind==="orb"?{kind:"plasma",dmg:i/Math.min(2,t),rate:Math.min(2,t),speed:800,life:1.1,count:1,spread:.03,splash:40,size:1.1,color:7208842}:e.kind==="missile"||e.kind==="mine"||e.kind==="artillery"?{kind:"missile",dmg:i/.8/2,rate:.8,speed:560,life:2.6,turn:4,count:2,spread:.5,splash:40,color:7208842}:{kind:"pulse",dmg:i/Math.max(1.5,t),rate:Math.max(1.5,t),speed:1400,life:.6,count:1,spread:.04,color:7208842,len:26}}function qp(n){let e=n.player,t=Math.max(1,Math.min(4,e.stats.tier-1||1)),i=en.filter(m=>m.tier===t&&!m.secret),s=i[Math.floor(Math.random()*i.length)],r=fn(s.id),a=new Set(n.allies.map(m=>m.name)),o=Xp.find(m=>!a.has(m)&&Math.random()<.5)||Xp.find(m=>!a.has(m))||"Wing",l=ai(s.id),c=Vi(r.radius*1.8,7208842,.5);l.root.add(c);let h=su();n.scene.add(l.root,h.g);let d=nl[n.allies.length%nl.length],f=Bt(e.x,e.z,e.angle,d[0],d[1]),u={ally:!0,team:"player",name:o,shipId:s.id,model:l,shieldMesh:c,bar:h,st:r,weapon:qM(r),x:f.x,z:f.z,vx:e.vx,vz:e.vz,angle:e.angle,r:r.radius,roll:0,hp:r.hull,maxHp:r.hull,shield:r.shield,maxShield:r.shield,lastHit:-9,hitT:0,cd:.5,target:null,retarget:0,dead:!1,die(m){m.fx.explosion(this.x,this.z,this.r/18,7208842),m.fx.debris(this.x,this.z,14,10134446,220,4),m.audio.play("explode",this.x,this.z),m.ui.toast("Wingman lost",`${this.name} (${He[this.shipId].name}) was shot down.`)}};return n.allies.push(u),n.fx.shockwave(u.x,u.z,120,7208842,.5),u}function sl(n,e){n.scene.remove(e.model.root,e.bar.g),e.model.root.traverse(t=>{t.isMesh&&t.geometry.dispose()}),n.allies.splice(n.allies.indexOf(e),1)}function Yp(n){for(;n.allies.length;)sl(n,n.allies[0])}function Zp(n,e){let t=n.player;for(let i=n.allies.length-1;i>=0;i--){let s=n.allies[i];if(s.dead){sl(n,s);continue}let r=s.st,a=s.weapon;if(s.cd-=e,s.hitT-=e,s.retarget-=e,n.time-s.lastHit>3&&(s.shield=Math.min(s.maxShield,s.shield+r.shieldRegen*e)),s.retarget<=0||!s.target||s.target.dead){s.retarget=.4,s.target=null;let P=650;for(let _ of n.enemies){if(_.dead||_.untargetable||Math.hypot(_.x-t.x,_.z-t.z)>1e3)continue;let L=Math.hypot(_.x-s.x,_.z-s.z);L<P&&(P=L,s.target=_)}}let o=s.target,l,c,h;if(o&&!t.dead){let P=n.time*.6+i*2.1,_=260;l=o.x+Math.cos(P)*_,c=o.z+Math.sin(P)*_;let L=nr(s.x,s.z,o.x,o.z,o.vx||0,o.vz||0,a.speed);h=xt(s.x,s.z,L.x,L.z);let z=Math.hypot(o.x-s.x,o.z-s.z);if(s.cd<=0&&z<620&&Math.abs(Wt(h-s.angle))<.3){s.cd=1/a.rate;let T=Bt(s.x,s.z,s.angle,s.r*1.2,0);n.weapons.fire(s,a,s.angle,[T],"player",{target:o,sound:a.kind==="missile"?"missile":"turret",vol:.35,fx:!0})}}else{let P=nl[i%nl.length],_=Bt(t.x,t.z,t.angle,P[0],P[1]);l=_.x,c=_.z,h=Math.hypot(l-s.x,c-s.z)>40?xt(s.x,s.z,l,c):t.angle}let d=l-s.x,f=c-s.z,u=Math.hypot(d,f)||1,m=Math.min(r.maxSpeed*.95,u*3),y=d/u*m,g=f/u*m;for(let P of n.asteroids){let _=s.x-P.x,L=s.z-P.z,z=Math.hypot(_,L),T=P.r+s.r+50-z;T>0&&z>0&&(y+=_/z*T*6,g+=L/z*T*6)}s.vx+=(y-s.vx)*Math.min(1,e*(r.accel/Math.max(1,r.maxSpeed))),s.vz+=(g-s.vz)*Math.min(1,e*(r.accel/Math.max(1,r.maxSpeed))),s.x+=s.vx*e,s.z+=s.vz*e;let p=Math.hypot(s.x,s.z);p>3e3&&(s.x*=3e3/p,s.z*=3e3/p);let E=s.angle;s.angle=Wt(Fn(s.angle,h,r.turnRate*.8*e)),s.roll+=(Math.max(-.7,Math.min(.7,Wt(s.angle-E)/Math.max(e,1e-4)*.08))-s.roll)*Math.min(1,e*6);let x=s.model;x.root.position.set(s.x,0,s.z),x.root.rotation.y=-s.angle,x.body.rotation.x=s.roll;let v=.5+Math.min(1,Math.hypot(s.vx,s.vz)/r.maxSpeed);for(let P of x.flames)P.scale.x=P.userData.base*v*(.85+Math.random()*.3);if(x.spinners)for(let P of x.spinners)P.rotation.z+=e*P.userData.spin;s.shieldMesh.userData.update(e,s.shield),s.bar.g.visible=!0,s.bar.g.position.set(s.x,60,s.z-s.r-18),ru(s.bar,Math.max(30,s.r*2),Math.max(0,s.hp/s.maxHp),s.maxShield?s.shield/s.maxShield:0,7208842)}}var al=1/60,_u=document.getElementById("game"),Ct=null;try{Ct=window.localStorage}catch{Ct=null}var S=window.G={state:"loading",time:0,frame:0,timeScale:1,slowT:0,enemies:[],asteroids:[],pickups:[],allies:[],grid:new zo(160),stats:{},run:null,boss:null,player:null,director:null,save:ip(Ct),rebinding:null,hangarShip:"wasp",pendingLevels:0,tut:null};function ZM(){let n=S.R=bf(_u,S.save.settings.quality);S.scene=n.scene,n.shakeScale=S.save.settings.shake,S.world=Tf(n.scene,n.renderer,n.q),S.fx=If(n.scene,n),S.weapons=Nf(n.scene,S),S.arsenal=Gp(S),Ep(n.scene),S.audio=et,et.setVolume(S.save.settings.volume),S.ui=Bp(S),S.tree=kp(S),hp(S,_u),jM(),QM(),n.snap(0,0,1.4),sm(),requestAnimationFrame(um)}Object.assign(S,{shake(n){S.R.shake(n)},applyDamage(n,e,t){return yn(S,n,e,t)},addScore(n){S.run&&(S.run.score+=Math.round(n))},audioInit(){et.init()},spawnEnemy(n,e,t,i){return Yo(S,n,e,t,i)},spawnBoss(n){return Up(S,n)},onPlayerFire(n,e,t){Ip(S,n,e,t)},cinematic(n,e,t,i){S.R.cinematic={x:n,z:e,dur:t,zoom:i,t:0},S.timeScale=.35,S.slowT=1.8},dockBlocked(){if(S.boss)return"You can\u2019t dock during a boss fight.";let n=S.player;return S.enemies.some(e=>!e.dead&&Math.hypot(e.x-n.x,e.z-n.z)<1e3)?"Hostiles nearby. Clear the area to dock.":""},collect(n,e,t,i){let s=S.run,r=S.player;if(n==="ore"){if(s.ore>=r.stats.cargo)return S.frame-(S.cargoMsg||-999)>180&&(S.cargoMsg=S.frame,S.ui.toast("Cargo full","Dock at Nova Station to sell ore.")),!1;s.ore+=e,s.oreTotal+=e,S.save.stats.ore+=e,s.score+=5,et.play("pickup",t,i,.5),S.save.stats.ore>=100&&li("miner")}else n==="crystal"?(S.save.crystal+=e,s.crystal+=e,S.fx.floater(t,i,`+${e} CRYSTAL`,"loot"),S.fx.flash(t,i,3733247,1.2,.3),et.play("rare",t,i,.7),s.score+=50):n==="credit"?(S.save.credits+=e,s.credits+=e,S.fx.floater(t,i,`+${e}`,"loot"),et.play("credit",t,i,.6)):n==="repair"&&(r.hp=Math.min(r.maxHp,r.hp+e),S.fx.floater(t,i,`+${e} HULL`,"loot"),et.play("levelup",t,i,.4))},onEnemyKilled(n){let e=S.run;e&&(e.kills++,S.save.stats.kills++,e.score+=n.def.score,Jp(n.def.xp),li("firstblood"))},onBossKilled(){let n=S.run,e=S.save,t=S.director.wave,i=Math.round(4000*(t/5)),s=25;e.credits+=i,e.crystal+=s,n.credits+=i,n.crystal+=s,n.score+=5e3,e.stats.bosses++;let r=Object.keys(Wi).filter(a=>!e.components.includes(a));if(r.length){let a=r[Math.floor(Math.random()*r.length)];e.components.push(a),Xo(S,S.player),S.ui.toast("Rare component",`${Wi[a].name}: ${Wi[a].desc}.`)}else e.credits+=1e3,n.credits+=1e3;S.ui.banner("DREADNOUGHT DESTROYED",`+${i} credits and +${s} crystal`,4),Jp(150),li("boss"),Ft(Ct,e),et.ambient(!0,0)},onWaveStart(n,e){S.waveLabel=`WAVE ${n}`,S.save.best.wave=Math.max(S.save.best.wave,n),Ft(Ct,S.save),S.ui.banner(`WAVE ${n}`,e?"CAPITAL SHIP INBOUND":"Hostiles inbound"),n>=10&&li("wave10"),et.ambient(!0,e?1:Math.min(.6,n/15))},onWaveClear(n){let e=250*n;S.run.score+=e;let t=75*n;S.save.best.wave=Math.max(S.save.best.wave,n+1),Ft(Ct,S.save);S.save.credits+=t,S.run.credits+=t,S.waveLabel=`WAVE ${n} CLEARED`,S.ui.banner(`WAVE ${n} CLEARED`,`+${e} score and +${75*n} credits. Dock to upgrade, or press ${xs(S.save.settings.keys.tree)} to evolve.`),Ft(Ct,S.save),n===15&&!S.run.victory&&(S.run.victory=!0,li("victory"),wn("victory"),S.ui.show("victory"),ys())},onPlayerDeath(){let n=S.player;n.dead=!0,S.fx.explosion(n.x,n.z,3,16747069),S.fx.debris(n.x,n.z,25,14673648,300,5),et.play("explodeBig"),S.shake(30),n.model.root.visible=!1,S.timeScale=.35,S.slowT=1.2,S.dieT=2.2},pause(){S.state==="play"&&(wn("pause"),S.ui.show("pause"),ys())},endTutorial(){S.tut=null,S.save.tutorialDone=!0,Ft(Ct,S.save),S.ui.setTutorial(0,0,"")}});function li(n){rp(S.save,n)&&(S.ui.toast("Achievement unlocked",`${ta[n].name}. ${ta[n].desc}.`),et.play("rare"),Ft(Ct,S.save))}function Jp(n){let e=S.run;for(e.xp+=n;e.xp>=na(e.level);)e.xp-=na(e.level),e.level++,S.pendingLevels++}var em=n=>1+Math.max(0,n.r-20)*.012;function JM(n){let e=S.save,t=S.player;if(gs(e,t.shipId,n,S.run.level))return et.play("deny");if(!e.unlocked.includes(n)&&!Wo(e,n))return et.play("deny");He[n].tier===7&&li("apex");let i=Jh(S,n);Object.assign(i,{x:t.x,z:t.z,vx:t.vx,vz:t.vz,angle:t.angle,invuln:1}),i.hp=i.maxHp*Math.max(.35,t.hp/t.maxHp),i.shield=i.maxShield,i.energy=i.maxEnergy,i.onDamage=t.onDamage,S.scene.remove(t.model.root),S.player=i,S.arsenal.setDrones(i),S.R.zoomTarget=em(i);let s=Xt[He[n].cls].color;S.fx.shockwave(i.x,i.z,260,s,.8),S.fx.shockwave(i.x,i.z,140,16777215,.5),S.fx.burst(i.x,i.z,{n:80,color:s,speed:420,life:.9,size:9,drag:2}),S.fx.flash(i.x,i.z,s,4,.6,60),et.play("evolve"),S.shake(12),S.ui.banner("EVOLVED",`${He[n].name}: ${He[n].desc}`,3.2),li("evolve"),Ft(Ct,e)}function tm(n){S.treeReturn=S.state,wn("tree"),S.ui.show("tree"),ys(),S.tree.open(n),et.play("ui")}function Mu(){S.state==="tree"&&(S.preview.root&&(S.preview.root.visible=!1),S.treeReturn==="hangar"?rm():(wn("play"),S.ui.show(null),mr()))}function wn(n){S.state=n,De.pressed.clear(),document.body.classList.toggle("playing",n==="play")}function ys(){document.pointerLockElement&&(De.expectUnlock=!0,document.exitPointerLock()),De.lmb=De.rmb=!1}function mr(){try{let n=_u.requestPointerLock?.();n&&n.catch&&n.catch(()=>{})}catch{}}function nm(){cu(S),zp(S),Sp(S),Tp(S),S.weapons.clear(),S.arsenal.clear(),Yp(S),S.fx.clear(),S.player&&(S.scene.remove(S.player.model.root),S.player=null),S.boss=null,S.timeScale=1,S.slowT=0,S.dieT=0,S.pendingLevels=0}function im(){et.init(),nm(),S.preview.root&&(S.preview.root.visible=!1),S.run={score:0,xp:0,level:1,ore:0,oreTotal:0,crystal:0,credits:0,kills:0,boosts:[],victory:!1},S.stats={shots:0,sec:0,rocks:0,dashed:!1,emped:!1},S.player=Jh(S,S.save.selected),S.player.onDamage=(n,e)=>{S.ui.hurt(),S.shake(Math.min(10,2+e/4)),S.player.shield<=0&&et.play("hurt")},S.director=Ef(),S.save.stats.runs++,De.moved=!1,nu(S),S.arsenal.setDrones(S.player),S.R.snap(S.player.x,S.player.z,em(S.player)),S.waveLabel="SURVIVAL",S.objective="",wn("play"),S.ui.show(null),S.tut=S.save.tutorialDone?null:{i:0,t:0},S.tut||S.ui.banner("SURVIVAL","First wave in a few seconds"),et.ambient(!0,0),mr()}function bu(n){let e=S.run,t=S.save;if(!e)return;let i=e.score>t.best.score;t.best.score=Math.max(t.best.score,e.score),t.best.wave=Math.max(t.best.wave,S.director.wave),Ft(Ct,t),S.ui.showGameOver({victory:n,wave:S.director.wave,score:e.score,kills:e.kills,ore:e.oreTotal,credits:e.credits,level:e.level,newBest:i}),wn("gameover"),S.ui.show("gameover"),S.ui.setTutorial(0,0,""),ys(),et.ambient(!1)}function sm(){nm(),S.run=null,nu(S),wn("menu"),S.ui.menuStats(),S.ui.show("menu"),S.preview.root&&(S.preview.root.visible=!1),ys()}function rm(){wn("hangar"),S.hangarShip=S.save.selected,S.ui.renderHangar(),S.ui.show("hangar"),pr(S.hangarShip)}function am(){let n=S.run,e=ep(n.ore),t=n.ore;return S.save.credits+=e,n.credits+=e,n.ore=0,t?`Sold <b>${t}</b> ore for <b>${e}</b> credits.`:"No ore to sell. Mine asteroids for ore."}function KM(){let n=S.save.settings.autoSell?am():`Holding <b>${S.run.ore}</b> ore. Sell it below when you're ready.`;for(let e of S.allies)e.hp=e.maxHp,e.shield=e.maxShield;Ft(Ct,S.save),wn("dock"),S.ui.renderStation(n),S.ui.show("station"),pr(S.player.shipId),ys(),et.play("buy")}function om(){wn("play"),S.ui.show(null),S.preview.root&&(S.preview.root.visible=!1),mr()}function lm(){S.boostChoices=ap(Math.random,3),S.ui.showLevelUp(S.boostChoices),wn("levelup"),S.ui.overlay("levelup",!0),et.play("levelup"),S.fx.burst(S.player.x,S.player.z,{n:40,color:7208842,speed:300,life:.8,size:8,drag:2}),S.fx.shockwave(S.player.x,S.player.z,200,7208842,.6),ys()}function cm(n){let e=S.boostChoices?.[n];!e||S.state!=="levelup"||(S.run.boosts.push(e),Xo(S,S.player,e.heal||0),S.pendingLevels--,S.ui.toast("Boost installed",`${e.name}: ${e.desc}`),S.pendingLevels>0?lm():(S.ui.overlay("levelup",!1),wn("play"),mr()))}S.onKey=(n,e)=>{let t=S.save.settings.keys;if(S.rebinding){if(n!=="Escape"){for(let s in t)t[s]===n&&(t[s]=t[S.rebinding]);t[S.rebinding]=n}S.rebinding=null,Ft(Ct,S.save),S.ui.renderSettings(),e.preventDefault();return}let i=S.state;if(i==="tree"){(n===t.tree||n==="Escape")&&Mu();return}i==="play"?n===t.tree&&!S.player.dead?tm("run"):n===t.pause||n==="Escape"&&!De.locked?S.pause():n===t.interact&&Math.hypot(S.player.x-lt.x,S.player.z-lt.z)<lt.dockR&&(S.dockBlocked()?et.play("deny"):KM()):i==="pause"&&n===t.pause?S.action("resume"):i==="dock"&&(n===t.interact||n==="Escape")?om():i==="levelup"&&/^Digit[123]$/.test(n)?cm(+n.slice(5)-1):i==="gameover"&&n==="Enter"&&im()};var xu="menu",Kp="menu";S.action=(n,e={})=>{let t=S.save;switch(n){case"play":case"launch":case"restart":im();break;case"hangar":rm();break;case"back":case"menu":sm();break;case"settings":xu=S.state==="pause"?"pause":"menu",S.ui.renderSettings(),S.ui.show("settings");break;case"closeSettings":S.rebinding=null,S.ui.show(xu),xu==="menu"&&S.ui.menuStats();break;case"controls":Kp=S.state==="pause"?"pause":"menu",S.ui.renderControls(),S.ui.show("controls");break;case"closeControls":S.ui.show(Kp);break;case"achievements":S.ui.renderAchievements(),S.ui.overlay("achievements",!0);break;case"closeAch":S.ui.overlay("achievements",!1);break;case"viewShip":S.hangarShip=e.ship,S.ui.renderHangar(),pr(e.ship);break;case"selectShip":t.unlocked.includes(e.ship)&&(t.selected=e.ship,S.hangarShip=e.ship,Ft(Ct,t),S.ui.renderHangar(),pr(e.ship));break;case"unlockShip":Wo(t,e.ship)?(t.selected=e.ship,S.hangarShip=e.ship,et.play("rare"),e.ship==="warden"&&li("warden"),Ft(Ct,t),S.ui.renderHangar(),pr(e.ship),yu()):et.play("deny");break;case"buy":sp(t,e.ship,e.k)?(et.play("buy"),Ft(Ct,t),yu(),S.state==="dock"?(Xo(S,S.player),S.ui.renderStation()):S.ui.renderHangar()):et.play("deny");break;case"repair":{let i=S.player,s=i.maxHp-i.hp,r=Math.min(s,t.credits*2);r>0&&(i.hp+=r,t.credits-=Math.ceil(r/2),et.play("buy"),Ft(Ct,t),S.ui.renderStation());break}case"undock":om();break;case"sellOre":{let i=am();et.play(i.startsWith("Sold")?"buy":"deny"),Ft(Ct,t),S.ui.renderStation(i);break}case"toggleAutoSell":t.settings.autoSell=!t.settings.autoSell,Ft(Ct,t),S.ui.renderStation();break;case"hire":if(t.credits>=gu&&S.allies.length<$p){t.credits-=gu;let i=qp(S);et.play("buy"),Ft(Ct,t),S.ui.renderStation(`<b>${i.name}</b> joined in a ${He[i.shipId].name}.`)}else et.play("deny");break;case"sellWing":{let i=S.allies[+e.i];i&&(sl(S,i),t.credits+=il,S.run.credits+=il,et.play("credit"),Ft(Ct,t),S.ui.renderStation(`Released <b>${i.name}</b> for ${il} credits.`));break}case"openTree":tm(S.state==="play"?"run":"hangar");break;case"closeTree":Mu();break;case"treeAction":if(e.do==="evolve"){let i=!gs(t,S.player.shipId,e.id,S.run.level);JM(e.id),i?Mu():S.tree.refresh()}else e.do==="unlock"?(Wo(t,e.id)?(et.play("rare"),e.id==="warden"&&li("warden"),He[e.id].tier===7&&li("apex"),yu(),Ft(Ct,t)):et.play("deny"),S.tree.refresh()):e.do==="select"&&(t.selected=e.id,Ft(Ct,t),et.play("buy"),S.tree.refresh());break;case"resume":wn("play"),S.ui.show(null),mr();break;case"quit":bu(!1);break;case"continue":wn("play"),S.ui.show(null),mr();break;case"endRun":bu(!0);break;case"boost":cm(+e.i);break;case"rebind":S.rebinding=e.k,S.ui.renderSettings();break;case"resetKeys":t.settings.keys={...Yh},Ft(Ct,t),S.ui.renderSettings();break;case"resetTutorial":t.tutorialDone=!1,Ft(Ct,t),S.ui.toast("Tutorial","It plays at the start of your next run.");break;case"resetSave":if(confirm("Erase all progress (ships, upgrades, credits, achievements)?")){let i=t.settings;S.save=ea(),S.save.settings=i,Ft(Ct,S.save),S.ui.renderSettings(),S.ui.toast("Progress erased","Ships, upgrades and credits are reset.")}break}};function jM(){let n=()=>S.save.settings,e=i=>document.getElementById(i);e("setQuality").addEventListener("change",i=>{n().quality=i.target.value,S.R.setQuality(i.target.value),S.fx.setCap(S.R.q.particles),t()}),e("setSens").addEventListener("input",i=>{n().sens=+i.target.value,t()}),e("setVol").addEventListener("input",i=>{n().volume=+i.target.value,et.setVolume(n().volume),t()}),e("setShake").addEventListener("input",i=>{n().shake=+i.target.value,S.R.shakeScale=n().shake,t()});let t=()=>{Ft(Ct,S.save),S.ui.renderSettings()}}var En=new U(0,300,9e3);function QM(){S.preview={root:null,id:null,cam:new Jt(38,1,1,2e4),pulse:0};let n=new Pe(new Mn(70,72,96),new Ye({color:new ge(3733247).multiplyScalar(1.2),transparent:!0,opacity:.4,side:Dt}));n.rotation.x=-Math.PI/2,n.position.copy(En).add(new U(0,-14,0)),S.scene.add(n),S.preview.pad=n}function pr(n){let e=S.preview;if(!n){e.root&&(e.root.visible=!1);return}if(e.id!==n){e.root&&S.scene.remove(e.root);let t=ai(n);t.root.position.copy(En);let i=1.25*Math.pow(18/fn(n).radius,.85);t.root.scale.setScalar(i),e.model=t,e.root=t.root,e.id=n,S.scene.add(t.root)}e.root.visible=!0}S.showPreview=pr;function yu(){S.preview.pulse=1,S.fx.burst(En.x,En.z,{n:40,color:7208842,speed:160,life:.8,size:5,y:En.y,drag:2}),S.fx.flash(En.x,En.z,7208842,2,.4,En.y+40)}function e1(n){let e=S.preview,t=e.model;if(!e.root||!e.root.visible)return!1;e.pulse=Math.max(0,e.pulse-n*1.5),e.root.rotation.y+=n*(.5+e.pulse*6),t.body.rotation.x=Math.sin(S.time*.8)*.15,t.body.position.y=Math.sin(S.time*1.3)*3+e.pulse*10;for(let o of t.flames)o.scale.x=o.userData.base*(.9+Math.random()*.3);let i=e.cam,s=innerWidth,r=innerHeight;i.aspect=s/r;let a=S.state==="tree"&&document.getElementById("treePreview").getBoundingClientRect();return a&&a.width?(i.setViewOffset(s,r,s/2-(a.left+a.width/2),r/2-(a.top+a.height/2)-r*.02,s,r),i.zoom=Math.min(1.6,a.height/(r*.42))):(i.clearViewOffset(),i.zoom=1),i.updateProjectionMatrix(),i.position.set(En.x,En.y+150,En.z+260),i.lookAt(En.x,En.y-10,En.z),!0}var jp=[],vu={x:0,z:0};function hm(n){S.frame++,S.time+=n;let e=S.player;Sf(S.R.camera,De.sx,De.sy,vu),De.wx=vu.x,De.wz=vu.z,S.grid.clear(),e.dead||S.grid.insert(e);for(let t of S.enemies)!t.dead&&!t.ghost&&S.grid.insert(t);for(let t of S.allies)t.dead||S.grid.insert(t);for(let t of S.asteroids)t.dead||S.grid.insert(t);if(dp(S,e,n),Zp(S,n),S.tut?t1(n):e.dead||wf(S,S.director,n),Lp(S,n),Np(S,n),S.weapons.update(n),S.arsenal.update(n),eu(S,n),bp(S,n),wp(S,n),!e.dead){S.grid.query(e.x,e.z,e.r+10,jp);for(let t of jp){if(t.team!=="enemy")continue;if(t.proxy||t.isGen){Kh(e,t.x,t.z,t.r);continue}let i=e.x-t.x,s=e.z-t.z,r=Math.hypot(i,s)||1,a=e.r+t.r-r;a>0&&(e.x+=i/r*a*.6,e.z+=s/r*a*.6,t.x-=i/r*a*.4,t.z-=s/r*a*.4,yn(S,e,30*n,{x:t.x,z:t.z,silent:!0}),yn(S,t,60*n,{x:e.x,z:e.z,silent:!0,fromPlayer:!0}))}}et.setListener(e.x,e.z),S.director.state==="break"&&!S.tut?S.objective=S.director.wave===0?`First wave in ${Math.ceil(S.director.timer)}s`:`Next wave in ${Math.ceil(S.director.timer)}s. Dock at the station to upgrade.`:S.director.state==="fight"&&(S.objective=S.boss?"Destroy the Eclipse Dreadnought":`Hostiles remaining: ${S.enemies.filter(t=>!t.dead&&!t.custom).length+S.director.queue.reduce((t,i)=>t+i.n,0)}`),S.frame%1200===0&&Ft(Ct,S.save),De.pressed.clear()}S.input=De;S.debugStep=(n=60)=>{for(let e=0;e<n&&S.state==="play";e++)hm(al)};function t1(n){let e=S.tut,t=S.save.settings.keys,i=xs,s=[[`Move with <kbd>${i(t.up)}</kbd><kbd>${i(t.left)}</kbd><kbd>${i(t.down)}</kbd><kbd>${i(t.right)}</kbd> \u2014 your ship faces the mouse`,()=>De.moved&&e.t>1.5],["Aim with the mouse and hold <kbd>LEFT CLICK</kbd> to fire",()=>S.stats.shots>12],["Mine an asteroid \u2014 keep shooting until it cracks and shatters",()=>S.stats.rocks>=1],["Fly near the ore \u2014 it is pulled in magnetically",()=>S.run.oreTotal>=2],[`Press <kbd>${i(t.dash)}</kbd> to dash \u2014 you are invulnerable mid-dash`,()=>S.stats.dashed],["<kbd>RIGHT CLICK</kbd> fires your secondary weapon (missiles lock onto targets near the cursor)",()=>S.stats.sec>0],[`Press <kbd>${i(t.ability)}</kbd> to use your ship ability (${S.player.stats.ability.name.toLowerCase()})`,()=>S.stats.emped],[`Press <kbd>${i(t.tree)}</kbd> any time to open the evolution tree and plan your next ship`,()=>e.t>4],[`Training complete. Between waves, dock at the station with <kbd>${i(t.interact)}</kbd> to sell ore and upgrade. Enemies incoming!`,()=>e.t>5]];if(e.t+=n,s[e.i][1]()&&(e.i++,e.t=0,et.play("ui"),e.i>=s.length)){S.endTutorial(),S.ui.banner("GOOD LUCK, PILOT","First wave incoming");return}S.ui.setTutorial(e.i+1,s.length,s[e.i][0]),S.objective=""}var Qp=performance.now(),rl=0;function um(n){requestAnimationFrame(um);let e=Math.min(.1,(n-Qp)/1e3);Qp=n;let t=S.R;if(S.slowT>0&&(S.slowT-=e,S.slowT<=0&&!(S.boss&&S.boss.dying>0)&&(S.timeScale=1)),S.state==="play"){rl+=e;let i=0;for(;rl>=al&&i<4;)hm(al*S.timeScale),rl-=al,i++;i===4&&(rl=0);let s=S.player;S.dieT>0?(S.dieT-=e,S.dieT<=0&&bu(!1)):S.pendingLevels>0&&!s.dead&&lm(),t.update(e,s.x,s.z,De.wx,De.wz),S.fx.update(e*S.timeScale,t.camera),S.world.update(e,S.time,t.camera,s.x,s.z),S.ui.update(e),t.render()}else if(S.state==="menu"||S.state==="hangar"||S.state==="dock"||S.state==="tree"){S.time+=e;let i=S.state!=="menu"&&e1(e);if(S.state==="menu"){eu(S,e);let s=S.time*.05;t.update(e,Math.cos(s)*900,Math.sin(s)*900,Math.cos(s)*900,Math.sin(s)*900)}S.fx.update(e,i?S.preview.cam:t.camera),S.world.update(e,S.time,i?S.preview.cam:t.camera,0,0),t.render(i?S.scene:null,i?S.preview.cam:null)}else S.world.update(0,S.time,t.camera,S.player?.x||0,S.player?.z||0),S.player&&S.ui.update(0),t.render()}try{ZM()}catch(n){console.error(n),document.getElementById("loadErr").textContent="Failed to start: "+n.message+" \u2014 WebGL may be unavailable in this browser."}
/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */


;(function(){
const H=h=>{const d=document.createElement("div");d.innerHTML=h;return d.firstElementChild},tk=(c,d)=>dispatchEvent(new KeyboardEvent(d?"keydown":"keyup",{code:c,key:c,bubbles:!0})),tap=c=>{tk(c,1);setTimeout(()=>tk(c,0),70)};
const st=document.createElement("style");st.textContent=`
#dvb{position:fixed;top:calc(8px + env(safe-area-inset-top,0px));left:calc(8px + env(safe-area-inset-left,0px));z-index:9999;font:700 11px sans-serif;color:#fff;background:rgba(20,24,32,.7);border:1px solid #5b6b80;border-radius:6px;padding:5px 8px;opacity:.55}
#dev{position:fixed;top:calc(40px + env(safe-area-inset-top,0px));left:calc(8px + env(safe-area-inset-left,0px));z-index:9999;width:210px;max-height:calc(100% - 60px);overflow:auto;background:rgba(12,16,24,.94);border:1px solid #38f6ff;border-radius:8px;padding:8px;display:none;font:12px sans-serif;color:#cfe}
#dev b{display:block;color:#ffa63d;margin-bottom:6px}#dev button{display:block;width:100%;margin:3px 0;padding:8px;background:#1b2636;color:#fff;border:1px solid #3b4c66;border-radius:5px;font:600 12px sans-serif}#dev button.on{background:#0a6b3a}#dev p{margin:6px 0 0;color:#9fb;min-height:14px}
#tc{position:fixed;inset:0;z-index:50;pointer-events:none;display:none;touch-action:none;-webkit-user-select:none;user-select:none}
#tc .st{position:absolute;bottom:calc(24px + env(safe-area-inset-bottom,0px));width:130px;height:130px;border-radius:50%;background:rgba(255,255,255,.07);border:2px solid rgba(255,255,255,.28);pointer-events:auto;touch-action:none}
#tc .st i{position:absolute;left:35px;top:35px;width:60px;height:60px;border-radius:50%;background:rgba(56,246,255,.4);border:2px solid #38f6ff}
#tc .bt{position:absolute;width:56px;height:56px;border-radius:50%;background:rgba(20,26,36,.6);border:2px solid rgba(255,255,255,.4);color:#fff;font:700 11px sans-serif;display:flex;align-items:center;justify-content:center;pointer-events:auto;touch-action:none}
#tc .bt:active{background:rgba(56,246,255,.5)}`;document.head.appendChild(st);
let god=!1;const dv=H(`<div id="dev"><b>DEV / CHEAT MENU</b><button data-c="cred">+10,000 credits</button><button data-c="crys">+500 crystal</button><button data-c="ships">Unlock all ships</button><button data-c="req">Mark tier requirements done</button><button data-c="god">God mode: OFF</button><button data-c="heal">Full heal</button><button data-c="xp">+500 XP (in run)</button><button data-c="boss">Spawn boss (in run)</button><button data-c="kill">Kill all enemies (in run)</button><p id="dvm"></p></div>`),tg=H('<div id="dvb">DEV</div>');document.body.append(dv,tg);
const say=m=>{dv.querySelector("#dvm").textContent=m},run=()=>S.state==="play"&&S.player;
const A={cred(){S.save.credits+=1e4;return"+10,000 credits"},crys(){S.save.crystal+=500;return"+500 crystal"},ships(){S.save.unlocked=Kr.slice();return"All "+Kr.length+" ships unlocked"},req(){S.save.best.wave=Math.max(S.save.best.wave,10);S.save.stats.bosses=Math.max(S.save.stats.bosses,3);return"Best wave 10, 3 bosses defeated"},god(b){god=!god;b.textContent="God mode: "+(god?"ON":"OFF");b.classList.toggle("on",god);return"God mode "+(god?"on":"off")},heal(){let p=S.player;if(!run())return"Start a run first";p.hp=p.maxHp;if(p.maxShield)p.shield=p.maxShield;return"Healed"},xp(){if(!run())return"Start a run first";Jp(500);return"+500 XP"},boss(){if(!run())return"Start a run first";Up(S,1);return"Boss spawned"},kill(){if(!run())return"Start a run first";let n=0;for(const e of S.enemies)if(!e.custom&&!e.dead){yn(S,e,1e9,{silent:!0});n++}return"Destroyed "+n}};
dv.addEventListener("click",e=>{const b=e.target.closest("button");if(!b)return;try{const m=A[b.dataset.c](b);Ft(Ct,S.save);S.ui.menuStats&&S.ui.menuStats();say(m)}catch(x){say("Error: "+x.message)}});
const tgl=()=>{dv.style.display=dv.style.display==="block"?"none":"block"};tg.addEventListener("click",tgl);addEventListener("keydown",e=>{(e.code==="F2"||e.code==="Backquote")&&!e.repeat&&e.isTrusted&&tgl()});
setInterval(()=>{if(god&&run())S.player.invuln=9},100);
const touch="ontouchstart"in window||navigator.maxTouchPoints>0;if(!touch)return;
const tc=H(`<div id="tc"><div class="st" id="sm" style="left:calc(24px + env(safe-area-inset-left,0px))"><i></i></div><div class="st" id="sa" style="right:calc(24px + env(safe-area-inset-right,0px))"><i></i></div><div class="bt" data-k="Space" style="right:176px;bottom:150px">DASH</div><div class="bt" data-k="KeyQ" style="right:176px;bottom:84px">ABIL</div><div class="bt" data-r="1" style="right:176px;bottom:18px">2ND</div><div class="bt" data-k="KeyE" style="left:170px;bottom:150px">DOCK</div><div class="bt" data-k="KeyR" style="left:170px;bottom:84px">DRONE</div><div class="bt" data-k="KeyT" style="left:170px;bottom:18px">TREE</div><div class="bt" data-k="Tab" style="right:calc(10px + env(safe-area-inset-right,0px));top:calc(10px + env(safe-area-inset-top,0px))">| |</div></div>`);document.body.appendChild(tc);
function stick(el,on){let id=null,o,k=el.firstElementChild;const mv=t=>{let dx=(t.clientX-o.x)/o.R,dy=(t.clientY-o.y)/o.R,l=Math.hypot(dx,dy);if(l>1){dx/=l;dy/=l}k.style.transform=`translate(${dx*o.R*.5}px,${dy*o.R*.5}px)`;on(dx,dy,!0)},end=e=>{for(const t of e.changedTouches)if(t.identifier===id){id=null;k.style.transform="";on(0,0,!1)}};el.addEventListener("touchstart",e=>{e.preventDefault();const t=e.changedTouches[0],r=el.getBoundingClientRect();id=t.identifier;o={x:r.left+r.width/2,y:r.top+r.height/2,R:r.width/2};mv(t)},{passive:!1});el.addEventListener("touchmove",e=>{e.preventDefault();for(const t of e.changedTouches)if(t.identifier===id)mv(t)},{passive:!1});el.addEventListener("touchend",end);el.addEventListener("touchcancel",end)}
const ks={KeyW:0,KeyA:0,KeyS:0,KeyD:0},set=(c,v)=>{if(ks[c]!==v){ks[c]=v;tk(c,v)}};
stick(tc.querySelector("#sm"),(x,y,a)=>{set("KeyW",a&&y<-.3?1:0);set("KeyS",a&&y>.3?1:0);set("KeyA",a&&x<-.3?1:0);set("KeyD",a&&x>.3?1:0)});
stick(tc.querySelector("#sa"),(x,y,a)=>{if(a&&Math.hypot(x,y)>.12){De.sx=innerWidth/2+x*320;De.sy=innerHeight/2+y*320;De.moved=!0;De.lmb=!0}else De.lmb=!1});
for(const b of tc.querySelectorAll(".bt")){b.addEventListener("touchstart",e=>{e.preventDefault();b.dataset.r?De.rmb=!0:tap(b.dataset.k)},{passive:!1});b.addEventListener("touchend",e=>{e.preventDefault();b.dataset.r&&(De.rmb=!1)},{passive:!1})}
setInterval(()=>{tc.style.display=S.state==="play"?"block":"none"},250);
})();
</script>
</body>
</html>
