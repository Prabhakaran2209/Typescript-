function combine(input1, input2) {
    let result;
    if (typeof input1 == "number" && typeof input2 == "number") {
        result = input1 + input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
}
const combineages = combine(23, 7);
console.log(combineages);
const combinenames = combine('prabha', ' karan');
console.log(combinenames);