import { TagProps } from './Tag.props';
import cn from 'classnames';
import styles from './Tag.module.css';

export const Tag = ({ size = 's', children, color = 'ghost', href, className, ...props }: TagProps): JSX.Element => {
  const stylesTag = cn(styles.tag, className, styles[size], styles[color]);

  return (
    <div
      className={stylesTag}
      {...props}
    >
      <span className={styles.inner}>
        {
          href
            ? <a href={href}>{children}</a>
            : <>{children}</>
        }
      </span>
    </div>);
};