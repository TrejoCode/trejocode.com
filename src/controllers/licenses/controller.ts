import { LICENSES_DATA } from 'data/licenses';

export const useLicensesController = () => {
  return {
    licenses: LICENSES_DATA,
  };
};
