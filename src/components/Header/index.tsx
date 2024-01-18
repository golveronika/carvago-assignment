import {Box, Image, Flex, Avatar} from '@chakra-ui/react';
import {LogoFull} from '../../assets';
import {BrandText, TEXT_TYPE} from '../shared/Text';

const Header = () => (
  <Flex p={6} w={'100%'} justifyContent={'space-between'} alignItems={'center'}>
    <Image
      display={'block'}
      mb={4}
      maxW={'130px'}
      objectFit="cover"
      src={LogoFull}
      alt="Logo Full"
    />

    <Box display="flex" alignItems={'center'}>
      <Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
      <BrandText type={TEXT_TYPE.BASE} ml={4}>
        text-base
      </BrandText>
    </Box>
  </Flex>
);

export default Header;
