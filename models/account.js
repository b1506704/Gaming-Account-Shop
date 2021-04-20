import mongoose from 'mongoose';
const accountSchema = mongoose.Schema({
    id: {
        type: String,
        unique: true
    },
    category: String,
    name: String,
    passWord: String,
    email: String,
    phoneNumber: String,
    imgUrl: String,
    price: {
        type: Number,
        min: 0
    },
    isBought: {
        type:Boolean,
        default: false,
    },
    accOwner: String,
    accSeller: String,
    attr1: String,
    attr2: String,
    attr3: String,
    attr4: String
});

var Account = mongoose.model('Account', accountSchema);

export default Account;