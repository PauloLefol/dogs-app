import React from 'react';
import Input from '../Forms/Input';
import Button from '../Forms/Button';
import useForm from '../../Hooks/useForm';
import useFetch from '../../Hooks/useFetch';
import { PASSWORD_RESET } from '../../api';
import Error from '../Helper/Error';
import { useNavigate } from 'react-router-dom';
import Head from '../Helper/Head';

const LoginPasswordReset = () => {
  const [login, setLogin] = React.useState('');
  const [key, setKey] = React.useState('');
  const { loading, error, request } = useFetch();
  const newPassword = useForm('password');
  const navigate = useNavigate();

  React.useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const login = params.get('login');
    const key = params.get('key');
    if (login) setLogin(login);
    if (key) setKey(key);
  }, []);

  async function handleSubmit(event) {
    event.preventDefault();
    if (!newPassword.validate()) return;

    const { url, options } = PASSWORD_RESET({
      login,
      key,
      password: newPassword.value,
    });

    const { response } = await request(url, options);
    if (response.ok) navigate('/login');
  }

  return (
    <section className="animateLeft">
      <Head title="Reset your password" />
      <h1 className="title">Reset Password</h1>
      <form onSubmit={handleSubmit}>
        <Input
          label="New password"
          type="password"
          name="password"
          {...newPassword}
        />
        {loading ? (
          <Button disabled>Reseting...</Button>
        ) : (
          <Button>Reset</Button>
        )}
      </form>
      <Error error={error} />
    </section>
  );
};

export default LoginPasswordReset;
