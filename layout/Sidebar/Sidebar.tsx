import React from 'react';
import cn from 'classnames';
import { SidebarProps } from './Sidebar.props';
import { Menu } from './../Menu';
import Logo from '../logo.svg';
import styles from './Sidebar.module.css';
import { Search } from '../../components';

export const Sidebar = ({ className, ...props }: SidebarProps): JSX.Element => {
  return (
    <aside className={cn(className, styles.sidebar)} {...props}>
      <Logo className={styles.logo} />
      <Search />
      <Menu />
    </aside>);
};