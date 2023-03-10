import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from '../redux/store';
import MyProfile from '../routes/MyProfile';
import NotFound from '../routes/NotFound';

describe('MyProfile test', () => {
  const mockedRockets = [
    {
      id: 'rocket1',
      name: 'Rocket 1',
      desc: 'A rocket description',
      img: 'rocket1.jpg',
      booked: true,
    },
    {
      id: 'rocket2',
      name: 'Rocket 2',
      desc: 'A rocket description',
      img: 'rocket2.jpg',
      booked: true,
    },
  ];
  test('to render all rockets and missions booked: ', () => {
    const myProfile = render(
      <Provider store={store}>
        <BrowserRouter>
          <MyProfile myRockets={mockedRockets} />
        </BrowserRouter>
      </Provider>,
    );
    expect(myProfile).toMatchSnapshot();
  });
});

describe('NotFound test', () => {
  it('renders NotFound route', () => {
    render(<NotFound />);
    expect(screen).toMatchSnapshot();
  });
});
