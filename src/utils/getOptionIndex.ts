import { IOption } from '@interfaces/interfaces';

export const getOptionIndex = (options: IOption<number | string>[], value: number | string): number =>
  options.findIndex((option) => option.value === value);
