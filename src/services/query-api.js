// import request from 'superagent';

export const makeRequest = ({ method, url, body }) => {
  return fetch(url, {
    method,
    headers: {
      'Content-Type': 'application/json'
    },
    body
  })
    .then(res => res.json());
 
};
