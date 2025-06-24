function getPropValue(obj, key) {
    return obj[key];
}
console.log(getPropValue({ name: 'Ankur Verma', age: 23, gender: 'Male' }, 'age'));
