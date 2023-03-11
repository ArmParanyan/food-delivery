const statusCode = {
    notFound: 404,
    badRequest: 400,
    forbidden: 403,
    conflict : 409,
    unauthorized: 401,
    unprocessableEntity : 422,
    notAllowed : 405
};

const messages = {
    userNameAlreadyUsed : 'User name is already used',
    userNotFound: 'User is not found',
    userLoggedIn: 'User successfully logged in',
    unauthorized : 'Unauthorized',
    emailAlreadyUsed : 'Email is already used',
    invalidEmail : 'Invalid email address',
    invalidId : 'Invalid id',
    firstnameContain : 'First name should contain minimum 2 letters',
    emailNotFound : 'Can not find such email address',
    isIncorrectPassword : 'The password is incorrect',
}

module.exports = {    
    statusCode,
    messages,
}