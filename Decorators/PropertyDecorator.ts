function Capitalize(target: any, propertyKey: string):any {
  console.log("CAPITALIZED DECORATOR CALLED");
  console.log("PROPERTY KEY:" + propertyKey);
  console.log("TARGET" , target);//points on prototype object
//   target → refers to the prototype of the class (i.e., Product.prototype).
  let value:string;
  const getter=function(){
    return value.charAt(0).toUpperCase()+value.slice(1);
  }

  const setter=function(newValue:string){
    value=newValue.toLowerCase();
  }
  return{
    get:getter,
    set:setter
  }
}

class Product {
  @Capitalize//property decorator propertykey is name it is applied on the name property
  name: string;
//   static pname:string="Verma"; if we make the property decorator on static property then the target will point to the class itself 
  price: number;
  constructor(name:string,price:number) {
    this.name=name;
    this.price=price;
    console.log("Product Constructor");
  }
}

const newProduct1=new Product("ankur Verma",1000);
console.log("newProduct1",newProduct1);
