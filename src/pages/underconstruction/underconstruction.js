import React from 'react';
import { Box, Card, Image, Text } from '@chakra-ui/react';

const UnderConstruction = () => {
  return (
    <Box
      display={'flex'}
      flexDirection={'column'}
      alignItems={'center'}
      w={'100%'}
      minH={'90vH'}
      justifyContent={'center'}
    >
      <Image
        src="/underConstruction.jpg"
        alt="Not Found"
        width={'30%'}
        height={'20%'}
      />
      <Text fontSize={'4xl'}>Under Construction</Text>
    </Box>
  );
};

export default UnderConstruction;
