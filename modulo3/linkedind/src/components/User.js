const User = (props) => {
  return (
    <a href="#">
      <img
        className=""
        alt="Foto de Francisco Korth"
        title="Foto de Francisco Korth"
        src={
          props.userData.image.large ||
          props.userData.image.medium ||
          props.userData.image.thumbnail
        }
      />
      <h4 className="card__title">{props.userData.fullName}</h4>
      <p className="card__description">
        {props.userData.city} / {props.userData.age}
      </p>
    </a>
  );
};

export default User;
