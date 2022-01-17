import { NotAuthorizedError, requireAuth } from "@jjecommerce2022/common";
import express , {Request,Response} from "express";
import { StatusCodes } from "http-status-codes";
import { Order } from "../models/order";



const router = express.Router();

router.get("/api/orders",
    requireAuth,
    async(req:Request,res:Response)=> {
        
        if(!req.currentUser!.isAdmin){
            throw new NotAuthorizedError()
        }

        const orders = await Order.find({});
        res.status(StatusCodes.OK).send(orders)
    })

export { router as getAllCartsRouter}