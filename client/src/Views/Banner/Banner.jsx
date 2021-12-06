import React from 'react'
import './Banner.css'

import {
    Button,
    Divider
} from '../../Components';

function Banner() {
  return (
    <div className="banner">
        <div className="banner-text">
            <h1>Onde tudo se conecta e você evolui</h1>
            <p>“Potencializamos a transformação tecnológica através de conexões e integração entre as pessoas, co-criando um aibnente igualitário e inclusivo”.</p>
            <Button link="https://www.google.com.br" text="Saiba mais"/>
        </div>
        <div className="banner-image">
            <div className="image"></div>
        </div>
        <Divider/>
    </div>
  );
}

export default Banner;