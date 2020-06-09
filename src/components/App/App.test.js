import React from "react";
import App from "./App";
import { MemoryRouter } from "react-router-dom";
import { render, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import {
  fetchUsers ,
  fetchBookings,
  fetchRooms,
} from "../ApiFetchMethods/ApiFetchMethods";
import "@testing-library/jest-dom/extend-expect";
jest.mock("../ApiFetchMethods/ApiFetchMethods");

// import MutationObserver from '@sheerun/mutationobserver-shim'
// window.MutationObserver = MutationObserver

describe("App as Manager", () => {

  let users;
  let bookings;
  let rooms;
  
  beforeEach( () => {
     users = [
      {"id":1,"name":"Leatha Ullrich"},
      {"id":2,"name":"Rocio Schuster"},
      {"id":3,"name":"Kelvin Schiller"},
      {"id":4,"name":"Kennedi Emard"}
  ]
    fetchUsers.mockResolvedValueOnce(users)

    bookings = [
      {"id":"5fwrgu4i7k55hl6sz","userID":1,"date":"2020/04/22","roomNumber":1,"roomServiceCharges":[]},
      {"id":"5fwrgu4i7k55hl6t5","userID":2,"date":"2020/01/24","roomNumber":2,"roomServiceCharges":[]},
      {"id":"5fwrgu4i7k55hl6t6","userID":3,"date":"2020/01/10","roomNumber":3,"roomServiceCharges":[]},
      {"id":"5fwrgu4i7k55hl6t7","userID":4,"date":"2020/02/16","roomNumber":4,"roomServiceCharges":[]},
    ]
    fetchBookings.mockResolvedValueOnce(bookings)

    rooms = [
      {"number":1,"roomType":"residential suite","bidet":true,"bedSize":"queen","numBeds":1,"costPerNight":358.4},
      {"number":2,"roomType":"suite","bidet":false,"bedSize":"full","numBeds":2,"costPerNight":477.38},
      {"number":3,"roomType":"single room","bidet":false,"bedSize":"king","numBeds":1,"costPerNight":491.14},
      {"number":4,"roomType":"single room","bidet":false,"bedSize":"queen","numBeds":1,"costPerNight":429.44}
    ]  
    fetchRooms.mockResolvedValueOnce(rooms)
  })

  it("Should display the loginPage page", () => {
    const { getByText, getByRole } = render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );

    const welcome = getByText("Welcome");
    const button = getByRole('button', {name: 'Login'})

    expect(welcome).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });

  it("Should display Manager when logged in as manager", () => {
    const { getByRole, getByText, getByPlaceholderText } = render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );

    fireEvent.change(getByPlaceholderText("username"), {
      target: { value: "manager" },
    });
    fireEvent.change(getByPlaceholderText("password"), {
      target: { value: "overlook2020" },
    });

    const button = getByRole('button', {name: 'Login'})
    fireEvent.click(button);
    
    const submit = getByRole("button", {name: 'search'});
    const earnings = getByText("Today's Earnings:");
    const rooms = getByText('Rooms Available:');
    const percent = getByText('Percentage of Rooms:');
    
    expect(submit).toBeInTheDocument();
    expect(earnings).toBeInTheDocument();
    expect(rooms).toBeInTheDocument();
    expect(percent).toBeInTheDocument();
  });

});


