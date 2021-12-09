import React, { useEffect } from 'react';
import './AboutUs.css';

import { useState } from 'react';

import axios from 'axios';

function AboutUs() {
  const [image, setImage] = useState()
  const [text, setText] = useState()
  const [text2, setText2] = useState()

   const getTitle = async () => {
    const res = await axios.get("http://localhost:1337/about-us");
    const { text } = res.data;
    console.log(text);
    setText(Paragraph1);
    setText2(Paragraph2);
    setImage(About_us_photo)
  };

  useEffect (() => {
    getTitle();
  }, [])
  return (
    <div className="AboutUsPage">
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