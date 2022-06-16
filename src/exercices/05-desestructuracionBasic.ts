/*
    ===== Código de TypeScript =====
*/


// Desetructurando un objeto
interface Detalles {
    autor: string;
    año: number;
}

interface Reproductor {
    volumen: number;
    segundo: number;
    cancion: string;
    detalles: Detalles;

}


const reproductor: Reproductor = {
    volumen: 90,
    segundo: 36,
    cancion: 'Trade Wind',
    detalles: {
        autor: 'Omega Tribe',
        año: 1983
    }
}

const { cancion, detalles, volumen, segundo } = reproductor;

const { autor, año } = detalles;



console.log('the song is:', cancion);
console.log('the author is:', autor);
console.log('the year is:', año);
console.log('the volume is:', volumen);
console.log('the second is:', segundo);

// Desetructurando un arreglo

const dbz: string[] = ['Goku', 'Vegeta', 'Trunks'];

const [ , , p3 ] = dbz;

// console.log('This is ', p1);
// console.log('This is ', p2);
console.log('This is ', p3);