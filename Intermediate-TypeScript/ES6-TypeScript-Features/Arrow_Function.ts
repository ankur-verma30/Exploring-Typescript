function print(message:string):void{
console.log(message);
}

const sum=function(num1:number,num2:number):number{
return (num1+num2);
}

const SumOfNumbers=function(num1:number,num2:number):number{
return num1+num2;
}

//For single line functions we remove curly braces and return keyword 
const increment:(n:number)=>number=num=> num+1;
// and if we have one parameter then paranthesis is also not required 
//But if we use curly braces we have to explicitly write the return keyword
// const SumOfNumbers=(num1:number,num2:number):number=> num1+num2;

const button =document.getElementById('btn');

button?.addEventListener('click',()=> console.log('Button Clicked'));