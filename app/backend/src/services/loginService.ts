import * as bcrypt from 'bcryptjs';
import { ServiceResponse } from '../Interfaces/serviceResponse';
import { IToken } from '../Interfaces/IToken';
import { ILogin } from '../Interfaces/ILogin';
import UserModel from '../database/models/UserModel';
import jwtUtil from '../utils/jwt';

class LoginService {
  constructor(
    private userModel = UserModel,
  ) { }

  public async Login(login: ILogin): Promise<ServiceResponse<IToken>> {
    if (!login.email || !login.password) {
      return { status: 'INVALID_DATA',
        data: { message: 'All fields must be filled' } };
    }

    const findUser = await this.userModel.findOne({ where: { email: login.email } });

    if (!findUser || !bcrypt.compareSync(login.password, findUser.password)) {
      return { status: 'UNAUTHORIZED', data: { message: 'Invalid email or password' } };
    }

    const { email, password } = findUser;
    const token = jwtUtil.sign({ email, password });
    return { status: 'SUCCESS', data: { token } };
  }
}

export default LoginService;
