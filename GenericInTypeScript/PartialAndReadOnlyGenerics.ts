//Built in Generics Partial and Readonly
interface UserSettings{
username:string;
email:string;
darkMode:boolean;
language:string;
}

function updateUserSettings(partailSettings:Partial<UserSettings>){
 console.log('Updating',partailSettings);
}
//with partial generics we can make the properties of the object as optional
const user1:UserSettings={
    username:'Ankur Verma',
    email:'ankur123@gmail.com',
    darkMode:false,
    language:'en'
}

const newSettings={
    darkMode:true,
    language:'fr'
}

updateUserSettings(newSettings);

let arr:Readonly<string[]>=['John','Mark'];
// arr.push('merry'); now this array is readonly we cannot not push or remove element from the array anymore
console.log(arr);
