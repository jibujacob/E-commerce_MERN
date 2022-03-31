import React from "react";
import {render ,screen} from "@testing-library/react";
import { Provider } from 'react-redux';

import {store} from "../../redux/store";
import Register from "../Register";

describe("Register Page Testing",()=>{
    beforeEach(()=>{
        render(<Provider store={store}><Register/></Provider>);
    });

    it("Register Page Rendered",()=>{
        expect(screen.getByTestId("RegisterPage")).toBeInTheDocument();
    });

    it("Static Heading CREATE AN ACCOUNT to be available on render",()=>{
        expect(screen.getByRole("heading",{name:"CREATE AN ACCOUNT"})).toBeInTheDocument();
    });

    it("four textbox to be available on render",()=>{
        expect(screen.queryAllByRole("textbox")).toHaveLength(4);
    });

    it("Text boxes along with its respective placeholders rendered",()=>{
        expect(screen.getByRole("textbox",{name:"first name",placeholder:"First Name"})).toBeInTheDocument();
        expect(screen.getByRole("textbox",{name:"last name",placeholder:"Last Name"})).toBeInTheDocument();
        expect(screen.getByRole("textbox",{name:"username",placeholder:"Username"})).toBeInTheDocument();
        expect(screen.getByRole("textbox",{name:"email",placeholder:"Email",type:"email"})).toBeInTheDocument();
    });

    it("Password text box to be available on render",()=>{
        expect(screen.getByLabelText("password")).toBeInTheDocument();
    });

    it("Confirm Password text box to be available on render",()=>{
        expect(screen.getByLabelText("confirm password")).toBeInTheDocument();
    });

    it("Static Agreement to be available on render",()=>{
        expect(screen.getByText("By creating an account , I consent to the processing of my personal data in accordance with the")).toBeInTheDocument();
        expect(screen.getByText("PRIVACY POLICY")).toBeInTheDocument();
    });

    it("button Create to be availble on render",()=>{
        expect(screen.getByRole("button",{name:"Create"})).toBeInTheDocument();
    })
});