import '../styles/reset.css';
import logo from '../images/logo.png';
import '../styles/App.scss';

function App() {
  return (
    <div>
      <header className="header">
        <div>
          <a target="_blank" rel="noreferrer" href="https://adalab.es/">
            <img src={logo} title="Adalab" alt="Logo de Adalab" />
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
console.log(logo);

export default App;
