import React from 'react';
import FeedModal from './FeedModal';
import FeedPhotos from './FeedPhotos';
import PropTypes from 'prop-types';
import Head from '../Helper/Head';

const Feed = ({ user = 0, title, description = '' }) => {
  const [modalPhoto, setModalPhoto] = React.useState(null);
  const [pages, setPages] = React.useState([1]);
  const [infinite, setInfinite] = React.useState(true);
  const [wait, setWait] = React.useState(false);

  React.useEffect(() => {
    if (!infinite) return;

    function infiniteScroll() {
      const scroll = window.scrollY;
      const height = document.body.offsetHeight - window.innerHeight;
      if (scroll > height * 0.75 && !wait) {
        setWait(true);
        setPages((pages) => [...pages, pages.length + 1]);
      }
    }
    window.addEventListener('wheel', infiniteScroll);
    window.addEventListener('scroll', infiniteScroll);

    return () => {
      window.removeEventListener('wheel', infiniteScroll);
      window.removeEventListener('scroll', infiniteScroll);
    };
  }, [infinite]);
  return (
    <div>
      <Head title={title} description={description} />
      {modalPhoto && (
        <FeedModal photo={modalPhoto} setModalPhoto={setModalPhoto} />
      )}
      {pages.map((page) => (
        <FeedPhotos
          user={user}
          key={page}
          page={page}
          setInfinite={setInfinite}
          setWait={setWait}
          setModalPhoto={setModalPhoto}
        />
      ))}
      {!infinite && !user && (
        <p
          style={{
            textAlign: 'center',
            padding: '2rem 0 4rem 0',
            color: '#888',
          }}
        >
          There are no more posts.
        </p>
      )}
    </div>
  );
};

Feed.propTypes = {
  user: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.number.isRequired,
  ]),
};

export default Feed;
