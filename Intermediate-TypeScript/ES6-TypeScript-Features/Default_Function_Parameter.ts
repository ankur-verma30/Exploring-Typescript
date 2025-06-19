function printDetails(name:string,age:number,gender:string='Male'){
    const message=`Hi my name is ${name}. And I am ${age} years old ${gender}.`
    console.log(message);
}

printDetails('John', 28);