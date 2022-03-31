import React from "react";
import {render ,screen} from "@testing-library/react";
import { Provider } from 'react-redux';
import {BrowserRouter as Router} from "react-router-dom";

import {store} from "../../redux/store";
import Home from "../Home";


describe("Home Page Testing",()=>{

    beforeEach(()=>{
        render(<Provider store={store}><Router><Home/></Router></Provider>);
    });

    it("Home Page should incorporate Accouncement,Navbar,Slider,Categories,Products,Newsletter and Footer Components",()=>{
        expect(screen.getByTestId("HomePage")).toBeInTheDocument();
        expect(screen.getByTestId("Announcement")).toBeInTheDocument();
        expect(screen.getByTestId("Navbar")).toBeInTheDocument(); 
        expect(screen.getByTestId("Slider")).toBeInTheDocument();
        expect(screen.getByTestId("Categories")).toBeInTheDocument();
        expect(screen.getByTestId("Products")).toBeInTheDocument();
        expect(screen.getByTestId("Newsletter")).toBeInTheDocument();
        expect(screen.getByTestId("Footer")).toBeInTheDocument();
        
    })

})