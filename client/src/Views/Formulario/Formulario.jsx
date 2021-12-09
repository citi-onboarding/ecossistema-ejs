import { useState } from 'react';
import {useEffect} from 'react';
import axios from 'axios';

import {url} from "../../config/config";

import './Formulario.css';

import {
  Formstext
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

  const [paragrafo1, setParagrafo1] = useState([]); 
  const [paragrafo2, setParagrafo2] = useState([]);
  const [paragrafo3, setParagrafo3] = useState([]);

  const getParagraph = async () => {
    const res = await axios.get(`http://localhost:1337/conecte-se`);
    const { Paragrafo_1, Paragrafo_2, Paragrafo_3 } = res.data;
    setParagrafo1(Paragrafo_1);
    setParagrafo2(Paragrafo_2);
    setParagrafo3(Paragrafo_3);
  };
  useEffect (() => {
    getParagraph();
  }, [])
  return (
    <div className="conecte-se">
        <div className="conecte-se-container">
            <div className="formulario" id="conecte-text">
                <Formstext justify="right" Contacttext={paragrafo1}/>
                <Formstext justify="right" Contacttext={paragrafo2}/>
                <Formstext justify="right" Contacttext={paragrafo3}/>
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
                <textarea className="form-message" id="textarea"
                value={message} 
                name="message"
                placeholder="Tire suas dúvidas ou nos mande uma mensagem" 
                rows="10" 
                required
                onChange={(e) => setMessage(e.target.value)}
                />
                <button className="form-button" type='submit'>ENVIAR</button>
              </form>
            </div>
        </div>
    </div>
  );
}
export default Formulario;