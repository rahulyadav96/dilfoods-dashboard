import { render, screen } from "@testing-library/react";
import TopSellingProducts from "./TopSellingProducts";
import { StoreProvider } from "../redux/StoreProvider";
test(" test render Sales statics component", () => {
  render(
    <StoreProvider>
      <TopSellingProducts />
    </StoreProvider>
  );
  const linkElement = screen.getByText(/Top Selling Products/i);
  expect(linkElement).toBeInTheDocument();
});
