import React from 'react';
//import { Logo } from '../src/assets'
import './style.css';

import {
  Contato, 
  Footer,
  Formulario,
  Waveshapeforms,
} from './Views';


const App = () => {
  return (
    <div className="App">
      <Formulario/>
      <Waveshapeforms/>
      <Contato/>
      <Footer/>
   </div>
  )
}

export default App;
