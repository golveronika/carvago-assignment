import {Box} from '@chakra-ui/react';

import Foundations from './Foundations';
import Assets from './Assets';
import Components from './Components';

const StylesPage = () => (
  <Box display="flex" flexDirection="column">
    <Foundations />
    <Assets />
    <Components />
  </Box>
);

export default StylesPage;
