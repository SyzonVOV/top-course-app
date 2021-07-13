import axios from 'axios';
import { MenuItem } from '../interfaces/menu.interface';

export const getMenus = async (firstCategory = 0): Promise<Array<MenuItem>> => {
  const { data } = await axios.post<MenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find', {
    firstCategory
  });
  return data;
};