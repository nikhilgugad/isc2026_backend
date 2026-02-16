import mongoose from "mongoose";

// const MONGO_URI = "mongodb://nikhilgugad777_db_user:isc2526testing@isc2526.mvywkdr.mongodb.net/?appName=isc2526"
const MONGO_URI = "mongodb://localhost:27017/06_module_b"
async function connectMongo(){
    try {
        await mongoose.connect(MONGO_URI);
        console.log("Mongodb Connected Successfully")
    } catch (err) {
        console.log("error connecting mongodb: ", err)
        process.exit(1)
    }
}

export default connectMongo;