import {Box} from '@chakra-ui/react';

import Foundations from './Foundations';
import Assets from './Assets';
import Components from './Components';

const StylesPage = () => (
  <Box display="flex" flexDirection="column">
    <Components />
    <Foundations />
    <Assets />
  </Box>
);

export default StylesPage;
