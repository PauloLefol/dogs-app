import React from 'react';
import styled from 'styled-components';
import { PHOTO_DELETE } from '../../api';
import useFetch from '../../Hooks/useFetch';

const Button = styled.button`
  background: #ddd;
  padding: 0.3rem 0.6rem;
  line-height: 1;
  border: 1px solid transparent;
  font-size: 0.875rem;
  font-family: var(--type-first);
  cursor: pointer;
  border-radius: 0.4rem;
  transition: 0.1s;

  &:focus,
  &:hover {
    outline: none;
    background: white;
    box-shadow: 0 0 0 3px var(--light-gray);
    border-color: var(--dark-gray);
  }
`;

const PhotoDelete = ({ id }) => {
  const token = localStorage.getItem('token');
  const { loading, request } = useFetch();

  async function handleClick() {
    const confirm = window.confirm('Are you sure you want to delete?');
    if (confirm) {
      const { url, options } = PHOTO_DELETE(id, token);
      const { response } = await request(url, options);

      if (response.ok) window.location.reload();
    }
  }

  return (
    <>
      {loading ? (
        <Button disabled>Deleting</Button>
      ) : (
        <Button onClick={handleClick}>Delete</Button>
      )}
    </>
  );
};

export default PhotoDelete;
