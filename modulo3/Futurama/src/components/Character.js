const Character = (props) => {
  const { name, image } = props.character;
  return (
    <>
      <img className="card_img" src={image} alt={name} />
      <h2 className="card_title">{name}</h2>
    </>
  );
};

export default Character;
