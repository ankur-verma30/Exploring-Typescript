"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
function Logger(target, methodName, descriptors) {
    console.log("Logger Decorator Called");
    console.log("Target of decorator", target);
    console.log("Method Name", methodName);
    console.log("Property Descriptor", descriptors);
}
function param(target, methodName, indexOfParam) {
    console.log("Param Decorator called");
    console.log("Target of decorator ", target);
    console.log("Name of method", methodName);
    console.log("Index of Parameter ", indexOfParam);
}
class Person {
    constructor(name) {
        this.name = name;
    }
    calculateAge(dob) { }
}
__decorate([
    Logger,
    __param(0, param),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], Person.prototype, "calculateAge", null);
const p = new Person("Ankur Verma");
p.calculateAge("06-05-2003");
