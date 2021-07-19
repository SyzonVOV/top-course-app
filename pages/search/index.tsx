import axios from 'axios';
import { useRouter } from 'next/router';
import { GetStaticProps } from 'next';
import { MenuItem } from '../../interfaces/menu.interface';
import { withLayout } from '../../layout';
import { Fragment } from 'react';

const Search = (): JSX.Element => {
  const router = useRouter();
  return (
    <Fragment>
      <h2>Search</h2>
      <p>Are you looking for {router.query.q}</p>
    </Fragment>
  );
};

export default withLayout(Search);

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const firstCategory = 0;
  const { data: menu } = await axios.post<MenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find', {
    firstCategory
  });
  return {
    props: {
      menu,
      firstCategory
    }
  };
};

interface HomeProps extends Record<string, unknown> {
  menu: MenuItem[];
  firstCategory: number;
}