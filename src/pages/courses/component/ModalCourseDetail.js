import Modal from '../../../component/Modal';
import { Flex, Text } from '@chakra-ui/react';
import dayjs from 'dayjs';
import { idrFormat, priceFormater } from '../../../utils';
const ModalCourseDetail = ({ data, onClose, isOpen }) => {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      withCloseIcon
      title={'Course Detail'}
    >
      <Flex direction={'column'} gap={'10px'} mb={'20px'}>
        <Flex direction={'row'} justifyContent={'space-between'}>
          <Text fontSize={'14px'} color={'grey.500'}>
            Title
          </Text>
          <Text fontSize={'14px'} color={'grey.900'}>
            {data?.title ?? '-'}
          </Text>
        </Flex>
        <Flex direction={'row'} justifyContent={'space-between'}>
          <Text fontSize={'14px'} color={'grey.500'}>
            Description
          </Text>
          <Text fontSize={'14px'} color={'grey.900'}>
            {data?.description ?? '-'}
          </Text>
        </Flex>
        <Flex direction={'row'} justifyContent={'space-between'}>
          <Text fontSize={'14px'} color={'grey.500'}>
            Course Code
          </Text>
          <Text fontSize={'14px'} color={'grey.900'}>
            {data?.code ?? '-'}
          </Text>
        </Flex>
        <Flex direction={'row'} justifyContent={'space-between'}>
          <Text fontSize={'14px'} color={'grey.500'}>
            Credit
          </Text>
          <Text fontSize={'14px'} color={'grey.900'}>
            {data?.credit ?? '-'}
          </Text>
        </Flex>
        <Flex direction={'row'} justifyContent={'space-between'}>
          <Text fontSize={'14px'} color={'grey.500'}>
            Instructor
          </Text>
          <Text fontSize={'14px'} color={'grey.900'}>
            {'INR ' + data?.instructor ?? '-'}
          </Text>
        </Flex>
        <Flex direction={'row'} justifyContent={'space-between'}>
          <Text fontSize={'14px'} color={'grey.500'}>
            Department
          </Text>
          <Text fontSize={'14px'} color={'grey.900'}>
            {data?.department ?? '-'}
          </Text>
        </Flex>
        <Flex direction={'row'} justifyContent={'space-between'}>
          <Text fontSize={'14px'} color={'grey.500'}>
            Location
          </Text>
          <Text fontSize={'14px'} color={'grey.900'}>
            {data?.location ?? '-'}
          </Text>
        </Flex>
        <Flex direction={'row'} justifyContent={'space-between'}>
          <Text fontSize={'14px'} color={'grey.500'}>
            Fee
          </Text>
          <Text fontSize={'14px'} color={'grey.900'}>
            {idrFormat(data?.fee ?? '-')}
          </Text>
        </Flex>
      </Flex>
    </Modal>
  );
};

export default ModalCourseDetail;
