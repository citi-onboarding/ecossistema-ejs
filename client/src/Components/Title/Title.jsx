import React from 'react'


import './Title.css';

function Title(props) {
  return (
    <div className="Title-div">
       <h1>{props.titleText}</h1> 
    </div>
  );
}

export default Title;