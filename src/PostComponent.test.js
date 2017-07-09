import React from 'react';
import ReactDOM from 'react-dom';
import PostComponent from './PostComponent';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<PostComponent />, div);
});
