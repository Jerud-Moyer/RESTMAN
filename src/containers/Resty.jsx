import React, { Component } from 'react';
import Controls from '../components/controls/Controls';
import Display from '../components/display/Display';
import History from '../components/history/History';
import { makeRequest } from '../services/query-api';
import styles from './Resty.css';

export default class Resty extends Component {
  state = {
    url: '',
    method: '',
    body: '',
    searches: [],
    results: {}
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }

  handleSubmit = e => {
    e.preventDefault();
    makeRequest({
      method: this.state.method,
      url: this.state.url,
      body: this.state.body 
    })
      .then(results => {
        this.setState({ results });
      })
      .then(
        this.setState(state => ({
          searches: [
            ...state.searches,
            { url: state.url, method: state.method }
          ]
        })));
  }

  render() {
    const { url, method, body, results, searches } = this.state;
    return (
      <div className={styles.Resty}>
        <div>
          <Controls 
            url={url}
            method={method}
            body={body}
            onChange={this.handleChange}
            onSubmit={this.handleSubmit}
          />
          <Display
            results={results}
          />
        </div>
        <div>
          <History
            searches={searches}
          />
        </div>
      </div>
    );
  }
}
