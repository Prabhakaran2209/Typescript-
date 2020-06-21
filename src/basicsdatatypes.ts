console.log('it strats!!!');
console.log('Data types');

function add (a: number, b: number, showResult: boolean, phrase: string) {
    if(showResult)
 {
     console.log(phrase + (a + b));
 } 
 else
 return a+b;   
}

const a = 2;
const b = 4;
console.log(typeof a); //for checking types in JS, if we are not using typescript
const ph = 'Result is: '
add (a, b, true, ph);