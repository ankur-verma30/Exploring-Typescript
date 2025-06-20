
class PersonName {
  constructor(public name: string, protected dob: string, public gender: string) {
    console.log("This is a constructor");
  }

  calculateAge() {
    return new Date().getFullYear() - new Date(this.dob).getFullYear();
  }
}

class empData extends PersonName{
    
constructor(name: string, dob: string, gender: string,public salary:number,public bonus:number){
    super(name,dob,gender);
}

getSalary(){
    return this.salary+this.bonus;
}

calculateAge(): number {
    return new Date().getFullYear() - new Date(this.dob).getFullYear();
}
}

const empName1=new empData('Ankur Verma','2003-08-30','Male',3000,300);
console.log(empName1);
console.log(empName1.calculateAge());