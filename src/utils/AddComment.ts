import HTTPService from '@services/HTTPService';
import { API_PATHS } from '@constants/paths';
import { EThreatsControlsPath } from '@/interfaces/enums';

interface IData {
  comment?: { text: string; authorId: string; date: string };
  checked?: boolean;
  dueDate?: Date;
  id: number;
  elementType: string;
}

export const addComment = async (data: IData, path: EThreatsControlsPath) => {
  const comment = await HTTPService.put(API_PATHS[path], { ...data });

  return comment.data;
};
