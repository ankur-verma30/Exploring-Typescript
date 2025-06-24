var ShoppingCart = /** @class */ (function () {
    function ShoppingCart() {
        this.items = [];
    }
    ShoppingCart.prototype.addItem = function (item) {
        this.items.push(item);
    };
    ShoppingCart.prototype.getItems = function () {
        return this.items;
    };
    return ShoppingCart;
}());
var bookCart = new ShoppingCart();
bookCart.addItem({ name: 'Godan', pages: 3000, price: 400 });
console.log(bookCart.getItems());
var clothCart = new ShoppingCart();
clothCart.addItem({ name: 'T-shirt', size: 'M', price: 3000 });
console.log(clothCart.getItems());
