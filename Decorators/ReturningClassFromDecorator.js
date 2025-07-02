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
function Logger(target) {
    class LoginClass extends target {
        constructor(...args) {
            super(...args);
            console.log("Creating a new LoggingClass Instance");
        }
    }
    LoginClass.company = "Google";
    return LoginClass;
}
let Persons1 = class Persons1 {
    constructor(name) {
        this.name = name;
    }
};
Persons1 = __decorate([
    Logger,
    __metadata("design:paramtypes", [String])
], Persons1);
const p1 = new Persons1("Ankur");
console.log(p1);
