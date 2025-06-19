class Employee {
  empName: string = "Ankur";
  private salary: number = 3000;
  baseLocation: string = "BTM Layout";
  isEligible: boolean = false;
  private hikePercent: number = 10;

  constructor(
    name: string,
    sal: number,
    loc: string,
    eligible: boolean,
    hike: number
  ) {
    this.empName = name;
    this.salary = sal;
    this.baseLocation = loc;
    this.isEligible = eligible;
    this.hikePercent = hike;
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

const emp = new Employee("Ankur Verma", 4000, "BTM Layout", true, 15);
console.log(emp);
console.log(emp.getSalary());
