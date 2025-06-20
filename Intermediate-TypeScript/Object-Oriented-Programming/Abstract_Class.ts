abstract class FullName{
    constructor(public firstName:string,public lastName:string){
        console.log('Employee is Created');
    }
    abstract getSalary():number;
}
//We cannot create the object of the abstract class
//if the method of the class is abstract then the class should also be extract

class PermanentEmployee extends FullName{
    constructor(firstName:string,lastName:string,public monthlySalary:number){
        super(firstName,lastName);
        console.log('Permanent Employee')
    }

    getSalary(): number {
        return this.monthlySalary*12;
    }
}

class ContractEmployee extends FullName{
    constructor(firstName:string,lastName:string,public hourlySalary:number,public days:number){
        super(firstName,lastName);
        console.log("Contract Employee");
    }

    getSalary(): number {
        return this.hourlySalary*9*this.days;
    }
}

const Permanentemp1=new PermanentEmployee('Ankur','Verma',1000);
console.log(Permanentemp1.getSalary());
const Contractemp2=new ContractEmployee('Isha', 'Gupta',10,30);
console.log(Contractemp2.getSalary());
