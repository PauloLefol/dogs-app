import PropTypes from 'prop-types';
import React from 'react';

const Head = ({ title, description = '' }) => {
  React.useEffect(() => {
    document.title = title + ' | Dogs';
    document
      .querySelector("meta[name='description']")
      .setAttribute('content', description);
  }, []);
  return <></>;
};

Head.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
};

export default Head;
