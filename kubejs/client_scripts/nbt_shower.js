ItemEvents.tooltip(event => {
  event.addAdvanced(Ingredient.all, (item, advanced, text) => {
    if (event.alt && item.nbt) {
      text.add(Text.of('NBT: ').append(Text.prettyPrintNbt(item.nbt)))
    }
  });
});