class ShoppingCarts<T> {
  private items: T[] = [];
  addItem(item: T) {
    this.items.push(item);
  }
  getItems() {
    return this.items;
  }
}
//when we have to give the input at run time then we have to use generic type where we don't know the input but where we are sure about the input and output we use union type
const strCart = new ShoppingCarts<string>();
strCart.addItem("Hello");
strCart.addItem("World");
console.log(strCart.getItems());
