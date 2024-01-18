import { FC } from 'react';

import DefaultLayout from '../../components/Layouts/default';
import StylesPage from '../../components/Pages/StylesPage';

const Page: FC = () => <StylesPage />;

const Styles: FC = () => <DefaultLayout><Page /></DefaultLayout>;

export default Styles;
