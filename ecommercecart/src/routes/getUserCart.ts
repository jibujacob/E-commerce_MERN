import { NotAuthorizedError, requireAuth } from "@jjecommerce2022/common";
import express , {Request,Response} from "express";
import { StatusCodes } from "http-status-codes";
import { Cart } from "../models/cart";


const router = express.Router();

router.get("/api/carts/:userId",
    requireAuth,
    async(req:Request,res:Response)=> {
        if(req.params.userId !== req.currentUser!.id){
            throw new NotAuthorizedError()
        }

        const cart = await Cart.findOne({userId:req.params.userId});
        res.status(StatusCodes.OK).send(cart)
    })

export { router as getUserCartRouter}