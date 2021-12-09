import React from "react";
import {useEffect} from "react";
import {useState} from "react";
import axios from 'axios';
import './Contato.css'

import{
    Youtube,
    Instagram,
    Googlefooter
} from '../../assets';

import {
    SocialMediaButton, 
    Contacttext
} from '../../Components';

function Contato() {

    const [imagem, setImagem] = useState([]); 
    const [telefone, setTelefone] = useState([]);
    const [email, setEmail] = useState([]);
    const [instagram, setInstagram] = useState([]); 
    const [youtube, setYoutube] = useState([]);
    const [google, setGoogle] = useState([]);
    const [endereco, setEndereco] = useState([]);
  
    const getFooter = async () => {
      const res = await axios.get(`http://localhost:1337/footer`);
      const { Imagem, Telefone, Email, Instagram, Youtube, Google, Endereco } = res.data;
      setImagem(Imagem);
      setTelefone(Telefone);
      setEmail(Email);
      setInstagram(Instagram);
      setYoutube(Youtube);
      setGoogle(Google);
      setEndereco(Endereco);
    };
    useEffect (() => {
      getFooter();
    }, [])

    return (
        <div id="contactus">
            <div className="contato">
                <section id="addres">
                        <div>
                            <Contacttext justify="left" Contacttext="Onde nos encontrar:"/>
                            <Contacttext justify="left" Contacttext={endereco}/>
                        </div>
                    </section>
                    <section id="logo">
                        <img src= {imagem?.url} alt=""/>
                    </section>
                    <section id="contact">
                        <div id="reach_us">
                            <Contacttext justify="right" Contacttext="Fale conosco!"/>
                            <Contacttext justify="right" Contacttext={telefone}/>
                            <div id="email">
                                <Contacttext justify="right" Contacttext={email}/>
                            </div>
                        </div>
                        <div id="socialmedia">
                            <SocialMediaButton link={instagram} image= {Instagram} imagedescription=""/>
                            <SocialMediaButton link={youtube} image= {Youtube} imagedescription=""/>
                            <SocialMediaButton link={google} image= {Googlefooter} imagedescription=""/>
                        </div>
                    </section>
            </div>
        </div>
    )
}
export default Contato;