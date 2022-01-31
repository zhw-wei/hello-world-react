import React from 'react';
import logo from './logo.svg';
import './App.css';

import Comp1 from './comp1/Comp1';
import Comp3 from './comp3/Comp3';
import IndexRouter from './router/IndexRouter';


function App() {
  return (
    <div className="App">
      {/* <Comp1/> */}
      {/* <Comp3/> */}
      <IndexRouter/>
      
    </div>
  );
}

export default App;
