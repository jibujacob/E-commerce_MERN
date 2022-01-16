import mongoose from "mongoose";

interface ProductAttrs{
    title : string;
    desc : string;
    img : string;
    categories : Array<string>;
    size?: string;
    color?: string;
    price : number;
}

interface ProductModel extends mongoose.Model<ProductDoc>{
    build(attrs:ProductAttrs):ProductDoc;
}

interface ProductDoc extends mongoose.Document{
    title : string;
    desc : string;
    img : string;
    categories : Array<string>;
    size?: string;
    color?: string;
    price : number;
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
        type : Array,
        required : true
    },
    size:{
        type : String
    },
    color:{
        type : String
    },
    price:{
        type : Number,
        required : true
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