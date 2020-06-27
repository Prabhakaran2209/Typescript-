type combine = string | number;   //union type
type num = number | boolean;

function add(a: number, b: number): number;
function add(a: string, b:string): string;
function add(a: number, b: string): string;            //function overloading
function add (a: combined, b: combined) {
    if(typeof a === 'string' || typeof b === 'string') {    //type gaurds
        return a.toString() + b.toString();
    }
    else {
        return a + b;
    }
}

const result = add ('tom', 'prabha');

//optional chaining
const fetchUserData = {
    id: '1',
    name: 'pk',
    job: {title: 'CEO', branch: 'VDP'}
}
console.log(fetchUserData?.job?.title);  //normal way of printing
//using optional parameter
console.log(fetchUserData?.job?.title);  //does a if check if each parameter exist

