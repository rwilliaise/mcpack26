ServerEvents.recipes(event => {
  event.shaped(
    'kubejs:graphite_pile',
    [
      'CCC',
      'CCC',
      'CCC'
    ],
    {
      C: 'minecraft:coal_block'
    }
  )

  // Graphite Pile to Dense Graphite Block
  event.smelting('kubejs:dense_graphite_block', 'kubejs:graphite_pile')
    .xp(1.0)
    .cookingTime(400) // 20 seconds
    
  // Dense Graphite Block to Seeded Graphite Block
  event.custom({
    type: 'crossroads:beam_transmute',
    alignment: 'enchantment',
    void: 'false',
    power: 64,
    input: [
      { block: 'kubejs:dense_graphite_block' }
    ],
    output: 'kubejs:seeded_graphite_block'
  })

  event.custom({
    type: 'crossroads:beam_transmute',
    alignment: 'fusion',
    void: 'false',
    power: 64,
    input: [
      { block: 'kubejs:seeded_graphite_block' }
    ],
    output: 'minecraft:diamond_block'
  })
})
