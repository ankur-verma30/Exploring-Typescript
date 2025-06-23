type SumFn = (num1: number, num2: number) => number;
let add: SumFn;
//There is no concept of interface in javascript
add = (n1, n2) => n1 + n2;

interface SumInterface {
  (num1: number, num2: number): number;
}

let AddTwoNumbers: SumInterface = (num1, num2) => num1 + num2;
console.log(AddTwoNumbers(5, 6));
