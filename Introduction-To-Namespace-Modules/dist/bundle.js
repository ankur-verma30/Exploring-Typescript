"use strict";
var UserActions;
(function (UserActions) {
    let userList = [];
    function createUser(name, age, gender) {
        const user1 = new UserActions.User(name, age, gender);
        userList.push(user1);
        return user1;
    }
    UserActions.createUser = createUser;
    function getUser() {
        return userList;
    }
    UserActions.getUser = getUser;
})(UserActions || (UserActions = {}));
var UserActions;
(function (UserActions) {
    const user1 = UserActions.createUser('Ankur Verma', 28, 'Male');
    console.log(user1);
    console.log(UserActions.getUser());
})(UserActions || (UserActions = {}));
var UserActions;
(function (UserActions) {
    class User {
        constructor(name, age, gender) {
            this.name = name;
            this.age = age;
            this.gender = gender;
        }
    }
    UserActions.User = User;
})(UserActions || (UserActions = {}));
