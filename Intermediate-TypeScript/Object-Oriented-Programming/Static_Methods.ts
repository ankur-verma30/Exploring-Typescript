class People{
    static count:number=0;
    constructor(public firstName:string,public lastName:string ){
        People.count++;
    }

    getFullName(){
        return this.firstName+' '+this.lastName;
    }
}

const p1=new People('Ankur','Verma');
console.log(p1,People.count);
const p2=new People('Isha','Gupta');
console.log(p2,People.count);