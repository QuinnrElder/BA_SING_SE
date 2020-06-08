
import React from "react";
import AvailableRooms from "./AvailableRooms";
import { MemoryRouter } from "react-router-dom";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/";

describe("AvailableRooms", () => {

  it('Should check that all the details of each room is present', () => {

    let mockChangeSearchedState = jest.fn();
    let room = {
      "number":1,
    "roomType":"residential suite",
    "bidet":true,
    "bedSize":"queen",
    "numBeds":1,
    "costPerNight":358.4
    }
    let date = {date: '2020/06/08', filterType: 'none'}
    let user = {
      "id":34,
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
  }
    let mockUpdateTotalBookingCount = jest.fn()

    const { getByText, getByRole } = render(
      <MemoryRouter>
        <AvailableRooms
          key={Math.floor(Math.random() * 10000000) + 1} 
          changeSearchedState={mockChangeSearchedState} 
          room={room} 
          date={date} 
          user={user}
          updateTotalBookingCount={mockUpdateTotalBookingCount}/>
      </MemoryRouter>
    )

    const roomNumber = getByText('Room Number', {exact: false})
    const roomType = getByText('Room Type', {exact: false})
    const hasBidet = getByText('Has Bidet', {exact: false})
    const bedSize = getByText('Bed Size', {exact: false})
    const numberOfBeds = getByText('Number Of Beds', {exact: false})
    const costPerNight = getByText('Cost Per Night', {exact: false})
    const button = getByRole('button', {name: 'BOOK NOW'})

    expect(roomNumber).toBeInTheDocument()
    expect(roomType).toBeInTheDocument()
    expect(hasBidet).toBeInTheDocument()
    expect(bedSize).toBeInTheDocument()
    expect(numberOfBeds).toBeInTheDocument()
    expect(costPerNight).toBeInTheDocument()
    expect(button).toBeInTheDocument()
  })

  it('Should check that all the details of each room is present', () => {

    let mockChangeSearchedState = jest.fn();
    let room = {
      "number":1,
    "roomType":"residential suite",
    "bidet":true,
    "bedSize":"queen",
    "numBeds":1,
    "costPerNight":358.4
    }
    let date = {date: '2020/06/08', filterType: 'none'}
    let user = {
      "id":34,
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
  }
    let mockUpdateTotalBookingCount = jest.fn()

    const { getByRole } = render(
      <MemoryRouter>
        <AvailableRooms
          key={Math.floor(Math.random() * 10000000) + 1} 
          changeSearchedState={mockChangeSearchedState} 
          room={room} 
          date={date} 
          user={user}
          updateTotalBookingCount={mockUpdateTotalBookingCount}/>
      </MemoryRouter>
    )

    const button = getByRole('button', {name: 'BOOK NOW'})
    fireEvent.click(button)
    expect(mockUpdateTotalBookingCount).toHaveBeenCalled()
  })
})