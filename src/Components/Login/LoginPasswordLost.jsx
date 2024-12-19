import React from 'react';
import Input from '../Forms/Input';
import Button from '../Forms/Button';
import useForm from '../../Hooks/useForm';
import useFetch from '../../Hooks/useFetch';
import { PASSWORD_LOST } from '../../api';
import Error from '../Helper/Error';
import Head from '../Helper/Head';

const LoginPasswordLost = () => {
  const login = useForm();
  const { data, loading, error, request } = useFetch();

  async function handleSubmit(event) {
    event.preventDefault();

    if (!login.validate()) return;

    const { url, options } = PASSWORD_LOST({
      login: login.value,
      url: window.location.href.replace('lost', 'reset'),
    });
    await request(url, options);
  }
  return (
    <section className="animateLeft">
      <Head title="Lost password" />
      <h1 className="title">Lost password?</h1>
      {data ? (
        <p style={{ color: '#b4dd1e' }}>{data}</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <Input label="User / Email" type="text" name="email" {...login} />
          {loading ? (
            <Button disabled>Sending...</Button>
          ) : (
            <Button>Send Email</Button>
          )}
          <Error error={error} />
        </form>
      )}
    </section>
  );
};

export default LoginPasswordLost;
