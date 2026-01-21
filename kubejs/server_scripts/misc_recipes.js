ServerEvents.recipes(event => {
  event.remove({ id: "vs_eureka:balloon_paper" })
  event.shaped(
    Item.of('vs_eureka:balloon', 4),
    [
      ' A ',
      'A A',
      ' A '
    ],
    {
      A: 'farmersdelight:canvas'
    }
  );

  event.custom({
    type: 'crossroads:beam_extract',
    input: {
      tag: '#forge:storage_blocks/redstone'
    },
    energy: 18,
    potential: 24,
    duration: 4
  });

  event.remove({ output: "createaddition:connector" })
  event.shapeless(
    Item.of('createaddition:connector', 2),
    [
      'create:andesite_alloy',
      'createaddition:copper_rod'
    ]
  );

  const wrenches = [
    'essentials:wrench',
    'essentials:circuit_wrench',
    Item.of('supplementaries:wrench', '{Damage:0}'),
    Item.of('cc_androids:wrench', '{Damage:0}'),
    'create:wrench'
  ];

  wrenches.forEach(wrench => {
    wrenches.forEach(outputWrench => {
      if (wrench !== outputWrench) {
        event.stonecutting(
          outputWrench,
          wrench
        );
      }
    });
  });
});