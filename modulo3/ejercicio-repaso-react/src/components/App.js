import '../styles/App.css';
import { useEffect, useState } from 'react';
// import { callToApi } from '../services/api';
// import ls from '../services/localStorage';
// import { Link, Route, Routes } from 'react-router-dom';
import Header from './Header';

function App() {
  return (
    <div className="App">
      <main>
        <section className="controls"></section>
        <section className="results"></section>
      </main>
    </div>
  );
}

export { App };
