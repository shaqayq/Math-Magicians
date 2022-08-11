import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter as Router } from 'react-router-dom';

import Navbar from '../../components/Navbar';
import Home from '../../components/Home';
import Calculator from '../../components/Calculator';
import Quote from '../../components/Quote';

it('Navbar Component test', () => {
  const navbarTest = renderer.create(<Router><Navbar /></Router>).toJSON();
  expect(navbarTest).toMatchSnapshot();
});

it('Home Component test', () => {
  const homeTest = renderer.create(<Router><Home /></Router>).toJSON();
  expect(homeTest).toMatchSnapshot();
});

it('Calculator Component test', () => {
  const homeTest = renderer.create(<Router><Calculator /></Router>).toJSON();
  expect(homeTest).toMatchSnapshot();
});

it('Quote Component test', () => {
  const homeTest = renderer.create(<Router><Quote /></Router>).toJSON();
  expect(homeTest).toMatchSnapshot();
});
