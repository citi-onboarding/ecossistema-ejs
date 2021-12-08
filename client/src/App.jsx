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
      <Enterprises/>
      <Navbar/>
      <Banner/>
      <AboutUs/>
      <Partners/>
  </div>
)
  }

export default App;
