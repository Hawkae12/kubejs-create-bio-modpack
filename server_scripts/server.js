// priority: 0

ServerEvents.recipes((event) => {
  event.shaped(
    "create_mob_spawners:empty_soul_catcher",
    [
      // arg 1: output
      "EEGEE",
      "EFABE",
      "GFHDC",
      "EFABE",
      "EEGEE",
    ],
    {
      A: "minecraft:chest",
      B: "create:cogwheel",
      C: "create:large_cogwheel",
      D: "minecraft:iron_nugget",
      E: "create:brass_sheet",
      F: "create:dough",
      G: "create:brass_casing",
      H: "minecraft:stick",
    },
  );

  event.shaped(
    "create_mob_spawners:mechanical_spawner",
    [
      // arg 1: output
      "GEJEG",
      "IEFEA",
      "HBDCA",
      "IEFEA",
      "GEJEG",
    ],
    {
      A: "minecraft:chain",
      B: "create:cogwheel",
      C: "create:large_cogwheel",
      D: "create:mechanical_mixer",
      E: "create:brass_sheet",
      F: "create:precision_mechanism",
      G: "create:brass_casing",
      H: "create:portable_fluid_interface",
      I: "create:copper_sheet",
      J: "create:shaft",
    },
  );

  event.shaped(
    "minecraft:saddle",
    [
      // arg 1: output
      "   ",
      "BAB", // arg 2: the shape (array of strings)
      "A A",
    ],
    {
      A: "minecraft:leather",
      B: "minecraft:string",
    },
  );

  event.shaped(
    "minecraft:saddle",
    [
      // arg 1: output
      "   ",
      "BAB", // arg 2: the shape (array of strings)
      "A A",
    ],
    {
      A: "create:cardboard",
      B: "minecraft:string",
    },
  );

  event.shaped(
    "create:rose_quartz",
    [
      // arg 1: output
      "   ",
      " A ", // arg 2: the shape (array of strings)
      "   ",
    ],
    {
      A: "biomesoplenty:rose_quartz_chunk",
    },
  );

  event.shaped(
    "biomesoplenty:rose_quartz_chunk",
    [
      // arg 1: output
      "   ",
      " A ", // arg 2: the shape (array of strings)
      "   ",
    ],
    {
      A: "create:rose_quartz",
    },
  );

  event.recipes.create.haunting(
    "minecraft:crying_obsidian",
    "minecraft:obsidian",
  );

  event.recipes.create.crushing("minecraft:green_dye", "biomesoplenty:bush");

  event.recipes.create.milling("minecraft:green_dye", "biomesoplenty:bush");

  event.remove({ id: "biomancy:crafting/primordial_core" });

  event.custom({
    type: "create_mechanical_extruder:extruding",
    ingredients: [
      {
        fluid: "minecraft:lava",
        amount: 1000,
      },
      {
        item: "ghasts_update:dried_ghast",
      },
    ],
    result: {
      item: "minecraft:ghast_tear",
    },
  });
});
