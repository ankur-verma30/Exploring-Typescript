function Logger(
  target: any,
  methodName: string,
  descriptors: PropertyDescriptor
) {
  console.log("Logger Decorator Called");
  console.log("Target of decorator", target);
  console.log("Method Name", methodName);
  console.log("Property Descriptor", descriptors);
}

function param(target: any, methodName: string, indexOfParam: number) {
  console.log("Param Decorator called");
  console.log("Target of decorator ", target);
  console.log("Name of method", methodName);
  console.log("Index of Parameter ", indexOfParam);
}



class Person {
  name: string;

  constructor(name: string) {
    this.name = name;
  }
@Logger
  calculateAge(@param dob: string) {}
}

const p = new Person("Ankur Verma");
p.calculateAge("06-05-2003");
