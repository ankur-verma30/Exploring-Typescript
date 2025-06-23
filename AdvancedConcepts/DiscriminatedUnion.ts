//A way of implementing type guard in typescript by setting a specila property  
//it is called discriminated union because each of the interface have one common property then also they are different from each other
interface Circle{
    kind:'circle',
    radius:number
}

interface Square{
    kind:'quadrilateral',
    length:number
}

type Shape=Circle | Square;

//Method 1
// function CalculateArea(shape:Shape){
//     if('radius' in shape) return 3.14*shape.radius*shape.radius;
//     else if('length' in shape) return shape.length*shape.length;
// }

//Method 2
function CalculateArea(shape:Shape){
    switch(shape.kind){
        case 'circle':
            return 3.14*shape.radius*shape.radius;
      case 'quadrilateral':
            return shape.length*shape.length;
    }
}
console.log(CalculateArea({kind:'quadrilateral',length:12}))
console.log(CalculateArea({kind:'circle',radius:7}));

