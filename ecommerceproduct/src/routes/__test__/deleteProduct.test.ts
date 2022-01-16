import request from "supertest";
import { app } from "../../app";
import mongoose from "mongoose";

it("return 401 when unauthorized tries to access api" ,async()=>{
    const id = new mongoose.Types.ObjectId().toHexString();
    await request(app)
        .delete(`/api/products/${id}`)
        .send({})
        .expect(401);
});

it("return 401 when user who is not admin tries to access api" ,async()=>{
    const id = new mongoose.Types.ObjectId().toHexString();
    await request(app)
        .delete(`/api/products/${id}`)
        .set("Cookie",global.signinusernotadmin())
        .send({})
        .expect(401);

});

it("return 400 when product id does not exists" ,async()=>{
    const id = new mongoose.Types.ObjectId().toHexString();
    await request(app)
        .delete(`/api/products/${id}`)
        .set("Cookie",global.signinuser())
        .send({})
        .expect(400);
});

it("return 200 when product updated successfully" ,async()=>{
    const response = await request(app)
        .post("/api/products")
        .set("Cookie",global.signinuser())
        .send({
            title:"Books",
            desc:"Description",
            img:"path of image",
            categories:"product category",
            price:15
        }).expect(201);
    
    await request(app)
        .delete(`/api/products/${response.body.id}`)
        .set("Cookie",global.signinuser())
        .send({
            title:"Books1",
            desc:"Description",
            img:"path of image",
            categories:"product category",
            price:15
        })
        .expect(200);
});