type Book={
    name:string,
    pages:number,
    price:number
}

type cloth={
    name:string,
    size:string,
    price:number
}

class ShoppingCart<T>{
    private items:T[]=[];
    addItem(item:T){
        this.items.push(item);
    }
    getItems(){
        return this.items;
    }
}

const bookCart=new ShoppingCart<Book>();
bookCart.addItem({name:'Godan', pages:3000,price:400});
console.log(bookCart.getItems());

const clothCart=new ShoppingCart<cloth>();
clothCart.addItem({name:'T-shirt',size:'M',price:3000});
console.log(clothCart.getItems());