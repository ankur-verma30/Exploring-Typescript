class User {
  firstName:string='Ankur';
  lastName:string='Verma';
  age: number = 23;
  gender: string = "Male";

  constructor(f: string,l:string, a: number, g: string) {
    this.firstName = f;
    this.lastName=l;
    this.age = a;
    this.gender = g;
  }

  greetUser(salutation:string){
    const msg=`${salutation} ${this.firstName} ${this.lastName}`;
    return msg;
  }
}

const user1 = new User("Ankur","Verma", 23, "Male");


console.log(user1);
console.log(user1.greetUser('Mr'));
