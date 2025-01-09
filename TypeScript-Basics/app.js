// Learning variables
var str = "Hello, world!"; //we have to initialize immediately and can not reassign it later
console.log("Learning TypeScript");
function sum(num1, num2) {
    return num1 + num2;
}
//can assign types to variables also
var num3 = 100;
console.log(num3, typeof num3);
var num4 = 10;
console.log(sum(10, 20));
console.log(sum(20, 20));
//object in typeScript
var person = { name: "John", age: 30 };
console.log(person);
person = { name: "Ankur", age: 30 }; //cannot add extra properties structure is fixed in typeScript
console.log(person);
//nested objects in typeScript
var student = {
    name: "Ankur Verma",
    age: 30,
    gender: "Male",
    address: {
        city: "Lucknow",
        country: "India",
    },
};
console.log(student);
//arrays in typeScript
var human = ['John', 28, "Male", "Software Engineer"];
var numbers = [22, 23, 4, 56, 34, 34, 3532, 44];
// numbers.push("Hello world!"); will give an errro but compiles if we do it forcefully and in javascript it may not give an error
console.log(numbers);
//tupes
var employee = ["John", 28, "Male", "2000", "Software Engineer", true]; //this is the regular array
//tuple is a array
var employee1 = ["Ankur", 21, "Software Engineer", true];
console.log(employee1);
var user = {
    name: "Ankur Verma",
    age: 21,
    role: 0,
};
console.log(user);
//using enum syntax
var UserPositions;
(function (UserPositions) {
    UserPositions[UserPositions["ADMIN"] = 0] = "ADMIN";
    UserPositions[UserPositions["READ_ONLY"] = 1] = "READ_ONLY";
    UserPositions[UserPositions["WRITE_ONLY"] = 2] = "WRITE_ONLY";
    UserPositions[UserPositions["READ_WRITE"] = 3] = "READ_WRITE";
})(UserPositions || (UserPositions = {}));
var newUser = {
    name: "Ankur Verma",
    age: 21,
    gender: "Male",
    roles: UserPositions.ADMIN,
};
console.log(newUser);
//any data type can create variable,array or object
var dynamicDataType = 23;
var test;
console.log(test, typeof (test));
