// Importo librerias para trabjar con testing
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from '../components/App';
import Menu from '../components/Menu';
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

// Comprobar que tenemos el  enlace de Listado de pelicula

test('Testing link Menu', () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );

  const element = screen.getByText(/listado de películas/i);
  // Compruebo
  // expect(element).toHaveAttribute('href', '/movies/list');

  expect(element.href).toBe('http://localhost/movies/list');
});

// Comprobar que el códig de ls funcione correctamente

test('testing Local Storage Get', () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
  const result = localStorage.get('movies', []);
  expect(result).toEqual([]);
});
