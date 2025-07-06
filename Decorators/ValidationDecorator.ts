function required(target: any, propName: string){
    validateObject[target.constructor.name]= {
        ...validateObject[target.constructor.name],
        [propName]: ['required']
    }
}

function minlength(length: number){
    return function(target: any, propName: string){
        validateObject[target.constructor.name]= {
            ...validateObject[target.constructor.name],
            [propName]: ['minlength']
        }
    }
}
function positiveNumber(target: any, propName: string){
    validateObject[target.constructor.name]= {
        ...validateObject[target.constructor.name],
        [propName]: ['positiveNumber']
    }
}

interface IValidator{
    [prop: string]: {
        [propKey: string]: string[]; // ['required', 'minlength']
    }
}

const validateObject: IValidator = {};

function validate(obj: any): boolean{
    let isValid = true;

    const validateClass = validateObject[obj.constructor.name];
    if(!validateClass){
        return true;
    }

    for(let prop in validateClass){
        for (let validator of validateClass[prop]){
            switch(validator){
                case 'required':
                    isValid = isValid && !!obj[prop];
                    break;
                case 'minlength':
                    isValid = isValid && obj[prop].length < 3;
                    break;
                case 'positiveNumber':
                    isValid = isValid && obj[prop].length < 0;
                    break;
            }
        }
    }

    return isValid;

}

class UserNames{
    @required
    @minlength(3)
    username: string;

    @positiveNumber
    age: number;

    constructor(uname: string, age: number){
        this.username = uname;
        this.age = age;
    }
}

const u1 = new UserNames('john', 28);
const u2 = new UserNames('', 30);

if(!validate(u2)){
    alert("Invalid Input.");
}else{
    console.log('user created successfully');
}