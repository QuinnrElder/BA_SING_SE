import React from "react";
import CustomerForm from "./CustomerForm";
import { fireEvent, render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { MemoryRouter } from "react-router-dom";

describe("CustomerForm", () => {
  it("Should render a Customer booking form", () => {
    const { getByText, getByRole } = render (
      <MemoryRouter>
        <CustomerForm />
      </MemoryRouter>
    );
    const formHeader = getByText("Check Room Availability");
    const filter = getByText("Filter By Room-Type");
    const submit = getByRole("button");
    expect(formHeader).toBeInTheDocument();
    expect(filter).toBeInTheDocument();
    expect(submit).toBeInTheDocument();
  });

  it("Should submit the form if it's been filled out correctly", () => {
    const getCustomerFormInput = jest.fn();

    const  { getByText, getByPlaceholderText } = render (
      <MemoryRouter>
        <CustomerForm getCustomerFormInput={getCustomerFormInput} />
      </MemoryRouter>
    );

    let username = getByPlaceholderText("Search By Date")
    fireEvent.change(username, {
      target: { value: "2020/06/08" },
    });

    let search = getByText("search")
    fireEvent.click(search);
    expect(getCustomerFormInput).toHaveBeenCalled();
  })

  it("Should submit the form if it's been filled out correctly with a filter type", () => {
    const getCustomerFormInput = jest.fn();

    const  { getByText, getByPlaceholderText } = render (
      <MemoryRouter>
        <CustomerForm getCustomerFormInput={getCustomerFormInput} />
      </MemoryRouter>
    );

    let username = getByPlaceholderText("Search By Date")
    fireEvent.change(username, {
      target: { value: "2020/06/08" },
    });
    let filter = getByPlaceholderText("none")
    fireEvent.change(filter, {
      target: { value: "single room" },
    });
    let search = getByText("search")
    fireEvent.click(search);
    expect(getCustomerFormInput).toHaveBeenCalled();
  })
})
