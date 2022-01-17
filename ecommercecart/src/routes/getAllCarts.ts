import { NotAuthorizedError, requireAuth } from "@jjecommerce2022/common";
import express , {Request,Response} from "express";
import { StatusCodes } from "http-status-codes";
import { Cart } from "../models/cart";


const router = express.Router();

router.get("/api/carts",
    requireAuth,
    async(req:Request,res:Response)=> {
        
        if(!req.currentUser!.isAdmin){
            throw new NotAuthorizedError()
        }

        const carts = await Cart.find({});
        res.status(StatusCodes.OK).send(carts)
    })

export { router as getAllCartsRouter}