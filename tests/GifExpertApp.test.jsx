import { render,screen,fireEvent } from "@testing-library/react";
import { GifExpertApp } from "../src/GifExpertApp";

describe("Pruebas en GifExpertApp", () => {
  test("deberia agregar una categoria si no existe", () => {
    render(<GifExpertApp />)
    const input = screen.getByRole("textbox");
    const form = screen.getByRole("form");
    fireEvent.input(input, { target: { value: "Saitama" } });
    fireEvent.submit(form);
    expect(screen.getAllByRole("heading", { level: 3 })).toHaveLength(2);
  });
  test("No deberia agregar una categoria si ya existe", () => {
    render(<GifExpertApp />)
    const input = screen.getByRole("textbox");
    const form = screen.getByRole("form");
    fireEvent.input(input, { target: { value: "One Punch" } });
    fireEvent.submit(form);
    // screen.debug()
    expect(screen.getAllByRole("heading", { level: 3 })).toHaveLength(1);
  });

});
