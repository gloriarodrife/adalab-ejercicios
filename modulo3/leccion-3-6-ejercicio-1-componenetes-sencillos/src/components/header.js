import logo from '../images/adalab-logo-155x61.png';
import { Li } from './li';

const Header = () => {
  return (
    <div>
      <div>
        <a target="blank" href="https://adalab.es/">
          <img className="logo" src={logo} alt="logo-adalab" title="image" />
        </a>
      </div>
      <ul className="menu">
        <Li
          text="BLOG"
          href="https://adalab.es"
          openInNewTab={true ? '_blank' : ''}
        />
        <Li
          text="CONTACTO"
          href="https://adalab.es/contacto"
          openInNewTab={true ? '' : '_blank'}
        />
      </ul>
    </div>
  );
};

export { Header };
