import { SidebarProps } from './Sidebar.props';
import styles from './Sidebar.module.css';
import { Menu } from './../Menu';

export const Sidebar = ({ ...props }: SidebarProps): JSX.Element => {
  return (
    <aside {...props}>
      <Menu />
    </aside>);
};