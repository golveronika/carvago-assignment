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

export interface ITodo {
  completed: boolean;
  id: number;
  todo: string;
  description?: string;
  userId: number;
}

export interface INewTodo {
  todo: string;
  description?: string;
}

export interface ITodos {
  limit: number;
  skip: number;
  total: number;
  todos: ITodo[];
}

export type TTodos = ITodo[];
