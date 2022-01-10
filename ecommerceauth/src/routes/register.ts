import { BadRequestError, validateRequest } from "@jjecommerce2022/common";
import express, {Request,Response} from "express";
import { body } from "express-validator";
import {StatusCodes} from "http-status-codes";
import jwt from "jsonwebtoken";

import { User } from "../models/user";

const router = express.Router();

router.post("/api/users/register",
    [
        body("username")
            .trim()
            .not()
            .isEmpty()
            .withMessage("Please provide username"),
        body("email")
            .trim()
            .isEmail()
            .withMessage("Please provide valid email"),
        body("password")
            .trim()
            .not()
            .isEmpty()
            .withMessage("Please provide password")
            .isLength({min:6,max:20})
            .withMessage("Password to be between 6 to 20 characters"),
    ],
    validateRequest,
    async (req:Request,res:Response) => {

    const {username,email,password} = req.body;

    const existingUser = await User.findOne({username});
    if(existingUser){
        throw new BadRequestError("User in use");
    }

    const existingEmail = await User.findOne({email});
    if(existingEmail){
        throw new BadRequestError("Email in use");
    }

    const user = User.build({username,email,password});
    await user.save();

    // Generate JWT
    const userJwt = jwt.sign(
        {
          id: user.id,
          email: user.email,
          isAdmin : user.isAdmin
        },
        process.env.JWT_KEY!,
        {expiresIn:"1d"}
      );
  
    // Store it on session object
    req.session = {
      jwt: userJwt,
    }; 
    
    
    res.status(StatusCodes.CREATED).send(user);
});

export {router as registerRouter}