import { requireAuth } from "@jjecommerce2022/common";
import express ,{Request,Response} from "express";
import { stripe } from "../stripe";

const router = express.Router();

router.post("/api/payments",
        requireAuth,
        async(req:Request,res:Response)=>{

     const stripeCharge = await stripe.charges.create({
         currency:"inr",
         amount: req.body.amount * 100,
         source: req.body.tokenId,
         description:"Test"
     })
})

export {router as stripeRouter}