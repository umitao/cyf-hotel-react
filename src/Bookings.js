import React, { useState, useEffect } from "react";
import Search from "./Search";
import SearchResults from "./SearchResults";
import FakeBookings from "./data/fakeBookings.json";

const Bookings = () => {
  const [bookings, setBookings] = useState(FakeBookings);

  const search = searchVal => {
    console.info("TO DO!", searchVal);
  };
  const url = "https://cyf-react.glitch.me";

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setBookings(data);
      });
  }, []);
  if (!bookings) {
    return null;
  } else {
    return (
      <div className="App-content">
        <div className="container">
          <Search search={search} />
          <SearchResults results={bookings} />
        </div>
      </div>
    );
  }
};

export default Bookings;
