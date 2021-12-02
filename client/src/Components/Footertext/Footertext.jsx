import React from 'react'


import './Footertext.css';

function Footertext(props) {
/* O "style" abaixo é um exemplo de como passar um estilo do css como props  */
  return (
    <div className="footer-text-div">
       <p>{props.footertext}</p> 
    </div>
  );
}

export default Footertext;