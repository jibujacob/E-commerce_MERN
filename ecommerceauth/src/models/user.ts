import mongoose from "mongoose";
import { Password } from "../services/password";

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
    isAdmin : boolean;
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
            delete ret._id;
            delete ret.password;
            delete ret.__v;
        }
    },
    timestamps:true
});

userSchema.pre("save", async function(next){
    if(this.isModified("password")){
        const hashed = await Password.toHash(this.get("password"));
        this.set("password",hashed);
        next();
    }
});

userSchema.statics.build = (attrs:UserAttrs)=>{
    return new User(attrs);
};


const User = mongoose.model<UserDoc,UserModel>("User",userSchema);

export {User}