type StringOrNumber=string | number
type BoolOrNumber=boolean | number

//Intersection Type
type MyNumberType=StringOrNumber & BoolOrNumber

//Only number type is stored because of intersection type
let x:MyNumberType=20;
console.log(x);


//when we use intersection type on complex types union of all the data types takes place
interface user{
    name:string,
    age:number
}

interface admin{
    name:string,
    role:string
}

type AdminUser= user & admin;

let NewUser:AdminUser={
    name:'Ankur',
    age:23,
    role:'admin'
};

function processOrder(order:OrderType & { status:string }){
    console.log(order.id,order.items,order.status)
}

interface OrderType{
    id:number,
    items:string[]
}

processOrder({id:123,items:['item1','item2'],status:'Shipped'})