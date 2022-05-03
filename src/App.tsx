import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Rounter, Route , Routes } from 'react-router-dom';
import Home from './pages/Home/Home';

const App: React.FC = () => {
  return (
    <div className="App">
      <Rounter>
        <Routes>
         <Route path="/"  element={<Home />} />
        </Routes>
      </Rounter>
    </div>
  );
}

export default App;
