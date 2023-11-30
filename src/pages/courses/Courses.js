import { useSearchParams } from 'react-router-dom';
import useCourse from '../../services/useCourse';
import { UseCustomToast, idrFormat, priceFormater } from '../../utils';
import { useEffect, useState } from 'react';
import {
  Box,
  IconButton,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';
import { BiShow } from 'react-icons/bi';
import Pagination from '../../component/Pagination';
import ModalCourseDetail from './component/ModalCourseDetail';

const Course = () => {
  const [searchParams] = useSearchParams();
  const { courseList } = useCourse();
  const { showToastError } = UseCustomToast();

  const [data, setData] = useState([]);
  const [links, setLinks] = useState([]);
  const [selectedData, setSelectedData] = useState(null);
  const [showCourseDetail, setShowCourseDetail] = useState(false);

  useEffect(() => {
    getCourseList(1, searchParams.get('search'));
  }, [searchParams]);

  const getCourseList = async (page, q) => {
    try {
      const res = await courseList(page, q);
      setData(res?.data);
      setLinks(res?.links);
    } catch (error) {
      showToastError(error.response.data.error);
    }
  };

  const handleShowCourseDetail = item => {
    setSelectedData(item);
    setShowCourseDetail(true);
  };

  const handleCloseCourseDetail = () => {
    setSelectedData(null);
    setShowCourseDetail(false);
  };

  return (
    <Box>
      <TableContainer>
        <Text color={'grey.900'} fontSize={'24px'} mb={'24px'}>
          Course Details
        </Text>
        <Table variant={'simple'}>
          <Thead>
            <Tr>
              <Th color={'gray.500'}>Name</Th>
              <Th color={'gray.500'}>Course Code</Th>
              <Th color={'gray.500'}>Credit</Th>
              <Th color={'gray.500'}>Location</Th>
              <Th color={'gray.500'}>Bootcamp Mentor</Th>
              <Th color={'gray.500'}>Fee</Th>
              <Th color={'gray.500'}></Th>
            </Tr>
          </Thead>
          <Tbody>
            {data.map(item => {
              return (
                <Tr bgColor={'gray.50'} key={`course-item-${item.id}`}>
                  <Td fontSize={'14px'} color={'gray.900'}>
                    {item.title}
                  </Td>
                  <Td fontSize={'14px'} color={'gray.900'}>
                    {item.code}
                  </Td>
                  <Td fontSize={'14px'} color={'gray.900'}>
                    {item.credits}
                  </Td>
                  <Td fontSize={'14px'} color={'gray.900'}>
                    {item.location}
                  </Td>
                  <Td fontSize={'14px'} color={'gray.900'}>
                    {item.instructor}
                  </Td>
                  <Td fontSize={'14px'} color={'gray.900'}>
                    {idrFormat(item.fee)}
                  </Td>
                  <Td>
                    <IconButton
                      size={'lg'}
                      variant={'ghost'}
                      icon={<BiShow />}
                      onClick={() => {
                        handleShowCourseDetail(item);
                      }}
                    />
                  </Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </TableContainer>
      <Pagination link={links} onClick={getCourseList} />
      <ModalCourseDetail
        isOpen={showCourseDetail}
        onClose={handleCloseCourseDetail}
        data={selectedData}
      />
    </Box>
  );
};

export default Course;
