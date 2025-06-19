var User = /** @class */ (function () {
    function User(f, l, a, g) {
        this.firstName = 'Ankur';
        this.lastName = 'Verma';
        this.age = 23;
        this.gender = "Male";
        this.firstName = f;
        this.lastName = l;
        this.age = a;
        this.gender = g;
    }
    User.prototype.greetUser = function (salutation) {
        var msg = "".concat(salutation, " ").concat(this.firstName, " ").concat(this.lastName);
        return msg;
    };
    return User;
}());
var user1 = new User("Ankur", "Verma", 23, "Male");
console.log(user1);
console.log(user1.greetUser('Mr'));
