import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png"
import "./Header.css"


const Header = () => {
  return (
    <div>
      <nav className="headerNavbar navbar">
        <div className="parentHeader container-fluid d-flex align-items-center mx-5">
          <img className="imageHeader img-fluid" src={logo} alt="" />
          <ul className="headerParentofLists navbar-nav d-flex flex-row align-items-center mb-0">
            <li className="HeaderPartsParent nav-item">
              <Link to={"/"} className="headerPartsNavigation">Home</Link>
            </li>
            <li className="HeaderPartsParent nav-item">
              <Link to={"/history"} className="headerPartsNavigation">History</Link>
            </li>
            <li className="HeaderPartsParent nav-item">
              <Link to={"/advantages"} className="headerPartsNavigation">Advantages</Link>
            </li>
            <li className="HeaderPartsParent nav-item">
              <Link to={"/working"} className="headerPartsNavigation">Working</Link>
            </li>
            <li className="HeaderPartsParent nav-item">
              <Link to={"/future"} className="headerPartsNavigation">Future</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;
