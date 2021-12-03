import React from 'react';
import './AboutUs.css';
import aboutus from '../../assets/aboutus.svg'

function AboutUs() {
  return (
    <div className="AboutUs">
     <img src={aboutus} alt="Sobre nós" widht="445px" height="450px" className="imgAboutUs"/>      
     <div className="textos" ><h1 className="AboutUsTitle" >Ecossistema Internacional de empresa Juniores</h1>
     <p className="AboutUsp1">Somos guiados pelo propósito e pelo sonho de um estado de São Paulo mais empreendedor. Por isso, temos consciência da nossa responsabilidade para fazer a diferença na vida de pequenas, médias e grandes empresas.
     Somos guiados pelo propósito e pelo sonho de um estado de São Paulo mais empreendedor. Por isso, temos consciência da nossa responsabilidade para fazer a diferença na vida de pequenas, médias e grandes empresas.</p>
     </div>
    </div>
  );
}

export default AboutUs;