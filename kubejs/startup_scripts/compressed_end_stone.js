StartupEvents.registry('block', event => {
  event.create('compressed_end_stone')
    .displayName('Compressed End Stone')
    .soundType('stone')
    .mapColor('sand')
    .hardness(3.0)
    .resistance(9.0)
    .requiresTool(true)
    .tagBlock('forge:stones')
    .tagBlock('minecraft:mineable/axe')
    .tagBlock('minecraft:mineable/pickaxe')
    .tagBlock('minecraft:needs_iron_tool')
});