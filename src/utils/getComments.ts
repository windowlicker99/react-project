import HTTPService from '@services/HTTPService';
import { API_PATHS } from '@constants/paths';

interface IProps {
  type: keyof typeof API_PATHS;
  id: number;
}

export const getComment = async ({ type, id }: IProps) => {
  const comments = await HTTPService.get(`${API_PATHS[type]}/${id}`);

  return comments.data;
};
