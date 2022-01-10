import request from "supertest";
import { app } from "../../app";
import { User } from "../../models/user";

const setup = async() => {
    await request(app)
    .post("/api/users/register")
    .send({
        username:"jibu",
        email:"jibu@abc.com",
        password:"password"
    })
    .expect(201);
}

it("return 400 if madatory inputs are not provided",async()=>{
    await setup();
    await request(app)
        .post("/api/users/login")
        .send({})
        .expect(400);
});

it("returns a 400 code if password lenght is less than 6 or more than 20", async () =>{
    await setup();
    await request(app)
            .post("/api/users/login")
            .send({
                username:"jibu",
                password: "pera"
            }).expect(400);
    await request(app)
            .post("/api/users/login")
            .send({
                username:"jibu",
                password: "pefsfsegsegsgfsrsgrsgsrfsrgrsgsgra"
            }).expect(400);
});

it("returns 400 if the user does not exists", async () => {
    await request(app)
            .post("/api/users/login")
            .send({
                username:"jibu",
                password: "pefsfsegsegsgfsrsgrsgsrfsrgrsgsgra"
            }).expect(400);
});

it("returns 400 if the paswords does not match", async () => {
    await setup();
    await request(app)
            .post("/api/users/login")
            .send({
                username:"jibu",
                password: "pefsfsegsegsgfsrsgrsgsrfsrgrsgsgra"
            }).expect(400);
});

it("returns 200 if login successfull", async () => {
    await setup();
    await request(app)
            .post("/api/users/login")
            .send({
                username:"jibu",
                password: "password"
            }).expect(200);
});

it('sets a cookie after successful signup', async () => {
    await setup();
    const response = await request(app)
      .post('/api/users/login')
      .send({
        username:"jibu",
        password: 'password'
      })
      .expect(200);
  
    expect(response.get('Set-Cookie')).toBeDefined();
  });


