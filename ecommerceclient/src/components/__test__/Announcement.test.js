import React from "react";
import {render ,screen} from "@testing-library/react";
import Announcement from "../Announcement";

describe("Announcement Component testing",()=>{
    
    it("Announcement Component Text Validation",()=>{
        render(<Announcement/>);
        expect(screen.getByText("Super Deal! Free Shipping on all Orders")).toBeInTheDocument();
    })
});