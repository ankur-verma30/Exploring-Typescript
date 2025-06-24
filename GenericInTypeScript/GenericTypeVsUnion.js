var ShoppingCarts = /** @class */ (function () {
    function ShoppingCarts() {
        this.items = [];
    }
    ShoppingCarts.prototype.addItem = function (item) {
        this.items.push(item);
    };
    ShoppingCarts.prototype.getItems = function () {
        return this.items;
    };
    return ShoppingCarts;
}());
//when we have to give the input at run time then we have to use generic type where we don't know the input but where we are sure about the input and output we use union type
var strCart = new ShoppingCarts();
strCart.addItem("Hello");
strCart.addItem("World");
console.log(strCart.getItems());
