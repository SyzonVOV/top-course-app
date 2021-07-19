import { useReducer } from 'react';
import { TopPageComponentProps } from './TopPageComponent.props';
import { sortReducer } from '../../components/Sort/sort.reducer';
import styles from './TopPageComponent.module.css';
import { HTag, Tag, HhData, Advantages, Sort } from "../../components";
import { TopLevelCategory } from '../../interfaces/page.interface';
import { SortEnum } from '../../components/Sort/Sort.props';

export const TopPageComponent = ({ page, products, firstCategory }: TopPageComponentProps): JSX.Element => {
  const [{ products: sortedProducts, sort }, dispathSort] = useReducer(sortReducer, { products, sort: SortEnum.Rating });

  const setSort = (sort: SortEnum) => {
    dispathSort({ type: sort });
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        <HTag tag='h1'>{page.title}</HTag>
        {products && <Tag color='grey' size='m'>{products.length}</Tag>}
        <Sort sort={sort} setSort={setSort} />
      </div>
      <div>
        {sortedProducts && sortedProducts.map(p => (<div key={p._id}>{p.title}</div>))}
      </div>
      <div className={styles.hhTitle}>
        <HTag tag='h2'>Вакансии - {page.category}</HTag>
        <Tag color='red' size='m'>hh.ru</Tag>
      </div>
      {firstCategory == TopLevelCategory.Courses && page.hh && <HhData {...page.hh} />}
      {page.advantages && page.advantages.length > 0 && <>
        <HTag tag='h2'>Преимущства</HTag>
        <Advantages advantages={page.advantages} />
      </>
      }
      {page.seoText && <div className={styles.seo} dangerouslySetInnerHTML={{ __html: page.seoText }} />}
      <HTag tag='h2'>Получаемые навыки</HTag>
      {page.tags.map(t => <Tag key={t} color='primary'>{t}</Tag>)}
    </div>);
};