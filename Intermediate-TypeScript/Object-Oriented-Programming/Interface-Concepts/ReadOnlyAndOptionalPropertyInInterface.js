// Class implementing the interface
var Admins = /** @class */ (function () {
    function Admins(firstName, lastName, company, location) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.company = company;
        this.location = location;
    }
    Admins.prototype.greetUsers = function () {
        return "Hello " + this.getFullName();
    };
    Admins.prototype.getFullName = function () {
        return this.firstName + " " + this.lastName;
    };
    return Admins;
}());
// Another class implementing the interface
var Members = /** @class */ (function () {
    function Members(firstName, lastName, company) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.company = company;
    }
    Members.prototype.greetUsers = function () {
        return "Hello " + this.firstName + " " + this.lastName;
    };
    Members.prototype.getFullName = function () {
        return this.firstName + " " + this.lastName;
    };
    return Members;
}());
function displayGreetMessage(user) {
    console.log(user.greetUsers());
}
var member1; //if we do not do this we can still change the property of readonly property
// const admin1=new Admins('Ankur','Verma','Google'); // here the type of this admin1 variable is Admins which does not have any readonly property so we can edit the property; To prevent this we use
var admin1;
admin1 = new Admins("Ankur", "Verma", "Google", 'Lucknow'); //optional property is included
member1 = new Members("Isha", "Gupta", "Meta");
displayGreetMessage(admin1);
console.log(admin1);
displayGreetMessage(member1);
console.log(member1);
