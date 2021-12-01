import React from 'react'
import './Navbar.css'
import {
    ExampleComponent,
} from '../../Components';

function Navbar() {
  return (
    <nav className="navbar">
        <div>Logo</div>
        <ul className="nav-list">
            <li>
                <a href="#">Home</a>
            </li>
            <li>
                <a href="#">Sobre nós</a>
            </li>
            <li>
                <a href="#">Parceria</a>
            </li>
            <li>
                <a href="#"><b>Conecte-se</b></a>
            </li>
        </ul>
    </nav>
  );
}

export default Navbar;