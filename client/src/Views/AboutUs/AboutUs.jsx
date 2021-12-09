import React from 'react';
import './AboutUs.css';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import aboutus from '../../assets/aboutus.png'

function AboutUs() {
  const [image, setImage] = useState()
  const [text, setText] = useState()
  const [text2, setText2] = useState()

   const getTitle = async () => {
    const res = await axios.get("http://localhost:1337/about-us");
    const { Paragraph1, Paragraph2, about_us_photo } = res.data;
    console.log(res.data);
    setText(Paragraph1);
    setText2(Paragraph2);
    setImage(about_us_photo?.url)
  };

  useEffect (() => {
    getTitle();
  }, [])
  return (
    <div className="AboutUsPage" id='aboutus'>
     <div className="AboutUsContent">
       <div className="AboutUsImg"><img src={image} alt="Sobre nós" widht="445px" height="450px"/> </div>    
       <div className="AboutUsText" >
         <div className="AboutUsTitle"><p> Ecossistema Internacional de empresa Juniores</p></div>
         <div className="AboutUsp"></div>     
           <div className="AboutUsp1"><p>{text}</p></div>
           <div className="AboutUsp2"><p>{text2}</p></div>
       </div>
     </div>
    </div>
  );
}

export default AboutUs;