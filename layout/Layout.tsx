import { LayoutProps } from './Layout.props';
import styles from './Layout.module.css';
import { Header } from './Header';
import { Sidebar } from './Sidebar';
import { Footer } from './Footer';

export const Layout = ({ children }: LayoutProps): JSX.Element => {
  return (
    <>
      <Header />
      <div>
        <Sidebar />
        <main>
          {children}
        </main>
      </div>
      <Footer />
    </>);
};