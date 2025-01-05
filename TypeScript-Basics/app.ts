// Learning variables
let num=100 //when we create a variable with let keyword we don't need to initialize it immediately we can do later
num=10000
const str="Hello, world!" //we have to initialize immediately and can not reassign it later

console.log(num,str);
console.log("Learning TypeScript")


function sum(num1: number,num2:number){
return num1 + num2;
}

//can assign types to variables also
let num3:number = 100
console.log(num3,typeof(num3));

let num4=10



console.log(sum(10,20));
console.log(sum(20,20)); //concatenate the string values
