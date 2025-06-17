var inputVal;
inputVal = 100;
inputVal = 'Hello';
var uname;
// uname=inputVal; //Type unknown is not assignable to type string
//so we should first check the type of the unknown type 
if (typeof inputVal === 'string') {
    uname = inputVal;
}
