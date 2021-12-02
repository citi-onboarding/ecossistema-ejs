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
                <Contacttext Contacttext="Onde nos encontrar"/>
                <Contacttext Contacttext="Av. Jornalista Aníbal Fernandes, s/n –\n
                    Cidade Universitária, Recife – PE,\n
                    50740-560"/>
            </section>
            <section id="logo">
                <img src="" alt=""/>
            </section>
            <section id="contact">
                <div id="reach_us">
                    <Contacttext Contacttext="Fale conosco!"/>
                    <Contacttext Contacttext="+55 (81) 99429-9649"/>
                    <Contacttext Contacttext="contato@citi.org.br"/>
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