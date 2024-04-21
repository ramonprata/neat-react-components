import { IUser } from '../../../shared';

const UserList = (props: { users: IUser[] }) => {
  if (!props.users.length) {
    return null;
  }

  return (
    <ul>
      {props.users?.map((user) => (
        <li key={user.id}>
          <img src={user.avatar} alt={`Avatar of ${user.name}`} />
          <div>
            <h3>{user.name}</h3>
            <p>{user.age} years old</p>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default UserList;
