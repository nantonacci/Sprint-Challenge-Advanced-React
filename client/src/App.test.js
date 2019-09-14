import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import App from './App';
import Nav from './components/Nav.js';


test('App renders without crashing', () => {
  const div = document.createElement('div');
  render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test('Nav renders without crashing', () => {
  const div = document.createElement('div');
  render(<Nav />, div);
  ReactDOM.unmountComponentAtNode(div);
});

