// Problem-5:

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
