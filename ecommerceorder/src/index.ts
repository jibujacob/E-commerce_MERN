import mongoose from "mongoose";
import { app } from "./app";

const PORT = process.env.PORT || 5001;

const start = async () =>{
    console.log("Starting the Order Services...");
    if(!process.env.MONGO_ORDER_URI){
        throw new Error("MONGO_CART_URI not defined for Order Services")
    }
    if(!process.env.JWT_KEY){
        throw new Error("JWT_KEY not defined for Auth Services")
    }
    if(!process.env.STRIPE_KEY){
        throw new Error("STRIPE_KEY must be defined")
    }
    try {
        await mongoose.connect(process.env.MONGO_ORDER_URI);
        console.log("Connected to the Order Services DB");
        app.listen(PORT, 
            () => console.log(`Order Services listening on port ${PORT}`))
    } catch (error) {
        console.log("Error in bringing up Order Services:",error);
        
    }
}

start();
