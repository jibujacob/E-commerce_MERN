import React from "react";
import {render ,screen} from "@testing-library/react";
import {BrowserRouter as Router} from "react-router-dom";

import Categories from "../Categories";

describe("Categories Component Testing",()=>{

    beforeEach(() => {
        render(<Router><Categories/></Router>);
    });

    it("Categores Wrapper Container to be rendered",()=>{
        expect(screen.getByTestId("Categories")).toBeInTheDocument();
    });

    it("Three Categories should be visible",()=>{
        expect(screen.getAllByTestId("CategoryItem")).toHaveLength(3);
    })
})