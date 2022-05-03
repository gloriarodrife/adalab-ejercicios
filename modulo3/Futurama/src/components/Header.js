import SpeciesFilter from './SpeciesFilter';

const Header = () => {
  return (
    <>
      <div className="header">
        <h1 className="header__img"> </h1>
        <section className="filters">
          <input className="search" type="text" />
          <SpeciesFilter />
        </section>
      </div>
    </>
  );
};
export default Header;
