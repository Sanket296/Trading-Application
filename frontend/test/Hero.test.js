import React from "react";  
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import Hero from "../src/landing_page/home/Hero";

describe("Hero Component", () => {
    test("renders Hero component with correct heading and button", () => {
        render(<Hero />);   

        const headingElement = screen.getByText(/Invest in stocks, ETFs, mutual funds, and more./i);
        expect(headingElement).toBeInTheDocument();     
        const buttonElement = screen.getByRole("button", { name: /Start Investing Now/i });
        expect(buttonElement).toBeInTheDocument();     
    });
    test("render the main image", () => {
        render(<Hero />);
        const imageElement = screen.getByAltText("Hero Image");
        expect(imageElement).toBeInTheDocument();
        expect(imageElement).toHaveAttribute("src", "Media/Images/heroImage.svg");
    });
});