import React from "react";
import {render ,screen} from "@testing-library/react";
import { Provider } from 'react-redux';
import {BrowserRouter as Router} from "react-router-dom";

import { store } from "../../redux/store";
import Navbar from "../Navbar"; 


describe("Navbar Component testing ,when state utilizes initial value",()=>{

    beforeEach(()=>{
        render(<Provider store={store}><Router><Navbar/></Router></Provider>);
    });

    it("Static Logo Link to be available on render",()=>{
        expect(screen.getByText("JJ.")).toBeInTheDocument();
    });

    it("Search bar present with placeholder text Search",()=>{
        expect(screen.getByRole("textbox",{placeholder:"Search"})).toBeInTheDocument();
    });

    it("Search Icon to be present on render",()=>{
        expect(screen.getByTestId("SearchIcon")).toBeInTheDocument();
    });

    it("Register Link to be available on render",()=>{
        expect(screen.getByText("REGISTER")).toBeInTheDocument();
        expect(screen.getByRole("link",{name:"REGISTER",href:"/register"})).toBeInTheDocument();
    });

    it("LOGIN Link to be available on render",()=>{
        expect(screen.getByText("SIGN IN")).toBeInTheDocument();
        expect(screen.getByRole("link",{name:"SIGN IN",href:"/login"})).toBeInTheDocument();
    });

    it("Cart Icon and Link to be available on render",()=>{
        expect(screen.getByTestId("ShoppingCartOutlinedIcon")).toBeInTheDocument();
        expect(screen.getByRole("link",{name:"",href:"/cart"})).toBeInTheDocument();
    });
});