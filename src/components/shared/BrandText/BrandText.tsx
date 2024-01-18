import React from 'react';
import {ChakraProps, Heading, Text} from '@chakra-ui/react';

interface BrandTextProps extends ChakraProps {
  type?: TEXT_TYPE;
  children?: React.ReactNode;
}

export enum TEXT_TYPE {
  H1,
  H2,
  H3,
  BASE,
  SMALL,
  SMALL_ALT,
}

const BrandText: React.FC<BrandTextProps> = ({type = TEXT_TYPE.BASE, children, ...props}) => {
  let customProps = {
    fontSize: 'base',
    fontWeight: 'text.base',
    fontFamily: 'roboto',
  };

  switch (type) {
    case TEXT_TYPE.H1:
      customProps = {
        fontSize: 'heading.1',
        fontWeight: 'heading.1',
        fontFamily: 'inter',
      };
      break;
    case TEXT_TYPE.H2:
      customProps = {
        fontSize: 'heading.2',
        fontWeight: 'heading.2',
        fontFamily: 'inter',
      };
      break;
    case TEXT_TYPE.H3:
      customProps = {
        fontSize: 'heading.3',
        fontWeight: 'heading.3',
        fontFamily: 'inter',
      };
      break;
    case TEXT_TYPE.BASE:
      customProps = {
        fontSize: 'base',
        fontWeight: 'text.base',
        fontFamily: 'roboto',
      };
      break;
    case TEXT_TYPE.SMALL:
      customProps = {
        fontSize: 'small',
        fontWeight: 'text.base',
        fontFamily: 'roboto',
      };
      break;
    case TEXT_TYPE.SMALL_ALT:
      customProps = {
        fontSize: 'small',
        fontWeight: 'text.alternative',
        fontFamily: 'roboto',
      };
      break;
  }

  return (
    <>
      {[TEXT_TYPE.H1, TEXT_TYPE.H2, TEXT_TYPE.H3].includes(type) ? (
        <Heading
          fontSize={customProps.fontSize}
          fontWeight={customProps.fontWeight}
          fontFamily={customProps.fontFamily}
          {...props}
        >
          {children}
        </Heading>
      ) : (
        <Text
          fontSize={customProps.fontSize}
          fontWeight={customProps.fontWeight}
          fontFamily={customProps.fontFamily}
          {...props}
        >
          {children}
        </Text>
      )}
    </>
  );
};

export default BrandText;
