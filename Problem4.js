// Problem-4:

function sortMaker(arr) {
    // Check for negative numbers in the array
    if (arr.some(num => num < 0)) {
        return "Invalid";
    }
    if (arr[0] === arr[1]) {
        return "equal"
    }
    // Sort the array
    return arr.slice().sort(function (a, b) {
        return b - a; // Sort in descending order
    });
}

var unsortedArray1 = [3, -6]; // Contains a negative number
var result1 = sortMaker(unsortedArray1);

var unsortedArray2 = [4, 2]; // All positive numbers
var result2 = sortMaker(unsortedArray2);

var unsortedArray3 = [4, 4]; // All positive numbers
var result3 = sortMaker(unsortedArray3);

console.log(result1); // Output: Invalid
console.log(result2); // Output: [8, 6, 4, 2, 0]
console.log(result3); // Output: [8, 6, 4, 2, 0]
