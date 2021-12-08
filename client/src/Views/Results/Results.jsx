import React from 'react'
import './Results.css'

import {
    ResultsData,
    UnderlineTitle,
} from '../../Components';

function Results() {
    return (
        <div className="results-div">
            <div className="max-width">
                <UnderlineTitle title="Resultados da rede"/>
                <div className="results-content">
                    <div className="results-text">
                        <p>Somos um ecossistema de desenvolvimento social que atua em rede para acelerar o poder de impacto de líderes de favelas de todo país que possuem um sonho em comum: colocar a pobreza das favelas no museu. Nosso foco são iniciativas transformadoras, capazes de gerar resultados de longo prazo. Entregamos serviços de educação, desenvolvimento econômico e cidadania em territórios de favela e executamos programas de transformação sistêmica</p>
                    </div>
                    <div className="results-group">
                        <ResultsData text="FATURAMENTO" number='1545' size="50%"/>
                        <ResultsData text="EMPRESAS JUNIORES" number='34 mil' size="50%" />
                        <ResultsData text="EMPRESÁRIOS JUNIORES" number='5 mil' size="100%" />
                        <ResultsData text="PROJETOS" number='15 mil' size="50%" />
                        <ResultsData text="UNIVERSIDADES" number='25 mil' size="50%" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Results;