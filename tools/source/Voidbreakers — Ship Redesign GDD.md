# Voidbreakers — Ship Redesign GDD

Oct 23, 2026 · @som som

## Overview

All 37 player ships get a consistent redesign: every ship reads as its class at a glance, looks bigger and more elaborate each tier, and shows its weapons on the hull. The redesign keeps every ship's name, tier, parents, weapons, stats and hitbox; only how each ship looks changes.

The work runs in three phases. Ships come first because enemies and bosses will reuse their visual language and asset pipeline.

1. **Ships (this document):** 37 player ships across 6 classes and 7 tiers.
2. **Enemies:** the 5 wave enemies (drone, interceptor, hunter, frigate, rogue), redesigned in a hostile style that never looks like a player ship.
3. **Bosses:** the Eclipse Dreadnought and later bosses, with multi-part hulls, weak points and phases.

Voidbreakers is a free, non-commercial hobby game, so free and CC-licensed assets with credit are fine to use.

## Current state

Today the fleet mixes three art styles, so the tree does not feel like one family. Tiers 1–4 use 11 Quaternius models recoloured per class, tiers 5–6 use reference-art plates, and tier 7 mixes a detailed model with a recoloured one.

| Tiers | Ships | Current source | Main problem |
| --- | --- | --- | --- |
| 1–4 | 22 | Quaternius “Ultimate Spaceships” (11 models × 5 colours) | Same model reused across branches; flat palette textures look plastic |
| 5–6 | 13 | Reference concept art raised into 3D plates | Source art is about 100 px per ship, so detail is soft and sides are missing |
| 7 | Void Sovereign | “Alien Spaceship” by Jungle Jim | Detailed PBR model; the quality target for the fleet |
| 7 | Starbreaker | Quaternius Zenith (orange) | Not an apex-looking ship |

Technical facts that constrain the redesign:

- The game renders in three.js with bloom and ACES tone mapping, viewed by a top-down camera at roughly 60°.
- Ships face +X, are scaled by tier (about 76 units at tier 1 to 152 at tier 7), and fire from muzzle points set per model.
- Hitboxes are separate from the visuals, so a new silhouette does not change gameplay.
- The single HTML file is 9.5 MB; phones load it slowly, so each new ship needs a size budget.
- Attempts that did not work: procedural box ships (blocky), raised 2D art (sculpted-plate look) and outlines traced from the 100 px art (flat slabs).

## Design pillars and visual language

Every ship must be identifiable by class from its silhouette alone, at gameplay zoom, in under a second. Colour confirms the class; shape carries it.

**Pillars**

1. **Silhouette first:** each class has its own outline family, readable as a black shape.
2. **One family:** same materials, panel scale and engine style across all 37 ships.
3. **Visible power:** each tier adds mass, layers and visible weapons, never just a bigger copy.
4. **Weapons on the hull:** what a ship fires is visible on it (barrels, pods, bays, emitters).
5. **Readable in combat:** emissive accents mark the nose and engines; the hull stays darker than effects and enemies.

**Class visual language**

| Class | Colour (accent) | Silhouette family | Signature parts |
| --- | --- | --- | --- |
| Assault | Cyan #38F6FF | Narrow arrow, swept wings | Twin nose guns, compact engines |
| Sniper | Blue #5B9BFF | Long needle, thin outriggers | One very long spinal barrel |
| Energy | Teal-cyan #38E8C8 | Crescent or ring around a core | Glowing core, emitter prongs |
| Drone | Purple #B36BFF | Organic carrier, claw-like arms | Central eye-core, launch bays |
| Heavy | Amber #FFA63D | Broad block, stacked armour | Turrets, thick side plating |
| Missile | Red-orange #FF6B3A | Wide wedge with side pods | Missile racks, launch tubes |

**Materials (shared by all ships)**

- Hull: dark gunmetal, metalness about 0.8, roughness 0.5–0.7, with panel normal maps.
- Armour plates: lighter grey, slightly rougher, one step above the hull.
- Accents: class colour on trims and panel inlays only, about 15% of the visible area.
- Emissives: engines, cores and weapon tips only, in the class colour.

**Tier scaling**

