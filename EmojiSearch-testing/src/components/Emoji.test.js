import React from "react";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import Emoji from "./Emoji";
import userEvent from "@testing-library/user-event";

describe("Emoji", () => {

    it("renders without crashing", () => {
        render(<Emoji />);
    });
    
    it("renders the correct text", () => {
        render(<Emoji />);
        const search = screen.getByPlaceholderText("Enter an emoji");
        userEvent.type(search, ":)");
        expect(search).toHaveValue(":)");
    });
    
    it("correct button", () => {
        render(<Emoji />);
        const button = screen.getByRole("button");
        userEvent.click(button);
        expect(button).toHaveTextContent("Add");
    });
    
    it("copies the emoji to clipboard", () => { // img elementine tıklandığında copyToClipboard fonksiyonu çalışır
        let copyToClipboard = jest.fn(); 
        const img = document.createElement("img");
        img.addEventListener("click", copyToClipboard);
    });
});
