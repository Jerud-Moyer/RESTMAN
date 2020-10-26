import React from 'react';
import PropTypes from 'prop-types';
import HistoryItem from './HistoryItem';
import styles from './History.css';

const History = ({ searches }) => {

  const historyElements = searches.map(item => (
    <li key={ item.url }>
      <HistoryItem {...item} />
    </li>
  ));

  return (
    <div className={styles.History}>
      <h1>History</h1>
      <ul className={styles.Item}>
        {historyElements}
      </ul>
    </div>
  );

};

History.propTypes = {
  searches: PropTypes.arrayOf(PropTypes.shape({
    url: PropTypes.string.isRequired,
    method: PropTypes.string.isRequired
  })).isRequired
};

export default History;
