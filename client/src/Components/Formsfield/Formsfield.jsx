import React from 'react'


import './Formsfield.css';

function Formsfield(props) {
  return (
    <div className="forms-text-div">
      <form>
        <input type={props.tipo} placeholder={props.holder} style={{height: props.height}}/>
      </form>
    </div>
  );
}

export default Formsfield;