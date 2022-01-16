import { BadRequestError, NotAuthorizedError, requireAuth } from "@jjecommerce2022/common";
import express, {Request,Response} from "express";
import {StatusCodes} from "http-status-codes";
import { Cart } from "../models/cart";


const router = express.Router();

router.put("/api/carts/:cartId",
    requireAuth,
    async(req:Request,res:Response) => {
    
    const existingCart = await Cart.findById(req.params.cartId);
    if(!existingCart){
        throw new BadRequestError("Cart does not exists");
    }

    if(existingCart.userId !== req.currentUser!.id){
        throw new NotAuthorizedError();
    }

    const updatedCart = await Cart.findByIdAndUpdate(req.params.cartId,{$set:req.body},{new:true});
    res.status(StatusCodes.OK).send(updatedCart);
})


export {router as updateCartRouter}