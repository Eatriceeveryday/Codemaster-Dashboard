import { service } from '.';

export default () => {
  const studentList = async (page = 1, q) => {
    try {
      const response = await service.get('students', {
        params: {
          page: page,
          search: q,
        },
      });
      return response;
    } catch (error) {
      throw error;
    }
  };

  const addStudent = async body => {
    try {
      const response = await service.post('students', body, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      return response;
    } catch (error) {
      throw error;
    }
  };

  const updateStudent = async (id, body) => {
    try {
      const response = await service.put(`students/${id}`, body);
      return response;
    } catch (error) {
      throw error;
    }
  };

  const deleteStudent = async id => {
    try {
      console.log('id', id);
      const response = await service.delete(`students/${id}`);
      console.log('dell students', response);
      return response;
    } catch (error) {
      throw error;
    }
  };

  return {
    addStudent,
    studentList,
    updateStudent,
    deleteStudent,
  };
};
