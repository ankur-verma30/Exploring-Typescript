//The Rest pattern in ES6 does the exact opposite of spread operator. Rest pattern is also denoted by (...) three dots and it packs a list of value into a single array.

let [a,b,...rest]=[1,2,3,4,5]; // a=1 and b=2 and remaining all values are assigned to rest [3,4,5]
console.log(rest); 
//1) rest operator always comes on the left side of the assignment operator

function addNumbers(...numbers:number[]):number{
    let sum:number=0;
    for(let num of numbers){
        sum=sum+num;
    }
        return sum;
}

console.log(addNumbers(1,2,3,4,5,6)) 