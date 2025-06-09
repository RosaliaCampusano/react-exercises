import { forgedItems } from "./forge.js";

// Suma total de horas necesarias para forjar todos los objetos
const totalHoursToForgeItems = forgedItems.reduce(
  (acc, item) => acc + item.creation_time_hours,
  0
);
console.log(totalHoursToForgeItems);

// Crea un objeto con la suma total de todos los atributos (strength, dexterity, etc).
const totalAttributesItems = forgedItems.reduce(
  (acc, item) => {
    acc.intelligence += item.modifiers.intelligence || 0;
    acc.charisma += item.modifiers.charisma || 0;
    acc.constitution += item.modifiers.constitution || 0;
    acc.defense += item.modifiers.defense || 0;
    acc.dexterity += item.modifiers.dexterity || 0;
    acc.strength += item.modifiers.strength || 0;
    return acc;
  },
  {
    intelligence: 0,
    charisma: 0,
    constitution: 0,
    defense: 0,
    dexterity: 0,
    strength: 0,
  }
);
console.log(totalAttributesItems);

// Calcula el promedio del precio de todos los objetos.
const averageTotalPrice =
  forgedItems.reduce((acc, item) => acc + item.price, 0) / forgedItems.length;
console.log(averageTotalPrice);

// Cuenta cuántos objetos hay por tipo (weapon, helmet, etc).
const typeItemCount = forgedItems.reduce((acc, item) => {
  acc[item.type] = (acc[item.type] || 0) + 1;
  return acc;
}, {});
console.log(typeItemCount);

// Encuentra el precio más alto usando .reduce() sin Math.max.
const highestPrice = forgedItems.reduce((acc, item) => {
  return acc > item.price ? acc : item.price;
}, 0);
console.log(highestPrice);
