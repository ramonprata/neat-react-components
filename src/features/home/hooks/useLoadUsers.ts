import { useEffect, useState } from 'react';
import UserService from '../services/UserService';
import { IUser } from '../../../shared';

// it could use a third-party library like React query
export const useLoadUsers = () => {
  const [users, setUsers] = useState<IUser[] | null>(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const users = await UserService.getUsers();
        if (users) {
          setUsers(users);
        }
      } catch (error) {
        console.log(error);
        setError((error as Error).message);
      }
    };
    fetchUsers();
  }, []);

  return {
    users,
    error,
  };
};
