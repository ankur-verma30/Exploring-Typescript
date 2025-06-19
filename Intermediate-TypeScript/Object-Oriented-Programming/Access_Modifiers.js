var Employee = /** @class */ (function () {
    function Employee(name, sal, loc, eligible, hike) {
        this.empName = "Ankur";
        this.salary = 3000;
        this.baseLocation = "BTM Layout";
        this.isEligible = false;
        this.hikePercent = 10;
        this.empName = name;
        this.salary = sal;
        this.baseLocation = loc;
        this.isEligible = eligible;
        this.hikePercent = hike;
    }
    Employee.prototype.getSalary = function () {
        if (this.isEligible) {
            return this.getNewSalary();
        }
        return this.salary;
    };
    //By default the variable and method is public
    Employee.prototype.getNewSalary = function () {
        return this.salary + this.salary * (this.hikePercent / 100);
    };
    return Employee;
}());
var emp = new Employee("Ankur Verma", 4000, "BTM Layout", true, 15);
console.log(emp);
console.log(emp.getSalary());
