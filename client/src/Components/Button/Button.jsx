import React from 'react'

import './Button.css';

function Button(props) {
/* O "style" abaixo é um exemplo de como passar um estilo do css como props  */
  return (
       <button className="button"> {props.text}</button> 
  );
}

export default Button;