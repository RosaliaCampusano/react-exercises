import { forgedItems } from "./forge.js";

// Encuentra el primer objeto que tenga "Phoenix Feather" como material.
const firstMaterialItem = forgedItems.find((item) =>
  item.materials.some((material) => material.name === "Phoenix Feather")
);
console.log(firstMaterialItem);

// Busca el objeto que tenga "Ashenblade of the Abyss" como nombre.
const nameItem = forgedItems.find(
  (item) => item.name === "Ashenblade of the Abyss"
);
console.log(nameItem);

// Encuentra el primer objeto que tenga movement_speed como modificador.
const firtMovementSpeedItem = forgedItems.find(
  (item) => item.modifiers.movement_speed
);
console.log(firtMovementSpeedItem);

// Encuentra el primer objeto con rareza "uncommon".
const rarityUncommonItem = forgedItems.find(
  (item) => item.rarity === "uncommon"
);
console.log(rarityUncommonItem);

// Busca el primer objeto que requiera nivel mayor a 18 y tenga defensa.
const highLevelWithDefenseItem = forgedItems.find(
  (item) => item.min_level > 18 && item.modifiers.defense
);
console.log(highLevelWithDefenseItem);
