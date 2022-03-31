import React from "react";
import {render ,screen} from "@testing-library/react";
import { Provider } from 'react-redux';

import Login from "../Login";
import {store} from "../../redux/store";

describe("Login Page Testing",()=>{

    beforeEach(()=>{
        render(<Provider store={store}><Login/></Provider>);
    });

    it("Login Page Rendered",()=>{
        expect(screen.getByTestId("LoginPage")).toBeInTheDocument();
    });

    it("Heading SIgn in to be available on render",()=>{
        expect(screen.getByRole("heading",{name:"SIGN IN"})).toBeInTheDocument();
    });

    it("Input box for username with placeholder Username",()=>{
        expect(screen.getByRole("textbox",{name:"username",placeholder:"Username"})).toBeInTheDocument();
    });

    it("Input box for password with placeholder Password",()=>{
        expect(screen.getByLabelText("password")).toBeInTheDocument();
    });

    it("Button with Login label",()=>{
        expect(screen.getByRole("button",{name:"Login"})).toBeInTheDocument();
    });

    it("Static Links with FORGOT PASSWORD? label",()=>{
        expect(screen.getByText("FORGOT PASSWORD?")).toBeInTheDocument();
    });

    it("Static Links with CREATE A NEW ACCOUNT label",()=>{
        expect(screen.getByText("CREATE A NEW ACCOUNT")).toBeInTheDocument();
    });

});