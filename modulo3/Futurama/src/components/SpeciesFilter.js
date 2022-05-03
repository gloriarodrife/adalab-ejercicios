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
    <select name="specie" onChange={handleSpecie}>
      {species.map((specie, index) => (
        <option key={index} value={specie}>
          {specie}
        </option>
      ))}
    </select>
  );
};

export default SpeciesFilter;