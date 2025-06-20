/*
Interfaces in Typescript acts as blueprints or contracts that define the structure(properties and methods) of an object. They enforce type saftey, ensuring that objects adhere to the specified format. This leads to several benifits:

Improved Type Checking: The Typescript compiler catches type errors early on development, preventing runtime issues.

Enhanced Code Readability: Interfaces serve as documentation, making code easier to understand and maintain.

Flexibility and Reusability: Interfaces can be extended and reused across different parts of your codebase.
 */

interface UserNames {
  // We can only declare the property, not provide any implementation or initialization
  firstName: string;
  lastName: string;

  greetUsers(): string;
  getFullName(): string;
}

// Using the interface for an object literal
let userName1: UserNames;
userName1 = {
  firstName: 'Ankur',
  lastName: 'Verma',
  greetUsers(): string {
    return "Hello " + this.firstName + ' ' + this.lastName;
  },
  getFullName(): string {
    return this.firstName + ' ' + this.lastName;
  }
}

// Class implementing the interface
class Admin implements UserNames {
  constructor(public firstName: string, public lastName: string) {}

  greetUsers(): string {
    return "Hello " + this.firstName + ' ' + this.lastName;
  }

  getFullName(): string {
    return this.firstName + ' ' + this.lastName;
  }
}

// Another class implementing the interface
class Member implements UserNames {
  constructor(public firstName: string, public lastName: string) {}

  greetUsers(): string {
    return "Hello " + this.firstName + ' ' + this.lastName;
  }

  getFullName(): string {
    return this.firstName + ' ' + this.lastName;
  }
}

// Example usage:
const admin = new Admin('Ankur', 'Verma');
console.log(admin.greetUsers());
console.log(admin.getFullName());

const member = new Member('John', 'Doe');
console.log(member.greetUsers());
console.log(member.getFullName());

console.log(userName1.greetUsers());
console.log(userName1.getFullName());