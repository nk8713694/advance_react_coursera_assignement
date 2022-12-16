import {
  Heading,
  HStack,
  Image,
  Text,
  VStack,
  SimpleGrid,
  Box,
  Badge,
} from '@chakra-ui/react';
import { Stack, useColorMode, Button, Flex, Spacer } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import React from 'react';

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
    <div className="appcard">
      <Box rounded="20px" overflow="hidden">
        <Image src={imageSrc} alt="Card Image"></Image>
        <Box p={5}>
          <Stack align="initial">
            <Text as="h2" fontWeight="normal">
              {title}
            </Text>
            <Text>{description}</Text>
            <a src="">
              Learn More &nbsp;&nbsp;
              <FontAwesomeIcon icon={faArrowRight} size="1x" />
            </a>
          </Stack>
        </Box>
      </Box>
    </div>
  );
};

export default Card;
