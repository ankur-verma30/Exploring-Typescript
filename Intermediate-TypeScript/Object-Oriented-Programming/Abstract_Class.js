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
var FullName = /** @class */ (function () {
    function FullName(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        console.log('Employee is Created');
    }
    return FullName;
}());
//We cannot create the object of the abstract class
//if the method of the class is abstract then the class should also be extract
var PermanentEmployee = /** @class */ (function (_super) {
    __extends(PermanentEmployee, _super);
    function PermanentEmployee(firstName, lastName, monthlySalary) {
        var _this = _super.call(this, firstName, lastName) || this;
        _this.monthlySalary = monthlySalary;
        console.log('Permanent Employee');
        return _this;
    }
    PermanentEmployee.prototype.getSalary = function () {
        return this.monthlySalary * 12;
    };
    return PermanentEmployee;
}(FullName));
var ContractEmployee = /** @class */ (function (_super) {
    __extends(ContractEmployee, _super);
    function ContractEmployee(firstName, lastName, hourlySalary, days) {
        var _this = _super.call(this, firstName, lastName) || this;
        _this.hourlySalary = hourlySalary;
        _this.days = days;
        console.log("Contract Employee");
        return _this;
    }
    ContractEmployee.prototype.getSalary = function () {
        return this.hourlySalary * 9 * this.days;
    };
    return ContractEmployee;
}(FullName));
var Permanentemp1 = new PermanentEmployee('Ankur', 'Verma', 1000);
console.log(Permanentemp1.getSalary());
var Contractemp2 = new ContractEmployee('Isha', 'Gupta', 10, 30);
console.log(Contractemp2.getSalary());
