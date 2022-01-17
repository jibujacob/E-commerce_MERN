import { NotAuthorizedError, requireAuth } from "@jjecommerce2022/common";
import express , {Request,Response} from "express";
import { StatusCodes } from "http-status-codes";
import { Order } from "../models/order";


const router = express.Router();

router.get("/api/orders/:userId",
    requireAuth,
    async(req:Request,res:Response)=> {
        if(req.params.userId !== req.currentUser!.id){
            throw new NotAuthorizedError()
        }

        const orders = await Order.find({userId:req.params.userId});
        res.status(StatusCodes.OK).send(orders)
    })

export { router as getUserOrderRouter}