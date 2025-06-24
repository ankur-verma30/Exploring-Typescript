//Generics in TS are essentially placeholders for data types. They allow you to write flexible and reusable code that can work with different types of data without sacrificing type saftey.
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
//At time of creation we don't know what kind of array we will recieve
function swap(arr, index1, index2) {
    console.log("Before swap ", arr);
    var num = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = num;
    console.log("After swap", arr);
}
//if we return this it can return string or number array so if we have to perform some string operation on any type it will give an error
swap([1, 2, 3, 4], 1, 2);
swap(["Hello", "How", "are", "you"], 1, 2);
//Instead of using any type we can use generics a generalized function that can be used with any data type
function swapValues(arr, index1, index2) {
    console.log("Before Swapping", arr);
    var num = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = num;
    console.log("After Swapping");
    return arr;
}
console.log("Using Generics");
console.log(swapValues([1, 2, 3, 4], 1, 2));
console.log(swapValues(["Hello", "How", "are", "you"], 1, 2));
//BuiltIn Type 1)Array is a Built in Generic Type
var num = [1, 2, 3];
console.log("Num is", num);
//BuiltIn Type 2) Promise is also a generic type
var prom = new Promise(function (resolve, reject) {
    setTimeout(function () {
        // resolve → a function you call to mark the promise as fulfilled (success).
        //reject → a function you call to mark the promise as rejected (failure).
        resolve(100);
    }, 1000);
});
//1) Method 1 Using .then() and .catch()
prom
    .then(function (value) {
    console.log("Promise resolved with using .then():", value);
})
    .catch(function (error) {
    console.error("Promise rejected with:", error);
});
/*
📝 What happens?
After 1 second, the promise resolves with 100.
The .then() callback runs → prints:
Promise resolved with: 100
*/
var prom1 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve(100);
    }, 1000);
});
//Method 2) Using Async/Await
function usePromise() {
    return __awaiter(this, void 0, void 0, function () {
        var result, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, prom1];
                case 1:
                    result = _a.sent();
                    console.log("Promise resolved with using async/await:", result);
                    return [3 /*break*/, 3];
                case 2:
                    error_1 = _a.sent();
                    console.error("Promise rejected with:", error_1);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
usePromise();
/*
📝 What happens?
await pauses the function until the promise resolves.
After 1 second, prints:
Promise resolved with: 100
*/
//BuiltIn Type 3) Objects are also generic 
//There is no concept of generics in Javascript
