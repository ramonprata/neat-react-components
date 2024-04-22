import { IUser, TSortBy } from '../../shared';

export const sortUsers = (users: IUser[] | null, sortBy: TSortBy) => {
  if (users?.length) {
    return users.sort((a, b) => {
      if (sortBy === 'name') {
        return a.name.localeCompare(b.name);
      } else if (sortBy === 'age') {
        return a.age - b.age;
      }
      return 0;
    });
  }
  return [];
};

export const USER_API_EXCEPTIONS = {
  throwEmptyException: () => {
    throw new Error(`Coudn't find any user`);
  },
  throwFailedException: () => {
    throw new Error(`Something went wrong`);
  },
};
