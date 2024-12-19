import React from 'react';
import { Link } from 'react-router-dom';
import Input from '../Forms/Input';
import Button, { StyledButton } from '../Forms/Button';
import useForm from '../../Hooks/useForm';
import { UserContext } from '../../UserContext';
import Error from '../Helper/Error';
import styled from 'styled-components';
import Head from '../Helper/Head';

const Form = styled.form`
  margin-bottom: 2rem;
`;

const LostPasswordLink = styled(Link)`
  & {
    display: inline-block;
    color: #666;
    padding: 0.5rem 0;
    line-height: 1;
  }
  &:after {
    content: '';
    height: 2px;
    width: 100%;
    background: currentColor;
    display: block;
  }
`;

const CreateAccount = styled.div`
  margin-top: 4rem;
  margin-bottom: 4rem;

  p {
    margin-top: 2rem;
    margin-bottom: 2rem;
  }
`;

const Subtitle = styled.h2`
  & {
    font-family: var(--type-second);
    line-height: 1;
    font-size: 2rem;
  }

  &:after {
    content: '';
    display: block;
    background: #ddd;
    height: 0.5rem;
    width: 3rem;
    border-radius: 0.2rem;
  }
`;

const LoginForm = () => {
  const username = useForm();
  const password = useForm();

  const { userLogin, error, loading } = React.useContext(UserContext);

  async function handleSubmit(event) {
    event.preventDefault();

    if (username.validate() && password.validate()) {
      userLogin(username.value, password.value);
    }
  }
  return (
    <section className="animateLeft">
      <Head title="Login" description="Log into your account." />
      <h1 className="title">Login</h1>
      <Form onSubmit={handleSubmit}>
        <Input name="username" type="text" label="Username" {...username} />
        <Input type="password" name="password" label="Password" {...password} />
        {loading ? (
          <Button disabled>Loading...</Button>
        ) : (
          <Button>Login</Button>
        )}
        <Error error={error && 'Username or password wrong.'} />
      </Form>
      <LostPasswordLink to="/login/lost">Lost password?</LostPasswordLink>
      <CreateAccount>
        <Subtitle>Create Account</Subtitle>
        <p>Don't have an account?</p>
        <StyledButton as={Link} to="/login/create">
          Create Account
        </StyledButton>
      </CreateAccount>
    </section>
  );
};

export default LoginForm;
