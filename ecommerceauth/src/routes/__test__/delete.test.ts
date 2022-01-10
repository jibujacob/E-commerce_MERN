import request from "supertest";
import { app } from "../../app";
import { User } from "../../models/user";

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

it("unauthorized user cannot call the delete api",async () => {
    const response = await setup();
    await request(app)
    .delete(`/api/users/${response.body.id}`)
    .send({})
    .expect(401);
});

it("same user or admin user only can delete their details",async () => {
    const response = await setup();
    await request(app)
    .delete(`/api/users/${response.body.id}`)
    .set("Cookie",global.signinuser())
    .send({})
    .expect(401);
});


it("return 200 if user is autheticated", async () => {
    const user1 = await setup();
    
    let users = await User.find({})
    expect(users.length).toEqual(1);
    const response = await request(app)
            .delete(`/api/users/${user1.body.id}`)
            .set('Cookie',user1.get("Set-Cookie"))
            .send({}).expect(200);
    
    users = await User.find({})
    expect(users.length).toEqual(0);
});