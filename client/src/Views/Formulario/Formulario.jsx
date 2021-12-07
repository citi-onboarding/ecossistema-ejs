import React from 'react'
import './Formulario.css';

import {
  Formsfield,
  Formstext
} from '../../Components';

function Formulario(){
  return (
    <div className="conecte-se">
        <div className="container">
            <div className="formulario" id="conecte-text">
                <Formstext justify="right" Contacttext="Com o apoio da FEJESP, você encaminha a 
                sua demanda por projetos ou serviços de consultoria e nós colocamos você em contato 
                com a Empresa Júnior que mais se encaixa com as suas necessidades."/>
                <Formstext justify="right" Contacttext="Somos guiados pelo propósito e pelo sonho 
                de um estado de São Paulo mais empreendedor. Por isso, temos consciência da nossa 
                responsabilidade para fazer a diferença na vida de pequenas, médias e grandes empresas."/>
                <Formstext justify="right" Contacttext="Se tudo que você leu até aqui fez sentido, 
                entre em contato conosco! Junte-se a nós na busca de um Brasil mais empreendedor!"/>
            </div>
            <div className="formulario" id="forms-info">
                <Formsfield tipo="text" holder="Digite seu nome" height="50px"/>
                <Formsfield tipo="email" holder="Digite seu melhor e-mail" height="50px"/>
                <Formsfield tipo="text" holder="Digite o assunto" height="50px"/>
                <Formsfield tipo="text" holder="Tire suas dúvidas ou nos mande uma mensagem" height="140px"/>
            </div>
        </div>
    </div>
  );
}

export default Formulario;