import { FC } from 'react';

import DefaultLayout from '../../components/Layouts/default';
import LoginPage from '../../components/Pages/LoginPage';

const Page: FC = () => <LoginPage />;

const Login: FC = () => <DefaultLayout><Page /></DefaultLayout>;

export default Login;
