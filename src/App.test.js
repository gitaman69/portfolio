import { render, screen } from "@testing-library/react";
import App from "./App";

beforeAll(() => {
  window.matchMedia = window.matchMedia || (() => ({ matches: true, addListener() {}, removeListener() {} }));
});

test("renders name and key sections", () => {
  render(<App />);
  expect(screen.getAllByText(/Aman Bhakar/i).length).toBeGreaterThan(0);
  expect(screen.getByRole("heading", { name: "ElectricQ" })).toBeInTheDocument();
  expect(screen.getByRole("heading", { name: "BillGram" })).toBeInTheDocument();
  expect(screen.getByRole("heading", { name: /Full Stack Developer/i })).toBeInTheDocument();
});
