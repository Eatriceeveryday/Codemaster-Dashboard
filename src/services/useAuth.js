import { service } from '.';

export default () => {
  const signIn = async body => {
    try {
      const response = await service.post('auth', body);
      return response;
    } catch (e) {
      throw e;
    }
  };

  return {
    signIn,
  };
};
