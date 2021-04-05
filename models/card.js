import mongoose from 'mongoose';
const accountSchema = mongoose.Schema({
    id: {
        type: String,
        unique: true
    },
    carrier: {
        type: String,
        default: ""
    },
    value: {
        type: Number,
        min: 0,
        default: 0
    },
    isBought: {
        type:Boolean,
        default: false,
    },
});

var Card = mongoose.model('Card', accountSchema);

export default Card;