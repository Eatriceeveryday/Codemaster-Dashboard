import { service } from '.';

export default () => {
  const statistic = async () => {
    try {
      const res = await service.get('statistics');
      return res;
    } catch (error) {
      throw error;
    }
  };

  return { statistic };
};
