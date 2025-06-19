function print(message) {
    console.log(message);
}
var sum = function (num1, num2) {
    return (num1 + num2);
};
var SumOfNumbers = function (num1, num2) {
    return num1 + num2;
};
//For single line functions we remove curly braces and return keyword 
var increment = function (num) { return num + 1; };
// and if we have one parameter then paranthesis is also not required 
//But if we use curly braces we have to explicitly write the return keyword
// const SumOfNumbers=(num1:number,num2:number):number=> num1+num2;
var button = document.getElementById('btn');
button === null || button === void 0 ? void 0 : button.addEventListener('click', function () { return console.log('Button Clicked'); });
