ServerEvents.recipes(event => {
    event.shapeless('vs_clockwork:wanderlite_crystal', ['minecraft:amethyst_shard', 'minecraft:glowstone_dust', 'minecraft:blue_dye']);

    event.shaped('vs_clockwork:physics_bearing', [
        ' I ',
        'SCS',
        ' I '
    ], {
        I: 'minecraft:iron_ingot',
        S: 'create:shaft',
        C: 'create:andesite_casing'
    });

    event.shaped('create:propeller', [
        ' S ',
        ' A ',
        ' S '
    ], {
        S: 'create:iron_sheet',
        A: 'create:andesite_alloy'
    });

    event.shaped('4x create:iron_sheet', ['II', 'II'], { I: 'minecraft:iron_ingot' });

    event.shaped('createdieselgenerators:engine_piston', [
        ' I ',
        ' R ',
        ' A '
    ], {
        I: 'minecraft:iron_block',
        R: 'create:shaft',
        A: 'create:andesite_alloy'
    });

    event.shaped('createdieselgenerators:diesel_engine', [
        'BBB',
        'PEP',
        'BBB'
    ], {
        B: 'create:brass_casing',
        P: 'createdieselgenerators:engine_piston',
        E: 'create:electron_tube'
    });

    event.shaped('create:steam_engine', [
        ' G ',
        ' B ',
        ' C '
    ], {
        G: 'minecraft:gold_block',
        B: 'create:brass_casing',
        C: 'create:copper_casing'
    });
});