import React from "react";

const Footer = () => {
  const footerContent = [
    "123 Fake Street, London, E1 4UD",
    "hello@fakehotel.com",
    "0123 456789"
  ];
  return (
    <ul>
      {footerContent.map(footerElement => (
        <li>{footerElement}</li>
      ))}
    </ul>
  );
};

export default Footer;
