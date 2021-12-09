import React, { useEffect } from 'react'
import './Results.css'

import { useState } from 'react';

import axios from 'axios';

import {
    ResultsData,
    UnderlineTitle,
} from '../../Components';

function Results() {
    const [results, setResults] = useState([])

    const [texto, setTexto] = useState()

    const getTexto = async () => {
        const res = await axios.get(`http://localhost:1337/results-text`);
        const { ResultsTexto } = res.data;
        console.log(res.data)
        setTexto(ResultsTexto);
      };

    const getResults = async () => {
        const res = await axios.get(`http://localhost:1337/results`);
        const results = res.data;
        console.log(results)
        setResults(results);
      };
    
      useEffect (() => {
        getResults();
        getTexto();
      }, [])

    return (
        <div className="results-div">
            <div className="max-width">
                <UnderlineTitle title="Resultados da rede"/>
                <div className="results-content">
                    <div className="results-text">
                        <p>{texto}</p>
                    </div>
                    <div className="results-group">
                    {results?.map(({data_title, data, id}) => {
                        if(id == 3){
                            return <ResultsData text={data_title} number={data} size="100%"/>
                        } else{
                            return <ResultsData text={data_title} number={data} size="50%"/>;
                        }
                        
                    })}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Results;