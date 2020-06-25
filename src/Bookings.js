import React, { useState, useEffect } from "react";
import Search from "./Search";
import SearchResults from "./SearchResults";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [isError, setIsError] = useState(null);

  const search = searchVal => {
    setBookings(
      bookings.filter(obj => {
        return (
          obj.firstName.toLowerCase().includes(searchVal) ||
          obj.surname.toLowerCase().includes(searchVal)
        );
      })
    );
  };

  const url = "https://cyf-react.glitch.me/";

  useEffect(() => {
    fetch(url)
      .then(res => (res.ok ? res.json() : setIsError(true)))
      .then(data => {
        setBookings(data);
        setLoaded(true);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);
  if (!loaded) {
    return <h1>Loading...</h1>;
  } else if (isError) {
    return <h1>Error - Cannot load bookings</h1>;
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
