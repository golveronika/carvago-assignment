import {useMutation, useQueryClient} from '@tanstack/react-query';
import {postLogin} from '../services/auth';
import {LoginData} from './../../../@types/api';

const useLogin = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: LoginData) => postLogin(data),
    onSuccess: (result) => {
      queryClient.invalidateQueries({queryKey: ['postLogin']});
      return result;
    },
    onError: (error) => error,
  });
};

export default useLogin;
