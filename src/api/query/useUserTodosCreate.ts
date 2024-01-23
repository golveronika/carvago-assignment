import {useMutation, useQueryClient} from '@tanstack/react-query';
import {createTodo} from '../services/todos';
import {INewTodo, TTodos} from '../../../@types/api';

const useUserTodosCreate = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({todos, todo, userId }: {todos: TTodos, todo: INewTodo, userId: number}) => createTodo(todos, todo, userId),
    onSuccess: (result) => {
      queryClient.invalidateQueries({queryKey: ['useUserTodosCreate']});
      return result;
    },
    onError: (error) => error,
  });
};
export default useUserTodosCreate;
