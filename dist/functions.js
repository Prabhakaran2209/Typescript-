function addition(n1, n2) {
    return n1 + n2;
}
function printres(result) {
    //result = add(4,6);
    console.log("result is " + result);
}
printres(addition(4, 1));
//let combinevalues: Function;  //it will take only function
let combinevalues; //says it will take a function with 2 args and fn overall is of number type
combinevalues = addition;
console.log(combinevalues(1, 1));
function add_handle(n1, n2, cb) {
    const result = n1 + n2;
    cb(result);
}
add_handle(10, 30, (result) => {
    console.log(result);
});
