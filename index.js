import { forgedItems } from "./forge.js";

//map()

//forgedItems.map((item) => console.log(item.modifiers.leadership_aura));

const nameAndRarity = forgedItems.map((item) => ({
  name: item.name,
  rarity: item.rarity,
}));

/* console.log(nameAndRarity); */

const itemDescription = forgedItems.map(
  (item) => `Item: ${item.name} - ${item.description}`
);
/* console.log(itemDescription); */

const updatePrices = forgedItems.map((item) => ({
  ...item,
  price: Math.round(item.price * 1.1),
}));

const craftingTimes = forgedItems.map(
  (item) => `${item.name} takes ${item.creation_time_hours} hours to forge`
);
/* console.log(craftingTimes); */

// -------------------

//filter()

/* const epicItems = forgedItems.filter((item) => item.rarity === "epic");
console.log(epicItems); */

const highLevelItems = forgedItems.filter((item) => item.min_level >= 18);

const weapons = forgedItems.filter((item) => item.type === "weapon");

const fireItems = forgedItems.filter((item) => item.modifiers?.fire_damage);

const longCraftingItems = forgedItems.filter(
  (item) => item.creation_time_hours > 10
);

//----------------------

//reduce()

const totalPrice = forgedItems.reduce((acc, item) => acc + item.price, 0);

const rarityCount = forgedItems.reduce((acc, item) => {
  acc[item.rarity] = (acc[item.rarity] || 0) + 1;
  return acc;
}, {});

const totalStrength = forgedItems.reduce(
  (acc, item) => acc + (item.modifiers.strength || 0),
  0
);

// --------------------------

//find()

const lengedaryItems = forgedItems.find((item) => item.rarity === "lengedary");

const titanShield = forgedItems.find((item) => item.name === "Titanborn Aegis");

const highCharismaItem = forgedItems.find(
  (item) => (item.modifiers.charisma || 0) >= 10
);
