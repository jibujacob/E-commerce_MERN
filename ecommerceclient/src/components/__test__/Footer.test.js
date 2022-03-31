import React from "react";
import {render ,screen,} from "@testing-library/react";
import Footer from "../Footer";

describe("Footer Component Testing",()=>{

    beforeEach(()=>{
        render(<Footer/>);
    });

    it("Static Logo Validation on render",()=>{
        expect(screen.getByText("JJ.")).toBeInTheDocument();
    });

    it("Static Description Validation on render",()=>{
        expect(screen.getByText("Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius modi a sint omnis libero provident velit mollitia commodi perspiciatis, quod porro dicta ullam aperiam vero, animi aspernatur. Voluptas, fuga ipsum.")).toBeInTheDocument();
    });

    it("Static Title Validation on render",()=>{
        expect(screen.getByText("Useful Links")).toBeInTheDocument();
        expect(screen.getByText("Contact Us")).toBeInTheDocument();
    });

    it("Static Contact Details on render",()=>{
        expect(screen.getByText("78/80, C.p.tank Road, C.p.tank,Mumbai,Maharashtra-400004,India")).toBeInTheDocument();
        expect(screen.getByText("02223873737")).toBeInTheDocument();
        expect(screen.getByText("contact@jj.com")).toBeInTheDocument();
    });

    it("Social Media Icons to be present on render",()=>{
        expect(screen.getByTestId("FacebookIcon")).toBeInTheDocument();
        expect(screen.getByTestId("InstagramIcon")).toBeInTheDocument();
        expect(screen.getByTestId("TwitterIcon")).toBeInTheDocument();
    });

    it("Contact Icons to be present on render",()=>{
        expect(screen.getByTestId("RoomIcon")).toBeInTheDocument();
        expect(screen.getByTestId("PhoneIcon")).toBeInTheDocument();
        expect(screen.getByTestId("MailOutlineIcon")).toBeInTheDocument();
    });

    it("Validate the number of list items",()=>{
        expect(screen.getAllByRole("listitem")).toHaveLength(9);
    })
})