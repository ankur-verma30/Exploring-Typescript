//Inheritance allows us to create new classes based on existing class. The existing class is called a base class or parent class. And the new class is called as the derived class or child class.

//1)By using inheritance,we can avoid code duplication. It allows us to reuse a piece of code.
//2)This promoted code maintainability and it makes our code more organized.

class Person {
  constructor(public name: string, public dob: string, public gender: string) {
    console.log("This is a constructor");
  }

  calculateAge() {
    return new Date().getFullYear() - new Date(this.dob).getFullYear();
  }
}

class employeeData extends Person{
    
constructor(name: string, dob: string, gender: string,public salary:number,public bonus:number){
    super(name,dob,gender);
}

getSalary(){
    return this.salary+this.bonus;
}
}

const empName=new employeeData('Ankur Verma','2003-08-30','Male',3000,300);
console.log(empName);
console.log(empName.calculateAge());