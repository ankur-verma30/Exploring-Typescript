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
function Capitalize(target, propertyKey) {
    let value;
    const getter = function () {
        return value.charAt(0).toUpperCase() + value.slice(1);
    };
    const setter = function (newValue) {
        value = newValue.toLowerCase();
    };
    return {
        get: getter,
        set: setter,
    };
}
function AccessLogger(target, name, descriptors) {
    console.log("AccessLogger Decorator Called");
    console.log(target);
    console.log(name);
    console.log(descriptors);
    const getter = descriptors.get;
    const setter = descriptors.set;
    descriptors.get = function () {
        console.log(`Accessing value for property ${name}...`);
        if (getter) {
            return getter.call(this);
        }
        return undefined;
    };
    descriptors.set = function (value) {
        console.log(`Setting value for property ${name}...`);
        if (setter) {
            setter.call(this, value);
        }
    };
    return descriptors;
}
class Products {
    get price() {
        return this._price;
    }
    set price(value) {
        if (value > 0)
            this._price = value;
        else
            throw new Error("Price cannot be less than 0");
    }
    constructor(name, price) {
        this.name = name;
        this._price = price;
    }
}
__decorate([
    Capitalize,
    __metadata("design:type", String)
], Products.prototype, "name", void 0);
__decorate([
    AccessLogger,
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [Number])
], Products.prototype, "price", null);
const newProduct = new Products("ankur Verma", 1000);
newProduct.price = 3000;
console.log(newProduct.price);
