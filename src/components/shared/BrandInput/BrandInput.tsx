import React, {useState} from 'react';
import {
  ChakraProps,
  FormControl,
  FormHelperText,
  FormLabel,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  Textarea,
  Image,
} from '@chakra-ui/react';
import {BrandText, TEXT_TYPE} from '../BrandText';
import {iHide, iShow} from '../../../assets';

interface BrandInputProps extends ChakraProps {
  isRequired?: boolean;
  labelText?: string;
  helperText?: string;
  placeholder?: string;
  isInvalid?: boolean;
  maxWidth?: string;
  width?: string;
  type?: INPUT_TYPE;
}

export enum INPUT_TYPE {
  base,
  texarea,
  password,
}

const BrandInput: React.FC<BrandInputProps> = ({
  isRequired = false,
  labelText,
  helperText,
  placeholder,
  isInvalid,
  maxWidth = '100%',
  width = '100%',
  type = INPUT_TYPE.base,
  ...props
}) => {
  const [show, setShow] = useState(false);

  return (
    <>
      <FormControl isRequired={isRequired} {...props}>
        {labelText && (
          <FormLabel
            mb={1}
            display={'flex'}
            flexDirection={'row-reverse'}
            alignItems={'center'}
            justifyContent={'flex-end'}
          >
            <BrandText type={TEXT_TYPE.SMALL} ml={1}>
              {labelText}
            </BrandText>
          </FormLabel>
        )}

        {type === INPUT_TYPE.password && (
          <InputGroup size="md">
            <Input
              px={'12px'}
              py={'16px'}
              bg={'white'}
              w={'100%'}
              maxW={maxWidth}
              width={width}
              borderColor={'border-gray'}
              errorBorderColor="border-danger"
              focusBorderColor="border-brand"
              placeholder={placeholder}
              isInvalid={isInvalid}
              type={show ? 'text' : 'password'}
            />
            <InputRightElement width="40px">
              <IconButton
                onClick={() => setShow(!show)}
                variant="unstyled"
                aria-label="eye"
                size={'20px'}
                icon={
                  show ? (
                    <Image bg={'transparent'} objectFit="cover" src={iHide} alt="add" />
                  ) : (
                    <Image bg={'transparent'} objectFit="cover" src={iShow} alt="add" />
                  )
                }
              />
            </InputRightElement>
          </InputGroup>
        )}

        {type === INPUT_TYPE.base && (
          <Input
            px={'12px'}
            py={'16px'}
            bg={'white'}
            maxW={maxWidth}
            width={width}
            borderColor={'border-gray'}
            errorBorderColor="border-danger"
            focusBorderColor="border-brand"
            placeholder={placeholder}
            isInvalid={isInvalid}
          />
        )}

        {type === INPUT_TYPE.texarea && (
          <Textarea
            px={'12px'}
            py={'16px'}
            bg={'white'}
            maxW={maxWidth}
            width={width}
            borderColor={'border-gray'}
            errorBorderColor="border-danger"
            focusBorderColor="border-brand"
            placeholder={placeholder}
            isInvalid={isInvalid}
          />
        )}

        {helperText && (
          <FormHelperText mt={1} ml={1} color={isInvalid ? 'text-danger' : 'text-gray'}>
            {helperText}
          </FormHelperText>
        )}
      </FormControl>
    </>
  );
};

export default BrandInput;
