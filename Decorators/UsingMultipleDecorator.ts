function LoggerDecorator(logMsg: string) {
  //Decorator Factory 1
  console.log("Logger Decoratory Function");
  function Logger(target: Function) {
    console.log(logMsg);
  }
  return Logger;
}

function Template(template: string, elementId: string) {
  //Decorator Factory 2
  console.log("Template Decoratory Function");
  return function (target: any) {
    const userInstance = new target(); //creating new instance hence constructor is called
    console.log("This is instance inside the decorator factory ", userInstance);
    const container = document.getElementById(elementId)!;
    if (container) {
      container.innerHTML = template;
      const h2 = container.querySelector("h2");

      if (h2) h2.textContent = "Hello Mr. " + userInstance.name;
    }
  };
}

@LoggerDecorator("This is custom logger...")
@Template("<h2>Dynamic Header</h2>", "container") //First this decorator will be called then the above one
class UserInfo {
  constructor(public name: string = "Default", public age: number = 0) {
    console.log("User Class Constructor called...");
  }
}

const userData = new UserInfo("Ankur Verma", 23);
