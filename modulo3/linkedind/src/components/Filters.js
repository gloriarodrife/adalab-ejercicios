import FilterCountry from './FilterCountry';
import FilterCity from './FilterCity';
const Filters = (props) => {
  return (
    <form>
      <FilterCountry handleFilterCountry={props.handleFilterCountry} />
      <FilterCity
        cities={props.cities}
        handleFilterCity={props.handleFilterCity}
      />
    </form>
  );
};

export default Filters;
