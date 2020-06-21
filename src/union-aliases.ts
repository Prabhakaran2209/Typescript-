type combinable = number | string; //can be used to save some extra code

function combine(input1: combinable, input2: combinable) {  //union types
    let result: any;
    if(typeof input1 =="number" && typeof input2 =="number") {
        result = input1 + input2;
    } else {
        result = input1.toString() + input2.toString();
    }
   
    return result;
}

const combineages = combine(23, 7);
console.log(combineages);

const combinenames = combine ('prabha', ' karan');
console.log(combinenames);
