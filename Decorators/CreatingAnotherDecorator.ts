
function Template(template: string, elementId: string) {
  return function (target: any) {
    const userInstance = new target();
    const container = document.getElementById(elementId)!;
    if (container) {
      container.innerHTML = template;
      const h2 = container.querySelector("h2");

      if (h2) h2.textContent = "Hello Mr. " + userInstance.name;
    }
  };
}

@Template("<h2>Dynamic Header</h2>", "container")
class Demo {
  constructor(public name: string = "Default", public age: number = 0) {
    console.log("User Class Constructor called...");
  }
}

const user1 = new Demo("Ankur Verma", 23);
