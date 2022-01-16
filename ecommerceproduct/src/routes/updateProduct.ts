import { BadRequestError, NotAuthorizedError, requireAuth } from "@jjecommerce2022/common";
import express, {Request,Response} from "express";
import { StatusCodes } from "http-status-codes";
import { Product } from "../models/product";


const router = express.Router();

router.put("/api/products/:productId",
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
        
        if(req.body.title){
            const titleExisting = await Product.findOne({title:req.body.title,_id:{$ne:req.params.productId}});
            if(titleExisting){
                throw new BadRequestError("Title in use");
            }
        }

        const updatedProduct = await Product.findByIdAndUpdate(req.params.productId,{$set:req.body},{new:true});
        res.status(StatusCodes.OK).send(updatedProduct);
    
    })


export {router as updateProductRouter}