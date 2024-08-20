import mongoose from "mongoose";

export const connectDB=async ()=>{
    await mongoose.connect('mongodb+srv://samuelolubukun:cfMsNjv4HdlrF1WC@cluster0.adgbnlh.mongodb.net/foodel').then(()=>console.log("db connected"));
}
