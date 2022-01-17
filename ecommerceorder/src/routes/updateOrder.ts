import { BadRequestError, NotAuthorizedError, requireAuth } from "@jjecommerce2022/common";
import express, {Request,Response} from "express";
import {StatusCodes} from "http-status-codes";
import { Order } from "../models/order";



const router = express.Router();

router.put("/api/orders/:orderId",
    requireAuth,
    async(req:Request,res:Response) => {

    if(!req.currentUser!.isAdmin){
        throw new NotAuthorizedError();
    }
    
    const existingOrder = await Order.findById(req.params.orderId);
    if(!existingOrder){
        throw new BadRequestError("Order does not exists");
    }

    // if(existingOrder.userId !== req.currentUser!.id){
    //     throw new NotAuthorizedError();
    // }
    const updatedOrder = await Order.findByIdAndUpdate(req.params.orderId,{$set:req.body},{new:true});
    res.status(StatusCodes.OK).send(updatedOrder);
})


export {router as updateOrderRouter}