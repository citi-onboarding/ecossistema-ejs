import React from 'react'


import './Formstext.css';

function Formstext(props) {
/* O "style" abaixo é um exemplo de como passar um estilo do css como props  */
  return (
    <div style={{justifyContent: props.justify}} className="forms-text-div">
       <p>{props.Contacttext}</p> 
    </div>
  );
}

export default Formstext;