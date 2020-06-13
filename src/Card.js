import React from "react";

const Card = ({ img, link }) => (
  <div className="card col-sm">
    <img className="card-img-top" src={img} alt="." />
    <div className="card-body">
      <a href={link} className="btn btn-primary">
        Go somewhere
      </a>
    </div>
  </div>
);

export default Card;
