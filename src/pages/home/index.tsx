import { FC } from 'react';

import DefaultLayout from '../../components/Layouts/default';
import HomePage from '../../components/Pages/HomePage';

const Page: FC = () => <HomePage />;

const Home: FC = () => <DefaultLayout><Page /></DefaultLayout>;

export default Home;
