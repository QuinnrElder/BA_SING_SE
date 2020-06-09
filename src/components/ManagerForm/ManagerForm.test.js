import React from "react";
import ManagerForm from "./ManagerForm";
import { fireEvent, render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { MemoryRouter } from "react-router-dom";

describe("ManagerForm", () => {

  it("Should render a search Customer by name form", () => {
    let mockGetManagerFormInput = jest.fn()

    const { getByText, getByRole, getByLabelText } = render (
      <MemoryRouter>
        <ManagerForm getManagerFormInput={mockGetManagerFormInput}/>
      </MemoryRouter>
    );

    const search = getByText("Search by Customers Full Name");
    const label = getByLabelText("username-label");
    const submit = getByRole("button", {name: 'search'});
    expect(search).toBeInTheDocument();
    expect(label).toBeInTheDocument();
    expect(submit).toBeInTheDocument();
  });

  it("Should submit the form if it's been filled out correctly", () => {
    const mockGetManagerFormInput = jest.fn();

    const  { getByText, getByPlaceholderText } = render (
      <MemoryRouter>
        <ManagerForm getManagerFormInput={mockGetManagerFormInput}/>
      </MemoryRouter>
    );

    let username = getByPlaceholderText("Search By Full Name")
    fireEvent.change(username, {
      target: { value: "Alessia Rippin" },
    });

    let button = getByText("search")
    fireEvent.click(button) 
    expect(mockGetManagerFormInput).toHaveBeenCalled();
  })

  it("Should submit the form if it's not been filled out correctly", () => {
    const mockGetManagerFormInput = jest.fn();

    const  { getByText, getByRole } = render (
      <MemoryRouter>
        <ManagerForm getManagerFormInput={mockGetManagerFormInput}/>
      </MemoryRouter>
    );

    const loginBtn = getByRole("button", {name: 'search'});
    fireEvent.click(loginBtn);
    
    const error = getByText('Please enter a name.')
    expect(error).toBeInTheDocument();
  })
})
