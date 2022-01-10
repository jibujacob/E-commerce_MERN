import { BadRequestError, validateRequest } from "@jjecommerce2022/common";
import express,{Request,Response} from "express";
import { body } from "express-validator";
import { StatusCodes } from "http-status-codes";
import jwt from "jsonwebtoken";

import { User } from "../models/user";
import { Password } from "../services/password";


const router = express.Router();

router.post("/api/auth/login", 
    [
        body("username")
            .trim()
            .not()
            .isEmpty()
            .withMessage("Please provide username"),
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

    const {username,password} = req.body;

    const existingUser = await User.findOne({username});
    if(!existingUser){
        throw new BadRequestError("Invalid Credentials");
    }
    
    const isPasswordMatching = await Password.compare(password,existingUser.password)
    if(!isPasswordMatching){
        throw new BadRequestError("Invalid Credentials");
    }

    // Generate JWT
    const userJwt = jwt.sign(
        {
          id: existingUser.id,
          email: existingUser.email,
          isAdmin : existingUser.isAdmin,
          username:existingUser.username,
        },
        process.env.JWT_KEY!,
        {expiresIn:"1d"}
      );
  
    // Store it on session object
    req.session = {
      jwt: userJwt,
    };

    res.status(StatusCodes.OK).send(existingUser);
});

export {router as loginRouter}