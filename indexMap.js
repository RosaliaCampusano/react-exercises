import { forgedItems } from "./forge.js";

//Crea un nuevo array de objetos con solo el nombre del objeto y su precio.

const nameAndPriceItems = forgedItems.map((item) => ({
  name: item.name,
  price: item.price,
}));
console.log(nameAndPriceItems);

//Transforma los nombres de todos los objetos a mayúsculas.

const updateNameItems = forgedItems.map((item) => item.name.toUpperCase());
console.log(updateNameItems);

//Agrega un nuevo campo formattedPrice que sea "XXX gold coins".

const updateForgedItems = forgedItems.map((item) => ({
  ...item,
  formattedPrice: "XXX gold coins",
}));
console.log(updateForgedItems);

//Crea un array con mensajes como: "Forge [name] for [creation_time_hours] hours."

const itemsMessage = forgedItems.map(
  (item) => `Forge ${item.name} for ${item.creation_time_hours} hours`
);
console.log(itemsMessage);

//Convierte los tiempos de forja a minutos en un nuevo array.

const minutesTimesItems = forgedItems.map(
  (item) => item.creation_time_hours * 60
);
console.log(minutesTimesItems);
