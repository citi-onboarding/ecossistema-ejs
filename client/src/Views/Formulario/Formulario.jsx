import { useState } from 'react';
import axios from 'axios';

import {url} from "../../config/config";

import './Formulario.css';

import {
  Formstext,
  UnderlineTitle
} from '../../Components';

function Formulario() {

  const [name, setName] = useState([]); 
  const [email, setEmail] = useState([]);
  const [subject, setSubject] = useState([]);
  const [message, setMessage] = useState([]);

  const data = { 
    name, email, subject, message
  }

  const sendEmail = async (event) => { 
    try{
     event.preventDefault() 
      await axios.post(`${url}/emails`, data);
      alert("Sucesso! Sua mensagem foi enviada!")
      setName("")
      setEmail("")
      setSubject("")
      setMessage("")
    } catch (error) {
      alert(`Algo deu errado: ${error}`)
    }
  }
  return (
    <div className="conecte-se">
        <div className="container">
            <div>
              <UnderlineTitle title="Conecte com outra Empresa Júnior"/>
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
            </div>
            <div className="formulario" id="forms-info">
              <form className='Form' onSubmit={sendEmail}> 
                <input className="form-field"
                value={name} 
                type="text" 
                name="name" 
                placeholder="Digite seu nome"
                required
                onChange={(e) => setName(e.target.value)}
                 />
                <input className="form-field"
                value={email}  
                type="email"
                name="email"
                placeholder="Digite seu melhor e-mail"
                required
                onChange={(e) => setEmail(e.target.value)} 
                />
                <input className="form-field"
                value={subject} 
                type="text" 
                name="subject"
                placeholder="Digite o assunto"
                required
                onChange={(e) => setSubject(e.target.value)}
                />
                <textarea className="form-field" id="textarea"
                value={message} 
                name="message"
                placeholder="Tire suas dúvidas ou nos mande uma mensagem" 
                rows="10" 
                required
                onChange={(e) => setMessage(e.target.value)}
                />
                <button className="form-buttom" type='submit'>ENVIAR</button>
              </form>
            </div>
        </div>
    </div>
  );
}
export default Formulario;