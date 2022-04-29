import React from 'react';
import '../styles/Header.scss';

function Header(props) {
  return (
    // Si no recibe props.subtitle && props.number pinta la segunda opcion de h1 y si lo recibe pinta la primera opcion (ternario de la 20)

    <header className="header">
      {props.subtitle && props.number ? (
        <>
          <h1 className="header__title">
            {props.lesson} : {props.number} {props.title}
          </h1>
          <h2 className="header__subtitle header__underline">
            {props.subtitle}
          </h2>
        </>
      ) : (
        // Este es el else del ternario
        <h1 className="header__title header__underline">
          {props.number} {props.lesson} {props.title}
          {props.children}
        </h1>
      )}
    </header>
  );
}

export default Header;
