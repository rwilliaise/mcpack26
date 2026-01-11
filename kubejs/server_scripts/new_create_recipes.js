ServerEvents.recipes(event => {
  // Nuke Create
  const createTypes = [
    'create:basin_fermenting',
    'createdieselgenerators:basin_fermenting',
    'createdieselgenerators:bulk_fermenting',
    'create:mixing',
    'create:milling',
    'create:crushing',
    'create:splashing',
    'create:compacting',
    'create:pressing',
    'create:cutting',
    'create:deploying',
    'create:item_application',
    'create:sequenced_assembly',
    'create:sandpaper_polishing',
    'createdieselgenerators:distillation',
    'create:mechanical_crafting',
    'createdieselgenerators:compression_molding',
    'createdieselgenerators:casting',
    'createaddition:rolling',
  ];

  createTypes.forEach(type => {
    event.remove({ type: type });
  });

  // Helpers!!

  // Stamp Mill
  // Input: Item/Tag -> Output: Item
  function stampMill(outputItem, outputCount, inputIngredient) {
    event.custom({
      type: 'crossroads:stamp_mill',
      ingredient: inputIngredient,
      output: {
        item: outputItem,
        count: outputCount
      }
    });
  }

  // Millstone
  // Input: Item/Tag -> Output: Item
  function mill(outputItem, outputCount, inputIngredient) {
    let inputObj = typeof inputIngredient === 'string'
      ? (inputIngredient.startsWith('#') ? { tag: inputIngredient.substring(1) } : { item: inputIngredient })
      : inputIngredient;

    event.custom({
      type: 'crossroads:mill',
      input: inputObj,
      output: {
        item: outputItem,
        count: outputCount
      }
    });
  }

  function oreCleanser(outputItem, outputCount, inputIngredient) {
    let inputObj = typeof inputIngredient === 'string'
      ? (inputIngredient.startsWith('#') ? { tag: inputIngredient.substring(1) } : { item: inputIngredient })
      : inputIngredient;

    event.custom({
      type: 'crossroads:ore_cleanser',
      ingredient: inputObj,
      output: {
        item: outputItem,
        count: outputCount
      }
    });
  }

  function crucible(inputItem, fluidName, fluidAmount) {
    let inputObj = typeof inputItem === 'string'
      ? (inputItem.startsWith('#') ? { tag: inputItem.substring(1) } : { item: inputItem })
      : inputItem;

    event.custom({
      type: 'crossroads:crucible',
      input: inputObj,
      output: {
        fluid: fluidName,
        amount: fluidAmount
      }
    });
  }

  function fluidCooling(fluidName, fluidAmount, resultItem, maxTemp) {
    event.custom({
      type: 'crossroads:fluid_cooling',
      fluid: fluidName,
      fluid_amount: fluidAmount,
      item: resultItem,
      max_temp: maxTemp || 1500,
      temp_change: 100
    });
  }


  function centrifuge(inputFluid, inputAmount, outputFluid, outputAmount, outputItems) {
    event.custom({
      type: 'crossroads:centrifuge',
      input: {
        fluid: inputFluid,
        amount: inputAmount
      },
      output_fluid: {
        fluid: outputFluid,
        amount: outputAmount
      },
      output: outputItems
    });
  }

  // Beam Transmutation
  function beamTransmute(alignment, power, inputBlockOrTag, outputBlock, isVoid) {
    let inputObj = inputBlockOrTag.startsWith('#') ? { tag: inputBlockOrTag.substring(1) } : { block: inputBlockOrTag };
    event.custom({
      type: 'crossroads:beam_transmute',
      alignment: alignment,
      void: isVoid,// ? "true" : "false",
      power: power,
      input: [inputObj],
      output: outputBlock
    });
  }

  // Ore processing
  event.remove({ id: "crossroads:mill/stone" });
  stampMill('create:crushed_raw_zinc', 2, { tag: 'forge:ores/zinc' });
  beamTransmute('fusion', 8, 'forge:storage_blocks/zinc', 'crossroads:block_tin', false);
  beamTransmute('fusion', 8, '#forge:ores/iron', 'create:zinc_ore', false);

  // Obsidian Processing
  stampMill('create:powdered_obsidian', 1, { tag: 'forge:obsidian' });

  // Oil and Fluid

  // No more oil rig!!
  crucible('#forge:coal', 'createdieselgenerators:crude_oil', 100);

  // Crude Oil Processing via Crossroads Centrifuge
  // Create Distillation: 100 Crude -> 50 Diesel + 50 Gasoline
  // CR Centrifuge: 90 Crude -> 45 Diesel (Fluid) + 1 Petroleum Jelly (Item)
  centrifuge(
    'createdieselgenerators:crude_oil', 100,
    'createdieselgenerators:diesel', 50,
    [{ item: 'kubejs:petroleum_jelly', count: 1, weight: 1 }]
  );

  // Melting Petroleum Jelly -> Gasoline Fluid
  crucible('kubejs:petroleum_jelly', 'createdieselgenerators:gasoline', 50);

  // Biofuel Processing
  // We're assuming 1000 degrees makes fermentation go REALLY fast.
  crucible('createaddition:biomass', 'createdieselgenerators:ethanol', 25);

  // Seed Oil from Seeds
  // Plant Oil from Crops
  // Use Crucible: Seeds -> Plant Oil
  crucible('#forge:seeds', 'createdieselgenerators:seed_oil', 50);
  crucible('#forge:crops', 'createdieselgenerators:plant_oil', 50);

  // Cool seed oil into biomass (must reach a pretty low temp)
  fluidCooling('createdieselgenerators:seed_oil', 50, 'createaddition:biomass', 100);

  // Biodiesel Mixing (by hand)
  event.shapeless(Item.of('createdieselgenerators:biodiesel_bucket', 2), [
    'createdieselgenerators:plant_oil_bucket',
    'createdieselgenerators:ethanol_bucket'
  ]).replaceIngredient('createdieselgenerators:plant_oil_bucket', 'minecraft:bucket').replaceIngredient('createdieselgenerators:ethanol_bucket', 'minecraft:bucket');


  // Manufacturing

  // Plates (Stonecutter & Stamp Mill)
  const plates = [
    { ingot: 'minecraft:iron_ingot', plate: 'create:iron_sheet' },
    { ingot: 'minecraft:gold_ingot', plate: 'create:golden_sheet' },
    { ingot: 'minecraft:copper_ingot', plate: 'create:copper_sheet' },
    { ingot: 'create:brass_ingot', plate: 'create:brass_sheet' },
    { ingot: 'create:zinc_ingot', plate: 'createaddition:zinc_sheet' },
    { ingot: 'createaddition:electrum_ingot', plate: 'createaddition:electrum_sheet' },
    { ingot: 'create:copper_sheet', plate: 'createaddition:copper_wire' }
  ];

  plates.forEach(p => {
    event.stonecutting(p.plate, p.ingot);
    stampMill(p.plate, 1, { item: p.ingot });
  });

  // Alloy Dust Crafting and Smelting
  // Brass: Copper + Zinc
  event.shapeless('kubejs:brass_dust', ['#forge:dusts/copper', 'create:crushed_raw_zinc']);
  event.smelting('create:brass_ingot', 'kubejs:brass_dust').xp(0.5);

  // Bronze: Copper + Tin
  event.shapeless(Item.of('kubejs:bronze_dust', 4), ['#forge:dusts/copper', '#forge:dusts/copper', '#forge:dusts/copper', '#forge:dusts/tin']);
  event.smelting('crossroads:ingot_bronze', 'kubejs:bronze_dust').xp(0.5);

  // Electrum: Gold + Silver
  event.custom({
    type: 'crossroads:mill',
    input: { item: 'create:ochrum' },
    output: [
      { item: 'minecraft:gravel', count: 1 },
      { item: 'createaddition:electrum_ingot', count: 1 }
    ]
  });

  event.shapeless('create:rose_quartz', ['minecraft:redstone', 'minecraft:quartz']);
  event.shapeless('create:polished_rose_quartz', ['create:rose_quartz']);
  stampMill('create:polished_rose_quartz', 1, { item: 'create:rose_quartz' });

  mill('create:crushed_raw_zinc', 1, 'create:zinc_ingot');
  stampMill('create:crushed_raw_zinc', 3, { item: 'createaddition:zinc_sheet' });

  // Mechanisms

  // Precision Mechanism
  event.shaped('create:precision_mechanism', [
    ' S ',
    'GCG',
    ' A '
  ], {
    S: 'create:shaft',
    G: 'create:golden_sheet',
    C: 'create:cogwheel',
    A: 'create:andesite_alloy'
  });

  // Sturdy Sheet (Obsidian + Lava)
  event.shapeless('create:unprocessed_obsidian_sheet', ['create:powdered_obsidian', 'minecraft:lava_bucket']).replaceIngredient('minecraft:lava_bucket', 'minecraft:bucket');
  stampMill('create:sturdy_sheet', 1, { item: 'create:unprocessed_obsidian_sheet' });

  // Electron Tube
  event.shaped('create:electron_tube', [
    'R',
    'G'
  ], {
    R: 'create:polished_rose_quartz',
    G: 'minecraft:iron_sheet'
  });

  // Physgun (like a better Gravitron)
  event.shaped('the_vmod:physgun', [
    ' A ',
    'ECE',
    ' I '
  ], {
    A: 'create:andesite_alloy',
    E: 'crossroads:lens_array',
    C: 'create:brass_casing',
    I: 'minecraft:iron_block'
  });

  // Interchangeable Lens & Wanderlite Crystal
  event.shapeless('vs_clockwork:wanderlite_crystal', ['crossroads:lens_array']);
  event.shapeless('crossroads:lens_array', ['vs_clockwork:wanderlite_crystal']);

  // World Interactions

  // Block of andesite from stone
  event.remove({ id: "crossroads:beam_transmute/fusion_stone" }); // Stone -> Stone bricks
  beamTransmute("fusion", 1, "#forge:stone", "minecraft:andesite", false);
  beamTransmute("fusion", 1, "minecraft:andesite", "minecraft:stone", true);

  beamTransmute("fusion", 16, '#minecraft:logs', 'create:andesite_casing', false);
  beamTransmute("fusion", 8, 'create:andesite_casing', 'minecraft:oak_log', true);

  beamTransmute("fusion", 32, "create:andesite_casing", "create:brass_casing", false);
  beamTransmute("fusion", 16, "create:brass_casing", "create:andesite_casing", true);

  event.shapeless('create:brass_casing', ['create:andesite_casing', 'create:brass_ingot']);
  event.shapeless('create:andesite_casing', ['#minecraft:logs', 'create:andesite_alloy']);

  // Netherrack from Cobble
  beamTransmute("rift", 8, "#forge:cobblestone", "minecraft:netherrack", false);

  // Cinder Flour
  mill('create:cinder_flour', 1, 'minecraft:netherrack');

  // Concrete Washing (Shapeless)
  const concreteColors = ['white', 'orange', 'magenta', 'light_blue', 'yellow', 'lime', 'pink', 'gray', 'light_gray', 'cyan', 'purple', 'blue', 'brown', 'green', 'red', 'black'];
  concreteColors.forEach(color => {
    event.shapeless(`minecraft:${color}_concrete`, [`minecraft:${color}_concrete_powder`, 'minecraft:water_bucket']).replaceIngredient('minecraft:water_bucket', 'minecraft:bucket');
  });

  // Sponge Washing
  event.shapeless('minecraft:wet_sponge', ['minecraft:sponge', 'minecraft:water_bucket']).replaceIngredient('minecraft:water_bucket', 'minecraft:bucket');

  // Food
  event.shapeless('create:dough', ['create:wheat_flour', 'minecraft:water_bucket']).replaceIngredient('minecraft:water_bucket', 'minecraft:bucket');
  event.shapeless('create:bar_of_chocolate', ['minecraft:cocoa_beans', 'minecraft:sugar', 'minecraft:milk_bucket']).replaceIngredient('minecraft:milk_bucket', 'minecraft:bucket');
  event.shapeless('create:builders_tea', ['#minecraft:leaves', 'minecraft:water_bucket', 'minecraft:milk_bucket']).replaceIngredient('minecraft:water_bucket', 'minecraft:bucket').replaceIngredient('minecraft:milk_bucket', 'minecraft:bucket');

  // Honey & Chocolate Melting (Crucible)
  crucible('minecraft:honey_block', 'create:honey', 1000);
  crucible('create:bar_of_chocolate', 'create:chocolate', 250);

  // Trackwork
  event.shaped(
    Item.of('trackwork:small_simple_wheel_part'),
    [
      ' A ',
      'ABA',
      ' A '
    ],
    {
      A: 'minecraft:dried_kelp',
      B: 'create:cogwheel'
    }
  );

  event.shaped(
    Item.of('trackwork:med_simple_wheel_part'),
    [
      'AAA',
      'ABA',
      'AAA'
    ],
    {
      A: 'minecraft:dried_kelp',
      B: 'create:cogwheel'
    }
  );

  event.shaped(
    Item.of('trackwork:simple_wheel_part'),
    [
      ' A ',
      'ABA',
      ' A '
    ],
    {
      B: 'create:large_cogwheel',
      A: 'minecraft:dried_kelp_block'
    }
  );

  event.shaped(
    Item.of('trackwork:large_simple_wheel_part'),
    [
      'AAA',
      'ABA',
      'AAA'
    ],
    {
      B: 'create:large_cogwheel',
      A: 'minecraft:dried_kelp_block'
    }
  );

  event.shaped(
    Item.of('vs_clockwork:wanderlite_matrix'),
    [
      ' A ',
      'ABA',
      ' A '
    ],
    {
      A: 'minecraft:slime_ball',
      B: 'vs_clockwork:wanderlite_crystal'
    }
  );
});