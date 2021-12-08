import React from "react";
import "./Navbar.css";
import { ExampleComponent } from "../../Components";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-content">
        <div className="nav-logo">
          <img
            src="/assets/svg/logo.svg"
            alt="Logo de Ecossistemas EJ"
            srcset=""
          />
          <a>Junior Enterprise Ecosystem</a>
        </div>
        <ul className="nav-list">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Sobre nós</a>
          </li>
          <li>
            <a href="#">Parcerias</a>
          </li>
          <li>
            <a href="#">
              <b>Conecte-se</b>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
