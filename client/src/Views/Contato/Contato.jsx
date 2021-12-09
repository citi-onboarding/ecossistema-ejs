import React from "react";
import './Contato.css'

import{
    Logoeco,
    Youtube,
    Instagram,
    Google
} from '../../assets';

import {
    SocialMediaButton, 
    Contacttext
} from '../../Components';

function Contato() {
    return (
        <div className="contactus">
            <div className="contato">
                <section className="addres">
                        <div>
                            <Contacttext justify="left" Contacttext="Onde nos encontrar:"/>
                            <Contacttext justify="left" Contacttext="Av. Jornalista Aníbal Fernandes, s/n –
                                Cidade Universitária, Recife – PE,
                                50740-560"/>
                        </div>
                    </section>
                    <section className="logo">
                        <img className="logo-image"src= {Logoeco} alt="Logo do Ecossistema Internacional
                        de Empresas Juniores" />
                    </section>
                    <section className="contact">
                        <div className="reach_us">
                            <Contacttext justify="right" Contacttext="Fale conosco!"/>
                            <Contacttext justify="right" Contacttext="+55 (81) 99429-9649"/>
                            <div className="email">
                                <Contacttext justify="right" Contacttext="contato@citi.org.br"/>
                            </div>
                        </div>
                        <div className="socialmedia">
                            <SocialMediaButton link="" image= {Instagram} imagedescription=""/>
                            <SocialMediaButton link="" image= {Youtube} imagedescription=""/>
                            <SocialMediaButton link="" image= {Google} imagedescription=""/>
                        </div>
                    </section>
            </div>
        </div>
    )
}
export default Contato;