import { ButtonProps } from './Button.props';
import styles from './Button.module.css';
import cn from 'classnames';
import ArrowIcon from './arrow.svg';
import { motion } from 'framer-motion';

export const Button = ({ appearance, children, arrow = 'none', className, ...props }: ButtonProps): JSX.Element => {

  const stylesButton = cn(styles.button, className, {
    [styles.primary]: appearance === 'primary',
    [styles.ghost]: appearance === 'ghost',
  });

  const stylesArrow = cn(styles.arrow, className, {
    [styles.down]: arrow === 'down'
  });

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      className={stylesButton} {...props}>
      {children}

      {arrow !== 'none' && <span className={stylesArrow}>
        <ArrowIcon />
      </span>}
    </motion.button>);
};