| Tier | Length (game units) | Visible weapons | Extra parts per tier |
| --- | --- | --- | --- |
| 1 | 76 | 2 | Base hull, 2 engines |
| 2 | 87 | 2–3 | Class signature part |
| 3 | 98 | 3–4 | Second armour layer |
| 4 | 109 | 4 | Wing or side modules |
| 5 | 120 | 4–6 | Extra engine pair, larger core |
| 6 | 131 | 6+ | Capital-ship layering |
| 7 | 142–152 | 8+ | Unique apex silhouette |

## Evolution tree

The tree has one root, six class branches and ten hybrids that join two or three parents, so a redesign must keep each branch's family look while hybrids mix their parents.

&#91;embedded content: Evolution tree · 37 ships, 6 classes, 7 tiers\]

Tier 5 and 6 hold 13 ships, the largest group, and the two tier 7 apex ships each need three parents.

## Ship redesign briefs

Each brief says what the ship must look like and which visible parts match its weapons. Parents are unchanged. The Weapons column shows today's loadout; the new loadouts in Weapon progression replace it, and each ship's visible parts should follow the new loadout.

**Assault (cyan) — fast arrows**

| Ship | Tier | Evolves from | Weapons | Redesign brief |
| --- | --- | --- | --- | --- |
| Wasp | 1 | — | Pulse laser, missile pod, EMP | Small dart, two short swept wings, twin nose guns, one belly pod |
| Viper | 2 | Wasp | Plasma cannon, missiles, overdrive | Longer needle nose, forward-swept blades, red-hot engine pair |
| Hornet | 3 | Viper | Scattergun, missiles | Short wide nose with a cluster of 6 barrels, stubby wings |
| Razor | 3 | Viper | Fore-and-aft cannons, mines | Double-ended arrow, guns at both tips, mine chute at the tail |
| Blitz | 4 | Hornet, Razor | Burst lasers, scattergun | Three-pronged nose, burst cannons on each prong |
| Phantom | 4 | Razor, Longbow | Ricochet bolts, charged rail | Stealth wedge, faceted panels, under-slung rail |
| Reaper | 5 | Blitz | Ricochet scattergun | Scythe-shaped wings curving forward, red trims |
| Valkyrie | 6 | Reaper, Mothership | Twin rapid lasers, escort drones | Elegant swept flagship, wing-root drone docks |

**Sniper (blue) — long needles**

| Ship | Tier | Evolves from | Weapons | Redesign brief |
| --- | --- | --- | --- | --- |
| Lancer | 2 | Wasp | Charge railgun, blink | Thin hull built around one long spinal rail |
| Longbow | 3 | Lancer | Faster rail, ricochet gun | Longer rail with capacitor rings, slim outriggers |
| Deadeye | 4 | Longbow | Piercing rail, homing missile | Rail extends past the nose by a third; scope dome on top |
| Railbreaker | 5 | Deadeye | Twin rails, tracking beam | Two parallel rails, beam emitter between them |
| Spectre | 6 | Railbreaker, Wraith | Lance beam, rail | Ghostly green-blue lance ship, open lattice frame |

**Energy (teal) — cores and crescents**

| Ship | Tier | Evolves from | Weapons | Redesign brief |
| --- | --- | --- | --- | --- |
| Spark | 2 | Wasp | Chain lightning, orb | Small hull wrapped around a bright spherical core |
| Arc | 3 | Spark | Plasma beam, lightning | Crescent hull, beam emitter at the crescent's centre |
| Tesla | 4 | Arc | Five-target lightning, orbs | Twin coil towers, visible arcing between them |
| Wraith | 5 | Phantom, Tesla | Ricochet bolts, lightning, blink | Split hull with a floating core between halves |
| Nova | 5 | Tesla | Rapid energy orbs | Ring hull, core in the ring opening |
| Singularity | 6 | Nova | Vortex orbs, heavy beam | Dark disc with an inward-spiralling glow |
| Void Sovereign | 7 | Singularity, Spectre, Overseer | Lance, eight-target storm, guardian fleet | Keep the Alien Spaceship model; add a cyan core glow |

**Drone (purple) — organic carriers**

