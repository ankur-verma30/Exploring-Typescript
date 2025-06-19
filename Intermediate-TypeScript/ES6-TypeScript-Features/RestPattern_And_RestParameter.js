//The Rest pattern in ES6 does the exact opposite of spread operator. Rest pattern is also denoted by (...) three dots and it packs a list of value into a single array.
var _a = [1, 2, 3, 4, 5], a = _a[0], b = _a[1], rest = _a.slice(2); // a=1 and b=2 and remaining all values are assigned to rest [3,4,5]
console.log(rest);
//1) rest operator always comes on the left side of the assignment operator
function addNumbers() {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    var sum = 0;
    for (var _a = 0, numbers_1 = numbers; _a < numbers_1.length; _a++) {
        var num = numbers_1[_a];
        sum = sum + num;
    }
    return sum;
}
console.log(addNumbers(1, 2, 3, 4, 5, 6));
