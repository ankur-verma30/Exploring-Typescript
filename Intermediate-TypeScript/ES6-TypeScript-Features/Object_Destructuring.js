var user = {
    forename: 'John',
    uage: 28,
    ugender: 'male',
    city: 'london'
};
//after using typeAlias we cannot user the earlier name like forename but still we have to user forename for refrence and access the property of an object
var username = user.forename, ageNum = user.uage, userGender = user.ugender, userCity = user.city;
//if we have any property which is not present in the object and we use while destructuring it will give an error
console.log(username, userGender, ageNumber, userCity);
