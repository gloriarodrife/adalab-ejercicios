import FilterCountry from './FilterCountry';

const Filters = (props) => {
  return (
    <form>
      <FilterCountry handleFilterCountry={props.handleFilterCountry} />
    </form>
  );
};

export default Filters;
