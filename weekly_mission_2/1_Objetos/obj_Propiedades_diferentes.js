// Ejemplo 3: Objeto con diferentes propiedades
const myObject3 = {
  name: "Hugo",
  age: 2,
  nicknames: ["Puebla", "Zara", "Loreto"],
  address: {
    zip_code: "73500",
    street: "Abelino Juarez",
    city: "Puebla",
    nicknames: ["Puebla", "Zara", "Loreto"],
  },
};
console.log("Ejemplo 3: Objeto con diferentes propiedades");
console.log(myObject3);
console.log(myObject3.name);
console.log(myObject3["address"]);
console.log(myObject3.address);
console.log(myObject3.address.nicknames);
