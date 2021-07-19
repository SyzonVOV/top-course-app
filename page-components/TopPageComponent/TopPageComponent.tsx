import { TopPageComponentProps } from './TopPageComponent.props';
import styles from './TopPageComponent.module.css';
import { HTag, Tag, HhData, Advantages, PTag } from "../../components";
import { TopLevelCategory } from '../../interfaces/page.interface';
export const TopPageComponent = ({ page, products, firstCategory, ...props }: TopPageComponentProps): JSX.Element => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        <HTag tag='h1'>{page.title}</HTag>
        {products && <Tag color='grey' size='m'>{products.length}</Tag>}
        <span>Сортировка</span>
      </div>
      <div>
        {products && products.map(p => (<div key={p._id}>{p.title}</div>))}
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
      {page.seoText && <PTag>{page.seoText}</PTag>}
      <HTag tag='h2'>Получаемые навыки</HTag>
      {page.tags.map(t => <Tag key={t} color='primary'>{t}</Tag>)}
    </div>);
};