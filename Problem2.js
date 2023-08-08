// Problem-2:
function matchFinder(string1, string2) {
    if (typeof string1 === "string" && typeof string2 === "string") {
        if (string1.includes(string2)) {
            return true;
        } else {
            return false;
        }
    } else {
        return 'Input is not a valid string';
    }
}

let result1 = matchFinder("John Doe", "ohn");
let result2 = matchFinder("JavaScript", "Code");
let result3 = matchFinder("Peter Parker", "Pen");
let result4 = matchFinder("Peter Parker", "pet");

console.log(result1);
console.log(result2);
console.log(result3);
console.log(result4);
