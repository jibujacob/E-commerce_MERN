import request from "supertest";
import { app } from "../../app";
import mongoose from "mongoose";
import { Product } from "../../models/product";


it("returns 400 if the product does not exists",async () => {
    const id = new mongoose.Types.ObjectId().toHexString();
    await request(app)
            .get(`/api/products/${id}`)
            .send({}).expect(400);

});

it("returns 200 and fetch the  products" , async()=> {
    let products = await Product.find({});
    expect(products.length).toEqual(0);

    const response = await request(app)
        .post("/api/products")
        .set("Cookie",global.signinuser())
        .send({
            title:"Books",
            desc:"Description",
            img:"path of image",
            categories:"product category",
            price:15
        }).expect(201);
    

    const getresponse = await request(app)
            .get(`/api/products/${response.body.id}`)
            .send({}).expect(200);

    expect(response.body.title).toEqual(getresponse.body.title);
    
})