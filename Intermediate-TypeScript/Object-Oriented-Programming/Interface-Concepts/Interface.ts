/*
Interfaces in Typescript acts as blueprints or contracts that define the structure(properties and methods) of an object. They enforce type saftey, ensuring that objects adhere to the specified format. This leads to several benifits:

Improved Type Checking: The Typescript compiler catches type errors early on development, preventing runtime issues.

Enhanced Code Readability: Interfaces serve as documentation, making code easier to understand and maintain.

Flexibility and Reusability: Interfaces can be extended and reused across different parts of your codebase.
 */

interface UserNames1 {
  // We can only declare the property, not provide any implementation or initialization
  firstName: string;
  lastName: string;
//we can do these thing with type keyword also
  greetUsers(): string;
  getFullName(): string;
}

// Using the interface for an object literal
let userName01: UserNames1 = {
  firstName: 'Ankur',
  lastName: 'Verma',
  greetUsers(): string {
    return "Hello " + this.getFullName();
  },
  getFullName(): string {
    return this.firstName + ' ' + this.lastName;
  }
}

// Class implementing the interface
class Admin1 implements UserNames1 {
  constructor(public firstName: string, public lastName: string) {}

  greetUsers(): string {
    return "Hello " + this.getFullName()
  }

  getFullName(): string {
    return this.firstName + ' ' + this.lastName;
  }
}

// Another class implementing the interface
class Member1 implements UserNames1 {
  constructor(public firstName: string, public lastName: string) {}

  greetUsers(): string {
    return "Hello " + this.firstName + ' ' + this.lastName;
  }

  getFullName(): string {
    return this.firstName + ' ' + this.lastName;
  }
}

// Example usage:
//Any class which is implementing this interface we can pass its instance to user parameter
function displayGreetMessages(user:UserNames1){
console.log(user.greetUsers());
  
}

const adm1=new Admin1('Ankur','Verma');
const mem1=new Member1('Isha','Gupta');

displayGreetMessages(adm1);
displayGreetMessages(mem1);