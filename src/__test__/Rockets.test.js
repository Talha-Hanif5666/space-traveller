import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from '../redux/store';
import Rockets from '../routes/Rockets';

describe('Rockets test', () => {
  test('to render all rockets: ', () => {
    const mockedRockets = [
      {
        id: 'rocket1',
        name: 'Rocket 1',
        desc: 'A rocket description',
        img: 'rocket1.jpg',
        booked: false,
      },
      {
        id: 'rocket2',
        name: 'Rocket 2',
        desc: 'A rocket description',
        img: 'rocket2.jpg',
        booked: false,
      },
    ];
    const rockets = render(
      <Provider store={store}>
        <BrowserRouter>
          <Rockets rockets={mockedRockets} />
        </BrowserRouter>
      </Provider>,
    );
    expect(rockets).toMatchSnapshot();
  });
});
