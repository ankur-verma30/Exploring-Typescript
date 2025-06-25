//Decorator Factory is a function that return a decorator function. They provide a way to create decorators that can be customized based on configuration options or parameters.

//This allow more flexibility and reusability in your decorators.

function LoggerDecorator(logMsg:string){ //this is decorator factory
    //used to pass the data outside the logger function 
    function Logger(target:Function){
    console.log(logMsg);
    console.log(target)
}
return Logger;
}

// @Logger //we do not paranthesis to call this, it is automatically called at runtime
@LoggerDecorator("This is the logger...")
class Users{
    constructor(public name:string,public age:number){
console.log('User Class Constructor called...');
    }
}

const user=new Users('Ankur Verma',23);