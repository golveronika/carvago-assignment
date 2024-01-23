import axiosInstance, {axiosInstanceNoAuth} from '../axiosInstance';
import {TTodos, ITodo} from '../../../@types/api';
import {getFromLocalStorage, setToLocalStorage} from '../../utils/localStorage';

export const putTodo = async (todos: TTodos, todo: ITodo): Promise<TTodos> => {
  const todoId = todo?.id;
  const completed = todo?.completed;

  const result = await axiosInstanceNoAuth
    .put(`/todos/${todoId}`, {
      completed,
    })
    .then(async (res) => {
      const newTodos = [
        ...todos.filter((todo: ITodo) => todo.id !== res?.data?.id),
        {
          ...todo,
        },
      ];

      // Updating a todo will not add it into the server
      // After logout the todos will be cleared from local storage
      await setToLocalStorage('todos', newTodos);
      return newTodos;
    })
    .catch(() => todos);

  return result;
};

export const deleteTodo = async (todos: TTodos, todoId: number): Promise<TTodos> => {

  const result = await axiosInstanceNoAuth
    .delete(`/todos/${todoId}`)
    .then(async (res) => {
      const newTodos = todos.filter((todo: ITodo) => todo.id !== res?.data?.id);

      // Updating a todo will not add it into the server
      // After logout the todos will be cleared from local storage
      await setToLocalStorage('todos', newTodos);
      return newTodos;
    })
    .catch(() => todos);

  return result;
};


export const getTodos = async (userId: number | undefined): Promise<TTodos> => {
  if (userId === undefined) return [];

  const result = await axiosInstance
    .get(`/todos/user/${userId}`)
    .then(async (res) => {
      // Adding a new todo will not add it into the server
      // After logout the todos will be cleared from local storage
      const todos = await getFromLocalStorage('todos');
      if (todos) return todos;
      setToLocalStorage('todos', res?.data?.todos || []);

      return res?.data?.todos || [];
    })
    .catch(() => null);

  return result;
};
