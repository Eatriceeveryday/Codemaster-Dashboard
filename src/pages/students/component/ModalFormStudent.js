import { useEffect, useState } from 'react';
import { useStudent } from '../../../services';
import { UseCustomToast } from '../../../utils';
import dayjs from 'dayjs';
import Modal from '../../../component/Modal';
import { Flex } from '@chakra-ui/react';
import FormInput from '../../../component/FormInput';

const initialState = {
  name: '',
  email: '',
  phoneNumber: '',
  enrollNumber: '',
  admissionDate: '',
  image: '',
};

const ModalFormStudent = ({ data, onClose, isOpen, refresh }) => {
  const { showToastError, showToastSuccess } = UseCustomToast();
  const { addStudent, updateStudent } = useStudent();
  const [form, setForm] = useState(initialState);
  const [isLoading, setIsLoading] = useState(false);
  const [image, setImage] = useState('');

  useEffect(() => {
    if (data) {
      setForm({ ...data });
    } else {
      setForm(initialState);
    }
  }, [isOpen]);

  const handleChange = e => {
    if (e.target.name === 'image') {
      setForm({
        ...form,
        image: e.target.files[0],
      });
    } else {
      setForm({
        ...form,
        [e.target.name]: e.target.value,
      });
    }
  };

  const handleAdd = async () => {
    setIsLoading(true);
    try {
      const formData = new FormData();

      Object.entries(form).forEach(([key, value]) => {
        formData.append(key, value);
      });

      const res = await addStudent(formData);
      showToastSuccess(res?.message);
      onClose();
      refresh();
    } catch (error) {
      showToastError(error.response.data.error);
    }
    setIsLoading(false);
  };

  const handleUpdate = async () => {
    setIsLoading(true);
    try {
      const res = await updateStudent(data?.id, {
        ...form,
        admissionDate: dayjs(form.admissionDate).format('YYYY-MM-DD'),
      });
      showToastSuccess(res?.message);
      onClose();
      refresh();
    } catch (error) {
      showToastError(error.response.data.error);
    }
    setIsLoading(false);
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      onConfirm={data ? handleUpdate : handleAdd}
      title={`${data ? 'Edit' : 'Add'} `}
      confirmButtonText={'Save'}
      isButtonLoading={isLoading}
    >
      <Flex gap={'16px'} direction={'column'}>
        <FormInput
          name={'name'}
          value={form.name}
          onChange={handleChange}
          label={'Name'}
          placeholder={'Karti'}
        />
        <FormInput
          name={'email'}
          value={form.email}
          onChange={handleChange}
          label={'Email'}
          placeholder={'Karti@example.com'}
        />
        <FormInput
          name={'phoneNumber'}
          value={form.phoneNumber}
          onChange={handleChange}
          label={'Phone'}
          placeholder={'08112343123'}
        />
        <FormInput
          name={'enrollNumber'}
          value={form.enrollNumber}
          onChange={handleChange}
          label={'Enroll Number'}
          placeholder={'1234567'}
        />
        <FormInput
          type={'date'}
          name={'admissionDate'}
          value={form.admissionDate}
          onChange={handleChange}
          label={'Date of Admission'}
          placeholder={'08-Dec, 2023'}
        />
        <FormInput
          type={'file'}
          name={'image'}
          onChange={handleChange}
          accept={'image/*'}
        />
      </Flex>
    </Modal>
  );
};

export default ModalFormStudent;
