import React from 'react'


import './ExampleComponent.css';

function ExampleComponent(props) {
/* O "style" abaixo é um exemplo de como passar um estilo do css como props  */
  return (
    <div className="example-component-div">
       <h1 style={{color:props.textColor}}> {props.titleText}</h1> 
    </div>
  );
}

export default ExampleComponent;