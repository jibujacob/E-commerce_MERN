import mongoose from "mongoose";
import { app } from "./app";

const PORT = process.env.PORT || 5001;

const start = async () =>{
    console.log("Starting the Auth Services...");
    if(!process.env.MONGO_AUTH_URI){
        throw new Error("MONGO_AUTH_URI not defined for Auth Services")
    }
    if(!process.env.JWT_KEY){
        throw new Error("JWT_KEY not defined for Auth Services")
    }
    try {
        await mongoose.connect(process.env.MONGO_AUTH_URI);
        console.log("Connected to the Auth Services DB");
        app.listen(PORT, 
            () => console.log(`Auth Services listening on port ${PORT}`))
    } catch (error) {
        console.log("Error in bringing up Auth Services:",error);
        
    }
}

start();
