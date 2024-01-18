import {Badge, Box, Divider, Flex, Heading} from '@chakra-ui/react';

import {BrandText, TEXT_TYPE} from '../../../shared/BrandText';

const Foundations = () => (
  <Box display="flex" flexDirection="column">
    <Heading fontSize="heading.xl" fontWeight="heading.3" mb={4}>
      Foundations
    </Heading>

    <Divider orientation="horizontal" />

    <Flex flexWrap="wrap" flexDirection="row">
      <Box m={6}>
        <Badge
          mt={4}
          colorScheme="gray"
          size="sm"
          w={'fit-content'}
          p={2}
          px={4}
          borderRadius={'full'}
        >
          Text styles
        </Badge>

        <Box mt={4}>
          <BrandText type={TEXT_TYPE.H1} mb={4}>
            Heading-1
          </BrandText>
          <BrandText type={TEXT_TYPE.H2} mb={4}>
            Heading-2
          </BrandText>
          <BrandText type={TEXT_TYPE.H3} mb={4}>
            Heading-3
          </BrandText>
          <BrandText type={TEXT_TYPE.BASE} mb={4}>
            text-base
          </BrandText>
          <BrandText type={TEXT_TYPE.SMALL} mb={4}>
            text-small
          </BrandText>
          <BrandText type={TEXT_TYPE.SMALL_ALT} mb={4}>
            text-small-alt
          </BrandText>
        </Box>
      </Box>

      <Box m={6}>
        <Badge
          mt={4}
          colorScheme="gray"
          size="sm"
          w={'fit-content'}
          p={2}
          px={4}
          borderRadius={'full'}
        >
          Text colors
        </Badge>

        <Box mt={4}>
          {['text-primary', 'text-secondary', 'text-tertiary', 'text-white', 'text-danger'].map(
            (color) => (
              <Flex key={color} flexDirection="row" alignItems="center" mb={4}>
                <Box bg={color} w="20px" h="20px" borderRadius="full" p={4} color="white" />
                <BrandText type={TEXT_TYPE.SMALL} ml={2}>
                  {color}
                </BrandText>
              </Flex>
            )
          )}
        </Box>
      </Box>

      <Box m={6}>
        <Badge
          mt={4}
          colorScheme="gray"
          size="sm"
          w={'fit-content'}
          p={2}
          px={4}
          borderRadius={'full'}
        >
          Fill colors
        </Badge>

        <Box mt={4}>
          {[
            'fill-brand',
            'fill-brand-hover',
            'fill-darkBlue',
            'fill-gray',
            'fill-gray-hover',
            'fill-gray-lightest',
            'fill-white',
          ].map((color) => (
            <Flex key={color} flexDirection="row" alignItems="center" mb={4}>
              <Box bg={color} w="20px" h="20px" borderRadius="full" p={4} color="white" />
              <BrandText type={TEXT_TYPE.SMALL} ml={2}>
                {color}
              </BrandText>
            </Flex>
          ))}
        </Box>
      </Box>

      <Box m={6}>
        <Badge
          mt={4}
          colorScheme="gray"
          size="sm"
          w={'fit-content'}
          p={2}
          px={4}
          borderRadius={'full'}
        >
          Border colors
        </Badge>

        <Box mt={4}>
          {['border-brand', 'border-gray', 'border-danger'].map((color) => (
            <Flex key={color} flexDirection="row" alignItems="center" mb={4}>
              <Box bg={color} w="20px" h="20px" borderRadius="full" p={4} color="white" />
              <BrandText type={TEXT_TYPE.SMALL} ml={2}>
                {color}
              </BrandText>
            </Flex>
          ))}
        </Box>
      </Box>
    </Flex>
  </Box>
);

export default Foundations;
