import React from 'react'

import './UnderlineTitle.css';

function UnderlineTitle(props) {
/* O "style" abaixo é um exemplo de como passar um estilo do css como props  */
  return (
    <div className="underline-title">
       <h1>{props.title}</h1> 
       <span className="line"></span>
    </div>
  );
}

export default UnderlineTitle;