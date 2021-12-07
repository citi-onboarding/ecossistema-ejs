import React from 'react'

import './Button.css';

function Button(props) {
/* O "style" abaixo é um exemplo de como passar um estilo do css como props  */
  return (
    <a target="_blank" href={props.link}>
       <button className="button"> {props.text}</button> 
       </a>
  );
}

export default Button;