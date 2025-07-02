//How to use decorators on getters and setter
function Capitalize(target: any, propertyKey: string): any {
  let value: string;
  const getter = function () {
    return value.charAt(0).toUpperCase() + value.slice(1);
  };

  const setter = function (newValue: string) {
    value = newValue.toLowerCase();
  };
  return {
    get: getter,
    set: setter,
  };
}

function AccessLogger(
  target: any,
  name: string,
  descriptors: PropertyDescriptor
) {
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

  descriptors.set = function (value: number) {
    console.log(`Setting value for property ${name}...`);
    if (setter) {
      setter.call(this, value);
    }
  };
  return descriptors;
}

class Products {
  @Capitalize
  name: string;
  private _price: number;

  @AccessLogger //it works on getter and setter even though it is written only getter because both getter and setter have same name
  get price() {
    return this._price;
  }

  set price(value: number) {
    if (value > 0) this._price = value;
    else throw new Error("Price cannot be less than 0");
  }

  constructor(name: string, price: number) {
    this.name = name;
    this._price = price;
  }
}

const newProduct = new Products("ankur Verma", 1000);
newProduct.price = 3000;
console.log(newProduct.price);
