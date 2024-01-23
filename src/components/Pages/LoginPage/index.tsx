import {useEffect} from 'react';
import {Box, Card} from '@chakra-ui/react';
import {BrandText, TEXT_TYPE} from '../../shared/BrandText';
import {useTranslation} from 'react-i18next';

import {useForm} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import * as z from 'zod';
import {BrandInput, INPUT_TYPE} from '../../shared/BrandInput';
import {BrandButton, ICON} from '../../shared/BrandButton';
import useLogin from '../../../api/query/useLogin';
import {setToLocalStorage} from '../../../utils/localStorage';
import {useNavigate} from 'react-router-dom';
import {useAppContext} from '../../../context';

const schema = z.object({
  username: z.string().min(1, { message: "Username is required" }),
  password: z.string().min(1, { message: "Password is required" }),
});

type Schema = z.infer<typeof schema>;

const LoginPage = () => {
  const {t} = useTranslation();

  const {actions, state} = useAppContext();
  const loginUser = useLogin();
  const navigate = useNavigate();

  const {register, handleSubmit, setError, formState: { errors },} = useForm<Schema>({
    resolver: zodResolver(schema),
    mode: "onSubmit",
  });

  useEffect(() => {
    if (state.user && state.isAppLoaded) {
      navigate(`/`);
    }
  }, [state]);

  const onSubmit = async (data: Schema) => {
    const result = await loginUser.mutateAsync(data);
    if (result) {
      await setToLocalStorage('accessToken', result.token);
      actions.setUser(result);
      navigate(`/`);
    } else {
      setError("password", {
        type: "manual",
        message: "Wrong password or username",
      })
    }
  };

  return (
    <Box display="flex" flexDirection="column">
      <Card p={'40px'} borderRadius={'15px'} maxW={'560px'}>
        <BrandText type={TEXT_TYPE.H1} mb={4}>
          {t('login.title')}
        </BrandText>
        <BrandText type={TEXT_TYPE.BASE} color={'text-secondary'} mb={6}>
          {t('login.description')}
        </BrandText>

        <form onSubmit={handleSubmit(onSubmit)}>
          <BrandInput
            mb={4}
            labelText={t('login.username')}
            isRequired
            register={{...register('username')}}
            isInvalid={!!errors.username}
            helperText={errors.username?.message}
          />
          <BrandInput
            mb={10}
            labelText={t('login.password')}
            type={INPUT_TYPE.password}
            isRequired
            register={{...register('password')}}
            isInvalid={!!errors.password}
            helperText={errors.password?.message}
          />
          <BrandButton w={'100%'} isSubmit={true} icon={ICON.forwardWhite}>
            {t('login.login')}
          </BrandButton>
        </form>
      </Card>
    </Box>
  );
};

export default LoginPage;
