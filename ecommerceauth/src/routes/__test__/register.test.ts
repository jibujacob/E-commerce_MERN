import request from "supertest";
import { app } from "../../app";
import { User } from "../../models/user";

it("return 400 if madatory inputs are not provided",async()=>{
    await request(app)
        .post("/api/users/register")
        .send({})
        .expect(400);
});

it("returns a 400 code with an invalid email", async () => {
    await request(app)
            .post("/api/users/register")
            .send({
                username:"jibu",
                email:"abc",
                password: "perarefef"
            }).expect(400);
});

it("returns a 400 code if mandatory attributes are not provided", async () => {
    await request(app)
            .post("/api/users/register")
            .send({
                email:"jibu@abc.com",
                password: "perarefef"
            }).expect(400);
    await request(app)
            .post("/api/users/register")
            .send({
                username:"jibu",
                password: "perarefef"
            }).expect(400);
    await request(app)
            .post("/api/users/register")
            .send({
                username:"jibu",
                email:"jibu@abc.com",
            }).expect(400);
});

it("returns a 400 code if password lenght is less than 6 or more than 20", async () =>{
    await request(app)
            .post("/api/users/register")
            .send({
                username:"jibu",
                email:"jibu@abc.com",
                password: "pera"
            }).expect(400);
    await request(app)
            .post("/api/users/register")
            .send({
                username:"jibu",
                email:"jibu@abc.com",
                password: "pefsfsegsegsgfsrsgrsgsrfsrgrsgsgra"
            }).expect(400);
});

it("returns a 400 if user already exists", async () =>{
    await request(app)
            .post("/api/users/register")
            .send({
                username:"jibu",
                email:"jibu@abc.com",
                password: "perefsefa"
            }).expect(201);
    await request(app)
            .post("/api/users/register")
            .send({
                username:"jibu",
                email:"jibu@abc.com",
                password: "pefsfsegsegsgfsrsgrsgsrfsrgrsgsgra"
            }).expect(400);
});


it("returns 201 if user is successfully registered",async()=>{
    let users = await User.find({})
    expect(users.length).toEqual(0);
    
    await request(app)
        .post("/api/users/register")
        .send({
            username:"jibujacob",
            password:"fefefeffae",
            email:"jibu@abc.com",
        })
        .expect(201);
    
    users = await User.find({})
    expect(users.length).toEqual(1); 
});

it('sets a cookie after successful signup', async () => {
    const response = await request(app)
      .post('/api/users/register')
      .send({
        username:"test",
        email: 'test@test.com',
        password: 'password'
      })
      .expect(201);
  
    expect(response.get('Set-Cookie')).toBeDefined();
  });