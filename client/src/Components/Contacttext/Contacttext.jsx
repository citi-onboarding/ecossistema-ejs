import React from 'react'


import './Contacttext.css';

function Contacttext(props) {
/* O "style" abaixo é um exemplo de como passar um estilo do css como props  */
  return (
    <div style={{justifyContent: props.justify}} className="contact-text-div">
       <p>{props.Contacttext}</p> 
    </div>
  );
}

export default Contacttext;