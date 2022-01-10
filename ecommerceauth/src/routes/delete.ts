import { BadRequestError, NotAuthorizedError, requireAuth } from "@jjecommerce2022/common";
import express,{Request ,Response} from "express";
import { StatusCodes } from "http-status-codes";
import jwt from "jsonwebtoken";

import { User } from "../models/user";

const router = express.Router();

router.delete("/api/users/:userId",
        requireAuth,
        async (req:Request,res:Response) => {
    
    const {userId} = req.params
    //@ts-ignore
    if(userId === req.currentUser!.id || req.currentUser!.isAdmin){
        let updatedUser = await User.findById(userId) 
        
        if(!updatedUser){
            throw new BadRequestError("Invalid Credentials")
        }
        
        await User.findByIdAndDelete(req.params.userId)

        res.status(StatusCodes.OK).send({})
    }else{
        throw new NotAuthorizedError();
    }
});

export {router as deleteUserRouter}