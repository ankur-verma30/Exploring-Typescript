var Human = /** @class */ (function () {
    function Human(name, _age) {
        this.name = name;
        this._age = _age;
        _age = null;
    }
    Object.defineProperty(Human.prototype, "Age", {
        get: function () {
            if (this._age !== null) {
                return this._age;
            }
            throw new Error('Age is not defined for person: ' + this.name);
        },
        set: function (value) {
            if (value > 0) {
                this._age = value;
            }
            throw new Error('Age cannot be negative');
        },
        enumerable: false,
        configurable: true
    });
    return Human;
}());
var human1 = new Human('Ankur Verma', 22);
human1.Age = 90;
console.log(human1.Age);
var Circle = /** @class */ (function () {
    function Circle() {
        this._radius = 10;
    }
    Object.defineProperty(Circle.prototype, "radius", {
        get: function () {
            return this.radius;
        },
        set: function (value) {
            this._radius = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Circle.prototype, "diameter", {
        //these two are computed properties
        get: function () {
            return this._radius * 2;
        },
        set: function (value) {
            this._radius = value / 2;
        },
        enumerable: false,
        configurable: true
    });
    return Circle;
}());
