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
];

JEIEvents.hideItems(event => {
  thingsToHide.forEach(item => {
    event.hide(item);
  });
});