| Ship | Tier | Evolves from | Weapons | Redesign brief |
| --- | --- | --- | --- | --- |
| Hive | 2 | Wasp | Bolts, missiles, 2 drones | Compact pod, central eye-core, 2 visible drone cradles |
| Brood | 3 | Hive | 4 drones | Larger pod, 4 claw-arms that hold drones |
| Carrier | 4 | Brood | Plasma shells, 6 drones | Flat deck, 6 launch bays along the sides |
| Mothership | 5 | Carrier | Burning beam, 8 drones | Layered dome, 8 bays, multiple engine clusters |
| Overseer | 6 | Mothership | Lightning, 10 drones | Command crown around a large core, orbiting nodes |

**Heavy (amber) — armoured blocks**

| Ship | Tier | Evolves from | Weapons | Redesign brief |
| --- | --- | --- | --- | --- |
| Bulwark | 2 | Wasp | Explosive shells, mines | Thick box hull, side armour skirts, one top turret |
| Juggernaut | 3 | Bulwark | Piercing slugs, flak | Wider plating, long ram prow, twin cannons |
| Warden | 3 | Bulwark | Missiles, siege plasma, turrets | Escort cruiser, 2 auto-turrets, shield bars on the sides |
| Bastion | 4 | Juggernaut, Warden | Flak, three-way guns, turrets | Fortress hull, three gun mounts fanned forward |
| Colossus | 5 | Bastion | Four-way cannons, siege gun, 4 turrets | Battleship, 4 turrets, central siege barrel |
| Titan | 6 | Colossus | Massive flak, five-way guns | Capital ship, stepped armour, five gun mounts |
| Starbreaker | 7 | Titan, Armageddon, Valkyrie | Six-way guns, artillery, interceptors | Apex dreadnought, combines heavy turrets, missile pods and hangar bays |

**Missile (red-orange) — pod wedges**

| Ship | Tier | Evolves from | Weapons | Redesign brief |
| --- | --- | --- | --- | --- |
| Salvo | 3 | Bulwark | 4-missile volleys, mines | Wedge with 2 side missile pods |
| Mortar | 4 | Salvo, Warden | Artillery, missiles | One big upward-facing launcher on the spine |
| Minelayer | 4 | Salvo | Heavy mines, gravity pull | Rear mine drum, open tail chute, gravity ring |
| Hellfire | 5 | Mortar, Minelayer | 8-missile salvos, cluster artillery | Wide hull, 4 missile pods, glowing launch tubes |
| Armageddon | 6 | Hellfire | Triple artillery, 10-missile swarms | Huge wedge, 3 launchers, 6 pods |

## Weapon progression

Every tier adds one new mechanic, so no upgrade feels like the same gun with bigger numbers. Each class keeps its own family of effects from tier 1 to its apex.

**Progression rules**

| Tier | What the new weapon adds | Example |
| --- | --- | --- |
| 1–2 | One clear core mechanic | Bolts, charge shot, chain, drones, shells |
| 3 | A second effect on hit | Pierce, split, ricochet, damage over time |
| 4 | A status effect | Stun, mark, slow, knockback |
| 5 | A combo between primary and secondary | Ricochets that chain, kills that refill energy |
| 6 | A field-changing effect | Pull, reflect, area denial, escorts |
| 7 | A signature apex weapon | Screen-wide or multi-stage attacks |

Status effects used: **stun** (enemy stops 0.3–0.6 s), **mark** (takes +25% damage for 4 s), **burn** (damage over 3 s), **slow** (−40% speed for 2 s), **pull** (dragged toward a point).

**Assault — fire rate and mobility**

| Ship | Tier | Primary | Secondary | Ability | New at this tier |
| --- | --- | --- | --- | --- | --- |
| Wasp | 1 | Pulse Blaster (twin bolts) | Micro-missile pod (2 homing) | EMP Pulse | Base kit |
| Viper | 2 | Plasma Lance (charged bolt, +50% vs shields) | Triple micro-missiles | Overdrive | Shield-breaking shot |
| Hornet | 3 | Flechette Scatter (7 pellets, knockback) | Cluster Rockets (split into 4) | Overdrive | Splitting rockets |
| Razor | 3 | Twin-Fang (front and rear guns) | Blade Mines (spinning, hit twice) | Blink | Rear coverage |
| Blitz | 4 | Burst Repeater (4-round burst, last round crits) | Shock Shotgun (stun 0.3 s) | Overdrive | Stun |
| Phantom | 4 | Phase Bolts (pass the first target, then seek) | Cloak Rail (2× damage from stealth) | Phase Blink (brief stealth) | Stealth bonus |
| Reaper | 5 | Scythe Scatter (pellets bounce twice) | Harvest (kills drop energy orbs) | Death Spiral (orbiting blades, 4 s) | Kills refill energy |
| Valkyrie | 6 | Gatling Lasers (spin up to 20 shots/s) | Interceptor Wing (3 escort fighters) | Valkyrie Dive (dash leaves a fire trail) | Escorts and fire trail |

