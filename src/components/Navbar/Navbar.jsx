import React, { useState } from "react";
import './Navbar.css';
import { Icon } from "react-icons-kit";
import { menu } from "react-icons-kit/feather/menu";
import { x } from "react-icons-kit/feather/x";

export const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  
  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <nav className={toggle ? "navbar expanded" : "navbar"}>
        <img className="logo" src="./LOGO.svg" alt="Ogilvy" />
      <div className="toggle-icon" onClick={handleToggle}>
        {toggle ? <Icon icon={x} size={28} /> : <Icon icon={menu} size={28} />}
      </div>
      <ul className="links">
        <li>Home</li>
        <li>Nuestras Plantas</li>
        <li>El tiempo</li>
        <li>Contacto</li>
      </ul>
    </nav>
  );
};

export default Navbar;