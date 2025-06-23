interface Demo extends Roles{
    firstName:string,
    lastName:string,
    readonly company:string,
    location?:string
    
    greetDemo():void;
    getFullName():string;
}


interface Roles{
getRole():string;
}

class Administation implements Demo{
    constructor(public firstName:string,public lastName:string, public readonly company:string, public location?:string){}

    greetDemo(): void {
        console.log('This is Administation');
    }

    getFullName(): string {
        return this.firstName+' '+this.lastName;
    }

    getRole(): string {
        return 'Administation Role';
    }
}

let Admin:Demo;
Admin=new Administation('Ankur','Verma','Google','Lucknow');
Admin.greetDemo();
const role=Admin.getRole();
console.log(role)