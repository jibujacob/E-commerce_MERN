import { BadRequestError, NotAuthorizedError, NotFoundError, requireAuth } from "@jjecommerce2022/common";
import express, {Request,Response} from "express"
import { StatusCodes } from "http-status-codes";
import { User } from "../models/user";

const router = express.Router();

router.get("/api/users/:userId" , 
    requireAuth,
    async (req:Request,res:Response) => {
    
    //@ts-ignore
    if(!req.currentUser!.isAdmin){
        throw new NotAuthorizedError();
    }

    const user = await User.findById(req.params.userId);
    if(!user){
        throw new NotFoundError();
    }

    res.status(StatusCodes.OK).send(user)
})

export {router as getUserRouter}