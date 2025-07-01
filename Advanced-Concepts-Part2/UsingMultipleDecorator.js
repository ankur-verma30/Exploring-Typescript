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
function LoggerDecorator(logMsg) {
    console.log("Logger Decoratory Function");
    function Logger(target) {
        console.log(logMsg);
    }
    return Logger;
}
function Template(template, elementId) {
    console.log("Template Decoratory Function");
    return function (target) {
        const userInstance = new target();
        console.log("This is instance inside the decorator factory ", userInstance);
        const container = document.getElementById(elementId);
        if (container) {
            container.innerHTML = template;
            const h2 = container.querySelector("h2");
            if (h2)
                h2.textContent = "Hello Mr. " + userInstance.name;
        }
    };
}
let UserInfo = class UserInfo {
    constructor(name = "Default", age = 0) {
        this.name = name;
        this.age = age;
        console.log("User Class Constructor called...");
    }
};
UserInfo = __decorate([
    LoggerDecorator("This is custom logger..."),
    Template("<h2>Dynamic Header</h2>", "container"),
    __metadata("design:paramtypes", [String, Number])
], UserInfo);
const userData = new UserInfo("Ankur Verma", 23);
