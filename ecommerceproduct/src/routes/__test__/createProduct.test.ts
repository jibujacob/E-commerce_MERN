import request from "supertest";
import { app } from "../../app";
import { Product } from "../../models/product";

it("return 401 when user not authorised access the api" , async()=>{ 
    await request(app)
        .post("/api/products")
        .send({
            title:"Books",
            desc:"Description",
            img:"path of image",
            categories:"product category",
            price:15
        }).expect(401);
});

it("return 401 when user who is not admin tries to access the api" , async()=>{

    await request(app)
        .post("/api/products")
        .set("Cookie",global.signinusernotadmin())
        .send({
            title:"Books",
            desc:"Description",
            img:"path of image",
            categories:"product category",
            price:15
        }).expect(401);
});

it("return 400 when mandatory attributes are not passed as inputs" , async()=>{
    await request(app)
        .post("/api/products")
        .set("Cookie", global.signinusernotadmin())
        .send({
        }).expect(400);
});

it("return 400 when product title already exists" , async()=>{
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
    
    products = await Product.find({});
    expect(products.length).toEqual(1);

    await request(app)
        .post("/api/products")
        .set("Cookie",global.signinuser())
        .send({
            title:"Books",
            desc:"Description",
            img:"path of image",
            categories:"product category",
            price:15
        }).expect(400);
});

it("return 201 when product created successfully" , async()=>{
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
    
    products = await Product.find({});
    expect(products.length).toEqual(1);
});