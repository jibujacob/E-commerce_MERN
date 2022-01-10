import mongoose from "mongoose";

interface UserAttrs{
    username : string;
    email : string;
    password : string;
}

interface UserModel extends mongoose.Model<UserDoc>{
    build(attrs:UserAttrs):UserDoc;
}

interface UserDoc extends mongoose.Document{
    username : string;
    email : string;
    password : string;
    isAdmin : boolean
}

const userSchema = new mongoose.Schema({
    username : {
        type:String,
        required:true,
        unique:true
    },
    email : {
        type:String,
        required:true,
        unique:true
    },
    password : {
        type:String,
        required:true,
    },
    isAdmin :{
        type: Boolean,
        default: false
    }
},{
    toJSON:{
        transform(doc,ret){
            ret.id = ret._id;
            delete ret.id;
            delete ret.password;
            delete ret.__v;
        }
    },
    timestamps:true
});


const User = mongoose.model("User",userSchema);

export {User}