import { service } from '.';

export default () => {
  const courseList = async (page, q) => {
    try {
      const response = await service.get('courses', {
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

  return {courseList}
};
