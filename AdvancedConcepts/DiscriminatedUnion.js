//Method 1
// function CalculateArea(shape:Shape){
//     if('radius' in shape) return 3.14*shape.radius*shape.radius;
//     else if('length' in shape) return shape.length*shape.length;
// }
//Method 2
function CalculateArea(shape) {
    switch (shape.kind) {
        case 'circle':
            return 3.14 * shape.radius * shape.radius;
        case 'quadrilateral':
            return shape.length * shape.length;
    }
}
console.log(CalculateArea({ kind: 'quadrilateral', length: 12 }));
console.log(CalculateArea({ kind: 'circle', radius: 7 }));
