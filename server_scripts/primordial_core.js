// priority: 0

ServerEvents.recipes((event) => {
  event.recipes.create
    .sequenced_assembly(
      [
        Item.of("biomancy:primordial_core").withChance(130.0), // this is the item that will appear in JEI as the result
        Item.of("create:golden_sheet").withChance(8.0), // the rest of these items will be part of the scrap
        Item.of("create:andesite_alloy").withChance(8.0),
        Item.of("create:cogwheel").withChance(5.0),
        Item.of("create:shaft").withChance(2.0),
        Item.of("create:crushed_gold_ore").withChance(2.0),
        Item.of("2x gold_nugget").withChance(2.0),
        "iron_ingot",
        "clock",
      ],
      "minecraft:spider_eye",
      [
        // 'minecraft:spider_eye' is the input
        // the transitional item set by `transitionalItem('create:incomplete_large_cogwheel')` is the item used during the intermediate stages of the assembly
        event.recipes.createDeploying("kubejs:primordial_goo", [
          "kubejs:primordial_goo",
          "create:cogwheel",
        ]),
        // like a normal recipe function, is used as a sequence step in this array. Input and output have the transitional item
        event.recipes.createDeploying("kubejs:primordial_goo", [
          "kubejs:primordial_goo",
          "create:large_cogwheel",
        ]),
        event.recipes.createDeploying("kubejs:primordial_goo", [
          "kubejs:primordial_goo",
          "create:iron_nugget",
        ]),
      ],
    )
    .transitionalItem("kubejs:primordial_goo")
    .loops(3); // set the transitional item and the number of loops
});
