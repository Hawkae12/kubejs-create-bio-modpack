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

  event.custom({
    type: "biomancy:digesting",
    nutrientsCost: 23,
    processingTime: 50,
    ingredient: {
      item: "create:brass_ingot",
    },
    result: {
      count: 11,
      item: "create:brass_nugget",
    },
  });

  event.custom({
    type: "biomancy:bio_forging",
    bio_forge_tab: "biomancy:machines",
    ingredients: [
      {
        count: 2,
        item: "minecraft:andesite",
      },
    ],
    nutrientsCost: 2,
    result: {
      item: "create:andesite_alloy",
    },
  });
});
