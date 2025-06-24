function updateUserSettings(partailSettings) {
    console.log('Updating', partailSettings);
}
//with partial generics we can make the properties of the object as optional
var user1 = {
    username: 'Ankur Verma',
    email: 'ankur123@gmail.com',
    darkMode: false,
    language: 'en'
};
var newSettings = {
    darkMode: true,
    language: 'fr'
};
updateUserSettings(newSettings);
var arr = ['John', 'Mark'];
// arr.push('merry'); now this array is readonly we cannot not push or remove element from the array anymore
console.log(arr);
