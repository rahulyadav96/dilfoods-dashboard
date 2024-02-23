import { render, screen } from "@testing-library/react";
import Dashboard from "./Dashboard";
import { StoreProvider } from "../redux/StoreProvider";
test("renders dashboard", () => {
  render(
    <StoreProvider>
      <Dashboard />
    </StoreProvider>
  );
  const linkElement = screen.getByText(/Dashboard Analytics/i);
  expect(linkElement).toBeInTheDocument();
});
