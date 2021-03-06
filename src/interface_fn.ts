//type addfn =  (a: number, b: number) => number

interface addfn {
    (a: number, b: number): number;     //adding function as interface
}

let addition1: addfn;
addition1 = (n1: number, n2: number) => {
    return n1+n2;
}

interface Named1 {
    name?: string
}

interface greetable1 extends Named1 {        //Interface can extend
    name?: string;
    //age: number;
    greet (phrase: string): void;
}

//class Person2 implements greetable, Named {
class Person22 implements greetable1 {    //person2 is forced to have both greet and name
    name?: string;                       //making name as optional
    age = 25;                              //can have extra objects
    constructor (n?: string) {  //or can pass default values also constructor(n: string = 'prabha')
        if(n) {
            this.name = n;
        }   
    }  
    greet (phrase: string) {
        if(this.name) {
            console.log(phrase + this.name)
        } else {
            console.log('hello-no name provided')
        }
         
    };
}

let user22: greetable1;

user22 = new Person22();
user22.greet("hello ")
console.log(user22);

    
