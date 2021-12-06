import React from "react";
import "./Enterprises.css";

import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { UnderlineTitle, EjCard } from "../../Components";

import { Bandeira1, Bandeira2, Bandeira3, Bandeira4 } from "../../assets";

function Enterprises() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };
  return (
    <div className="our-ejs">
      <div className="max-width">
        <UnderlineTitle title="Nossas Empresas Juniores" />
        <Slider {...settings}>
          <EjCard
            university="UFPE"
            class="Ciências econômicas"
            image={Bandeira1}
            title="FEA Júnior USP"
            category="Gestão empresarial"
          />
          <EjCard
            university="UFPE"
            class="Ciências econômicas"
            image={Bandeira2}
            title="POLI JR."
            category="Gestão de Processos"
          />
          <EjCard
            university="UFPE"
            class="Ciências econômicas"
            image={Bandeira3}
            title="UNICAP"
            category="Engenharia e arquitetura"
          />
          <EjCard
            university="UFPE"
            class="Ciências econômicas"
            image={Bandeira4}
            title="CITi"
            category="Tecnologia e Inovação"
          />
          <EjCard
            university="UFPE"
            class="Ciências econômicas"
            image={Bandeira1}
            title="FEA Júnior USP"
            category="Gestão empresarial"
          />
          <EjCard
            university="UFPE"
            class="Ciências econômicas"
            image={Bandeira2}
            title="POLI JR."
            category="Gestão de Processos"
          />
        </Slider>
      </div>
    </div>
  );
}

export default Enterprises;
