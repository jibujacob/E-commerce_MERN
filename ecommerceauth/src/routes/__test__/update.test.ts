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

it("unauthorized user cannot call the update api",async () => {
    const response = await setup();
    await request(app)
    .put(`/api/users/${response.body.id}`)
    .send({
        username:"jibu",
        email:"jibu@abc.com",
        password:"password"
    })
    .expect(401);
});

it("same user or admin user only can delete their details",async () => {
    const response = await setup();
    await request(app)
    .put(`/api/users/${response.body.id}`)
    .set("Cookie",global.signinuser()[0])
    .send({
        username:"jibu",
        email:"jibu@abc.com",
        password:"password"
    })
    .expect(401);
});

it("return 400 if username and email already present is not present", async () => {
    const user1 = await setup();

    const user2 = await request(app)
        .post("/api/auth/register")
        .send({
            email:"test1@abc.com",
            password:"password",
            username:"test1"
        }).expect(201);

    await request(app)
        .put(`/api/users/${user1.body.id}`)
        .set('Cookie',user1.get("Set-Cookie"))
        .send({
            email:"test1@abc.com",
            password:"password",
            username:"test1"
        }).expect(400); 

});

it("return 200 if user is autheticated", async () => {
    const user1 = await setup();
    
    const response = await request(app)
            .put(`/api/users/${user1.body.id}`)
            .set('Cookie',user1.get("Set-Cookie"))
            .send({
                email:"jibu1@abc.com",
                password:"password1",
                username:"jibu1"
            }).expect(200);
    
    const updatedUser = await User.findById(user1.body.id);
    expect(updatedUser!.email).toEqual("jibu1@abc.com");
    expect(updatedUser!.username).toEqual("jibu1");
    expect(response.get("Set-Cookie")).toBeDefined();

});