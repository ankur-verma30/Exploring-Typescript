type StringOrNumber = string | number;

function Addition(a: StringOrNumber, b: StringOrNumber) {
  //with the help of typeof operator we are doing type guarding
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }
  return a + b;
}

Addition("Hello", 23);

//type guarding in class
class Animal {
  makeSound() {
    console.log("Generic Animal Sound");
  }
}

class Dog extends Animal {
  bark() {
    console.log("Woof Woof");
  }
}

function makeCreatureSound(creature: Animal) {
  // if(typeof creature==='dog') this is wrong because here any instance will be treated as object not as className
  if (creature instanceof Dog) creature.bark();
  else creature.makeSound();
}

let animal = new Animal();
let dog = new Dog();

makeCreatureSound(animal);
makeCreatureSound(dog);

interface UserTemplate {
  name: string;
  email?: string;
}
function GreetUser(user: UserTemplate) {
  if ("email" in user) //same can be done in type also
    console.log(`Hello ${user.name}. Your email is ${user.email}`);
  else console.log(`Hello ${user.name}`);
}
GreetUser({ name: "Isha Gupta" }); //if we not provide the email it is showing undefined which is unexpected behaviour so to prevent this
GreetUser({ name: "Ankur Verma", email: "ankur123@gmail.com" });
