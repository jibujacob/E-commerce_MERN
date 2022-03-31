import React from "react";
import {render ,screen} from "@testing-library/react";
import { Provider } from 'react-redux';
import {BrowserRouter as Router} from "react-router-dom";

import {store} from "../../redux/store";
import Success from "../Success";

describe("Success Page Testing",()=>{

    beforeEach(()=>{
        render(<Provider store={store}><Router><Success/></Router></Provider>);
    });

    it("Success page should incorporate Announcement,Navbar and Footer components",()=>{
        expect(screen.getByTestId("SuccessPage")).toBeInTheDocument();
        expect(screen.getByTestId("Announcement")).toBeInTheDocument();
        expect(screen.getByTestId("Navbar")).toBeInTheDocument();
        expect(screen.getByTestId("Footer")).toBeInTheDocument();
    });

    it("heading Thanks for your order! to be available on render",()=>{
        expect(screen.getByRole("heading",{name:"Thanks for your order!"})).toBeInTheDocument();
    });

    it("Validate Static Response Message",()=>{
        expect(screen.getByText("We appreciate your business! If you have any questions, please email :",{exact:false})).toBeInTheDocument();
    })

    it("validate static link on render",()=>{
        expect(screen.getByRole("link",{name:"contact@jj.com",href:"mailto:contact@jj.com"})).toBeInTheDocument();
    })
})