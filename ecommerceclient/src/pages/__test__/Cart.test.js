import React from "react";
import {render ,screen} from "@testing-library/react";
import { Provider } from 'react-redux';
import {BrowserRouter as Router} from "react-router-dom";

import {store} from "../../redux/store";
import Cart from "../Cart";

describe("Cart Page Testing, when cart state empty",()=>{

    beforeEach(()=>{
        render(<Provider store={store}><Router><Cart/></Router></Provider>);
    })

    it("Cart Page should incorporate Announcement,Navbar and Footer components",()=>{
        expect(screen.getByTestId("CartPage")).toBeInTheDocument();
        expect(screen.getByTestId("Announcement")).toBeInTheDocument();
        expect(screen.getByTestId("Navbar")).toBeInTheDocument(); 
        expect(screen.getByTestId("Footer")).toBeInTheDocument();
    })

    it("heading your bag to be available on render",()=>{
        expect(screen.getByRole("heading",{name:"YOUR BAG"})).toBeInTheDocument();
    })

    it("Link Continue Shopping to take us back to home page",()=>{
        expect(screen.getByRole("link",{name:"CONTINUE SHOPPING",href:"/"})).toBeInTheDocument();
    })

    it("Validate the buttons available on render",()=>{
        expect(screen.getByRole("button",{name:"CONTINUE SHOPPING"})).toBeInTheDocument();
        expect(screen.getByRole("button",{name:"CLEAR CART",type:"filled"})).toBeInTheDocument();
        expect(screen.getByRole("button",{name:"CHECKOUT NOW"})).toBeInTheDocument();
    })
})