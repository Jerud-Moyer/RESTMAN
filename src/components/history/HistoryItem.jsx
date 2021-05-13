import React from 'react';
import PropTypes from 'prop-types';
import styles from './HistoryItem.css';

const HistoryItem = ({ method, url }) => (
  <div className={styles.HistoryItem}>
    <span>{method}</span>
    <span className={styles.url}>{url}</span>
  </div>
);

HistoryItem.propTypes = {
  url: PropTypes.string.isRequired,
  method: PropTypes.string.isRequired
};

export default HistoryItem;
