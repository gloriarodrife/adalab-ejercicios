import { Link } from 'react-router-dom';

function Menu() {
    return (
        <nav >
            <ul className="menu">
                <li className="menu__item">
                    <Link to='/'>Inicio</Link>
                </li>
                <li className="menu__item">
                    <Link to="/movies/list">Listado de películas</Link>
                </li>
                <li className="menu__item">
                    <Link to="/movies/new">Añadir Película</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Menu;

