import { forgedItems } from "./forge.js";

// Filtra todos los objetos que cuesten más de 3000 monedas.

const highCoinsItems = forgedItems.filter((item) => item.price > 3000);
console.log(highCoinsItems);

// Filtra solo los objetos que otorgan algún tipo de resistencia (fire_resistance, earth_resistance, etc).

const resistanceItems = forgedItems.filter(
  (item) =>
    item.modifiers.fire_resistance ||
    item.modifiers.earth_resistance ||
    item.modifiers.mind_resistance
);
console.log(resistanceItems);

// Filtra los objetos del tipo "armor".

const armorItems = forgedItems.filter((item) => item.type === "armor");
console.log(armorItems);

// Filtra objetos que tarden menos de 10 horas en forjarse.

const lessHoursToForgeItems = forgedItems.filter(
  (item) => item.creation_time_hours < 10
);
console.log(lessHoursToForgeItems);

// Filtra todos los objetos que otorgan fuerza (strength).

const strengthItems = forgedItems.filter((item) => item.modifiers.strength);
console.log(strengthItems);
