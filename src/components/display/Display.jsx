import React from 'react';
import PropTypes from 'prop-types';
import ReactJson from 'react-json-view';
import styles from './Display.css';

const Display = ({ results }) => {
  
  return (
    <div className={styles.Display}>
      {
        <ReactJson src = {results}  />
      }
    </div>
  );
};

Display.propTypes = {
  results: PropTypes.object
};

export default Display;
