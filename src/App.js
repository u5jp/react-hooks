import React, {useEffect,useState,createContext,useReducer} from 'react';
import './App.css';

import CountRef from './components/CountRef'

function App() {

  return (
    <div className="App">
      <h1>useRef</h1>
      <CountRef />
    </div>
  );
}

export default App;
