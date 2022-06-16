/*
    ===== Código de TypeScript =====
*/

interface Address {
    street: string;
    city: string;
    state: string;
}

interface superHero {
    name: string;
    age: number;
    address: Address;
    showAddress: () => string;
}

const superHero = {
    name: 'Spiderman',
    age: 30,
    address:{
        street: 'Calle 123',
        city: 'New York',
        state: 'NY',
    },
    showAddress() {
        return `${this.name} lives in ${this.address.street}, ${this.address.city}, ${this.address.state}`;
    }
}

const adress = superHero.showAddress();
console.log(adress);