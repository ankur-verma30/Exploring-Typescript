function CLS_DECORATOR(target: any) {
  console.log("CLASS DECORATOR CALLED!");
}

function PROP_DECORATOR(target: any, propertyKey: string): any {
  console.log("PROPERTY DECORATOR CALLED!");
}

function ACC_DECORATOR(
  target: any,
  name: string,
  descriptor: PropertyDescriptor
) {
  console.log("ACCESSOR DECORATOR CALLED");
}

function PARAM_DECORATOR(target: any, paramName: string, index: number) {
  console.log("PARAMETER DECORATOR CALLED");
}

function METH_DECORATOR(
  target: any,
  methodName: string,
  descriptor: PropertyDescriptor
) {
  console.log("METHOD DECORATOR CALLED!");
}

@CLS_DECORATOR //will executed 4th
class Persons {
  @PROP_DECORATOR //will executed 1st
  name: string;

  constructor(n: string) {
    this.name = n;
  }

  @METH_DECORATOR //will executed 3rd
  calculateAge(@PARAM_DECORATOR dob: string) {
    //will executed 2nd
    //calculate date of birth;
  }
}

const newPerson = new Persons("Ankur Verma");
console.log("New Person object ", newPerson);
