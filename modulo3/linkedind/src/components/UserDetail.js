import { Link } from 'react-router-dom';

const UserDetail = (props) => {
  return (
    <Link to={props.userData.id}>
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
      <p className="card__description">
        {props.userData.city} / {props.userData.age}
      </p>
      <p className="card__description">
        {props.userData.city} / {props.userData.age}
      </p>
    </Link>
  );
};

export default UserDetail;
