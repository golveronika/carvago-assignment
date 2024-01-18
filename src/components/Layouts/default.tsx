import {FC, PropsWithChildren} from 'react';
import {Container, Flex} from '@chakra-ui/react';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

export const DefaultLayout: FC<PropsWithChildren> = ({children}: any) => (
  <Flex
    alignItems={'center'}
    justifyContent={'space-between'}
    flexDirection={'column'}
    minH={'100vh'}
  >
    <Header />
    <Container
      display={'flex'}
      alignItems={'center'}
      justifyContent={'center'}
      width={'100%'}
      maxWidth={{base: '100%', lg: '1440px'}}
    >
      {children}
    </Container>
    <Footer />
  </Flex>
);

export default DefaultLayout;
