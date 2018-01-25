import React from 'react';
import ReactDOM from 'react-dom';
import PostAddForm from './PostAddForm';

test('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<PostAddForm />, div);
});
