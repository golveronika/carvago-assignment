import React, {PropsWithChildren} from 'react';
import {ChakraProps, IconButton, Image, Button} from '@chakra-ui/react';
import {iAddWhite, iAdd} from '../../../assets';

interface BrandButtonProps extends ChakraProps {
  children?: React.ReactNode;
  isDisabled?: boolean;
  icon?: ICON;
  iconPosition?: ICON_POSITOION;
  variant?: BUTTON_VARIANT;
  isSubmit?: boolean;
}

export enum ICON {
  add = 'add',
  addWhite = 'addWhite',
}

export enum ICON_POSITOION {
  right = 'right',
  left = 'left',
}

export enum BUTTON_VARIANT {
  ghost = 'ghost',
  outline = 'outline',
  solid = 'solid',
}

const BrandButton: React.FC<BrandButtonProps & PropsWithChildren> = ({
  children,
  icon = '',
  iconPosition = ICON_POSITOION.right,
  variant = BUTTON_VARIANT.solid,
  isSubmit,
  ...props
}) => {
  let Icon = <></>;
  switch (icon) {
    case ICON.addWhite:
      Icon = <Image bg={'transparent'} objectFit="cover" src={iAddWhite} alt="add" />;
      break;
    case ICON.add:
      Icon = <Image bg={'transparent'} objectFit="cover" src={iAdd} alt="add" />;
      break;
    default:
      break;
  }

  return (
    <>
      {children ? (
        <Button
          colorScheme="blue"
          px={6}
          w={'min-content'}
          leftIcon={icon && iconPosition === ICON_POSITOION.left ? Icon : <></>}
          rightIcon={icon && iconPosition === ICON_POSITOION.right ? Icon : <></>}
          variant={variant}
          type={isSubmit ? 'submit' : 'button'}
          {...props}
        >
          {children}
        </Button>
      ) : (
        <IconButton
          colorScheme="blue"
          aria-label={icon as string}
          w={'min-content'}
          icon={Icon}
          variant={variant}
          type={isSubmit ? 'submit' : 'button'}
          {...props}
        />
      )}
    </>
  );
};

export default BrandButton;
