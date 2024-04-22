import { IUser, API_PATHS } from '../../../shared';
import { USER_API_EXCEPTIONS } from '../homeUtils';

class UserService {
  async getUsers() {
    try {
      const response = await fetch(API_PATHS.GET_USERS);
      if (response.ok) {
        const users = (await response.json()) as IUser[];
        if (!users.length) {
          USER_API_EXCEPTIONS.throwEmptyException();
        }
        return users;
      }
      USER_API_EXCEPTIONS.throwFailedException();
    } catch (error) {
      USER_API_EXCEPTIONS.throwFailedException();
    }
  }
}

export default new UserService();
