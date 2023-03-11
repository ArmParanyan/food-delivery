const User = require('../Models/User');
const bcrypt = require('bcrypt');
const {messages} = require("../Config/constants");
const jwt = require('jsonwebtoken');
const {hash} = require("bcrypt");

async function register(payload, file) {
    const user = await User.findOne({ email: payload.email });
    if (user) {
        throw messages.emailAlreadyUsed;
    }
    const hashPass = await bcrypt.hash(payload.password, 10);
    let newUser = new User({
        firstName: payload.firstName,
        lastName: payload.lastName,
        email: payload.email,
        password: hashPass,
        avatar: file?.path,
    })

    await newUser.save();
    return {
        message: 'registration passed successfully'
    }

}
async function login(payload){
    const user = await User.findOne({ email: payload.email });
    if (!user) {
        throw messages.emailNotFound;
    }

    const isCorrectPassword = await bcrypt.compare(payload.password, payload.hash); //payload.hash

    if (!isCorrectPassword) {
        throw messages.isIncorrectPassword;
    }

    const token = jwt.sign(payload, process.env.SECRET);

    console.log(token);
    return {
        message: 'login passed successfully',
        token
    };
}

module.exports = {
    register,
    login,
}