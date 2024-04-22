import React, { useState, useEffect } from 'react';
import { IUser } from './types/IUser';

const HomePage = () => {
  const [users, setUsers] = useState<IUser[] | null>(null);
  const [sortBy, setSortBy] = useState('name');
  const [error, setError] = useState(false);

  // outsource effects and other hooks to a custom hook
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        // outsource input/output of data (API calls) to a separate file
        const response = await fetch('https://api.example.com/users');
        if (!response.ok) {
          throw new Error('Failed to fetch users');
        }
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };
    fetchUsers();
  }, []);

  const handleSortChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setSortBy(event.target.value);
    // outsource browser API interaction
    document.title = `Users by ${event.target.value}`;
  };

  // outsource data processing for rendering.
  const sortedUsers =
    users &&
    [...users].sort((a, b) => {
      if (sortBy === 'name') {
        return a.name.localeCompare(b.name);
      } else if (sortBy === 'age') {
        return a.age - b.age;
      }
      return 0;
    });

  // split the component into smaller and concise parts
  return (
    <div>
      {/* <HomePageHeader /> component */}
      <h2>User List</h2>
      <label htmlFor="sort">Sort by:</label>
      <select id="sort" value={sortBy} onChange={handleSortChange}>
        <option value="name">Name</option>
        <option value="age">Age</option>
      </select>

      {/* avoid inline conditional rendering */}

      {/* <UserList /> component */}
      {!error && users && (
        <ul>
          {sortedUsers?.map((user) => (
            <li key={user.id}>
              <img src={user.avatar} alt={`Avatar of ${user.name}`} />
              <div>
                <h3>{user.name}</h3>
                <p>{user.age} years old</p>
              </div>
            </li>
          ))}
        </ul>
      )}
      {/* <Error /> component */}
      {error && (
        <div>
          <p>Something went wrong</p>
        </div>
      )}
    </div>
  );
};

export default HomePage;
