function getPropValue<T extends object,U extends keyof T>(obj:T, key:U){
return obj[key];
}
console.log(getPropValue({name:'Ankur Verma',age:23,gender:'Male'},'age'));