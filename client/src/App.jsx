import React from 'react';
import { Logo } from '../src/assets'

import './style.css';

import { 
  Example,
  Navbar,
} from './Views';

const App = () => {
  return (
    <div className="App">
      <Navbar/>
      <Example/>
  </div>
)
  }

export default App;
