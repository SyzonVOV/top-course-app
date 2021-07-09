import { ButtonProps } from './Button.props';
import styles from './Button.module.css';
import cn from 'classnames';
import ArrowIcon from './arrow.svg';

export const Button = ({ appearance, children, arrow = 'none', className, ...props }: ButtonProps): JSX.Element => {

  const stylesButton = cn(styles.button, className, {
    [styles.primary]: appearance === 'primary',
    [styles.ghost]: appearance === 'ghost',
  });

  const stylesArrow = cn(styles.arrow, {
    [styles.down]: arrow === 'down'
  });

  return (
    <button className={stylesButton} {...props}>
      {children}

      {arrow !== 'none' && <span className={stylesArrow}>
        <ArrowIcon />
      </span>}
    </button>);
};