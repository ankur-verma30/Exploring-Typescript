const person=['John','Smith',28];
const fname=person[0];
const lname=person[1];
const age=person[2];

//array destructuring
const [firstName,lastName,ageNumber,gender='male']=person;
//1)It is not necessary that the destructuring variables should be less than or equal to the variable used,it can be greater than they will all be just initialize with undefined

//2) can also add the default value for the destructured variable

//3)you can omit the secondName after writing the comma

//4)even after the destructuring the original array remain intact
console.log(firstName,lastName,ageNumber);

