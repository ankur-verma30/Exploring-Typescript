var Users = /** @class */ (function () {
    function Users(
    //if we write the property as any access modifier and the name of property as a parameter in the constructor then it creates a property behind the scenes
    empName, salary, baseLocation, isEligible, hikePercent) {
        this.empName = empName;
        this.salary = salary;
        this.baseLocation = baseLocation;
        this.isEligible = isEligible;
        this.hikePercent = hikePercent;
        console.log('New User Created');
    }
    Users.prototype.getSalary = function () {
        if (this.isEligible) {
            return this.getNewSalary();
        }
        return this.salary;
    };
    //By default the variable and method is public
    Users.prototype.getNewSalary = function () {
        return this.salary + this.salary * (this.hikePercent / 100);
    };
    return Users;
}());
var u = new Users("Ankur Verma", 4000, "BTM Layout", true, 15);
console.log(u);
console.log(u.getSalary());
