import React, { useEffect } from 'react'
import './Banner.css'

import axios from 'axios';
import { useState } from 'react';

import {
    Button,
    Divider
} from '../../Components';

function Banner() {
  const [text, setText] = useState();
  const [title, setTitle] = useState();
  const [link, setLink] = useState();
  const [image, setImage] = useState();

  const getText = async () => {
    const res = await axios.get(`http://localhost:1337/banner-home`);
    const { title, description, button_link, home_photo } = res.data;
    console.log(title);
    setTitle(title);
    setText(description);
    setLink(button_link);
    setImage(home_photo)
  };

  useEffect (() => {
    getText();
  }, [])
  return (
    <div className="banner">
    <div className="banner-content">
      <div className="max-width">
        <div className="banner-text">
            <h1>{title}</h1>
            <p>{text}</p>
            <Button link={link} text="Saiba mais"/>
        </div>
        <div className="banner-image">
          <img src={image?.url} alt="" />
        </div>
        </div>
    </div>
    <Divider/>
    </div>
  );
}

export default Banner;