import React from 'react'


import './PartnersComponent.css';

function PartnersComponent(props) {
  return (
    <div className="PartnersC">
       <img src={props.partnericon} alt="logo" height="113px" width="177px"/> 
    </div>
  );
}

export default PartnersComponent;