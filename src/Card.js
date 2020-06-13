import React from "react";

const Card = props => (
  <div className="card">
    <img className="card-img-top" src={props.img} alt="." />
    <div className="card-body">
      <a href={props.link} className="btn btn-primary">
        Go somewhere
      </a>
    </div>
  </div>
);

export default Card;
