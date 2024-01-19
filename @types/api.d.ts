/// <reference types="react" />
/// <reference types="react-dom" />

export interface LoginData {
  username: string;
  password: string;
}

export interface IUser {
  firstName: string;
  lastName: string;
  image: string;
  username: string;
  id: number;
  token?: string;
}