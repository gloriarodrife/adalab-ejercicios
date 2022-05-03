import { Link } from 'react-router-dom';

const CharacterDetail = (props) => {
  if (!props.character) {
    return 'loading...';
  }

  return <span>{props.character.name}</span>;
};

export default CharacterDetail;
