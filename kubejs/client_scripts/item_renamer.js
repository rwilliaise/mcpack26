const itemsToRename = {
  "crossroads:gem_ruby": "Synthetic Ruby",
  "crossroads:water_centrifuge": "Industrial Centrifuge",
}

ClientEvents.lang("en_us", event => {  
  for (const [itemID, newName] of Object.entries(itemsToRename)) {
    event.renameItem(itemID, newName);
  }
});

ItemEvents.tooltip(event => {
  event.add('the_vmod:physgun', '§4Please don\'t use this to fly by dragging a physics ship into your collision box. Pretty pleasee.§r');
});