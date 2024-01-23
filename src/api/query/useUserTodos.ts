import {useQuery} from '@tanstack/react-query';
import {getTodos} from '../services/todos';

const useUserTodos = (userId: number | undefined) =>
  useQuery({
    queryKey: ['getTodos'],
    queryFn: () => getTodos(userId),
  });

export default useUserTodos;
