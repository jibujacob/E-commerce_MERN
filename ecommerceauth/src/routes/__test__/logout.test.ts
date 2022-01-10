import request from "supertest";
import {app} from "../../app";

it("clears the cookie after sign out" , async () =>{
    await request(app)
        .post("/api/auth/register")
        .send({
            email:"test@abc.com",
            username:"test",
            password: "password"
        }).expect(201);
    
    const response = await request(app)
        .post("/api/auth/logout")
        .send({})
        .expect(200);
    
    expect(response.get("Set-Cookie")[0]).toEqual(
        "session=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT; httponly"
    ) ;
})