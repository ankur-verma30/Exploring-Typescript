let input=document.querySelector('input') //the type of this input element is HTMLInputElement | null

// let fname=document.querySelector('#fname')!; //now the type is Element | null
// fname.value  this is giving error because all the element of the html does not have value property before type casting

//After Type Casting Method 1 of type Casting
let fname=<HTMLInputElement>document.querySelector('#fname')!;
fname.value='Ankur Verma';

//Method 2 using as keyword. We use as keyword where we cannot use angular brackets like in React code where the angular brackets will be treated as a jsx code so we have to use as for type casting
let fname1=document.querySelector('#fname')! as HTMLInputElement;
fname.value='Isha Gupta';

//if the element can return null value and we are not sure then we can use if statement and then we can use typecasting
// if(fname !==null) (fname as HTMLInputElement).value='John' something like that