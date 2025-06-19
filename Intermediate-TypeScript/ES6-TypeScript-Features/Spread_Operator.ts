//It allows operator in typescript to extract elements from an array or properties from an object. It is denoted by three dots(...)

const userName:string[]=['John','Mary','Mark']
console.log(userName)
console.log(...userName);

//Use case of spread operator
//1) Creating the shallow copy of an array
const copyArray=userName; //when some changes is done is any array it will reflect in both arrays because they are pointing to the same array


//so if we want that changes done in one array does not reflect in the main array we have to make the shallow copy using spread opertor
const newCopyArray=[...userName];//so when the element is extracted from the userName it will become the elements of the new array wrapped outside of the userName

console.log(newCopyArray)

const extendedUsers:string[]=['Ravi','Ram',...userName];
console.log(extendedUsers);

//spread Operator on Objects

const personName={
    fname:'Ram',
    age:29,
    gender:'Male'
}

const employee={...personName,salary:'$2000',company:'Google'} ;
console.log(employee);