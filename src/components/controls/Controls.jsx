import React from 'react';
import PropTypes from 'prop-types';
import styles from './Controls.css';

const Controls =  ({
  url,
  onChange,
  onSubmit
}) => (
  <>
    <header>
      <h1 className={styles.header}>RESTMAN</h1>
    </header>
    <form className={styles.form} onSubmit={onSubmit}>
      <label htmlFor="url">URL</label>
      <input className={styles.urlinput}
        id="url"
        type="url"
        name="url"
        value={url}
        onChange={onChange}
      />
      <label className={styles.Control} htmlFor="method">GET</label>
      <input
        id="method"
        type="radio"
        name="method"
        value="GET"
        onChange={onChange}
      />
      <label className={styles.Control} htmlFor="method">POST</label>
      <input id="method"
        type="radio"
        name="method"
        value="POST"
        onChange={onChange}
      />
      <label className={styles.Control} htmlFor="method">PUT</label>
      <input id="method"
        type="radio"
        name="method"
        value="PUT"
        onChange={onChange}
      />
      <label className={styles.Control} htmlFor="method">DELETE</label>
      <input id="method"
        type="radio"
        name="method"
        value="DELETE"
        onChange={onChange}
      />
      <button type="submit">Submit</button>


    </form>
  </>
);

Controls.propTypes = {
  url: PropTypes.string.isRequired,
  method: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
};

export default Controls;
