//Understanding Type Alias
var str1 = 'Hello';
function printStatus(message, code) {
    if (typeof code === "string")
        code = code.trim();
    console.log("The message is ".concat(message, " and the code is ").concat(code));
}
printStatus("dummy text", 500);
printStatus("dummy text", " 500");
function roleMessage(role) {
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
function getFullName(user) {
    return user.firstName + " " + user.lastName;
}
function isEligibleForVoting(user) {
    return user.age >= 18;
}
var MyUser = {
    firstName: 'Ankur',
    lastName: 'Verma',
    age: 23
};
var newUser = getFullName(MyUser);
console.log(newUser);
if (isEligibleForVoting(MyUser))
    console.log("".concat(newUser, " is eligible for the voting"));
