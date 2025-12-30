/**
 * This file is for recipe modifications to the Create progression tree.
 */

const ANDESITE_MACHINE = 'kubejs:andesite_machine'

ServerEvents.recipes(event => {

  /* andesite machine recipe */
  event.shaped(
    Item.of(ANDESITE_MACHINE, 2),
    [
      'CS',
      'AC'
    ],
    {
      C: 'create:cogwheel',
      S: 'create:shaft',
      A: 'create:andesite_casing',
    }
  )

  /* andesite machine recipes */
  event.remove({ output: 'create:mechanical_harvester' })
  event.stonecutting('3x create:mechanical_harvester', ANDESITE_MACHINE)

  event.remove({ output: 'create:mechanical_plough' })
  event.stonecutting('3x create:mechanical_plough', ANDESITE_MACHINE)

  event.remove({ output: 'create:portable_storage_interface' })
  event.stonecutting('2x create:portable_storage_interface', ANDESITE_MACHINE)

  event.remove({ output: 'create:encased_chain_drive' })
  event.stonecutting('2x create:encased_chain_drive', ANDESITE_MACHINE)

  event.remove({ output: 'create:millstone' })
  event.shapeless(
    Item.of('create:millstone'),
    [
      ANDESITE_MACHINE,
      'create:cogwheel'
    ]
  )

  event.remove({ output: 'create:mechanical_press' })
  event.shapeless(
    Item.of('create:mechanical_press'),
    [
      ANDESITE_MACHINE,
      'minecraft:iron_block'
    ],
  )

  event.remove({ output: 'create:mechanical_mixer' })
  event.shapeless(
    Item.of('create:mechanical_mixer'),
    [
      ANDESITE_MACHINE,
      'create:whisk'
    ]
  )

  event.remove({ output: 'create:mechanical_saw' })
  event.shapeless(
    Item.of('create:mechanical_saw'),
    [
      ANDESITE_MACHINE,
      'create:iron_sheet'
    ]
  )

  event.remove({ output: 'create:mechanical_drill' })
  event.shapeless(
    Item.of('create:mechanical_drill'),
    [
      ANDESITE_MACHINE,
      'create:andesite_alloy',
      'minecraft:iron_ingot'
    ]
  )

  event.remove({ output: 'create:encased_fan' })
  event.shapeless(
    Item.of('create:encased_fan'),
    [
      ANDESITE_MACHINE,
      'create:propeller'
    ]
  )

  event.remove({ output: 'create:mechanical_roller' })
  event.shapeless(
    Item.of('create:mechanical_roller', 2),
    [
      ANDESITE_MACHINE,
      'create:crushing_wheel'
    ]
  )
  
  /* micro-crafting simplifications */
  event.remove({ output: 'create:propeller' })
  event.shapeless(
    Item.of('create:propeller'),
    [
      'create:andesite_alloy',
      'create:iron_sheet',
      'create:iron_sheet'
    ]
  )

  event.remove({ output: 'create:belt_connector' })
  event.shapeless(
    Item.of('create:belt_connector', 2),
    [
      'minecraft:dried_kelp',
      'minecraft:dried_kelp',
      'minecraft:dried_kelp',
      'minecraft:dried_kelp',
    ]
  )

  event.remove({ output: 'create:item_vault' })
  event.shapeless(
    Item.of('create:item_vault', 2),
    [
      'minecraft:barrel',
      'create:iron_sheet'
    ]
  )
})
