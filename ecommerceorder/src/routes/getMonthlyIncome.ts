import { BadRequestError, NotAuthorizedError, requireAuth } from "@jjecommerce2022/common";
import express,{Request,Response} from "express";
import { StatusCodes } from "http-status-codes";

import { now } from "mongoose";
import { Order } from "../models/order";


const router = express.Router();

router.get("/api/orders/analytics/income",
    requireAuth,
    async(req:Request,res:Response) => {

    if(!req.currentUser!.isAdmin){
        throw new NotAuthorizedError();
    }

    const date = new Date();
    const lastMonth = new Date(date.setMonth(date.getMonth()-1));

    let previousMonth = new Date(new Date().setMonth(lastMonth.getMonth()-1));  
    if(previousMonth.getMonth()+1 === 11 || previousMonth.getMonth()+1 === 12){
        previousMonth = new Date(previousMonth.setFullYear(previousMonth.getFullYear()-1));
    }
    
    const income = await Order.aggregate([
        {$match : {createdAt: {$gte:previousMonth}}},
        {
            $project:{ 
                month:{$month:"$createdAt"},
                sales:"$amount"
            },
        },
        {  
            $group :{
                _id:"$month",
                total:{$sum : "$sales"}
            }
        }    
    ]);

    res.status(StatusCodes.OK).send(income);
})

export {router as getMonthlyIncomeRouter}