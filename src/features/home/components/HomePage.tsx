import React, { useState } from 'react';
import { changePageTitle, TSortBy } from '../../../shared';
import { ErrorMessage } from '../../../shared/components';

import { useLoadUsers } from '../hooks/useLoadUsers';
import { sortUsers } from '../homeUtils';
import UserList from './UserList';
import HomeHeader from './HomeHeader';

const HomePage = () => {
  const [sortBy, setSortBy] = useState<TSortBy>('name');

  const { users, error } = useLoadUsers();

  const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSortBy(event.target.value as TSortBy);
    changePageTitle(`Users by ${sortBy}`);
  };

  const sortedUsers = sortUsers(users, sortBy);

  return (
    <div>
      <HomeHeader handleSortChange={handleSortChange} sortBy={sortBy} />

      <UserList users={sortedUsers} />

      <ErrorMessage errorMessage={error} />
    </div>
  );
};

export default HomePage;
