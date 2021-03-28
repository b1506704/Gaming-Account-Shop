import mongoose from 'mongoose';

const categorySchema = mongoose.Schema({
    name: String,
    imgUrl: String,
    accNum: Number,
    sellNum: Number,
});

var Category = mongoose.model('Category', categorySchema);

export default Category;