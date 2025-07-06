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
function required(target, propName) {
    validateObject[target.constructor.name] = Object.assign(Object.assign({}, validateObject[target.constructor.name]), { [propName]: ['required'] });
}
function minlength(length) {
    return function (target, propName) {
        validateObject[target.constructor.name] = Object.assign(Object.assign({}, validateObject[target.constructor.name]), { [propName]: ['minlength'] });
    };
}
function positiveNumber(target, propName) {
    validateObject[target.constructor.name] = Object.assign(Object.assign({}, validateObject[target.constructor.name]), { [propName]: ['positiveNumber'] });
}
const validateObject = {};
function validate(obj) {
    let isValid = true;
    const validateClass = validateObject[obj.constructor.name];
    if (!validateClass) {
        return true;
    }
    for (let prop in validateClass) {
        for (let validator of validateClass[prop]) {
            switch (validator) {
                case 'required':
                    isValid = isValid && !!obj[prop];
                    break;
                case 'minlength':
                    isValid = isValid && obj[prop].length < 3;
                    break;
                case 'positiveNumber':
                    isValid = isValid && obj[prop].length < 0;
                    break;
            }
        }
    }
    return isValid;
}
class UserNames {
    constructor(uname, age) {
        this.username = uname;
        this.age = age;
    }
}
__decorate([
    required,
    minlength(3),
    __metadata("design:type", String)
], UserNames.prototype, "username", void 0);
__decorate([
    positiveNumber,
    __metadata("design:type", Number)
], UserNames.prototype, "age", void 0);
const u1 = new UserNames('john', 28);
const u2 = new UserNames('', 30);
if (!validate(u2)) {
    alert("Invalid Input.");
}
else {
    console.log('user created successfully');
}
