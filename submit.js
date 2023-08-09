// Problem-1:

// function cubeNumber(number) {
//     if (typeof number === 'number') {
//         return Math.pow(number, 3);
//     } else {
//         return "Input is not a number.";
//     }
// }

// let result1 = cubeNumber(3);
// let result2 = cubeNumber(4);
// console.log(result1);
// console.log(result2);



// // Problem-2:
// function matchFinder(string1, string2) {
//     if (typeof string1 === "string" && typeof string2 === "string") {
//         if (string1.includes(string2)) {
//             return true;
//         } else {
//             return false;
//         }
//     } else {
//         return 'Input is not a valid string';
//     }
// }

// let result1 = matchFinder("John Doe", "ohn");
// let result2 = matchFinder("JavaScript", "Code");
// let result3 = matchFinder("Peter Parker", "Pen");
// let result4 = matchFinder("Peter Parker", "pet");

// console.log(result1);
// console.log(result2);
// console.log(result3);
// console.log(result4);

// Problem-3:

// function sortMaker(arr) {

//     if (arr.some(num => num < 0)) {
//         return "Invalid Input";
//     }

//     if (arr[0] === arr[1]) {
//         return "equal"
//     }

//     return arr.slice().sort(function (a, b) {
//         return b - a;
//     });
// }

// var input1 = [2, 3];
// var result1 = sortMaker(input1);
// var input2 = [4, 2];
// var result2 = sortMaker(input2);
// var input3 = [4, 4];
// var result3 = sortMaker(input3);
// var input4 = [1, 2];
// var result4 = sortMaker(input4);
// var input5 = [4, -2];
// var result5 = sortMaker(input5);

// console.log(result1);
// console.log(result2);
// console.log(result3);
// console.log(result4);
// console.log(result5);

// Problem-4:
// function findAddress(obj) {
//     const address = {
//         street: 10,
//         house: "15A",
//         society: "Earth Perfect"
//     };

//     const values = Object.values(address);
//     return values;
// }

// var result = findAddress();

// console.log(result);

// // Problem-5:

function canPay(changeArray, totalDue) {
    let sum = 0;  // Initialize sum to 0
    for (let i = 0; i < changeArray.length; i++) {
        sum = sum + changeArray[i];  // Add the current element to the sum
    }

    if (sum >= totalDue) {  // Check if the sum is greater than or equal to totalDue
        return true;
    } else {
        return false;
    }
}

let amountCash1 = [1, 2, 5];
let due1 = 10;
let result1 = canPay(amountCash1, due1);

let amountCash2 = [1, 5, 5];
let due2 = 10;
let result2 = canPay(amountCash2, due2);

console.log(result1);
console.log(result2);
