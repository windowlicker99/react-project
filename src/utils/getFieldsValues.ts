// eslint-disable-next-line @typescript-eslint/no-explicit-any
type TField = Record<any, any>;

export const getFieldsValues = (fields: TField[], value = 'initialValue') => {
  const values: TField = {};

  fields.forEach((field) => {
    values[field.name] = field[value];
    return values;
  });

  return values;
};