describe("App as user", () => {

  let allUsers;
  let allBookings;
  let allRooms;
  
  beforeEach( async () => {

    allBookings = [
      {"id":"5fwrgu4i7k55hl6sz","userID":1,"date":"2020/04/22","roomNumber":1,"roomServiceCharges":[]},
      {"id":"5fwrgu4i7k55hl6t5","userID":2,"date":"2020/01/24","roomNumber":2,"roomServiceCharges":[]},
      {"id":"5fwrgu4i7k55hl6t6","userID":34,"date":"2020/01/10","roomNumber":3,"roomServiceCharges":[]},
      {"id":"5fwrgu4i7k55hl6t7","userID":4,"date":"2020/02/16","roomNumber":4,"roomServiceCharges":[]},
    ]
    await fetchBookings.mockResolvedValueOnce(allBookings)

     allUsers = [
      {"id":1,"name":"Leatha Ullrich"},
      {"id":2,"name":"Rocio Schuster"},
      {"id":34,"name":"Kelvin Schiller"},
      {"id":4,"name":"Kennedi Emard"}
  ]
    await fetchUsers.mockResolvedValueOnce(allUsers)

    allRooms = [
      {"number":1,"roomType":"residential suite","bidet":true,"bedSize":"queen","numBeds":1,"costPerNight":358.4},
      {"number":2,"roomType":"suite","bidet":false,"bedSize":"full","numBeds":2,"costPerNight":477.38},
      {"number":3,"roomType":"single room","bidet":false,"bedSize":"king","numBeds":1,"costPerNight":491.14},
      {"number":4,"roomType":"single room","bidet":false,"bedSize":"queen","numBeds":1,"costPerNight":429.44}
    ]  
    await fetchRooms.mockResolvedValueOnce(allRooms)
  })

  it("Should display the loginPage page", () => {
    const { getByText, getByRole} = render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );

    const welcome = getByText("Welcome");
    const button = getByRole('button', {name: 'Login'})
      
    expect(welcome).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });

  it("Should display UserPage when logged in as user", async () => {
    const { getByRole, getByText, getByPlaceholderText, debug } = render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );

    fireEvent.change(getByPlaceholderText("username"), {
      target: { value: "customer34" },
    });
    fireEvent.change(getByPlaceholderText("password"), {
      target: { value: "overlook2020" },
    });

    let loginBtn = getByText("Login");
    await new Promise((r) => setTimeout(r, 2000));
    fireEvent.click(loginBtn);
  

    let header = getByText('Welcome', {exact: false})
    expect(header).toBeInTheDocument();
    
    // // this is the Customer form check...
    let submit = getByRole("button")
    expect(submit).toBeInTheDocument();
    
    // // this is the Customer bookings check...
    const confirmation = getByText("BOOKINGS");
    const room = getByText("Total $", {exact: false});
    expect(confirmation).toBeInTheDocument();
    expect(room).toBeInTheDocument();
  });

  it("Should be able to check for room availability for Rooms based off date searched", async () => {
    const { getByRole, getAllByRole, getByText, getAllByText, getByPlaceholderText } = render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );

    fireEvent.change(getByPlaceholderText("username"), {
      target: { value: "customer34" },
    });
    fireEvent.change(getByPlaceholderText("password"), {
      target: { value: "overlook2020" },
    });

    const loginBtn = getByText("Login");
    await new Promise((r) => setTimeout(r, 2000));
    fireEvent.click(loginBtn);
    
    // // this is the Customer form check...
    let username = getByPlaceholderText("Search By Date")
    fireEvent.change(username, {
      target: { value: "2020/06/08" },
    });
    let filter = getByPlaceholderText("none")
    fireEvent.change(filter, {
      target: { value: "single room" },
    });

    let submit = getByRole("button", {name: 'search'})
    fireEvent.click(submit);

    const roomNumber = getAllByText('Room Number', {exact: false})
    const roomType = getAllByText('Room Type', {exact: false})
    const hasBidet = getAllByText('Has Bidet', {exact: false})
    const bedSize = getAllByText('Bed Size', {exact: false})
    const numberOfBeds = getAllByText('Number Of Beds', {exact: false})
    const costPerNight = getAllByText('Cost Per Night', {exact: false})
    const button = getAllByRole('button', {name: 'BOOK NOW'})

    expect(roomNumber).toHaveLength(2);
    expect(roomType).toHaveLength(2);
    expect(hasBidet).toHaveLength(2);
    expect(bedSize).toHaveLength(2);
    expect(numberOfBeds).toHaveLength(2);
    expect(costPerNight).toHaveLength(2);
    expect(button).toHaveLength(2);

  });

  it("Should be able to book a room based off date searched", async () => {
    const { getByText, getByPlaceholderText, getByTestId } = render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );

    fireEvent.change(getByPlaceholderText("username"), {
      target: { value: "customer34" },
    });
    fireEvent.change(getByPlaceholderText("password"), {
      target: { value: "overlook2020" },
    });

    const loginBtn = getByText("Login");
    await new Promise((r) => setTimeout(r, 2000));
    fireEvent.click(loginBtn);
    
    // // this is the Customer form check...
    let username = getByPlaceholderText("Search By Date")
    fireEvent.change(username, {
      target: { value: "2020/06/08" },
    });
    let filter = getByPlaceholderText("none")
    fireEvent.change(filter, {
      target: { value: "single room" },
    });

    let submit = getByText('search')
    fireEvent.click(submit);

    const button = getByTestId('3')
    fireEvent.click(button)

    expect(button).not.toBeInTheDocument();

  });

  it("Should be able to see the room booked based off date searched", async () => {
    const { getByText, getByPlaceholderText, getByTestId, getAllByTestId } = render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );

    fireEvent.change(getByPlaceholderText("username"), {
      target: { value: "customer34" },
    });
    fireEvent.change(getByPlaceholderText("password"), {
      target: { value: "overlook2020" },
    });

    const loginBtn = getByText("Login");
    await new Promise((r) => setTimeout(r, 2000));
    fireEvent.click(loginBtn);
    
    // // this is the Customer form check...
    let username = getByPlaceholderText("Search By Date")
    fireEvent.change(username, {
      target: { value: "2020/06/08" },
    });
    let filter = getByPlaceholderText("none")
    fireEvent.change(filter, {
      target: { value: "single room" },
    });

    let submit = getByText('search')
    fireEvent.click(submit);

    const button = getByTestId('3')
    fireEvent.click(button)

    const booking = getAllByTestId('bookings-display');
    expect(booking).toHaveLength(1);

  });

});
