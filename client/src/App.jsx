import React from 'react';
import { Logo } from '../src/assets'

import './style.css';

import { 
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
      <Partners/>
  </div>
)
  }

export default App;
