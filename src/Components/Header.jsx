import React from 'react';
import { Link } from 'react-router-dom';
import Dogs from '../Assets/dogs.svg?react';
import styled from 'styled-components';
import styles from './Header.module.css';
import { UserContext } from '../UserContext';

const Logo = styled(Link)`
  padding: 0.5rem 0;
`;

const NavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 4rem;
`;

const HeaderWrapper = styled.header`
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
  position: fixed;
  width: 100%;
  z-index: 100;
  background-color: white;
  top: 0;
`;

const Header = () => {
  const { data } = React.useContext(UserContext);

  return (
    <HeaderWrapper>
      <NavBar className="container">
        <Logo to="/" aria-label="Dogs - Home">
          <Dogs />
        </Logo>

        {data ? (
          <Link className={styles.login} to="/account">
            {data.nome}
          </Link>
        ) : (
          <Link className={styles.login} to="/login">
            Login / Criar
          </Link>
        )}
      </NavBar>
    </HeaderWrapper>
  );
};

export default Header;
