/*
    ===== Código de TypeScript =====
*/

class PersonaNormal {
    constructor(
        public nombre: string, 
        public address: string
        ) {}
}

class Heroe extends PersonaNormal {
      constructor(
        public alterEgo: string,
        public age: number,
        public realName: string
        ) {
            super( realName, 'Calle falsa 123');
        }




}


const spiderman = new Heroe('Spiderman', 40, 'Peter Parker');




console.log(spiderman);