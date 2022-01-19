import React from 'react';
import logo from './logo.svg';
import './App.css';

import Weather from './comp1/Weather';
import Person from './comp1/Person';
import ShowData from './comp1/ShowData';
import Login from './comp1/Login';

function App() {
  const p = { name: "王五", sex: "男", age: 22 }
  return (
    <div className="App">
      <Weather />
      <Person name="张三" sex="男" age={20} />
      <Person name="李四" sex="男" age={21} />
      <Person {...p} />
      <ShowData />
      <Login />
    </div>
  );
}

export default App;
