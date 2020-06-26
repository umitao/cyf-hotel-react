import React from "react";

const TableHeader = props => {
  return (
    <thead>
      <tr>
        <th scope="col" onClick={() => props.stateSetter("id")}>
          ID
        </th>
        <th scope="col" onClick={() => props.stateSetter("title")}>
          Title
        </th>
        <th scope="col" onClick={() => props.stateSetter("firstName")}>
          Name
        </th>
        <th scope="col" onClick={() => props.stateSetter("surname")}>
          Last Name
        </th>
        <th scope="col" onClick={() => props.stateSetter("email")}>
          Email
        </th>
        <th scope="col" onClick={() => props.stateSetter("roomId")}>
          Room ID
        </th>
        <th scope="col" onClick={() => props.stateSetter("checkInDate")}>
          Check In Date
        </th>
        <th scope="col" onClick={() => props.stateSetter("checkOutDate")}>
          Check Out Date
        </th>
        <th scope="col" onClick={() => props.stateSetter("nights")}>
          Nights
        </th>
      </tr>
    </thead>
  );
};
export default TableHeader;
