import {Badge, Box, Checkbox, Divider, Flex, Heading, Image, MenuItem} from '@chakra-ui/react';
import {iEdit, iDeleteRed} from './../../../../assets';
import {BrandText, TEXT_TYPE} from '../../../shared/BrandText';
import {BrandInput, INPUT_TYPE} from './../../../shared/BrandInput';
import {BrandButton, ICON, ICON_POSITOION, BUTTON_VARIANT} from './../../../shared/BrandButton';
import {BrandMenu} from './../../../shared/BrandMenu';

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

        <Checkbox defaultChecked mb={4}>
          Themed Checkbox
        </Checkbox>
        <Checkbox mb={4}>Themed Checkbox</Checkbox>
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

        <BrandButton mb={4}> Button </BrandButton>
        <BrandButton mb={4} isDisabled>
          {' '}
          Button{' '}
        </BrandButton>
        <BrandButton mb={4} icon={ICON.addWhite} iconPosition={ICON_POSITOION.left}>
          {' '}
          Left Icon{' '}
        </BrandButton>
        <BrandButton mb={4} icon={ICON.addWhite} iconPosition={ICON_POSITOION.right}>
          {' '}
          Right Icon{' '}
        </BrandButton>
        <BrandButton mb={4} icon={ICON.addWhite} />
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

        <BrandButton mb={4} variant={BUTTON_VARIANT.ghost}>
          {' '}
          Button{' '}
        </BrandButton>
        <BrandButton mb={4} variant={BUTTON_VARIANT.ghost} isDisabled>
          {' '}
          Button{' '}
        </BrandButton>
        <BrandButton
          mb={4}
          variant={BUTTON_VARIANT.ghost}
          icon={ICON.add}
          iconPosition={ICON_POSITOION.left}
        >
          {' '}
          Left Icon{' '}
        </BrandButton>
        <BrandButton
          mb={4}
          variant={BUTTON_VARIANT.ghost}
          icon={ICON.add}
          iconPosition={ICON_POSITOION.right}
        >
          {' '}
          Right Icon{' '}
        </BrandButton>
        <BrandButton mb={4} variant={BUTTON_VARIANT.ghost} icon={ICON.add} />
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

        <BrandButton mb={4} variant={BUTTON_VARIANT.outline}>
          {' '}
          Button{' '}
        </BrandButton>
        <BrandButton mb={4} variant={BUTTON_VARIANT.outline} isDisabled>
          {' '}
          Button{' '}
        </BrandButton>
        <BrandButton
          mb={4}
          variant={BUTTON_VARIANT.outline}
          icon={ICON.add}
          iconPosition={ICON_POSITOION.left}
        >
          {' '}
          Left Icon{' '}
        </BrandButton>
        <BrandButton
          mb={4}
          variant={BUTTON_VARIANT.outline}
          icon={ICON.add}
          iconPosition={ICON_POSITOION.right}
        >
          {' '}
          Right Icon{' '}
        </BrandButton>
        <BrandButton mb={4} variant={BUTTON_VARIANT.outline} icon={ICON.add} />
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
          Field Text Input
        </Badge>

        <BrandInput maxWidth="300px" mb={4} placeholder="Default" />
        <BrandInput maxWidth="300px" mb={4} placeholder="With error" isInvalid />
        <BrandInput
          maxWidth="300px"
          mb={4}
          placeholder="With labels"
          labelText="Label"
          helperText="Helper text message"
        />
        <BrandInput
          maxWidth="300px"
          mb={4}
          placeholder="With labels"
          labelText="Label required"
          helperText="Helper error text message"
          isInvalid
          isRequired
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
          Field Texarea Input
        </Badge>

        <BrandInput type={INPUT_TYPE.texarea} maxWidth="300px" mb={4} placeholder="Default" />
        <BrandInput
          type={INPUT_TYPE.texarea}
          maxWidth="300px"
          mb={4}
          placeholder="With error"
          isInvalid
        />
        <BrandInput
          type={INPUT_TYPE.texarea}
          maxWidth="300px"
          mb={4}
          placeholder="With labels"
          labelText="Label"
          helperText="Helper text message"
        />
        <BrandInput
          type={INPUT_TYPE.texarea}
          maxWidth="300px"
          mb={4}
          placeholder="With labels"
          labelText="Label required"
          helperText="Helper error text message"
          isInvalid
          isRequired
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
          Field Password Input
        </Badge>

        <BrandInput type={INPUT_TYPE.password} maxWidth="300px" mb={4} placeholder="Default" />
        <BrandInput
          type={INPUT_TYPE.password}
          maxWidth="300px"
          mb={4}
          placeholder="With error"
          isInvalid
        />
        <BrandInput
          type={INPUT_TYPE.password}
          maxWidth="300px"
          mb={4}
          placeholder="With labels"
          labelText="Label"
          helperText="Helper text message"
        />
        <BrandInput
          type={INPUT_TYPE.password}
          maxWidth="300px"
          mb={4}
          placeholder="With labels"
          labelText="Label required"
          helperText="Helper error text message"
          isInvalid
          isRequired
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
          Overflow Menu
        </Badge>

        <BrandMenu defaultIsOpen>
          <MenuItem>
            <Image objectFit="cover" src={iEdit} alt="edit" />
            <BrandText type={TEXT_TYPE.SMALL} ml={2}>
              Edit
            </BrandText>
          </MenuItem>

          <MenuItem>
            <Image objectFit="cover" src={iDeleteRed} alt="delete" />
            <BrandText type={TEXT_TYPE.SMALL} ml={2} color={'border-danger'}>
              Delete
            </BrandText>
          </MenuItem>
        </BrandMenu>
      </Flex>
    </Flex>
  </Box>
);

export default Components;
