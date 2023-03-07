import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [MobileMenu, setMobileMenu] = useState(false);
  return (
    <>
      <header className="header">
        <div className="container d_flex">
          <div className="Categories d_flex">
            <span className="fa-solid fa-border-all"></span>
            <h4>
              Categories<i className="fa fa-cheveron-down"></i>
            </h4>
            <div className="navlink">
              <ul
                className={
                  MobileMenu ? "nav-links-MobileMenu" : "link f_flex capitalize"
                }
                onClick={() => setMobileMenu(false)}
              >
                <li>
                  <Link to="/">home</Link>
                </li>
                <li>
                  <Link to="/pages">pages</Link>
                </li>
                <li>
                  <Link to="/user">user account</Link>
                </li>
                <li>
                  <Link to="/vendor">vendor account</Link>
                </li>
                <li>
                  <Link to="/track">Track my account</Link>
                </li>
                <li>
                  <Link to="/contact">contact</Link>
                </li>
              </ul>
              <button
                className="toggle"
                onClick={() => setMobileMenu(!MobileMenu)}
              >
                {MobileMenu ? (
                  <i className="fas fa-times close home-btn"></i>
                ) : (
                  <i className="fas fa-bars open"></i>
                )}
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
