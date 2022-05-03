const Character = (props) => {
  const { name, image, id } = props.character;
  return (
    <li key={props.index} className="card">
      <img className="card_img" src={image} alt={name} />
      <h2 className="card_title">{name}</h2>
    </li>
  );
};

export default Character;
