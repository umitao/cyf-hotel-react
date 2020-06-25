import React, { useState } from "react";
import moment from "moment";
import CustomerProfile from "./CustomerProfile";

const SearchResultsRow = props => {
  const data = props.data;
  const checkIn = moment(data.checkInDate);
  const checkOut = moment(data.checkOutDate);
  const [selected, setSelected] = useState(false);
  const [clickedProfile, setClickedProfile] = useState("");

  const handleSelect = () => setSelected(!selected);

  const handleClick = () => {
    setClickedProfile(data.id);
  };

  return (
    <tbody>
      <tr onClick={handleSelect} className={selected ? "selected" : null}>
        <td>{data.id}</td>
        <td>{data.title}</td>
        <td>{data.firstName}</td>
        <td>{data.surname}</td>
        <td>{data.email}</td>
        <td>{data.roomId}</td>
        <td>{data.checkInDate}</td>
        <td>{data.checkOutDate}</td>
        <td>{checkOut.diff(checkIn, "days")}</td>
        <td>
          <button onClick={handleClick}>Show Profile</button>
          {clickedProfile ? <CustomerProfile id={clickedProfile} /> : null}
        </td>
      </tr>
    </tbody>
  );
};

export default SearchResultsRow;
