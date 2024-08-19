import mongoose from "mongoose";

export const  connectDB = async () =>{

    await mongoose.connect('mongodb+srv://prasad099:Asdfghjkl@cluster0.fy335hy.mongodb.net/food-del').then(()=>console.log("DB Connected"));
   
}



