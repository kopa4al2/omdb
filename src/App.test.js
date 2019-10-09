import React from 'react';
import ReactDOM from 'react-dom';
import OmdbApp from './OmdbApp';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<OmdbApp />, div);
  ReactDOM.unmountComponentAtNode(div);
});
