import {Box, Image, Flex, Avatar} from '@chakra-ui/react';
import {LogoFull} from '../../assets';
import {BrandText, TEXT_TYPE} from '../shared/BrandText';
import {useAppContext} from '../../context';

const Header = () => {
  const {state} = useAppContext();

  return (
    <Flex
      p={6}
      w={'100%'}
      justifyContent={state.user ? 'space-between' : 'center'}
      alignItems={'center'}
      maxWidth={{base: '100%', lg: '1800px'}}
    >
      <Image
        display={'block'}
        mb={4}
        maxW={'130px'}
        objectFit="cover"
        src={LogoFull}
        alt="Logo Full"
      />

      {state.user && (
        <Box display="flex" alignItems={'center'}>
          <Avatar name="Dan Abrahmov" src={state.user?.image} />
          <BrandText type={TEXT_TYPE.BASE} ml={4}>
            {`${state.user?.firstName} ${state.user?.lastName}`}
          </BrandText>
        </Box>
      )}
    </Flex>
  );
};

export default Header;
