import React from 'react';
import { render, cleanup } from '@testing-library/react';
import History from './History';

describe('History component', () => {
  afterEach(() => cleanup());

  it('renders History', () => {
    const { asFragment } = render(<History
      searches={[
        {
          method: 'GET',
          url: 'url.com'
        },
        {
          method: 'PUT',
          url: 'helloworld.com'
        },
        { 
          method: 'DELETE',
          url: 'immaprogrammer.com'
        }
      ]}
    />);
    expect(asFragment()).toMatchSnapshot();
  });
});
