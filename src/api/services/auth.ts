import axiosInstance, {axiosInstanceNoAuth} from '../axiosInstance';
import {IUser, LoginData} from './../../../@types/api';

export const postLogin = async (data: LoginData): Promise<IUser | null> => {
  const result = await axiosInstanceNoAuth
    .post(`/auth/login`, data)
    .then((res) => res?.data || null)
    .catch(() => null);

  return result;
};

export const getUser = async (): Promise<IUser | null> => {
  const result = await axiosInstance
    .get(`/auth/me`)
    .then((res) => res?.data || null)
    .catch(() => null);

  return result;
};
