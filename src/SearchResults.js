import React, { useState } from "react";
import TableHeader from "./TableHeader";
import SearchResultsRow from "./SearchResultsRow";
import BookingInput from "./BookingInput";
import NewBookingRow from "./NewBookingRow";

const SearchResults = props => {
  const [newBooking, setNewBooking] = useState([]);
  const [sortBy, setSortBy] = useState("id");

  const handleSort = sortBy => {
    setSortBy(sortBy);
  };

  const handleInputValue = newBooking => {
    setNewBooking(newBooking);
  };

  let sortFunction;

  if (sortBy === "id" || sortBy === "roomId" || sortBy === "nights") {
    sortFunction = (a, b) => a[sortBy] - b[sortBy];
  } else {
    sortFunction = (a, b) => {
      return a[sortBy].localeCompare(b[sortBy], "en", {
        sensitiviy: "base"
      });
    };
  }

  const ascSorted = props.results.sort(sortFunction);

  return (
    <>
      <table className="table">
        <TableHeader stateSetter={handleSort} />
        {ascSorted.map((data, index) => (
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
