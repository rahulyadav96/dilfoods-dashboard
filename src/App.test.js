import { render, screen } from "@testing-library/react";
import App from "./App";
import StorePrivider from "./redux/StoreProvider";
test("renders learn react link", () => {
  render(
    // <StorePrivider>
    <App />
    // </StorePrivider>
  );
  const linkElement = screen.getByText(/Dashboard Analytics/i);
  expect(linkElement).toBeInTheDocument();
});
