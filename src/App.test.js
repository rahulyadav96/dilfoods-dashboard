import { render, screen } from "@testing-library/react";
import App from "./App";
import StorePrivider from "./redux/StoreProvider";

describe("Testing App component", () => {
  it("render app", () => {
    <StorePrivider>
      <App />
    </StorePrivider>;
  });
});
