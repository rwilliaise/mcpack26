ServerEvents.recipes(event => {
  event.remove({ output: 'crossroads:gem_ruby' });
  event.custom({
    type: 'crossroads:stamp_mill',
    ingredient: [
      { item: 'minecraft:redstone_block' }
    ],
    output: {
      "item": "crossroads:gem_ruby",
      "count": 1
    }
  });
 
  event.remove({ id: 'crossroads:mill/ore_tin' })
  event.custom({
    type: 'crossroads:mill',
    input: {
      tag: 'forge:stones'
    },
    output: [
      {
        item: 'crossroads:raw_tin',
        count: 1
      },
      {
        item: 'minecraft:gravel',
      }
    ]
  });
  event.custom({
    type: 'crossroads:beam_transmute',
    alignmenSt: 'fusion',
    void: false,
    power: 8,
    input: [
      {
        tag: 'forge:storage_blocks/iron'
      }
    ],
    output: 'crossroads:block_tin'
  });
  event.custom({
    type: 'crossroads:beam_transmute',
    alignmenSt: 'fusion',
    void: true,
    power: 1,
    input: [
      {
        tag: 'forge:storage_blocks/tin'
      }
    ],
    output: 'minecraft:iron_block'
  });

  event.remove({ output: 'crossroads:void_crystal' });
  event.shapeless('kubejs:compressed_end_stone', Item.of('minecraft:end_stone', 9));
  event.custom({
    type: 'crossroads:beam_transmute',
    alignment: 'fusion',
    void: false,
    power: 16,
    input: [
      {
        item: 'kubejs:compressed_end_stone'
      }
    ],
    output: 'crossroads:ore_void'
  });
  event.custom({
    type: 'crossroads:beam_transmute',
    alignment: 'fusion',
    void: true,
    power: 1,
    input: [
      {
        item: 'crossroads:ore_void'
      }
    ],
    output: 'kubejs:compressed_end_stone'
  });
});