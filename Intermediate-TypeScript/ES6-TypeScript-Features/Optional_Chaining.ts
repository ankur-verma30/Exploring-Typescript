//It is a feature that allows for safe access of nested properties and calls on potentially null or undefined objects. 
//It provides a concise and readable way to navigate object structures without the need for explicit null and undefined checks.

const products=[
    {name:'Iphone10', price:1200, details:{color:'black', ram:8}},
     {name:'Iphone11', price:1400, details:{color:'red', size:'6 inch'}},
      {name:'Iphone13', price:1800, details:{color:'white', manufacturer:'Apple'}},
]

for(let prod of products){
    console.log('Products Name is ',prod.name);
    console.log("******************************");
    console.log('Product Price',prod.price);
    console.log('\n\n');
    console.log('Color',prod.details?.color); //if the prod.details is evaluated undefined then rest of the expression will not be evaluated to prevent the error 
}