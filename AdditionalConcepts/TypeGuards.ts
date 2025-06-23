type StringOrNumber=string | number;

function Addition(a:StringOrNumber, b:StringOrNumber){
    //with the help of typeof operator we are doing type guarding
if(typeof a==='string' || typeof b==='string'){
    return a.toString()+b.toString();
}
return a+b;
}

Addition('Hello',23);

class Animal{
    makeSound(){
        console.log('Generic Animal Sound');
    }
}

class Dog extends Animal{
   bark(){
    console.log('Woof Woof')
   } 
}

function makeCreatureSound(creature:Animal){
    if(creature instanceof Dog) creature.bark();
    else creature.makeSound();
}

let animal=new Animal();
let dog=new Dog();

makeCreatureSound(animal);
makeCreatureSound(dog);