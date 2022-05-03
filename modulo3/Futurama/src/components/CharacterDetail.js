import { Link } from 'react-router-dom';

const CharacterDetail = (props) => {
  const { name, image, planet, job, species, gender } = props.character;
  if (!props.character) {
    return 'loading...';
  }

  return (
    <>
      <section>
        <h2 className="card_title">{name}</h2>
        <img className="card_img" src={image} alt={name} />
      </section>
      <section>
        <p>Planet: {planet}</p>
        <p>Job: {job}</p>
        <p>Specie: {species}</p>
        <p>Gender: {gender}</p>
      </section>
    </>
  );
};

export default CharacterDetail;
