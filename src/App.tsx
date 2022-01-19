import React from 'react';
import logo from './logo.svg';
import './App.css';

import Weather from './comp1/Weather';
import Person from './comp1/Person';

function App() {
  const p = {name: "王五", sex: "男", age: 22}
  return (
    <div className="App">
      <header className="App-header">
        {/* 
        <img src={logo} className="App-logo" alt="logo" /> 
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      */}
        <Weather/>
        <Person name="张三" sex="男" age={20}/>
        <Person name="李四" sex="男" age={21}/>
        <Person {...p}/>
      </header>
    </div>
  );
}

export default App;
