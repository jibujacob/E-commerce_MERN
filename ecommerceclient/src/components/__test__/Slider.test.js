import React from "react";
import {render ,screen} from "@testing-library/react";
import {BrowserRouter as Router} from "react-router-dom";

import Slider from "../Slider";

describe("Slider Component Testing",()=>{

    beforeEach(()=>{
        render(<Router><Slider/></Router>);
    })

    it("Left Arrow Icon available on render",()=>{
        expect(screen.getByTestId("ArrowLeftOutlinedIcon")).toBeInTheDocument();
    })

    it("Right Arrow Icon available on render",()=>{
        expect(screen.getByTestId("ArrowRightOutlinedIcon")).toBeInTheDocument();
    })

    it("Three images to be availalbe on render",()=>{
        expect(screen.queryAllByRole("img")).toHaveLength(3);
    })

    it("three Static headers to be available on render",()=>{
        expect(screen.queryAllByRole("heading")).toHaveLength(3);
        expect(screen.getByRole("heading",{name:"SUMMER SALE"})).toBeInTheDocument();
        expect(screen.getByRole("heading",{name:"LOUNGEWEAR LOVE"})).toBeInTheDocument();
        expect(screen.getByRole("heading",{name:"AUTUMN COLLECTION"})).toBeInTheDocument();

    });

    it("three buttons to be available on render",()=>{
        expect(screen.queryAllByRole("button")).toHaveLength(3);
    });

    it("three Static description to be available on render",()=>{
        expect(screen.queryAllByText("DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.")).toHaveLength(3);
    })
})