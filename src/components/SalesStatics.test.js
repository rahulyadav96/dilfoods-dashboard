import { render, screen } from "@testing-library/react";
import SalesStatcis from "./SalesStatics";
import { StoreProvider } from "../redux/StoreProvider";
test(" test render Sales statics component", () => {
  render(
    <StoreProvider>
      <SalesStatcis />
    </StoreProvider>
  );
  const linkElement = screen.getByText(/Sales Statics/i);
  expect(linkElement).toBeInTheDocument();
});
