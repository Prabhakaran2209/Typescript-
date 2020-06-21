const user = 'prabha';
//user = 'gfgfg'
let age = 22;
age = 33;
var role = 'sdet';
const adde = (a, b = 1) => a + b; //function declared using arrow 
//default arguments has to be always last in list
console.log(adde(2)); //since b is taking default value
const hobbies = ['sports', 'eating', 'reading'];
const activity = ['gymming'];
activity.push(...hobbies); //spread operator to add elements in array
console.log(activity);
const [val1, val2, val3] = hobbies; //array destructing, storing array values to constants
console.log(val2);
const person2 = {
    name2: 'PK',
    age2: '26',
    role2: 'SDET'
};
const { name2: firstname, age2: manage, role2 } = person2; //object destructing or restructuring
console.log(firstname);
