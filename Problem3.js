// Problem-3:

function sortMaker(arr) {

    if (arr.some(num => num < 0)) {
        return "Invalid Input";
    }

    if (arr[0] === arr[1]) {
        return "equal"
    }

    return arr.slice().sort(function (a, b) {
        return b - a;
    });
}

var input1 = [2, 3];
var result1 = sortMaker(input1);
var input2 = [4, 2];
var result2 = sortMaker(input2);
var input3 = [4, 4];
var result3 = sortMaker(input3);
var input4 = [1, 2];
var result4 = sortMaker(input4);
var input5 = [4, -2];
var result5 = sortMaker(input5);

console.log(result1);
console.log(result2);
console.log(result3);
console.log(result4);
console.log(result5); 
