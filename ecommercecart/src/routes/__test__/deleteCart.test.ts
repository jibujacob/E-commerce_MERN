import request from "supertest";
import { app } from "../../app";
import mongoose from "mongoose";

it("returns 401 if unauthorized user tries to delete cart",async()=>{
    const id = new mongoose.Types.ObjectId().toHexString();
    await request(app)
        .delete(`/api/carts/${id}`)
        .send({})
        .expect(401)
});

it("returns 400 if cart does not exists",async()=>{
    const id = new mongoose.Types.ObjectId().toHexString();
    await request(app)
        .delete(`/api/carts/${id}`)
        .set("Cookie",global.signinuser())
        .send({})
        .expect(400)
});

it("returns 401 if cart does not belog to the logged in user",async()=>{
    const response = await request(app)
        .post("/api/carts")
        .set("Cookie",global.signinuser())
        .send({products:[
                {productId:"124123124",
                quantity:1
            }

        ]})
        .expect(201)

    const id = new mongoose.Types.ObjectId().toHexString();
    await request(app)
        .delete(`/api/carts/${response.body.id}`)
        .set("Cookie",global.signinuser())
        .send({})
        .expect(401)
});

it("returns 200 if cart is deleted",async()=>{
    const user = global.signinuser();
    const response = await request(app)
        .post("/api/carts")
        .set("Cookie",user)
        .send({products:[
                {productId:"124123124",
                quantity:1
            }

        ]})
        .expect(201)

    const id = new mongoose.Types.ObjectId().toHexString();
    await request(app)
        .delete(`/api/carts/${response.body.id}`)
        .set("Cookie",user)
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