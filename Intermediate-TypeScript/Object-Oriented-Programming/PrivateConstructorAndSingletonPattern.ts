class Demo{
    private static _instance:Demo;
    private constructor(){
        console.log('The constructor is private') //only one time is called because only one instance is created from this class
    }
    static getInstance(){
        if(Demo._instance){
            return Demo._instance;
        }
        return Demo._instance=new Demo();
    }
}
//Private constructor is used to create a single instance of any class
const d1=Demo.getInstance();
const d2=Demo.getInstance();
