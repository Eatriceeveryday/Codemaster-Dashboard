import { service } from '.';

export default () => {
  const paymentList = async (page, q) => {
    try {
      const response = await service.get('payments', {
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

  const addPayment = async body => {
    try {
      const response = await service.post('payments', body);
      return response;
    } catch (error) {
      throw error;
    }
  };

  const paymentDetail = async id => {
    try {
      const response = await service.get(`payments/${id}`);
      return response;
    } catch (error) {
      throw error;
    }
  };

  return {
    paymentList,
    addPayment,
    paymentDetail,
  };
};
