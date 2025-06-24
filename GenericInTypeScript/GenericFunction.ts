function swapValues<T>(arr: T[], index1: number, index2: number): T[] {
  console.log("Before Swapping", arr);
  //Array Destructuring
  [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
  console.log("After Swapping");
  return arr;
}

console.log(swapValues([1, 2, 3, 4], 1, 2));
console.log(swapValues(["Hello", "How", "are", "you"], 1, 2));

//Using Multiple Generics now we can only pass objects but of any kind
function expand<T extends object, U extends object>(obj1: T , obj2: U) {
  //we are using two different placeholders because both the object can be different
// Generic Constraints : It allow you to define the limitation of the types of data that can be used with generic code.
  return Object.assign(obj1, obj2);
}



//both the objects are different in the parameter
let combined = expand(
  { name: "Ankur Verma", age: 23 },
  { name: "Isha Gupta", gender: "Female" } // this is the intersection of both the properties
);
console.log(combined) //typescript does not know whether this new object have a name property or not so it is giving an error
