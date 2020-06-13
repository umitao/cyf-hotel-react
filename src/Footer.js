import React from "react";

const Footer = () => {
  const footerContent = [
    "123 Fake Street, London, E1 4UD",
    "hello@fakehotel.com",
    "0123 456789"
  ];
  return (
    <div className="footer">
      <ul>
        {footerContent.map((footerElement, index) => (
          <li className="footerItem" key={index}>
            {footerElement}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Footer;
