const thingsToHide = [
  'crossroads:ore_ruby',
  'crossroads:ore_tin',
  'crossroads:ore_tin_deep',
  //'crossroads:ore_void',
  'artifacts:everlasting_beef',
  'artifacts:eternal_steak',
  'vs_clockwork:wanderlite_end_ore',
  'vs_clockwork:wanderlite_deepslate_ore',
  'vs_clockwork:wanderlite_nyx_ore',
  'createaddition:tesla_coil', // Crossroads already adds a tesla coil that functions the same
  'createaddition:alternator', // We don't need to convert Create rotation to FE
  'create:schematicannon',
  'create:schematic_table',
  'create:empty_blaze_burner',
  'create:blaze_burner',
  'create:mechanical_roller',
  'create:mechanical_harvester',
  'create:mechanical_plough',
  'create:deployer',
  'create:mechanical_drill',
  'create:crushing_wheel',
  'create:basin',
  'create:mechanical_press',
  'create:mechanical_mixer',
  'create:encased_fan',
  'create:nozzle',
  'create:wand_of_symmetry',
  'create:extendo_grip',
  'create:millstone',
  'create:potato_cannon',
  'create:mechanical_crafter',
  'create:mechanical_saw'
];

JEIEvents.hideItems(event => {
  thingsToHide.forEach(item => {
    event.hide(item);
  });
});

ItemEvents.tooltip(event => {
  thingsToHide.forEach(item => {
    event.add(item, Text.red('Item is Disabled!').bold())
  });
});