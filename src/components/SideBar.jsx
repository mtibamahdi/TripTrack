import { Outlet } from 'react-router-dom';
import AppNav from './AppNav';
import FooterSidebar from './FooterSidebar';
import Logo from './Logo';
import styles from './SideBar.module.css';

function SideBar() {
  return (
    <div className={styles.sidebar}>
      <Logo />
      <AppNav />

      <Outlet />
      <FooterSidebar />
    </div>
  );
}

export default SideBar;
