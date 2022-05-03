import { Link } from 'react-router-dom';

const Character = (props) => {
  const { name, image, id } = props.character;
  return (
    <>
      {/* Con el Link modifico la ruta  */}
      <Link to={`/character/${id}`}>
        <img className="card_img" src={image} alt={name} />
        <h2 className="card_title">{name}</h2>
      </Link>
    </>
  );
};

export default Character;
