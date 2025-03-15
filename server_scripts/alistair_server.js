// priority: 0

ServerEvents.recipes((event) => {
  event.recipes.create
    .sequenced_assembly(
      [Item.of("biomancy:primordial_core")],
      "kubejs:rotten_dust",
      [
        // 'minecraft:spider_eye' is the input
        // the transitional item set by `transitionalItem('create:incomplete_large_cogwheel')` is the item used during the intermediate stages of the assembly
        event.recipes.createDeploying("kubejs:primordial_goo", [
          "kubejs:primordial_goo",
          "minecraft:ender_pearl",
        ]),
        event.recipes.create.filling("water_bucket", [Fluid.water(), "bucket"]),
        event.recipes.create.pressing("diamond", "coal_block"),
      ],
    )
    .transitionalItem("kubejs:primordial_goo")
    .loops(2); // set the transitional item and the number of loops
});
