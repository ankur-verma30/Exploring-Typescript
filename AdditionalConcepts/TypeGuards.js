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
function Addition(a, b) {
    //with the help of typeof operator we are doing type guarding
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
}
Addition('Hello', 23);
var Animal = /** @class */ (function () {
    function Animal() {
    }
    Animal.prototype.makeSound = function () {
        console.log('Generic Animal Sound');
    };
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Dog.prototype.bark = function () {
        console.log('Woof Woof');
    };
    return Dog;
}(Animal));
function makeCreatureSound(creature) {
    if (creature instanceof Dog)
        creature.bark();
    else
        creature.makeSound();
}
var animal = new Animal();
var dog = new Dog();
makeCreatureSound(animal);
makeCreatureSound(dog);
