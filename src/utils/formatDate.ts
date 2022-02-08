import { format } from 'date-fns';

export const formatDate = (date: Date | string, dateFormat = 'dd/MM/yyyy'): string => {
  if (!date) {
    return '';
  }

  return format(new Date(date), dateFormat);
};

export const rangeOfYears = (start: number, end: number): number[] =>
  Array(end - start + 1)
    .fill(start)
    .map((year, index) => year + index);
