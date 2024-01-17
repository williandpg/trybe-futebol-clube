import { ICRUD } from './ICRUD';

export default interface IUser {
  id: number,
  username: string,
  role: string,
  email: string,
  password: string,
}

export interface IUserLogin {
  username: string,
  password: string,
}

export interface IUserToken {
  token: string,
}

export type IUserCRUD = ICRUD<IUserLogin>;
