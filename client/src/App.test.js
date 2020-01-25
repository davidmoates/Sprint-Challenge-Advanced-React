import React from 'react';
import * as rtl from '@testing-library/react';
import App from './App';
import Navbar from "./components/Navbar";

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test('rtl renders without crashing', () => {
  render(<App />);
});

test('rtl renders without crashing', () => {
  render(<Navbar />);
});

test("navbar div class", () => {
  const { getByTestClass } = render(<Navbar />);

  getByTestClass("navbar");
});

test("App div class", () => {
  const { getByTestClass } = render(<App />);

  getByTestClass("App");
});
