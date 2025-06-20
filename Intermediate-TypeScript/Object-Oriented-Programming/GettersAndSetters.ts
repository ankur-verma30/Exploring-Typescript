class Human{
    constructor(public name:string,private _age:number| null){
        _age=null;
    }

    get Age(){
        if(this._age!==null){
            return this._age;
        }
        throw new Error('Age is not defined for person: '+this.name);
    }

    set Age(value:number){
        if(value>0){
            this._age=value;
        }
        throw new Error('Age cannot be negative');
    }
}

const human1=new Human('Ankur Verma',22);
human1.Age=90;
console.log(human1.Age);


class Circle{
    private _radius:number=10;

    get radius():number{
        return this.radius;
    }

    set radius(value:number){
        this._radius=value;
    }
    //these two are computed properties
    get diameter(){
        return this._radius*2;
    }

    set diameter(value:number){
        this._radius=value/2;
    }
}