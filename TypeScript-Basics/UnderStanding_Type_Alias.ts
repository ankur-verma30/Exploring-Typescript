//Understanding Type Alias


//useCase 1
type stringType=string;
let str1:stringType='Hello';

type customType= number | string ;

function printStatus(message: string, code: customType) {
  if (typeof code === "string") code = code.trim();
  console.log(`The message is ${message} and the code is ${code}`);
}

printStatus("dummy text", 500);
printStatus("dummy text", " 500");


///useCase 2
type allRoles='admin' | 'read';
function roleMessage(role:allRoles) {
  switch (role) {
    case "admin":
      console.log("You are a admin in this site");
      break;
    case "read":
      console.log("You have read condition");
      break;
    default:
      console.log("Unknown user permission");
  }
}

roleMessage('admin');

//Type Alias for an Object
function getFullName(user:{firstName:string,lastName:string,age:number}){
  return user.firstName+" "+user.lastName;
}

//we Can make the alias of the object
type ObjectProperty={firstName:string,lastName:string,age:number}
function isEligibleForVoting(user:ObjectProperty){
  return user.age>=18;
}

const MyUser:ObjectProperty={
  firstName:'Ankur',
  lastName:'Verma',
  age:23
}

let newUser=getFullName(MyUser)
console.log(newUser);
if(isEligibleForVoting(MyUser)) console.log(`${newUser} is eligible for the voting`)