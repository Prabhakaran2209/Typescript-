let userinput: unknown;  //unknown is bit more restrictine than any
let userName: string;

userinput = 5;
userinput = 'prabha';

userinput = userName;
//userName = userinput;

if(typeof userinput == 'string') {
    userName = userinput;
}

function generateerror(message: string, code: number): never {   //never can be used if the fn never return anything,
    throw {errormessage: message, errorcode: code}               //crashes the code with error
}

generateerror('Error occured', 201);

