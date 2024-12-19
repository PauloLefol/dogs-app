import React from 'react';
import LoginForm from './LoginForm';
import LoginCreate from './LoginCreate';
import LoginPasswordLost from './LoginPasswordLost';
import LoginPasswordReset from './LoginPasswordReset';
import { Navigate, Route, Routes } from 'react-router-dom';
import { UserContext } from '../../UserContext';
import styled from 'styled-components';
import loginImg from '../../Assets/login.jpg';
import NotFound from '../NotFound';

const LoginWrapper = styled.section`
  & {
    display: grid;
    grid-template-columns: 1fr 1fr;
    min-height: 100vh;
    gap: 2rem;
    @media (max-width: 40rem) {
      grid-template-columns: 1fr;
    }
  }
  &:before {
    display: block;
    content: '';
    background: url(${loginImg}) no-repeat center center;
    background-size: cover;
    @media (max-width: 40rem) {
      display: none;
    }
  }
`;

const Forms = styled.div`
  max-width: 30rem;
  padding: 1rem;
  margin-top: 20vh;
  @media (max-width: 40rem) {
    max-width: 100%;
  }
`;

const Login = () => {
  const { login } = React.useContext(UserContext);

  if (login) return <Navigate to="/account" />;
  return (
    <LoginWrapper>
      <Forms>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="/create" element={<LoginCreate />} />
          <Route path="/lost" element={<LoginPasswordLost />} />
          <Route path="/reset" element={<LoginPasswordReset />} />
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </Forms>
    </LoginWrapper>
  );
};

export default Login;
