var People = /** @class */ (function () {
    function People(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        People.count++;
    }
    People.prototype.getFullName = function () {
        return this.firstName + ' ' + this.lastName;
    };
    People.count = 0;
    return People;
}());
var p1 = new People('Ankur', 'Verma');
console.log(p1, People.count);
var p2 = new People('Isha', 'Gupta');
console.log(p2, People.count);
