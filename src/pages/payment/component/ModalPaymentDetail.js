import Modal from '../../../component/Modal';
import { Flex, Text } from '@chakra-ui/react';
import dayjs from 'dayjs';
const ModalPaymentDetail = ({ data, onClose, isOpen }) => {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      withCloseIcon
      title={'Payment Detail'}
    >
      <Flex direction={'column'} gap={'10px'} mb={'20px'}>
        <Flex direction={'row'} justifyContent={'space-between'}>
          <Text fontSize={'14px'} color={'grey.500'}>
            Name
          </Text>
          <Text fontSize={'14px'} color={'grey.900'}>
            {data?.student?.name ?? '-'}
          </Text>
        </Flex>
        <Flex direction={'row'} justifyContent={'space-between'}>
          <Text fontSize={'14px'} color={'grey.500'}>
            Payment Schedule
          </Text>
          <Text fontSize={'14px'} color={'grey.900'}>
            {data?.schedule ?? '-'}
          </Text>
        </Flex>
        <Flex direction={'row'} justifyContent={'space-between'}>
          <Text fontSize={'14px'} color={'grey.500'}>
            Bill Number
          </Text>
          <Text fontSize={'14px'} color={'grey.900'}>
            {data?.number ?? '-'}
          </Text>
        </Flex>
        <Flex direction={'row'} justifyContent={'space-between'}>
          <Text fontSize={'14px'} color={'grey.500'}>
            Amount Paid
          </Text>
          <Text fontSize={'14px'} color={'grey.900'}>
            {'INR ' + data?.amount ?? '-'}
          </Text>
        </Flex>
        <Flex direction={'row'} justifyContent={'space-between'}>
          <Text fontSize={'14px'} color={'grey.500'}>
            Balance Amount
          </Text>
          <Text fontSize={'14px'} color={'grey.900'}>
            {'INR ' + data?.balance ?? '-'}
          </Text>
        </Flex>
        <Flex direction={'row'} justifyContent={'space-between'}>
          <Text fontSize={'14px'} color={'grey.500'}>
            Date of Admission
          </Text>
          <Text fontSize={'14px'} color={'grey.900'}>
            {dayjs(data?.student?.admissionDate ?? '-').format('DD-MMM, YYYY')}
          </Text>
        </Flex>
      </Flex>
    </Modal>
  );
};

export default ModalPaymentDetail;
