interface Named {
    name: string
}

interface greetable extends Named {        //Interface can extend
    //name: String;
    //age: number;
    greet (phrase: string): void;
}

//class Person2 implements greetable, Named {
class Person2 implements greetable {    //person2 is forced to have both greet and name
    name: string;
    age = 25;                              //can have extra objects
    constructor (n: string) {
        this.name = n;
    }  
    greet (phrase: string) {
        console.log(phrase + this.name) 
    };
}

let user2: greetable;

user2 = new Person2('prabha');
user2.greet("hello ")
console.log(user2);

//************************************************************************************ */

