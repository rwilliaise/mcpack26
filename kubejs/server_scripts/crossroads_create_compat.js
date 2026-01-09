ServerEvents.recipes(event => {
    event.shaped('8x create:andesite_alloy', [
        'AA',
        'II',
        'AA'
    ], {
        A: 'minecraft:andesite',
        I: '#forge:dusts/iron'
    });

    event.shaped('4x create:polished_rose_quartz', [
        ' R ',
        'QSQ',
        ' R '
    ], {
        R: 'minecraft:redstone',
        Q: 'minecraft:quartz',
        S: 'crossroads:dust_salt'
    });

    event.shapeless('2x create:brass_ingot', [
        'minecraft:copper_ingot',
        'create:zinc_ingot',
        'crossroads:nugget_copper'
    ]).id('kubejs:cheap_brass_blend');
    
    event.blasting('create:brass_ingot', 'create:brass_nugget').xp(0.2); 

    event.shapeless('2x create:crushed_raw_brass', ['#forge:dusts/copper', '#forge:dusts/zinc', 'minecraft:coal']);
    event.smelting('create:brass_ingot', 'create:crushed_raw_brass');

    event.shaped('4x create:electron_tube', [
        ' P ',
        ' G ',
        ' I '
    ], {
        P: 'create:polished_rose_quartz',
        G: 'crossroads:gear_copper',
        I: 'minecraft:iron_nugget'
    });

    // Sturdy sheet now uses Obsidian Dust from Crossroads
    event.shaped('create:sturdy_sheet', [
        'OO',
        'OO'
    ], {
        O: '#forge:dusts/obsidian'
    });
});