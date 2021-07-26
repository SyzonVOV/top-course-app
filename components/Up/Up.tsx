import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { useScrollY } from '../../hooks/useScrollY';
import styles from './Up.module.css';
import { ButtonIcon } from '..';

export const Up = (): JSX.Element => {
  // Returns promise, so we can make sophisticated animation
  // at first animate one property, then another
  const controls = useAnimation();
  const y = useScrollY();
  //TODO: hide the Up button when on top
  useEffect(() => {
    controls.start({ opacity: (y / document.body.scrollHeight) * 3 });
  }, [y, controls]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <motion.div
      className={styles.up}
      animate={controls}
      initial={{ opacity: 0 }
      }
    >
      <ButtonIcon appearance='primary' icon='up' onClick={scrollToTop} />
    </motion.div>
  );
};