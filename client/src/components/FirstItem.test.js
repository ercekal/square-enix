import React from 'react';
import FirstItem from './FirstItem';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const item = {
    "id": 1,
    "title": "Lorem Ipsum",
    "artwork": "https://placehold.it/1920x1080",
    "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  }
  const tree = renderer
    .create(<FirstItem item={item} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});