import request from "supertest";
import { app } from "../../app";
import mongoose from "mongoose";
import { OrderStatus } from "@jjecommerce2022/common";

it("returns 401 if unauthorized user tries to update order",async()=>{
    const id = new mongoose.Types.ObjectId().toHexString();
    await request(app)
        .put(`/api/orders/${id}`)
        .send({})
        .expect(401)
});

it("returns 400 if order does not exists",async()=>{
    const id = new mongoose.Types.ObjectId().toHexString();
    await request(app)
        .put(`/api/orders/${id}`)
        .set("Cookie",global.signinuserAdmin()[0])
        .send({})
        .expect(400)
});

it("returns 401 if logged in user is not admin",async()=>{
    const response = await request(app)
        .post("/api/orders")
        .set("Cookie",global.signinuser()[0])
        .send({
            products:[
            {productId:"124123124",
            quantity:1
            }],
            amount:200,
            address:{
                city:"Kott",
                state:"Kla"
            },
            status:OrderStatus.Inprogress
        })
        .expect(201)

    const id = new mongoose.Types.ObjectId().toHexString();
    await request(app)
        .put(`/api/orders/${response.body.id}`)
        .set("Cookie",global.signinuser()[0])
        .send({})
        .expect(401)
});

it("returns 200 if logged in user is admin",async()=>{
    const user = global.signinuser()[0];
    const response = await request(app)
        .post("/api/orders")
        .set("Cookie",user)
        .send({
            products:[
            {productId:"124123124",
            quantity:1
            }],
            amount:200,
            address:{
                city:"Kott",
                state:"Kla"
            },
            status:OrderStatus.Inprogress
        })
        .expect(201)

    await request(app)
        .put(`/api/orders/${response.body.id}`)
        .set("Cookie",global.signinuserAdmin()[0])
        .send({products:[
            {productId:"124123124",
            quantity:1
            },
            {productId:"1fe123124",
            quantity:1
            },
        ]})
        .expect(200)
});