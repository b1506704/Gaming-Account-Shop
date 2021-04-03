import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    userName: {
        type: String,
        require: true,
        unique: true,
    },
    passWord: {
        type: String,
        require: true,
        maxlength: 12
    },
    balance: {
        type: Number,
        min: 0,
        default: 0
    },
    phoneNumber: {
        type: Number,
        default: 0,
        unique: true
    },
    isLogin: {
        type: Boolean,
        default: false
    },
    isAdmin: {
        type: Boolean,
        default: false
    }
});

var User = mongoose.model('User', userSchema);

export default User;