//this function is never going to return any value not even undefined
function createError(errorMsg:string,errorCode:number):never{
    throw {message:errorMsg, code:errorCode};
}

createError('Internal Server Error',500);