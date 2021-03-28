import mongoose from 'mongoose';

const accountSchema = mongoose.Schema({
    id: String,
    category: String,
    imgUrl: String,
    price: Number,
    isBought: Boolean,
    accOwner: String,
    attr1: String,
    attr2: String,
    attr3: String,
    attr4: String
});

var Account = mongoose.model('User', accountSchema);

export default Account;