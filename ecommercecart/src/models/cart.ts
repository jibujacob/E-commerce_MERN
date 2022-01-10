import mongoose from "mongoose";

interface CartItems{
    productId:string;
    quantity:number
}

interface CartAttrs{
    userId: string;
    product : Array<CartItems>
}

interface CartModel extends mongoose.Model<CartDoc>{
    build(attrs:CartAttrs):CartDoc;
}

interface CartDoc extends mongoose.Document{
    userId: string;
    product : Array<CartItems>
}

const cartSchema = new mongoose.Schema({
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
    ]
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


const Cart = mongoose.model("Cart",cartSchema);

export {Cart}