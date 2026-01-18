const itemsToRename = {
  "crossroads:gem_ruby": "Synthetic Ruby",
  "crossroads:ingot_tin": "Aluminum Ingot",
  "crossroads:raw_tin": "Raw Aluminum",
  "crossroads:nugget_tin": "Aluminum Nugget",
  "create:crushed_raw_tin": "Crushed Raw Aluminum",
  "crossroads:block_raw_tin": "Block of Raw Aluminum",
  "crossroads:block_tin": "Block of Aluminum",
  "crossroads:dust_tin": "Aluminum Dust",
  "crossroads:molten_tin_bucket": "Molten Aluminum Bucket",
  "crossroads:ore_tin": "Aluminum Ore",
  "crossroads:ore_tin_deep": "Deepslate Aluminum Ore"
}

ClientEvents.lang("en_us", event => {
  event.renameItem("crossroads:gem_ruby", "Synthetic Ruby");
  event.renameItem("crossroads:ingot_tin", "Aluminum Ingot");
  event.renameItem("crossroads:raw_tin", "Raw Aluminum");
  event.renameItem("crossroads:nugget_tin", "Aluminum Nugget");
});

ItemEvents.tooltip(event => {
  event.add('the_vmod:physgun', '§4Please don\'t use this to fly by dragging a physics ship into your collision box. Pretty pleasee.§r');
});