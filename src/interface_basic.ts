interface Person {        //Interface allows us to have structure / blueprints
    name: String;
    age: number;
    greet (phrase: string): void;
}

let user1: Person;

user1 = {
    name: 'Prabha',
    age: 25,
    greet (phrase: string) {
        console.log(phrase + ' ' + this.name);
    }
}

user1.greet('hello, Im')