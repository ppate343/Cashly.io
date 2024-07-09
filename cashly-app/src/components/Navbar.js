import React, { useState } from "react";
import { IconContext } from "react-icons";
import { CiMenuBurger } from "react-icons/ci";
import { FaHouseUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Sidebar } from "./Sidebar";
import "../assets/Navbar.css";

function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: "black" }}>
        <div className="navbar">
          <Link to="#" className="menu-bars">
          <CiMenuBurger onClick={showSidebar} />
          </Link>
        </div>
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items" onClick={showSidebar}>
            <li className="navbar-toggle">
              <Link to="#" className="menu-bars">
              <CiMenuBurger class='active-icon' onClick={showSidebar} />
              </Link>
            </li>
            <div className='user-name'>Puja Patel</div>
            {Sidebar.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
            <div className='profile-type'>
            <IconContext.Provider value={{ color: "white" }}>
              <FaHouseUser className='profile-icon'/>
              <div className='profile-text'> Cashly Inc.
              <div>Agent Profile</div>
              </div>
              
            </IconContext.Provider>
            </div>
          </ul> 
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
