import { BadRequestError, NotAuthorizedError, requireAuth } from "@jjecommerce2022/common";
import express, {Request,Response} from "express";
import { StatusCodes } from "http-status-codes";
import { Product } from "../models/product";


const router = express.Router();

router.delete("/api/products/:productId",
    requireAuth,
    async(req:Request,res:Response) => {

        //@ts-ignore
        if(!req.currentUser!.isAdmin){
            throw new NotAuthorizedError();
        }

        const existingProduct = await Product.findById(req.params.productId);
        if(!existingProduct){
            throw new BadRequestError("Product does not exists");
        }
        
        await Product.findByIdAndDelete(req.params.productId);
        res.status(StatusCodes.OK).send({});
    
    })


export {router as deleteProductRouter}