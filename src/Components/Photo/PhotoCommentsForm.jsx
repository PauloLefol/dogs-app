import React from 'react';
import SendIcon from '../../Assets/enviar.svg?react';
import useFetch from '../../Hooks/useFetch';
import Error from '../Helper/Error';
import { COMMENT_POST } from '../../api';
import styles from './PhotoCommentsForm.module.css';

const PhotoCommentsForm = ({ id, setComments, single }) => {
  const { request, error } = useFetch();
  const [comment, setComment] = React.useState('');

  const sendButton = React.useRef(null);

  async function handleSubmit(event) {
    event.preventDefault();
    const token = localStorage.getItem('token');
    const { url, options } = COMMENT_POST(id, { comment }, token);
    const { response, json } = await request(url, options);
    if (response.ok) {
      setComment('');
      setComments((comments) => [...comments, json]);
      sendButton.current.blur();
    }
  }

  return (
    <form
      className={`${styles.form} ${single ? styles.single : ''}`}
      onSubmit={handleSubmit}
    >
      <textarea
        className={styles.textarea}
        id="comment"
        name="comment"
        placeholder="Add comment"
        value={comment}
        onChange={({ target }) => setComment(target.value)}
      />
      <button ref={sendButton} className={styles.button}>
        <SendIcon />
      </button>
      <Error error={error} />
    </form>
  );
};

export default PhotoCommentsForm;
