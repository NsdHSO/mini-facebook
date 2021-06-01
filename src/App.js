import './App.css';
import ModuleUser from './module/user/ModuleUser'
import { BrowserRouter } from 'react-router-dom';
import React from 'react';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <ModuleUser />
      </div>
    </BrowserRouter>

  );
}

export default App;
