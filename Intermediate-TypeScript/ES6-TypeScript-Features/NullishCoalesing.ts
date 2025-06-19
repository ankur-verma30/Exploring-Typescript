//This operator is a logical operator that return its right-hand operand when its left-hand side operand is null or undefined, and otherwise return its left-hand side operand.

// In other words Nullish Coalesing operator returns the first argument if it's not null/undefined. Otherwise , the second one. The Nullish Coalescing operator is written as two question marks ??. 

const value=''; //if the value is not null or undefined even if it is a falsy value it will be assigned to the variable 

let storage=value ?? 20;
console.log(storage);