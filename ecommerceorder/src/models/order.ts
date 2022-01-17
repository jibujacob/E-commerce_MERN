import mongoose from "mongoose";

import {OrderStatus} from "@jjecommerce2022/common"

interface CartItems{
    productId:string;
    quantity:number;
}

interface OrderAttrs{
    userId:string;
    products:Array<CartItems>;
    amount:number;
    address:Object;
    status:OrderStatus;

}

interface OrderModel extends mongoose.Model<OrderDoc>{
    build(attrs:OrderAttrs):OrderDoc;
}

interface OrderDoc extends mongoose.Document{
    userId:string;
    products:Array<CartItems>;
    amount:number;
    address:Object;
    status:OrderStatus;
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
            delete ret._id;
            delete ret.__v;
        }
    },
    timestamps:true
});

orderSchema.statics.build = (attrs:OrderAttrs) => {
    return new Order(attrs)
}

const Order = mongoose.model<OrderDoc,OrderModel>("Order",orderSchema);

export {Order}