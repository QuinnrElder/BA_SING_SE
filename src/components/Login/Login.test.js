import React from "react";
import Login from "./Login";
import { MemoryRouter } from "react-router-dom";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/";

describe('Login', () => {

  it('Should have a welcome form', () => {

    let getUser = jest.fn()
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

    const { getByText, getByRole } = render(
      <MemoryRouter>
        <Login getUser={getUser} allUsers={allUsers}/>
      </MemoryRouter>
    );

    const welcome = getByText("Welcome");
    const button = getByRole('button', {name: 'Login'})
    const loginBtn = getByText("Login");

    expect( welcome).toBeInTheDocument();
    expect(button).toBeInTheDocument();
    expect(loginBtn).toBeInTheDocument();
  })

  it("should throw an error if the form is not filled out correctly", () => {
    let getUser = jest.fn()
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

    const { getByText } = render (
      <MemoryRouter>
        <Login getUser={getUser} allUsers={allUsers} />
      </MemoryRouter>
    )

    const loginBtn = getByText("Login");
    fireEvent.click(loginBtn);

    const error2 = getByText('Please check your password.')
    const error = getByText('Please check your username.')
    expect(error).toBeInTheDocument();
    expect(error2).toBeInTheDocument();
  })

  it("Should call setState for app if filled out correctly", () => {
    let getUser = jest.fn()
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

    const { getByText, getByPlaceholderText } = render (
      <MemoryRouter>
        <Login getUser={getUser} allUsers={allUsers} />
      </MemoryRouter>
    )

    
    fireEvent.change(getByPlaceholderText("username"), {
      target: { value: "customer34" },
    });
    fireEvent.change(getByPlaceholderText("password"), {
      target: { value: "overlook2020" },
    });
    
    const loginBtn = getByText("Login");
    fireEvent.click(loginBtn);

    expect(getUser).toHaveBeenCalled();
  });

})