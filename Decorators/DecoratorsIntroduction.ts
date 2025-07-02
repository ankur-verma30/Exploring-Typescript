//Decorators are a powerful syntactic feature that allows you to add functionality or modify the behaviour of class,methods, properties & parameters at runtime.

//Decorators are essentially functions that are applied using @symbol before the declaration you want to decorate.

function Logger(target:Function){
    console.log('Logging...')
    console.log(target)//the target is the class above which this decorator is being used
}
//before the constructor of the class get called the decorator will be executed
@Logger
class User{
    constructor(public name:string,public age:number){
console.log('User Class Constructor called...');
    }
}

const u=new User('Ankur Verma',23);//even if we do not create a instance a logger message will run whenever the class is encountered