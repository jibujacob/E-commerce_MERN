import request from "supertest";
import { app } from "../../app";
import mongoose from "mongoose";

it("returns 401 if unauthorised user tries to access this api",async () => {
    const id = new mongoose.Types.ObjectId().toHexString();
    await request(app)
        .get(`/api/carts/${id}`)
        .send({})
        .expect(401)
});

it("returns 401 if not owner user tries to access this api",async () => {
    const [cookie,userId] = global.signinuser();
    const response = await request(app)
        .post("/api/carts")
        .set("Cookie",cookie)
        .send({products:[
                {productId:"124123124",
                quantity:1
            }

        ]})
        .expect(201)

    await request(app)
        .get(`/api/carts/${userId}`)
        .set("Cookie",global.signinuser()[0])
        .send({})
        .expect(401)
});

it("returns 200 if owner user tries to access this api",async () => {
    const [cookie,userId] = global.signinuser();
    const response = await request(app)
        .post("/api/carts")
        .set("Cookie",cookie)
        .send({products:[
                {productId:"124123124",
                quantity:1
            }

        ]})
        .expect(201)

    await request(app)
        .get(`/api/carts/${userId}`)
        .set("Cookie",cookie)
        .send({})
        .expect(200)
});