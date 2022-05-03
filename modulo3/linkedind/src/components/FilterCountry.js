const FilterCountry = (props) => {
  const handleChange = (event) => {
    props.handleFilterCountry(event.target.value);
  };
  return (
    <>
      <label htmlFor="">Pais</label>
      <select
        name=""
        id=""
        className="form__input-text"
        onChange={handleChange}
      >
        <option value="all">Todas</option>
        <option value="Spain">Spain</option>
        <option value="Ireland">Ireland</option>
        <option value="United State">United State</option>
      </select>
    </>
  );
};

export default FilterCountry;
