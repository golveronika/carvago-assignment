import {useQuery} from '@tanstack/react-query';
import {getUser} from '../services/auth';

const useAuth = () =>
  useQuery({
    queryKey: ['getUser'],
    queryFn: () => getUser(),
  });

export default useAuth;
