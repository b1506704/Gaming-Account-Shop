import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    userName: String,
    passWord: String
});

var User = mongoose.model('User', userSchema);

export default User;