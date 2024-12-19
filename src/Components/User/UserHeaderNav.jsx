import React from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { UserContext } from '../../UserContext';
import FeedIcon from '../../Assets/feed.svg?react';
import AddPhotoIcon from '../../Assets/adicionar.svg?react';
import StatsIcon from '../../Assets/estatisticas.svg?react';
import LogoutIcon from '../../Assets/sair.svg?react';
import useMedia from '../../Hooks/useMedia';
import styles from './UserHeaderNav.module.css';

const UserHeaderNav = () => {
  const { userLogout } = React.useContext(UserContext);
  const navigate = useNavigate();
  const mobile = useMedia('(max-width: 40rem)');
  const [mobileMenu, setMobileMenu] = React.useState(false);

  const { pathname } = useLocation();

  React.useEffect(() => {
    setMobileMenu(false);
  }, [pathname]);

  function handleLogout() {
    userLogout();
    navigate('/login');
  }

  return (
    <>
      {mobile && (
        <button
          className={`${styles.mobileButton} ${
            mobileMenu && styles.mobileButtonActive
          }`}
          aria-label="Menu"
          onClick={() => setMobileMenu(!mobileMenu)}
        ></button>
      )}
      <nav
        className={`${mobile ? styles.navMobile : styles.nav} ${
          mobileMenu && styles.navMobileActive
        }`}
      >
        <NavLink to="/account" end>
          <FeedIcon />
          {mobile && 'My photos'}
        </NavLink>
        <NavLink to="/account/stats">
          <StatsIcon />
          {mobile && 'Stats'}
        </NavLink>
        <NavLink to="/account/post">
          <AddPhotoIcon />
          {mobile && 'Add photo'}
        </NavLink>
        <button onClick={handleLogout}>
          <LogoutIcon />
          {mobile && 'Logout'}
        </button>
      </nav>
    </>
  );
};

export default UserHeaderNav;
