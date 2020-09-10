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
}

class PokemonFly extends Pokemon {
   constructor(name, type) {
       super(name, type);
   }
   get canFly() {
       return "Puedo volar";
   }
}

class Charmander extends Pokemon {
   constructor() {
       super("Charmander", "Fire");
   }
}

class Charizar extends PokemonFly {
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
// En esta caso la salida nos mostrara undedined
// ya que el método no exite en la clase Charmander