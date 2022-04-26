import '../styles/App.css';
import { useEffect, useState } from 'react';
import { callToApi } from '../services/api';
import ls from '../services/localStorage';
function App() {
  return (
    <div className="App">
      <h1>Hola mundo</h1>
    </div>
  );
}

export { App };
