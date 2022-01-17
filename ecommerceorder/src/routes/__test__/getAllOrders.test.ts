import request from "supertest";
import { app } from "../../app";
import mongoose from "mongoose";
import { OrderStatus } from "@jjecommerce2022/common";

it("returns 401 if unauthorised user tries to access this api",async () => {
    const id = new mongoose.Types.ObjectId().toHexString();
    await request(app)
        .get(`/api/orders`)
        .send({})
        .expect(401)
});

it("returns 401 if not user is not admin",async () => {
    const [cookie,userId] = global.signinuser();
    const response = await request(app)
        .post("/api/orders")
        .set("Cookie",cookie)
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
        .get(`/api/orders`)
        .set("Cookie",global.signinuser()[0])
        .send({})
        .expect(401)
});

it("returns 200 if admin user tries to access this api",async () => {
    const [cookie,userId] = global.signinuser();
    const response = await request(app)
        .post("/api/orders")
        .set("Cookie",cookie)
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
        .get(`/api/orders`)
        .set("Cookie",global.signinuserAdmin()[0])
        .send({})
        .expect(200)
});