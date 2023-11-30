import {
  Box,
  Flex,
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
import { useSearchParams } from 'react-router-dom';
import usePayment from '../../services/usePayment';
import { UseCustomToast } from '../../utils';
import { useEffect, useState } from 'react';
import dayjs from 'dayjs';
import { BiShow } from 'react-icons/bi';
import Pagination from '../../component/Pagination';
import ModalPaymentDetail from './component/ModalPaymentDetail';

const Payment = () => {
  const [searchParams] = useSearchParams();
  const { paymentList } = usePayment();
  const { showToastError, showToastSuccess } = UseCustomToast();

  const [showPaymentDetail, setShowPaymentDetail] = useState(false);
  const [data, setData] = useState([]);
  const [links, setLinks] = useState([]);
  const [selectedData, setSelectedData] = useState(null);

  useEffect(() => {
    getListData(1, searchParams.get('search'));
  }, [searchParams]);

  const getListData = async (page, q) => {
    try {
      const res = await paymentList(page, q);
      setData(res?.data);
      setLinks(res?.links);
    } catch (e) {
      console.log(e);
      showToastError(e.response.data.error);
    }
  };

  const handleShowPaymentDetail = item => {
    setSelectedData(item);
    setShowPaymentDetail(true);
  };

  const handleClosePaymentDetail = () => {
    setSelectedData(null);
    setShowPaymentDetail(false);
  };

  return (
    <Box>
      <TableContainer>
        <Text color={'grey.900'} fontSize={'24px'} mb={'24px'}>
          Payment Details
        </Text>
        <Table variant={'simple'}>
          <Thead>
            <Tr>
              <Th color={'gray.500'}>Names</Th>
              <Th color={'gray.500'}>Paymnet Schedule</Th>
              <Th color={'gray.500'}>Bill Number</Th>
              <Th color={'gray.500'}>Amount Number</Th>
              <Th color={'gray.500'}>Balance Amount</Th>
              <Th color={'gray.500'}>Date of Admission</Th>
              <Th color={'gray.500'}></Th>
            </Tr>
          </Thead>
          <Tbody>
            {data.map(item => {
              return (
                <Tr bgColor={'gray.50'} key={`payment-item-${item.id}`}>
                  <Td fontSize={'14px'} color={'gray.900'}>
                    {item.student.name}
                  </Td>
                  <Td fontSize={'14px'} color={'gray.900'}>
                    {item.schedule}
                  </Td>
                  <Td fontSize={'14px'} color={'gray.900'}>
                    {item.number}
                  </Td>
                  <Td fontSize={'14px'} color={'gray.900'}>
                    {'INR ' + item.amount}
                  </Td>
                  <Td fontSize={'14px'} color={'gray.900'}>
                    {'INR ' + item.balance}
                  </Td>
                  <Td fontSize={'14px'} color={'gray.900'}>
                    {dayjs(item.student.admissionDate).format('DD-MMM, YYYY')}
                  </Td>
                  <Td>
                    <IconButton
                      size="lg"
                      variant={'ghost'}
                      icon={<BiShow />}
                      onClick={() => {
                        handleShowPaymentDetail(item);
                      }}
                    />
                  </Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </TableContainer>
      <Pagination link={links} onClick={getListData} />
      <ModalPaymentDetail
        isOpen={showPaymentDetail}
        onClose={handleClosePaymentDetail}
        data={selectedData}
      />
    </Box>
  );
};

export default Payment;
