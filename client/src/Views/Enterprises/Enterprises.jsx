import React from 'react'
import './Enterprises.css'

import {
    UnderlineTitle,
} from '../../Components'

function Enterprises() {
/* O "style" abaixo é um exemplo de como passar um estilo do css como props  */
  return (
    <div className="our-ejs">
        <UnderlineTitle title="Titulo"/>
    </div>
  );
}

export default Enterprises;