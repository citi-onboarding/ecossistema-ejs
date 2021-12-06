import React from 'react'
import './Example.css'

import {
    ExampleComponent,
} from '../../Components';

import {
  Bandeira1,
  Bandeira2,
  Bandeira3,
  Bandeira4,
} from '../../assets';
function Example() {
/* O "style" abaixo é um exemplo de como passar um estilo do css como props  */
  return (
    <div className="example-div">
       <ExampleComponent textColor="red" titleText='Esse é um componente de exemplo :)'/>
    </div>
  );
}

export default Example;