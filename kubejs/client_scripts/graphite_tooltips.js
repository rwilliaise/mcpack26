ItemEvents.tooltip(event => {
  event.add('kubejs:graphite_pile', [
    Text.of('A dense pile of pure carbon').gray(),
    Text.of('Smelt to produce a Dense Graphite Block').gray()
  ])

  event.add('kubejs:dense_graphite_block', [
    Text.of('Fire an enchantment beam with minimum power 64 at this to seed it with diamonds.').gray()
  ])

  event.add('kubejs:seeded_graphite_block', [
    Text.of('Fire a fusion beam with minimum power 64 at this to create a temporary pressure exceeding 100,000 atmospheres, producing a diamond block.').blue()
  ])
});