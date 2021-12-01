import React from 'react'
import './Navbar.css'
import {
    ExampleComponent,
} from '../../Components';

function Navbar() {
  return (
    <nav className="navbar">
        <div className="nav-logo">
            <img src="/assets/svg/logo.svg" alt="Logo de Ecossistemas EJ" srcset="" />
            <h1>Junior Enterprise Ecosystem</h1>
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
                <a href="#"><b>Conecte-se</b></a>
            </li>
        </ul>
    </nav>
  );
}

export default Navbar;