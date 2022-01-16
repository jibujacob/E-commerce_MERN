import request from "supertest";
import { app } from "../../app";
import { Product } from "../../models/product";

it("fetch all the available products" , async()=> {
    let products = await Product.find({});
    expect(products.length).toEqual(0);

    await request(app)
        .post("/api/products")
        .set("Cookie",global.signinuser())
        .send({
            title:"Books",
            desc:"Description",
            img:"path of image",
            categories:"product category",
            price:15
        }).expect(201);
    
    await request(app)
        .post("/api/products")
        .set("Cookie",global.signinuser())
        .send({
            title:"Books1",
            desc:"Description",
            img:"path of image",
            categories:"product category",
            price:15
        }).expect(201);

    const response = await request(app)
            .get("/api/products")
            .send({}).expect(200);

    products = await Product.find({});
    expect(products.length).toEqual(response.body.length);
    
})