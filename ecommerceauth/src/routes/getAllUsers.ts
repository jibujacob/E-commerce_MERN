import { BadRequestError, NotAuthorizedError, NotFoundError, requireAuth } from "@jjecommerce2022/common";
import express, {Request,Response} from "express"
import { StatusCodes } from "http-status-codes";
import { User } from "../models/user";

const router = express.Router();

router.get("/api/users" , 
    requireAuth,
    async (req:Request,res:Response) => {
    
    const query = req.query.new;
    //@ts-ignore
    if(!req.currentUser!.isAdmin){
        throw new NotAuthorizedError();
    }

    const user = query ? await User.find({}).sort({_id:-1}).limit(5) : await User.find({});

    res.status(StatusCodes.OK).send(user)
})

export {router as getAllUserRouter}