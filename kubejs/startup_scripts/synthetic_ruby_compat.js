StartupEvents.registry('block', event => {
  event.create('compressed_redstone')
    .displayName('Compressed Redstone')
    .soundType('metal')
    .mapColor('redstone')
    .hardness(6.0)
    .resistance(6.0)
    .requiresTool(true)
    .tagBlock('minecraft:mineable/pickaxe')
    .tagBlock('minecraft:needs_wood_tool');

  event.create('fluorescent_redstone')
    .displayName('Fluorescent Redstone')
    .soundType('metal')
    .mapColor('redstone')
    .lightLevel(0.533)
    .hardness(8.0)
    .resistance(6.0)
    .requiresTool(true)
    .tagBlock('minecraft:mineable/pickaxe')
    .tagBlock('minecraft:needs_iron_tool');
});