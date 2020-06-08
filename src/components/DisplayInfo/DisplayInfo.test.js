import React from "react";
import DisplayInfo from "./DisplayInfo";
import { MemoryRouter } from "react-router-dom";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/";

describe("DisplayInfo", () => {
  it("Should check that Customers bookings render to the DOM", () => {
    
    let user = {
      id: 34,
      name: 'Ardella Jakubowski',
      userBookings: [{
        date: "2020/02/03",
        id: "5fwrgu4i7k55hl6tg",
        roomNumber: 17,
        roomServiceCharges: [],
      },
      {
        date: "2020/02/02",
        id: "5fwrgu4i7k55hl6tg",
        roomNumber: 17,
        roomServiceCharges: [],
      }],
      roomsStayedIn: [{
        bedSize: "queen",
        bidet: true,
        costPerNight: 305.85,
        numBeds: 1,
        number: 17,
        roomType: "single room",
      },
      {
        bedSize: "queen",
        bidet: true,
        costPerNight: 305.85,
        numBeds: 1,
        number: 17,
        roomType: "single room",
      }],
    }

    const { getByText, getAllByTestId } = render(
      <MemoryRouter>
        <DisplayInfo user={user} />
      </MemoryRouter>
    );

    const confirmation = getByText("BOOKINGS");
    const room = getByText("Total $", {exact: false});
    const booking = getAllByTestId('bookings-display');
    expect(confirmation).toBeInTheDocument();
    expect(room).toBeInTheDocument();
    expect(booking).toHaveLength(2);
  })
})
