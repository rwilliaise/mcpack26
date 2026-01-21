StartupEvents.registry('item', event => {
  event.create('petroleum_jelly')
    .displayName('Petroleum Jelly')
    .tooltip('Obtained from Crude Oil in the Water Centrifuge. Melt in a Crucible to get Gasoline.')
    .burnTime(1600)

  event.create('brass_dust').displayName('Brass Dust').tag('forge:dusts/brass');
  event.create('bronze_dust').displayName('Bronze Dust').tag('forge:dusts/bronze');
});