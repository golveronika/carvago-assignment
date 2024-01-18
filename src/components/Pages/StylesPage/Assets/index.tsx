import {Badge, Box, Divider, Flex, Heading, Image} from '@chakra-ui/react';
import {BrandText, TEXT_TYPE} from '../../../shared/BrandText';

import {
  Logo,
  LogoFull,
  iAdd,
  iBackwards,
  iCheck,
  iDelete,
  iEdit,
  iForward,
  iHide,
  iMore,
  iShow,
} from './../../../../assets';

const Assets = () => (
    <Box display="flex" flexDirection="column">
      <Heading fontSize="heading.xl" fontWeight="heading.3" mb={4}>
        Assets
      </Heading>

      <Divider orientation="horizontal" />

      <Flex flexWrap="wrap" flexDirection="row">
        <Box m={6}>
          <Badge
            mt={4}
            mb={4}
            colorScheme="gray"
            size="sm"
            w={'fit-content'}
            p={2}
            px={4}
            borderRadius={'full'}
          >
            Logos
          </Badge>

          <Image mb={4} objectFit="cover" src={LogoFull} alt="Logo Full" />
          <Image mb={4} objectFit="cover" src={Logo} alt="Logo" />
        </Box>

        <Box m={6}>
          <Badge
            mt={4}
            mb={4}
            colorScheme="gray"
            size="sm"
            w={'fit-content'}
            p={2}
            px={4}
            borderRadius={'full'}
          >
            Icons
          </Badge>

          <Flex flexDirection="row" alignItems="center" mb={4}>
            <Image objectFit="cover" src={iAdd} alt="add" />
            <BrandText type={TEXT_TYPE.SMALL} ml={2}>
              icon-add
            </BrandText>
          </Flex>
          <Flex flexDirection="row" alignItems="center" mb={4}>
            <Image objectFit="cover" src={iMore} alt="more" />
            <BrandText type={TEXT_TYPE.SMALL} ml={2}>
              icon-more
            </BrandText>
          </Flex>
          <Flex flexDirection="row" alignItems="center" mb={4}>
            <Image objectFit="cover" src={iBackwards} alt="backwards" />
            <BrandText type={TEXT_TYPE.SMALL} ml={2}>
              icon-backwards
            </BrandText>
          </Flex>
          <Flex flexDirection="row" alignItems="center" mb={4}>
            <Image objectFit="cover" src={iCheck} alt="check" />
            <BrandText type={TEXT_TYPE.SMALL} ml={2}>
              icon-check
            </BrandText>
          </Flex>
          <Flex flexDirection="row" alignItems="center" mb={4}>
            <Image objectFit="cover" src={iHide} alt="hide" />
            <BrandText type={TEXT_TYPE.SMALL} ml={2}>
              icon-hide
            </BrandText>
          </Flex>
          <Flex flexDirection="row" alignItems="center" mb={4}>
            <Image objectFit="cover" src={iShow} alt="show" />
            <BrandText type={TEXT_TYPE.SMALL} ml={2}>
              icon-show
            </BrandText>
          </Flex>
          <Flex flexDirection="row" alignItems="center" mb={4}>
            <Image objectFit="cover" src={iForward} alt="forward" />
            <BrandText type={TEXT_TYPE.SMALL} ml={2}>
              icon-forward
            </BrandText>
          </Flex>
          <Flex flexDirection="row" alignItems="center" mb={4}>
            <Image objectFit="cover" src={iEdit} alt="edit" />
            <BrandText type={TEXT_TYPE.SMALL} ml={2}>
              icon-edit
            </BrandText>
          </Flex>
          <Flex flexDirection="row" alignItems="center" mb={4}>
            <Image objectFit="cover" src={iDelete} alt="delete" />
            <BrandText type={TEXT_TYPE.SMALL} ml={2}>
              icon-delete
            </BrandText>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );

export default Assets;
