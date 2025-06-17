//this function is never going to return any value not even undefined
function createError(errorMsg, errorCode) {
    throw { message: errorMsg, code: errorCode };
}
