import mongoose from "mongoose";

import {OrderStatus} from "@jjecommerce2022/common"

interface OrderAttrs{

}

interface OrderModel extends mongoose.Model<OrderDoc>{
    build(attrs:OrderAttrs):OrderDoc;
}

interface OrderDoc extends mongoose.Document{

}

const orderSchema = new mongoose.Schema({
    userId:{
        type : String,
        required : true,  
    },
    products : [
        {
            productId: {
                type : String,
            },
            quantity:{
                type: Number,
                default : 1
            }
        }
    ],
    amount: {
        type: Number,
        required:true
    },
    address:{
        type: Object,
        required:true,
    },
    status:{
        type:String,
        default:OrderStatus.Inprogress
    }
},{
    toJSON:{
        transform(doc,ret){
            ret.id = ret._id;
            delete ret.id;
            delete ret.__v;
        }
    },
    timestamps:true
});


const Order = mongoose.model("Order",orderSchema);

export {Order}