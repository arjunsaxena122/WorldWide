import { useState } from "react";
import { GiHamburger } from "react-icons/gi";
import {  NavLink } from "react-router-dom";

function Header() {

  const [show, setShow] = useState(false)

  function handleHamBurger(){
    return setShow(!show)
  }

  return (
    <header>
      <div className="container">
        <div className="grid navbar-grid">
          <div className="Logo">
            <NavLink to="/">
              <h1>WorldWide</h1>
            </NavLink>
          </div>
          <nav>
            <ul className={show ? "menu-mobile" : "menu-web"}>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/about">About</NavLink>
              </li>
              <li>
                <NavLink to="/contact">Contact</NavLink>
              </li>
              <li>
                <NavLink to="/country">Country</NavLink>
              </li>
            </ul>
          </nav>

          <div className="ham-menu">
            <button onClick={handleHamBurger}>
              <GiHamburger/>
            </button>
          </div>



        </div>
      </div>
    </header>
  );
}

export default Header;