**Sniper — precision and pierce**

| Ship | Tier | Primary | Secondary | Ability | New at this tier |
| --- | --- | --- | --- | --- | --- |
| Lancer | 2 | Rail Lance (hold to charge, pierces) | Pistol Bolts | Blink | Charge and pierce |
| Longbow | 3 | Coil Rifle (3 charge levels) | Ricochet Pistol | Blink | Charge levels |
| Deadeye | 4 | Marksman Rail (3× on weak points) | Seeker Dart (marks the target) | Focus (slow time 2 s) | Mark and weak points |
| Railbreaker | 5 | Twin Rails (2× where they cross) | Tracking Beam (locks on marked targets) | Overcharge Barrier | Rails and beam combo |
| Spectre | 6 | Horizon Lance (beam pierces to the screen edge) | Ghost Rail (fired from a decoy clone) | Phase Shift | Decoy clone |

**Energy — chains and fields**

| Ship | Tier | Primary | Secondary | Ability | New at this tier |
| --- | --- | --- | --- | --- | --- |
| Spark | 2 | Arc Zapper (chains to 3) | Plasma Orb (slow, zaps nearby) | Barrier | Chaining |
| Arc | 3 | Heat Beam (damage rises as it heats; overheats) | Static Field (damage aura) | Barrier | Heat management |
| Tesla | 4 | Tesla Coil (chains to 5, stuns the last target) | Ball Lightning (chaining orb) | EMP | Stun |
| Wraith | 5 | Void Bolts (chain on every bounce) | Shade Lightning (6 targets) | Blink (leaves a shock trap) | Bounce plus chain |
| Nova | 5 | Nova Burst (orbs explode in rings) | Solar Flare (screen pulse every 8 s) | Gravity Well | Area pulses |
| Singularity | 6 | Vortex Orbs (pull enemies inward) | Event Horizon Beam | Black Hole (3 s) | Pull |
| Void Sovereign | 7 | Sovereign Lance (splits into 3 at the end) | Storm Crown (8-target lightning) | Guardian Fleet | Apex: split beam and fleet |

**Drone — a growing fleet**

| Ship | Tier | Primary | Secondary | Ability | New at this tier |
| --- | --- | --- | --- | --- | --- |
| Hive | 2 | 2 gun drones + Needle Bolts | Micro-missiles | Swarm (drones fire twice as fast) | Drones |
| Brood | 3 | 4 drones (2 gunners, 2 kamikaze) | Acid Spitter (burn) | Swarm | Kamikaze drones and burn |
| Carrier | 4 | 6 drones (adds laser and shield drones) | Plasma Mortar shells | Launch Wave (all drones dive) | Shield drone |
| Mothership | 5 | 8 drones (adds a repair drone) | Burning Beam | Hive Mind (drones follow the cursor) | Repair and command |
| Overseer | 6 | 10 drones (adds warden drones that block shots) | Core Lightning | Command Override (an enemy fights for you, 10 s) | Converts enemies |

**Heavy — armour and splash**

| Ship | Tier | Primary | Secondary | Ability | New at this tier |
| --- | --- | --- | --- | --- | --- |
| Bulwark | 2 | Shell Cannon (explosive) | Proximity Mines | Overload | Splash |
| Juggernaut | 3 | Slug Driver (pierce, knockback) | Flak Burst | Ram (dash deals damage) | Pierce and ram |
| Warden | 3 | 2 Auto-Turrets | Siege Plasma | Shield Wall (front barrier) | Turrets |
| Bastion | 4 | Flak Cannon (shrapnel, slow) | Tri-Guns (three-way pierce) | Fortress Mode (stop: +50% fire rate, −50% damage taken) | Slow and stance |
| Colossus | 5 | Quad Cannons + 4 turrets | Siege Gun (huge slow shell) | Overload | Turret battery |
| Titan | 6 | Mega Flak | Five-way Railguns | Reflector Dome (reflects bullets) | Reflect |
| Starbreaker | 7 | Starbreaker Cannon (charged beam that cracks armour) | Artillery and interceptors | Overdrive | Apex: armour-cracking beam |

