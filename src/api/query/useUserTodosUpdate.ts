import {useMutation, useQueryClient} from '@tanstack/react-query';
import {putTodo} from '../services/todos';
import {ITodo, TTodos} from '../../../@types/api';

const useUserTodosUpdate = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({todos, todo}: {todos: TTodos; todo: ITodo}) => putTodo(todos, todo),
    onSuccess: (result) => {
      queryClient.invalidateQueries({queryKey: ['useUserTodosUpdate']});
      return result;
    },
    onError: (error) => error,
  });
};
export default useUserTodosUpdate;
