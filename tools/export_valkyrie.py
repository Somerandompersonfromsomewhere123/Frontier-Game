# Re-exports valkyrie.blend for the game: D:/Blender/blender.exe -b tools/source/valkyrie.blend --python tools/export_valkyrie.py
# glTF can't carry the procedural panel-line nodes, so they export as white; cut them and export each material's flat colour instead
import bpy, os
for m in bpy.data.materials:
    if not m.node_tree: continue
    for n in m.node_tree.nodes:
        if n.type == "BSDF_PRINCIPLED":
            for k in ("Base Color", "Roughness", "Normal"):
                for l in list(n.inputs[k].links): m.node_tree.links.remove(l)
# the default startup cube is still in the .blend; the hand-exported .glb leaves it out too
if "Cube" in bpy.data.objects: bpy.data.objects.remove(bpy.data.objects["Cube"])
bpy.ops.export_scene.gltf(filepath=os.path.join(os.path.dirname(os.path.abspath(__file__)), "models", "valkyrie_prime", "valkyrie_prime.glb"), export_format="GLB", use_selection=False, export_apply=True)
