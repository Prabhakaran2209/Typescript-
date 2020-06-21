// const person: {
//     name: string,
//     age: number
//     hobbies: string[]
//     role:  [number, string]   //tuple- special array with exactly 2 elements to add even more strictness
//                                 if we know before what type the array is going to hold
// } = {
var Role;
(function (Role) {
    Role["ADMIN"] = "prbha";
    Role[Role["READ_only"] = 4] = "READ_only";
    Role[Role["Author"] = 5] = "Author";
})(Role || (Role = {})); //we can assign values / text to our enum
const person = {
    name: 'prabha',
    age: 26,
    hobbies: ['gymming', 'reading', 'youtube'],
    role1: [2, 'Sdet'],
    role: Role.ADMIN,
    accesslevel: Role.READ_only
};
let activities; //to pass array of strings
activities = ['sports', 'gym'];
let freetime; //to pass mix of values
freetime = ['youtube', '44'];
console.log(person);
console.log(person.name);
console.log(person.age);
console.log(person.role);
console.log(person.accesslevel);
for (let hobby of person.hobbies)
    console.log(hobby);
