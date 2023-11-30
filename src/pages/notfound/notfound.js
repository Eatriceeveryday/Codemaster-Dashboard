import React from 'react';
import { Box, Card, Image, Text } from '@chakra-ui/react';

const NotFoundPage = () => {
  return (
    <Box
      display={'flex'}
      flexDirection={'column'}
      alignItems={'center'}
      w={'100%'}
      minH={'90vH'}
      justifyContent={'center'}
    >
      <Image src="/404.jpg" alt="Not Found" width={'30%'} height={'20%'} />
      <Text fontSize={'4xl'}>Not Found</Text>
    </Box>
  );
};

export default NotFoundPage;
