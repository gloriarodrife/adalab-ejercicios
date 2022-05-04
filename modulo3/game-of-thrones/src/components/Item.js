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

// const Item = (props) => {
//   return (
//     <li key={props.character.id}>
//       <img src={props.character.image} alt="" />
//       <h2>{props.character.name}</h2>
//     </li>
//   );
// };

// export default Item;
