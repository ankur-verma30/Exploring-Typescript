class Users {
  constructor(
    //if we write the property as any access modifier and the name of property as a parameter in the constructor then it creates a property behind the scenes
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

const u = new Users("Ankur Verma", 4000, "BTM Layout", true, 15);
console.log(u);
console.log(u.getSalary());
