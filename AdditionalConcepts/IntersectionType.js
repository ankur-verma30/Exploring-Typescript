//Only number type is stored because of intersection type
var x = 20;
console.log(x);
var NewUser = {
    name: 'Ankur',
    age: 23,
    role: 'admin'
};
function processOrder(order) {
    console.log(order.id, order.items, order.status);
}
processOrder({ id: 123, items: ['item1', 'item2'], status: 'Shipped' });
