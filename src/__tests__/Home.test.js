import { render, screen } from "@testing-library/react";
import Home from "../Home";

jest.mock('axios');
import axios from 'axios';

const data = [
  {
    token: "12345",
  },
];

test("renders the landing page", () => {
  axios.get.mockResolvedValue({ data });
  render(<Home />);

  expect(screen.getByRole("heading")).toHaveTextContent(/Hello World!/);
});
