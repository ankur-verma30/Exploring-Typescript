// Learning variables

const str = "Hello, world!"; //we have to initialize immediately and can not reassign it later
console.log("Learning TypeScript");

function sum(num1: number, num2: number) {
  return num1 + num2;
}

//can assign types to variables also
let num3: number = 100;
console.log(num3, typeof num3);

let num4 = 10;

console.log(sum(10, 20));
console.log(sum(20, 20));

//object in typeScript

let person: { name: string; age: number } = { name: "John", age: 30 };
console.log(person);

person = { name: "Ankur", age: 30 }; //cannot add extra properties structure is fixed in typeScript
console.log(person);

//nested objects in typeScript

let student: {
  name: string;
  age: number;
  gender: string;
  address: {
    city: string;
    country: string;
  };
} = {
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
let human = ["John", 28, "Male", "Software Engineer"];
let numbers = [22, 23, 4, 56, 34, 34, 3532, 44];
// numbers.push("Hello world!"); will give an errro but compiles if we do it forcefully and in javascript it may not give an error
console.log(numbers);

//tupes
let employee = ["John", 28, "Male", "2000", "Software Engineer", true]; //this is the regular array

//tuple is a array
let employee1: [string, number, string, boolean] = [
  "Ankur",
  21,
  "Software Engineer",
  true,
];
console.log(employee1);

employee1.push(100);
console.log('Updated employee',employee1);

const user = {
  name: "Ankur Verma",
  age: 21,
  role: 0,
};
console.log(user);

//using enum syntax
enum UserPositions {
  ADMIN='native',
  READ_ONLY='Ankur',
  WRITE_ONLY=200,
  READ_WRITE,
}
const newUser = {
  name: "Ankur Verma",
  age: 21,
  gender: "Male",
  roles: UserPositions.ADMIN,
};

console.log(newUser);

//any data type can create variable,array or object
let dynamicDataType: any = 23;

let test;
console.log(test, typeof test);

/*
let userData: {name:String, age:Number} | null=null;
function getUser(){
  const userName: String='John';
  const userAge: Number=28,
  userData={name:userName,age:userAge};
  return userData;
}
*/

function printStatus(message: string, code: Number | string) {
  if (typeof code === "string") code = code.trim();
  console.log(`The message is ${message} and the code is ${code}`);
}

printStatus("dummy text", 500);
printStatus("dummy text", " 500");

//Literal Type
const str2 = "Hello World!"; //this is a literal type its type is it's value
let str3 = "Some String"; //But this is a string type

function roleMessage(role: 'admin' | 'read') {
  switch (role) {
    case "admin":
      console.log("You are a admin in this site");
      break;
    case "read":
      console.log("You have read condition");
      break;
    default:
      console.log("Unknown user permission");
  }
}


roleMessage('admin') //if we passing anything else from admin or read then it will give an error