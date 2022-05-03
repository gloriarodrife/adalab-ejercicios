const CharacterDetail = (props) => {
  if (!props.character) {
    return 'loading...';
  } else {
    const { name, image, planet, job, species, gender } = props.character;
    return (
      <>
        <section className="detail">
          <section>
            <img className="card_img" src={image} alt={name} />
          </section>
          <section className="description">
            <h2 className="description_title">{name}</h2>
            <p>Planet: {planet}</p>
            <p>Job: {job}</p>
            <p>Specie: {species}</p>
            <p>Gender: {gender}</p>
          </section>
        </section>
      </>
    );
  }
};

export default CharacterDetail;
