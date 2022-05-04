const FilterCity = (props) => {
  const handleChange = (event) => {
    props.handleFilterCity(event.target.value);
  };
  const renderCities = () => {
    return props.cities.map((city, index) => (
      <li key={index}>
        <label htmlFor="city">{city}</label>
        <input
          type="checkbox"
          name="city"
          id={index}
          value={city}
          onChange={handleChange}
        />
      </li>
    ));
  };

  return (
    <>
      <label htmlFor="form__label display-block">Ciudades</label>
      <ul>{renderCities()}</ul>
    </>
  );
};

export default FilterCity;
