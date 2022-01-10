import  mongoose from "mongoose";
import request from "supertest";
import { app } from "../../app";

const setup = async() => {
    const response = await request(app)
    .post("/api/auth/register")
    .send({
        username:"jibu",
        email:"jibu@abc.com",
        password:"password"
    })
    .expect(201);
    return response;
    
}

it("returns 401 if unauthorized access to thie api",async () => {
    const response = await setup();
    await request(app)
        .get(`/api/users`)
        //.set("Cookie",global.signinuser())
        .send({})
        .expect(401);
})

it("returns 200 if users found", async () => {
    const response = await setup();
    const updateResponse = await request(app)
        .put(`/api/users/${response.body.id}`)
        .set("Cookie",response.get("Set-Cookie"))
        .send({
            isAdmin:true
        }).expect(200)

    await request(app)
        .get(`/api/users`)
        .set("Cookie",updateResponse.get("Set-Cookie"))
        .send({})
        .expect(200)
});
