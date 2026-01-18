ServerEvents.recipes(event => {
  event.remove({ output: 'crossroads:gem_ruby' });
  event.custom({
    type: 'crossroads:stamp_mill',
    ingredient: [
      { item: 'kubejs:fluorescent_redstone' }
    ],
    output: {
      "item": "crossroads:gem_ruby",
      "count": 1
    }
  });

  event.shapeless('kubejs:compressed_redstone_block', Item.of('minecraft:redstone_block', 9));
  event.shapeless(Item.of('minecraft:redstone_block', 9), 'kubejs:compressed_redstone_block');

  event.shaped(Item.of('kubejs:fluorescent_redstone', 4), [
    'GGG',
    'GRG',
    'GGG'
  ], {
    G: 'kubejs:compressed_redstone_block',
    R: 'createaddition:diamond_grit'
  });

  event.custom({
    type: 'crossroads:mill',
    input: {
      item: 'minecraft:diamond'
    },
    output: [
      {
        item: 'createaddition:diamond_grit',
        count: 2
      }
    ]
  });

  event.remove({ id: 'crossroads:mill/ore_tin' })
  event.remove({ id: 'crossroads:smelting/tin_ore' })
  event.custom({
    type: 'crossroads:mill',
    input: {
      tag: 'forge:stone'
    },
    output: [
      {
        item: 'crossroads:nugget_tin',
        count: 1
      },
      {
        item: 'create:zinc_nugget',
        count: 1
      },
      {
        item: 'minecraft:gravel',
        count: 1
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

  event.custom({
    type: 'crossroads:crucible',
    input: {
      item: 'palegardenbackport:resin_clump'
    },
    output: {
      fluid: 'kubejs:molten_resin',
      amount: 90
    }
  });
  event.custom({
    type: 'crossroads:crucible',
    input: {
      item: 'palegardenbackport:resin_brick'
    },
    output: {
      fluid: 'kubejs:molten_resin',
      amount: 90
    }
  });
  event.custom({
    type: 'crossroads:crucible',
    input: {
      item: 'palegardenbackport:resin_bricks'
    },
    output: {
      fluid: 'kubejs:molten_resin',
      amount: 360
    }
  });
  event.custom({
    type: 'crossroads:crucible',
    input: {
      item: 'palegardenbackport:block_of_resin'
    },
    output: {
      fluid: 'kubejs:molten_resin',
      amount: 810
    }
  });
  event.custom({
    type: 'crossroads:copshowium',
    input: {
      fluid: 'kubejs:molten_resin'
    },
    mult: 2,
    entropy: false
  });

  //event.remove({ output: 'crossroads:void_crystal' });
  event.shapeless('kubejs:compressed_end_stone', Item.of('minecraft:end_stone', 9));
  event.shapeless(Item.of('minecraft:end_stone', 9), 'kubejs:compressed_end_stone');
  event.custom({
    type: 'crossroads:beam_transmute',
    alignment: 'fusion',
    void: false,
    power: 16,
    input: [
      {
        block: 'kubejs:compressed_end_stone'
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
        block: 'crossroads:ore_void'
      }
    ],
    output: 'kubejs:compressed_end_stone'
  });
});