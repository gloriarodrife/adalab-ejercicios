import { Link } from 'react-router-dom';
import SpeciesFilter from './SpeciesFilter';

const Header = (props) => {
  return (
    <>
      <div className="header">
        <Link to="/">
          <h1 className="header__img"> </h1>
        </Link>
        <section className="filters">
          <input className="search" type="text" />
          <SpeciesFilter
            specieSelected={props.specieSelected}
            handleSpecieSelect={props.handleSpecieSelect}
          />
        </section>
      </div>
    </>
  );
};
export default Header;