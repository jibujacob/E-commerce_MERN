import React from "react";
import {render ,screen} from "@testing-library/react";
import { Provider } from 'react-redux';
import {BrowserRouter as Router} from "react-router-dom";

import {store} from "../../redux/store";
import Cancel from "../Cancel";

describe("Cancel Page Testing",()=>{

    beforeEach(()=>{
        render(<Provider store={store}><Router><Cancel/></Router></Provider>);
    });

    it("Cancel page should incorporate Announcement,Navbar and Footer components",()=>{
        expect(screen.getByTestId("CancelPage")).toBeInTheDocument();
        expect(screen.getByTestId("Announcement")).toBeInTheDocument();
        expect(screen.getByTestId("Navbar")).toBeInTheDocument();
        expect(screen.getByTestId("Footer")).toBeInTheDocument();
    });

    it("heading Order Cancelled to be available on render",()=>{
        expect(screen.getByRole("heading",{name:"Order Cancelled"})).toBeInTheDocument();
    });

    it("Validate Static Response Message",()=>{
        expect(screen.getByText("Facing Issue in completing the transaction. Please try in some time If you have any questions, please email :",{exact:false})).toBeInTheDocument();
    })

    it("validate static link on render",()=>{
        expect(screen.getByRole("link",{name:"contact@jj.com",href:"mailto:contact@jj.com"})).toBeInTheDocument();
    })
})