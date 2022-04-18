import '../styles/reset.css';
import '../styles/App.css';

function App() {
  return (
    <div>
      <header className="header">
        <div>
          <a target="_blank" rel="noreferrer" href="https://adalab.es/">
            <img
              className="logo"
              src="./assets/adalab-logo-155x61.png"
              alt="logo-adalab"
              title="image"
            />
          </a>
        </div>
        <ul className="menu">
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://adalab.es/blog/"
              className="item_menu"
            >
              BLOG
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://adalab.es/contacto/"
              className="item_menu"
            >
              CONTACTO
            </a>
          </li>
        </ul>
      </header>
      <main className="main">
        <ul className="content_main">
          <li>Creando</li>
          <li>Diversidad</li>
          <li>Digital</li>
        </ul>
      </main>
    </div>
  );
}

export default App;
