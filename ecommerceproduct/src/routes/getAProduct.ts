import { BadRequestError } from "@jjecommerce2022/common";
import express , {Request,Response} from "express";
import { StatusCodes } from "http-status-codes";
import { Product } from "../models/product";


const router = express.Router();

router.get("/api/products/:productId",
    async(req:Request,res:Response)=>{
    
    const product = await Product.findById(req.params.productId);
    if(!product){
        throw new BadRequestError("Product does not exists");
    }
    res.status(StatusCodes.OK).send(product);
})

export {router as getAProductsRouter}