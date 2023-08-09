// Problem-4:
function findAddress(obj) {
    const address = {
        street: 10,
        house: "15A",
        society: "Earth Perfect"
    };

    const values = Object.values(address);
    return values;
}

var result = findAddress();

console.log(result);
