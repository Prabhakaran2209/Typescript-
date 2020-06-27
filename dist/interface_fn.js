//type addfn =  (a: number, b: number) => number
let addition1;
addition1 = (n1, n2) => {
    return n1 + n2;
};
//class Person2 implements greetable, Named {
class Person22 {
    constructor(n) {
        this.age = 25; //can have extra objects
        if (n) {
            this.name = n;
        }
    }
    greet(phrase) {
        if (this.name) {
            console.log(phrase + this.name);
        }
        else {
            console.log('hello-no name provided');
        }
    }
    ;
}
let user22;
user22 = new Person22();
user22.greet("hello ");
console.log(user22);
