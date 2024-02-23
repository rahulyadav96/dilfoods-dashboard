import { render, screen } from "@testing-library/react";
import UserActivity from "./UserActivity";
import { StoreProvider } from "../redux/StoreProvider";
test(" test render Sales statics component", () => {
  render(
    <StoreProvider>
      <UserActivity />
    </StoreProvider>
  );
  const linkElement = screen.getByText(/User Activity/i);
  expect(linkElement).toBeInTheDocument();
});
