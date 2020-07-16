import React from 'react';
import './App.css';
import { Switch} from 'react-router-dom';
import Routes from './Routes';
import Navbar from './Navbar/Navbar';

function App() {
  return (
    <div>
      <Navbar />
      <main>
        <Switch>
          <Routes />
        </Switch>
      </main>
    </div>
  );
}

export default App;
