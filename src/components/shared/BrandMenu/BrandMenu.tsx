import React, {PropsWithChildren} from 'react';
import {ChakraProps, Image, Button, Menu, MenuList, MenuButton} from '@chakra-ui/react';

import {iMore} from '../../../assets';

interface BrandMenuProps extends ChakraProps {
  children?: React.ReactNode;
  defaultIsOpen?: boolean;
}

const BrandMenu: React.FC<BrandMenuProps & PropsWithChildren> = ({
  children,
  defaultIsOpen,
  ...props
}) => (
  <>
    <Menu defaultIsOpen={defaultIsOpen} {...props}>
      {({isOpen}) => (
        <>
          <MenuButton isActive={isOpen} as={Button} variant={'ghost'} width={'40px'}>
            <Image
              bg={'transparent'}
              objectFit="cover"
              src={iMore}
              alt="more"
              width={'15px'}
              height={'15px'}
            />
          </MenuButton>
          <MenuList p={2} borderRadius={'15'}>
            {children}
          </MenuList>
        </>
      )}
    </Menu>
  </>
);

export default BrandMenu;
