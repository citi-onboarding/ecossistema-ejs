import React from 'react'


import './Formsfield.css';

function Formsfield(props) {
  return (
    <div style={{justifyContent: props.justify}} className="footer-text-div">
       <p>{props.footertext}</p> 
    </div>
  );
}

export default Formsfield;