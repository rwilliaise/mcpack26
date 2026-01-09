ServerEvents.recipes(event => {
    event.shaped('4x create:andesite_casing', [
        'WAW',
        'ALA',
        'WAW'
    ], {
        W: '#minecraft:planks',
        A: 'create:andesite_alloy',
        L: '#minecraft:logs'
    });

    event.shaped('4x create:brass_casing', [
        'WBW',
        'BLB',
        'WBW'
    ], {
        W: '#minecraft:planks',
        B: 'create:brass_ingot',
        L: '#minecraft:logs'
    });

    event.shaped('4x create:copper_casing', [
        'WCW',
        'CLC',
        'WCW'
    ], {
        W: '#minecraft:planks',
        C: 'minecraft:copper_ingot',
        L: '#minecraft:logs'
    });

    event.shaped('4x create:railway_casing', [
        'WSW',
        'SLS',
        'WSW'
    ], {
        W: '#minecraft:planks',
        S: 'create:sturdy_sheet',
        L: '#minecraft:logs'
    });

    const andesiteMachines = [
        'create:shaft',
        'create:cogwheel',
        'create:large_cogwheel',
        'create:gearbox',
        'create:clutch',
        'create:gearshift',
        'create:encased_chain_drive',
        'create:mechanical_press',
        'create:mechanical_mixer',
        'create:mechanical_saw',
        'create:mechanical_drill',
        'create:encased_fan',
        'create:millstone',
        'create:depot',
        'create:weighted_ejector',
        'create:chute',
        'create:portable_storage_interface',
        'create:mechanical_harvester',
        'create:mechanical_plough',
        'create:andesite_funnel',
        'create:andesite_tunnel',
        'create:rope_pulley',
        'create:cuckoo_clock'
    ];

    andesiteMachines.forEach(item => {
        event.stonecutting(item, 'create:andesite_casing');
    });

    const brassMachines = [
        'create:rotation_speed_controller',
        'create:sequenced_gearshift',
        'create:mechanical_arm',
        'create:stockpile_switch',
        'create:content_observer',
        'create:display_link',
        'create:nixie_tube',
        'create:redstone_link',
        'create:brass_funnel',
        'create:brass_tunnel',
        'create:elevator_pulley',
        'create:contraption_controls',
        'vs_clockwork:command_seat',
        'vs_clockwork:wing'
    ];

    brassMachines.forEach(item => {
        event.stonecutting(item, 'create:brass_casing');
    });

    const copperMachines = [
        'create:fluid_pipe',
        'create:mechanical_pump',
        'create:smart_fluid_pipe',
        'create:fluid_valve',
        'create:spout',
        'create:hose_pulley',
        'create:item_drain',
        'create:fluid_tank',
        'create:steam_whistle'
    ];

    copperMachines.forEach(item => {
        event.stonecutting(item, 'create:copper_casing');
    });
});