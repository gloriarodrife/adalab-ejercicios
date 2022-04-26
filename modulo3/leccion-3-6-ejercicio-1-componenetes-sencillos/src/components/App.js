import '../styles/App.css';

import { Header } from './header';
import { Main } from './main';

function App() {
  return (
    <div className="App">
      <header className="header">
        <Header />
      </header>
      <main className="main">
        <Main />
      </main>
    </div>
  );
}

export { App };
