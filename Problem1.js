function cubeNumber(number) {
    if (typeof number == 'number') {
        return Math.pow(number, 3);
    } else {
        return "Input is not a number.";
    }
}

let result1 = cubeNumber(3);
let result2 = cubeNumber(4);
console.log(result1);
console.log(result2);




