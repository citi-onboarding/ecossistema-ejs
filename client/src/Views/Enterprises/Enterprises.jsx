import React, { useEffect } from "react";
import "./Enterprises.css";

import Slider from "react-slick";
import axios from 'axios';

import { useState } from 'react';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { UnderlineTitle, EjCard } from "../../Components";

import { Bandeira1, Bandeira2, Bandeira3, Bandeira4 } from "../../assets";

function Enterprises() {
  const [enterprises, setEnterprises] = useState([])

  const getEnterprises = async () => {
    const res = await axios.get(`http://localhost:1337/e-js`);
    const enterprises = res.data;
    console.log(enterprises);
    setEnterprises(enterprises);
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };

  useEffect (() => {
    getEnterprises();
  }, [])

  return (
    <div className="our-ejs">
      <div className="enterprises-width">
        <UnderlineTitle title="Nossas Empresas Juniores" />
        <Slider {...settings}>
        {enterprises?.map(({AreaAtuacao, Curso, FotoEJ, Universidade, NomeEJ}) => (
                  <EjCard
            university={Universidade}
            class={Curso}
            image={FotoEJ[0].url}
            title={NomeEJ}
            category={AreaAtuacao}
          />
            ))}
        </Slider>
      </div>
    </div>
  );
}

export default Enterprises;
