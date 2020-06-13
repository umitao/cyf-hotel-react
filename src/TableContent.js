import React from "react";

const TableContent = () => {
  const customerData = [
    {
      id: 1,
      title: "Mr.",
      firstName: "Person1",
      surname: "Else",
      email: "person1@else.com",
      roomId: 204,
      checkInDate: "2017-11-21",
      checkOutDate: "2017-11-28"
    },
    {
      id: 2,
      title: "Mr.",
      firstName: "Person2",
      surname: "Else",
      email: "person2@else.com",
      roomId: 205,
      checkInDate: "2017-11-21",
      checkOutDate: "2017-11-28"
    },
    {
      id: 3,
      title: "Ms.",
      firstName: "Person3",
      surname: "Else",
      email: "person3@else.com",
      roomId: 206,
      checkInDate: "2017-11-21",
      checkOutDate: "2017-11-28"
    },
    {
      id: 4,
      title: "Mr.",
      firstName: "Person4",
      surname: "Else",
      email: "person4@else.com",
      roomId: 207,
      checkInDate: "2017-11-21",
      checkOutDate: "2017-11-28"
    },
    {
      id: 5,
      title: "Ms.",
      firstName: "Person5",
      surname: "Else",
      email: "person5@else.com",
      roomId: 207,
      checkInDate: "2017-11-21",
      checkOutDate: "2017-11-28"
    }
  ];

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
