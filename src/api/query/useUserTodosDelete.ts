import {useMutation, useQueryClient} from '@tanstack/react-query';
import {deleteTodo} from '../services/todos';
import {TTodos} from '../../../@types/api';

const useUserTodosDelete = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({todos, todoId}: {todos: TTodos; todoId: number}) => deleteTodo(todos, todoId),
    onSuccess: (result) => {
      queryClient.invalidateQueries({queryKey: ['useUserTodosDelete']});
      return result;
    },
    onError: (error) => error,
  });
};
export default useUserTodosDelete;
