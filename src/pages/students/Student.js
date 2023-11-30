import { useSearchParams } from 'react-router-dom';
import { useStudent } from '../../services';
import { UseCustomToast } from '../../utils';
import { useEffect, useState } from 'react';
import {
  Box,
  Flex,
  IconButton,
  Image,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';
import Button from '../../component/Button';

import dayjs from 'dayjs';
import { BiEdit, BiTrashAlt } from 'react-icons/bi';
import Pagination from '../../component/Pagination';
import Modal from '../../component/Modal';
import ModalFormStudent from './component/ModalFormStudent';

const Student = () => {
  const [searchParams] = useSearchParams();
  const { studentList, deleteStudent } = useStudent();
  const { showToastError, showToastSuccess } = UseCustomToast();
  const [showDeletePopup, setShowDeletePopup] = useState(false);
  const [showFormPopup, setShowFormPopup] = useState(false);

  const [data, setData] = useState([]);
  const [links, setLinks] = useState([]);
  const [selectedData, setSelectedData] = useState(null);

  useEffect(() => {
    getListData(1, searchParams.get('search'));
  }, [searchParams]);

  const getListData = async (page, q) => {
    try {
      const res = await studentList(page, q);
      console.log(res);
      setData(res?.data);
      setLinks(res?.links);
    } catch (error) {
      console.log(error);
    }
  };

  const handleEdit = item => {
    setSelectedData(item);
    setShowFormPopup(true);
  };

  const handleOpenDeleteopup = item => {
    setSelectedData(item);
    setShowDeletePopup(true);
  };

  const handleCloseFormPopup = () => {
    setSelectedData(null);
    setShowFormPopup(false);
  };

  const handleCloseDeletePopup = () => {
    setSelectedData(null);
    setShowDeletePopup(false);
  };

  const handleDelete = async () => {
    try {
      const res = await deleteStudent(selectedData?.id);
      console.log('res success', res);
      setShowDeletePopup(false);
      showToastSuccess(res?.message);
      getListData();
    } catch (error) {
      console.log('err component', error);
      showToastError(error.response.data.error || error?.error);
    }
  };

  return (
    <Box>
      <TableContainer>
        <Flex justifyContent="space-between">
          <Text color={'grey.900'} fontSize={'24px'} mb={'24px'}>
            Student List
          </Text>
          <Button
            text={'ADD NEW STUDENT'}
            isBggradient
            onClick={() => {
              setShowFormPopup(true);
            }}
          />
        </Flex>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th color={'gray.500'}></Th>
              <Th color={'gray.500'}>Names</Th>
              <Th color={'gray.500'}>Email</Th>
              <Th color={'gray.500'}>Phone</Th>
              <Th color={'gray.500'}>Enroll Number</Th>
              <Th color={'gray.500'}>Date of Admission</Th>
              <Th color={'gray.500'}></Th>
            </Tr>
          </Thead>
          <Tbody>
            {data.map(item => {
              return (
                <Tr bgColor={'gray.50'} key={`payment-item-${item.id}`}>
                  <Td>
                    <Box
                      width={'65px'}
                      height={'55px'}
                      overflow={'hidden'}
                      borderRadius={'8px'}
                    >
                      <Image
                        src={item?.imageUrl ?? '-'}
                        fallbackSrc={window.location.origin + '/avatar.png'}
                      />
                    </Box>
                  </Td>
                  <Td fontSize={'14px'} color={'gray.900'}>
                    {item.name}
                  </Td>
                  <Td fontSize={'14px'} color={'gray.900'}>
                    {item.email}
                  </Td>
                  <Td fontSize={'14px'} color={'gray.900'}>
                    {item.phoneNumber}
                  </Td>
                  <Td fontSize={'14px'} color={'gray.900'}>
                    {item.enrollNumber}
                  </Td>
                  <Td fontSize={'14px'} color={'gray.900'}>
                    {dayjs(item.admissionDate).format('DD-MMM, YYYY')}
                  </Td>
                  <Td>
                    <Flex gap={'10px'}>
                      <IconButton
                        onClick={() => {
                          handleEdit(item);
                        }}
                        size={'xs'}
                        variant={'ghost'}
                        aria-label="open menu"
                        color={'#667085'}
                        icon={<BiEdit />}
                      />
                      <IconButton
                        onClick={() => {
                          handleOpenDeleteopup(item);
                        }}
                        size={'xs'}
                        variant={'ghost'}
                        aria-label="open menu"
                        color={'#667085'}
                        icon={<BiTrashAlt />}
                      />
                    </Flex>
                  </Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </TableContainer>
      <Pagination link={links} onClick={getListData} />
      <Modal
        isOpen={showDeletePopup}
        title={'Delete Student'}
        confirmButtonText="Delete"
        onClose={handleCloseDeletePopup}
        onConfirm={handleDelete}
      >
        <Text fontSize={'14px'} color={'gray.900'}>
          Are you sure to delete this data? the data can't be restore after you
          delete it.
        </Text>
      </Modal>
      <ModalFormStudent
        refresh={getListData}
        data={selectedData}
        isOpen={showFormPopup}
        onClose={handleCloseFormPopup}
      />
    </Box>
  );
};

export default Student;
