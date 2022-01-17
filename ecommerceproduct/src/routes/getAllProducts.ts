import express , {Request,Response} from "express";
import { StatusCodes } from "http-status-codes";
import { Product } from "../models/product";


const router = express.Router();
interface PostQuery{
    categories?:any;
    new?:boolean
}

router.get("/api/products",
    async(req:Request,res:Response)=>{

    let queryObject:PostQuery={};

    const queryNew = req.query.new==="true"? true : false;
    const queryCategory = req.query.category?.toString().toLowerCase();

    if(queryCategory){
        queryObject.categories = {$in:[queryCategory]};
    }

    if(queryNew){
        queryObject.new = queryNew; 
    }

    let results = Product.find(queryObject);
    if(queryNew){
        results=results.sort({createdAt:-1}).limit(5);
    }
    const products = await results;
    res.status(StatusCodes.OK).send(products)
})

export {router as getAllProductsRouter}