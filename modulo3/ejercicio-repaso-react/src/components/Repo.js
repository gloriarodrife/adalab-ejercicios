import Delete from './Delete';

const Repo = (props) => {
  return (
    <article>
      {/* le paso el id al boton para poder modificar la constante de estado de los repos al darle al botón  */}
      <Delete id={props.repo.id} deleteRepo={props.deleteRepo} />
      <h2>{props.repo.full_name}</h2>
      <img src={props.repo.image} alt="" />
    </article>
  );
};

export default Repo;
