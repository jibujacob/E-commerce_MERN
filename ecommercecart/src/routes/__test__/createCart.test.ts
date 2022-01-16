import request from "supertest";
import { app } from "../../app";

it("returns 401 if unauthorized user tries to create cart",async()=>{
    await request(app)
        .post("/api/carts")
        .send({})
        .expect(401)
})

it("returns 201 if authorized user tries to create cart",async()=>{
    await request(app)
        .post("/api/carts")
        .set("Cookie",global.signinuser())
        .send({products:[
                {productId:"124123124",
                quantity:1
            }

        ]})
        .expect(201)
})