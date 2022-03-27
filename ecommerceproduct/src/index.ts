import mongoose from "mongoose";
import { app } from "./app";

const PORT = process.env.PORT || 5001;

const start = async () =>{
    console.log("Starting the Product Services...");
    if(!process.env.MONGO_PRODUCT_URI){
        throw new Error("MONGO_PRODUCT_URI not defined for Product Services")
    }
    if(!process.env.JWT_KEY){
        throw new Error("JWT_KEY not defined for Auth Services")
    }
    try {
        await mongoose.connect(process.env.MONGO_PRODUCT_URI);
        console.log("Connected to the Product Services DB");
        app.listen(PORT, 
            () => console.log(`Product Services listening on port ${PORT}`))
    } catch (error) {
        console.log("Error in bringing up Product Services:",error);
        
    }
}

start();
