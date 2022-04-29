const Delete = (props) => {
  const handleClick = (ev) => {
    props.deleteRepo(ev.target.id);
  };

  return (
    <button id={props.id} onClick={handleClick}>
      X
    </button>
  );
};

export default Delete;
