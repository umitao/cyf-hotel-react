import React, { useState } from "react";
import TableHeader from "./TableHeader";
import SearchResultsRow from "./SearchResultsRow";
import BookingInput from "./BookingInput";
import NewBookingRow from "./NewBookingRow";
const SearchResults = props => {
  const [newBooking, setNewBooking] = useState([]);
  const [sortState, setSortState] = useState("id");

  const handleSortState = sortState => {
    setSortState(sortState);
  };

  const handleInputValue = newBooking => {
    setNewBooking(newBooking);
  };

  let sortFunction;
  if (sortState === "id" || sortState === "roomId" || sortState === "nights") {
    sortFunction = (a, b) => a[sortState] - b[sortState];
  } else {
    sortFunction = (a, b) => {
      return a[sortState].localeCompare(b[sortState], "en", {
        sensitiviy: "base"
      });
    };
  }

  const ascSorted = props.results.sort(sortFunction);

  return (
    <>
      <table className="table">
        <TableHeader stateSetter={handleSortState} />
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
