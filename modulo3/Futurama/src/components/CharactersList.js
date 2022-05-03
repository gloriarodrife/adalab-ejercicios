import Character from './Character';

const CharactersList = (props) => {
  // Creo una constante en la que itero los personajes que obtengo

  const renderCharacters = props.data.map((character) => {
    return (
      <li key={character.id} className="card">
        <Character character={character} />
      </li>
    );
  });
  return <ul className="characters">{renderCharacters}</ul>;
};

export default CharactersList;
