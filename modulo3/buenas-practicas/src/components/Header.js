import Menu from './Menu';
import PropTypes from 'prop-types';

function Header(props) {
  return (
    <>
      <header className="header">
        <img
          className="header__img"
          alt="movie"
          src="https://adalab.es/wp-content/uploads/2021/05/logo-adalab.svg"
        />
        <h1 className="header__title">{props.title}</h1>
      </header>
      <Menu></Menu>
    </>
  );
}
Header.defaultProps = {
  title: 'No tiene titulo ',
};
Header.propTypes = {
  title: PropTypes.string,
};
export default Header;
