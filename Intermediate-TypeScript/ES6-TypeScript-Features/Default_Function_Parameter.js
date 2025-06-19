function printDetails(name, age, gender) {
    if (gender === void 0) { gender = 'Male'; }
    var message = "Hi my name is ".concat(name, ". And I am ").concat(age, " years old ").concat(gender, ".");
    console.log(message);
}
printDetails('John', 28);
