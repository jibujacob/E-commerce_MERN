import { BadRequestError, NotAuthorizedError, requireAuth, validateRequest } from "@jjecommerce2022/common";
import express,{Request,Response} from "express";
import {body} from "express-validator";
import { Product } from "../models/product";
import {StatusCodes} from "http-status-codes";

const router = express.Router();

router.post("/api/products",
    requireAuth,
    [
        body("title")
            .trim()
            .not()
            .isEmpty()
            .withMessage("Please provide title"),
        body("desc")
            .trim()
            .not()
            .isEmpty()
            .withMessage("Please provide description"),
        body("img")
            .trim()
            .not()
            .isEmpty()
            .withMessage("Please provide product image"),
        body("price")
            .trim()
            .not()
            .isEmpty()
            .withMessage("Please provide price of the product"),
    ],
    validateRequest,
    async (req:Request,res:Response) => {
    
    //@ts-ignore
    if(!req.currentUser!.isAdmin){
        throw new NotAuthorizedError();
    }

    const existingProduct = await Product.findOne({title:req.body.title});
    if(existingProduct){
        throw new BadRequestError("Product already exists");
    }

    const product = Product.build(req.body);
    await product.save();

    res.status(StatusCodes.CREATED).send(product);
});


export { router as createProductRouter}