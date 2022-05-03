import Character from './Character';

const CharactersList = (props) => {
  // Creo una constante en la que itero los personajes que obtengo

  const renderCharacters = props.data.map((character, index) => {
    return <Character character={character} index={index} />;
  });
  return <ul className="characters">{renderCharacters}</ul>;
};

export default CharactersList;
