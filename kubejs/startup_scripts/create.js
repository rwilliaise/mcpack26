/**
 * This file is for registry-level modifications to the Create progression tree,
 * such as adding a new item or block.
 */

/* item registry */
StartupEvents.registry('item', event => {
    /**
     * Andesite machine item. Similar in usage to the Andesite machine item from
     * the Create: Above and Beyond modpack.
     */
    event.create('andesite_machine')
        .modelJson({
            parent: 'minecraft:block/cube_all',
            textures: {
                all: 'kubejs:block/andesite_machine'
            }
        })
})
