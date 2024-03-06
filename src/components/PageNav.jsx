import { NavLink, useNavigate } from 'react-router-dom';
import styles from './PageNav.module.css';
import Logo from './Logo';
import { useAuth } from '../contexts/FakeAuthContext';
import Button from './Button';
function PageNav() {
  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();
  function handleClick() {
    if (isAuthenticated) {
      logout();
      navigate('/');
      return;
    }
    navigate('/login');
  }
  return (
    <nav className={styles.nav}>
      <Logo />
      <ul>
        <li>
          <NavLink to="/pricing">Pricing</NavLink>
        </li>
        <li>
          <NavLink to="/product">Product</NavLink>
        </li>
        <li>
          <Button onClick={handleClick} type="primary">
            {isAuthenticated ? 'Logout' : 'Login'}
          </Button>
        </li>
      </ul>
    </nav>
  );
}

export default PageNav;
