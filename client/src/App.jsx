import React from 'react';
//import { Logo } from '../src/assets'
import './style.css';

import { 
  Results,
  Contato, 
  Footer,
  Waveshapeforms,
  Enterprises, 
  Example,
  Navbar,
  Banner,
  AboutUs, 
  Partners,
} from './Views';


const App = () => {
  return (
    <div className="App">
      <Navbar/>
      <Banner/>
      <AboutUs/>
      <Results/>
      <Enterprises/>
      <Partners/>
      <Waveshapeforms/>
      <Contato/>
      <Footer/>
   </div>
  )
}

export default App;
