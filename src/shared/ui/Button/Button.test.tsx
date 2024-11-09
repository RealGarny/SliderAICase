import { Button } from "./Button";
import { render, screen } from "@testing-library/react";

describe("Button FC", () => {
    test("basic test", () => {
        render(<Button>TEST</Button>);
        expect(screen.getByText("TEST")).toBeInTheDocument();
    });
});
