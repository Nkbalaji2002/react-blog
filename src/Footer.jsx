import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <>
      <footer className="Footer">
        <p>CopyRight &copy;{year}</p>
      </footer>
    </>
  );
};

export default Footer;
