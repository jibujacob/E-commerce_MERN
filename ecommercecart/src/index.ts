import mongoose from "mongoose";
import { app } from "./app";

const PORT = process.env.PORT || 5001;

const start = async () =>{
    console.log("Starting the Cart Services...");
    if(!process.env.MONGO_CART_URI){
        throw new Error("MONGO_CART_URI not defined for Cart Services")
    }
    try {
        await mongoose.connect(process.env.MONGO_CART_URI);
        console.log("Connected to the Cart Services DB");
        app.listen(PORT, 
            () => console.log(`Cart Services listening on port ${PORT}`))
    } catch (error) {
        console.log("Error in bringing up Cart Services:",error);
        
    }
}

start();
