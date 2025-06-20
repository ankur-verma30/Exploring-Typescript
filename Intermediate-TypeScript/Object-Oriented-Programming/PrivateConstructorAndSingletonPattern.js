var Demo = /** @class */ (function () {
    function Demo() {
        console.log('The constructor is private'); //only one time is called because only one instance is created from this class
    }
    Demo.getInstance = function () {
        if (Demo._instance) {
            return Demo._instance;
        }
        return Demo._instance = new Demo();
    };
    return Demo;
}());
//Private constructor is used to create a single instance of any class
var d1 = Demo.getInstance();
var d2 = Demo.getInstance();
