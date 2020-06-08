import React from "react";
import Login from "./Login";
import { MemoryRouter } from "react-router-dom";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/";

describe('Login', () => {

  it('Should have a welcome form', () => {
    const { getByText, getByRole } = render(
      <MemoryRouter>
        <Login />
      </MemoryRouter>
    );

    const welcome = getByText("Welcome");
    const button = getByRole('button', {name: 'Login'})
    const loginBtn = getByText("Login");

    expect( welcome).toBeInTheDocument();
    expect(button).toBeInTheDocument();
    expect(loginBtn).toBeInTheDocument();
  })
})