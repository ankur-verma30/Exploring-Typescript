type StringOrNumber = string | number;

//1) These are overload signatures — they tell TypeScript what combinations are valid, and what return types to expect for those combinations.
function addition(num1:number,num2:number):number;
function addition(num1:string,num2:string):string;
function addition(num1:number,num2:string):string;
function addition(num1:string,num2:number):string;

//2) The actual implementation:
function addition(num1:StringOrNumber,num2:StringOrNumber){
    if(typeof num1==='string' || typeof num2==='string') return num1.toString()+num2.toString();
    return num1+num2;
}
console.log(addition("Hello", "World").split(','));
console.log(addition(10, 20));
 