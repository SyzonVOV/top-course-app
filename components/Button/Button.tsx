import { ButtonProps } from './Button.props';
import styles from './Button.module.css';
import cn from 'classnames';

export const Button = ({ appearance, children, className, ...props }: ButtonProps): JSX.Element => {

  const stylesConfig = cn(styles.button, className, {
    [styles.primary]: appearance == 'primary',
    [styles.ghost]: appearance == 'ghost',
  });

  return (
    <button className={stylesConfig} {...props}>
      {children}
    </button>);
};