var person = ['John', 'Smith', 28];
var fname = person[0];
var lname = person[1];
var age = person[2];
//array destructuring
var firstName = person[0], lastName = person[1], ageNumber = person[2], _a = person[3], gender = _a === void 0 ? 'male' : _a;
//1)It is not necessary that the destructuring variables should be less than or equal to the variable used,it can be greater than they will all be just initialize with undefined
//2) can also add the default value for the destructured variable
//3)you can omit the secondName after writing the comma
//4)even after the destructuring the original array remain intact
console.log(firstName, lastName, ageNumber);
