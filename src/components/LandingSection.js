import React from 'react';
import { Avatar, Heading, VStack, Box } from '@chakra-ui/react';
import FullScreenSection from './FullScreenSection';

const greeting = 'Hello, I am Pete!';
const bio1 = 'A frontend developer';
const bio2 = 'specialised in React';

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    <Avatar
      size="2xl"
      name="Christian Nwamba"
      src="https://i.pravatar.cc/150?img=7"
    />
    <Box height="40px">
      <Heading as="h6" size="xs" alignContent={'center'}>
        {greeting}
      </Heading>
    </Box>
    <Box>
      <Heading as="h3" size="2xl">
        {bio1}{' '}
      </Heading>
    </Box>
    <Box height="20px">
      <Heading as="h3" size="2xl">
        {bio2}
      </Heading>
    </Box>
  </FullScreenSection>
);

export default LandingSection;
