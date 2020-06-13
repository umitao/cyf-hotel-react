import React from "react";
import Card from "./Card";

const TouristInfoCards = () => {
  const locations = [
    {
      link: "http://peoplemakeglasgow.com",
      name: "glasgow",
      img:
        "https://i1.wp.com/www.hisour.com/wp-content/uploads/2018/05/Architecture-in-Glasgow.jpg?w=320&ssl=1"
    },
    {
      link: "visitmanchester.com",
      name: "manchester",
      img:
        "https://www.prolificnorth.co.uk/sites/default/files/styles/hero/public/images/news/manchester-cityscape0.jpg?itok=8MnMvBZe&c=c879fa1cf0f5553f8944e41ef3d814a1"
    },
    {
      link: "visitlondon.com",
      name: "london",
      img:
        "https://london.ac.uk/sites/default/files/styles/max_1300x1300/public/2018-10/london-aerial-cityscape-river-thames_1.jpg?itok=6LenFxuz"
    }
  ];
  return locations.map(location => (
    <Card key={location.name} img={location.img} link={location.link} />
  ));
};

export default TouristInfoCards;
