import React from 'react'


import './Formsfield.css';

function Formsfield(props) {
  return (
    <div className="forms-text-div">
        <input value={props.value} type={props.tipo} placeholder={props.holder} style={{height: props.height}} required/>
    </div>
  );
}

export default Formsfield;