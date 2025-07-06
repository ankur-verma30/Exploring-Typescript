/*
Namespace in TypeScript

Namespace provide a mechanism to organize code into logical groupings, preventing naming conflict and promoting code reusability.

They are essentially named containers that hold variables, functions, classes, and interfaces.
*/ 

///<reference path="./userUtils/user-actions.ts"/>
namespace UserActions{
    const user1=createUser('Ankur Verma',28,'Male');
    console.log(user1);
    console.log(getUser())

}

//In Js there is no concept of namespaces
