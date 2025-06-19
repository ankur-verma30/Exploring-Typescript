//The read-only properties are those properties whose value is initialzed ony once and it cannot be changed later.
//Read only members of a class can be accessed outside the class but its value cannot be changed
//And since they cannot be changed outside the class, they need to be initialized at declaration or should be initialized inside the class constructor.
var EmployeeDetails = /** @class */ (function () {
    function EmployeeDetails(empId, //only used with class property similar to const
    //but in const we initialize when the property is declared but with readonly we initilaize when the object is created using constructor 
    empName, salary, baseLocation, isEligible, hikePercent) {
        this.empId = empId;
        this.empName = empName;
        this.salary = salary;
        this.baseLocation = baseLocation;
        this.isEligible = isEligible;
        this.hikePercent = hikePercent;
        console.log('New User Created');
    }
    EmployeeDetails.prototype.getSalary = function () {
        if (this.isEligible) {
            return this.getNewSalary();
        }
        return this.salary;
    };
    //By default the variable and method is public
    EmployeeDetails.prototype.getNewSalary = function () {
        return this.salary + this.salary * (this.hikePercent / 100);
    };
    return EmployeeDetails;
}());
var employee1 = new EmployeeDetails(201, "Ankur Verma", 4000, "BTM Layout", true, 15);
console.log(employee1);
console.log(employee1.getSalary());
