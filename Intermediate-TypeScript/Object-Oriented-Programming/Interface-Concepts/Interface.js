/*
Interfaces in Typescript acts as blueprints or contracts that define the structure(properties and methods) of an object. They enforce type saftey, ensuring that objects adhere to the specified format. This leads to several benifits:

Improved Type Checking: The Typescript compiler catches type errors early on development, preventing runtime issues.

Enhanced Code Readability: Interfaces serve as documentation, making code easier to understand and maintain.

Flexibility and Reusability: Interfaces can be extended and reused across different parts of your codebase.
 */
// Using the interface for an object literal
var userName1 = {
    firstName: 'Ankur',
    lastName: 'Verma',
    greetUsers: function () {
        return "Hello " + this.getFullName();
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
        return "Hello " + this.getFullName();
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
//Any class which is implementing this interface we can pass its instance to user parameter
function displayGreetMessage(user) {
    console.log(user.greetUsers());
}
var admin = new Admin('Ankur', 'Verma');
var member = new Member('Isha', 'Gupta');
displayGreetMessage(admin);
displayGreetMessage(member);
