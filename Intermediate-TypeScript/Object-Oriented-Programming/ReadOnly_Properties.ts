//The read-only properties are those properties whose value is initialzed ony once and it cannot be changed later.

//Read only members of a class can be accessed outside the class but its value cannot be changed

//And since they cannot be changed outside the class, they need to be initialized at declaration or should be initialized inside the class constructor.

class EmployeeDetails {
  constructor(
    public readonly empId:number, //only used with class property similar to const
    //but in const we initialize when the property is declared but with readonly we initilaize when the object is created using constructor 
    public empName: string,
    private salary: number,
    public baseLocation: string,
    public isEligible: boolean,
    private hikePercent: number
  ) {
    console.log('New User Created');
  }

  getSalary() {
    if (this.isEligible) {
     return this.getNewSalary();
    }
    return this.salary; 
  }
  //By default the variable and method is public
  private getNewSalary(){
    return this.salary+this.salary*(this.hikePercent/100);
  }
}

const employee1 = new EmployeeDetails(201,"Ankur Verma", 4000, "BTM Layout", true, 15);
console.log(employee1);
console.log(employee1.getSalary());
