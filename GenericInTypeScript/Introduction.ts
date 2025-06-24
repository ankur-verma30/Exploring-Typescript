//Generics in TS are essentially placeholders for data types. They allow you to write flexible and reusable code that can work with different types of data without sacrificing type saftey.

//At time of creation we don't know what kind of array we will recieve
function swap(arr: any[], index1: number, index2: number): void {
  console.log("Before swap ", arr);
  let num: number = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = num;
  console.log("After swap", arr);
}
//if we return this it can return string or number array so if we have to perform some string operation on any type it will give an error
swap([1, 2, 3, 4], 1, 2);
swap(["Hello", "How", "are", "you"], 1, 2);

//Instead of using any type we can use generics a generalized function that can be used with any data type
function swapValues<T>(arr: T[], index1: number, index2: number): T[] {
  console.log("Before Swapping", arr);
  let num: T = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = num;
  console.log("After Swapping");
  return arr;
}
console.log("Using Generics");
console.log(swapValues([1, 2, 3, 4], 1, 2));
console.log(swapValues(["Hello", "How", "are", "you"], 1, 2));

//BuiltIn Type 1)Array is a Built in Generic Type
const num: Array<number> = [1, 2, 3];
console.log("Num is", num);

//BuiltIn Type 2) Promise is also a generic type
const prom: Promise<number> = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve → a function you call to mark the promise as fulfilled (success).
    //reject → a function you call to mark the promise as rejected (failure).
    resolve(100);
  }, 1000);
});
//1) Method 1 Using .then() and .catch()
prom
  .then((value) => {
    console.log("Promise resolved with using .then():", value);
  })
  .catch((error) => {
    console.error("Promise rejected with:", error);
  });

/*
📝 What happens?
After 1 second, the promise resolves with 100.
The .then() callback runs → prints:
Promise resolved with: 100
*/

const prom1: Promise<number> = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(100);
  }, 1000);
});
//Method 2) Using Async/Await
async function usePromise() {
  try {
    const result = await prom1;
    console.log("Promise resolved with using async/await:", result);
  } catch (error) {
    console.error("Promise rejected with:", error);
  }
}
usePromise();
/*
📝 What happens?
await pauses the function until the promise resolves.
After 1 second, prints:
Promise resolved with: 100
*/
//BuiltIn Type 3) Objects are also generic 

//There is no concept of generics in Javascript
