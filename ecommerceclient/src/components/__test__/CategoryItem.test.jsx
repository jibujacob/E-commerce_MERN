import React from "react";
import {render ,screen} from "@testing-library/react";
import {BrowserRouter as Router} from "react-router-dom";

import CategoryItem from "../CategoryItem";

const categoryItem = 
        {
          id: 1,
          img: "https://images.pexels.com/photos/5886041/pexels-photo-5886041.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          title: "SHIRT STYLE!",
          cat:"shirt"
        };

describe("CategoryItem Component Testing",()=>{

    beforeEach(() => {
        render(<Router><CategoryItem item={categoryItem}/></Router>);
    });

    it("Category Item Image populated",()=>{
        expect(screen.getByAltText(`${categoryItem.title} image`)).toBeInTheDocument();
    });

    it("Category Item Title populated",()=>{
        expect(screen.getByText(`${categoryItem.title}`)).toBeInTheDocument();
    });

    it("Category Item Button populated",()=>{
        expect(screen.getByRole("button",{name:"SHOP NOW"})).toBeInTheDocument();
    });


});
