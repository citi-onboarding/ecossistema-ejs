import React from "react";
import './Contato.css'

import {
    SocialMediaButton, 
    Contacttext
} from '../../Components';

function Contato() {
    return (
        <div id="contactus">
            <section id="addres">
                <div>
                    <Contacttext justify="left" Contacttext="Onde nos encontrar:"/>
                    <Contacttext justify="left" Contacttext="Av. Jornalista Aníbal Fernandes, s/n –
                        Cidade Universitária, Recife – PE,
                        50740-560"/>
                </div>
            </section>
            <section id="logo">
                <img src="" alt=""/>
            </section>
            <section id="contact">
                <div id="reach_us">
                    <Contacttext justify="right" Contacttext="Fale conosco!"/>
                    <Contacttext justify="right" Contacttext="+55 (81) 99429-9649"/>
                    <div id="email">
                        <Contacttext justify="right" Contacttext="contato@citi.org.br"/>
                    </div>
                </div>
                <div id="socialmedia">
                    <SocialMediaButton link="" image="" imagedescription=""/>
                    <SocialMediaButton link="" image="" imagedescription=""/>
                    <SocialMediaButton link="" image="" imagedescription=""/>
                </div>
            </section>
        </div>
    )
}
export default Contato;