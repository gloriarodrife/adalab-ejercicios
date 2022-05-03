const SpeciesFilter = (props) => {
  const species = [
    'All',
    'Human',
    'Amphibiosans',
    'Omicronian',
    'Decapodian',
    'Martian',
    'Robot',
    'Mutant',
  ];

  const handleSpecie = (event) => {
    props.handleSpecieSelect(event.target.value);
  };
  return (
    <>
      {/* <input type="text" className="select_options input" /> */}
      <label htmlFor="specie" className="select_title">
        Select a species :
      </label>
      <select className="select_options" name="specie" onChange={handleSpecie}>
        {species.map((specie, index) => (
          <option key={index} value={specie}>
            {specie}
          </option>
        ))}
      </select>
    </>
  );
};

export default SpeciesFilter;
