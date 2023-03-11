const mongoose = require('mongoose');
const { route } = require('../Router/authRouter');
const Schema = mongoose.Schema;
mongoose.set('strictQuery', false);

const userSchema = new Schema({
    firstName : {
        type : String,
        required : true,
    },
    lastName : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true,
        unique : true
    },
    password : {
        type: String,
        required : true
    },
    avatar : {
        type : String,
    },
    role : {
        type : String, enum : ['User', 'Admin'],
        default: 'User',
    }
});

module.exports = mongoose.model('users', userSchema);