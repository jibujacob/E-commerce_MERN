import { requireAuth } from "@jjecommerce2022/common";
import express,{Request,Response} from "express";
import {StatusCodes} from "http-status-codes";

import { Order } from "../models/order";


const router = express.Router();

router.post("/api/orders",
    requireAuth,
    async (req:Request,res:Response) => {

        const order = Order.build({...req.body,userId:req.currentUser!.id});
        await order.save();
    
        res.status(StatusCodes.CREATED).send(order);
});


export {router as createOrderRouter}