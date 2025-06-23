var Administation = /** @class */ (function () {
    function Administation(firstName, lastName, company, location) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.company = company;
        this.location = location;
    }
    Administation.prototype.greetDemo = function () {
        console.log('This is Administation');
    };
    Administation.prototype.getFullName = function () {
        return this.firstName + ' ' + this.lastName;
    };
    Administation.prototype.getRole = function () {
        return 'Administation Role';
    };
    return Administation;
}());
var Admin;
Admin = new Administation('Ankur', 'Verma', 'Google', 'Lucknow');
Admin.greetDemo();
var role = Admin.getRole();
console.log(role);
