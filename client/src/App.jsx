import React from 'react';
//import { Logo } from '../src/assets'
import './style.css';

import {
  Contato, 
  Footer
} from './Views';


const App = () => {
  return (
    <div className="App">
      <section id="footer-media">
        <Contato/>
      </section>
      <section id="footer-dev">
        <Footer/>
      </section>
   </div>
  )
}

export default App;
