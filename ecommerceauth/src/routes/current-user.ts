import express from "express";
import { currentUser } from "@jjecommerce2022/common"
import { User } from "../models/user";

const router = express.Router();

router.get("/api/auth/currentUser", currentUser ,async (req,res) => {

    if(req.currentUser){
        const user = await User.findById(req.currentUser.id)
        if(!user){
            return null
        }
    }
    
    res.send({currentUser: req.currentUser || null})
});

export {router as currentUserRouter}