import { requireAuth } from "@jjecommerce2022/common";
import express, {Request,Response} from "express";
import {StatusCodes} from "http-status-codes";
import { Cart } from "../models/cart";


const router = express.Router();

router.post("/api/carts",
    requireAuth,
    async(req:Request,res:Response) => {
    
    const cart = Cart.build({...req.body,userId:req.currentUser!.id});
    await cart.save();

    res.status(StatusCodes.CREATED).send(cart);
})


export {router as createCartRouter}