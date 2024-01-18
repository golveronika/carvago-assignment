import {Image, Flex} from '@chakra-ui/react';
import {Banner} from '../../assets';

const Footer = () => (
  <Flex
    w={'100%'}
    justifyContent={'center'}
    alignItems={'center'}
    bgGradient="linear-gradient(90deg, rgba(105,108,185,1) 0%, rgba(105,108,185,1) 49%, rgba(50,54,161,1) 50%, rgba(50,54,161,1) 100%)"
    mt={10}
  >
    <Image display={'block'} maxH={'100px'} objectFit="cover" src={Banner} alt="Logo Full" />
  </Flex>
);

export default Footer;
