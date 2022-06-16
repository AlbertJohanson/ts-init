/*
    ===== Código de TypeScript =====
*/

//Genericos 

function whatType<T>(arg: T) {
    return arg;
}

let imString = whatType('Hola');
let imNumber = whatType(10);
let imArray = whatType([1, 2, 3]);
let imExplicit = whatType<number>(100);