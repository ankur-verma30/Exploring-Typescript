//2) The actual implementation:
function addition(num1, num2) {
    if (typeof num1 === 'string' || typeof num2 === 'string')
        return num1.toString() + num2.toString();
    return num1 + num2;
}
console.log(addition("Hello", "World").split(','));
console.log(addition(10, 20));
