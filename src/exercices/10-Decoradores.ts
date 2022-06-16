/*
    ===== Código de TypeScript =====
*/

//Decoradors

function classDecorator <T extends {new(...args:any[]):{}}>(constructor:T) {
    return class extends constructor {
        hello = 'Hello';
    }
}

@classDecorator
class MySuperClass{
    public miProperty: string = 'Hola';

    print() {
        console.log('Hola mundo');
    }
}


console.log(MySuperClass)

const myClass = new MySuperClass();

console.log(myClass.miProperty);