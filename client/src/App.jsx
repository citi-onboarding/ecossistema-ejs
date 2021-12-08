import React from 'react';
import { Logo } from '../src/assets'

import './style.css';

import { 
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
      <Enterprises/>
      <Partners/>
  </div>
)
  }

export default App;
