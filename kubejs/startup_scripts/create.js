/**
 * This file is for registry-level modifications to the Create progression tree,
 * such as adding a new item or block.
 */

Platform.mods.kubejs.name = 'GRC'

/* block registry */
StartupEvents.registry('block', event => {
  /**
   * Andesite machine block.
   */
  event.create('andesite_machine')
    .tagBlock('minecraft:mineable/pickaxe')
    .tagBlock('minecraft:mineable/axe')
    .textureAll('kubejs:block/andesite_machine')

  /**
   * Brass machine block.
   */
  event.create('brass_machine')
    .tagBlock('minecraft:mineable/pickaxe')
    .tagBlock('minecraft:mineable/axe')
    .textureAll('kubejs:block/brass_machine')
})
