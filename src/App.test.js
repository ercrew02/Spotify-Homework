import { render, screen } from '@testing-library/react';  
import Home from './HomeWork7/Pages/Auth';
import {Provider} from 'react-redux';
import store from './HomeWork7/reduxThing/store';
import Search from './HomeWork7/Pages/Search';

test('Home Page Test', () => {
  render(
    <Provider store={store}>
      <Home />
    </Provider>
  );
  const loginTes = screen.getByTestId('loginBtn'); 
  expect(loginTes).toBeInTheDocument();
});

test('Create Playlist Page Test', () => {
  render(
    <Provider store={store}>
      <Search/>
    </Provider>
  );
  const profileTes = screen.getByTestId('profileTest');
  const createListTes = screen.getByTestId('createListTest');
  const searchBarTes = screen.getByTestId('searchBarTest'); 
  const playlistTes = screen.getByTestId('playlistTest'); 

  expect(profileTes).toBeInTheDocument();
  expect(createListTes).toBeInTheDocument();
  expect(searchBarTes).toBeInTheDocument();
  expect(playlistTes).toBeInTheDocument();
});