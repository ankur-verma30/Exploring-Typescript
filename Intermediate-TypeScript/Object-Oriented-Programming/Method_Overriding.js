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
var PersonName = /** @class */ (function () {
    function PersonName(name, dob, gender) {
        this.name = name;
        this.dob = dob;
        this.gender = gender;
        console.log("This is a constructor");
    }
    PersonName.prototype.calculateAge = function () {
        return new Date().getFullYear() - new Date(this.dob).getFullYear();
    };
    return PersonName;
}());
var empData = /** @class */ (function (_super) {
    __extends(empData, _super);
    function empData(name, dob, gender, salary, bonus) {
        var _this = _super.call(this, name, dob, gender) || this;
        _this.salary = salary;
        _this.bonus = bonus;
        return _this;
    }
    empData.prototype.getSalary = function () {
        return this.salary + this.bonus;
    };
    empData.prototype.calculateAge = function () {
        return new Date().getFullYear() - new Date(this.dob).getFullYear();
    };
    return empData;
}(PersonName));
var empName1 = new empData('Ankur Verma', '2003-08-30', 'Male', 3000, 300);
console.log(empName1);
console.log(empName1.calculateAge());
