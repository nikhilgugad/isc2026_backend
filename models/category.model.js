import mongoose from "mongoose";

const schema = new mongoose.Schema({
    name: String,
    priority: String
})

const Category = mongoose.model('Category', schema)

export default Category;