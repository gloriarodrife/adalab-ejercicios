import '../styles/App.css';
import { useEffect, useState } from 'react';
import { callToApi } from '../services/api';
import ls from '../services/localStorage';
// Fichero src/components/App.js

import { Route, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';
const App = () => {
  return (
    <div>
      <h2>Este título aparece siempre</h2>

      <Routes>
        <Route
          path="/contacto"
          element={
            <h2>
              Este título solo aparece cuando la usuaria entra en la página de
              contacto
            </h2>
          }
        />
      </Routes>

      <nav>
        <ul>
          <li>
            <Link to="/">Ir al inicio</Link>
          </li>
          <li>
            <Link to="/contacto">Ir a contacto</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export { App };
