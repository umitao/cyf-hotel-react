import React, { useState, useEffect } from "react";

const CustomerProfile = props => {
  const [listedProfile, setListedProfile] = useState({});

  const url = `https://cyf-react.glitch.me/customers/${props.id}`;

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setListedProfile(data);
      });
  }, [url]);

  return (
    <ul>
      <li>{listedProfile.id}</li>
      <li>{listedProfile.email}</li>
      <li>{listedProfile.vip ? "VIP" : "Not VIP"}</li>
      <li>{listedProfile.phoneNumber}</li>
    </ul>
  );
};

export default CustomerProfile;
