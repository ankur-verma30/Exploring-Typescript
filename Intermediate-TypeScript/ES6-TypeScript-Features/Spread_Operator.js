//It allows operator in typescript to extract elements from an array or properties from an object. It is denoted by three dots(...)
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var userName = ['John', 'Mary', 'Mark'];
console.log(userName);
console.log.apply(console, userName);
//Use case of spread operator
//1) Creating the shallow copy of an array
var copyArray = userName; //when some changes is done is any array it will reflect in both arrays because they are pointing to the same array
//so if we want that changes done in one array does not reflect in the main array we have to make the shallow copy using spread opertor
var newCopyArray = __spreadArray([], userName, true); //so when the element is extracted from the userName it will become the elements of the new array wrapped outside of the userName
console.log(newCopyArray);
var extendedUsers = __spreadArray(['Ravi', 'Ram'], userName, true);
console.log(extendedUsers);
//spread Operator on Objects
var personName = {
    fname: 'Ram',
    age: 29,
    gender: 'Male'
};
var employee = __assign(__assign({}, personName), { salary: '$2000', company: 'Google' });
console.log(employee);
