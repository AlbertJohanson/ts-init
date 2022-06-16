/*
    ===== Código de TypeScript =====
*/



function sum(a:number, b:number):number {
    return a + b;
}

// const sumArrow = (a:number, b:number):number => {
//     return a + b;
// }

// const multiply = (number:number, base:number , anotherNumber?:number):number => number * base;

// const resultado = multiply(2, 10);

// console.log(resultado)

interface Character {
    name: string;
    hp: number;
    showHp: () => void;
}


function recover(character: Character, recoverX:number ):void {

    character.hp += recoverX;

    console.log(character)

}

const newCharacter:Character = {
    name: "Juan",
    hp: 100,
    showHp()  {
        console.log(this.hp)
    }
}

recover(newCharacter, 20);