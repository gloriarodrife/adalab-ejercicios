const SpeciesFilter = () => {
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
  return (
    <select name="specie">
      {species.map((specie) => (
        <option value={specie}>{specie}</option>
      ))}
    </select>
  );
};

export default SpeciesFilter;
