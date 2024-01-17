import * as bcrypt from 'bcryptjs';
import { ServiceResponse, ServiceResponseRole } from '../Interfaces/serviceResponse';
import { IToken } from '../Interfaces/IToken';
import { ILogin } from '../Interfaces/ILogin';
import UserModel from '../database/models/UserModel';
import jwt from '../utils/jwt';

class LoginService {
  constructor(
    private userModel = UserModel,
  ) { }

  public async userLogin(login: ILogin): Promise<ServiceResponse<IToken>> {
    if (!login.email || !login.password) {
      return { status: 'INVALID_DATA',
        data: { message: 'All fields must be filled' } };
    }
    try {
      const findUser = await this.userModel.findOne({ where: { email: login.email } });
      if (!findUser || !bcrypt.compareSync(login.password, findUser.password)) {
        return { status: 'UNAUTHORIZED', data: { message: 'Invalid email or password' } };
      }
      const { email, id } = findUser;
      const token = jwt.sign({ email, id });
      return { status: 'SUCCESS', data: { token } };
    } catch (error) {
      return { status: 'CONFLICT', data: { message: 'Erro' } };
    }
  }

  public async userRole(email: string): Promise<ServiceResponse<ServiceResponseRole>> {
    try {
      const findUser = await this.userModel.findOne({ where: { email } });
      if (!findUser) {
        return { status: 'NOT_FOUND', data: { message: 'User not found' } };
      }
      const { role } = findUser.dataValues;
      return { status: 'SUCCESS', data: { role } };
    } catch (error) {
      return { status: 'CONFLICT', data: { message: 'Erro' } };
    }
  }
}

export default LoginService;
