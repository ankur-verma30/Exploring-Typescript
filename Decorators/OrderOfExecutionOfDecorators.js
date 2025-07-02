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
function CLS_DECORATOR(target) {
    console.log("CLASS DECORATOR CALLED!");
}
function PROP_DECORATOR(target, propertyKey) {
    console.log("PROPERTY DECORATOR CALLED!");
}
function ACC_DECORATOR(target, name, descriptor) {
    console.log("ACCESSOR DECORATOR CALLED");
}
function PARAM_DECORATOR(target, paramName, index) {
    console.log("PARAMETER DECORATOR CALLED");
}
function METH_DECORATOR(target, methodName, descriptor) {
    console.log("METHOD DECORATOR CALLED!");
}
let Persons = class Persons {
    constructor(n) {
        this.name = n;
    }
    calculateAge(dob) {
    }
};
__decorate([
    PROP_DECORATOR,
    __metadata("design:type", String)
], Persons.prototype, "name", void 0);
__decorate([
    METH_DECORATOR,
    __param(0, PARAM_DECORATOR),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], Persons.prototype, "calculateAge", null);
Persons = __decorate([
    CLS_DECORATOR,
    __metadata("design:paramtypes", [String])
], Persons);
const newPerson = new Persons("Ankur Verma");
console.log("New Person object ", newPerson);
