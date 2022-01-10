import { BadRequestError, NotAuthorizedError, requireAuth } from "@jjecommerce2022/common";
import express,{Request ,Response} from "express";
import { StatusCodes } from "http-status-codes";
import jwt from "jsonwebtoken";

import { User } from "../models/user";

const router = express.Router();

router.put("/api/users/:userId",
        requireAuth,
        async (req:Request,res:Response) => {
    
    const {userId} = req.params
    //@ts-ignore
    if(userId === req.currentUser!.id || req.currentUser!.isAdmin){
        let updatedUser = await User.findById(userId) 
        
        if(!updatedUser){
            throw new BadRequestError("Invalid Credentials")
        }

        const usernameExisting = await User.findOne({username:req.body.username,_id:{$ne:userId}});
        if(usernameExisting){
            throw new BadRequestError("Username in use");
        }

        const emailExisting = await User.findOne({email:req.body.email,_id:{$ne:userId}});
        if(emailExisting){
            throw new BadRequestError("Email in use");
        }
        
        updatedUser = await User.findByIdAndUpdate(req.params.userId,{
            $set : req.body
        },{
            new:true
        });

        // Generate JWT
        const userJwt = jwt.sign(
            {
            id: updatedUser!.id,
            username:updatedUser!.username,
            email: updatedUser!.email,
            isAdmin : updatedUser!.isAdmin
            },
            process.env.JWT_KEY!,
            {expiresIn:"1d"}
        );
    
        // Store it on session object
        req.session = {
        jwt: userJwt,
        }; 

        res.status(StatusCodes.OK).send(updatedUser)
    }else{
        throw new NotAuthorizedError();
    }
});

export {router as updateUserRouter}