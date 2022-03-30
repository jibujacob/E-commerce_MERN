import React from "react";
import {render ,screen,fireEvent} from "@testing-library/react";
import Newsletter from "../Newsletter";

describe("NewsLetter Component Testing",()=>{
    beforeEach(()=>{
        const {debug}=render(<Newsletter/>);
        debug();
    })

    it("Newsletter Title Static Content is populated during render",()=>{
        expect(screen.getByText("Newsletter")).toBeInTheDocument();
    });

    it("Description Static Content is populated during render",()=>{
        expect(screen.getByText("Get timely updates from your favourite products.")).toBeInTheDocument();
    });

    it("Input box with placeholder Your email to be rendered",()=>{
        expect(screen.getByRole("textbox",{type:"email",placeholder:"Your email"})).toBeInTheDocument();
    });

    it("Send button to be available on render",()=>{
        expect(screen.getByRole("button")).toBeInTheDocument();
        expect(screen.getByTestId("SendIcon")).toBeInTheDocument();
    });

    it("On submiting the alert should be triggered",()=>{
        global.alert = jest.fn();
        const button = screen.getByRole("button");
        fireEvent.click(button);
        expect(global.alert).toHaveBeenCalledTimes(1);
    })

});