**Missile — volume and area denial**

| Ship | Tier | Primary | Secondary | Ability | New at this tier |
| --- | --- | --- | --- | --- | --- |
| Salvo | 3 | Quad Missiles | Mine Rack | Barrage | Volleys |
| Mortar | 4 | Lob Artillery (lands on the cursor) | Missile volley | Barrage | Indirect fire |
| Minelayer | 4 | Heavy Mines (up to 10) | Gravity Mine (pulls enemies in) | Gravity | Pull onto mines |
| Hellfire | 5 | Swarm Missiles (8, curving) | Cluster Artillery | Napalm (burning ground) | Burn zones |
| Armageddon | 6 | Triple Artillery | 10-missile swarm | Doomsday Strike (orbital barrage) | Screen-wide strike |

## Asset pipeline and budget

Every ship ships as one GLB model with PBR textures, built or adjusted in Blender, then baked into the game. Real 3D models are the only route that met the quality bar in testing.

1. **Source:** a free or CC-licensed model, a Blender kitbash from free parts, or an image-to-3D result (Hunyuan3D, TRELLIS) from a clean, isolated ship picture.
2. **Blender clean-up:** orient the nose along +X, apply a Decimate modifier to the triangle budget, join into one object, and keep at most 3 materials.
3. **Textures:** base colour, normal and metal-roughness maps; class accent colour painted on trims.
4. **Export:** glTF Binary (.glb), named after the ship ID, for example `reaper.glb`.
5. **In game:** the GLB is baked into the HTML with shrunken textures, scaled by tier, and given muzzle and engine points.
6. **Credits:** every external asset goes into the in-game Credits screen the day it is added.

| Budget per ship | Tiers 1–3 | Tiers 4–5 | Tiers 6–7 |
| --- | --- | --- | --- |
| Triangles | 3,000 | 6,000 | 12,000 |
| Texture size (px) | 256 | 512 | 512 |
| Materials | 2 | 3 | 3 |
| Size in the game file | 0.15 MB | 0.3 MB | 0.6 MB |

At these budgets the full fleet adds about 11 MB. With the current base game that lands close to the 16 MB limit for a published page, so ship models may need to move into a separate file that loads after the menu.

## Production plan

The redesign runs branch by branch, one finished branch at a time, so the tree is never half old and half new inside a branch.

1. **Style sample:** redesign Wasp, Viper and Bulwark; approve materials, scale and colours in a real run.
2. **Assault branch:** Hornet, Razor, Blitz, Phantom, Reaper, Valkyrie.
3. **Heavy and Missile branches:** Juggernaut, Warden, Salvo, Bastion, Mortar, Minelayer, Colossus, Hellfire, Titan, Armageddon.
4. **Sniper and Energy branches:** Lancer, Longbow, Deadeye, Railbreaker, Spectre, Spark, Arc, Tesla, Wraith, Nova, Singularity.
5. **Drone branch:** Hive, Brood, Carrier, Mothership, Overseer.
6. **Apex ships:** Starbreaker, plus polish on Void Sovereign.
7. **Loading split:** move ship models into a separate file if the game passes 14 MB.

**A ship counts as done when:**

- [ ] It reads as its class from the silhouette alone at gameplay zoom.
- [ ] Its visible weapons match its real weapons.
- [ ] It is clearly larger and more elaborate than its parent.
- [ ] Shots leave from the barrels and the engine glow sits on the nozzles.
- [ ] Its tree thumbnail matches the in-game model.
- [ ] It stays within its triangle and texture budget.
- [ ] Its source is listed in Credits.

## Open questions

- [ ] Keep the six class colours as listed, or match the reference tree exactly (cyan for Assault, Sniper and Energy together)?
- [ ] Should hybrid ships (Phantom, Wraith, Valkyrie, Spectre) mix both parents' colours and parts?
- [ ] Do the Quaternius models stay as a fallback for ships not yet redesigned?
- [ ] Which ships get the Sith Fury, HY-21 and The Ship models once they are decimated and exported?
- [ ] Is a separate model file acceptable if the game grows past 14 MB?
