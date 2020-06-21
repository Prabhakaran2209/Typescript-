//class Person2 implements greetable, Named {
class Person2 {
    constructor(n) {
        this.age = 25; //can have extra objects
        this.name = n;
    }
    greet(phrase) {
        console.log(phrase + this.name);
    }
    ;
}
let user2;
user2 = new Person2('prabha');
user2.greet("hello ");
console.log(user2);
//************************************************************************************ */
