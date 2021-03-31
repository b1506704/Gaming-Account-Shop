import mongoose from 'mongoose';
import Schema from 'mongoose';
const accountSchema = mongoose.Schema({
    id: {
        type: String
        // unique: true
    },
    // category: {
    //     type: Schema.Types.ObjectId,
    //     ref: 'Category',
    // },
    //test property
    category: String,
    imgUrl: String,
    price: {
        type: Number,
        min: 0
    },
    isBought: {
        type:Boolean,
        default: false,
    },
    // accOwner: {
    //     type: Schema.Types.ObjectId,
    //     ref: 'User',
    //     undefined: true
    // },
    accOwner: String,
    attr1: String,
    attr2: String,
    attr3: String,
    attr4: String
});

var Account = mongoose.model('Account', accountSchema);

export default Account;