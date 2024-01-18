import {
  Badge,
  Box,
  Checkbox,
  Divider,
  Flex,
  Heading,
  Image,
  Button,
  IconButton,
} from '@chakra-ui/react';
// import {Logo, LogoFull, iAdd, iBackwards, iCheck, iDelete, iEdit, iForward, iHide, iMore, iShow } from './../../../../assets';
import {iAddWhite, iAdd} from './../../../../assets';

const Components = () => (
  <Box display="flex" flexDirection="column">
    <Heading fontSize="heading.xl" fontWeight="heading.3" mb={4}>
      Components
    </Heading>

    <Divider orientation="horizontal" />

    <Flex flexWrap="wrap" flexDirection="row">
      <Flex flexDirection={'column'} m={6}>
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
          Checkbox
        </Badge>

        <Checkbox defaultChecked iconColor="white" iconSize="20px" mb={4}>
          Themed Checkbox
        </Checkbox>
        <Checkbox iconColor="white" iconSize="20px" mb={4}>
          Themed Checkbox
        </Checkbox>
        <Checkbox iconColor="white" iconSize="20px" mb={4}>
          Themed Checkbox
        </Checkbox>
      </Flex>

      <Flex flexDirection={'column'} m={6}>
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
          Button Blue
        </Badge>

        <Button colorScheme="blue" px={6} w={'min-content'} mb={4}>
          Button
        </Button>
        <Button colorScheme="blue" px={6} w={'min-content'} isDisabled mb={4}>
          Button Disabled
        </Button>
        <Button
          colorScheme="blue"
          px={6}
          w={'min-content'}
          leftIcon={<Image bg={'transparent'} objectFit="cover" src={iAddWhite} alt="add" />}
          mb={4}
        >
          Left Icon
        </Button>
        <Button
          colorScheme="blue"
          px={6}
          w={'min-content'}
          rightIcon={<Image bg={'transparent'} objectFit="cover" src={iAddWhite} alt="add" />}
          mb={4}
        >
          Right Icon
        </Button>
        <IconButton
          colorScheme="blue"
          aria-label="Add"
          w={'min-content'}
          icon={<Image bg={'transparent'} objectFit="cover" src={iAddWhite} alt="add" />}
          mb={4}
        />
      </Flex>

      <Flex flexDirection={'column'} m={6}>
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
          Button Ghost
        </Badge>

        <Button variant={'ghost'} px={6} w={'min-content'} mb={4}>
          Button
        </Button>
        <Button variant={'ghost'} px={6} w={'min-content'} isDisabled mb={4}>
          Button Disabled
        </Button>
        <Button
          variant={'ghost'}
          px={6}
          w={'min-content'}
          leftIcon={<Image bg={'transparent'} objectFit="cover" src={iAdd} alt="add" />}
          mb={4}
        >
          Left Icon
        </Button>
        <Button
          variant={'ghost'}
          px={6}
          w={'min-content'}
          rightIcon={<Image bg={'transparent'} objectFit="cover" src={iAdd} alt="add" />}
          mb={4}
        >
          Right Icon
        </Button>
        <IconButton
          variant={'ghost'}
          aria-label="Add"
          w={'min-content'}
          icon={<Image bg={'transparent'} objectFit="cover" src={iAdd} alt="add" />}
          mb={4}
        />
      </Flex>

      <Flex flexDirection={'column'} m={6}>
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
          Button Outline
        </Badge>

        <Button variant={'outline'} px={6} w={'min-content'} mb={4}>
          Button
        </Button>
        <Button variant={'outline'} px={6} w={'min-content'} isDisabled mb={4}>
          Button Disabled
        </Button>
        <Button
          variant={'outline'}
          px={6}
          w={'min-content'}
          leftIcon={<Image bg={'transparent'} objectFit="cover" src={iAdd} alt="add" />}
          mb={4}
        >
          Left Icon
        </Button>
        <Button
          variant={'outline'}
          px={6}
          w={'min-content'}
          rightIcon={<Image bg={'transparent'} objectFit="cover" src={iAdd} alt="add" />}
          mb={4}
        >
          Right Icon
        </Button>
        <IconButton
          variant={'outline'}
          aria-label="Add"
          w={'min-content'}
          icon={<Image bg={'transparent'} objectFit="cover" src={iAdd} alt="add" />}
          mb={4}
        />
      </Flex>
    </Flex>
  </Box>
);

export default Components;
