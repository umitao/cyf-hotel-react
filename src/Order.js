import React, { useState } from "react";

const Order = props => {
  const [orders, setOrders] = useState(0);

  function orderOne() {
    setOrders(orders + 1);
  }
  return (
    <li>
      {props.orderType}: {orders}{" "}
      <button className="btn btn-primary" onClick={orderOne}>
        Add
      </button>
    </li>
  );
};

export default Order;
