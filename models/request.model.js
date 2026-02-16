import mongoose from "mongoose";

const serviceSchema = new mongoose.Schema({
    category_id: Number,
    title: String,
    description: String,
    createdAt: {
        type: Date,
        default: Date.now
    }
}, {timestamps:true})

const Request = mongoose.model("Request", serviceSchema)

export default Request;
