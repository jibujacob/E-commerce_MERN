import React from "react";
import {render ,screen} from "@testing-library/react";
import {BrowserRouter as Router} from "react-router-dom";

import Product from "../Product";


const product =
    {
      id:1,
      img:"https://d3o2e4jr3mxnm3.cloudfront.net/Mens-Jake-Guitar-Vintage-Crusher-Tee_68382_1_lg.png",
    }

describe("Product Component Testing",()=>{

    beforeEach(()=>{
        render(<Router><Product item={product}/></Router>);
    });

    it("product component renders",()=>{
        expect(screen.getByTestId("Product")).toBeInTheDocument();
    });

    it("image passed as props to be rendered",()=>{
        expect(screen.getByRole("img",{name:"Product Image",src: `${product.img}`})).toBeInTheDocument();
    });

    it("product link to be available based on props passed",()=>{
        expect(screen.getByRole("link",{name:"",href:`/product/${product.id}`})).toBeInTheDocument();
    })

    it("Shopping Cart Icon to be available on render",()=>{
        expect(screen.getByTestId("ShoppingCartOutlinedIcon")).toBeInTheDocument();
    });

    it("Favourite Icon to be available on render",()=>{
        expect(screen.getByTestId("FavoriteBorderOutlinedIcon")).toBeInTheDocument();
    });
});