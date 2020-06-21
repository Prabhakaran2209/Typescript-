let userinput; //unknown is bit more restrictine than any
let userName;
userinput = 5;
userinput = 'prabha';
userinput = userName;
//userName = userinput;
if (typeof userinput == 'string') {
    userName = userinput;
}
function generateerror(message, code) {
    throw { errormessage: message, errorcode: code }; //crashes the code with error
}
generateerror('Error occured', 201);
