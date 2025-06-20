/*
Interfaces in Typescript acts as blueprints or contracts that define the structure(properties and methods) of an object. They enforce type saftey, ensuring that objects adhere to the specified format. This leads to several benifits:

Improved Type Checking: The Typescript compiler catches type errors early on development, preventing runtime issues.

Enhanced Code Readability: Interfaces serve as documentation, making code easier to understand and maintain.

Flexibility and Reusability: Interfaces can be extended and reused across different parts of your codebase.
 */
// Using the interface for an object literal
var userName1;
userName1 = {
    firstName: 'Ankur',
    lastName: 'Verma',
    greetUsers: function () {
        return "Hello " + this.firstName + ' ' + this.lastName;
    },
    getFullName: function () {
        return this.firstName + ' ' + this.lastName;
    }
};
// Class implementing the interface
var Admin = /** @class */ (function () {
    function Admin(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    Admin.prototype.greetUsers = function () {
        return "Hello " + this.firstName + ' ' + this.lastName;
    };
    Admin.prototype.getFullName = function () {
        return this.firstName + ' ' + this.lastName;
    };
    return Admin;
}());
// Another class implementing the interface
var Member = /** @class */ (function () {
    function Member(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    Member.prototype.greetUsers = function () {
        return "Hello " + this.firstName + ' ' + this.lastName;
    };
    Member.prototype.getFullName = function () {
        return this.firstName + ' ' + this.lastName;
    };
    return Member;
}());
// Example usage:
var admin = new Admin('Ankur', 'Verma');
console.log(admin.greetUsers());
console.log(admin.getFullName());
var member = new Member('John', 'Doe');
console.log(member.greetUsers());
console.log(member.getFullName());
console.log(userName1.greetUsers());
console.log(userName1.getFullName());
