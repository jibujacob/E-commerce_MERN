import { BadRequestError, NotAuthorizedError, requireAuth } from "@jjecommerce2022/common";
import express, {Request,Response} from "express";
import {StatusCodes} from "http-status-codes";
import { Order } from "../models/order";


const router = express.Router();

router.delete("/api/orders/:orderId",
    requireAuth,
    async(req:Request,res:Response) => {
    
    const existingCart = await Order.findById(req.params.orderId);
    if(!existingCart){
        throw new BadRequestError("Order does not exists");
    }

    // if(existingCart.userId !== req.currentUser!.id){
    //     throw new NotAuthorizedError();
    // }

    if(!req.currentUser!.isAdmin){
        throw new NotAuthorizedError();
    }

    await Order.findByIdAndDelete(req.params.orderId);
    res.status(StatusCodes.OK).send({});
})


export {router as deleteOrderRouter}