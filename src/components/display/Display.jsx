import React from 'react';
import PropTypes from 'prop-types';
import ReactJson from 'react-json-view';

const Display = ({ results }) => {
  
  return (
    <div>
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
