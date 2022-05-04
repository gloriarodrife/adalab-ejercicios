// Importo librerias para trabjar con testing
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from '../components/App';
import MovieForm from '../components/MovieForm';
// Nombre del test y segundo una funcion

// Comporbar que en la aplicacion tiene un nombre especifico
test('Test Name App', () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
  // Guardo en una variable el valor de buscar si hay escrito lo que pongo entre comillas

  // /valor/i para indicar que no tenga en cuenta mayusculas o minusculas
  const element = screen.getByText(/Aplicación de Película/i);
  expect(element).toBeInTheDocument();
});

// Comprobar que el formulario estén los elementos de Nombre

test('testing Label NAme', () => {
  render(<MovieForm />);
  const element = screen.getByLabelText(/Nombre/i);
  // Compruebo
  expect(element).toBeInTheDocument();
});
