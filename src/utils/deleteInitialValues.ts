// eslint-disable-next-line @typescript-eslint/no-explicit-any
import { IFieldsList } from '@/interfaces/interfaces';

export const deleteInitialValues = (fields: IFieldsList) => {
  const initialObj: IFieldsList = {};
  return Object.entries(fields).reduce((acc, [key, field]) => {
    const { initialValue, ...fieldRest } = field;
    acc[key] = fieldRest;
    return acc;
  }, initialObj);
};
