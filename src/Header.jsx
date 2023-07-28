import React, { useContext } from "react";
import { FaLaptop, FaMobileAlt, FaTabletAlt } from "react-icons/fa";
import DataContext from "./context/DataContext";

function Header({ title }) {
  const { width } = useContext(DataContext);

  return (
    <header className="Header">
      <h1>{title}</h1>
      {width <= 480 ? (
        <FaMobileAlt />
      ) : width <= 768 ? (
        <FaTabletAlt />
      ) : (
        <FaLaptop />
      )}
    </header>
  );
}

export default Header;
