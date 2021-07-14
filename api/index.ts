import axios from 'axios';
import { MenuItem } from '../interfaces/menu.interface';
import { TopLevelCategory } from '../interfaces/page.interface';

export const getMenus = async (firstCategory: TopLevelCategory): Promise<Array<MenuItem>> => {
  const { data } = await axios.post<MenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find', {
    firstCategory
  });
  return data;
};