import React from 'react'


import './Footertext.css';

function Footertext(props) {
  return (
    <div className="footer-text-div">
       <p>{props.footertext}</p> 
    </div>
  );
}

export default Footertext;