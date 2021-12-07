import React from 'react';
import { Logo } from '../src/assets'

import './style.css';

import { 
  Example,
  Navbar,
  Banner, 
} from './Views';

const App = () => {
  return (
    <div className="App">
      <Navbar/>
      <Banner/>
  </div>
)
  }

export default App;
