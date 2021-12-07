import React from 'react'
import './Formulario.css';

import {
  Formsfield,
} from '../../Components';

function Formulario(){
  return (
    <div className="conecte-se">
        <div className="container">
            <div className="conecte-text">
                <Formsfield/>
            </div>
            <div className="formulario">
                <Formsfield/>
            </div>
        </div>
    </div>
  );
}

export default Formulario;