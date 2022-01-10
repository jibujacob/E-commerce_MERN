
import request from "supertest";
import {app} from "../../app";

it("responds with details about the current user" , async () => {
    const cookie = await global.signin()
    const response = await request(app)
                .get("/api/auth/currentUser")
                .set('Cookie',cookie)
                .send()
                .expect(200); 
    
    expect(response.body.currentUser.email).toEqual('test@abc.com');
});

it("responds with null about the current user if not authenticated" , async () => {
    const response = await request(app)
                .get("/api/auth/currentUser")
                .send()
                .expect(200); 
    
    expect(response.body.currentUser).toEqual(null);
});