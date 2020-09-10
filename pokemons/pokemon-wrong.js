class Pokemon {
    #name = ""; 
    #type = ""

    constructor(name, type) {
        this.#name = name;
        this.#type = type;
    }

   get name() {
       return this.#name;
   }

   get type() {
       return this.#type;
   }

   get canFly() {
       return "Puedo volar";
   }
}

class Charmander extends Pokemon {
   constructor() {
       super("Charmander", "Fire");
   }

   get canFly() {
       throw new Error("No puedo volar");
   }
}

class Charizar extends Pokemon {
   constructor() {           
       super("Charizar", "Fire");
   }
}

const CHARIZAR = new Charizar();

console.log(`Hola soy ${CHARIZAR.name}`);
console.log(`Soy de tipo ${CHARIZAR.type}`);
console.log(`Ademas ${CHARIZAR.canFly}`);

const CHARMANDER = new Charmander();

console.log(`Hola soy ${CHARMANDER.name}`);
console.log(`Soy de tipo ${CHARMANDER.type}`);
console.log(`Ademas ${CHARMANDER.canFly}`);
// En esta caso la salida mostrar un error

https://miro.medium.com/max/1400/1*aFeOrTAXPZdIQp3wKmECcQ.png