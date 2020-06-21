let user1;
user1 = {
    name: 'Prabha',
    age: 25,
    greet(phrase) {
        console.log(phrase + ' ' + this.name);
    }
};
user1.greet('hello, Im');
