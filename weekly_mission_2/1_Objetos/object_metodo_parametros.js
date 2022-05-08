// Ejemplo 5: Objeto con método que recibe parámetros
const myPet = {
    name: "Hugo",
    sayHelloToMyPet: function(yourPet){
      console.log(`${this.name} dice: ${yourPet}`)
    }
  }
  
  console.log("Ejemplo 5: Objeto con método que recibe parámetros")
  myPet.sayHelloToMyPet("Bienvenido a la sala!!")