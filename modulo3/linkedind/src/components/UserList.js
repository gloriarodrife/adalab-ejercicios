import User from './User';

const UserList = (props) => {
  const userElements = props.users.map((user) => {
    return (
      <li key={user.id} className="card">
        <User userData={user} />
      </li>
    );
  });

  return (
    <section>
      <ul className="cards">{userElements}</ul>
    </section>
  );
};

export default UserList;
