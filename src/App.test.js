import { render, screen } from "@testing-library/react";
import App from "./App";
import StorePrivider from "./redux/StoreProvider";
test("renders learn react link", () => {
  render(
    <StorePrivider>
      <App />
    </StorePrivider>
  );
  // const linkElement = screen.getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();
});
