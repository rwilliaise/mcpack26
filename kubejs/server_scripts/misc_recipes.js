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
});