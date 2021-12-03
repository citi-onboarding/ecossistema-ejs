import React from 'react';
import { Logo } from '../src/assets'

import './style.css';

import { 
  AboutUs, 
  Partners
} from './Views';

const App = () => {
  return (
    <div className="App">
      <AboutUs/>
      <Partners/>
  </div>
)
  }

export default App;
