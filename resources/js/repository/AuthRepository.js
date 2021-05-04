import BaseRepository from './BaseRepository';
import { 
  BASE_URL,
  AUTH_LOGIN_URL,
  AUTH_REGISTER_URL,
  AUTH_INFO_URL
} from '@constants/config';

class AuthRepository extends BaseRepository{
  constructor(){
    super(BASE_URL);
  }

  login = (payload) => {
    return this.post(AUTH_LOGIN_URL, payload);
  }

  register = (payload) => {
    return this.post(AUTH_REGISTER_URL, payload);
  }

  getInfo = () => {
    return this.get(AUTH_INFO_URL);
  }
}

export default AuthRepository;