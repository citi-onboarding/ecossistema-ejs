import React from "react";

import "./EjCard.css";

function ExampleComponent(props) {
  return (
    <div className="ej-wrap">
      <div className="ej-card">
          <img src={props.image} alt="" />
        <h3>{props.title}</h3>
        <p>{props.category}</p>
        <h3>Universidade</h3>
        <p>{props.university}</p>
        <h3>Curso</h3>
        <p>{props.class}</p>
      </div>
    </div>
  );
}

export default ExampleComponent;
