import React, { useEffect } from 'react'
import './Navbar.css'

import { useState } from 'react';

import axios from 'axios';


function Navbar() {
    const [logo, setLogo] = useState()

  const getLogo = async () => {
    const res = await axios.get(`http://localhost:1337/navbar`);
    const { logo } = res.data;
    console.log(logo)
    setLogo(logo);
  };

  useEffect (() => {
    getLogo();
  }, [])

  return (
    <nav className="navbar">
        <div className="nav-logo">
            <img src={logo?.url} alt="Logo de Ecossistemas EJ" srcset="" />
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
                <a href="#"><b>Conecte-se</b></a>
            </li>
        </ul>
    </nav>
  );
}

export default Navbar;