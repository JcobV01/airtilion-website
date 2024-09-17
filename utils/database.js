import mongoose from "mongoose";

let isConnected = false;

export const connectToDB = async () => {
    mongoose.set('strictQuery', true);

    if(isConnected){
        console.log("Alredy connected")
        return;
    }

    try{
        await mongoose.connect(process.env.MONGODB_URI, {
            dbName: "airtilion",
            useNewUrlParser: true,
            useUnifiedTopology: true
        })

        isConnected = true
        console.log("DB connected")
    }
    catch(err){
        console.log(err);  
    }
}