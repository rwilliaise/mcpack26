/**
 * This file is for registry-level modifications to the Create progression tree,
 * such as adding a new item or block.
 */

/** Creates a machine block (simple crafting component) */
function create_machine(event, id) {
  event.create(id)
    .hardness(2)
    .resistance(600)
    .woodSoundType()
    .tagBlock('minecraft:mineable/pickaxe')
    .tagBlock('minecraft:mineable/axe')
}

/* Block registry */
StartupEvents.registry('block', event => {
  /* Machine blocks */
  create_machine(event, 'andesite_machine')
  create_machine(event, 'brass_machine')
})
