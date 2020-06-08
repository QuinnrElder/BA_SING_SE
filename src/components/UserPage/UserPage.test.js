  
import React from "react";
import UserPage from "./UserPage";
import { MemoryRouter } from "react-router-dom";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/";

describe("UserPage", () => {
  it("Should display UserPage Elements", () => {
    
    let user = {
      id: 34,
      name: 'Ardella Jakubowski',
      userBookings: [],
      roomsStayedIn: [],
    }

    let allRooms = [
      {"number":16,"roomType":"single room","bidet":false,"bedSize":"full","numBeds":2,"costPerNight":325.6},
      {"number":17,"roomType":"junior suite","bidet":false,"bedSize":"twin","numBeds":2,"costPerNight":328.15},
      {"number":18,"roomType":"junior suite","bidet":false,"bedSize":"king","numBeds":2,"costPerNight":496.41}
    ]
    let allBookings =[
      {"id":"5fwrgu4i7k55hl6sz","userID":34,"date":"2020/02/03","roomNumber":17,"roomServiceCharges":[]},
      {"id":"5fwrgu4i7k55hl6t5","userID":34,"date":"2020/02/02","roomNumber":17,"roomServiceCharges":[]},
      {"id":"5fwrgu4i7k55hl6t6","userID":1,"date":"2020/02/08","roomNumber":17,"roomServiceCharges":[]},
      {"id":"5fwrgu4i7k55hl6t7","userID":1,"date":"2020/02/07","roomNumber":17,"roomServiceCharges":[]},
      {"id":"5fwrgu4i7k55hl6t8","userID":2,"date":"2020/02/05","roomNumber":17,"roomServiceCharges":[]},
      {"id":"5fwrgu4i7k55hl6t9","userID":2,"date":"2020/02/04","roomNumber":17,"roomServiceCharges":[]}
    ]
    let allUsers =[
      {"id":1,
      "name":"Leatha Ullrich",
      userBookings: [{
        date: "2020/02/08",
        id: "5fwrgu4i7k55hl6tg",
        roomNumber: 17,
        roomServiceCharges: [],
      },
      {
        date: "2020/02/07",
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
    },
      {"id":2,
      "name":"Rocio Schuster",
      userBookings: [{
        date: "2020/02/05",
        id: "5fwrgu4i7k55hl6tg",
        roomNumber: 17,
        roomServiceCharges: [],
      },
      {
        date: "2020/02/04",
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
    },
      {"id":34,
      "name":"Ardella Jakubowski",
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
    },
    ]
    const mockUpdateTotalBookingCount = jest.fn();

    const { getByText, getByRole } = render(
      <MemoryRouter>
        <UserPage
          user={user}
          date={'06/08/2020'}
          allRooms={allRooms}
          allBookings={allBookings}
          allUsers={allUsers}
          updateTotalBookingCount={mockUpdateTotalBookingCount}
        />
      </MemoryRouter>
    );

    const welcome = getByText('Welcome', {exact: false})
    const customerFormButton = getByRole("button");
    expect(welcome).toBeInTheDocument();
    expect(customerFormButton).toBeInTheDocument();
  })
})

