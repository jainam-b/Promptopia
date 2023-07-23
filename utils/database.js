import mongoose from "mongoose";
let isConnected=false; //track  connection 
require('dotenv').config();


export const connectToDB=async()=>{
    // const db="mongodb+srv://jainam:a@cluster0.h5mn9fs.mongodb.net/?retryWrites=true&w=majority"
    mongoose.set("strictQuery",true)

    if(isConnected){
        console.log("MongoDB is already connected")
        return;
    }

    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            dbName:"share_prompt",
            useNewUrlParser:true,
            useUnifiedTopology:true,
        })
        isConnected=true;
        console.log("MongoDB connected")
    } catch (error) {
       console.log(error) ;
    }
}
