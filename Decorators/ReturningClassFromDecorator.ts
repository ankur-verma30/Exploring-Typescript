function Logger(target:new (...args:any[])=>{}):any{
class LoginClass extends target{
    static company:string="Google";
    constructor(...args:any[]){
        super(...args)
        console.log("Creating a new LoggingClass Instance");
    }
}
return LoginClass;
}

@Logger  //modifying the existing class
class Persons1{
    name:string;

    constructor(name:string){
        this.name=name
    }
}

const p1=new Persons1("Ankur");
console.log(p1);