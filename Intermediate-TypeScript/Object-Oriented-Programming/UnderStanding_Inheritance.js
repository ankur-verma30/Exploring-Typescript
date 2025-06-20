//Inheritance allows us to create new classes based on existing class. The existing class is called a base class or parent class. And the new class is called as the derived class or child class.
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//1)By using inheritance,we can avoid code duplication. It allows us to reuse a piece of code.
//2)This promoted code maintainability and it makes our code more organized.
var Person = /** @class */ (function () {
    function Person(name, dob, gender) {
        this.name = name;
        this.dob = dob;
        this.gender = gender;
        console.log("This is a constructor");
    }
    Person.prototype.calculateAge = function () {
        return new Date().getFullYear() - new Date(this.dob).getFullYear();
    };
    return Person;
}());
var employeeData = /** @class */ (function (_super) {
    __extends(employeeData, _super);
    function employeeData(name, dob, gender, salary, bonus) {
        var _this = _super.call(this, name, dob, gender) || this;
        _this.salary = salary;
        _this.bonus = bonus;
        return _this;
    }
    employeeData.prototype.getSalary = function () {
        return this.salary + this.bonus;
    };
    return employeeData;
}(Person));
var empName = new employeeData('Ankur Verma', '2003-08-30', 'Male', 3000, 300);
console.log(empName);
console.log(empName.calculateAge());
