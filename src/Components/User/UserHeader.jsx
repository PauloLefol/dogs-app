import React from 'react';
import UserHeaderNav from './UserHeaderNav';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';

const Header = styled.header`
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  margin-top: 1rem;
  margin-bottom: 2rem;
  position: relative;
`;

const UserHeader = () => {
  const [title, setTitle] = React.useState('');
  const location = useLocation();

  React.useEffect(() => {
    const { pathname } = location;
    switch (pathname) {
      case '/account/post':
        setTitle('Post your photo');
        break;
      case '/account/stats':
        setTitle('Stats');
        break;
      default:
        setTitle('My account');
    }
  }, [location]);

  return (
    <Header>
      <h1 className="title">{title}</h1>
      <UserHeaderNav />
    </Header>
  );
};

export default UserHeader;
