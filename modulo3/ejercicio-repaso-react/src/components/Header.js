import React from 'react';
// import '../stylesheets/Header.scss';

function Header(props) {
  return (
    <header className="header">
      {props.subtitle && props.number ? (
        <>
          <h1 className="header__title">
            {props.number} {props.lesson}: {props.title}
          </h1>
          <h2 className="header__subtitle header__underline">
            {props.subtitle}
          </h2>
        </>
      ) : (
        <h1 className="header__title header__underline">
          {props.number} {props.lesson}: {props.title}
          {props.children}
        </h1>
      )}
    </header>
  );
}

export default Header;
