import { PTagProps } from './PTag.props';
import styles from './PTag.module.css';
import cn from 'classnames';

export const PTag = ({ appearance = 'medium', children, className, ...props }: PTagProps): JSX.Element => {
  const stylesP = cn(styles.p, className, styles[appearance]);
  return (
    <p className={stylesP} {...props}>
      {children}
    </p>);
};