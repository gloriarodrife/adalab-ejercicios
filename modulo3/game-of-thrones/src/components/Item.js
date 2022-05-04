const Item = (props) => {
  const { name, image, id, lastname } = props.user;
  return (
    <li id={id}>
      <img src={image} alt={name} />
      <h2>
        {name} {lastname}
      </h2>
    </li>
  );
};

export default Item;
