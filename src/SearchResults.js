import React, { useState } from "react";
import TableHeader from "./TableHeader";
import SearchResultsRow from "./SearchResultsRow";
import BookingInput from "./BookingInput";
import NewBookingRow from "./NewBookingRow";
const SearchResults = props => {
  const [newBooking, setNewBooking] = useState([]);

  const handleInputValue = newBooking => {
    setNewBooking(newBooking);
    console.log(newBooking);
  };

  return (
    <>
      <table className="table">
        <TableHeader />
        {props.results.map((data, index) => (
          <SearchResultsRow key={index} selected={false} data={data} />
        ))}
        <NewBookingRow data={newBooking} />
      </table>
      <BookingInput newBooking={handleInputValue} />
      {/* <CustomerProfile id={props.results.id} /> */}
    </>
  );
};

export default SearchResults;
