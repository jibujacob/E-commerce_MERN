import mongoose from "mongoose";

interface ProductAttrs{
    title : string;
    desc : string;
    img : string;
    categories : Array<string>;
    size?: Array<string>;
    color?: Array<string>;
    price : number;
    inStock?: boolean;
}

interface ProductModel extends mongoose.Model<ProductDoc>{
    build(attrs:ProductAttrs):ProductDoc;
}

interface ProductDoc extends mongoose.Document{
    title : string;
    desc : string;
    img : string;
    categories : Array<string>;
    size?: Array<string>;
    color?: Array<string>;
    price : number;
    inStock?: boolean;
}

const productSchema = new mongoose.Schema({
    title:{
        type : String,
        required : true,
        unique : true
    },
    desc:{
        type : String,
        required : true
    },
    img:{
        type : String,
        required : true
    },
    categories:{
        type : Array
    },
    size:{
        type : Array
    },
    color:{
        type : Array
    },
    price:{
        type : Number,
        required : true
    },
    inStock:{
        type:Boolean,
        default:true
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

productSchema.statics.build = (attrs:ProductAttrs) => {
    return new Product(attrs);
}

const Product = mongoose.model<ProductDoc,ProductModel>("Product",productSchema);

export {Product}