function greetUser(user) {
    var greetingMsg = 'Hello ' + user.name;
    console.log(greetingMsg);
}
var userName = { name: "Ankur Verma", age: 23 };
//if we do not do that
var greet = greetUser;
// this code will execute as the type of greet becomes any so if we want greet to only work as function type we have to use function as a type and assign it to greet
// greet=100; solved 1 problem still have 1 problem
function sum(num1, num2) {
    return num1 + num2;
}
greet(userName);
//hence it will give error because of this  :(usr:User)=>void used in greet initialization
// greet=sum;
// console.log(greet(10,20));// works as now the type of the greet is function so any function can be assigned to greet which we do not want
//Hence the signature of the function which matches to greet signature can only be assigned to greet
function isEligible(user) {
    console.log(user.age >= 18);
}
greet = isEligible;
greet(userName);
