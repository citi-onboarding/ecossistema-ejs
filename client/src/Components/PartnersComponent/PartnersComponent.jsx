import React from 'react'


import './PartnersComponent.css';

function PartnersComponent(props) {
  return (
    <div className="PartnersC">
       <img src={props.partnericon} alt="logo"/> 
    </div>
  );
}

export default PartnersComponent;