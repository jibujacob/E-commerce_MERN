import { OrderStatus } from "@jjecommerce2022/common";
import request from "supertest";
import { app } from "../../app";

it("returns 401 if unauthorized user tries to create cart",async()=>{
    await request(app)
        .post("/api/orders")
        .send({})
        .expect(401)
})

it("returns 201 if authorized user tries to create cart",async()=>{
    await request(app)
        .post("/api/orders")
        .set("Cookie",global.signinuser())
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
})