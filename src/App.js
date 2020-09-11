import React, {useEffect,useState,createContext,useReducer} from 'react';
import './App.css';

import DockTitleUpdateOne from './components/DockTitleUpdateOne'
import DockTitleUpdateTwo from './components/DockTitleUpdateTwo'

function App() {

  return (
    <div className="App">
      <h1>Custom Hook</h1>
      <DockTitleUpdateOne />
      <DockTitleUpdateTwo />
    </div>
  );
}

export default App;
