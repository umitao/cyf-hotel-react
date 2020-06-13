import React from "react";
import Card from "./Card";

const TouristInfoCards = () => {
  const locations = [
    {
      link: "http://peoplemakeglasgow.com",
      name: "glasgow",
      img: "https://www.linkpicture.com/q/Glasgow.jpg"
    },
    {
      link: "visitmanchester.com",
      name: "manchester",
      img: "https://www.linkpicture.com/q/manchester.jpeg"
    },
    {
      link: "visitlondon.com",
      name: "london",
      img: "https://www.linkpicture.com/q/london.jpg"
    }
  ];
  return locations.map(location => (
    <Card key={location.name} img={location.img} link={location.link} />
  ));
};

export default TouristInfoCards;
