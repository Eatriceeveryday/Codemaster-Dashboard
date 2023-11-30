import { Card, Flex, Icon, LinkOverlay, Text } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import useHome from '../../services/useHome';
import { UseCustomToast } from '../../utils';
import { RiBook2Line } from 'react-icons/ri';
import { FiUsers, FiUser } from 'react-icons/fi';
import { BiDollar } from 'react-icons/bi';

const Dashboard = () => {
  const { statistic } = useHome();
  const { showToastError } = UseCustomToast();
  const [data, setData] = useState(null);
  useEffect(() => {
    getStatistic();
  }, []);

  const getStatistic = async () => {
    try {
      const res = await statistic();
      setData(res);
      console.log(res);
    } catch (error) {
      showToastError(error.response.data.error);
    }
  };
  return (
    <Flex direction={'row'} gap={'24px'} padding={'32px'}>
      <Card
        overflow="hidden"
        variant="filled"
        backgroundColor={'blue.50'}
        width={'258px'}
        padding={'16px'}
        href="students"
        as="a"
      >
        <Icon
          as={FiUsers}
          color={'blue.500'}
          mb={'8px'}
          w={'40px'}
          h={'40px'}
        />
        <Text fontSize={'14'} fontWeight={'500'} color={'blue.800'} mb={'8px'}>
          Student
        </Text>
        <Text fontSize={'30px'} fontWeight={'500'} alignSelf={'flex-end'}>
          {data?.students ?? '-'}
        </Text>
      </Card>

      <Card
        overflow="hidden"
        variant="filled"
        backgroundColor={'pink.50'}
        width={'258px'}
        padding={'16px'}
        href="course"
        as="a"
      >
        <Icon
          as={RiBook2Line}
          color={'pink.500'}
          mb={'8px'}
          w={'40px'}
          h={'40px'}
        />
        <Text fontSize={'14'} fontWeight={'500'} color={'pink.700'} mb={'8px'}>
          Course
        </Text>
        <Text
          fontSize={'30px'}
          fontWeight={'500'}
          color={'pink.700'}
          alignSelf={'flex-end'}
        >
          {data?.courses ?? '-'}
        </Text>
      </Card>

      <Card
        overflow="hidden"
        variant="filled"
        backgroundColor={'orange.50'}
        width={'258px'}
        padding={'16px'}
        href="payment"
        as="a"
      >
        <Icon
          as={BiDollar}
          color={'#F79009'}
          mb={'8px'}
          w={'40px'}
          h={'40px'}
        />
        <Text fontSize={'14'} fontWeight={'500'} color={'#B54708'} mb={'8px'}>
          Payment
        </Text>
        <Flex direction={'row'} justifyContent={'flex-end'}>
          <Text fontSize={'15px'} fontWeight={'500'} mt={'15px'}>
            INR
          </Text>
          <Text fontSize={'30px'} fontWeight={'500'}>
            {data?.payments ?? '-'}
          </Text>
        </Flex>
      </Card>

      <Card
        overflow="hidden"
        variant="filled"
        backgroundColor={'#F94449'}
        width={'258px'}
        padding={'16px'}
      >
        <Icon as={FiUser} color={'#FFFFFF'} mb={'8px'} w={'40px'} h={'40px'} />
        <Text fontSize={'14'} fontWeight={'500'} color={'#FFFFFF'} mb={'8px'}>
          Users
        </Text>
        <Text
          fontSize={'30px'}
          fontWeight={'500'}
          color={'#FFFFFF'}
          alignSelf={'flex-end'}
        >
          {data?.users ?? '-'}
        </Text>
      </Card>
    </Flex>
  );
};

export default Dashboard;
