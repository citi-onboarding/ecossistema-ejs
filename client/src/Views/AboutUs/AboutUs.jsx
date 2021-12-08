import React, { useEffect } from 'react';
import './AboutUs.css';
import aboutus from '../../assets/aboutus.png'

import { useState } from 'react';

import axios from 'axios';

function AboutUs() {
  const [title, setTitle] = useState()

  const getTitle = async () => {
    const res = await axios.get("http://localhost:1337/about-us");
    const { texto } = res.data;
    console.log(texto)
    setTitle(texto);
  };

  useEffect (() => {
    getTitle();
  }, [])
  return (
    <div className="AboutUsPage">
     <div className="AboutUsContent">
       <div className="AboutUsImg"><img src={aboutus} alt="Sobre nós" widht="445px" height="450px"/> </div>    
       <div className="AboutUsText" >
         <div className="AboutUsTitle"><p> Ecossistema Internacional de empresa Juniores</p></div>
         <div className="AboutUsp"></div>     
           <div className="AboutUsp1"><p>Somos guiados pelo propósito e pelo sonho de um estado de São Paulo mais empreendedor. Por isso, temos consciência da nossa responsabilidade para fazer a diferença na vida de pequenas, médias e grandes empresas.</p></div>
           <div className="AboutUsp2"><p>Somos guiados pelo propósito e pelo sonho de um estado de São Paulo mais empreendedor. Por isso, temos consciência da nossa responsabilidade para fazer a diferença na vida de pequenas, médias e grandes empresas.</p></div>
       </div>
     </div>
    </div>
  );
}

export default AboutUs;