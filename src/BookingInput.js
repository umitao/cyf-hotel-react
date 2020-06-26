import React, { useState } from "react";

const BookingInput = props => {
  const [bookingInput, setBookingInput] = useState({
    id: "",
    firstName: "",
    surname: "",
    title: "",
    email: "",
    roomId: "",
    checkInDate: "",
    checkOutDate: ""
  });
  const handleChange = event => {
    const updatedUserData = {
      ...bookingInput,
      [event.target.name]: event.target.value
    };
    setBookingInput(updatedUserData);
  };

  const handleSubmit = event => {
    event.preventDefault();
    props.newBooking(bookingInput);
  };

  return (
    <div className="col">
      <form className="form-group search-box">
        <label htmlFor="id">ID</label>
        <input
          className="form-control"
          type="text"
          id="id"
          name="id"
          onChange={handleChange}
          value={bookingInput.id}
          placeholder="ID"
        />
        <label htmlFor="title">Title</label>
        <input
          className="form-control"
          type="text"
          id="title"
          name="title"
          onChange={handleChange}
          value={bookingInput.title}
          placeholder="Title"
        />
        <label htmlFor="firstName">First Name</label>
        <input
          className="form-control"
          type="text"
          id="firstName"
          name="firstName"
          onChange={handleChange}
          value={bookingInput.firstName}
          placeholder="First Name"
        />
        <label htmlFor="surname">Surname</label>
        <input
          className="form-control"
          type="text"
          id="surname"
          name="surname"
          onChange={handleChange}
          value={bookingInput.surname}
          placeholder="Last Name"
        />
        <label htmlFor="email">email</label>
        <input
          className="form-control"
          type="text"
          id="email"
          name="email"
          onChange={handleChange}
          value={bookingInput.email}
          placeholder="email"
        />
        <label htmlFor="roomId">Room Id</label>
        <input
          className="form-control"
          type="text"
          id="roomId"
          name="roomId"
          onChange={handleChange}
          value={bookingInput.roomId}
          placeholder="Room Id"
        />
        <label htmlFor="CheckInDate">Check In Date</label>
        <input
          className="form-control"
          type="text"
          id="checkInDate"
          name="checkInDate"
          onChange={handleChange}
          value={bookingInput.checkInDate}
          placeholder="Check In"
        />
        <label htmlFor="CheckOutDate">Check Out Date</label>
        <input
          className="form-control"
          type="text"
          id="checkOutDate"
          name="checkOutDate"
          onChange={handleChange}
          value={bookingInput.checkOutDate}
          placeholder="Check Out"
        />
        <button onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  );
};

export default BookingInput;
