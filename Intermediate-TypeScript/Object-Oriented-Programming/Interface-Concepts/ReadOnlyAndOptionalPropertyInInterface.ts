interface UserNames {
  firstName: string;
  lastName: string;
  readonly company: string;
  location?:string //optional property
  greetUsers(): string;
  getFullName(): string;
}
// Class implementing the interface
class Admins implements UserNames {
  constructor(
    public firstName: string,
    public lastName: string,
    public company: string,
    public location?:string
  ) {}

  greetUsers(): string {
    return "Hello " + this.getFullName();
  }

  getFullName(): string {
    return this.firstName + " " + this.lastName;
  }
}

// Another class implementing the interface
class Members implements UserNames {
  constructor(
    public firstName: string,
    public lastName: string,
    public company: string
  ) {}

  greetUsers(): string {
    return "Hello " + this.firstName + " " + this.lastName;
  }

  getFullName(): string {
    return this.firstName + " " + this.lastName;
  }
}

function displayGreetMessage(user: UserNames) {
  console.log(user.greetUsers());
}
let member1: UserNames; //if we do not do this we can still change the property of readonly property

// const admin1=new Admins('Ankur','Verma','Google'); // here the type of this admin1 variable is Admins which does not have any readonly property so we can edit the property; To prevent this we use
let admin1: UserNames;
admin1 = new Admins("Ankur", "Verma", "Google",'Lucknow');//optional property is included
member1 = new Members("Isha", "Gupta", "Meta");

displayGreetMessage(admin1);
console.log(admin1);
displayGreetMessage(member1);
console.log(member1);
