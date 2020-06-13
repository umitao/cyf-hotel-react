import React from "react";

const TableContent = () => {
  return customerData.map(customerData => (
    <tbody>
      <tr>
        <td key={customerData.id}>{customerData.id}</td>
        <td>{customerData.title}</td>
        <td>{customerData.firstName}</td>
        <td>{customerData.surname}</td>
        <td>{customerData.email}</td>
        <td>{customerData.roomId}</td>
        <td>{customerData.checkInDate}</td>
        <td>{customerData.checkOutDate}</td>
      </tr>
    </tbody>
  ));
};

export default TableContent;

// return locations.map((location) => (
//   <Card key={location.name} img={location.img} link={location.link} />
// ));

// const locations = [
//   {
//     link: "http://peoplemakeglasgow.com",
//     name: "glasgow",
//     img: "https://www.linkpicture.com/q/Glasgow.jpg",
//   },
//   {
//     link: "visitmanchester.com",
//     name: "manchester",
//     img: "https://www.linkpicture.com/q/manchester.jpeg",
//   },
//   {
//     link: "visitlondon.com",
//     name: "london",
//     img: "https://www.linkpicture.com/q/london.jpg",
//   },
// ];
