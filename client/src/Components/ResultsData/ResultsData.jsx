import React from 'react'


import './ResultsData.css';

function ResultsData(props) {
  return (
    <div className="results-data" style={{width:props.size}} >
       <h3>{props.number}</h3> 
       <h4>{props.text}</h4>
    </div>
  );
}

export default ResultsData;