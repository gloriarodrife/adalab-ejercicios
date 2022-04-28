import { Route, Routes } from 'react-router-dom';

import Header from './Header';
import Product from './Product';
import Overview from './Overview';
import Repositories from './Repositories';
import NotFoundPage from './NotFoundPage';

import '../styles/App.css';

function App() {
  return (
    <div className="App">
      <Header />

      <main>
        <Routes>
          <Route path="/overview" element={<Overview />} />
          <Route path="/product/:productId" element={<Product />} />
          <Route path="/repositories" element={<Repositories />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
    </div>
  );
}

export { App };
