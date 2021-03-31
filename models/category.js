import mongoose from 'mongoose';

const categorySchema = mongoose.Schema({
    name: String,
    imgUrl: String,
    accNum: {
        type: Number,
        default: 0,
        min: 0
    },
    sellNum: {
        type: Number,
        default: 0,
        min: 0
    },
});

var Category = mongoose.model('Category', categorySchema);

export default Category;